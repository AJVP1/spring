import { DocsLayout } from "../layout/Docs.tsx";
import { TableOfContents } from "../components/TableOfContents.tsx";
import modulosData from "../data/modulos.json";
import Note from "../components/Notes.tsx";
import Codeblock from "../components/Codeblock.tsx";

const unitTestCode = `<span class="keyword">import</span> <span class="string">org.junit.jupiter.api.Test</span>;
<span class="keyword">import static</span> <span class="string">org.junit.jupiter.api.Assertions.assertEquals</span>;

<span class="keyword">public class</span> <span class="string">PrecioServiceTest</span> {

    <span class="string">@Test</span>
    <span class="keyword">void</span> deberiaCalcularPrecioFinal() {
        <span class="string">PrecioService</span> service = <span class="keyword">new</span> <span class="string">PrecioService</span>();

        Double resultado = service.calcularPrecioFinal(100.0, 0.2);

        assertEquals(80.0, resultado);
    }
}`;

const integrationTestCode = `<span class="keyword">import</span> <span class="string">org.junit.jupiter.api.Test</span>;
<span class="keyword">import</span> <span class="string">org.springframework.beans.factory.annotation.Autowired</span>;
<span class="keyword">import</span> <span class="string">org.springframework.boot.test.context.SpringBootTest</span>;

<span class="string">@SpringBootTest</span>
<span class="keyword">public class</span> <span class="string">UsuarioServiceIntegrationTest</span> {

    <span class="string">@Autowired</span>
    <span class="keyword">private</span> <span class="string">UsuarioService</span> usuarioService;

    <span class="string">@Test</span>
    <span class="keyword">void</span> contextoCargaCorrectamente() {
        assert usuarioService != null;
    }
}`;

const mockitoCode = `<span class="keyword">import</span> <span class="string">org.junit.jupiter.api.Test</span>;
<span class="keyword">import</span> <span class="string">org.junit.jupiter.api.extension.ExtendWith</span>;
<span class="keyword">import</span> <span class="string">org.mockito.InjectMocks</span>;
<span class="keyword">import</span> <span class="string">org.mockito.Mock</span>;
<span class="keyword">import</span> <span class="string">org.mockito.junit.jupiter.MockitoExtension</span>;

<span class="keyword">import static</span> <span class="string">org.mockito.Mockito.when</span>;
<span class="keyword">import static</span> <span class="string">org.junit.jupiter.api.Assertions.assertEquals</span>;

<span class="string">@ExtendWith</span>(MockitoExtension.class)
<span class="keyword">public class</span> <span class="string">UsuarioServiceTest</span> {

    <span class="string">@Mock</span>
    <span class="keyword">private</span> <span class="string">UsuarioRepository</span> usuarioRepository;

    <span class="string">@InjectMocks</span>
    <span class="keyword">private</span> <span class="string">UsuarioService</span> usuarioService;

    <span class="string">@Test</span>
    <span class="keyword">void</span> deberiaBuscarUsuarioPorEmail() {
        <span class="string">Usuario</span> usuario = <span class="keyword">new</span> <span class="string">Usuario</span>();
        usuario.setEmail(<span class="string">"test@mail.com"</span>);

        when(usuarioRepository.findByEmail(<span class="string">"test@mail.com"</span>))
            .thenReturn(java.util.Optional.of(usuario));

        String email = usuarioService.buscarPorEmail(<span class="string">"test@mail.com"</span>).getEmail();

        assertEquals(<span class="string">"test@mail.com"</span>, email);
    }
}`;

const springTestWebCode = `<span class="keyword">import</span> <span class="string">org.junit.jupiter.api.Test</span>;
<span class="keyword">import</span> <span class="string">org.springframework.beans.factory.annotation.Autowired</span>;
<span class="keyword">import</span> <span class="string">org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest</span>;
<span class="keyword">import</span> <span class="string">org.springframework.boot.test.mock.mockito.MockBean</span>;
<span class="keyword">import</span> <span class="string">org.springframework.test.web.servlet.MockMvc</span>;

<span class="keyword">import static</span> <span class="string">org.mockito.BDDMockito.given</span>;
<span class="keyword">import static</span> <span class="string">org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get</span>;
<span class="keyword">import static</span> <span class="string">org.springframework.test.web.servlet.result.MockMvcResultMatchers.status</span>;
<span class="keyword">import static</span> <span class="string">org.springframework.test.web.servlet.result.MockMvcResultMatchers.content</span>;

<span class="string">@WebMvcTest</span>(SaludoController.class)
<span class="keyword">public class</span> <span class="string">SaludoControllerTest</span> {

    <span class="string">@Autowired</span>
    <span class="keyword">private</span> <span class="string">MockMvc</span> mockMvc;

    <span class="string">@MockBean</span>
    <span class="keyword">private</span> <span class="string">SaludoService</span> saludoService;

    <span class="string">@Test</span>
    <span class="keyword">void</span> deberiaResponderSaludo() <span class="keyword">throws</span> Exception {
        given(saludoService.saludar()).willReturn(<span class="string">"Hola Spring Boot"</span>);

        mockMvc.perform(get(<span class="string">"/saludo"</span>))
            .andExpect(status().isOk())
            .andExpect(content().string(<span class="string">"Hola Spring Boot"</span>));
    }
}`;

