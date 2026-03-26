import { DocsLayout } from "../layout/Docs.tsx";
import { TableOfContents } from "../components/TableOfContents.tsx";
import modulosData from "../data/modulos.json";
import Note from "../components/Notes.tsx";
import Codeblock from "../components/Codeblock.tsx";

const apiDesignCode = `<span class="keyword">import</span> <span class="string">org.springframework.web.bind.annotation.GetMapping</span>;
<span class="keyword">import</span> <span class="string">org.springframework.web.bind.annotation.PostMapping</span>;
<span class="keyword">import</span> <span class="string">org.springframework.web.bind.annotation.RequestBody</span>;
<span class="keyword">import</span> <span class="string">org.springframework.web.bind.annotation.RequestMapping</span>;
<span class="keyword">import</span> <span class="string">org.springframework.web.bind.annotation.RestController</span>;
<span class="keyword">import</span> <span class="string">java.util.List</span>;

<span class="keyword">record</span> <span class="string">UsuarioRequest</span>(String nombre, String email) {}
<span class="keyword">record</span> <span class="string">UsuarioResponse</span>(Long id, String nombre, String email) {}

<span class="keyword">@RestController</span>
<span class="keyword">@RequestMapping</span>(<span class="string">"/api/usuarios"</span>)
<span class="keyword">public class</span> <span class="string">UsuarioController</span> {

    <span class="keyword">@GetMapping</span>
    <span class="keyword">public</span> <span class="string">List&lt;UsuarioResponse&gt;</span> listar() {
        <span class="keyword">return</span> List.of();
    }

    <span class="keyword">@PostMapping</span>
    <span class="keyword">public</span> <span class="string">UsuarioResponse</span> crear(<span class="string">@RequestBody</span> UsuarioRequest request) {
        <span class="keyword">return</span> <span class="keyword">new</span> <span class="string">UsuarioResponse</span>(1L, request.nombre(), request.email());
    }
}`;

const versionadoCode = `<span class="keyword">import</span> <span class="string">org.springframework.web.bind.annotation.GetMapping</span>;
<span class="keyword">import</span> <span class="string">org.springframework.web.bind.annotation.RequestMapping</span>;
<span class="keyword">import</span> <span class="string">org.springframework.web.bind.annotation.RestController</span>;

<span class="keyword">@RestController</span>
<span class="keyword">@RequestMapping</span>(<span class="string">"/api/v1/productos"</span>)
<span class="keyword">public class</span> <span class="string">ProductoV1Controller</span> {

    <span class="keyword">@GetMapping</span>
    <span class="keyword">public</span> <span class="string">String</span> listar() {
        <span class="keyword">return</span> <span class="string">"Listado versión 1"</span>;
    }
}

<span class="keyword">@RestController</span>
<span class="keyword">@RequestMapping</span>(<span class="string">"/api/v2/productos"</span>)
<span class="keyword">public class</span> <span class="string">ProductoV2Controller</span> {

    <span class="keyword">@GetMapping</span>
    <span class="keyword">public</span> <span class="string">String</span> listar() {
        <span class="keyword">return</span> <span class="string">"Listado versión 2 con más datos"</span>;
    }
}`;

const swaggerCode = `<span class="keyword">import</span> <span class="string">io.swagger.v3.oas.annotations.Operation</span>;
<span class="keyword">import</span> <span class="string">io.swagger.v3.oas.annotations.tags.Tag</span>;
<span class="keyword">import</span> <span class="string">org.springframework.web.bind.annotation.GetMapping</span>;
<span class="keyword">import</span> <span class="string">org.springframework.web.bind.annotation.RequestMapping</span>;
<span class="keyword">import</span> <span class="string">org.springframework.web.bind.annotation.RestController</span>;
<span class="keyword">import</span> <span class="string">java.util.List</span>;

<span class="string">@Tag</span>(name = <span class="string">"Usuarios"</span>, description = <span class="string">"Operaciones sobre usuarios"</span>)
<span class="string">@RestController</span>
<span class="string">@RequestMapping</span>(<span class="string">"/api/usuarios"</span>)
<span class="keyword">public class</span> <span class="string">UsuarioController</span> {

    <span class="string">@Operation</span>(summary = <span class="string">"Listar usuarios"</span>)
    <span class="string">@GetMapping</span>
    <span class="keyword">public</span> <span class="string">List&lt;String&gt;</span> listar() {
        <span class="keyword">return</span> List.of(<span class="string">"Ana"</span>, <span class="string">"Luis"</span>);
    }
}`;

