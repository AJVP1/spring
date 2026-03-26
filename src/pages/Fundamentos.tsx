import { DocsLayout } from "../layout/Docs.tsx";
import { TableOfContents } from "../components/TableOfContents.tsx";
import modulosData from "../data/modulos.json";
import Note from "../components/Notes.tsx";
import Codeblock from "../components/Codeblock.tsx";

const beanCode = `<span class="keyword">import</span> <span class="string">org.springframework.context.annotation.Bean</span>;
<span class="keyword">import</span> <span class="string">org.springframework.context.annotation.Configuration</span>;

<span class="keyword">@Configuration</span>
<span class="keyword">public class</span> <span class="string">AppConfig</span> {

    <span class="keyword">@Bean</span>
    <span class="keyword">public</span> <span class="string">String</span> mensaje() {
        <span class="keyword">return</span> <span class="string">"Hola desde un bean"</span>;
    }
}`;

const inyeccionCode = `<span class="keyword">import</span> <span class="string">org.springframework.stereotype.Service</span>;

<span class="keyword">@Service</span>
<span class="keyword">public class</span> <span class="string">SaludoService</span> {

    <span class="keyword">public</span> <span class="string">String</span> saludar() {
        <span class="keyword">return</span> <span class="string">"Hola Spring Boot"</span>;
    }
}`;

const controllerCode = `<span class="keyword">import</span> <span class="string">org.springframework.web.bind.annotation.GetMapping</span>;
<span class="keyword">import</span> <span class="string">org.springframework.web.bind.annotation.RestController</span>;

<span class="keyword">@RestController</span>
<span class="keyword">public class</span> <span class="string">SaludoController</span> {

    <span class="keyword">private final</span> <span class="string">SaludoService</span> saludoService;

    <span class="keyword">public</span> <span class="string">SaludoController</span>(<span class="string">SaludoService</span> saludoService) {
        <span class="keyword">this</span>.saludoService = saludoService;
    }

    <span class="keyword">@GetMapping</span>(<span class="string">"/saludo"</span>)
    <span class="keyword">public</span> <span class="string">String</span> obtenerSaludo() {
        <span class="keyword">return</span> saludoService.saludar();
    }
}`;

const propertiesCode = `spring.application.name=mi-app
server.port=8080`;

const ymlCode = `spring:
  application:
    name: mi-app
server:
  port: 8080`;

