import{a as e,i as t,n,o as r,r as i,t as a}from"./index-Dt8U_ycJ.js";var o=r(),s=`<span class="keyword">import</span> <span class="string">org.springframework.stereotype.Service</span>;

<span class="keyword">@Service</span>
<span class="keyword">public class</span> <span class="string">UsuarioService</span> {

    <span class="keyword">public</span> <span class="string">String</span> obtenerMensaje() {
        <span class="keyword">return</span> <span class="string">"Hola desde la capa de servicio"</span>;
    }
}`,c=`<span class="keyword">import</span> <span class="string">org.springframework.stereotype.Service</span>;

<span class="keyword">@Service</span>
<span class="keyword">public class</span> <span class="string">PrecioService</span> {

    <span class="keyword">public</span> <span class="string">Double</span> calcularPrecioFinal(Double precioBase, Double descuento) {
        <span class="keyword">return</span> precioBase - (precioBase * descuento);
    }
}`,l=`<span class="keyword">import</span> <span class="string">org.springframework.stereotype.Service</span>;
<span class="keyword">import</span> <span class="string">java.util.List</span>;

<span class="keyword">@Service</span>
<span class="keyword">public class</span> <span class="string">UsuarioService</span> {

    <span class="keyword">private final</span> <span class="string">UsuarioRepository</span> usuarioRepository;

    <span class="keyword">public</span> <span class="string">UsuarioService</span>(<span class="string">UsuarioRepository</span> usuarioRepository) {
        <span class="keyword">this</span>.usuarioRepository = usuarioRepository;
    }

    <span class="keyword">public</span> <span class="string">List&lt;Usuario&gt;</span> listarUsuarios() {
        <span class="keyword">return</span> usuarioRepository.findAll();
    }

    <span class="keyword">public</span> <span class="string">Usuario</span> guardarUsuario(<span class="string">Usuario</span> usuario) {
        <span class="keyword">return</span> usuarioRepository.save(usuario);
    }
}`,u=`<span class="keyword">public class</span> <span class="string">UsuarioDto</span> {
    <span class="keyword">private</span> <span class="string">Long</span> id;
    <span class="keyword">private</span> <span class="string">String</span> nombre;
    <span class="keyword">private</span> <span class="string">String</span> email;

    <span class="comment">// getters y setters</span>
}`,d=`<span class="keyword">import</span> <span class="string">org.springframework.stereotype.Service</span>;

<span class="keyword">@Service</span>
<span class="keyword">public class</span> <span class="string">UsuarioService</span> {

    <span class="keyword">public</span> <span class="string">UsuarioDto</span> convertirADto(<span class="string">Usuario</span> usuario) {
        <span class="string">UsuarioDto</span> dto = <span class="keyword">new</span> <span class="string">UsuarioDto</span>();
        dto.setId(usuario.getId());
        dto.setNombre(usuario.getNombre());
        dto.setEmail(usuario.getEmail());
        <span class="keyword">return</span> dto;
    }
}`,f=()=>(0,o.jsxs)(t,{toc:(0,o.jsx)(i,{items:e.sidebar[1].items[3].toc}),children:[(0,o.jsx)(`h1`,{className:`text-4xl font-extrabold tracking-tight text-[#141414] mb-4`,children:`Capa de Servicios`}),(0,o.jsx)(`p`,{className:`text-xl text-[#757575] leading-relaxed`,children:`La capa de servicios en Spring Boot se encarga de contener la lógica de negocio de la aplicación. Su objetivo es actuar como intermediaria entre los controladores y la capa de persistencia, manteniendo el código más ordenado, reutilizable y fácil de mantener.`}),(0,o.jsx)(`h2`,{id:`service-layer`,className:`text-2xl font-bold mt-12 mb-4 text-[#141414] scroll-mt-20`,children:`¿Qué es la capa de servicio?`}),(0,o.jsxs)(`p`,{className:`text-base leading-7 text-[#141414] my-6`,children:[`La `,(0,o.jsx)(`span`,{className:`font-semibold`,children:`capa de servicio`}),` es la parte de la aplicación donde normalmente se organiza la lógica que no corresponde directamente ni a la recepción de peticiones HTTP ni al acceso directo a la base de datos.`]}),(0,o.jsxs)(`p`,{className:`text-base leading-7 text-[#141414] my-6`,children:[`En Spring Boot, esta capa suele marcarse con la anotación`,` `,(0,o.jsx)(`code`,{className:`bg-[#f7f7f7] px-1.5 py-0.5 rounded text-sm`,children:`@Service`}),`. Esto permite que Spring detecte automáticamente la clase como un componente administrado por el contenedor.`]}),(0,o.jsx)(a,{code:s,title:`UsuarioService.java`}),(0,o.jsx)(`p`,{className:`text-base leading-7 text-[#141414] my-6`,children:`Aunque este ejemplo es simple, muestra la idea principal: concentrar comportamiento útil en una clase separada del controlador.`}),(0,o.jsx)(`h2`,{id:`logica-negocio`,className:`text-2xl font-bold mt-12 mb-4 text-[#141414] scroll-mt-20`,children:`Lógica de negocio`}),(0,o.jsx)(`p`,{className:`text-base leading-7 text-[#141414] my-6`,children:`La lógica de negocio representa las reglas y decisiones propias de la aplicación. Por ejemplo, calcular descuentos, validar condiciones antes de guardar un registro, coordinar operaciones entre varias entidades o transformar información antes de devolverla.`}),(0,o.jsx)(`p`,{className:`text-base leading-7 text-[#141414] my-6`,children:`Colocar esta lógica en la capa de servicios evita que los controladores crezcan demasiado y ayuda a reutilizar el mismo comportamiento desde distintos puntos del sistema.`}),(0,o.jsx)(a,{code:c,title:`PrecioService.java`}),(0,o.jsx)(`p`,{className:`text-base leading-7 text-[#141414] my-6`,children:`En este ejemplo, el servicio encapsula una regla de cálculo. El controlador podría llamar este método sin necesitar conocer el detalle interno de la operación.`}),(0,o.jsx)(n,{title:`Idea principal`,children:`Un controlador debería encargarse de recibir y responder peticiones. La lógica del negocio debería vivir principalmente en los servicios.`}),(0,o.jsx)(`h2`,{id:`inyeccion-repositorios`,className:`text-2xl font-bold mt-12 mb-4 text-[#141414] scroll-mt-20`,children:`Uso de repositorios`}),(0,o.jsx)(`p`,{className:`text-base leading-7 text-[#141414] my-6`,children:`Una tarea común de la capa de servicios es usar repositorios para leer o guardar información en la base de datos. En lugar de que el controlador acceda directamente a un repositorio, normalmente es mejor que delegue esa responsabilidad al servicio.`}),(0,o.jsx)(a,{code:l,title:`UsuarioService.java`}),(0,o.jsxs)(`p`,{className:`text-base leading-7 text-[#141414] my-6`,children:[`Aquí, el servicio recibe una instancia de`,` `,(0,o.jsx)(`code`,{className:`bg-[#f7f7f7] px-1.5 py-0.5 rounded text-sm`,children:`UsuarioRepository`}),` `,`mediante inyección por constructor y la utiliza para listar y guardar usuarios.`]}),(0,o.jsxs)(`div`,{className:`grid md:grid-cols-2 gap-6 my-8`,children:[(0,o.jsxs)(`div`,{className:`p-6 border border-[#f2f2f2] rounded-xl`,children:[(0,o.jsx)(`h3`,{className:`font-bold text-lg mb-2 text-[#141414]`,children:`Mejor separación`}),(0,o.jsx)(`p`,{className:`text-sm text-[#757575]`,children:`El controlador no necesita conocer detalles de acceso a datos ni de persistencia.`})]}),(0,o.jsxs)(`div`,{className:`p-6 border border-[#f2f2f2] rounded-xl`,children:[(0,o.jsx)(`h3`,{className:`font-bold text-lg mb-2 text-[#141414]`,children:`Reutilización`}),(0,o.jsx)(`p`,{className:`text-sm text-[#757575]`,children:`El mismo servicio puede ser utilizado por distintos controladores o procesos internos.`})]})]}),(0,o.jsx)(`h2`,{id:`dto`,className:`text-2xl font-bold mt-12 mb-4 text-[#141414] scroll-mt-20`,children:`DTOs`}),(0,o.jsxs)(`p`,{className:`text-base leading-7 text-[#141414] my-6`,children:[`Un `,(0,o.jsx)(`span`,{className:`font-semibold`,children:`DTO`}),` es un objeto pensado para transferir datos entre capas o hacia el exterior de la aplicación. Su función es evitar exponer directamente las entidades de base de datos y permitir controlar mejor qué información entra o sale.`]}),(0,o.jsx)(a,{code:u,title:`UsuarioDto.java`}),(0,o.jsx)(`p`,{className:`text-base leading-7 text-[#141414] my-6`,children:`Un DTO puede tener solo los campos necesarios para una respuesta o una petición, sin incluir toda la estructura interna de la entidad.`}),(0,o.jsx)(a,{code:d,title:`UsuarioService.java`}),(0,o.jsxs)(`p`,{className:`text-base leading-7 text-[#141414] my-6`,children:[`En este ejemplo, el servicio convierte una entidad`,` `,(0,o.jsx)(`code`,{className:`bg-[#f7f7f7] px-1.5 py-0.5 rounded text-sm`,children:`Usuario`}),` `,`en un`,` `,(0,o.jsx)(`code`,{className:`bg-[#f7f7f7] px-1.5 py-0.5 rounded text-sm`,children:`UsuarioDto`}),`. Esto ayuda a separar el modelo interno de la forma en que los datos se exponen en la API.`]}),(0,o.jsx)(n,{title:`Buenas prácticas`,children:`Usa la capa de servicios para centralizar reglas de negocio, coordinar repositorios, manejar transacciones cuando sea necesario y transformar datos con DTOs antes de devolverlos.`}),(0,o.jsx)(n,{title:`Resumen`,children:`La capa de servicios organiza la lógica de negocio, sirve de puente entre controladores y repositorios, y permite trabajar con DTOs para mantener una aplicación más limpia, desacoplada y fácil de escalar.`})]});export{f as Servicios};