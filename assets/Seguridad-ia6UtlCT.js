import{a as e,i as t,n,o as r,r as i,t as a}from"./index-Dt8U_ycJ.js";var o=r(),s=`<span class="keyword">import</span> <span class="string">org.springframework.context.annotation.Bean</span>;
<span class="keyword">import</span> <span class="string">org.springframework.context.annotation.Configuration</span>;
<span class="keyword">import</span> <span class="string">org.springframework.security.config.annotation.web.builders.HttpSecurity</span>;
<span class="keyword">import</span> <span class="string">org.springframework.security.web.SecurityFilterChain</span>;

<span class="keyword">@Configuration</span>
<span class="keyword">public class</span> <span class="string">SecurityConfig</span> {

    <span class="keyword">@Bean</span>
    <span class="keyword">public</span> <span class="string">SecurityFilterChain</span> securityFilterChain(<span class="string">HttpSecurity</span> http) <span class="keyword">throws</span> Exception {
        <span class="keyword">return</span> http
            .csrf(csrf -> csrf.disable())
            .authorizeHttpRequests(auth -> auth
                .requestMatchers(<span class="string">"/public/**"</span>).permitAll()
                .anyRequest().authenticated()
            )
            .httpBasic(customizer -> {})
            .build();
    }
}`,c=`<span class="keyword">import</span> <span class="string">org.springframework.web.bind.annotation.PostMapping</span>;
<span class="keyword">import</span> <span class="string">org.springframework.web.bind.annotation.RequestBody</span>;
<span class="keyword">import</span> <span class="string">org.springframework.web.bind.annotation.RestController</span>;

<span class="keyword">record</span> <span class="string">LoginRequest</span>(String email, String password) {}

<span class="keyword">@RestController</span>
<span class="keyword">public class</span> <span class="string">AuthController</span> {

    <span class="keyword">@PostMapping</span>(<span class="string">"/auth/login"</span>)
    <span class="keyword">public</span> <span class="string">String</span> login(<span class="string">@RequestBody</span> LoginRequest request) {
        <span class="comment">// validar credenciales y generar token</span>
        <span class="keyword">return</span> <span class="string">"token-ejemplo"</span>;
    }
}`,l=`<span class="keyword">import</span> <span class="string">io.jsonwebtoken.Jwts</span>;
<span class="keyword">import</span> <span class="string">io.jsonwebtoken.SignatureAlgorithm</span>;
<span class="keyword">import</span> <span class="string">java.util.Date</span>;

<span class="keyword">public class</span> <span class="string">JwtService</span> {

    <span class="keyword">private final</span> <span class="string">String</span> secretKey = <span class="string">"mi-clave-secreta"</span>;

    <span class="keyword">public</span> <span class="string">String</span> generarToken(String username) {
        <span class="keyword">return</span> Jwts.builder()
            .setSubject(username)
            .setIssuedAt(<span class="keyword">new</span> Date())
            .setExpiration(<span class="keyword">new</span> Date(System.currentTimeMillis() + 86400000))
            .signWith(SignatureAlgorithm.HS256, secretKey)
            .compact();
    }
}`,u=`<span class="keyword">import</span> <span class="string">org.springframework.security.config.annotation.method.configuration.EnableMethodSecurity</span>;
<span class="keyword">import</span> <span class="string">org.springframework.web.bind.annotation.GetMapping</span>;
<span class="keyword">import</span> <span class="string">org.springframework.web.bind.annotation.RestController</span>;
<span class="keyword">import</span> <span class="string">org.springframework.security.access.prepost.PreAuthorize</span>;

<span class="keyword">@EnableMethodSecurity</span>
<span class="keyword">@RestController</span>
<span class="keyword">public class</span> <span class="string">AdminController</span> {

    <span class="string">@PreAuthorize</span>(<span class="string">"hasRole('ADMIN')"</span>)
    <span class="string">@GetMapping</span>(<span class="string">"/admin/panel"</span>)
    <span class="keyword">public</span> <span class="string">String</span> panelAdmin() {
        <span class="keyword">return</span> <span class="string">"Acceso permitido al panel de administración"</span>;
    }
}`,d=`<span class="keyword">import</span> <span class="string">org.springframework.context.annotation.Bean</span>;
<span class="keyword">import</span> <span class="string">org.springframework.context.annotation.Configuration</span>;
<span class="keyword">import</span> <span class="string">org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder</span>;
<span class="keyword">import</span> <span class="string">org.springframework.security.crypto.password.PasswordEncoder</span>;

<span class="keyword">@Configuration</span>
<span class="keyword">public class</span> <span class="string">PasswordConfig</span> {

    <span class="keyword">@Bean</span>
    <span class="keyword">public</span> <span class="string">PasswordEncoder</span> passwordEncoder() {
        <span class="keyword">return</span> <span class="keyword">new</span> <span class="string">BCryptPasswordEncoder</span>();
    }
}`,f=()=>(0,o.jsxs)(t,{toc:(0,o.jsx)(i,{items:e.sidebar[2].items[0].toc}),children:[(0,o.jsx)(`h1`,{className:`text-4xl font-extrabold tracking-tight text-[#141414] mb-4`,children:`Seguridad`}),(0,o.jsx)(`p`,{className:`text-xl text-[#757575] leading-relaxed`,children:`La seguridad en Spring Boot permite proteger rutas, autenticar usuarios, controlar permisos y trabajar con mecanismos comunes como JWT. Spring Security es el módulo principal para resolver estas necesidades dentro del ecosistema Spring.`}),(0,o.jsx)(`h2`,{id:`spring-security`,className:`text-2xl font-bold mt-12 mb-4 text-[#141414] scroll-mt-20`,children:`Spring Security`}),(0,o.jsxs)(`p`,{className:`text-base leading-7 text-[#141414] my-6`,children:[(0,o.jsx)(`span`,{className:`font-semibold`,children:`Spring Security`}),` es el módulo del ecosistema Spring encargado de proteger aplicaciones. Su función es interceptar peticiones, verificar la identidad del usuario y decidir si puede acceder o no a determinados recursos.`]}),(0,o.jsx)(`p`,{className:`text-base leading-7 text-[#141414] my-6`,children:`En una configuración básica, se puede definir qué rutas son públicas, cuáles requieren autenticación y qué mecanismo de acceso se utilizará.`}),(0,o.jsx)(a,{code:s,title:`SecurityConfig.java`}),(0,o.jsxs)(`p`,{className:`text-base leading-7 text-[#141414] my-6`,children:[`En este ejemplo, las rutas bajo`,` `,(0,o.jsx)(`code`,{className:`bg-[#f7f7f7] px-1.5 py-0.5 rounded text-sm`,children:`/public/**`}),` `,`quedan accesibles sin autenticación, mientras que el resto requiere que el usuario esté autenticado.`]}),(0,o.jsx)(n,{title:`Idea principal`,children:`Spring Security funciona como una capa que se ubica delante de los controladores para filtrar y proteger el acceso a la aplicación.`}),(0,o.jsx)(`h2`,{id:`autenticacion`,className:`text-2xl font-bold mt-12 mb-4 text-[#141414] scroll-mt-20`,children:`Autenticación`}),(0,o.jsxs)(`p`,{className:`text-base leading-7 text-[#141414] my-6`,children:[`La `,(0,o.jsx)(`span`,{className:`font-semibold`,children:`autenticación`}),` es el proceso de verificar quién es el usuario. Normalmente se realiza a partir de credenciales como email y contraseña, aunque también puede apoyarse en tokens, sesiones u otros mecanismos.`]}),(0,o.jsx)(`p`,{className:`text-base leading-7 text-[#141414] my-6`,children:`En aplicaciones REST, una práctica común es exponer un endpoint de login que reciba credenciales, las valide y devuelva un token que luego se utilizará en peticiones posteriores.`}),(0,o.jsx)(a,{code:c,title:`AuthController.java`}),(0,o.jsx)(`p`,{className:`text-base leading-7 text-[#141414] my-6`,children:`Este ejemplo muestra la idea general de un login. En un caso real, el controlador delegaría la validación a un servicio y devolvería un token generado para el usuario autenticado.`}),(0,o.jsx)(`h2`,{id:`autorizacion`,className:`text-2xl font-bold mt-12 mb-4 text-[#141414] scroll-mt-20`,children:`Autorización`}),(0,o.jsxs)(`p`,{className:`text-base leading-7 text-[#141414] my-6`,children:[`La `,(0,o.jsx)(`span`,{className:`font-semibold`,children:`autorización`}),` responde a una pregunta distinta: una vez autenticado, ¿qué puede hacer ese usuario? Aquí entran en juego los permisos, roles y reglas de acceso a recursos específicos.`]}),(0,o.jsx)(`p`,{className:`text-base leading-7 text-[#141414] my-6`,children:`Una aplicación puede permitir que todos los usuarios autenticados entren a ciertas rutas, pero reservar otras solo para perfiles concretos, como administradores.`}),(0,o.jsxs)(`div`,{className:`grid md:grid-cols-2 gap-6 my-8`,children:[(0,o.jsxs)(`div`,{className:`p-6 border border-[#f2f2f2] rounded-xl`,children:[(0,o.jsx)(`h3`,{className:`font-bold text-lg mb-2 text-[#141414]`,children:`Autenticación`}),(0,o.jsx)(`p`,{className:`text-sm text-[#757575]`,children:`Verifica la identidad del usuario: quién es y si sus credenciales son válidas.`})]}),(0,o.jsxs)(`div`,{className:`p-6 border border-[#f2f2f2] rounded-xl`,children:[(0,o.jsx)(`h3`,{className:`font-bold text-lg mb-2 text-[#141414]`,children:`Autorización`}),(0,o.jsx)(`p`,{className:`text-sm text-[#757575]`,children:`Define a qué recursos puede acceder ese usuario y qué acciones puede realizar.`})]})]}),(0,o.jsx)(`h2`,{id:`jwt`,className:`text-2xl font-bold mt-12 mb-4 text-[#141414] scroll-mt-20`,children:`JWT`}),(0,o.jsxs)(`p`,{className:`text-base leading-7 text-[#141414] my-6`,children:[(0,o.jsx)(`span`,{className:`font-semibold`,children:`JWT`}),` significa JSON Web Token. Es una forma común de manejar autenticación en APIs REST sin depender de sesiones en el servidor. Después del login, el servidor genera un token que el cliente envía en cada petición protegida.`]}),(0,o.jsx)(`p`,{className:`text-base leading-7 text-[#141414] my-6`,children:`Ese token suele incluir información básica del usuario y una fecha de expiración. Luego, el backend verifica su validez antes de permitir el acceso.`}),(0,o.jsx)(a,{code:l,title:`JwtService.java`}),(0,o.jsxs)(`p`,{className:`text-base leading-7 text-[#141414] my-6`,children:[`Este ejemplo resume la generación de un token. En una aplicación real, también suele existir un filtro que lea el token desde el encabezado`,` `,(0,o.jsx)(`code`,{className:`bg-[#f7f7f7] px-1.5 py-0.5 rounded text-sm`,children:`Authorization`}),` `,`y autentique al usuario en cada request.`]}),(0,o.jsx)(`h2`,{id:`roles-permisos`,className:`text-2xl font-bold mt-12 mb-4 text-[#141414] scroll-mt-20`,children:`Roles y permisos`}),(0,o.jsxs)(`p`,{className:`text-base leading-7 text-[#141414] my-6`,children:[`Los `,(0,o.jsx)(`span`,{className:`font-semibold`,children:`roles y permisos`}),` permiten definir distintos niveles de acceso dentro de la aplicación. Por ejemplo, un usuario con rol ADMIN puede tener acceso a paneles de gestión, mientras que un usuario estándar solo puede consultar sus propios datos.`]}),(0,o.jsxs)(`p`,{className:`text-base leading-7 text-[#141414] my-6`,children:[`Spring Security permite aplicar estas reglas tanto a nivel de rutas como directamente en métodos, usando anotaciones como`,` `,(0,o.jsx)(`code`,{className:`bg-[#f7f7f7] px-1.5 py-0.5 rounded text-sm`,children:`@PreAuthorize`}),`.`]}),(0,o.jsx)(a,{code:u,title:`AdminController.java`}),(0,o.jsxs)(`p`,{className:`text-base leading-7 text-[#141414] my-6`,children:[`En este caso, solo los usuarios con el rol`,` `,(0,o.jsx)(`code`,{className:`bg-[#f7f7f7] px-1.5 py-0.5 rounded text-sm`,children:`ADMIN`}),` `,`podrán ejecutar el método y acceder al panel.`]}),(0,o.jsx)(a,{code:d,title:`PasswordConfig.java`}),(0,o.jsxs)(`p`,{className:`text-base leading-7 text-[#141414] my-6`,children:[`Además de proteger rutas, es importante almacenar contraseñas de forma segura. Una práctica común es usar un`,` `,(0,o.jsx)(`code`,{className:`bg-[#f7f7f7] px-1.5 py-0.5 rounded text-sm`,children:`PasswordEncoder`}),` `,`como BCrypt para guardar hashes en vez de contraseñas en texto plano.`]}),(0,o.jsx)(n,{title:`Buenas prácticas`,children:`Protege solo lo necesario, separa autenticación de autorización, usa contraseñas hasheadas y define roles claros para mantener una seguridad más fácil de entender y mantener.`}),(0,o.jsx)(n,{title:`Resumen`,children:`La seguridad en Spring Boot se apoya en Spring Security para autenticar usuarios, controlar permisos, proteger rutas y trabajar con mecanismos modernos como JWT y roles de acceso.`})]});export{f as Seguridad};