const paginacionCode = `<span class="keyword">import</span> <span class="string">org.springframework.data.domain.Page</span>;
<span class="keyword">import</span> <span class="string">org.springframework.data.domain.Pageable</span>;
<span class="keyword">import</span> <span class="string">org.springframework.web.bind.annotation.GetMapping</span>;
<span class="keyword">import</span> <span class="string">org.springframework.web.bind.annotation.RequestMapping</span>;
<span class="keyword">import</span> <span class="string">org.springframework.web.bind.annotation.RequestParam</span>;
<span class="keyword">import</span> <span class="string">org.springframework.web.bind.annotation.RestController</span>;

<span class="keyword">@RestController</span>
<span class="keyword">@RequestMapping</span>(<span class="string">"/api/usuarios"</span>)
<span class="keyword">public class</span> <span class="string">UsuarioController</span> {

    <span class="keyword">@GetMapping</span>
    <span class="keyword">public</span> <span class="string">Page&lt;Usuario&gt;</span> listar(
        Pageable pageable,
        <span class="string">@RequestParam</span>(required = false) String nombre
    ) {
        <span class="comment">// ejemplo: /api/usuarios?page=0&size=10&sort=nombre,asc&nombre=ana</span>
        <span class="keyword">return</span> Page.empty();
    }
}`;

const responseEntityCode = `<span class="keyword">import</span> <span class="string">org.springframework.http.HttpStatus</span>;
<span class="keyword">import</span> <span class="string">org.springframework.http.ResponseEntity</span>;
<span class="keyword">import</span> <span class="string">org.springframework.web.bind.annotation.GetMapping</span>;
<span class="keyword">import</span> <span class="string">org.springframework.web.bind.annotation.PathVariable</span>;
<span class="keyword">import</span> <span class="string">org.springframework.web.bind.annotation.RequestMapping</span>;
<span class="keyword">import</span> <span class="string">org.springframework.web.bind.annotation.RestController</span>;

<span class="keyword">@RestController</span>
<span class="keyword">@RequestMapping</span>(<span class="string">"/api/usuarios"</span>)
<span class="keyword">public class</span> <span class="string">UsuarioController</span> {

    <span class="keyword">@GetMapping</span>(<span class="string">"/{id}"</span>)
    <span class="keyword">public</span> <span class="string">ResponseEntity&lt;String&gt;</span> obtener(<span class="string">@PathVariable</span> Long id) {
        <span class="keyword">if</span> (id.equals(1L)) {
            <span class="keyword">return</span> ResponseEntity.ok(<span class="string">"Usuario encontrado"</span>);
        }

        <span class="keyword">return</span> ResponseEntity.status(HttpStatus.NOT_FOUND).body(<span class="string">"Usuario no encontrado"</span>);
    }
}`;

