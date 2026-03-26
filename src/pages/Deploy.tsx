import { DocsLayout } from "../layout/Docs.tsx";
import { TableOfContents } from "../components/TableOfContents.tsx";
import modulosData from "../data/modulos.json";
import Note from "../components/Notes.tsx";
import Codeblock from "../components/Codeblock.tsx";

const mavenBuildCode = `./mvnw clean package`;

const gradleBuildCode = `./gradlew clean build`;

const jarRunCode = `java -jar target/mi-app-0.0.1-SNAPSHOT.jar`;

const envCode = `spring.datasource.url=\${DB_URL}
spring.datasource.username=\${DB_USERNAME}
spring.datasource.password=\${DB_PASSWORD}
server.port=\${PORT:8080}`;

const dockerfileCode = `FROM eclipse-temurin:17-jdk-alpine

WORKDIR /app

COPY target/*.jar app.jar

EXPOSE 8080

ENTRYPOINT ["java", "-jar", "app.jar"]`;

const dockerBuildCode = `docker build -t mi-app .`;

const dockerRunCode = `docker run -p 8080:8080 \
-e DB_URL=jdbc:postgresql://host:5432/mi_app \
-e DB_USERNAME=postgres \
-e DB_PASSWORD=secret \
mi-app`;

const cloudCode = `# Ejemplo general de despliegue
1. Generar el .jar con Maven o Gradle
2. Configurar variables de entorno
3. Subir la imagen Docker o el .jar al proveedor
4. Exponer el puerto configurado
5. Revisar logs y estado de la aplicación`;

