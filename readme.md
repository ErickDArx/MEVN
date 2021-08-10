# Estructura para el desarrollo de proyectos web STACK MEVN 

> Con ello podras crear y alistar tus proyectos para subirlos a produccion con Heroku.

- Se preparó el entorno con ```npm run init``` para generar el *package.json* que almacene los modulos y paquetes NPM que ocupemos para el proyecto.

- La estructura del proyecto se concentra en proporcionar un entorno rapido y agil para el desarrollo.

> Paquetes a utilizar
1. *.babelrc*: Este convierte el codigo de JS moderno al lenguaje que los navegadores entiendan.
2. *webpack*: unifica elementos o archivos JS para colocarlo en un solo documento ya sea minificado o entero.
3. *express.js*: framework de JS del lado del servidor que ofrece su flexibilidad en cuanto a la estructura del proyecto.

## Estructura

La carpeta src almacena el fichero de arranque del servidor *index.js*

## Que se ejecuta

Nodemon: como dependencia de desarrollo para reiniciar el servidor de manera constante
Morgaj: logs del servidor en ejecucion
ejs: motor de plantillas de html
express: framework Node.JS