import { DocsLayout } from "../layout/Docs.tsx";
import { TableOfContents } from "../components/TableOfContents.tsx";
import modulosData from "../data/modulos.json";
import Note from "../components/Notes.tsx";
import Codeblock from "../components/Codeblock.tsx";

const entityCode = `<span class="keyword">@Entity</span>
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
}`;

const repositoryCode = `<span class="keyword">import</span> <span class="string">org.springframework.data.jpa.repository.JpaRepository</span>;

<span class="keyword">public interface</span> <span class="string">UsuarioRepository</span> <span class="keyword">extends</span> <span class="string">JpaRepository</span>&lt;<span class="string">Usuario</span>, <span class="string">Long</span>&gt; {
}`;

const serviceCode = `<span class="keyword">import</span> <span class="string">org.springframework.stereotype.Service</span>;
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
}`;

const customQueryCode = `<span class="keyword">import</span> <span class="string">org.springframework.data.jpa.repository.JpaRepository</span>;
<span class="keyword">import</span> <span class="string">org.springframework.data.jpa.repository.Query</span>;
<span class="keyword">import</span> <span class="string">java.util.Optional</span>;

<span class="keyword">public interface</span> <span class="string">UsuarioRepository</span> <span class="keyword">extends</span> <span class="string">JpaRepository</span>&lt;<span class="string">Usuario</span>, <span class="string">Long</span>&gt; {

    <span class="string">Optional&lt;Usuario&gt;</span> findByEmail(String email);

    <span class="string">@Query</span>(<span class="string">"SELECT u FROM Usuario u WHERE u.nombre LIKE %:nombre%"</span>)
    <span class="string">List&lt;Usuario&gt;</span> buscarPorNombre(String nombre);
}`;

const transactionCode = `<span class="keyword">import</span> <span class="string">org.springframework.stereotype.Service</span>;
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
}`;

const propertiesCode = `spring.datasource.driver-class-name=org.postgresql.Driver
spring.datasource.url=jdbc:postgresqlo://localhost:5432/database-name.db
spring.datasource.username=user
spring.datasource.password=password

spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true
spring.jpa.properties.hibernate.format_sql=true`;

