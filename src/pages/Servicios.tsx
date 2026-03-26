import { DocsLayout } from "../layout/Docs.tsx";
import { TableOfContents } from "../components/TableOfContents.tsx";
import modulosData from "../data/modulos.json";
import Note from "../components/Notes.tsx";
import Codeblock from "../components/Codeblock.tsx";

const serviceCode = `<span class="keyword">import</span> <span class="string">org.springframework.stereotype.Service</span>;

<span class="keyword">@Service</span>
<span class="keyword">public class</span> <span class="string">UsuarioService</span> {

    <span class="keyword">public</span> <span class="string">String</span> obtenerMensaje() {
        <span class="keyword">return</span> <span class="string">"Hola desde la capa de servicio"</span>;
    }
}`;

const logicaNegocioCode = `<span class="keyword">import</span> <span class="string">org.springframework.stereotype.Service</span>;

<span class="keyword">@Service</span>
<span class="keyword">public class</span> <span class="string">PrecioService</span> {

    <span class="keyword">public</span> <span class="string">Double</span> calcularPrecioFinal(Double precioBase, Double descuento) {
        <span class="keyword">return</span> precioBase - (precioBase * descuento);
    }
}`;

const repositorioServiceCode = `<span class="keyword">import</span> <span class="string">org.springframework.stereotype.Service</span>;
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
}`;

const dtoCode = `<span class="keyword">public class</span> <span class="string">UsuarioDto</span> {
    <span class="keyword">private</span> <span class="string">Long</span> id;
    <span class="keyword">private</span> <span class="string">String</span> nombre;
    <span class="keyword">private</span> <span class="string">String</span> email;

    <span class="comment">// getters y setters</span>
}`;

const dtoServiceCode = `<span class="keyword">import</span> <span class="string">org.springframework.stereotype.Service</span>;

<span class="keyword">@Service</span>
<span class="keyword">public class</span> <span class="string">UsuarioService</span> {

    <span class="keyword">public</span> <span class="string">UsuarioDto</span> convertirADto(<span class="string">Usuario</span> usuario) {
        <span class="string">UsuarioDto</span> dto = <span class="keyword">new</span> <span class="string">UsuarioDto</span>();
        dto.setId(usuario.getId());
        dto.setNombre(usuario.getNombre());
        dto.setEmail(usuario.getEmail());
        <span class="keyword">return</span> dto;
    }
}`;

