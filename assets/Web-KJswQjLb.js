import{a as e,i as t,n,o as r,r as i,t as a}from"./index-Dt8U_ycJ.js";var o=r(),s=`<span class="keyword">import</span> <span class="string">org.springframework.web.bind.annotation.RestController</span>;
<span class="keyword">import</span> <span class="string">org.springframework.web.bind.annotation.RequestMapping</span>;

<span class="keyword">@RestController</span>
<span class="keyword">@RequestMapping</span>(<span class="string">"/api/usuarios"</span>)
<span class="keyword">public class</span> <span class="string">UsuarioController</span> {
}`,c=`<span class="keyword">import</span> <span class="string">org.springframework.web.bind.annotation.GetMapping</span>;
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
}`,l=`<span class="keyword">import</span> <span class="string">org.springframework.web.bind.annotation.GetMapping</span>;
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
}`,u=`<span class="keyword">import</span> <span class="string">jakarta.validation.constraints.Email</span>;
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
}`,d=`<span class="keyword">import</span> <span class="string">org.springframework.http.HttpStatus</span>;
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
}`,f=()=>(0,o.jsxs)(t,{toc:(0,o.jsx)(i,{items:e.sidebar[1].items[1].toc}),children:[(0,o.jsx)(`h1`,{className:`text-4xl font-extrabold tracking-tight text-[#141414] mb-4`,children:`Aplicaciones Web`}),(0,o.jsx)(`p`,{className:`text-xl text-[#757575] leading-relaxed`,children:`Spring Boot permite crear aplicaciones web y APIs REST de forma rápida. Con anotaciones simples puedes definir controladores, rutas, entrada y salida de datos, validaciones y manejo de errores dentro de una estructura clara y mantenible.`}),(0,o.jsx)(`h2`,{id:`controladores`,className:`text-2xl font-bold mt-12 mb-4 text-[#141414] scroll-mt-20`,children:`Controladores (@RestController)`}),(0,o.jsxs)(`p`,{className:`text-base leading-7 text-[#141414] my-6`,children:[`Un controlador es la clase encargada de recibir peticiones HTTP y devolver una respuesta. En aplicaciones backend con Spring Boot, lo más común es usar la anotación`,` `,(0,o.jsx)(`code`,{className:`bg-[#f7f7f7] px-1.5 py-0.5 rounded text-sm`,children:`@RestController`}),`, que indica que los métodos devolverán datos directamente, por ejemplo texto o JSON.`]}),(0,o.jsxs)(`p`,{className:`text-base leading-7 text-[#141414] my-6`,children:[`También es habitual usar`,` `,(0,o.jsx)(`code`,{className:`bg-[#f7f7f7] px-1.5 py-0.5 rounded text-sm`,children:`@RequestMapping`}),` `,`para definir una ruta base común para todos los endpoints del controlador.`]}),(0,o.jsx)(a,{code:s,title:`UsuarioController.java`}),(0,o.jsxs)(`p`,{className:`text-base leading-7 text-[#141414] my-6`,children:[`En este ejemplo, todas las rutas del controlador comienzan con`,` `,(0,o.jsx)(`code`,{className:`bg-[#f7f7f7] px-1.5 py-0.5 rounded text-sm`,children:`/api/usuarios`}),`.`]}),(0,o.jsx)(`h2`,{id:`rutas`,className:`text-2xl font-bold mt-12 mb-4 text-[#141414] scroll-mt-20`,children:`Mapping (@GetMapping, etc)`}),(0,o.jsx)(`p`,{className:`text-base leading-7 text-[#141414] my-6`,children:`Spring Boot ofrece anotaciones específicas para cada tipo de petición HTTP. Estas anotaciones permiten asociar métodos del controlador con una operación concreta, como listar recursos, obtener uno por id, crear, actualizar o eliminar.`}),(0,o.jsx)(a,{code:c,title:`Mappings.java`}),(0,o.jsxs)(`div`,{className:`grid md:grid-cols-2 gap-6 my-8`,children:[(0,o.jsxs)(`div`,{className:`p-6 border border-[#f2f2f2] rounded-xl`,children:[(0,o.jsx)(`h3`,{className:`font-bold text-lg mb-2 text-[#141414]`,children:`@GetMapping`}),(0,o.jsx)(`p`,{className:`text-sm text-[#757575]`,children:`Se usa para obtener información, por ejemplo listar registros o consultar uno en particular.`})]}),(0,o.jsxs)(`div`,{className:`p-6 border border-[#f2f2f2] rounded-xl`,children:[(0,o.jsx)(`h3`,{className:`font-bold text-lg mb-2 text-[#141414]`,children:`@PostMapping`}),(0,o.jsx)(`p`,{className:`text-sm text-[#757575]`,children:`Se utiliza para crear nuevos recursos a partir de datos enviados por el cliente.`})]}),(0,o.jsxs)(`div`,{className:`p-6 border border-[#f2f2f2] rounded-xl`,children:[(0,o.jsx)(`h3`,{className:`font-bold text-lg mb-2 text-[#141414]`,children:`@PutMapping`}),(0,o.jsx)(`p`,{className:`text-sm text-[#757575]`,children:`Sirve para actualizar recursos existentes, normalmente indicando su identificador.`})]}),(0,o.jsxs)(`div`,{className:`p-6 border border-[#f2f2f2] rounded-xl`,children:[(0,o.jsx)(`h3`,{className:`font-bold text-lg mb-2 text-[#141414]`,children:`@DeleteMapping`}),(0,o.jsx)(`p`,{className:`text-sm text-[#757575]`,children:`Se usa para eliminar recursos de la aplicación.`})]})]}),(0,o.jsx)(`h2`,{id:`request-response`,className:`text-2xl font-bold mt-12 mb-4 text-[#141414] scroll-mt-20`,children:`Request y Response`}),(0,o.jsxs)(`p`,{className:`text-base leading-7 text-[#141414] my-6`,children:[`En una aplicación web, el cliente envía una`,` `,(0,o.jsx)(`span`,{className:`font-semibold`,children:`request`}),` y el servidor devuelve una `,(0,o.jsx)(`span`,{className:`font-semibold`,children:`response`}),`. Spring Boot facilita este intercambio con anotaciones que permiten leer parámetros, rutas o cuerpos JSON y devolver objetos automáticamente serializados.`]}),(0,o.jsx)(a,{code:l,title:`EjemploController.java`}),(0,o.jsxs)(`p`,{className:`text-base leading-7 text-[#141414] my-6`,children:[`La anotación`,` `,(0,o.jsx)(`code`,{className:`bg-[#f7f7f7] px-1.5 py-0.5 rounded text-sm`,children:`@RequestParam`}),` `,`se usa para leer parámetros de la URL, mientras que`,` `,(0,o.jsx)(`code`,{className:`bg-[#f7f7f7] px-1.5 py-0.5 rounded text-sm`,children:`@RequestBody`}),` `,`permite recibir datos enviados en el cuerpo de la petición, normalmente en formato JSON.`]}),(0,o.jsxs)(n,{title:`Dato importante`,children:[`Cuando devuelves un objeto desde un`,` `,(0,o.jsx)(`code`,{className:`bg-[#f7f7f7] px-1.5 py-0.5 rounded text-sm`,children:`@RestController`}),`, Spring Boot lo convierte automáticamente a JSON en la respuesta HTTP.`]}),(0,o.jsx)(`h2`,{id:`validacion`,className:`text-2xl font-bold mt-12 mb-4 text-[#141414] scroll-mt-20`,children:`Validación de datos`}),(0,o.jsxs)(`p`,{className:`text-base leading-7 text-[#141414] my-6`,children:[`Validar datos de entrada es importante para evitar información inválida o incompleta. Spring Boot puede integrar validaciones usando anotaciones como`,` `,(0,o.jsx)(`code`,{className:`bg-[#f7f7f7] px-1.5 py-0.5 rounded text-sm`,children:`@NotBlank`}),` `,`o`,` `,(0,o.jsx)(`code`,{className:`bg-[#f7f7f7] px-1.5 py-0.5 rounded text-sm`,children:`@Email`}),`, junto con`,` `,(0,o.jsx)(`code`,{className:`bg-[#f7f7f7] px-1.5 py-0.5 rounded text-sm`,children:`@Valid`}),`.`]}),(0,o.jsx)(a,{code:u,title:`Validacion.java`}),(0,o.jsx)(`p`,{className:`text-base leading-7 text-[#141414] my-6`,children:`Si el objeto recibido no cumple las reglas definidas, Spring puede rechazar la petición antes de ejecutar la lógica del método.`}),(0,o.jsx)(`h2`,{id:`manejo-errores`,className:`text-2xl font-bold mt-12 mb-4 text-[#141414] scroll-mt-20`,children:`Manejo de errores`}),(0,o.jsxs)(`p`,{className:`text-base leading-7 text-[#141414] my-6`,children:[`En aplicaciones reales es importante devolver errores claros y controlados. Spring Boot permite centralizar este comportamiento con`,` `,(0,o.jsx)(`code`,{className:`bg-[#f7f7f7] px-1.5 py-0.5 rounded text-sm`,children:`@RestControllerAdvice`}),` `,`y`,` `,(0,o.jsx)(`code`,{className:`bg-[#f7f7f7] px-1.5 py-0.5 rounded text-sm`,children:`@ExceptionHandler`}),`.`]}),(0,o.jsx)(a,{code:d,title:`GlobalExceptionHandler.java`}),(0,o.jsx)(`p`,{className:`text-base leading-7 text-[#141414] my-6`,children:`Este enfoque ayuda a mantener los controladores más limpios y permite responder con mensajes y códigos HTTP consistentes ante distintos tipos de error.`}),(0,o.jsxs)(`div`,{className:`grid md:grid-cols-2 gap-6 my-8`,children:[(0,o.jsxs)(`div`,{className:`p-6 border border-[#f2f2f2] rounded-xl`,children:[(0,o.jsx)(`h3`,{className:`font-bold text-lg mb-2 text-[#141414]`,children:`Mejor experiencia para el cliente`}),(0,o.jsx)(`p`,{className:`text-sm text-[#757575]`,children:`Los errores bien estructurados hacen más fácil consumir la API desde frontend u otros servicios.`})]}),(0,o.jsxs)(`div`,{className:`p-6 border border-[#f2f2f2] rounded-xl`,children:[(0,o.jsx)(`h3`,{className:`font-bold text-lg mb-2 text-[#141414]`,children:`Código más ordenado`}),(0,o.jsx)(`p`,{className:`text-sm text-[#757575]`,children:`Centralizar excepciones evita repetir bloques de manejo de errores en cada endpoint.`})]})]}),(0,o.jsx)(n,{title:`Resumen`,children:`En Spring Boot, la capa web se construye con controladores, rutas, recepción y devolución de datos, validaciones y manejo centralizado de errores. Estos elementos forman la base de una API REST clara, mantenible y preparada para crecer.`})]});export{f as Web};