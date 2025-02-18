USUARIO ------> user@gmail.com

CONTRAEÑA ----> 123

En JWT (JSON Web Tokens), los tokens y las rutas protegidas se manejan de la siguiente manera:

Tokens

Un token JWT es un string codificado que contiene información de autenticación y autorización.
Cuando un usuario se autentica correctamente, el servidor genera un token JWT que se envía al cliente.
El token contiene información como el ID del usuario, el rol, la fecha de expiración, etc.
El cliente almacena el token y lo envía en cada solicitud al servidor para autenticar y autorizar la petición.

Rutas protegidas

Las rutas protegidas son endpoints del servidor que requieren autenticación y autorización para acceder.
El servidor verifica el token JWT enviado en la solicitud para determinar si el usuario tiene permiso para acceder a la ruta.
Si el token es válido y el usuario tiene permiso, el servidor procesa la solicitud y devuelve la respuesta correspondiente.
Si el token es inválido o el usuario no tiene permiso, el servidor devuelve un error de autenticación o autorización.
Flujo de autenticación y autorización

El usuario se autentica en el servidor mediante un formulario de inicio de sesión o una solicitud de autenticación.
El servidor genera un token JWT y lo envía al cliente.
El cliente almacena el token y lo envía en cada solicitud al servidor.
El servidor verifica el token JWT y determina si el usuario tiene permiso para acceder a la ruta solicitada.
Si el usuario tiene permiso, el servidor procesa la solicitud y devuelve la respuesta correspondiente.