export const Api = () => {
  return (
    <DocsLayout
      toc={<TableOfContents items={modulosData.sidebar[2].items[2].toc} />}
    >
      <h1 className="text-4xl font-extrabold tracking-tight text-[#141414] mb-4">
        APIs REST
      </h1>

      <p className="text-xl text-[#757575] leading-relaxed">
        Spring Boot es una herramienta muy utilizada para construir APIs REST.
        Permite definir endpoints claros, estructurar respuestas, versionar la
        API, documentarla y agregar paginación o filtros para trabajar de forma
        ordenada con los datos.
      </p>

      <h2
        id="diseno-api"
        className="text-2xl font-bold mt-12 mb-4 text-[#141414] scroll-mt-20"
      >
        Diseño de APIs
      </h2>

      <p className="text-base leading-7 text-[#141414] my-6">
        Diseñar una API no consiste solo en exponer rutas. También implica
        decidir cómo nombrar los recursos, qué estructura tendrán las respuestas
        y cómo mantener consistencia entre endpoints.
      </p>

      <p className="text-base leading-7 text-[#141414] my-6">
        En una API REST suele ser buena práctica usar nombres en plural para los
        recursos, separar claramente requests y responses, y devolver códigos
        HTTP coherentes según el resultado de cada operación.
      </p>

      <Codeblock code={apiDesignCode} title="UsuarioController.java" />

      <p className="text-base leading-7 text-[#141414] my-6">
        En este ejemplo, la API trabaja sobre el recurso{" "}
        <code className="bg-[#f7f7f7] px-1.5 py-0.5 rounded text-sm">
          usuarios
        </code>
        , recibe un objeto de entrada y devuelve una respuesta separada. Este
        enfoque ayuda a mantener más control sobre los datos expuestos.
      </p>

      <Codeblock code={responseEntityCode} title="ResponseEntity.java" />

      <p className="text-base leading-7 text-[#141414] my-6">
        Cuando necesitas más control sobre el estado HTTP o el cuerpo de la
        respuesta, puedes usar{" "}
        <code className="bg-[#f7f7f7] px-1.5 py-0.5 rounded text-sm">
          ResponseEntity
        </code>
        . Esto resulta útil para responder con estados como{" "}
        <code className="bg-[#f7f7f7] px-1.5 py-0.5 rounded text-sm">
          200 OK
        </code>
        ,{" "}
        <code className="bg-[#f7f7f7] px-1.5 py-0.5 rounded text-sm">
          201 Created
        </code>{" "}
        o{" "}
        <code className="bg-[#f7f7f7] px-1.5 py-0.5 rounded text-sm">
          404 Not Found
        </code>
        .
      </p>

      <Note title="Idea principal">
        Una API bien diseñada no solo funciona: también es fácil de entender,
        mantener y consumir desde frontend u otros servicios.
      </Note>

      <h2
        id="versionado"
        className="text-2xl font-bold mt-12 mb-4 text-[#141414] scroll-mt-20"
      >
        Versionado
      </h2>

      <p className="text-base leading-7 text-[#141414] my-6">
        El <span className="font-semibold">versionado</span> permite evolucionar
        la API sin romper integraciones existentes. Cuando cambias contratos,
        estructuras de respuesta o comportamientos importantes, conviene exponer
        una nueva versión en lugar de modificar la anterior de forma abrupta.
      </p>

      <p className="text-base leading-7 text-[#141414] my-6">
        Una estrategia común es incluir la versión en la URL, por ejemplo{" "}
        <code className="bg-[#f7f7f7] px-1.5 py-0.5 rounded text-sm">
          /api/v1
        </code>{" "}
        o{" "}
        <code className="bg-[#f7f7f7] px-1.5 py-0.5 rounded text-sm">
          /api/v2
        </code>
        .
      </p>

      <Codeblock code={versionadoCode} title="Versionado.java" />

      <p className="text-base leading-7 text-[#141414] my-6">
        De esta forma, clientes antiguos pueden seguir usando la versión
        anterior mientras nuevos consumidores trabajan con la más reciente.
      </p>

      <div className="grid md:grid-cols-2 gap-6 my-8">
        <div className="p-6 border border-[#f2f2f2] rounded-xl">
          <h3 className="font-bold text-lg mb-2 text-[#141414]">
            Evolución controlada
          </h3>
          <p className="text-sm text-[#757575]">
            Permite mejorar la API sin romper integraciones que ya dependen de
            una versión existente.
          </p>
        </div>

        <div className="p-6 border border-[#f2f2f2] rounded-xl">
          <h3 className="font-bold text-lg mb-2 text-[#141414]">
            Compatibilidad
          </h3>
          <p className="text-sm text-[#757575]">
            Los consumidores pueden migrar a su ritmo cuando exista una nueva
            versión.
          </p>
        </div>
      </div>

      <h2
        id="documentacion"
        className="text-2xl font-bold mt-12 mb-4 text-[#141414] scroll-mt-20"
      >
        Swagger / OpenAPI
      </h2>

      <p className="text-base leading-7 text-[#141414] my-6">
        Documentar la API es importante para que otros desarrolladores entiendan
        cómo usarla. En Spring Boot es común trabajar con{" "}
        <span className="font-semibold">OpenAPI</span> y herramientas como
        Swagger UI para generar una documentación navegable e interactiva.
      </p>

      <Codeblock code={swaggerCode} title="UsuarioController.java" />

      <p className="text-base leading-7 text-[#141414] my-6">
        Con anotaciones como{" "}
        <code className="bg-[#f7f7f7] px-1.5 py-0.5 rounded text-sm">@Tag</code>{" "}
        y{" "}
        <code className="bg-[#f7f7f7] px-1.5 py-0.5 rounded text-sm">
          @Operation
        </code>
        , puedes describir controladores y endpoints para que queden mejor
        representados en la documentación.
      </p>

      <Note title="Ventaja principal">
        Una buena documentación reduce dudas, acelera integraciones y facilita
        probar la API sin revisar todo el código fuente.
      </Note>

      <h2
        id="paginacion"
        className="text-2xl font-bold mt-12 mb-4 text-[#141414] scroll-mt-20"
      >
        Paginación y filtros
      </h2>

      <p className="text-base leading-7 text-[#141414] my-6">
        Cuando un recurso puede devolver muchos registros, es recomendable usar
        <span className="font-semibold"> paginación</span> para evitar
        respuestas demasiado grandes. También es útil agregar{" "}
        <span className="font-semibold">filtros</span> para limitar los datos
        según ciertos criterios.
      </p>

      <Codeblock code={paginacionCode} title="UsuarioController.java" />

      <p className="text-base leading-7 text-[#141414] my-6">
        En este ejemplo, Spring puede leer automáticamente parámetros como{" "}
        <code className="bg-[#f7f7f7] px-1.5 py-0.5 rounded text-sm">page</code>
        ,{" "}
        <code className="bg-[#f7f7f7] px-1.5 py-0.5 rounded text-sm">size</code>{" "}
        y{" "}
        <code className="bg-[#f7f7f7] px-1.5 py-0.5 rounded text-sm">sort</code>{" "}
        mediante{" "}
        <code className="bg-[#f7f7f7] px-1.5 py-0.5 rounded text-sm">
          Pageable
        </code>
        , y además combinarlo con filtros opcionales usando{" "}
        <code className="bg-[#f7f7f7] px-1.5 py-0.5 rounded text-sm">
          @RequestParam
        </code>
        .
      </p>

      <div className="grid md:grid-cols-2 gap-6 my-8">
        <div className="p-6 border border-[#f2f2f2] rounded-xl">
          <h3 className="font-bold text-lg mb-2 text-[#141414]">
            Mejor rendimiento
          </h3>
          <p className="text-sm text-[#757575]">
            La paginación evita devolver listas enormes y mejora el consumo de
            recursos.
          </p>
        </div>

        <div className="p-6 border border-[#f2f2f2] rounded-xl">
          <h3 className="font-bold text-lg mb-2 text-[#141414]">
            Respuestas más útiles
          </h3>
          <p className="text-sm text-[#757575]">
            Los filtros permiten encontrar información específica sin recorrer
            todos los datos disponibles.
          </p>
        </div>
      </div>

      <Note title="Buenas prácticas">
        Mantén rutas consistentes, usa códigos HTTP adecuados, versiona cambios
        importantes, documenta los endpoints y agrega paginación cuando trabajes
        con colecciones grandes.
      </Note>

      <Note title="Resumen">
        Construir APIs REST en Spring Boot implica diseñar recursos claros,
        versionar la API cuando evoluciona, documentarla con OpenAPI y mejorar
        la experiencia de consumo con paginación y filtros.
      </Note>
    </DocsLayout>
  );
};
