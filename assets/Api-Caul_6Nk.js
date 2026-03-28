import{a as e,i as t,n,o as r,r as i,t as a}from"./index-ByLeivlo.js";var o=r(),s=`<span class="keyword">import</span> <span class="string">org.springframework.web.bind.annotation.GetMapping</span>;
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
}`,c=`<span class="keyword">import</span> <span class="string">org.springframework.web.bind.annotation.GetMapping</span>;
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
}`,l=`<span class="keyword">import</span> <span class="string">io.swagger.v3.oas.annotations.Operation</span>;
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
}`,u=`<span class="keyword">import</span> <span class="string">org.springframework.data.domain.Page</span>;
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
}`,d=`<span class="keyword">import</span> <span class="string">org.springframework.http.HttpStatus</span>;
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
}`,f=()=>(0,o.jsxs)(t,{toc:(0,o.jsx)(i,{items:e.sidebar[2].items[2].toc}),children:[(0,o.jsx)(`h1`,{className:`text-4xl font-extrabold tracking-tight text-[#141414] mb-4`,children:`APIs REST`}),(0,o.jsx)(`p`,{className:`text-xl text-[#757575] leading-relaxed`,children:`Spring Boot es una herramienta muy utilizada para construir APIs REST. Permite definir endpoints claros, estructurar respuestas, versionar la API, documentarla y agregar paginación o filtros para trabajar de forma ordenada con los datos.`}),(0,o.jsx)(`h2`,{id:`diseno-api`,className:`text-2xl font-bold mt-12 mb-4 text-[#141414] scroll-mt-20`,children:`Diseño de APIs`}),(0,o.jsx)(`p`,{className:`text-base leading-7 text-[#141414] my-6`,children:`Diseñar una API no consiste solo en exponer rutas. También implica decidir cómo nombrar los recursos, qué estructura tendrán las respuestas y cómo mantener consistencia entre endpoints.`}),(0,o.jsx)(`p`,{className:`text-base leading-7 text-[#141414] my-6`,children:`En una API REST suele ser buena práctica usar nombres en plural para los recursos, separar claramente requests y responses, y devolver códigos HTTP coherentes según el resultado de cada operación.`}),(0,o.jsx)(a,{code:s,title:`UsuarioController.java`}),(0,o.jsxs)(`p`,{className:`text-base leading-7 text-[#141414] my-6`,children:[`En este ejemplo, la API trabaja sobre el recurso`,` `,(0,o.jsx)(`code`,{className:`bg-[#f7f7f7] px-1.5 py-0.5 rounded text-sm`,children:`usuarios`}),`, recibe un objeto de entrada y devuelve una respuesta separada. Este enfoque ayuda a mantener más control sobre los datos expuestos.`]}),(0,o.jsx)(a,{code:d,title:`ResponseEntity.java`}),(0,o.jsxs)(`p`,{className:`text-base leading-7 text-[#141414] my-6`,children:[`Cuando necesitas más control sobre el estado HTTP o el cuerpo de la respuesta, puedes usar`,` `,(0,o.jsx)(`code`,{className:`bg-[#f7f7f7] px-1.5 py-0.5 rounded text-sm`,children:`ResponseEntity`}),`. Esto resulta útil para responder con estados como`,` `,(0,o.jsx)(`code`,{className:`bg-[#f7f7f7] px-1.5 py-0.5 rounded text-sm`,children:`200 OK`}),`,`,` `,(0,o.jsx)(`code`,{className:`bg-[#f7f7f7] px-1.5 py-0.5 rounded text-sm`,children:`201 Created`}),` `,`o`,` `,(0,o.jsx)(`code`,{className:`bg-[#f7f7f7] px-1.5 py-0.5 rounded text-sm`,children:`404 Not Found`}),`.`]}),(0,o.jsx)(n,{title:`Idea principal`,children:`Una API bien diseñada no solo funciona: también es fácil de entender, mantener y consumir desde frontend u otros servicios.`}),(0,o.jsx)(`h2`,{id:`versionado`,className:`text-2xl font-bold mt-12 mb-4 text-[#141414] scroll-mt-20`,children:`Versionado`}),(0,o.jsxs)(`p`,{className:`text-base leading-7 text-[#141414] my-6`,children:[`El `,(0,o.jsx)(`span`,{className:`font-semibold`,children:`versionado`}),` permite evolucionar la API sin romper integraciones existentes. Cuando cambias contratos, estructuras de respuesta o comportamientos importantes, conviene exponer una nueva versión en lugar de modificar la anterior de forma abrupta.`]}),(0,o.jsxs)(`p`,{className:`text-base leading-7 text-[#141414] my-6`,children:[`Una estrategia común es incluir la versión en la URL, por ejemplo`,` `,(0,o.jsx)(`code`,{className:`bg-[#f7f7f7] px-1.5 py-0.5 rounded text-sm`,children:`/api/v1`}),` `,`o`,` `,(0,o.jsx)(`code`,{className:`bg-[#f7f7f7] px-1.5 py-0.5 rounded text-sm`,children:`/api/v2`}),`.`]}),(0,o.jsx)(a,{code:c,title:`Versionado.java`}),(0,o.jsx)(`p`,{className:`text-base leading-7 text-[#141414] my-6`,children:`De esta forma, clientes antiguos pueden seguir usando la versión anterior mientras nuevos consumidores trabajan con la más reciente.`}),(0,o.jsxs)(`div`,{className:`grid md:grid-cols-2 gap-6 my-8`,children:[(0,o.jsxs)(`div`,{className:`p-6 border border-[#f2f2f2] rounded-xl`,children:[(0,o.jsx)(`h3`,{className:`font-bold text-lg mb-2 text-[#141414]`,children:`Evolución controlada`}),(0,o.jsx)(`p`,{className:`text-sm text-[#757575]`,children:`Permite mejorar la API sin romper integraciones que ya dependen de una versión existente.`})]}),(0,o.jsxs)(`div`,{className:`p-6 border border-[#f2f2f2] rounded-xl`,children:[(0,o.jsx)(`h3`,{className:`font-bold text-lg mb-2 text-[#141414]`,children:`Compatibilidad`}),(0,o.jsx)(`p`,{className:`text-sm text-[#757575]`,children:`Los consumidores pueden migrar a su ritmo cuando exista una nueva versión.`})]})]}),(0,o.jsx)(`h2`,{id:`documentacion`,className:`text-2xl font-bold mt-12 mb-4 text-[#141414] scroll-mt-20`,children:`Swagger / OpenAPI`}),(0,o.jsxs)(`p`,{className:`text-base leading-7 text-[#141414] my-6`,children:[`Documentar la API es importante para que otros desarrolladores entiendan cómo usarla. En Spring Boot es común trabajar con`,` `,(0,o.jsx)(`span`,{className:`font-semibold`,children:`OpenAPI`}),` y herramientas como Swagger UI para generar una documentación navegable e interactiva.`]}),(0,o.jsx)(a,{code:l,title:`UsuarioController.java`}),(0,o.jsxs)(`p`,{className:`text-base leading-7 text-[#141414] my-6`,children:[`Con anotaciones como`,` `,(0,o.jsx)(`code`,{className:`bg-[#f7f7f7] px-1.5 py-0.5 rounded text-sm`,children:`@Tag`}),` `,`y`,` `,(0,o.jsx)(`code`,{className:`bg-[#f7f7f7] px-1.5 py-0.5 rounded text-sm`,children:`@Operation`}),`, puedes describir controladores y endpoints para que queden mejor representados en la documentación.`]}),(0,o.jsx)(n,{title:`Ventaja principal`,children:`Una buena documentación reduce dudas, acelera integraciones y facilita probar la API sin revisar todo el código fuente.`}),(0,o.jsx)(`h2`,{id:`paginacion`,className:`text-2xl font-bold mt-12 mb-4 text-[#141414] scroll-mt-20`,children:`Paginación y filtros`}),(0,o.jsxs)(`p`,{className:`text-base leading-7 text-[#141414] my-6`,children:[`Cuando un recurso puede devolver muchos registros, es recomendable usar`,(0,o.jsx)(`span`,{className:`font-semibold`,children:` paginación`}),` para evitar respuestas demasiado grandes. También es útil agregar`,` `,(0,o.jsx)(`span`,{className:`font-semibold`,children:`filtros`}),` para limitar los datos según ciertos criterios.`]}),(0,o.jsx)(a,{code:u,title:`UsuarioController.java`}),(0,o.jsxs)(`p`,{className:`text-base leading-7 text-[#141414] my-6`,children:[`En este ejemplo, Spring puede leer automáticamente parámetros como`,` `,(0,o.jsx)(`code`,{className:`bg-[#f7f7f7] px-1.5 py-0.5 rounded text-sm`,children:`page`}),`,`,` `,(0,o.jsx)(`code`,{className:`bg-[#f7f7f7] px-1.5 py-0.5 rounded text-sm`,children:`size`}),` `,`y`,` `,(0,o.jsx)(`code`,{className:`bg-[#f7f7f7] px-1.5 py-0.5 rounded text-sm`,children:`sort`}),` `,`mediante`,` `,(0,o.jsx)(`code`,{className:`bg-[#f7f7f7] px-1.5 py-0.5 rounded text-sm`,children:`Pageable`}),`, y además combinarlo con filtros opcionales usando`,` `,(0,o.jsx)(`code`,{className:`bg-[#f7f7f7] px-1.5 py-0.5 rounded text-sm`,children:`@RequestParam`}),`.`]}),(0,o.jsxs)(`div`,{className:`grid md:grid-cols-2 gap-6 my-8`,children:[(0,o.jsxs)(`div`,{className:`p-6 border border-[#f2f2f2] rounded-xl`,children:[(0,o.jsx)(`h3`,{className:`font-bold text-lg mb-2 text-[#141414]`,children:`Mejor rendimiento`}),(0,o.jsx)(`p`,{className:`text-sm text-[#757575]`,children:`La paginación evita devolver listas enormes y mejora el consumo de recursos.`})]}),(0,o.jsxs)(`div`,{className:`p-6 border border-[#f2f2f2] rounded-xl`,children:[(0,o.jsx)(`h3`,{className:`font-bold text-lg mb-2 text-[#141414]`,children:`Respuestas más útiles`}),(0,o.jsx)(`p`,{className:`text-sm text-[#757575]`,children:`Los filtros permiten encontrar información específica sin recorrer todos los datos disponibles.`})]})]}),(0,o.jsx)(n,{title:`Buenas prácticas`,children:`Mantén rutas consistentes, usa códigos HTTP adecuados, versiona cambios importantes, documenta los endpoints y agrega paginación cuando trabajes con colecciones grandes.`}),(0,o.jsx)(n,{title:`Resumen`,children:`Construir APIs REST en Spring Boot implica diseñar recursos claros, versionar la API cuando evoluciona, documentarla con OpenAPI y mejorar la experiencia de consumo con paginación y filtros.`})]});export{f as Api};