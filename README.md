# Tuten-Test
  La presente app fue desarrollada con el fin de cumplir los requerimientos para una prueba de admisión, dicha prueba consta de 3 problemas los cuales pueden ser visualizados junto con su solución en:
  
* https://frontpage.brayhanalberto.now.sh

Por otro lado la api se encuentra en:

 * https://backend-test-brayhan-tuten.herokuapp.com/api/getTimeUTC

No es necesario nada más para hacer las pruebas, con entrar en la página del frontend basta.

## Técnologias

### FrontPage:
* @date-io/date-fns ^1.3.9
* @material-ui/core ^4.3.3
* @material-ui/icons ^4.2.1
* @material-ui/pickers ^3.2.4
* axios ^0.19.0
* clsx ^1.0.4
* date-fns ^2.0.0-beta.5
* react ^16.9.0
* react-dom ^16.9.0
* react-json-view ^1.19.1
* react-loader-spinner ^3.1.2
* react-material-ui-form-validator ^2.0.9
* react-router-dom ^5.0.1
* styled-components ^4.3.2

### Backend
* Spring Boot 2.17
* Spring Rest

## Consideraciones:
### Problema 2: 
Para este problema se asumio que la respuesta especificada en el resultado se encuentra en formato UTC y que la misma siempre será en formato UTC. Por esto se determino que los datos, tanto parametros como respuesta, del enunciado no están relacionados. Es decir de usar el end point con los parametros del enuncuados no se producira la respuesta que se encuentra en el mismo. 

## Deploy local 

### React
* Debe ejecutar el comando `npm run dev` desde directorio /frontPage para iniciar el servidor dev de webpack desde `localhost:80`.
* En caso de querer cambiar el puerto puede ejecutar el comando `webpack-dev-server --port PORT --history-api-fallback`.

## Java
* Debe ejecutar el comando `java -jar target/myapplication-0.0.1-SNAPSHOT.jar` desde el directorio `/API` una vez compilado el proyecto.
