import { DocsLayout } from "../layout/Docs.tsx";
import { TableOfContents } from "../components/TableOfContents.tsx";
import modulosData from "../data/modulos.json";
import Note from "../components/Notes.tsx";
import Codeblock from "../components/Codeblock.tsx";

const controllerCode = `<span class="keyword">import</span> <span class="string">org.springframework.web.bind.annotation.RestController</span>;
<span class="keyword">import</span> <span class="string">org.springframework.web.bind.annotation.RequestMapping</span>;

<span class="keyword">@RestController</span>
<span class="keyword">@RequestMapping</span>(<span class="string">"/api/usuarios"</span>)
<span class="keyword">public class</span> <span class="string">UsuarioController</span> {
}`;

const mappingsCode = `<span class="keyword">import</span> <span class="string">org.springframework.web.bind.annotation.GetMapping</span>;
<span class="keyword">import</span> <span class="string">org.springframework.web.bind.annotation.PostMapping</span>;
<span class="keyword">import</span> <span class="string">org.springframework.web.bind.annotation.PutMapping</span>;
<span class="keyword">import</span> <span class="string">org.springframework.web.bind.annotation.DeleteMapping</span>;
<span class="keyword">import</span> <span class="string">org.springframework.web.bind.annotation.PathVariable</span>;

<span class="keyword">@RestController</span>
<span class="keyword">@RequestMapping</span>(<span class="string">"/api/usuarios"</span>)
<span class="keyword">public class</span> <span class="string">UsuarioController</span> {

    <span class="keyword">@GetMapping</span>
    <span class="keyword">public</span> <span class="string">String</span> listar() {
        <span class="keyword">return</span> <span class="string">"Listado de usuarios"</span>;
    }

    <span class="keyword">@GetMapping</span>(<span class="string">"/{id}"</span>)
    <span class="keyword">public</span> <span class="string">String</span> obtenerPorId(<span class="string">@PathVariable</span> Long id) {
        <span class="keyword">return</span> <span class="string">"Usuario "</span> + id;
    }

    <span class="keyword">@PostMapping</span>
    <span class="keyword">public</span> <span class="string">String</span> crear() {
        <span class="keyword">return</span> <span class="string">"Usuario creado"</span>;
    }

    <span class="keyword">@PutMapping</span>(<span class="string">"/{id}"</span>)
    <span class="keyword">public</span> <span class="string">String</span> actualizar(<span class="string">@PathVariable</span> Long id) {
        <span class="keyword">return</span> <span class="string">"Usuario actualizado "</span> + id;
    }

    <span class="keyword">@DeleteMapping</span>(<span class="string">"/{id}"</span>)
    <span class="keyword">public</span> <span class="string">String</span> eliminar(<span class="string">@PathVariable</span> Long id) {
        <span class="keyword">return</span> <span class="string">"Usuario eliminado "</span> + id;
    }
}`;

const requestResponseCode = `<span class="keyword">import</span> <span class="string">org.springframework.web.bind.annotation.GetMapping</span>;
<span class="keyword">import</span> <span class="string">org.springframework.web.bind.annotation.PostMapping</span>;
<span class="keyword">import</span> <span class="string">org.springframework.web.bind.annotation.RequestBody</span>;
<span class="keyword">import</span> <span class="string">org.springframework.web.bind.annotation.RequestParam</span>;
<span class="keyword">import</span> <span class="string">org.springframework.web.bind.annotation.RestController</span>;

<span class="keyword">record</span> <span class="string">UsuarioRequest</span>(String nombre, String email) {}

<span class="keyword">@RestController</span>
<span class="keyword">public class</span> <span class="string">EjemploController</span> {

    <span class="keyword">@GetMapping</span>(<span class="string">"/saludo"</span>)
    <span class="keyword">public</span> <span class="string">String</span> saludo(<span class="string">@RequestParam</span> String nombre) {
        <span class="keyword">return</span> <span class="string">"Hola "</span> + nombre;
    }

    <span class="keyword">@PostMapping</span>(<span class="string">"/usuarios"</span>)
    <span class="keyword">public</span> <span class="string">UsuarioRequest</span> crear(<span class="string">@RequestBody</span> UsuarioRequest request) {
        <span class="keyword">return</span> request;
    }
}`;

const validacionCode = `<span class="keyword">import</span> <span class="string">jakarta.validation.constraints.Email</span>;
<span class="keyword">import</span> <span class="string">jakarta.validation.constraints.NotBlank</span>;
<span class="keyword">import</span> <span class="string">org.springframework.web.bind.annotation.PostMapping</span>;
<span class="keyword">import</span> <span class="string">org.springframework.web.bind.annotation.RequestBody</span>;
<span class="keyword">import</span> <span class="string">org.springframework.web.bind.annotation.RestController</span>;
<span class="keyword">import</span> <span class="string">jakarta.validation.Valid</span>;

<span class="keyword">public class</span> <span class="string">CrearUsuarioRequest</span> {
    <span class="string">@NotBlank</span>
    <span class="keyword">private</span> <span class="string">String</span> nombre;

    <span class="string">@Email</span>
    <span class="keyword">private</span> <span class="string">String</span> email;

    <span class="comment">// getters y setters</span>
}

<span class="keyword">@RestController</span>
<span class="keyword">public class</span> <span class="string">UsuarioController</span> {

    <span class="keyword">@PostMapping</span>(<span class="string">"/usuarios"</span>)
    <span class="keyword">public</span> <span class="string">String</span> crear(<span class="string">@Valid @RequestBody</span> CrearUsuarioRequest request) {
        <span class="keyword">return</span> <span class="string">"Usuario válido"</span>;
    }
}`;

