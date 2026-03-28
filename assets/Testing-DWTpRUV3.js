import{a as e,i as t,n,o as r,r as i,t as a}from"./index-ByLeivlo.js";var o=r(),s=`<span class="keyword">import</span> <span class="string">org.junit.jupiter.api.Test</span>;
<span class="keyword">import static</span> <span class="string">org.junit.jupiter.api.Assertions.assertEquals</span>;

<span class="keyword">public class</span> <span class="string">PrecioServiceTest</span> {

    <span class="string">@Test</span>
    <span class="keyword">void</span> deberiaCalcularPrecioFinal() {
        <span class="string">PrecioService</span> service = <span class="keyword">new</span> <span class="string">PrecioService</span>();

        Double resultado = service.calcularPrecioFinal(100.0, 0.2);

        assertEquals(80.0, resultado);
    }
}`,c=`<span class="keyword">import</span> <span class="string">org.junit.jupiter.api.Test</span>;
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
}`,l=`<span class="keyword">import</span> <span class="string">org.junit.jupiter.api.Test</span>;
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
}`,u=`<span class="keyword">import</span> <span class="string">org.junit.jupiter.api.Test</span>;
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
}`,d=()=>(0,o.jsxs)(t,{toc:(0,o.jsx)(i,{items:e.sidebar[2].items[1].toc}),children:[(0,o.jsx)(`h1`,{className:`text-4xl font-extrabold tracking-tight text-[#141414] mb-4`,children:`Testing`}),(0,o.jsx)(`p`,{className:`text-xl text-[#757575] leading-relaxed`,children:`El testing en Spring Boot permite verificar que la aplicación funcione correctamente en distintas capas. Se pueden probar reglas de negocio, integración entre componentes y comportamiento de controladores usando herramientas como JUnit, Mockito y Spring Test.`}),(0,o.jsx)(`h2`,{id:`test-unitarios`,className:`text-2xl font-bold mt-12 mb-4 text-[#141414] scroll-mt-20`,children:`Tests unitarios`}),(0,o.jsxs)(`p`,{className:`text-base leading-7 text-[#141414] my-6`,children:[`Un `,(0,o.jsx)(`span`,{className:`font-semibold`,children:`test unitario`}),` verifica una parte pequeña y aislada del código, normalmente un método o una clase. Su objetivo es comprobar que una regla de negocio produce el resultado esperado sin depender del framework, la base de datos o servicios externos.`]}),(0,o.jsxs)(`p`,{className:`text-base leading-7 text-[#141414] my-6`,children:[`En Java, la herramienta más utilizada para este tipo de pruebas es`,` `,(0,o.jsx)(`span`,{className:`font-semibold`,children:`JUnit`}),`.`]}),(0,o.jsx)(a,{code:s,title:`PrecioServiceTest.java`}),(0,o.jsx)(`p`,{className:`text-base leading-7 text-[#141414] my-6`,children:`En este ejemplo se prueba de forma directa un método de servicio. Como no intervienen dependencias externas, la prueba es rápida y fácil de mantener.`}),(0,o.jsx)(n,{title:`Ventaja principal`,children:`Los tests unitarios ayudan a detectar errores temprano y permiten refactorizar con más confianza.`}),(0,o.jsx)(`h2`,{id:`test-integracion`,className:`text-2xl font-bold mt-12 mb-4 text-[#141414] scroll-mt-20`,children:`Tests de integración`}),(0,o.jsxs)(`p`,{className:`text-base leading-7 text-[#141414] my-6`,children:[`Los `,(0,o.jsx)(`span`,{className:`font-semibold`,children:`tests de integración`}),`comprueban cómo interactúan varios componentes entre sí dentro del contexto de la aplicación. A diferencia de los tests unitarios, aquí sí puede cargarse el contenedor de Spring, repositorios, servicios y otras configuraciones reales.`]}),(0,o.jsx)(a,{code:c,title:`UsuarioServiceIntegrationTest.java`}),(0,o.jsxs)(`p`,{className:`text-base leading-7 text-[#141414] my-6`,children:[`La anotación`,` `,(0,o.jsx)(`code`,{className:`bg-[#f7f7f7] px-1.5 py-0.5 rounded text-sm`,children:`@SpringBootTest`}),` `,`levanta el contexto completo de Spring Boot. Esto permite verificar que los componentes se creen correctamente y colaboren entre sí.`]}),(0,o.jsx)(`h2`,{id:`mockito`,className:`text-2xl font-bold mt-12 mb-4 text-[#141414] scroll-mt-20`,children:`Mockito`}),(0,o.jsxs)(`p`,{className:`text-base leading-7 text-[#141414] my-6`,children:[(0,o.jsx)(`span`,{className:`font-semibold`,children:`Mockito`}),` es una librería que se usa para crear objetos simulados, también llamados mocks. Esto es útil cuando quieres probar una clase sin depender de una base de datos, un repositorio real o cualquier componente costoso o difícil de controlar.`]}),(0,o.jsx)(a,{code:l,title:`UsuarioServiceTest.java`}),(0,o.jsx)(`p`,{className:`text-base leading-7 text-[#141414] my-6`,children:`En este caso, el repositorio es simulado y el servicio se prueba con un comportamiento controlado. Esto permite verificar la lógica del servicio sin necesidad de acceder a la persistencia real.`}),(0,o.jsxs)(`div`,{className:`grid md:grid-cols-2 gap-6 my-8`,children:[(0,o.jsxs)(`div`,{className:`p-6 border border-[#f2f2f2] rounded-xl`,children:[(0,o.jsx)(`h3`,{className:`font-bold text-lg mb-2 text-[#141414]`,children:`Aislamiento`}),(0,o.jsx)(`p`,{className:`text-sm text-[#757575]`,children:`Mockito permite probar una clase enfocándote solo en su comportamiento, sin depender de otras capas.`})]}),(0,o.jsxs)(`div`,{className:`p-6 border border-[#f2f2f2] rounded-xl`,children:[(0,o.jsx)(`h3`,{className:`font-bold text-lg mb-2 text-[#141414]`,children:`Control del escenario`}),(0,o.jsx)(`p`,{className:`text-sm text-[#757575]`,children:`Puedes definir exactamente qué debe devolver una dependencia en cada caso de prueba.`})]})]}),(0,o.jsx)(`h2`,{id:`spring-test`,className:`text-2xl font-bold mt-12 mb-4 text-[#141414] scroll-mt-20`,children:`Spring Test`}),(0,o.jsxs)(`p`,{className:`text-base leading-7 text-[#141414] my-6`,children:[(0,o.jsx)(`span`,{className:`font-semibold`,children:`Spring Test`}),` es el conjunto de utilidades de Spring para facilitar pruebas dentro del ecosistema. Una de sus herramientas más útiles para la capa web es`,` `,(0,o.jsx)(`code`,{className:`bg-[#f7f7f7] px-1.5 py-0.5 rounded text-sm`,children:`MockMvc`}),`, que permite probar endpoints sin iniciar un servidor real.`]}),(0,o.jsx)(a,{code:u,title:`SaludoControllerTest.java`}),(0,o.jsxs)(`p`,{className:`text-base leading-7 text-[#141414] my-6`,children:[`Con`,` `,(0,o.jsx)(`code`,{className:`bg-[#f7f7f7] px-1.5 py-0.5 rounded text-sm`,children:`@WebMvcTest`}),` `,`se carga solo la parte web necesaria para el test, y con`,` `,(0,o.jsx)(`code`,{className:`bg-[#f7f7f7] px-1.5 py-0.5 rounded text-sm`,children:`MockMvc`}),` `,`se puede simular una petición HTTP y validar el estado y el contenido de la respuesta.`]}),(0,o.jsx)(n,{title:`Buenas prácticas`,children:`Combina tests unitarios para reglas de negocio, Mockito para aislar dependencias y tests de integración o web cuando necesites verificar que varias piezas funcionen juntas.`}),(0,o.jsx)(n,{title:`Resumen`,children:`El testing en Spring Boot se apoya en JUnit para pruebas, Mockito para simular dependencias y Spring Test para validar integración y capa web. Juntas, estas herramientas ayudan a construir aplicaciones más confiables y fáciles de mantener.`})]});export{d as Testing};