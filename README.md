Replicar proyecto completo Node con TS y Express visto en el vídeo

Subir el enlace al repositorio Github / Gitlab donde lo subas

Crear un README.md explicando:

Las dependencias que has instalado y para qué sirve cada una de ellas

Los scripts de NPM que hayas creado y para qué sirven cada uno de ellos

Las variables de entorno que habrá que crear en el .env para cualquiera que lo descargue

Creación de rutas (endpoints del servidor):

Ruta tipo GET que devuelva una Response 200 con un JSON con la siguiente estructura:

“data”: {

“message”: “Goodbye, world”

}

EXTRA: Investigar cómo leer parámetros de consulta por la URL

Modificar la ruta “hello” para que reciba un parámetro query (?name=”Nombre”) y devuelva una Response 200 con un JSON con la siguiente estructura:

“data”: {

“message”: “Hola, {nombre pasado por parámetro o “anónimo” en caso de que no exista el parámetro}”

}

Instalar Postman y probar las dos rutas del proyecto 