export const Testing = () => {
  return (
    <DocsLayout
      toc={<TableOfContents items={modulosData.sidebar[2].items[1].toc} />}
    >
      <h1 className="text-4xl font-extrabold tracking-tight text-[#141414] mb-4">
        Testing
      </h1>

      <p className="text-xl text-[#757575] leading-relaxed">
        El testing en Spring Boot permite verificar que la aplicación funcione
        correctamente en distintas capas. Se pueden probar reglas de negocio,
        integración entre componentes y comportamiento de controladores usando
        herramientas como JUnit, Mockito y Spring Test.
      </p>

      <h2
        id="test-unitarios"
        className="text-2xl font-bold mt-12 mb-4 text-[#141414] scroll-mt-20"
      >
        Tests unitarios
      </h2>

      <p className="text-base leading-7 text-[#141414] my-6">
        Un <span className="font-semibold">test unitario</span> verifica una
        parte pequeña y aislada del código, normalmente un método o una clase.
        Su objetivo es comprobar que una regla de negocio produce el resultado
        esperado sin depender del framework, la base de datos o servicios
        externos.
      </p>

      <p className="text-base leading-7 text-[#141414] my-6">
        En Java, la herramienta más utilizada para este tipo de pruebas es{" "}
        <span className="font-semibold">JUnit</span>.
      </p>

      <Codeblock code={unitTestCode} title="PrecioServiceTest.java" />

      <p className="text-base leading-7 text-[#141414] my-6">
        En este ejemplo se prueba de forma directa un método de servicio. Como
        no intervienen dependencias externas, la prueba es rápida y fácil de
        mantener.
      </p>

      <Note title="Ventaja principal">
        Los tests unitarios ayudan a detectar errores temprano y permiten
        refactorizar con más confianza.
      </Note>

      <h2
        id="test-integracion"
        className="text-2xl font-bold mt-12 mb-4 text-[#141414] scroll-mt-20"
      >
        Tests de integración
      </h2>

      <p className="text-base leading-7 text-[#141414] my-6">
        Los <span className="font-semibold">tests de integración</span>
        comprueban cómo interactúan varios componentes entre sí dentro del
        contexto de la aplicación. A diferencia de los tests unitarios, aquí sí
        puede cargarse el contenedor de Spring, repositorios, servicios y otras
        configuraciones reales.
      </p>

      <Codeblock
        code={integrationTestCode}
        title="UsuarioServiceIntegrationTest.java"
      />

      <p className="text-base leading-7 text-[#141414] my-6">
        La anotación{" "}
        <code className="bg-[#f7f7f7] px-1.5 py-0.5 rounded text-sm">
          @SpringBootTest
        </code>{" "}
        levanta el contexto completo de Spring Boot. Esto permite verificar que
        los componentes se creen correctamente y colaboren entre sí.
      </p>

      <h2
        id="mockito"
        className="text-2xl font-bold mt-12 mb-4 text-[#141414] scroll-mt-20"
      >
        Mockito
      </h2>

      <p className="text-base leading-7 text-[#141414] my-6">
        <span className="font-semibold">Mockito</span> es una librería que se
        usa para crear objetos simulados, también llamados mocks. Esto es útil
        cuando quieres probar una clase sin depender de una base de datos, un
        repositorio real o cualquier componente costoso o difícil de controlar.
      </p>

      <Codeblock code={mockitoCode} title="UsuarioServiceTest.java" />

      <p className="text-base leading-7 text-[#141414] my-6">
        En este caso, el repositorio es simulado y el servicio se prueba con un
        comportamiento controlado. Esto permite verificar la lógica del servicio
        sin necesidad de acceder a la persistencia real.
      </p>

      <div className="grid md:grid-cols-2 gap-6 my-8">
        <div className="p-6 border border-[#f2f2f2] rounded-xl">
          <h3 className="font-bold text-lg mb-2 text-[#141414]">Aislamiento</h3>
          <p className="text-sm text-[#757575]">
            Mockito permite probar una clase enfocándote solo en su
            comportamiento, sin depender de otras capas.
          </p>
        </div>

        <div className="p-6 border border-[#f2f2f2] rounded-xl">
          <h3 className="font-bold text-lg mb-2 text-[#141414]">
            Control del escenario
          </h3>
          <p className="text-sm text-[#757575]">
            Puedes definir exactamente qué debe devolver una dependencia en cada
            caso de prueba.
          </p>
        </div>
      </div>

      <h2
        id="spring-test"
        className="text-2xl font-bold mt-12 mb-4 text-[#141414] scroll-mt-20"
      >
        Spring Test
      </h2>

      <p className="text-base leading-7 text-[#141414] my-6">
        <span className="font-semibold">Spring Test</span> es el conjunto de
        utilidades de Spring para facilitar pruebas dentro del ecosistema. Una
        de sus herramientas más útiles para la capa web es{" "}
        <code className="bg-[#f7f7f7] px-1.5 py-0.5 rounded text-sm">
          MockMvc
        </code>
        , que permite probar endpoints sin iniciar un servidor real.
      </p>

      <Codeblock code={springTestWebCode} title="SaludoControllerTest.java" />

      <p className="text-base leading-7 text-[#141414] my-6">
        Con{" "}
        <code className="bg-[#f7f7f7] px-1.5 py-0.5 rounded text-sm">
          @WebMvcTest
        </code>{" "}
        se carga solo la parte web necesaria para el test, y con{" "}
        <code className="bg-[#f7f7f7] px-1.5 py-0.5 rounded text-sm">
          MockMvc
        </code>{" "}
        se puede simular una petición HTTP y validar el estado y el contenido de
        la respuesta.
      </p>

      <Note title="Buenas prácticas">
        Combina tests unitarios para reglas de negocio, Mockito para aislar
        dependencias y tests de integración o web cuando necesites verificar que
        varias piezas funcionen juntas.
      </Note>

      <Note title="Resumen">
        El testing en Spring Boot se apoya en JUnit para pruebas, Mockito para
        simular dependencias y Spring Test para validar integración y capa web.
        Juntas, estas herramientas ayudan a construir aplicaciones más
        confiables y fáciles de mantener.
      </Note>
    </DocsLayout>
  );
};