export const Fundamentos = () => {
  return (
    <DocsLayout
      toc={<TableOfContents items={modulosData.sidebar[1].items[0].toc} />}
    >
      <h1 className="text-4xl font-extrabold tracking-tight text-[#141414] mb-4">
        Fundamentos
      </h1>

      <p className="text-xl text-[#757575] leading-relaxed">
        Spring Boot se apoya en varios conceptos fundamentales del ecosistema
        Spring. Entender ideas como inversión de control, inyección de
        dependencias, beans y configuración permite comprender cómo se organiza
        una aplicación y por qué el framework reduce tanto código repetitivo.
      </p>

      <h2
        id="inversion-control"
        className="text-2xl font-bold mt-12 mb-4 text-[#141414] scroll-mt-20"
      >
        Inversión de control (IoC)
      </h2>

      <p className="text-base leading-7 text-[#141414] my-6">
        La <span className="font-semibold">inversión de control</span> es un
        principio en el que el framework se encarga de crear, administrar y
        conectar los objetos principales de la aplicación. En lugar de que tú
        instancies manualmente cada clase, Spring toma ese control y organiza el
        ciclo de vida de los componentes.
      </p>

      <p className="text-base leading-7 text-[#141414] my-6">
        Esto permite escribir código más desacoplado, más fácil de mantener y
        más simple de probar, porque cada clase se enfoca en su responsabilidad
        y delega al contenedor de Spring la gestión de dependencias.
      </p>

      <Note title="Idea principal">
        Con IoC, el flujo cambia: ya no es la aplicación la que controla todos
        los objetos, sino el contenedor de Spring.
      </Note>

      <h2
        id="inyeccion-dependencias"
        className="text-2xl font-bold mt-12 mb-4 text-[#141414] scroll-mt-20"
      >
        Inyección de dependencias (DI)
      </h2>

      <p className="text-base leading-7 text-[#141414] my-6">
        La <span className="font-semibold">inyección de dependencias</span> es
        el mecanismo mediante el cual Spring entrega a una clase los objetos que
        necesita para funcionar. Así, una clase no crea sus propias
        dependencias, sino que las recibe desde afuera.
      </p>

      <p className="text-base leading-7 text-[#141414] my-6">
        En Spring Boot, la forma más común y recomendada es la{" "}
        <span className="font-semibold">inyección por constructor</span>, porque
        deja claras las dependencias necesarias y mejora la testabilidad.
      </p>

      <Codeblock code={inyeccionCode} title="SaludoService.java" />

      <Codeblock code={controllerCode} title="SaludoController.java" />

      <p className="text-base leading-7 text-[#141414] my-6">
        En este ejemplo, el controlador recibe una instancia de{" "}
        <code className="bg-[#f7f7f7] px-1.5 py-0.5 rounded text-sm">
          SaludoService
        </code>{" "}
        mediante el constructor. Spring detecta esa dependencia y la inyecta
        automáticamente.
      </p>

      <h2
        id="beans"
        className="text-2xl font-bold mt-12 mb-4 text-[#141414] scroll-mt-20"
      >
        Beans
      </h2>

      <p className="text-base leading-7 text-[#141414] my-6">
        Un <span className="font-semibold">bean</span> es un objeto administrado
        por el contenedor de Spring. Cuando una clase o método se registra como
        bean, Spring puede crear su instancia, conservarla y reutilizarla donde
        sea necesaria.
      </p>

      <p className="text-base leading-7 text-[#141414] my-6">
        Muchos componentes comunes se registran con anotaciones como{" "}
        <code className="bg-[#f7f7f7] px-1.5 py-0.5 rounded text-sm">
          @Component
        </code>
        ,{" "}
        <code className="bg-[#f7f7f7] px-1.5 py-0.5 rounded text-sm">
          @Service
        </code>
        ,{" "}
        <code className="bg-[#f7f7f7] px-1.5 py-0.5 rounded text-sm">
          @Repository
        </code>{" "}
        o{" "}
        <code className="bg-[#f7f7f7] px-1.5 py-0.5 rounded text-sm">
          @Controller
        </code>
        . También pueden definirse manualmente con{" "}
        <code className="bg-[#f7f7f7] px-1.5 py-0.5 rounded text-sm">
          @Bean
        </code>
        .
      </p>

      <Codeblock code={beanCode} title="AppConfig.java" />

      <p className="text-base leading-7 text-[#141414] my-6">
        En este caso, el método anotado con{" "}
        <code className="bg-[#f7f7f7] px-1.5 py-0.5 rounded text-sm">
          @Bean
        </code>{" "}
        registra un objeto dentro del contenedor de Spring para que pueda ser
        utilizado en otras partes de la aplicación.
      </p>

      <h2
        id="configuracion"
        className="text-2xl font-bold mt-12 mb-4 text-[#141414] scroll-mt-20"
      >
        Configuración (@Configuration)
      </h2>

      <p className="text-base leading-7 text-[#141414] my-6">
        La anotación{" "}
        <code className="bg-[#f7f7f7] px-1.5 py-0.5 rounded text-sm">
          @Configuration
        </code>{" "}
        se utiliza para definir clases de configuración. Estas clases permiten
        declarar beans de forma explícita y centralizar parte de la
        configuración de la aplicación.
      </p>

      <p className="text-base leading-7 text-[#141414] my-6">
        Aunque Spring Boot automatiza muchas tareas, estas clases siguen siendo
        útiles cuando necesitas personalizar el comportamiento del framework o
        registrar componentes que no se detectan automáticamente.
      </p>

      <div className="grid md:grid-cols-2 gap-6 my-8">
        <div className="p-6 border border-[#f2f2f2] rounded-xl">
          <h3 className="font-bold text-lg mb-2 text-[#141414]">
            Configuración explícita
          </h3>
          <p className="text-sm text-[#757575]">
            Permite declarar manualmente objetos y reglas específicas para la
            aplicación.
          </p>
        </div>

        <div className="p-6 border border-[#f2f2f2] rounded-xl">
          <h3 className="font-bold text-lg mb-2 text-[#141414]">
            Mejor organización
          </h3>
          <p className="text-sm text-[#757575]">
            Ayuda a separar la lógica de negocio de la configuración técnica del
            proyecto.
          </p>
        </div>
      </div>

      <h2
        id="properties"
        className="text-2xl font-bold mt-12 mb-4 text-[#141414] scroll-mt-20"
      >
        application.properties / yml
      </h2>

      <p className="text-base leading-7 text-[#141414] my-6">
        Spring Boot usa archivos de configuración para definir opciones del
        entorno, como el puerto del servidor, el nombre de la aplicación, la
        conexión a base de datos o perfiles de ejecución.
      </p>

      <p className="text-base leading-7 text-[#141414] my-6">
        Los formatos más comunes son{" "}
        <code className="bg-[#f7f7f7] px-1.5 py-0.5 rounded text-sm">
          application.properties
        </code>{" "}
        y{" "}
        <code className="bg-[#f7f7f7] px-1.5 py-0.5 rounded text-sm">
          application.yml
        </code>
        . Ambos cumplen la misma función, pero cambian en la forma de escribir
        la configuración.
      </p>

      <Codeblock
        code={propertiesCode}
        title="src/main/resources/application.properties"
      />

      <Codeblock code={ymlCode} title="src/main/resources/application.yml" />

      <p className="text-base leading-7 text-[#141414] my-6">
        El archivo{" "}
        <code className="bg-[#f7f7f7] px-1.5 py-0.5 rounded text-sm">
          properties
        </code>{" "}
        usa una sintaxis simple clave-valor, mientras que{" "}
        <code className="bg-[#f7f7f7] px-1.5 py-0.5 rounded text-sm">yml</code>{" "}
        organiza la configuración de forma jerárquica y suele ser más legible en
        proyectos grandes.
      </p>

      <Note title="Resumen">
        Los fundamentos de Spring Boot giran alrededor del contenedor de Spring,
        la administración de beans, la inyección de dependencias y la
        configuración centralizada. Estos conceptos permiten construir
        aplicaciones más ordenadas, desacopladas y fáciles de escalar.
      </Note>
    </DocsLayout>
  );
};
