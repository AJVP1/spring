import { DocsLayout } from "../layout/Docs.tsx";
import { TableOfContents } from "../components/TableOfContents.tsx";
import modulosData from "../data/modulos.json";
import Note from "../components/Notes.tsx";
import Codeblock from "../components/Codeblock.tsx";

const verificarJavaCode = `java -version`;

const springInitializrInfoCode = `Project: Maven o Gradle
Language: Java
Spring Boot: versión estable
Group: com.ejemplo
Artifact: mi-app
Name: mi-app
Packaging: Jar
Java: 17`;

const ejecutarMavenCode = `./mvnw spring-boot:run`;

const ejecutarGradleCode = `./gradlew bootRun`;

const applicationPropertiesCode = `spring.application.name=mi-app
server.port=8080`;

export const Instalacion = () => {
  return (
    <DocsLayout
      toc={<TableOfContents items={modulosData.sidebar[0].items[1].toc} />}
    >
      <h1 className="text-4xl font-extrabold tracking-tight text-[#141414] mb-4">
        Instalación
      </h1>

      <p className="text-xl text-[#757575] leading-relaxed">
        Para comenzar a trabajar con Spring Boot, primero necesitas tener Java
        instalado y luego generar un proyecto base con las dependencias
        necesarias. El proceso es simple y suele hacerse con Spring Initializr.
      </p>

      <h2
        id="requisitos"
        className="text-2xl font-bold mt-12 mb-4 text-[#141414] scroll-mt-20"
      >
        Requisitos previos
      </h2>

      <p className="text-base leading-7 text-[#141414] my-6">
        Antes de instalar o crear un proyecto con Spring Boot, necesitas tener
        un entorno básico preparado. Lo principal es contar con una versión de
        Java compatible y una herramienta para gestionar el proyecto, como Maven
        o Gradle.
      </p>

      <div className="grid md:grid-cols-2 gap-6 my-8">
        <div className="p-6 border border-[#f2f2f2] rounded-xl">
          <h3 className="font-bold text-lg mb-2 text-[#141414]">Java JDK</h3>
          <p className="text-sm text-[#757575]">
            Debes tener instalado el JDK para poder compilar y ejecutar la
            aplicación.
          </p>
        </div>

        <div className="p-6 border border-[#f2f2f2] rounded-xl">
          <h3 className="font-bold text-lg mb-2 text-[#141414]">
            Maven o Gradle
          </h3>
          <p className="text-sm text-[#757575]">
            Spring Boot trabaja normalmente con una de estas herramientas para
            gestionar dependencias y builds.
          </p>
        </div>
      </div>

      <p className="text-base leading-7 text-[#141414] my-6">
        Una versión comúnmente utilizada para comenzar es{" "}
        <span className="font-semibold">Java 17</span>, ya que ofrece
        estabilidad y buena compatibilidad con proyectos modernos.
      </p>

      <Codeblock code={verificarJavaCode} title="Terminal" />

      <p className="text-base leading-7 text-[#141414] my-6">
        Si este comando muestra la versión instalada de Java, entonces el
        entorno ya está listo para continuar con la creación del proyecto.
      </p>

      <h2
        id="spring-initializr"
        className="text-2xl font-bold mt-12 mb-4 text-[#141414] scroll-mt-20"
      >
        Usar Spring Initializr
      </h2>

      <p className="text-base leading-7 text-[#141414] my-6">
        <span className="font-semibold">Spring Initializr</span> es la forma más
        práctica de crear un proyecto Spring Boot. Permite generar una base con
        la configuración principal, la estructura de carpetas y las dependencias
        iniciales.
      </p>

      <p className="text-base leading-7 text-[#141414] my-6">
        Al crear el proyecto, normalmente se definen estos datos:
      </p>

      <Codeblock
        code={springInitializrInfoCode}
        title="Configuración inicial"
      />

      <Note title="Consejo">
        Si estás empezando, una combinación simple y común es usar{" "}
        <span className="font-semibold">Maven</span>, empaquetado{" "}
        <span className="font-semibold">Jar</span> y{" "}
        <span className="font-semibold">Java 17</span>.
      </Note>

      <h2
        id="dependencias"
        className="text-2xl font-bold mt-12 mb-4 text-[#141414] scroll-mt-20"
      >
        Seleccionar dependencias
      </h2>

      <p className="text-base leading-7 text-[#141414] my-6">
        Durante la generación del proyecto puedes elegir dependencias según el
        tipo de aplicación que quieras construir. Estas dependencias agregan
        funcionalidades listas para usar dentro del ecosistema Spring.
      </p>

      <div className="grid md:grid-cols-2 gap-6 my-8">
        <div className="p-6 border border-[#f2f2f2] rounded-xl">
          <h3 className="font-bold text-lg mb-2 text-[#141414]">Spring Web</h3>
          <p className="text-sm text-[#757575]">
            Se utiliza para crear controladores, endpoints HTTP y APIs REST.
          </p>
        </div>

        <div className="p-6 border border-[#f2f2f2] rounded-xl">
          <h3 className="font-bold text-lg mb-2 text-[#141414]">
            Spring Data JPA
          </h3>
          <p className="text-sm text-[#757575]">
            Permite trabajar con bases de datos relacionales y repositorios.
          </p>
        </div>

        <div className="p-6 border border-[#f2f2f2] rounded-xl">
          <h3 className="font-bold text-lg mb-2 text-[#141414]">
            Spring Security
          </h3>
          <p className="text-sm text-[#757575]">
            Agrega autenticación, autorización y control de acceso.
          </p>
        </div>

        <div className="p-6 border border-[#f2f2f2] rounded-xl">
          <h3 className="font-bold text-lg mb-2 text-[#141414]">Validation</h3>
          <p className="text-sm text-[#757575]">
            Sirve para validar datos de entrada en formularios o peticiones.
          </p>
        </div>
      </div>

      <p className="text-base leading-7 text-[#141414] my-6">
        No es necesario agregar todo desde el inicio. Puedes comenzar con pocas
        dependencias e incorporar otras a medida que el proyecto crece.
      </p>

      <h2
        id="configuracion-inicial"
        className="text-2xl font-bold mt-12 mb-4 text-[#141414] scroll-mt-20"
      >
        Configuración inicial
      </h2>

      <p className="text-base leading-7 text-[#141414] my-6">
        Una vez generado el proyecto, puedes abrirlo en tu editor o IDE y
        revisar los archivos principales. Uno de los más importantes es{" "}
        <code className="bg-[#f7f7f7] px-1.5 py-0.5 rounded text-sm">
          application.properties
        </code>
        , donde se suelen definir configuraciones básicas.
      </p>

      <Codeblock
        code={applicationPropertiesCode}
        title="src/main/resources/application.properties"
      />

      <p className="text-base leading-7 text-[#141414] my-6">
        Aquí puedes indicar el nombre de la aplicación, el puerto del servidor y
        otras opciones relacionadas con base de datos, logs o perfiles de
        ejecución.
      </p>

      <h2
        id="run-app"
        className="text-2xl font-bold mt-12 mb-4 text-[#141414] scroll-mt-20"
      >
        Ejecutar aplicación
      </h2>

      <p className="text-base leading-7 text-[#141414] my-6">
        Después de generar y configurar el proyecto, el siguiente paso es
        ejecutarlo. Spring Boot incluye herramientas que facilitan iniciar la
        aplicación directamente desde terminal.
      </p>

      <Codeblock code={ejecutarMavenCode} title="Maven" />

      <Codeblock code={ejecutarGradleCode} title="Gradle" />

      <p className="text-base leading-7 text-[#141414] my-6">
        Cuando la aplicación inicia correctamente, normalmente queda disponible
        en{" "}
        <code className="bg-[#f7f7f7] px-1.5 py-0.5 rounded text-sm">
          http://localhost:8080
        </code>
        .
      </p>

      <Note title="Resumen">
        Para instalar y empezar con Spring Boot necesitas preparar Java, generar
        el proyecto con Spring Initializr, elegir las dependencias necesarias y
        ejecutar la aplicación con Maven o Gradle.
      </Note>
    </DocsLayout>
  );
};
