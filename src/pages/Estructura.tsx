import { DocsLayout } from "../layout/Docs.tsx";
import { TableOfContents } from "../components/TableOfContents.tsx";
import modulosData from "../data/modulos.json";
import Note from "../components/Notes.tsx";
import Codeblock from "../components/Codeblock.tsx";

const estructuraProyectoCode = `mi-app/
├── src/
│   ├── main/
│   │   ├── java/
│   │   │   └── com/ejemplo/miapp/
│   │   │       ├── MiAppApplication.java
│   │   │       ├── config/
│   │   │       │   └── SecurityConfig.java
│   │   │       ├── controller/
│   │   │       │   └── UsuarioController.java
│   │   │       ├── dto/
│   │   │       │   ├── UsuarioRequest.java
│   │   │       │   └── UsuarioResponse.java
│   │   │       ├── entity/
│   │   │       │   └── Usuario.java
│   │   │       ├── repository/
│   │   │       │   └── UsuarioRepository.java
│   │   │       ├── service/
│   │   │       │   └── UsuarioService.java
│   │   │       ├── mapper/
│   │   │       │   └── UsuarioMapper.java
│   │   │       ├── exception/
│   │   │       │   ├── ResourceNotFoundException.java
│   │   │       │   └── GlobalExceptionHandler.java
│   │   │       └── util/
│   │   │           └── Constantes.java
│   │   └── resources/
│   │       ├── application.properties
│   │       └── static/
│   └── test/
│       └── java/
│           └── com/ejemplo/miapp/
├── pom.xml
└── mvnw`;

const entityCode = `<span class="keyword">@Entity</span>
<span class="keyword">public class</span> <span class="string">Usuario</span> {
    <span class="keyword">@Id</span>
    <span class="keyword">@GeneratedValue</span>
    <span class="keyword">private</span> <span class="string">Long</span> id;

    <span class="keyword">private</span> <span class="string">String</span> nombre;
    <span class="keyword">private</span> <span class="string">String</span> email;
}`;

const dtoCode = `<span class="keyword">public class</span> <span class="string">UsuarioRequest</span> {
    <span class="keyword">private</span> <span class="string">String</span> nombre;
    <span class="keyword">private</span> <span class="string">String</span> email;
}

<span class="keyword">public class</span> <span class="string">UsuarioResponse</span> {
    <span class="keyword">private</span> <span class="string">Long</span> id;
    <span class="keyword">private</span> <span class="string">String</span> nombre;
    <span class="keyword">private</span> <span class="string">String</span> email;
}`;

const repositoryCode = `<span class="keyword">public interface</span> <span class="string">UsuarioRepository</span>
    <span class="keyword">extends</span> <span class="string">JpaRepository</span>&lt;<span class="string">Usuario</span>, <span class="string">Long</span>&gt; {
}`;

const serviceCode = `<span class="keyword">@Service</span>
<span class="keyword">public class</span> <span class="string">UsuarioService</span> {

    <span class="keyword">private final</span> <span class="string">UsuarioRepository</span> usuarioRepository;

    <span class="keyword">public</span> <span class="string">UsuarioService</span>(<span class="string">UsuarioRepository</span> usuarioRepository) {
        <span class="keyword">this</span>.usuarioRepository = usuarioRepository;
    }

    <span class="keyword">public</span> <span class="string">List&lt;Usuario&gt;</span> listar() {
        <span class="keyword">return</span> usuarioRepository.findAll();
    }
}`;

const controllerCode = `<span class="keyword">@RestController</span>
<span class="keyword">@RequestMapping</span>(<span class="string">"/api/usuarios"</span>)
<span class="keyword">public class</span> <span class="string">UsuarioController</span> {

    <span class="keyword">private final</span> <span class="string">UsuarioService</span> usuarioService;

    <span class="keyword">public</span> <span class="string">UsuarioController</span>(<span class="string">UsuarioService</span> usuarioService) {
        <span class="keyword">this</span>.usuarioService = usuarioService;
    }

    <span class="keyword">@GetMapping</span>
    <span class="keyword">public</span> <span class="string">List&lt;UsuarioResponse&gt;</span> listar() {
        <span class="comment">// convertir entidades a DTOs antes de responder</span>
        <span class="keyword">return</span> List.of();
    }
}`;