export const Persistencia = () => {
  return (
    <DocsLayout
      toc={<TableOfContents items={modulosData.sidebar[1].items[2].toc} />}
    >
      <h1 className="text-4xl font-extrabold tracking-tight text-[#141414] mb-4">
        Persistencia
      </h1>

      <p className="text-xl text-[#757575] leading-relaxed">
        La persistencia en Spring Boot permite guardar y consultar información
        en bases de datos de forma organizada. Con Spring Data JPA se reduce
        mucho el código repetitivo y se facilita el trabajo con entidades,
        repositorios, consultas y transacciones.
      </p>

      <h2
        id="spring-data-jpa"
        className="text-2xl font-bold mt-12 mb-4 text-[#141414] scroll-mt-20"
      >
        Spring Data JPA
      </h2>

      <p className="text-base leading-7 text-[#141414] my-6">
        <span className="font-semibold">Spring Data JPA</span> es un módulo del
        ecosistema Spring que simplifica el acceso a datos en aplicaciones Java.
        Su propósito es permitir que trabajes con objetos y repositorios, en
        lugar de escribir manualmente gran cantidad de SQL o lógica de acceso a
        base de datos.
      </p>

      <p className="text-base leading-7 text-[#141414] my-6">
        Integrado con JPA y normalmente con Hibernate como implementación, este
        módulo permite mapear clases Java a tablas, ejecutar operaciones CRUD y
        definir consultas personalizadas de manera clara.
      </p>

      <Codeblock
        code={propertiesCode}
        title="src/main/resources/application.properties"
      />

      <p className="text-base leading-7 text-[#141414] my-6">
        Estas propiedades muestran una configuración básica para conectar la
        aplicación a una base de datos PostgreSQL y habilitar opciones comunes
        de JPA.
      </p>

      <Note title="Tip">
        Al momento de hacer la configuración con Spring Initializr, debemos
        escoger las dependencias de "Spring Data JPA", "PostgreSQL Driver" y
        "Docker Compose Support" para tener todo listo para trabajar con
        persistencia y contenedores.
      </Note>

      <h2
        id="entidades"
        className="text-2xl font-bold mt-12 mb-4 text-[#141414] scroll-mt-20"
      >
        Entidades (@Entity)
      </h2>

      <p className="text-base leading-7 text-[#141414] my-6">
        Una <span className="font-semibold">entidad</span> es una clase Java que
        representa una tabla de la base de datos. Cada instancia de la clase
        representa un registro, y sus atributos suelen corresponder a columnas.
      </p>

      <p className="text-base leading-7 text-[#141414] my-6">
        Para indicar que una clase es una entidad se utiliza la anotación{" "}
        <code className="bg-[#f7f7f7] px-1.5 py-0.5 rounded text-sm">
          @Entity
        </code>
        . Además, normalmente se define un identificador con{" "}
        <code className="bg-[#f7f7f7] px-1.5 py-0.5 rounded text-sm">@Id</code>.
      </p>

      <Codeblock code={entityCode} title="Usuario.java" />

      <p className="text-base leading-7 text-[#141414] my-6">
        En este ejemplo, la clase{" "}
        <code className="bg-[#f7f7f7] px-1.5 py-0.5 rounded text-sm">
          Usuario
        </code>{" "}
        representa una entidad con un id autogenerado y dos campos básicos:
        nombre y email.
      </p>

      <h2
        id="repositorios"
        className="text-2xl font-bold mt-12 mb-4 text-[#141414] scroll-mt-20"
      >
        Repositorios
      </h2>

      <p className="text-base leading-7 text-[#141414] my-6">
        Un <span className="font-semibold">repositorio</span> es la capa que se
        encarga de comunicar la aplicación con la base de datos. En Spring Data
        JPA, basta con crear una interfaz que extienda{" "}
        <code className="bg-[#f7f7f7] px-1.5 py-0.5 rounded text-sm">
          JpaRepository
        </code>{" "}
        para obtener automáticamente métodos CRUD como guardar, buscar, listar y
        eliminar.
      </p>

      <Codeblock code={repositoryCode} title="UsuarioRepository.java" />

      <p className="text-base leading-7 text-[#141414] my-6">
        Con esta interfaz ya puedes usar métodos como{" "}
        <code className="bg-[#f7f7f7] px-1.5 py-0.5 rounded text-sm">
          findAll()
        </code>
        ,{" "}
        <code className="bg-[#f7f7f7] px-1.5 py-0.5 rounded text-sm">
          findById()
        </code>
        ,{" "}
        <code className="bg-[#f7f7f7] px-1.5 py-0.5 rounded text-sm">
          save()
        </code>{" "}
        o{" "}
        <code className="bg-[#f7f7f7] px-1.5 py-0.5 rounded text-sm">
          deleteById()
        </code>{" "}
        sin implementarlos manualmente.
      </p>

      <Codeblock code={serviceCode} title="UsuarioService.java" />

      <p className="text-base leading-7 text-[#141414] my-6">
        Lo habitual es usar el repositorio dentro de la capa de servicio, donde
        se concentra la lógica de negocio y se evita que los controladores
        accedan directamente a la persistencia.
      </p>

      <h2
        id="consultas"
        className="text-2xl font-bold mt-12 mb-4 text-[#141414] scroll-mt-20"
      >
        Consultas personalizadas
      </h2>

      <p className="text-base leading-7 text-[#141414] my-6">
        Además de los métodos básicos, Spring Data JPA permite crear{" "}
        <span className="font-semibold">consultas personalizadas</span>. Una
        forma simple es definir métodos siguiendo convenciones de nombre, por
        ejemplo{" "}
        <code className="bg-[#f7f7f7] px-1.5 py-0.5 rounded text-sm">
          findByEmail
        </code>
        . También puedes usar la anotación{" "}
        <code className="bg-[#f7f7f7] px-1.5 py-0.5 rounded text-sm">
          @Query
        </code>{" "}
        cuando necesitas una consulta más específica.
      </p>

      <Codeblock code={customQueryCode} title="ConsultasPersonalizadas.java" />

      <div className="grid md:grid-cols-2 gap-6 my-8">
        <div className="p-6 border border-[#f2f2f2] rounded-xl">
          <h3 className="font-bold text-lg mb-2 text-[#141414]">
            Métodos por convención
          </h3>
          <p className="text-sm text-[#757575]">
            Permiten generar consultas automáticamente a partir del nombre del
            método.
          </p>
        </div>

        <div className="p-6 border border-[#f2f2f2] rounded-xl">
          <h3 className="font-bold text-lg mb-2 text-[#141414]">
            Consultas con @Query
          </h3>
          <p className="text-sm text-[#757575]">
            Dan mayor control cuando necesitas una búsqueda más precisa o
            compleja.
          </p>
        </div>
      </div>

      <h2
        id="transacciones"
        className="text-2xl font-bold mt-12 mb-4 text-[#141414] scroll-mt-20"
      >
        Transacciones
      </h2>

      <p className="text-base leading-7 text-[#141414] my-6">
        Una <span className="font-semibold">transacción</span> agrupa varias
        operaciones de base de datos en una única unidad de trabajo. Esto es
        importante cuando varias acciones deben ejecutarse juntas: si una falla,
        lo correcto es revertir todas para mantener la consistencia de los
        datos.
      </p>

      <p className="text-base leading-7 text-[#141414] my-6">
        En Spring Boot, esto se maneja normalmente con la anotación{" "}
        <code className="bg-[#f7f7f7] px-1.5 py-0.5 rounded text-sm">
          @Transactional
        </code>
        .
      </p>

      <Codeblock code={transactionCode} title="TransferenciaService.java" />

      <p className="text-base leading-7 text-[#141414] my-6">
        Este enfoque es útil, por ejemplo, en transferencias, pagos,
        actualizaciones múltiples o cualquier proceso donde no convenga guardar
        resultados parciales si algo falla.
      </p>

      <Note title="Buenas prácticas">
        Mantén las entidades enfocadas en representar datos, usa repositorios
        para el acceso a base de datos y coloca la lógica de negocio y las
        transacciones en la capa de servicios.
      </Note>

      <Note title="Resumen">
        La persistencia en Spring Boot se construye con entidades para modelar
        tablas, repositorios para acceder a los datos, consultas personalizadas
        para búsquedas más específicas y transacciones para mantener la
        consistencia de la información.
      </Note>
    </DocsLayout>
  );
};
