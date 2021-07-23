<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal
      .titulo-principal__numero
        span 2
      h1 Administrador de capas

    SlyderB.mb-3(:datos="datosSlyder")

    .row.justify-content-center.align-items-center
            .col-6.col-md-8.col-lg-6.mb-5
              p.BorTit Capas
                figure
                  img(src="@/assets/curso/images/tema2/img_4.svg" alt="", style="width:400px; display:block; margin: 0 auto;")
                  br
                  figcaption Nota. Tomada de Autodesk (2019e)    
            .col-sm.mb-5.mb-sm-0
              p.mb-3 Con las capas, se puede:
              ul.lista-ul--color
                li 
                  i.fas.fa-pencil-ruler(style="color:#FBA321")
                  | Asociar objetos en un grupo independiente, según dependencia, características o especialidad.
                li
                  i.fas.fa-pencil-ruler(style="color:#FBA321")
                  | Mostrar u ocultar elementos que no se desee imprimir o ver al momento de modificar el dibujo.
                li
                  i.fas.fa-pencil-ruler(style="color:#FBA321")
                  | Cambiar el tipo de línea, su espesor, color y si la misma se puede imprimir o no.
              .cajon.color-primario.p-4.mb-4
                p <b>Importante:</b> Hay que abstenerse de crear todos los elementos en una capa. Las capas son la función de organización más importante de los dibujos de AutoCAD.
    Separador        

    #t_2_1.titulo-segundo
      .h4 2.1  Controles de capa

    p.mb-5 Para ver cómo se organiza un dibujo, utilice el comando capa para abrir el administrador de propiedades de capas. Puede introducir capa en la ventana de comandos, o bien hacer clic en la herramienta Propiedades de capa en la cinta de opciones.

    .row.justify-content-center.align-items-center
            .col-6.col-md-8.col-lg-6.mb-5
              p.BorTit Controles de capa
                figure
                img(src="@/assets/curso/images/tema2/img_5.svg" alt="", style="width:550px; display:block; margin: 0 auto;")  
                br
                figcaption Nota. Tomada de Autodesk (2019e)
    br
    p.mb-5 A continuación, en la imagen se señala lo que el administrador de propiedades de capas muestra.
    br
    .row.justify-content-center.align-items-center
            .col-6.col-md-8.col-lg-6.mb-5
              p.BorTit Administrador de propiedades
                figure
                img(src="@/assets/curso/images/tema2/img_6.svg" alt="", style="width:500px; display:block; margin: 0 auto;")  
                br
                figcaption Nota. Tomada de Autodesk (2019e)
    p.mb-3 En la imagen se puede ver que la capa actual, es decir, la capa que se tiene seleccionada en el momento, es la que tiene la paloma de color verde, “10 WALLS” hace referencia a que cualquier nueva línea o elemento que se trace quedara en dicha capa con las mismas propiedades de color, tipo de línea y espesor.

    p.mb-3 En la imagen interior se puede observar que hay dos bombillas apagadas, esto hace referencia a que las capas de puertas y eléctrico están apagadas, no borradas, sino que se apaga su visualización para no hacer el dibujo tan visualmente cargado.

    p.mb-3 Se debe observar que cada nombre de capa comienza por un número de dos dígitos. Esta convención simplifica el control del orden de la capa porque este no depende del alfabeto.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        .cajon.color-primario.p-4.mb-4
          p Consejo: En dibujos complejos, es recomendable utilizar una nomenclatura de capas más elaborada. Por ejemplo, los nombres de capa pueden comenzar por tres dígitos seguidos de un código de nomenclatura que se ajuste a varias plantas de un edificio, números de proyecto, conjuntos de datos de propiedad y reconocimiento, etc.

    p.mb-5 Recomendaciones prácticas:

    .row.justify-content-center
      .col-lg-10
        .row.align-items-center.mb-5
          .col-2
            figure
              img(src='@/assets/curso/images/tema2/ico_16.svg', style="margin: auto; max-width: 70%;")
          .col-10
            p.mb-0 La capa 0 es la capa por defecto que existe en todos los dibujos y presenta algunas propiedades esotéricas. En lugar de utilizar esta capa, es conveniente que cree sus propias capas con nombres descriptivos.
        hr
        .row.align-items-center.my-5
          .col-2
            figure
              img(src='@/assets/curso/images/tema2/ico_16.svg', style="margin: auto; max-width: 70%;")
          .col-10
            p.mb-0 Cualquier dibujo que contenga al menos un objeto de cota incluye automáticamente una capa reservada denominada defpoints.
        hr
        .row.align-items-center.my-5
          .col-2
            figure
              img(src='@/assets/curso/images/tema2/ico_16.svg', style="margin: auto; max-width: 70%;")
          .col-10
            p.mb-0 Cree una capa oculta para la geometría de construcción, la geometría de referencia y las notas de uso entre bastidores que normalmente no es necesario ver o imprimir.
        hr
        .row.align-items-center.my-5
          .col-2
            figure
              img(src='@/assets/curso/images/tema2/ico_16.svg', style="margin: auto; max-width: 70%;")
          .col-10
            p Cree una capa para las ventanas gráficas de presentación. La información acerca de las ventanas gráficas de presentación se encuentra en el último componente formativo.
        hr
        .row.align-items-center.my-5
          .col-2
            figure
              img(src='@/assets/curso/images/tema2/ico_16.svg', style="margin: auto; max-width: 70%;")
          .col-10
            p Cree una capa para todos los sombreados y los rellenos. De esta forma, puede activarlos o desactivarlos todos con una única acción.
    Separador 
    #t_2_2.titulo-segundo
      .h4 2.2  Parámetros de capa
    
    p.mb-5 A continuación, se puede ver la descripción de cada uno de los parámetros de capa, los cuales tienen diferentes íconos y funciones.

    TabsA.color-acento-contenido.mb-5
      .tarjeta.color-tarjeta.p-4(titulo="Desactivar capas")
        .row
          .col-8
            p Este botón apaga o prende las capas sin borrarlas, esto ayuda a hacer el dibujo visualmente menos pesado.
          .col-2
              figure
                img(src='@/assets/curso/images/tema2/ico_13.svg', alt="", style="width:500px; display:block; margin: 0 2rem;")  
    
      .tarjeta.color-tarjeta.p-4(titulo="Inutilizar capas")
        .row
          .col-8
            p Tiene la misma característica que desactivar capa, pero para dibujos más elaborados y complejos mejora el rendimiento del software.
          .col-2
              figure
                img(src='@/assets/curso/images/tema2/ico_14.svg', alt="", style="width:500px; display:block; margin: 0 3rem;") 

      .tarjeta.color-tarjeta.p-4(titulo="Bloquear capas")
        .row
          .col-8
            p Todo elemento que tenga activado este icono queda con una transparencia para hacer el dibujo menos cargado visualmente y a la vez impide que se edite por error alguna característica del dibujo que este en esa capa.
          .col-2
              figure
                img(src='@/assets/curso/images/tema2/ico_15.svg', alt="", style="width:500px; display:block; margin: 0 3rem;") 

      .tarjeta.color-tarjeta.p-4(titulo="Definir propiedades por defecto")
        .row
          .col-12
            p Puede definir las propiedades por defecto de cada capa, incluido el color, el tipo y el grosor de línea, y la transparencia. Los nuevos objetos que cree utilizarán estas propiedades a menos que las modifique. La modificación de propiedades de capas se explica más adelante en este tema.
          
    Separador 

    #t_2_3.titulo-segundo
      .h4 2.3  Controles del administrador de propiedades de capas y accesos rápidos
    
    .row.justify-content-center.align-items-center.mb-5
        .col-12.col-md-8.col-lg-6.col-xl-6

          p.mb-3 Para crear una nueva capa, se debe hacer clic en el botón que se muestra y escribir el nombre de la nueva capa. Para convertir una capa diferente en la actual, se debe hacer clic en la capa, y a continuación, en el botón indicado.

        .col-12.col-md-8.col-lg-6.col-xl-6
          p.BorTit Controles del administrador de propiedades 
                figure
                  img(src="@/assets/curso/images/tema2/img_7.svg" alt='Controles del administrador de propiedades')
                  br
                  figcaption Nota. Tomada de Autodesk (2019e)
    .row.justify-content-center.align-items-center.mt-5
        
        .col-12.col-md-8.col-lg-6.col-xl-6
          p.BorTit Accesos rápidos
                figure
                  img(src="@/assets/curso/images/tema2/img_8.svg" alt='Accesos rápidos')
                  br
                  figcaption Nota. Tomada de Autodesk (2019e)
        .col-12.col-md-8.col-lg-6.col-xl-6

          h4 Acceso rápido a los parámetros de capa
          p.mb-3 El administrador de propiedades de capas es una ventana de gran tamaño y no es necesario tenerla activa en todo momento. Con la previsualización, que se encuentra en el grupo capas de la ficha de inicio, se encuentran las propiedades rápidas y de fácil acceso para dibujar.   

    .row.justify-content-center.align-items-center.mb-5
        .col-12.col-md-8.col-lg-6.col-xl-6

          p.mb-3 Si se comete un error y se dibuja en la capa incorrecta, existen varias formas de cambiar los elementos correspondientes a la capa correcta. Uno de los métodos es seleccionar el dibujo correspondiente y cambiar la capa actual a la capa correcta. El segundo método es copiar las propiedades de capa de la capa destino y pegar dichas propiedades a los elementos del dibujo que están en la capa incorrecta.

        .col-12.col-md-8.col-lg-6.col-xl-6
          p.BorTit Correción en capas
                figure
                  img(src="@/assets/curso/images/tema2/img_9.svg" alt='Correción en capas')
                  br
                  figcaption Nota. Tomada de Autodesk (2019e)
    h5.mb-3 Recomendación: mantener las normas.

    p.mb-3 Es de vital importancia establecer o cumplir una norma de capa en toda la empresa. Con una norma de capa, la organización de los dibujos será más lógica, coherente, compatible y sostenible con el tiempo y entre departamentos. Las normas de capa son fundamentales para los proyectos en equipo.

    p.mb-5  Al momento de guardar un archivo en formato DXT como plantilla, puede guardar las capas y sus propiedades, para que al momento de dibujar en su organización se mantengan los parámetros de las mismas, así como al momento de compartir y editar archivos ajenos. Por ejemplo:
      
      
    .row.justify-content-center.align-items-center.mb-5
        .col-12.col-md-8.col-lg-6.col-xl-8
          p.BorTit Ejemplo de propiedades de capa 
                figure
                  img(src="@/assets/curso/images/tema2/img_10.svg" alt='Ejemplo de propiedades de capa')
                  br
                  figcaption Nota. Tomada de Autodesk (2019e)
    p.my-5 Capas: Generalidades 

    p A continuación, en el Video 20, se describe el paso a paso de la aplicación y administración de capas: 

    p.mb-5 
    .row.justify-content-center.align-items-center.mb-5
      .col-10
        figure.mb-5
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
        
    p.my-5 Con el fin de reforzar el uso y aplicación de la herramienta, se recomienda ver el Video 21, donde se explican los ajustes y partes del administrador de capas: 

    p.my-5 Administración de Capas
    .row.justify-content-center.align-items-center.mb-5
      .col-10 
        figure.mb-5
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)