const mapperCode = `<span class="keyword">@Component</span>
<span class="keyword">public class</span> <span class="string">UsuarioMapper</span> {

    <span class="keyword">public</span> <span class="string">UsuarioResponse</span> toResponse(<span class="string">Usuario</span> usuario) {
        <span class="string">UsuarioResponse</span> response = <span class="keyword">new</span> <span class="string">UsuarioResponse</span>();
        response.setId(usuario.getId());
        response.setNombre(usuario.getNombre());
        response.setEmail(usuario.getEmail());
        <span class="keyword">return</span> response;
    }

    <span class="keyword">public</span> <span class="string">Usuario</span> toEntity(<span class="string">UsuarioRequest</span> request) {
        <span class="string">Usuario</span> usuario = <span class="keyword">new</span> <span class="string">Usuario</span>();
        usuario.setNombre(request.getNombre());
        usuario.setEmail(request.getEmail());
        <span class="keyword">return</span> usuario;
    }
}`;

export const Estructura = () => {
  return (
    <DocsLayout
      toc={<TableOfContents items={modulosData.sidebar[1].items[4].toc} />}
    >
      <h1 className="text-4xl font-extrabold tracking-tight text-[#141414] mb-4">
        Estructura de proyecto
      </h1>

      <p className="text-xl text-[#757575] leading-relaxed">
        Una buena estructura en Spring Boot ayuda a separar responsabilidades y
        hace que el proyecto sea más fácil de leer, mantener y escalar. La idea
        principal es que cada carpeta tenga un propósito claro: unas reciben
        peticiones, otras contienen lógica de negocio y otras se encargan del
        acceso a datos.
      </p>

      <h2
        id="vision-general"
        className="text-2xl font-bold mt-12 mb-4 text-[#141414] scroll-mt-20"
      >
        Visión general
      </h2>

      <p className="text-base leading-7 text-[#141414] my-6">
        En proyectos pequeños podrías poner casi todo junto, pero a medida que
        la aplicación crece conviene ordenar el código por capas o por
        responsabilidad. Una estructura bien definida evita mezclar lógica de
        negocio con acceso a base de datos o con detalles de la API.
      </p>

      <p className="text-base leading-7 text-[#141414] my-6">
        En una organización clásica de Spring Boot suelen aparecer carpetas como{" "}
        <code className="bg-[#f7f7f7] px-1.5 py-0.5 rounded text-sm">
          controller
        </code>
        ,{" "}
        <code className="bg-[#f7f7f7] px-1.5 py-0.5 rounded text-sm">
          service
        </code>
        ,{" "}
        <code className="bg-[#f7f7f7] px-1.5 py-0.5 rounded text-sm">
          repository
        </code>
        ,{" "}
        <code className="bg-[#f7f7f7] px-1.5 py-0.5 rounded text-sm">
          entity
        </code>{" "}
        y{" "}
        <code className="bg-[#f7f7f7] px-1.5 py-0.5 rounded text-sm">dto</code>.
      </p>

      <Note title="Idea principal">
        La estructura no existe solo para ordenar archivos. También sirve para
        dejar claro qué responsabilidad tiene cada parte del sistema.
      </Note>

      <h2
        id="estructura-base"
        className="text-2xl font-bold mt-12 mb-4 text-[#141414] scroll-mt-20"
      >
        Estructura base
      </h2>

      <p className="text-base leading-7 text-[#141414] my-6">
        Esta es una estructura típica de un proyecto Spring Boot con capas,
        DTOs, repositorios, servicios y manejo de excepciones:
      </p>

      <Codeblock code={estructuraProyectoCode} title="Terminal" />

      <p className="text-base leading-7 text-[#141414] my-6">
        No es obligatorio usar exactamente esta distribución, pero sí conviene
        mantener consistencia. Cuando todos los archivos están en lugares
        predecibles, el proyecto se vuelve mucho más fácil de recorrer.
      </p>

      <h2
        id="entity"
        className="text-2xl font-bold mt-12 mb-4 text-[#141414] scroll-mt-20"
      >
        entity
      </h2>

      <p className="text-base leading-7 text-[#141414] my-6">
        La carpeta{" "}
        <code className="bg-[#f7f7f7] px-1.5 py-0.5 rounded text-sm">
          entity
        </code>{" "}
        contiene las clases que representan la información persistida en la base
        de datos. Normalmente estas clases se anotan con{" "}
        <code className="bg-[#f7f7f7] px-1.5 py-0.5 rounded text-sm">
          @Entity
        </code>
        .
      </p>

      <Codeblock code={entityCode} title="Usuario.java" />

      <p className="text-base leading-7 text-[#141414] my-6">
        Estas clases modelan tablas y relaciones. Su objetivo principal es
        representar datos, no definir cómo responder una API ni contener reglas
        complejas del negocio.
      </p>

      <h2
        id="dto"
        className="text-2xl font-bold mt-12 mb-4 text-[#141414] scroll-mt-20"
      >
        dto
      </h2>

      <p className="text-base leading-7 text-[#141414] my-6">
        La carpeta{" "}
        <code className="bg-[#f7f7f7] px-1.5 py-0.5 rounded text-sm">dto</code>{" "}
        agrupa objetos usados para transportar datos entre capas o hacia el
        exterior. Es común separar DTOs de entrada y de salida, por ejemplo{" "}
        <code className="bg-[#f7f7f7] px-1.5 py-0.5 rounded text-sm">
          UsuarioRequest
        </code>{" "}
        y{" "}
        <code className="bg-[#f7f7f7] px-1.5 py-0.5 rounded text-sm">
          UsuarioResponse
        </code>
        .
      </p>

      <Codeblock code={dtoCode} title="DTOs.java" />

      <p className="text-base leading-7 text-[#141414] my-6">
        Esto ayuda a no exponer directamente las entidades en la API y permite
        decidir con más precisión qué datos recibe y devuelve el sistema.
      </p>

      <h2
        id="repository"
        className="text-2xl font-bold mt-12 mb-4 text-[#141414] scroll-mt-20"
      >
        repository
      </h2>

      <p className="text-base leading-7 text-[#141414] my-6">
        La carpeta{" "}
        <code className="bg-[#f7f7f7] px-1.5 py-0.5 rounded text-sm">
          repository
        </code>{" "}
        contiene interfaces encargadas del acceso a datos. Aquí se definen los
        repositorios que hablan con la base de datos a través de Spring Data
        JPA.
      </p>

      <Codeblock code={repositoryCode} title="UsuarioRepository.java" />

      <p className="text-base leading-7 text-[#141414] my-6">
        Los repositorios deben enfocarse en consultar, guardar, actualizar o
        eliminar datos. No deberían encargarse de lógica de negocio ni de
        construir respuestas HTTP.
      </p>

      <h2
        id="service"
        className="text-2xl font-bold mt-12 mb-4 text-[#141414] scroll-mt-20"
      >
        service
      </h2>

      <p className="text-base leading-7 text-[#141414] my-6">
        La carpeta{" "}
        <code className="bg-[#f7f7f7] px-1.5 py-0.5 rounded text-sm">
          service
        </code>{" "}
        contiene la lógica de negocio. Esta capa actúa como intermediaria entre
        controladores y repositorios.
      </p>

      <Codeblock code={serviceCode} title="UsuarioService.java" />

      <p className="text-base leading-7 text-[#141414] my-6">
        Aquí suelen colocarse validaciones de negocio, coordinación entre varias
        operaciones, transacciones y transformaciones necesarias antes de
        guardar o devolver datos.
      </p>

      <Note title="Regla útil">
        El controlador recibe la petición, el servicio toma decisiones y el
        repositorio accede a la base de datos.
      </Note>

      <h2
        id="controller"
        className="text-2xl font-bold mt-12 mb-4 text-[#141414] scroll-mt-20"
      >
        controller
      </h2>

      <p className="text-base leading-7 text-[#141414] my-6">
        La carpeta{" "}
        <code className="bg-[#f7f7f7] px-1.5 py-0.5 rounded text-sm">
          controller
        </code>{" "}
        agrupa los endpoints HTTP. Su responsabilidad es recibir requests,
        delegar al servicio correspondiente y devolver responses.
      </p>

      <Codeblock code={controllerCode} title="UsuarioController.java" />

      <p className="text-base leading-7 text-[#141414] my-6">
        Los controladores no deberían contener demasiada lógica. Lo ideal es que
        sean delgados y que su trabajo principal sea conectarse con la capa de
        servicios.
      </p>

      <h2
        id="mapper"
        className="text-2xl font-bold mt-12 mb-4 text-[#141414] scroll-mt-20"
      >
        mapper
      </h2>

      <p className="text-base leading-7 text-[#141414] my-6">
        La carpeta{" "}
        <code className="bg-[#f7f7f7] px-1.5 py-0.5 rounded text-sm">
          mapper
        </code>{" "}
        es útil cuando quieres separar la conversión entre entidades y DTOs.
        Esto evita repetir la misma lógica de transformación en controladores o
        servicios.
      </p>

      <Codeblock code={mapperCode} title="UsuarioMapper.java" />

      <p className="text-base leading-7 text-[#141414] my-6">
        En proyectos pequeños esta conversión puede hacerse dentro del servicio,
        pero cuando el dominio crece conviene dedicar una clase específica a ese
        trabajo.
      </p>

      <h2
        id="otras-carpetas"
        className="text-2xl font-bold mt-12 mb-4 text-[#141414] scroll-mt-20"
      >
        Otras carpetas útiles
      </h2>

      <div className="grid md:grid-cols-2 gap-6 my-8">
        <div className="p-6 border border-[#f2f2f2] rounded-xl">
          <h3 className="font-bold text-lg mb-2 text-[#141414]">config</h3>
          <p className="text-sm text-[#757575]">
            Configuraciones de seguridad, beans personalizados, CORS o Swagger.
          </p>
        </div>

        <div className="p-6 border border-[#f2f2f2] rounded-xl">
          <h3 className="font-bold text-lg mb-2 text-[#141414]">exception</h3>
          <p className="text-sm text-[#757575]">
            Excepciones personalizadas y manejadores globales de errores.
          </p>
        </div>

        <div className="p-6 border border-[#f2f2f2] rounded-xl">
          <h3 className="font-bold text-lg mb-2 text-[#141414]">util</h3>
          <p className="text-sm text-[#757575]">
            Constantes o utilidades compartidas, siempre que tengan un propósito
            claro.
          </p>
        </div>

        <div className="p-6 border border-[#f2f2f2] rounded-xl">
          <h3 className="font-bold text-lg mb-2 text-[#141414]">resources</h3>
          <p className="text-sm text-[#757575]">
            Archivos de configuración, plantillas, contenido estático y perfiles
            del entorno.
          </p>
        </div>
      </div>

      <Note title="Buenas prácticas">
        Evita mezclar responsabilidades. Si una clase recibe requests, además
        hace consultas SQL y también transforma DTOs, probablemente esa clase ya
        está haciendo demasiado.
      </Note>

      <Note title="Resumen">
        Una estructura clara en Spring Boot separa entidades, DTOs,
        repositorios, servicios, controladores y utilidades de soporte. Esto
        mejora la mantenibilidad del proyecto y hace más simple trabajar en
        equipo o escalar la aplicación con el tiempo.
      </Note>
    </DocsLayout>
  );
};
