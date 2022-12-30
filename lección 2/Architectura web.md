
## ¿Qué es una aplicación web?

![image](https://user-images.githubusercontent.com/51721338/210032572-6d8d7487-ca0a-4180-83e0-7de70648e389.png) 

Una aplicación web es un programa de software que se ejecuta en un servidor web y se accede a través de un navegador web a Internet. Las aplicaciones web están diseñadas para realizar una función específica o proporcionar un servicio y, a menudo, se utilizan para interactuar con los usuarios y otros sistemas a través de una interfaz gráfica de usuario (GUI).

Algunos ejemplos de aplicaciones web incluyen plataformas de compras en línea como amazon.com, sitios de redes sociales como Instagram, clientes de correo electrónico como outlook y herramientas de productividad como Google Docs. Las aplicaciones web generalmente se desarrollan utilizando lenguajes de programación como HTML, CSS y JavaScript, y también pueden usar bases de datos y otras tecnologías para almacenar y administrar datos.

Las aplicaciones web se diferencian de las aplicaciones de escritorio tradicionales en que no es necesario instalarlas en la computadora de un usuario y se puede acceder a ellas desde cualquier dispositivo con un navegador web y una conexión a Internet. Esto los hace convenientes y accesibles, pero también significa que pueden estar sujetos a vulnerabilidades de seguridad que se ejecutan remotamente y pueden requerir actualizaciones y mantenimiento regulares.

## ¿Backend vs. Frontend?

![image](https://user-images.githubusercontent.com/51721338/210032705-dda10a5d-476c-4baf-89f0-c7494e5dd18a.png)

En el contexto del desarrollo web, los términos "frontend" y "backend" se refieren a las dos partes principales de una aplicación web.

El frontend es la parte de la aplicación con la que interactúa el usuario. Es la interfaz gráfica de usuario (GUI) que presenta los datos al usuario y le permite realizar acciones como hacer clic en botones, completar formularios y ver contenido. El frontend generalmente se implementa usando HTML, CSS y JavaScript y se representa en el navegador web del usuario.

El backend, por otro lado, es la parte de la aplicación que se ejecuta en un servidor y no es directamente visible para el usuario. Es responsable de almacenar y administrar datos, realizar cálculos y procesar solicitudes desde la interfaz, e interactuar con otros sistemas y servidores. El backend generalmente se implementa utilizando lenguajes como Javascript (Node.js) Python, Java o PHP y se accede a través de una interfaz de programación de aplicaciones (API) o un lenguaje de consulta como GraphQL.

Juntos, el frontend y el backend funcionan para proporcionar una aplicación web completa que permite a los usuarios interactuar y recuperar datos de un servidor.

El desarrollo front-end se centra en los aspectos visuales de un sitio web, la parte que los usuarios ven y con la que interactúan. El desarrollo de back-end comprende la estructura, el sistema, los datos y la lógica de un sitio.

## HTTP (Hypertext Transfer Protocol):

HTTP (Protocolo de transferencia de hipertexto) es un protocolo de comunicación que se utiliza para transmitir datos a través de Internet. Es un conjunto de reglas que dictan cómo dos dispositivos (como una computadora y un servidor) pueden comunicarse entre sí a través de Internet.

Aquí hay una descripción general simplificada de cómo funciona la comunicación HTTP:

1) Un cliente (como un navegador web) envía una solicitud HTTP a un servidor. La solicitud especifica el tipo de acción que el cliente desea que realice el servidor (como recuperar una página web o cargar un archivo).

2) El servidor recibe la solicitud y la procesa. Si la solicitud es válida, el servidor realizará la acción especificada y enviará una respuesta HTTP al cliente.

3) La respuesta incluye un código de estado (como 200 para éxito o 404 para no encontrado) y cualquier dato solicitado por el cliente (como una página web o un archivo).

4) El cliente recibe la respuesta y procesa los datos. Si el código de estado indica que la solicitud fue exitosa, el cliente mostrará los datos al usuario.

La comunicación HTTP es una parte esencial del funcionamiento de Internet, ya que permite que los dispositivos intercambien información e interactúen entre sí.

![image](https://user-images.githubusercontent.com/51721338/210033091-d6fb3263-17d8-40cb-83c1-e428f82dc818.png)

## Seguridad Web:

La seguridad web se refiere a las medidas tomadas para proteger un sitio web y sus usuarios de diversas amenazas cibernéticas, como malware, ataques de phishing y piratería. Estas amenazas pueden dañar el sitio web, robar información confidencial de los usuarios o interrumpir el funcionamiento normal del sitio web.

Hay varias medidas que se pueden tomar para asegurar un sitio web, tales como:

Uso de conexiones seguras: los sitios web deben usar Secure Sockets Layer (SSL) o Transport Layer Security (TLS) para cifrar la comunicación entre el sitio web y el navegador web del usuario. Esto ayuda a evitar las escuchas y la manipulación de los datos que se transmiten.

Implementar contraseñas seguras: es importante usar contraseñas seguras y únicas para cada sitio web y actualizarlas periódicamente para evitar el acceso no autorizado a las cuentas.

Protección contra malware: los sitios web pueden usar herramientas para buscar y eliminar malware que pueda estar presente en el sitio. También pueden utilizar medidas como cortafuegos y sistemas de prevención de intrusiones para bloquear el acceso de malware al sitio.

Capacitar a los usuarios: es importante educar a los usuarios sobre los riesgos de los ataques de phishing y cómo identificarlos y evitarlos.

Al implementar estas y otras medidas de seguridad, los sitios web pueden ayudar a protegerse a sí mismos y a sus usuarios de las amenazas cibernéticas y garantizar una experiencia en línea segura.

## Certificados Web:

Los certificados web, también conocidos como certificados SSL/TLS, se utilizan para establecer una conexión segura entre un servidor web y un cliente (generalmente un navegador web). Permiten que información confidencial, como contraseñas y números de tarjetas de crédito, se transmita de forma segura a través de Internet.

Para establecer una conexión segura, el servidor web y el cliente intercambian claves para cifrar y descifrar los datos que se transmiten. Un certificado web contiene información sobre la identidad del sitio web y la clave utilizada para establecer la conexión segura.

Un ejemplo de un certificado web es un icono de "candado" que aparece en la barra de direcciones de un navegador web cuando un usuario visita un sitio web seguro. Este icono indica que el sitio web utiliza un certificado web y que la conexión es segura.

Los certificados web son emitidos por organizaciones denominadas autoridades de certificación (CA). Las CA verifican la identidad del propietario del sitio web y emiten un certificado para el sitio web si cumple con los requisitos necesarios. Esto ayuda a garantizar que los usuarios puedan confiar en el sitio web y en la información transmitida a través de él.

### Aquí hay un diagrama simple de un intercambio de certificados web:

![image](https://user-images.githubusercontent.com/51721338/210110120-9ed4bc00-3966-418c-a1d4-8241936d5f2e.png)

Este proceso ayuda a garantizar que la conexión entre el cliente y el servidor sea segura y que cualquier información que se transmita entre ellos se cifre y proteja contra manipulaciones o intercepciones.