</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    datosSlyder: [
      {
        titulo: '',
        texto:
          'Según Autodesk (2019e), las capas son la forma como se puede organizar un dibujo separándolo por características, tipo de línea, color o espesores. <br><br> Los dibujos se empiezan a convertir en elementos más elaborados conforme se suma contenido, las capas permiten dividir dichos elementos en grupos diferentes pero que forman parte de un dibujo principal. En la imagen se puede observar un dibujo con varias capas. <br><br> Igualmente se puede ver que en el dibujo hay puertas y cableado eléctrico que se superponen; esto es visualmente complejo y a la vez de difícil manipulación para la edición.',
        imagen: require('@/assets/curso/images/tema2/img_2.svg'),

        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: '',
        texto:
          'En la siguiente imagen se ocultan las puertas y cableado eléctrico para reducir el contenido del dibujo sin borrar o eliminar dichos elementos. <br><br> Puede obtener este nivel de control organizando los objetos del dibujo en capas asociadas a una función o un objetivo específico. Puede resultar útil imaginar que las capas son como hojas de plástico transparentes o acetatos sobre los que se dibujan mapas y cada uno tiene una característica especial, como vías, parques, edificios, etc.',
        imagen: require('@/assets/curso/images/tema2/img_3.svg'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
    ],
  }),
}
</script>

<style lang="sass" scoped></style>
