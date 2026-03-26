import { DocsLayout } from "../layout/Docs.tsx";
import { TableOfContents } from "../components/TableOfContents.tsx";
import modulosData from "../data/modulos.json";
import Note from "../components/Notes.tsx";
import Codeblock from "../components/Codeblock.tsx";

const crearProyectoCode = `spring init \
--dependencies=web,data-jpa \
--build=maven \
--java-version=17 \
mi-app`;

const estructuraProyectoCode = `mi-app/
├── src/
│   ├── main/
│   │   ├── java/
│   │   │   └── com/ejemplo/miapp/
│   │   │       └── MiAppApplication.java
│   │   └── resources/
│   │       └── application.properties
│   └── test/
│       └── java/
├── pom.xml
└── mvnw`;

const primerEjemploCode = `<span class="keyword">import</span> <span class="string">org.springframework.web.bind.annotation.GetMapping</span>;
<span class="keyword">import</span> <span class="string">org.springframework.web.bind.annotation.RestController</span>;

<span class="keyword">@RestController</span>
<span class="keyword">public class</span> <span class="string">HolaController</span> {

    <span class="keyword">@GetMapping</span>(<span class="string">"/hola"</span>)
    <span class="keyword">public</span> <span class="string">String</span> saludar() {
        <span class="keyword">return</span> <span class="string">"Hola Spring Boot"</span>;
    }
}`;