const errorCode = `<span class="keyword">import</span> <span class="string">org.springframework.http.HttpStatus</span>;
<span class="keyword">import</span> <span class="string">org.springframework.http.ResponseEntity</span>;
<span class="keyword">import</span> <span class="string">org.springframework.web.bind.annotation.ExceptionHandler</span>;
<span class="keyword">import</span> <span class="string">org.springframework.web.bind.annotation.RestControllerAdvice</span>;

<span class="keyword">@RestControllerAdvice</span>
<span class="keyword">public class</span> <span class="string">GlobalExceptionHandler</span> {

    <span class="string">@ExceptionHandler</span>(RuntimeException.class)
    <span class="keyword">public</span> <span class="string">ResponseEntity&lt;String&gt;</span> manejarError(RuntimeException ex) {
        <span class="keyword">return</span> <span class="string">ResponseEntity</span>
            .status(HttpStatus.BAD_REQUEST)
            .body(ex.getMessage());
    }
}`;

export const Web = () => {
  return (
    <DocsLayout
      toc={<TableOfContents items={modulosData.sidebar[1].items[1].toc} />}
    >
      <h1 className="text-4xl font-extrabold tracking-tight text-[#141414] mb-4">
        Aplicaciones Web
      </h1>

      <p className="text-xl text-[#757575] leading-relaxed">
        Spring Boot permite crear aplicaciones web y APIs REST de forma rápida.
        Con anotaciones simples puedes definir controladores, rutas, entrada y
        salida de datos, validaciones y manejo de errores dentro de una
        estructura clara y mantenible.
      </p>

      <h2
        id="controladores"
        className="text-2xl font-bold mt-12 mb-4 text-[#141414] scroll-mt-20"
      >
        Controladores (@RestController)
      </h2>

      <p className="text-base leading-7 text-[#141414] my-6">
        Un controlador es la clase encargada de recibir peticiones HTTP y
        devolver una respuesta. En aplicaciones backend con Spring Boot, lo más
        común es usar la anotación{" "}
        <code className="bg-[#f7f7f7] px-1.5 py-0.5 rounded text-sm">
          @RestController
        </code>
        , que indica que los métodos devolverán datos directamente, por ejemplo
        texto o JSON.
      </p>

      <p className="text-base leading-7 text-[#141414] my-6">
        También es habitual usar{" "}
        <code className="bg-[#f7f7f7] px-1.5 py-0.5 rounded text-sm">
          @RequestMapping
        </code>{" "}
        para definir una ruta base común para todos los endpoints del
        controlador.
      </p>

      <Codeblock code={controllerCode} title="UsuarioController.java" />

      <p className="text-base leading-7 text-[#141414] my-6">
        En este ejemplo, todas las rutas del controlador comienzan con{" "}
        <code className="bg-[#f7f7f7] px-1.5 py-0.5 rounded text-sm">
          /api/usuarios
        </code>
        .
      </p>

      <h2
        id="rutas"
        className="text-2xl font-bold mt-12 mb-4 text-[#141414] scroll-mt-20"
      >
        Mapping (@GetMapping, etc)
      </h2>

      <p className="text-base leading-7 text-[#141414] my-6">
        Spring Boot ofrece anotaciones específicas para cada tipo de petición
        HTTP. Estas anotaciones permiten asociar métodos del controlador con una
        operación concreta, como listar recursos, obtener uno por id, crear,
        actualizar o eliminar.
      </p>

      <Codeblock code={mappingsCode} title="Mappings.java" />

      <div className="grid md:grid-cols-2 gap-6 my-8">
        <div className="p-6 border border-[#f2f2f2] rounded-xl">
          <h3 className="font-bold text-lg mb-2 text-[#141414]">@GetMapping</h3>
          <p className="text-sm text-[#757575]">
            Se usa para obtener información, por ejemplo listar registros o
            consultar uno en particular.
          </p>
        </div>

        <div className="p-6 border border-[#f2f2f2] rounded-xl">
          <h3 className="font-bold text-lg mb-2 text-[#141414]">
            @PostMapping
          </h3>
          <p className="text-sm text-[#757575]">
            Se utiliza para crear nuevos recursos a partir de datos enviados por
            el cliente.
          </p>
        </div>

        <div className="p-6 border border-[#f2f2f2] rounded-xl">
          <h3 className="font-bold text-lg mb-2 text-[#141414]">@PutMapping</h3>
          <p className="text-sm text-[#757575]">
            Sirve para actualizar recursos existentes, normalmente indicando su
            identificador.
          </p>
        </div>

        <div className="p-6 border border-[#f2f2f2] rounded-xl">
          <h3 className="font-bold text-lg mb-2 text-[#141414]">
            @DeleteMapping
          </h3>
          <p className="text-sm text-[#757575]">
            Se usa para eliminar recursos de la aplicación.
          </p>
        </div>
      </div>

      <h2
        id="request-response"
        className="text-2xl font-bold mt-12 mb-4 text-[#141414] scroll-mt-20"
      >
        Request y Response
      </h2>

      <p className="text-base leading-7 text-[#141414] my-6">
        En una aplicación web, el cliente envía una{" "}
        <span className="font-semibold">request</span> y el servidor devuelve
        una <span className="font-semibold">response</span>. Spring Boot
        facilita este intercambio con anotaciones que permiten leer parámetros,
        rutas o cuerpos JSON y devolver objetos automáticamente serializados.
      </p>

      <Codeblock code={requestResponseCode} title="EjemploController.java" />

      <p className="text-base leading-7 text-[#141414] my-6">
        La anotación{" "}
        <code className="bg-[#f7f7f7] px-1.5 py-0.5 rounded text-sm">
          @RequestParam
        </code>{" "}
        se usa para leer parámetros de la URL, mientras que{" "}
        <code className="bg-[#f7f7f7] px-1.5 py-0.5 rounded text-sm">
          @RequestBody
        </code>{" "}
        permite recibir datos enviados en el cuerpo de la petición, normalmente
        en formato JSON.
      </p>

      <Note title="Dato importante">
        Cuando devuelves un objeto desde un{" "}
        <code className="bg-[#f7f7f7] px-1.5 py-0.5 rounded text-sm">
          @RestController
        </code>
        , Spring Boot lo convierte automáticamente a JSON en la respuesta HTTP.
      </Note>

      <h2
        id="validacion"
        className="text-2xl font-bold mt-12 mb-4 text-[#141414] scroll-mt-20"
      >
        Validación de datos
      </h2>

      <p className="text-base leading-7 text-[#141414] my-6">
        Validar datos de entrada es importante para evitar información inválida
        o incompleta. Spring Boot puede integrar validaciones usando anotaciones
        como{" "}
        <code className="bg-[#f7f7f7] px-1.5 py-0.5 rounded text-sm">
          @NotBlank
        </code>{" "}
        o{" "}
        <code className="bg-[#f7f7f7] px-1.5 py-0.5 rounded text-sm">
          @Email
        </code>
        , junto con{" "}
        <code className="bg-[#f7f7f7] px-1.5 py-0.5 rounded text-sm">
          @Valid
        </code>
        .
      </p>

      <Codeblock code={validacionCode} title="Validacion.java" />

      <p className="text-base leading-7 text-[#141414] my-6">
        Si el objeto recibido no cumple las reglas definidas, Spring puede
        rechazar la petición antes de ejecutar la lógica del método.
      </p>

      <h2
        id="manejo-errores"
        className="text-2xl font-bold mt-12 mb-4 text-[#141414] scroll-mt-20"
      >
        Manejo de errores
      </h2>

      <p className="text-base leading-7 text-[#141414] my-6">
        En aplicaciones reales es importante devolver errores claros y
        controlados. Spring Boot permite centralizar este comportamiento con{" "}
        <code className="bg-[#f7f7f7] px-1.5 py-0.5 rounded text-sm">
          @RestControllerAdvice
        </code>{" "}
        y{" "}
        <code className="bg-[#f7f7f7] px-1.5 py-0.5 rounded text-sm">
          @ExceptionHandler
        </code>
        .
      </p>

      <Codeblock code={errorCode} title="GlobalExceptionHandler.java" />

      <p className="text-base leading-7 text-[#141414] my-6">
        Este enfoque ayuda a mantener los controladores más limpios y permite
        responder con mensajes y códigos HTTP consistentes ante distintos tipos
        de error.
      </p>

      <div className="grid md:grid-cols-2 gap-6 my-8">
        <div className="p-6 border border-[#f2f2f2] rounded-xl">
          <h3 className="font-bold text-lg mb-2 text-[#141414]">
            Mejor experiencia para el cliente
          </h3>
          <p className="text-sm text-[#757575]">
            Los errores bien estructurados hacen más fácil consumir la API desde
            frontend u otros servicios.
          </p>
        </div>

        <div className="p-6 border border-[#f2f2f2] rounded-xl">
          <h3 className="font-bold text-lg mb-2 text-[#141414]">
            Código más ordenado
          </h3>
          <p className="text-sm text-[#757575]">
            Centralizar excepciones evita repetir bloques de manejo de errores
            en cada endpoint.
          </p>
        </div>
      </div>

      <Note title="Resumen">
        En Spring Boot, la capa web se construye con controladores, rutas,
        recepción y devolución de datos, validaciones y manejo centralizado de
        errores. Estos elementos forman la base de una API REST clara,
        mantenible y preparada para crecer.
      </Note>
    </DocsLayout>
  );
};
