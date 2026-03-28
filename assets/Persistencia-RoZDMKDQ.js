import{a as e,i as t,n,o as r,r as i,t as a}from"./index-ByLeivlo.js";var o=r(),s=`<span class="keyword">@Entity</span>
<span class="keyword">@Table</span>(name = "usuarios")
<span class="keyword">public class</span> <span class="string">Usuario</span> {

    <span class="keyword">@Id</span>
    <span class="keyword">@GeneratedValue</span>(strategy = GenerationType.IDENTITY)
    <span class="keyword">private</span> <span class="string">Long</span> id;

    <span class="keyword">@Column</span>(name = "nombre", nullable = false, length = 100)
    <span class="keyword">private</span> <span class="string">String</span> nombre;

    <span class="keyword">@Column</span>(name = "email", unique = true, length = 100)
    <span class="keyword">private</span> <span class="string">String</span> email;

    <span class="comment">// getters y setters</span>
}`,c=`<span class="keyword">import</span> <span class="string">org.springframework.data.jpa.repository.JpaRepository</span>;

<span class="keyword">public interface</span> <span class="string">UsuarioRepository</span> <span class="keyword">extends</span> <span class="string">JpaRepository</span>&lt;<span class="string">Usuario</span>, <span class="string">Long</span>&gt; {
}`,l=`<span class="keyword">import</span> <span class="string">org.springframework.stereotype.Service</span>;
<span class="keyword">import</span> <span class="string">java.util.List</span>;

<span class="keyword">@Service</span>
<span class="keyword">public class</span> <span class="string">UsuarioService</span> {

    <span class="keyword">private final</span> <span class="string">UsuarioRepository</span> usuarioRepository;

    <span class="keyword">public</span> <span class="string">UsuarioService</span>(<span class="string">UsuarioRepository</span> usuarioRepository) {
        <span class="keyword">this</span>.usuarioRepository = usuarioRepository;
    }

    <span class="keyword">public</span> <span class="string">List&lt;Usuario&gt;</span> listar() {
        <span class="keyword">return</span> usuarioRepository.findAll();
    }

    <span class="keyword">public</span> <span class="string">Usuario</span> guardar(<span class="string">Usuario</span> usuario) {
        <span class="keyword">return</span> usuarioRepository.save(usuario);
    }
}`,u=`<span class="keyword">import</span> <span class="string">org.springframework.data.jpa.repository.JpaRepository</span>;
<span class="keyword">import</span> <span class="string">org.springframework.data.jpa.repository.Query</span>;
<span class="keyword">import</span> <span class="string">java.util.Optional</span>;

<span class="keyword">public interface</span> <span class="string">UsuarioRepository</span> <span class="keyword">extends</span> <span class="string">JpaRepository</span>&lt;<span class="string">Usuario</span>, <span class="string">Long</span>&gt; {

    <span class="string">Optional&lt;Usuario&gt;</span> findByEmail(String email);

    <span class="string">@Query</span>(<span class="string">"SELECT u FROM Usuario u WHERE u.nombre LIKE %:nombre%"</span>)
    <span class="string">List&lt;Usuario&gt;</span> buscarPorNombre(String nombre);
}`,d=`<span class="keyword">import</span> <span class="string">org.springframework.stereotype.Service</span>;
<span class="keyword">import</span> <span class="string">org.springframework.transaction.annotation.Transactional</span>;

<span class="keyword">@Service</span>
<span class="keyword">public class</span> <span class="string">TransferenciaService</span> {

    <span class="keyword">private final</span> <span class="string">CuentaRepository</span> cuentaRepository;

    <span class="keyword">public</span> <span class="string">TransferenciaService</span>(<span class="string">CuentaRepository</span> cuentaRepository) {
        <span class="keyword">this</span>.cuentaRepository = cuentaRepository;
    }

    <span class="string">@Transactional</span>
    <span class="keyword">public</span> <span class="string">void</span> transferir(Long origenId, Long destinoId, Double monto) {
        <span class="comment">// lógica de débito y crédito</span>
    }
}`,f=`spring.datasource.driver-class-name=org.postgresql.Driver
spring.datasource.url=jdbc:postgresqlo://localhost:5432/database-name.db
spring.datasource.username=user
spring.datasource.password=password

spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true
spring.jpa.properties.hibernate.format_sql=true`,p=()=>(0,o.jsxs)(t,{toc:(0,o.jsx)(i,{items:e.sidebar[1].items[2].toc}),children:[(0,o.jsx)(`h1`,{className:`text-4xl font-extrabold tracking-tight text-[#141414] mb-4`,children:`Persistencia`}),(0,o.jsx)(`p`,{className:`text-xl text-[#757575] leading-relaxed`,children:`La persistencia en Spring Boot permite guardar y consultar información en bases de datos de forma organizada. Con Spring Data JPA se reduce mucho el código repetitivo y se facilita el trabajo con entidades, repositorios, consultas y transacciones.`}),(0,o.jsx)(`h2`,{id:`spring-data-jpa`,className:`text-2xl font-bold mt-12 mb-4 text-[#141414] scroll-mt-20`,children:`Spring Data JPA`}),(0,o.jsxs)(`p`,{className:`text-base leading-7 text-[#141414] my-6`,children:[(0,o.jsx)(`span`,{className:`font-semibold`,children:`Spring Data JPA`}),` es un módulo del ecosistema Spring que simplifica el acceso a datos en aplicaciones Java. Su propósito es permitir que trabajes con objetos y repositorios, en lugar de escribir manualmente gran cantidad de SQL o lógica de acceso a base de datos.`]}),(0,o.jsx)(`p`,{className:`text-base leading-7 text-[#141414] my-6`,children:`Integrado con JPA y normalmente con Hibernate como implementación, este módulo permite mapear clases Java a tablas, ejecutar operaciones CRUD y definir consultas personalizadas de manera clara.`}),(0,o.jsx)(a,{code:f,title:`src/main/resources/application.properties`}),(0,o.jsx)(`p`,{className:`text-base leading-7 text-[#141414] my-6`,children:`Estas propiedades muestran una configuración básica para conectar la aplicación a una base de datos PostgreSQL y habilitar opciones comunes de JPA.`}),(0,o.jsx)(n,{title:`Tip`,children:`Al momento de hacer la configuración con Spring Initializr, debemos escoger las dependencias de "Spring Data JPA", "PostgreSQL Driver" y "Docker Compose Support" para tener todo listo para trabajar con persistencia y contenedores.`}),(0,o.jsx)(`h2`,{id:`entidades`,className:`text-2xl font-bold mt-12 mb-4 text-[#141414] scroll-mt-20`,children:`Entidades (@Entity)`}),(0,o.jsxs)(`p`,{className:`text-base leading-7 text-[#141414] my-6`,children:[`Una `,(0,o.jsx)(`span`,{className:`font-semibold`,children:`entidad`}),` es una clase Java que representa una tabla de la base de datos. Cada instancia de la clase representa un registro, y sus atributos suelen corresponder a columnas.`]}),(0,o.jsxs)(`p`,{className:`text-base leading-7 text-[#141414] my-6`,children:[`Para indicar que una clase es una entidad se utiliza la anotación`,` `,(0,o.jsx)(`code`,{className:`bg-[#f7f7f7] px-1.5 py-0.5 rounded text-sm`,children:`@Entity`}),`. Además, normalmente se define un identificador con`,` `,(0,o.jsx)(`code`,{className:`bg-[#f7f7f7] px-1.5 py-0.5 rounded text-sm`,children:`@Id`}),`.`]}),(0,o.jsx)(a,{code:s,title:`Usuario.java`}),(0,o.jsxs)(`p`,{className:`text-base leading-7 text-[#141414] my-6`,children:[`En este ejemplo, la clase`,` `,(0,o.jsx)(`code`,{className:`bg-[#f7f7f7] px-1.5 py-0.5 rounded text-sm`,children:`Usuario`}),` `,`representa una entidad con un id autogenerado y dos campos básicos: nombre y email.`]}),(0,o.jsx)(`h2`,{id:`repositorios`,className:`text-2xl font-bold mt-12 mb-4 text-[#141414] scroll-mt-20`,children:`Repositorios`}),(0,o.jsxs)(`p`,{className:`text-base leading-7 text-[#141414] my-6`,children:[`Un `,(0,o.jsx)(`span`,{className:`font-semibold`,children:`repositorio`}),` es la capa que se encarga de comunicar la aplicación con la base de datos. En Spring Data JPA, basta con crear una interfaz que extienda`,` `,(0,o.jsx)(`code`,{className:`bg-[#f7f7f7] px-1.5 py-0.5 rounded text-sm`,children:`JpaRepository`}),` `,`para obtener automáticamente métodos CRUD como guardar, buscar, listar y eliminar.`]}),(0,o.jsx)(a,{code:c,title:`UsuarioRepository.java`}),(0,o.jsxs)(`p`,{className:`text-base leading-7 text-[#141414] my-6`,children:[`Con esta interfaz ya puedes usar métodos como`,` `,(0,o.jsx)(`code`,{className:`bg-[#f7f7f7] px-1.5 py-0.5 rounded text-sm`,children:`findAll()`}),`,`,` `,(0,o.jsx)(`code`,{className:`bg-[#f7f7f7] px-1.5 py-0.5 rounded text-sm`,children:`findById()`}),`,`,` `,(0,o.jsx)(`code`,{className:`bg-[#f7f7f7] px-1.5 py-0.5 rounded text-sm`,children:`save()`}),` `,`o`,` `,(0,o.jsx)(`code`,{className:`bg-[#f7f7f7] px-1.5 py-0.5 rounded text-sm`,children:`deleteById()`}),` `,`sin implementarlos manualmente.`]}),(0,o.jsx)(a,{code:l,title:`UsuarioService.java`}),(0,o.jsx)(`p`,{className:`text-base leading-7 text-[#141414] my-6`,children:`Lo habitual es usar el repositorio dentro de la capa de servicio, donde se concentra la lógica de negocio y se evita que los controladores accedan directamente a la persistencia.`}),(0,o.jsx)(`h2`,{id:`consultas`,className:`text-2xl font-bold mt-12 mb-4 text-[#141414] scroll-mt-20`,children:`Consultas personalizadas`}),(0,o.jsxs)(`p`,{className:`text-base leading-7 text-[#141414] my-6`,children:[`Además de los métodos básicos, Spring Data JPA permite crear`,` `,(0,o.jsx)(`span`,{className:`font-semibold`,children:`consultas personalizadas`}),`. Una forma simple es definir métodos siguiendo convenciones de nombre, por ejemplo`,` `,(0,o.jsx)(`code`,{className:`bg-[#f7f7f7] px-1.5 py-0.5 rounded text-sm`,children:`findByEmail`}),`. También puedes usar la anotación`,` `,(0,o.jsx)(`code`,{className:`bg-[#f7f7f7] px-1.5 py-0.5 rounded text-sm`,children:`@Query`}),` `,`cuando necesitas una consulta más específica.`]}),(0,o.jsx)(a,{code:u,title:`ConsultasPersonalizadas.java`}),(0,o.jsxs)(`div`,{className:`grid md:grid-cols-2 gap-6 my-8`,children:[(0,o.jsxs)(`div`,{className:`p-6 border border-[#f2f2f2] rounded-xl`,children:[(0,o.jsx)(`h3`,{className:`font-bold text-lg mb-2 text-[#141414]`,children:`Métodos por convención`}),(0,o.jsx)(`p`,{className:`text-sm text-[#757575]`,children:`Permiten generar consultas automáticamente a partir del nombre del método.`})]}),(0,o.jsxs)(`div`,{className:`p-6 border border-[#f2f2f2] rounded-xl`,children:[(0,o.jsx)(`h3`,{className:`font-bold text-lg mb-2 text-[#141414]`,children:`Consultas con @Query`}),(0,o.jsx)(`p`,{className:`text-sm text-[#757575]`,children:`Dan mayor control cuando necesitas una búsqueda más precisa o compleja.`})]})]}),(0,o.jsx)(`h2`,{id:`transacciones`,className:`text-2xl font-bold mt-12 mb-4 text-[#141414] scroll-mt-20`,children:`Transacciones`}),(0,o.jsxs)(`p`,{className:`text-base leading-7 text-[#141414] my-6`,children:[`Una `,(0,o.jsx)(`span`,{className:`font-semibold`,children:`transacción`}),` agrupa varias operaciones de base de datos en una única unidad de trabajo. Esto es importante cuando varias acciones deben ejecutarse juntas: si una falla, lo correcto es revertir todas para mantener la consistencia de los datos.`]}),(0,o.jsxs)(`p`,{className:`text-base leading-7 text-[#141414] my-6`,children:[`En Spring Boot, esto se maneja normalmente con la anotación`,` `,(0,o.jsx)(`code`,{className:`bg-[#f7f7f7] px-1.5 py-0.5 rounded text-sm`,children:`@Transactional`}),`.`]}),(0,o.jsx)(a,{code:d,title:`TransferenciaService.java`}),(0,o.jsx)(`p`,{className:`text-base leading-7 text-[#141414] my-6`,children:`Este enfoque es útil, por ejemplo, en transferencias, pagos, actualizaciones múltiples o cualquier proceso donde no convenga guardar resultados parciales si algo falla.`}),(0,o.jsx)(n,{title:`Buenas prácticas`,children:`Mantén las entidades enfocadas en representar datos, usa repositorios para el acceso a base de datos y coloca la lógica de negocio y las transacciones en la capa de servicios.`}),(0,o.jsx)(n,{title:`Resumen`,children:`La persistencia en Spring Boot se construye con entidades para modelar tablas, repositorios para acceder a los datos, consultas personalizadas para búsquedas más específicas y transacciones para mantener la consistencia de la información.`})]});export{p as Persistencia};