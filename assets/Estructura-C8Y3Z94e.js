import{a as e,i as t,n,o as r,r as i,t as a}from"./index-ByLeivlo.js";var o=r(),s=`mi-app/
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
└── mvnw`,c=`<span class="keyword">import</span> <span class="string">jakarta.persistence.*</span>;

<span class="keyword">@Entity</span>
<span class="keyword">@Table</span>(name = <span class="string">"usuarios"</span>)
<span class="keyword">public class</span> <span class="string">Usuario</span> {

    <span class="keyword">@Id</span>
    <span class="keyword">@GeneratedValue</span>(strategy = GenerationType.IDENTITY)
    <span class="keyword">private</span> <span class="string">Long</span> id;

    <span class="keyword">@Column</span>(nullable = false, length = 100)
    <span class="keyword">private</span> <span class="string">String</span> nombre;

    <span class="keyword">@Column</span>(unique = true, nullable = false, length = 150)
    <span class="keyword">private</span> <span class="string">String</span> email;

    <span class="comment">// getters y setters</span>
}`,l=`<span class="keyword">public record</span> <span class="string">UsuarioRequest</span>(
    <span class="string">String</span> nombre,
    <span class="string">String</span> email
) {}

<span class="keyword">public record</span> <span class="string">UsuarioResponse</span>(
    <span class="string">Long</span> id,
    <span class="string">String</span> nombre,
    <span class="string">String</span> email
) {}`,u=`<span class="keyword">import</span> <span class="string">org.springframework.data.jpa.repository.JpaRepository</span>;
<span class="keyword">import</span> <span class="string">java.util.Optional</span>;

<span class="keyword">public interface</span> <span class="string">UsuarioRepository</span>
    <span class="keyword">extends</span> <span class="string">JpaRepository</span>&lt;<span class="string">Usuario</span>, <span class="string">Long</span>&gt; {

    <span class="string">Optional&lt;Usuario&gt;</span> <span class="function">findByEmail</span>(<span class="string">String</span> email);
}`,d=`<span class="keyword">import</span> <span class="string">org.springframework.stereotype.Service</span>;
<span class="keyword">import</span> <span class="string">java.util.List</span>;

<span class="keyword">@Service</span>
<span class="keyword">public class</span> <span class="string">UsuarioService</span> {

    <span class="keyword">private final</span> <span class="string">UsuarioRepository</span> usuarioRepository;
    <span class="keyword">private final</span> <span class="string">UsuarioMapper</span> usuarioMapper;

    <span class="keyword">public</span> <span class="string">UsuarioService</span>(
        <span class="string">UsuarioRepository</span> usuarioRepository,
        <span class="string">UsuarioMapper</span> usuarioMapper
    ) {
        <span class="keyword">this</span>.usuarioRepository = usuarioRepository;
        <span class="keyword">this</span>.usuarioMapper = usuarioMapper;
    }

    <span class="keyword">public</span> <span class="string">List&lt;UsuarioResponse&gt;</span> <span class="function">listar</span>() {
        <span class="keyword">return</span> usuarioRepository.findAll()
            .stream()
            .map(usuarioMapper::<span class="function">toResponse</span>)
            .toList();
    }

    <span class="keyword">public</span> <span class="string">UsuarioResponse</span> <span class="function">guardar</span>(<span class="string">UsuarioRequest</span> request) {
        <span class="string">Usuario</span> usuario = usuarioMapper.toEntity(request);
        <span class="keyword">return</span> usuarioMapper.toResponse(usuarioRepository.save(usuario));
    }
}`,f=`<span class="keyword">import</span> <span class="string">org.springframework.http.ResponseEntity</span>;
<span class="keyword">import</span> <span class="string">org.springframework.web.bind.annotation.*</span>;
<span class="keyword">import</span> <span class="string">java.util.List</span>;

<span class="keyword">@RestController</span>
<span class="keyword">@RequestMapping</span>(<span class="string">"/api/usuarios"</span>)
<span class="keyword">public class</span> <span class="string">UsuarioController</span> {

    <span class="keyword">private final</span> <span class="string">UsuarioService</span> usuarioService;

    <span class="keyword">public</span> <span class="string">UsuarioController</span>(<span class="string">UsuarioService</span> usuarioService) {
        <span class="keyword">this</span>.usuarioService = usuarioService;
    }

    <span class="keyword">@GetMapping</span>
    <span class="keyword">public</span> <span class="string">ResponseEntity&lt;List&lt;UsuarioResponse&gt;&gt;</span> <span class="function">listar</span>() {
        <span class="keyword">return</span> ResponseEntity.ok(usuarioService.listar());
    }

    <span class="keyword">@PostMapping</span>
    <span class="keyword">public</span> <span class="string">ResponseEntity&lt;UsuarioResponse&gt;</span> <span class="function">crear</span>(
        <span class="keyword">@RequestBody</span> <span class="string">UsuarioRequest</span> request
    ) {
        <span class="keyword">return</span> ResponseEntity.ok(usuarioService.guardar(request));
    }
}`,p=`<span class="keyword">@Mapping</span>(source = <span class="string">"nombre"</span>, target = <span class="string">"fullName"</span>)
<span class="string">UsuarioResponse</span> <span class="function">toResponse</span>(<span class="string">Usuario</span> usuario);`,m=`<span class="keyword">@Mapping</span>(source = <span class="string">"direccion.ciudad"</span>, target = <span class="string">"ciudad"</span>)
<span class="string">UsuarioResponse</span> <span class="function">toResponse</span>(<span class="string">Usuario</span> usuario);`,h=`<span class="keyword">@Mapping</span>(target = <span class="string">"password"</span>, ignore = <span class="keyword">true</span>)
<span class="string">UsuarioResponse</span> <span class="function">toResponse</span>(<span class="string">Usuario</span> usuario);`,g=`<span class="keyword">@Mapping</span>(target = <span class="string">"activo"</span>, constant = <span class="string">"true"</span>)
<span class="keyword">@Mapping</span>(target = <span class="string">"creadoEn"</span>, expression = <span class="string">"java(java.time.LocalDate.now())"</span>)
<span class="string">UsuarioResponse</span> <span class="function">toResponse</span>(<span class="string">Usuario</span> usuario);`,_=`<span class="keyword">import</span> <span class="string">org.mapstruct.Mapper</span>;
<span class="keyword">import</span> <span class="string">org.mapstruct.MappingConstants</span>;

<span class="keyword">@Mapper</span>(componentModel = MappingConstants.ComponentModel.SPRING)
<span class="keyword">public interface</span> <span class="string">UsuarioMapper</span> {

    <span class="string">UsuarioResponse</span> <span class="function">toResponse</span>(<span class="string">Usuario</span> usuario);

    <span class="string">Usuario</span> <span class="function">toEntity</span>(<span class="string">UsuarioRequest</span> request);
}`,v=()=>(0,o.jsxs)(t,{toc:(0,o.jsx)(i,{items:e.sidebar[1].items[4].toc}),children:[(0,o.jsx)(`h1`,{className:`text-4xl font-extrabold tracking-tight text-[#141414] mb-4`,children:`Estructura de proyecto`}),(0,o.jsx)(`p`,{className:`text-xl text-[#757575] leading-relaxed`,children:`Una buena estructura en Spring Boot ayuda a separar responsabilidades y hace que el proyecto sea más fácil de leer, mantener y escalar. La idea principal es que cada carpeta tenga un propósito claro: unas reciben peticiones, otras contienen lógica de negocio y otras se encargan del acceso a datos.`}),(0,o.jsx)(`h2`,{id:`vision-general`,className:`text-2xl font-bold mt-12 mb-4 text-[#141414] scroll-mt-20`,children:`Visión general`}),(0,o.jsx)(`p`,{className:`text-base leading-7 text-[#141414] my-6`,children:`En proyectos pequeños podrías poner casi todo junto, pero a medida que la aplicación crece conviene ordenar el código por capas o por responsabilidad. Una estructura bien definida evita mezclar lógica de negocio con acceso a base de datos o con detalles de la API.`}),(0,o.jsxs)(`p`,{className:`text-base leading-7 text-[#141414] my-6`,children:[`En una organización clásica de Spring Boot suelen aparecer carpetas como`,` `,(0,o.jsx)(`code`,{className:`bg-[#f7f7f7] px-1.5 py-0.5 rounded text-sm`,children:`controller`}),`,`,` `,(0,o.jsx)(`code`,{className:`bg-[#f7f7f7] px-1.5 py-0.5 rounded text-sm`,children:`service`}),`,`,` `,(0,o.jsx)(`code`,{className:`bg-[#f7f7f7] px-1.5 py-0.5 rounded text-sm`,children:`repository`}),`,`,` `,(0,o.jsx)(`code`,{className:`bg-[#f7f7f7] px-1.5 py-0.5 rounded text-sm`,children:`entity`}),` `,`y`,` `,(0,o.jsx)(`code`,{className:`bg-[#f7f7f7] px-1.5 py-0.5 rounded text-sm`,children:`dto`}),`.`]}),(0,o.jsx)(n,{title:`Idea principal`,children:`La estructura no existe solo para ordenar archivos. También sirve para dejar claro qué responsabilidad tiene cada parte del sistema.`}),(0,o.jsx)(`h2`,{id:`estructura-base`,className:`text-2xl font-bold mt-12 mb-4 text-[#141414] scroll-mt-20`,children:`Estructura base`}),(0,o.jsx)(`p`,{className:`text-base leading-7 text-[#141414] my-6`,children:`Esta es una estructura típica de un proyecto Spring Boot con capas, DTOs, repositorios, servicios y manejo de excepciones:`}),(0,o.jsx)(a,{code:s,title:`Terminal`}),(0,o.jsx)(`p`,{className:`text-base leading-7 text-[#141414] my-6`,children:`No es obligatorio usar exactamente esta distribución, pero sí conviene mantener consistencia. Cuando todos los archivos están en lugares predecibles, el proyecto se vuelve mucho más fácil de recorrer.`}),(0,o.jsx)(`h2`,{id:`flujo`,className:`text-2xl font-bold mt-12 mb-4 text-[#141414] scroll-mt-20`,children:`Cómo se relacionan las partes`}),(0,o.jsx)(`p`,{className:`text-base leading-7 text-[#141414] my-6`,children:`Cada capa tiene una responsabilidad concreta y se comunica con la siguiente de forma ordenada. Cuando llega una petición HTTP, el flujo típico es:`}),(0,o.jsx)(`div`,{className:`my-8 flex flex-col gap-3`,children:[{step:`1`,layer:`Controller`,desc:`Recibe la petición HTTP y delega al servicio.`},{step:`2`,layer:`Service`,desc:`Aplica la lógica de negocio y usa el repositorio para acceder a datos.`},{step:`3`,layer:`Repository`,desc:`Ejecuta la consulta o escritura en la base de datos.`},{step:`4`,layer:`Mapper`,desc:`Convierte la entidad devuelta en un DTO de respuesta.`},{step:`5`,layer:`Controller`,desc:`Devuelve el DTO al cliente como respuesta HTTP.`}].map(({step:e,layer:t,desc:n})=>(0,o.jsxs)(`div`,{className:`flex items-start gap-4`,children:[(0,o.jsx)(`span`,{className:`shrink-0 w-8 h-8 rounded-full bg-[#141414] text-white text-sm font-bold flex items-center justify-center`,children:e}),(0,o.jsxs)(`div`,{className:`flex-1 border border-[#f2f2f2] rounded-xl px-4 py-3`,children:[(0,o.jsx)(`span`,{className:`font-semibold text-[#141414]`,children:t}),(0,o.jsxs)(`span`,{className:`text-[#757575]`,children:[` — `,n]})]})]},e))}),(0,o.jsx)(n,{title:`Regla útil`,children:`El controlador nunca accede directamente al repositorio, y el repositorio no conoce la lógica de negocio. Cada capa solo habla con la que tiene al lado.`}),(0,o.jsx)(`h2`,{id:`entity`,className:`text-2xl font-bold mt-12 mb-4 text-[#141414] scroll-mt-20`,children:`entity`}),(0,o.jsxs)(`p`,{className:`text-base leading-7 text-[#141414] my-6`,children:[`La carpeta`,` `,(0,o.jsx)(`code`,{className:`bg-[#f7f7f7] px-1.5 py-0.5 rounded text-sm`,children:`entity`}),` `,`contiene las clases que representan la información persistida en la base de datos. Normalmente estas clases se anotan con`,` `,(0,o.jsx)(`code`,{className:`bg-[#f7f7f7] px-1.5 py-0.5 rounded text-sm`,children:`@Entity`}),`.`]}),(0,o.jsx)(a,{code:c,title:`Usuario.java`}),(0,o.jsx)(`p`,{className:`text-base leading-7 text-[#141414] my-6`,children:`Estas clases modelan tablas y relaciones. Su objetivo principal es representar datos, no definir cómo responder una API ni contener reglas complejas del negocio.`}),(0,o.jsx)(`h2`,{id:`dto`,className:`text-2xl font-bold mt-12 mb-4 text-[#141414] scroll-mt-20`,children:`dto`}),(0,o.jsxs)(`p`,{className:`text-base leading-7 text-[#141414] my-6`,children:[`La carpeta`,` `,(0,o.jsx)(`code`,{className:`bg-[#f7f7f7] px-1.5 py-0.5 rounded text-sm`,children:`dto`}),` `,`agrupa objetos usados para transportar datos entre capas o hacia el exterior. Es común separar DTOs de entrada y de salida, por ejemplo`,` `,(0,o.jsx)(`code`,{className:`bg-[#f7f7f7] px-1.5 py-0.5 rounded text-sm`,children:`UsuarioRequest`}),` `,`y`,` `,(0,o.jsx)(`code`,{className:`bg-[#f7f7f7] px-1.5 py-0.5 rounded text-sm`,children:`UsuarioResponse`}),`.`]}),(0,o.jsx)(a,{code:l,title:`DTOs.java`}),(0,o.jsx)(`p`,{className:`text-base leading-7 text-[#141414] my-6`,children:`Esto ayuda a no exponer directamente las entidades en la API y permite decidir con más precisión qué datos recibe y devuelve el sistema.`}),(0,o.jsx)(`h2`,{id:`repository`,className:`text-2xl font-bold mt-12 mb-4 text-[#141414] scroll-mt-20`,children:`repository`}),(0,o.jsxs)(`p`,{className:`text-base leading-7 text-[#141414] my-6`,children:[`La carpeta`,` `,(0,o.jsx)(`code`,{className:`bg-[#f7f7f7] px-1.5 py-0.5 rounded text-sm`,children:`repository`}),` `,`contiene interfaces encargadas del acceso a datos. Aquí se definen los repositorios que hablan con la base de datos a través de Spring Data JPA.`]}),(0,o.jsx)(a,{code:u,title:`UsuarioRepository.java`}),(0,o.jsx)(`p`,{className:`text-base leading-7 text-[#141414] my-6`,children:`Los repositorios deben enfocarse en consultar, guardar, actualizar o eliminar datos. No deberían encargarse de lógica de negocio ni de construir respuestas HTTP.`}),(0,o.jsx)(`h2`,{id:`service`,className:`text-2xl font-bold mt-12 mb-4 text-[#141414] scroll-mt-20`,children:`service`}),(0,o.jsxs)(`p`,{className:`text-base leading-7 text-[#141414] my-6`,children:[`La carpeta`,` `,(0,o.jsx)(`code`,{className:`bg-[#f7f7f7] px-1.5 py-0.5 rounded text-sm`,children:`service`}),` `,`contiene la lógica de negocio. Esta capa actúa como intermediaria entre controladores y repositorios.`]}),(0,o.jsx)(a,{code:d,title:`UsuarioService.java`}),(0,o.jsx)(`p`,{className:`text-base leading-7 text-[#141414] my-6`,children:`Aquí suelen colocarse validaciones de negocio, coordinación entre varias operaciones, transacciones y transformaciones necesarias antes de guardar o devolver datos.`}),(0,o.jsx)(n,{title:`Regla útil`,children:`El controlador recibe la petición, el servicio toma decisiones y el repositorio accede a la base de datos.`}),(0,o.jsx)(`h2`,{id:`controller`,className:`text-2xl font-bold mt-12 mb-4 text-[#141414] scroll-mt-20`,children:`controller`}),(0,o.jsxs)(`p`,{className:`text-base leading-7 text-[#141414] my-6`,children:[`La carpeta`,` `,(0,o.jsx)(`code`,{className:`bg-[#f7f7f7] px-1.5 py-0.5 rounded text-sm`,children:`controller`}),` `,`agrupa los endpoints HTTP. Su responsabilidad es recibir requests, delegar al servicio correspondiente y devolver responses.`]}),(0,o.jsx)(a,{code:f,title:`UsuarioController.java`}),(0,o.jsx)(`p`,{className:`text-base leading-7 text-[#141414] my-6`,children:`Los controladores no deberían contener demasiada lógica. Lo ideal es que sean delgados y que su trabajo principal sea conectarse con la capa de servicios.`}),(0,o.jsx)(`h2`,{id:`mapper`,className:`text-2xl font-bold mt-12 mb-4 text-[#141414] scroll-mt-20`,children:`mapper`}),(0,o.jsxs)(`p`,{className:`text-base leading-7 text-[#141414] my-6`,children:[`La carpeta`,` `,(0,o.jsx)(`code`,{className:`bg-[#f7f7f7] px-1.5 py-0.5 rounded text-sm`,children:`mapper`}),` `,`es útil cuando quieres separar la conversión entre entidades y DTOs. Con`,` `,(0,o.jsx)(`code`,{className:`bg-[#f7f7f7] px-1.5 py-0.5 rounded text-sm`,children:`MapStruct`}),` `,`basta con declarar una interfaz anotada con`,` `,(0,o.jsx)(`code`,{className:`bg-[#f7f7f7] px-1.5 py-0.5 rounded text-sm`,children:`@Mapper`}),` `,`y el procesador de anotaciones genera la implementación en tiempo de compilación.`]}),(0,o.jsx)(a,{code:_,title:`UsuarioMapper.java`}),(0,o.jsxs)(`p`,{className:`text-base leading-7 text-[#141414] my-6`,children:[`MapStruct infiere el mapeo automáticamente cuando los nombres de los campos coinciden. El parámetro`,` `,(0,o.jsx)(`code`,{className:`bg-[#f7f7f7] px-1.5 py-0.5 rounded text-sm`,children:`componentModel = SPRING`}),` `,`hace que el mapper sea un bean inyectable directamente en el servicio.`]}),(0,o.jsxs)(`h3`,{id:`mapping-annotation`,className:`text-xl font-bold mt-10 mb-4 text-[#141414] scroll-mt-20`,children:[`Cuándo usar `,(0,o.jsx)(`code`,{className:`text-lg`,children:`@Mapping`})]}),(0,o.jsxs)(`p`,{className:`text-base leading-7 text-[#141414] my-6`,children:[`Cuando los nombres de los campos coinciden y los tipos son compatibles, no necesitas nada extra. En cuanto algo difiere, entra`,` `,(0,o.jsx)(`code`,{className:`bg-[#f7f7f7] px-1.5 py-0.5 rounded text-sm`,children:`@Mapping`}),`.`]}),(0,o.jsx)(`p`,{className:`text-base leading-7 text-[#141414] mt-6 mb-2 font-semibold`,children:`Nombres de campo distintos`}),(0,o.jsx)(a,{code:p,title:`UsuarioMapper.java`}),(0,o.jsx)(`p`,{className:`text-base leading-7 text-[#141414] mt-6 mb-2 font-semibold`,children:`Campos anidados`}),(0,o.jsx)(a,{code:m,title:`UsuarioMapper.java`}),(0,o.jsx)(`p`,{className:`text-base leading-7 text-[#141414] mt-6 mb-2 font-semibold`,children:`Ignorar un campo`}),(0,o.jsx)(a,{code:h,title:`UsuarioMapper.java`}),(0,o.jsx)(`p`,{className:`text-base leading-7 text-[#141414] mt-6 mb-2 font-semibold`,children:`Valor constante o expresión Java`}),(0,o.jsx)(a,{code:g,title:`UsuarioMapper.java`}),(0,o.jsx)(`h2`,{id:`otras-carpetas`,className:`text-2xl font-bold mt-12 mb-4 text-[#141414] scroll-mt-20`,children:`Otras carpetas útiles`}),(0,o.jsxs)(`div`,{className:`grid md:grid-cols-2 gap-6 my-8`,children:[(0,o.jsxs)(`div`,{className:`p-6 border border-[#f2f2f2] rounded-xl`,children:[(0,o.jsx)(`h3`,{className:`font-bold text-lg mb-2 text-[#141414]`,children:`config`}),(0,o.jsx)(`p`,{className:`text-sm text-[#757575]`,children:`Configuraciones de seguridad, beans personalizados, CORS o Swagger.`})]}),(0,o.jsxs)(`div`,{className:`p-6 border border-[#f2f2f2] rounded-xl`,children:[(0,o.jsx)(`h3`,{className:`font-bold text-lg mb-2 text-[#141414]`,children:`exception`}),(0,o.jsx)(`p`,{className:`text-sm text-[#757575]`,children:`Excepciones personalizadas y manejadores globales de errores.`})]}),(0,o.jsxs)(`div`,{className:`p-6 border border-[#f2f2f2] rounded-xl`,children:[(0,o.jsx)(`h3`,{className:`font-bold text-lg mb-2 text-[#141414]`,children:`util`}),(0,o.jsx)(`p`,{className:`text-sm text-[#757575]`,children:`Constantes o utilidades compartidas, siempre que tengan un propósito claro.`})]}),(0,o.jsxs)(`div`,{className:`p-6 border border-[#f2f2f2] rounded-xl`,children:[(0,o.jsx)(`h3`,{className:`font-bold text-lg mb-2 text-[#141414]`,children:`resources`}),(0,o.jsx)(`p`,{className:`text-sm text-[#757575]`,children:`Archivos de configuración, plantillas, contenido estático y perfiles del entorno.`})]})]}),(0,o.jsx)(n,{title:`Buenas prácticas`,children:`Evita mezclar responsabilidades. Si una clase recibe requests, además hace consultas SQL y también transforma DTOs, probablemente esa clase ya está haciendo demasiado.`}),(0,o.jsx)(n,{title:`Resumen`,children:`Una estructura clara en Spring Boot separa entidades, DTOs, repositorios, servicios, controladores y utilidades de soporte. Esto mejora la mantenibilidad del proyecto y hace más simple trabajar en equipo o escalar la aplicación con el tiempo.`})]});export{v as Estructura};