export const Servicios = () => {
  return (
    <DocsLayout
      toc={<TableOfContents items={modulosData.sidebar[1].items[3].toc} />}
    >
      <h1 className="text-4xl font-extrabold tracking-tight text-[#141414] mb-4">
        Capa de Servicios
      </h1>

      <p className="text-xl text-[#757575] leading-relaxed">
        La capa de servicios en Spring Boot se encarga de contener la lógica de
        negocio de la aplicación. Su objetivo es actuar como intermediaria entre
        los controladores y la capa de persistencia, manteniendo el código más
        ordenado, reutilizable y fácil de mantener.
      </p>

      <h2
        id="service-layer"
        className="text-2xl font-bold mt-12 mb-4 text-[#141414] scroll-mt-20"
      >
        ¿Qué es la capa de servicio?
      </h2>

      <p className="text-base leading-7 text-[#141414] my-6">
        La <span className="font-semibold">capa de servicio</span> es la parte
        de la aplicación donde normalmente se organiza la lógica que no
        corresponde directamente ni a la recepción de peticiones HTTP ni al
        acceso directo a la base de datos.
      </p>

      <p className="text-base leading-7 text-[#141414] my-6">
        En Spring Boot, esta capa suele marcarse con la anotación{" "}
        <code className="bg-[#f7f7f7] px-1.5 py-0.5 rounded text-sm">
          @Service
        </code>
        . Esto permite que Spring detecte automáticamente la clase como un
        componente administrado por el contenedor.
      </p>

      <Codeblock code={serviceCode} title="UsuarioService.java" />

      <p className="text-base leading-7 text-[#141414] my-6">
        Aunque este ejemplo es simple, muestra la idea principal: concentrar
        comportamiento útil en una clase separada del controlador.
      </p>

      <h2
        id="logica-negocio"
        className="text-2xl font-bold mt-12 mb-4 text-[#141414] scroll-mt-20"
      >
        Lógica de negocio
      </h2>

      <p className="text-base leading-7 text-[#141414] my-6">
        La lógica de negocio representa las reglas y decisiones propias de la
        aplicación. Por ejemplo, calcular descuentos, validar condiciones antes
        de guardar un registro, coordinar operaciones entre varias entidades o
        transformar información antes de devolverla.
      </p>

      <p className="text-base leading-7 text-[#141414] my-6">
        Colocar esta lógica en la capa de servicios evita que los controladores
        crezcan demasiado y ayuda a reutilizar el mismo comportamiento desde
        distintos puntos del sistema.
      </p>

      <Codeblock code={logicaNegocioCode} title="PrecioService.java" />

      <p className="text-base leading-7 text-[#141414] my-6">
        En este ejemplo, el servicio encapsula una regla de cálculo. El
        controlador podría llamar este método sin necesitar conocer el detalle
        interno de la operación.
      </p>

      <Note title="Idea principal">
        Un controlador debería encargarse de recibir y responder peticiones. La
        lógica del negocio debería vivir principalmente en los servicios.
      </Note>

      <h2
        id="inyeccion-repositorios"
        className="text-2xl font-bold mt-12 mb-4 text-[#141414] scroll-mt-20"
      >
        Uso de repositorios
      </h2>

      <p className="text-base leading-7 text-[#141414] my-6">
        Una tarea común de la capa de servicios es usar repositorios para leer o
        guardar información en la base de datos. En lugar de que el controlador
        acceda directamente a un repositorio, normalmente es mejor que delegue
        esa responsabilidad al servicio.
      </p>

      <Codeblock code={repositorioServiceCode} title="UsuarioService.java" />

      <p className="text-base leading-7 text-[#141414] my-6">
        Aquí, el servicio recibe una instancia de{" "}
        <code className="bg-[#f7f7f7] px-1.5 py-0.5 rounded text-sm">
          UsuarioRepository
        </code>{" "}
        mediante inyección por constructor y la utiliza para listar y guardar
        usuarios.
      </p>

      <div className="grid md:grid-cols-2 gap-6 my-8">
        <div className="p-6 border border-[#f2f2f2] rounded-xl">
          <h3 className="font-bold text-lg mb-2 text-[#141414]">
            Mejor separación
          </h3>
          <p className="text-sm text-[#757575]">
            El controlador no necesita conocer detalles de acceso a datos ni de
            persistencia.
          </p>
        </div>

        <div className="p-6 border border-[#f2f2f2] rounded-xl">
          <h3 className="font-bold text-lg mb-2 text-[#141414]">
            Reutilización
          </h3>
          <p className="text-sm text-[#757575]">
            El mismo servicio puede ser utilizado por distintos controladores o
            procesos internos.
          </p>
        </div>
      </div>

      <h2
        id="dto"
        className="text-2xl font-bold mt-12 mb-4 text-[#141414] scroll-mt-20"
      >
        DTOs
      </h2>

      <p className="text-base leading-7 text-[#141414] my-6">
        Un <span className="font-semibold">DTO</span> es un objeto pensado para
        transferir datos entre capas o hacia el exterior de la aplicación. Su
        función es evitar exponer directamente las entidades de base de datos y
        permitir controlar mejor qué información entra o sale.
      </p>

      <Codeblock code={dtoCode} title="UsuarioDto.java" />

      <p className="text-base leading-7 text-[#141414] my-6">
        Un DTO puede tener solo los campos necesarios para una respuesta o una
        petición, sin incluir toda la estructura interna de la entidad.
      </p>

      <Codeblock code={dtoServiceCode} title="UsuarioService.java" />

      <p className="text-base leading-7 text-[#141414] my-6">
        En este ejemplo, el servicio convierte una entidad{" "}
        <code className="bg-[#f7f7f7] px-1.5 py-0.5 rounded text-sm">
          Usuario
        </code>{" "}
        en un{" "}
        <code className="bg-[#f7f7f7] px-1.5 py-0.5 rounded text-sm">
          UsuarioDto
        </code>
        . Esto ayuda a separar el modelo interno de la forma en que los datos se
        exponen en la API.
      </p>

      <Note title="Buenas prácticas">
        Usa la capa de servicios para centralizar reglas de negocio, coordinar
        repositorios, manejar transacciones cuando sea necesario y transformar
        datos con DTOs antes de devolverlos.
      </Note>

      <Note title="Resumen">
        La capa de servicios organiza la lógica de negocio, sirve de puente
        entre controladores y repositorios, y permite trabajar con DTOs para
        mantener una aplicación más limpia, desacoplada y fácil de escalar.
      </Note>
    </DocsLayout>
  );
};
