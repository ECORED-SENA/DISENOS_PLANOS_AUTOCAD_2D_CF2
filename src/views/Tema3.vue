<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal
      .titulo-principal__numero
        span 3
      h1 Bloques

    p.mb-3 Los bloques son objetos compuestos que se utilizan normalmente para símbolos, piezas, vistas de detalle y cuadros de rotulación.

    p.mb-5 Un bloque se forma a partir de uno o varios objetos combinados para crear un único objeto. A continuación, se proporcionan algunos ejemplos de bloques insertados en dibujos:

    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-lg-6
        p.BorTit Bloques
                figure
                  img(src="@/assets/curso/images/tema3/img_12.svg" alt='Bloques')
                  br
                  figcaption Nota. Tomada de Autodesk (2019e)


    
    p.mb-5 El uso de bloques presenta las siguientes ventajas:

    .row.justify-content-center
      .col-lg-10
        .row.align-items-center.mb-5
          .col-2
            figure
              img(src='@/assets/curso/images/tema3/ico_17.svg', style="margin: auto; max-width: 70%;")
          .col-10
            p.mb-0 Puede garantizar la uniformidad entre copias idénticas de muebles, accesorios, piezas, símbolos y cuadros de rotulación en los dibujos.
        hr
        .row.align-items-center.my-5
          .col-2
            figure
              img(src='@/assets/curso/images/tema3/ico_17.svg', style="margin: auto; max-width: 70%;")
          .col-10
            p.mb-0 Puede insertar, rotar, desplazar y copiar bloques, y ajustar su escala, de forma mucho más rápida que utilizando las selecciones de objetos geométricos individuales.
        hr
        .row.align-items-center.my-5
          .col-2
            figure
              img(src='@/assets/curso/images/tema3/ico_17.svg', style="margin: auto; max-width: 70%;")
          .col-10
            p.mb-0 Si se edita o se establece de nuevo una definición de bloque, todas las referencias a bloque se actualizan automáticamente.
        hr
        .row.align-items-center.my-5
          .col-2
            figure
              img(src='@/assets/curso/images/tema3/ico_17.svg', style="margin: auto; max-width: 70%;")
          .col-10
            p Puede incluir datos como números de pieza, costes, fechas de servicio y valores de rendimiento en los bloques. Los datos se almacenan en objetos especiales denominados atributos de bloque.
        hr
        .row.align-items-center.my-5
          .col-2
            figure
              img(src='@/assets/curso/images/tema3/ico_17.svg', style="margin: auto; max-width: 70%;")
          .col-10
            p Puede reducir el tamaño del archivo de un dibujo mediante la inserción de varias referencias a bloque en lugar de la duplicación de la geometría del objeto.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .cajon.color-primario.p-4.mb-3
          p <b>Consejo:</b> Con el acceso en línea, se pueden descargar archivos de dibujo de AutoCAD en los sitios web de proveedores y distribuidores comerciales. Esta opción puede ahorrar una cantidad considerable de tiempo, pero hay que asegurarse de que estos dibujos se hayan dibujado correctamente y con la escala adecuada.

    p.mb-5 Con el fin de reforzar el uso y aplicación del comando, se recomienda ver el Video 22, donde se explica la creación de capas: 

    .row.justify-content-center.align-items-center.mb-5
      .col-10 
        figure.mb-5
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)


</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass" scoped></style>