export const Deploy = () => {
  return (
    <DocsLayout
      toc={<TableOfContents items={modulosData.sidebar[2].items[3].toc} />}
    >
      <h1 className="text-4xl font-extrabold tracking-tight text-[#141414] mb-4">
        Despliegue
      </h1>

      <p className="text-xl text-[#757575] leading-relaxed">
        Desplegar una aplicación Spring Boot consiste en generar el build,
        preparar la configuración del entorno y ejecutar la aplicación en un
        servidor o proveedor cloud. Es una etapa importante porque conecta el
        desarrollo local con un entorno real de uso.
      </p>

      <h2
        id="build"
        className="text-2xl font-bold mt-12 mb-4 text-[#141414] scroll-mt-20"
      >
        Build con Maven/Gradle
      </h2>

      <p className="text-base leading-7 text-[#141414] my-6">
        Antes de desplegar, necesitas generar el artefacto de la aplicación. En
        Spring Boot, esto normalmente produce un archivo{" "}
        <code className="bg-[#f7f7f7] px-1.5 py-0.5 rounded text-sm">.jar</code>{" "}
        ejecutable que contiene el código y las dependencias necesarias.
      </p>

      <Codeblock code={mavenBuildCode} title="Maven" />

      <Codeblock code={gradleBuildCode} title="Gradle" />

      <p className="text-base leading-7 text-[#141414] my-6">
        Después del build, el archivo generado suele quedar en una carpeta como{" "}
        <code className="bg-[#f7f7f7] px-1.5 py-0.5 rounded text-sm">
          target
        </code>{" "}
        o{" "}
        <code className="bg-[#f7f7f7] px-1.5 py-0.5 rounded text-sm">
          build/libs
        </code>
        , dependiendo de la herramienta utilizada.
      </p>

      <Codeblock code={jarRunCode} title="Ejecutar .jar" />

      <p className="text-base leading-7 text-[#141414] my-6">
        Este comando permite ejecutar directamente la aplicación empacada, algo
        muy útil para probar el resultado final antes del despliegue real.
      </p>

      <Note title="Idea principal">
        El build transforma tu proyecto en un artefacto listo para ejecutarse en
        otro entorno sin necesidad de abrir el código fuente.
      </Note>

      <h2
        id="docker"
        className="text-2xl font-bold mt-12 mb-4 text-[#141414] scroll-mt-20"
      >
        Dockerizar la app
      </h2>

      <p className="text-base leading-7 text-[#141414] my-6">
        Docker permite empaquetar la aplicación junto con su entorno de
        ejecución. Esto ayuda a que el proyecto se comporte de forma similar en
        desarrollo, pruebas y producción.
      </p>

      <Codeblock code={dockerfileCode} title="Dockerfile" />

      <p className="text-base leading-7 text-[#141414] my-6">
        En este ejemplo, la imagen copia el archivo{" "}
        <code className="bg-[#f7f7f7] px-1.5 py-0.5 rounded text-sm">.jar</code>{" "}
        generado por Spring Boot y lo ejecuta dentro de un contenedor Java 17.
      </p>

      <Codeblock code={dockerBuildCode} title="Construir imagen" />

      <Codeblock code={dockerRunCode} title="Ejecutar contenedor" />

      <div className="grid md:grid-cols-2 gap-6 my-8">
        <div className="p-6 border border-[#f2f2f2] rounded-xl">
          <h3 className="font-bold text-lg mb-2 text-[#141414]">
            Entorno consistente
          </h3>
          <p className="text-sm text-[#757575]">
            Docker evita muchas diferencias entre el entorno local y el entorno
            del servidor.
          </p>
        </div>

        <div className="p-6 border border-[#f2f2f2] rounded-xl">
          <h3 className="font-bold text-lg mb-2 text-[#141414]">
            Despliegue más simple
          </h3>
          <p className="text-sm text-[#757575]">
            Un contenedor facilita mover la aplicación entre distintos
            proveedores o máquinas.
          </p>
        </div>
      </div>

      <h2
        id="variables-entorno"
        className="text-2xl font-bold mt-12 mb-4 text-[#141414] scroll-mt-20"
      >
        Variables de entorno
      </h2>

      <p className="text-base leading-7 text-[#141414] my-6">
        En producción, no conviene dejar datos sensibles o configuraciones
        específicas escritas directamente en el código. Por eso, es habitual
        usar <span className="font-semibold">variables de entorno</span> para
        puertos, credenciales, URLs de base de datos y otros valores que cambian
        según el entorno.
      </p>

      <Codeblock
        code={envCode}
        title="src/main/resources/application.properties"
      />

      <p className="text-base leading-7 text-[#141414] my-6">
        En este ejemplo, Spring Boot toma los valores desde el entorno. Además,
        el puerto usa un valor por defecto de{" "}
        <code className="bg-[#f7f7f7] px-1.5 py-0.5 rounded text-sm">8080</code>{" "}
        si la variable{" "}
        <code className="bg-[#f7f7f7] px-1.5 py-0.5 rounded text-sm">PORT</code>{" "}
        no está definida.
      </p>

      <Note title="Buenas prácticas">
        No subas contraseñas, tokens o claves privadas al repositorio. Usa
        variables de entorno o sistemas de secretos del proveedor.
      </Note>

      <h2
        id="deploy-cloud"
        className="text-2xl font-bold mt-12 mb-4 text-[#141414] scroll-mt-20"
      >
        Deploy en la nube
      </h2>

      <p className="text-base leading-7 text-[#141414] my-6">
        Una vez generado el artefacto o la imagen Docker, puedes desplegar la
        aplicación en distintos servicios cloud. El flujo general suele ser muy
        parecido aunque cambie el proveedor.
      </p>

      <Codeblock code={cloudCode} title="Flujo general" />

      <p className="text-base leading-7 text-[#141414] my-6">
        Algunos proveedores permiten desplegar directamente desde un repositorio
        Git, mientras que otros esperan una imagen Docker o un archivo
        ejecutable. En cualquier caso, es importante revisar los logs, validar
        las variables de entorno y confirmar que la aplicación responde
        correctamente después del despliegue.
      </p>

      <div className="grid md:grid-cols-2 gap-6 my-8">
        <div className="p-6 border border-[#f2f2f2] rounded-xl">
          <h3 className="font-bold text-lg mb-2 text-[#141414]">
            Logs y monitoreo
          </h3>
          <p className="text-sm text-[#757575]">
            Revisar logs después del deploy ayuda a detectar errores de
            configuración, conexión o arranque.
          </p>
        </div>

        <div className="p-6 border border-[#f2f2f2] rounded-xl">
          <h3 className="font-bold text-lg mb-2 text-[#141414]">
            Configuración del puerto
          </h3>
          <p className="text-sm text-[#757575]">
            Muchos proveedores cloud asignan el puerto mediante variables de
            entorno, por lo que la app debe poder leerlo dinámicamente.
          </p>
        </div>
      </div>

      <Note title="Resumen">
        El despliegue de una aplicación Spring Boot suele incluir generar el
        build, preparar variables de entorno, opcionalmente dockerizar la app y
        ejecutarla en un servidor o proveedor cloud con monitoreo y revisión de
        logs.
      </Note>
    </DocsLayout>
  );
};
