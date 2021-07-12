<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal
      .titulo-principal__numero
        span 1
      h1 Modificar geometrías 2D

    .row.justify-content-center.align-items-center
        .col
          
          p.mb-3 En la ficha de inicio, existe el grupo de modificadores que a su vez posee varias herramientas para modificar o crear un flujo de trabajo más dinámico, la intención es evitar la generación de un reproceso. Por ejemplo, si se necesitan varias copias del mismo dibujo, la idea es no crear uno por uno, sino utilizar herramientas como copiar o incluso matriz. 

          p Para nuestro punto de Geometrías 2D y su profundización en cada punto utilizaremos el siguiente recurso de apoyo.

        .col-auto 
          img(src="@/assets/curso/images/tema1/img_1.svg" alt="", style="width:350px; display: block; margin:0 auto ;")

        .row
          .col-lg-6
            a.anexo.mb-4(:href="obtenerLink('/downloads/Modificación_de_Geometrías_2D.pdf')" target="_blank")
              .anexo__icono
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p Anexo. Modificación de Geometrías 2D
       
    h3.titulo-tercero Escala

    p.mb-5 La función de estos modificadores es que si se necesita desplazar el dibujo del lugar de origen a otro se pueda hacer.

    .bloque-texto-a.color-custom.p-4.p-md-5.mb-5 
      .row.m-0.align-items-center.justify-content-between
        .col-lg-8.mb-4.mb-lg-0
          .bloque-texto-a__texto.p-4
            h2.mb-0 Según Autodesk (2019b), el comando escala es una herramienta dentro del grupo modificar que permite ampliar o reducir a valores precisos cada una de las geometrías elaboradas.
        .col-lg-4.mb-4.mb-lg-0
          img(src="@/assets/curso/images/tema1/ico_1.svg" alt="", style="width:150px; display: block; margin:0 auto ;")

    p.mb-5 A continuación, en el Video 1, se describe el paso a paso de la aplicación del comando escala: 
    .row.justify-content-center.align-items-center.mb-5
      .col-10 
        figure.mb-5
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

      p.my-3 Con el fin de reforzar el uso y aplicación del comando, se recomienda ver el Video 2: 
    .row.justify-content-center.align-items-center.mb-5
      .col-10 
        figure.mb-5
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8
        .cajon.color-secundario.p-4.mb-4
          p Para más información, es posible revisar el recurso de apoyo “Modificación de Geometrías 2D”.

    p.mb-3 Desplazar o mover

    .bloque-texto-a.color-custom.p-4.p-md-5.mb-5 
      .row.m-0.align-items-center.justify-content-between
        .col-lg-8.mb-4.mb-lg-0
          .bloque-texto-a__texto.p-4
            h2.mb-0 Según Autodesk (2019f), se encuentra dentro del grupo modificar, es una de las herramientas más necesarias y útiles para el dibujo 2D y 3D porque permite desplazar líneas, geometrías o cualquier dibujo una distancia específica hacia una dirección determinada.
        .col-lg-4.mb-4.mb-lg-0
          img(src="@/assets/curso/images/tema1/ico_2.svg" alt="", style="width:150px; display: block; margin:0 auto ;")
            
    p.mb-5 A continuación, en el Video 3, se describe el paso a paso de la aplicación del comando desplazar o mover:  
    .row.justify-content-center.align-items-center.mb-5
      .col-10 
        figure.mb-5
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8
        .cajon.color-secundario.p-4.mb-4
          p Para más información, es posible revisar el recurso de apoyo “Modificación de Geometrías 2D”.

    p.mb-5 Copiar y copiar matriz

    .bloque-texto-a.color-custom.p-4.p-md-5.mb-5 
      .row.m-0.align-items-center.justify-content-between
        .col-lg-8.mb-4.mb-lg-0
          .bloque-texto-a__texto.p-4
            h2.mb-0 Según Autodesk (2020d), este comando se encuentra en la ficha de inicio en la paleta de modificar, permite crear copias a distancias específicas y hacia la dirección determinada por el usuario.
        .col-lg-4.mb-4.mb-lg-0
          img(src="@/assets/curso/images/tema1/ico_3.svg" alt="", style="width:150px; display: block; margin:0 auto ;")
    
    p.mb-5 A continuación, en el Video 4, se describe el paso a paso de la aplicación del comando copiar y copiar matriz:
    .row.justify-content-center.align-items-center.mb-5
      .col-10 
        figure.mb-5
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    
      p.mb-3 Con el fin de reforzar el uso y aplicación del comando, se recomienda ver el Video 5:
    .row.justify-content-center.align-items-center.mb-5
      .col-10 
        figure.mb-5
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8
        .cajon.color-secundario.p-4.mb-4
          p Para más información, es posible revisar el recurso de apoyo “Modificación de Geometrías 2D”.

    p.mb-5  Estirar (alargar)

    .bloque-texto-a.color-custom.p-4.p-md-5.mb-5 
      .row.m-0.align-items-center.justify-content-between
        .col-lg-8.mb-4.mb-lg-0
          .bloque-texto-a__texto.p-4
            h2.mb-0 Según Autodesk (2020b), es un comando del grupo de modificar que permite proyectar geometrías a distintas direcciones, obligando a las líneas que componen el dibujo a estirarse de acuerdo con el desplazamiento, sin perder la conexión entre sus elementos. Es una forma de modificar longitudes o alturas de distintos dibujos editando solo uno de sus contornos.
        .col-lg-4.mb-4.mb-lg-0
          img(src="@/assets/curso/images/tema1/ico_4.svg" alt="", style="width:150px; display: block; margin:0 auto ;")

    p.mb-5 A continuación, en el Video 6, se describe el paso a paso de la aplicación del comando estirar: 
    .row.justify-content-center.align-items-center.mb-5
      .col-10 
        figure.mb-5
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8
        .cajon.color-secundario.p-4.mb-4
          p Para más información, es posible revisar el recurso de apoyo “Modificación de Geometrías 2D”.

    p.mb-5 Girar (rotar)

    .bloque-texto-a.color-custom.p-4.p-md-5.mb-5 
      .row.m-0.align-items-center.justify-content-between
        .col-lg-8.mb-4.mb-lg-0
          .bloque-texto-a__texto.p-4
            h2.mb-0 Según Autodesk (2019a), es el comando que se encuentra en la ficha de inicio en el grupo de modificar y permite girar los elementos en dos dimensiones por medio de grados a referencias polares.
        .col-lg-4.mb-4.mb-lg-0
          img(src="@/assets/curso/images/tema1/ico_5.svg" alt="", style="width:150px; display: block; margin:0 auto ;")

    p.mb-5 A continuación, en el Video 7, se describe el paso a paso de la aplicación del comando girar o rotar:
    .row.justify-content-center.align-items-center.mb-5
      .col-10 
        figure.mb-5
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8
        .cajon.color-secundario.p-4.mb-4
          p Para más información, es posible revisar el recurso de apoyo “Modificación de Geometrías 2D”.
    
    p.mb-5 Símetria (Espejo)
    .bloque-texto-a.color-custom.p-4.p-md-5.mb-5 
      .row.m-0.align-items-center.justify-content-between
        .col-lg-8.mb-4.mb-lg-0
          .bloque-texto-a__texto.p-4
            h2.mb-0 Según Autodesk (2019d), crea una copia simétrica de objetos designados.
        .col-lg-4.mb-4.mb-lg-0
          img(src="@/assets/curso/images/tema1/ico_6.svg" alt="", style="width:150px; display: block; margin:0 auto ;")
    
    p.mb-5 A continuación, en el Video 8, se describe el paso a paso de la aplicación del comando simetría o espejo:
    .row.justify-content-center.align-items-center.mb-5
      .col-10 
        figure.mb-5
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    
      p.mb-3 Con el fin de reforzar el uso y aplicación del comando, se recomienda ver el Video 9, donde se explican los comandos girar y simetría: 
    .row.justify-content-center.align-items-center.mb-5
      .col-10 
        figure.mb-5
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8
        .cajon.color-secundario.p-4.mb-4
          p Para más información, es posible revisar el recurso de apoyo “Modificación de Geometrías 2D”.

    p.mb-5 Recortar 

    .bloque-texto-a.color-custom.p-4.p-md-5.mb-5 
      .row.m-0.align-items-center.justify-content-between
        .col-lg-8.mb-4.mb-lg-0
          .bloque-texto-a__texto.p-4
            h2.mb-0 Según Autodesk (2020h), en la ficha inicio en el grupo modificar, recorta objetos hasta encontrar las aristas de otros objetos.
        .col-lg-4.mb-4.mb-lg-0
          img(src="@/assets/curso/images/tema1/ico_7.svg" alt="", style="width:150px; display: block; margin:0 auto ;")

    p.mb-5 A continuación, en el Video 10, se describe el paso a paso de la aplicación del comando recortar: 
    .row.justify-content-center.align-items-center.mb-5
      .col-10 
        figure.mb-5
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8
        .cajon.color-secundario.p-4.mb-4
          p Para más información, es posible revisar el recurso de apoyo “Modificación de Geometrías 2D”.

    p.mb-5 Alargar (extender)

    .bloque-texto-a.color-custom.p-4.p-md-5.mb-5 
      .row.m-0.align-items-center.justify-content-between
        .col-lg-8.mb-4.mb-lg-0
          .bloque-texto-a__texto.p-4
            h2.mb-0 En la paleta o ficha de inicio y en el grupo de modificar, está la herramienta de alargar, la cual permite extender de forma masiva o independiente arcos o líneas hacia una geometría de referencia.
        .col-lg-4.mb-4.mb-lg-0
          img(src="@/assets/curso/images/tema1/ico_8.svg" alt="", style="width:150px; display: block; margin:0 auto ;")

    p.mb-5 A continuación, en el Video 11, se describe el paso a paso de la aplicación del comando alargar (extender):
    .row.justify-content-center.align-items-center.mb-5
      .col-10 
        figure.mb-5
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

      p.mb-3 Con el fin de reforzar el uso y aplicación del comando, se recomienda ver el Video 12, donde se explican los comandos alargar (extender) y recortar: 
    .row.justify-content-center.align-items-center.mb-5
      .col-10 
        figure.mb-5
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    .row.justify-content-center.align-items-center.mb-5
          .col-lg-8
            .cajon.color-secundario.p-4.mb-4
              p Para más información, es posible revisar el recurso de apoyo “Modificación de Geometrías 2D”.

    p.mb-5 Chaflán

    .bloque-texto-a.color-custom.p-4.p-md-5.mb-5 
      .row.m-0.align-items-center.justify-content-between
        .col-lg-8.mb-4.mb-lg-0
          .bloque-texto-a__texto.p-4
            h2.mb-0 Según Autodesk (2020c), un chaflán hace referencia al rebaje de una arista viva mediante un bucle que reduce el ángulo tan agudo de una intersección. 
        .col-lg-4.mb-4.mb-lg-0
          img(src="@/assets/curso/images/tema1/ico_9.svg" alt="", style="width:150px; display: block; margin:0 auto ;")

    p.mb-5 A continuación, en el Video 13, se describe el paso a paso de la aplicación del comando chaflán:
    .row.justify-content-center.align-items-center.mb-5
      .col-10 
        figure.mb-5
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    
    .row.justify-content-center.align-items-center.mb-5
          .col-lg-8
            .cajon.color-secundario.p-4.mb-4
              p Para más información, es posible revisar el recurso de apoyo “Modificación de Geometrías 2D”.

    p.mb-5 Empalme (radio)

    .bloque-texto-a.color-custom.p-4.p-md-5.mb-5 
      .row.m-0.align-items-center.justify-content-between
        .col-lg-8.mb-4.mb-lg-0
          .bloque-texto-a__texto.p-4
            h2.mb-0 Une dos aristas en ángulos diferentes por medio de un radio o arco. 
        .col-lg-4.mb-4.mb-lg-0
          img(src="@/assets/curso/images/tema1/ico_10.svg" alt="", style="width:150px; display: block; margin:0 auto ;")

    p.mb-5 A continuación, en el Video 14, se describe el paso a paso de la aplicación del comando empalme (radio): 
    .row.justify-content-center.align-items-center.mb-5
      .col-10 
        figure.mb-5
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

      p.mb-3 Con el fin de reforzar el uso y aplicación del comando, se recomienda ver el Video 15, donde se explican los comandos empalme y chaflán: 
    .row.justify-content-center.align-items-center.mb-5
      .col-10 
        figure.mb-5
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    
    .row.justify-content-center.align-items-center.mb-5
          .col-lg-8
            .cajon.color-secundario.p-4.mb-4
              p Para más información, es posible revisar el recurso de apoyo “Modificación de Geometrías 2D”.

    p.mb-5 Matriz

    .bloque-texto-a.color-custom.p-4.p-md-5.mb-5 
      .row.m-0.align-items-center.justify-content-between
        .col-lg-8.mb-4.mb-lg-0
          .bloque-texto-a__texto.p-4
            h2.mb-0 Según Autodesk (2019c), este comando, que se encuentra en la ficha inicio y el grupo modificar, permite crear múltiples copias simultáneas de un elemento 2D.
        .col-lg-4.mb-4.mb-lg-0
          img(src="@/assets/curso/images/tema1/ico_11.svg" alt="", style="width:150px; display: block; margin:0 auto ;")
    
    p.mb-5 A continuación, en el Video 16, se describe el paso a paso de la aplicación del comando matriz: 
    .row.justify-content-center.align-items-center.mb-5
      .col-10 
        figure.mb-5
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

      p.mb-3 Con el fin de reforzar el uso y aplicación del comando, se recomienda ver el Video 17, donde se explican los comandos de matriz rectangular, polar y de camino: 
    .row.justify-content-center.align-items-center.mb-5
      .col-10 
        figure.mb-5
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    .row.justify-content-center.align-items-center.mb-5
          .col-lg-8
            .cajon.color-secundario.p-4.mb-4
              p Para más información, es posible revisar el recurso de apoyo “Modificación de Geometrías 2D”.

    .bloque-texto-a.color-custom.p-4.p-md-5.mb-5 
      .row.m-0.align-items-center.justify-content-between
        .col-lg-8.mb-4.mb-lg-0
          .bloque-texto-a__texto.p-4
            h2.mb-0 Según Autodesk (2020e), en el grupo modificar de la ficha de inicio, se encuentra la herramienta desfase que crea círculos concéntricos, líneas paralelas y curvas paralelas a partir de una instancia original.
        .col-lg-4.mb-4.mb-lg-0
          img(src="@/assets/curso/images/tema1/ico_12.svg" alt="", style="width:150px; display: block; margin:0 auto ;")

    p.mb-5 A continuación, en el Video 18, se describe el paso a paso de la aplicación del comando desfase: 
    .row.justify-content-center.align-items-center.mb-5
      .col-10 
        figure.mb-5
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    
      p.mb-3 Con el fin de reforzar el uso y aplicación del comando, se recomienda ver el Video 19, donde se explica el comando desfase: 
    .row.justify-content-center.align-items-center.mb-5
      .col-10 
        figure.mb-5
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    
    .row.justify-content-center.align-items-center.mb-5
          .col-lg-8
            .cajon.color-secundario.p-4.mb-4
              p Para más información, es posible revisar el recurso de apoyo “Modificación de Geometrías 2D”.







  
</template>

<script>
import Muestras from '../components/Muestras' // borrar una vez el componente "Muestras" no se necesite
export default {
  name: 'Tema1',
  components: {
    Muestras, // borrar una vez el componente "Muestras" no se necesite
  },
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass" scoped></style>
