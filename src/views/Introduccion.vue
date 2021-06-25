<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .row.justify-content-center.align-items-center.mt-5
      .col-12.col-lg-6.mb-5
        p.mb-3 Las herramientas que se encuentran dentro de la ficha de inicio de dibujo y anotación separadas por el grupo modificación son herramientas que facilitan el actuar dentro del software, creando un flujo de trabajo más ágil, haciendo no solo distinción con el dibujo a mano alzada por el uso de herramientas ofimáticas, sino que, a la vez, permiten crear dibujos de simples copias, matrices o simetrías. 
 
        p Con estas herramientas se busca manipular más rápido y con una mayor calidad detalles de planos arquitectónicos o detalles de planos de ingeniería. Con la ayuda de estas herramientas y poniendo en práctica las habilidades adquiridas en la primera competencia del curso sobre dibujo 2D, se espera crear dibujos con un nivel de detalle más completo a la vez que más profesional.

      .col-12.col-lg-6
        img(src="@/assets/curso/images/tema1/intro.svg" alt="", style="width:400px; display:block; margin:0 auto;")

        

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass" scoped>
.introduccion
</style>