export const Introduccion = () => {
  return (
    <DocsLayout
      toc={<TableOfContents items={modulosData.sidebar[0].items[0].toc} />}
    >
      <h1 className="text-4xl font-extrabold tracking-tight text-[#141414] mb-4">
        Introducción a Spring Boot
      </h1>

      <p className="text-xl text-[#757575] leading-relaxed">
        Spring Boot es una herramienta del ecosistema Java que permite crear
        aplicaciones de forma más rápida, con una configuración inicial mínima y
        una estructura lista para desarrollar APIs, aplicaciones web y servicios
        backend.
      </p>

      <h2
        id="que-es-spring-boot"
        className="text-2xl font-bold mt-12 mb-4 text-[#141414] scroll-mt-20"
      >
        ¿Qué es Spring Boot?
      </h2>

      <p className="text-base leading-7 text-[#141414] my-6">
        <span className="font-semibold">Spring Boot</span> es un framework
        construido sobre Spring que simplifica la creación de aplicaciones Java.
        Su objetivo es reducir la configuración manual, ofrecer una estructura
        clara y permitir que el desarrollador se concentre más en la lógica del
        negocio que en la configuración del entorno.
      </p>

      <p className="text-base leading-7 text-[#141414] my-6">
        Gracias a sus configuraciones automáticas, dependencias agrupadas y
        servidor embebido, es una de las opciones más utilizadas para
        desarrollar aplicaciones modernas en Java.
      </p>

      <h2
        id="ventajas"
        className="text-2xl font-bold mt-12 mb-4 text-[#141414] scroll-mt-20"
      >
        Ventajas de Spring Boot
      </h2>

      <p className="text-base leading-7 text-[#141414] my-6">
        Spring Boot aporta varias ventajas al desarrollo backend. Permite crear
        proyectos rápidamente, integrar librerías comunes con facilidad y
        mantener una base de código organizada y escalable.
      </p>

      <div className="grid md:grid-cols-2 gap-6 my-8">
        <div className="p-6 border border-[#f2f2f2] rounded-xl">
          <h3 className="font-bold text-lg mb-2 text-[#141414]">
            Configuración automática
          </h3>
          <p className="text-sm text-[#757575]">
            Detecta dependencias y aplica configuraciones iniciales para reducir
            el trabajo manual.
          </p>
        </div>

        <div className="p-6 border border-[#f2f2f2] rounded-xl">
          <h3 className="font-bold text-lg mb-2 text-[#141414]">
            Servidor embebido
          </h3>
          <p className="text-sm text-[#757575]">
            Permite ejecutar la aplicación sin instalar un servidor externo como
            Tomcat por separado.
          </p>
        </div>

        <div className="p-6 border border-[#f2f2f2] rounded-xl">
          <h3 className="font-bold text-lg mb-2 text-[#141414]">
            Desarrollo rápido
          </h3>
          <p className="text-sm text-[#757575]">
            Facilita comenzar un proyecto desde una base funcional con pocas
            decisiones iniciales.
          </p>
        </div>

        <div className="p-6 border border-[#f2f2f2] rounded-xl">
          <h3 className="font-bold text-lg mb-2 text-[#141414]">
            Integración con Spring
          </h3>
          <p className="text-sm text-[#757575]">
            Aprovecha módulos como Spring Web, Spring Data JPA y Spring Security
            dentro de un mismo ecosistema.
          </p>
        </div>
      </div>

      <Note title="Idea principal">
        Spring Boot no reemplaza a Spring, sino que lo hace más fácil de usar al
        ofrecer una configuración inicial más simple y productiva.
      </Note>

      <h2
        id="ecosistema-spring"
        className="text-2xl font-bold mt-12 mb-4 text-[#141414] scroll-mt-20"
      >
        Ecosistema Spring
      </h2>

      <p className="text-base leading-7 text-[#141414] my-6">
        Spring Boot forma parte del ecosistema Spring, que incluye distintos
        módulos orientados a resolver necesidades comunes del desarrollo de
        software.
      </p>

      <div className="grid md:grid-cols-2 gap-6 my-8">
        <div className="p-6 border border-[#f2f2f2] rounded-xl">
          <h3 className="font-bold text-lg mb-2 text-[#141414]">Spring Web</h3>
          <p className="text-sm text-[#757575]">
            Se utiliza para crear controladores, rutas HTTP y APIs REST.
          </p>
        </div>

        <div className="p-6 border border-[#f2f2f2] rounded-xl">
          <h3 className="font-bold text-lg mb-2 text-[#141414]">
            Spring Data JPA
          </h3>
          <p className="text-sm text-[#757575]">
            Facilita la persistencia de datos y el trabajo con bases de datos
            relacionales.
          </p>
        </div>

        <div className="p-6 border border-[#f2f2f2] rounded-xl">
          <h3 className="font-bold text-lg mb-2 text-[#141414]">
            Spring Security
          </h3>
          <p className="text-sm text-[#757575]">
            Permite agregar autenticación, autorización y control de acceso.
          </p>
        </div>

        <div className="p-6 border border-[#f2f2f2] rounded-xl">
          <h3 className="font-bold text-lg mb-2 text-[#141414]">Spring Test</h3>
          <p className="text-sm text-[#757575]">
            Ofrece utilidades para pruebas unitarias e integración en proyectos
            Spring.
          </p>
        </div>
      </div>

      <h2
        id="primer-proyecto"
        className="text-2xl font-bold mt-12 mb-4 text-[#141414] scroll-mt-20"
      >
        Crear primer proyecto
      </h2>

      <p className="text-base leading-7 text-[#141414] my-6">
        Una forma habitual de comenzar es usar{" "}
        <span className="font-semibold">Spring Initializr</span>, que genera la
        estructura base del proyecto con las dependencias necesarias.
      </p>

      <Codeblock code={crearProyectoCode} title="Terminal" />

      <p className="text-base leading-7 text-[#141414] my-6">
        En este ejemplo se crea un proyecto con soporte para desarrollo web y
        persistencia usando JPA, con Maven como herramienta de build y Java 17
        como versión del lenguaje.
      </p>

      <h2
        id="estructura-proyecto"
        className="text-2xl font-bold mt-12 mb-4 text-[#141414] scroll-mt-20"
      >
        Estructura del proyecto
      </h2>

      <p className="text-base leading-7 text-[#141414] my-6">
        Al generar un proyecto Spring Boot, se crea una estructura organizada
        que separa el código principal, los recursos y las pruebas.
      </p>

      <Codeblock code={estructuraProyectoCode} title="Terminal" />

      <p className="text-base leading-7 text-[#141414] my-6">
        El archivo principal suele contener la clase de arranque de la
        aplicación, mientras que en{" "}
        <code className="bg-[#f7f7f7] px-1.5 py-0.5 rounded text-sm">
          resources
        </code>{" "}
        se colocan configuraciones como{" "}
        <code className="bg-[#f7f7f7] px-1.5 py-0.5 rounded text-sm">
          application.properties
        </code>
        .
      </p>

      <h2
        id="primer-ejemplo"
        className="text-2xl font-bold mt-12 mb-4 text-[#141414] scroll-mt-20"
      >
        Primer ejemplo
      </h2>

      <p className="text-base leading-7 text-[#141414] my-6">
        Con Spring Boot se puede crear un endpoint muy simple con pocas líneas.
        El siguiente ejemplo expone una ruta HTTP que devuelve un texto.
      </p>

      <Codeblock code={primerEjemploCode} title="HolaController.java" />

      <p className="text-base leading-7 text-[#141414] my-6">
        La anotación{" "}
        <code className="bg-[#f7f7f7] px-1.5 py-0.5 rounded text-sm">
          @RestController
        </code>{" "}
        indica que la clase responderá peticiones HTTP, y{" "}
        <code className="bg-[#f7f7f7] px-1.5 py-0.5 rounded text-sm">
          @GetMapping
        </code>{" "}
        define la ruta que se ejecutará cuando el cliente haga una solicitud
        GET.
      </p>

      <Note title="Resumen">
        Spring Boot permite iniciar proyectos Java modernos con rapidez,
        aprovechando el ecosistema Spring, la configuración automática y una
        estructura clara para construir aplicaciones escalables.
      </Note>
    </DocsLayout>
  );
};
