# Find-a-meal
*¿No sabes qué hacer de comer con ingredientes que tienes en casa? :anguished: ¿te quedaste sin ideas o quisieras preparar aquél platillo que te gustó en un restaurante? :scream: ¡**Find-a meal** es la solución que buscabas! con un recetario totalmente digital y dinámico para descubrir tus nuevas recetas favoritas.*

![Imagen de la página principal](https://raw.githubusercontent.com/wayusei/find-a-meal/master/imagenesProyecto/pagina_principal.jpg) 

## ¿Cómo usarlo? 
Con tan solo poner el nombre del platillo o del ingrediente (:see_no_evil: OJO: este tiene que estar escrito en inglés -aunque hay excepciones para nombres de platillos-) en "¿Qué cocinarás hoy?" y haciendo click en "Buscar" este te traerá las recetas que contienen el ingrediente que escribiste o la receta del platillo, según lo que hayas escrito, y ¡listo! podrás seleccionar la receta haciendo click sobre la imagen o el nombre para leerla y comenzar a cocinar. Aquí un pequeño ejemplo:

1. En mi casa tengo tomates, asi que quisiera una receta que incluyera este ingrediente. Por lo tanto escribo "tomato" (si tienes dudas de cómo se dice el ingrediente de tu elección en inglés, ve aqui <a href="https://translate.google.com/?hl=es&sl=auto&tl=en&op=translate" target="_blank">Google Traductor</a>)

![Imagen para buscar tomato](https://raw.githubusercontent.com/wayusei/find-a-meal/master/imagenesProyecto/buscar_1.jpg) 

2. Doy click en "Buscar" y me saldrán diversas recetas que incluyen este ingrediente 

![Imagen de recetas](https://raw.githubusercontent.com/wayusei/find-a-meal/master/imagenesProyecto/buscar_2.jpg) 

3. Selecciono la receta que más me agrada. En este caso selecciono Lasagna Sandiwiches haciendo click sobre la imagen o el nombre

![Imagen de recetas](https://raw.githubusercontent.com/wayusei/find-a-meal/master/imagenesProyecto/buscar_3.jpg) 

Y voilà:exclamation: todo para poner manos a la obra. En caso de tener problemas con el idioma inglés te dejamos el link a <a href="https://translate.google.com/?hl=es&sl=en&tl=es&op=translate" target="_blank">Google Traductor</a> otra vez para no perderte ningún detalle. Inclusive podrás observar la información nutrimental de tu platillo al final de la receta :eyes:


Si por otro lado quieres ser sorprendido por alguna de nuestras recetas favoritas simplemente haz click en el botón "Sorpréndeme" para mostrarte una receta al azar que seguramente te encantará. :heart_eyes:

![Imagen de sorprendeme](https://raw.githubusercontent.com/wayusei/find-a-meal/master/imagenesProyecto/sorprendeme.jpg)

En caso de que no se encuentre el ingrediente, el nombre del platillo que escribiste o lo hayas escrito en español (o en otro idioma incluso), te desplegará el mensaje "No se encontró ningún platillo o ingrediente con ese nombre". Por lo que te invitamos a intentarlo una vez más :relaxed: que tu aventura en la cocina apenas comienza. :sparkles:

![Imagen de error](https://raw.githubusercontent.com/wayusei/find-a-meal/master/imagenesProyecto/error.jpg)

## ¿Hay pre-requisitos para usar **Find-a-meal-**? :computer:
Solo necesitas un equipo conectado a internet y acceder a la página <a href="https://wayusei.github.io/find-a-meal/" target="_blank">Find-a-meal</a> para comenzar a descubrir el mundo de la cocina. 
También puedes acceder al sitio por medio del siguiente código QR desde tu dispositivo móvil:

![Imagen de QR](https://raw.githubusercontent.com/wayusei/find-a-meal/master/imagenesProyecto/qr.png)


# Acerca del proyecto
Proyecto final presentado por el equipo #16 como parte de la fase 2 "Programación con JavaScript"

## Herramientas y apoyo para la construcción del sitio :hammer:
- API para obtener los resultados: <a href="https://www.themealdb.com/api.php" target="_blank">TheMealDB</a>
- Moqups para el bosquejo/diseño de la página
- Webpack, Babel, Webpack Dev Server
- Loaders: Bootstrap, CSS
- Manejo de DOM
- GitHub
- Zoom y WhatsApp para las reuniones :runner:
- Google documents para la planeación de las actividades :information_desk_person:

## ¿Cómo trabajamos durante el proyecto? (Problemas/obstáculos durante el proyecto) :eyes:
Lo primero fue que hicimos un grupo en slack para de primera instancia tenernos identificados como el equipo #16. 
Como fue díficil que haya una respuesta pronta (no todos teníamos activadas las notificaciones) pasamos a comunicarnos por Whatsapp lo que fue más fácil y cómodo para todos. Finalmente el 18 de agosto todos estábamos en el grupo para organizarnos mejor.

Un día después nuestro compañero Rodrigo había creado el repositorio en Github y nos mandó las invitaciones para empezar a colaborar. Como todavía no teníamos los roles que desempeñaríamos cada quien, simplemente estaba un HTML básico para posteriormente repartir los features. 

Primeramente se hizo un bosquejo del diseño de lo que sería la página principal usando la página de Moqups para esto: un fondo y sobre el dos botones, un input y el título "Find-a-meal".

![Imagen de primer diseño](https://raw.githubusercontent.com/wayusei/find-a-meal/master/imagenesProyecto/diseño.jpg)
 
 Con esto empezaron las reuniones y a trabajar en el proyecto con más frecuencia. 

Por cuestión de zonas horarias y trabajo se hizo un documento compartido en Google drive para enlistar las actividades que se necesitarían desarrollar para el proyecto y quién o quiénes estaría a cargo de dicha actividad. Así todos podríamos ver qué había pasado en la junta que no asistimos. 

![Imagen de documento compartido en google](https://raw.githubusercontent.com/wayusei/find-a-meal/master/imagenesProyecto/doc_compartido.jpg)

Enseguida se creó un commit con Webpack y se creó la rama develop para clonarla y trabajar cada uno de nosotros.
Uno de los primeros problemas a los que nos enfrentamos fue que no nos lográbamos reunir para ver cómo se iba a trabajar y a repartir las acciones a tomar así que algunos compañeros se propusieron para hacer algunas actividades y se anotaron en el documento compartido. 

El 24 de agosto logramos estar la mayoría del equipo en una reunión (nos faltó un integrante) pero se acordó y se abarcaron todas las actividades para finalmente trabajar cada uno en lo que le tocó. Se tomó nota en el documento compartido de Google. 

A medida que se iba avanzando surgieron algunas dudas de los compañeros respecto a cómo hacer cierta tarea asignada preguntando en el grupo, pero siempre hubo la disposición de ayudar. 
Se revisaron los pull request y se hizo merge a la rama develop y master para que la página estuviera montada en GitHub pages con los cambios actuales el 30 de agosto; y así el último día del módulo, al terminar, se acordó una junta para ver lo que faltaba.

![Imagen de reunión en zoom](https://raw.githubusercontent.com/wayusei/find-a-meal/master/imagenesProyecto/equipo.jpg)

También se cambió el diseño de la página: (este es el viejo diseño)

![Imagen de diseño anterior](https://raw.githubusercontent.com/wayusei/find-a-meal/master/imagenesProyecto/antes_proyecto.jpg)

Algunos problemas que se vieron fueron que la fuente original que se vió para la página no se subió correctamente (se cambió por otra), hubo confusión sobre el documento index.html en la rama main y develop (por lo que afectó cuando se cargó la página para ver los cambios) y no sé sabía sobre cuál trabajar; al escribir un ingrediente en la página no buscaba nada (WebPack no buscaba ingredientes) y se decidió cambiar el mensaje "No se encontró ninguna receta con este ingrediente", que aparecía como un cuadro de diálogo en el navegador, a que saliera abajo donde se supone que salen las recetas. 

Algunos problemas continuaron como que la API de búsqueda por ingredientes no traía todos los datos, al seleccionar una receta salía el modal vacío (solo se visualizaba el título), problema con la altura de las cards y que el buscador e input no aceptaba la tecla enter (se refrescaba la página cada vez que se presionaba enter).

Otros detalles que faltaban era agregar la búsqueda por platillo ya que solo lo hacía por ingrediente (estaba desde el inicio pero por falta de comunicación en la parte de por qué método buscaría la receta se cambió solo a buscar por ingredientes) y que se justificara el texto en la preparación de la receta. 

Los últimos pasos fueron actualizar completamente el README con la página ya concluida y el vídeo del equipo como último requisito. 


## Integrantes del equipo de Find-a-meal :construction_worker:
- Rodrigo Rosas
- Ángel Alberto Pimentel
- Verónica Encinas
- Sergio Monterrubio
- Miriam Rosales