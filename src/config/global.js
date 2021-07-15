export default {
  global: {
    componenteFormativo: 'Diseños y vistas 2D con herramientas de edición',
    descripcionCurso:
      'Después de crear geometrías básicas apoyadas de las herramientas de dibujo de AutoCAD 2D, el software dispone de herramientas de modificación para realizar un flujo de trabajo más eficiente, simplificando tareas en la elaboración de dibujos.',
    imagenBannerPrincipal: require('@/assets/curso/images/header/banner-principal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/images/header/fondo-banner-principal.png'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Modificar geometrías 2D',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Administrador de capas',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: ' Controles de capa',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Parámetros de capa',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo:
              'Controles del administrador de propiedades de capas y accesos rápidos',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Bloques',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Autodesk. (2019a, abril 3). GIRA (comando). AutoCAD 2017 | Autodesk Knowledge Network.',
      link:
        'https://knowledge.autodesk.com/es/support/autocad/learn-explore/caas/CloudHelp/cloudhelp/2017/ESP/AutoCAD-Core/files/GUID-1C265537-FBAC-48D5-B448-B72E777071E5-htm.html',
    },
    {
      referencia:
        'Autodesk. (2019b, abril 4). ESCALA (comando). AutoCAD 2019 | Autodesk Knowledge Network.',
      link:
        'https://knowledge.autodesk.com/es/support/autocad/learn-explore/caas/CloudHelp/cloudhelp/2019/ESP/AutoCAD-Core/files/GUID-D4E17E51-5000-4AB6-8D6A-6D2AB4863C75-htm.html',
    },
    {
      referencia:
        'Autodesk. (2019c, abril 4). MATRIZ (comando). AutoCAD 2019 | Autodesk Knowledge Network. ',
      link:
        'https://knowledge.autodesk.com/es/support/autocad/learn-explore/caas/CloudHelp/cloudhelp/2019/ESP/AutoCAD-Core/files/GUID-8336B4CD-5375-4290-BD08-7D9E022741F6-htm.html',
    },
    {
      referencia:
        'Autodesk. (2019d, abril 4). SIMETRIA (comando). AutoCAD 2019 | Autodesk Knowledge Network. ',
      link:
        'https://knowledge.autodesk.com/es/support/autocad/learn-explore/caas/CloudHelp/cloudhelp/2019/ESP/AutoCAD-Core/files/GUID-595277C8-9B87-4CFB-A3AF-769537A22F3D-htm.html',
    },
    {
      referencia:
        'Autodesk. (2019e, diciembre 6). Capas. AutoCAD 2020 | Autodesk Knowledge Network. ',
      link:
        'https://knowledge.autodesk.com/es/support/autocad/learn-explore/caas/CloudHelp/cloudhelp/2020/ESP/AutoCAD-Core/files/GUID-FA005756-B8F5-4A78-988F-31335A68D77C-htm.html',
    },
    {
      referencia:
        'Autodesk. (2019f, diciembre 6). DESPLAZA (comando). AutoCAD 2020 | Autodesk Knowledge Network. ',
      link:
        'https://knowledge.autodesk.com/es/support/autocad/learn-explore/caas/CloudHelp/cloudhelp/2020/ESP/AutoCAD-Core/files/GUID-47CE7325-84C0-4414-80A3-29DC98392709-htm.html',
    },
    {
      referencia:
        'Autodesk. (2020a, diciembre 7). Acerca de los bloques. AutoCAD 2021 | Autodesk Knowledge Network.',
      link:
        'https://knowledge.autodesk.com/es/support/autocad/learn-explore/caas/CloudHelp/cloudhelp/2021/ESP/AutoCAD-Core/files/GUID-7410E7FB-3E0D-4411-B8F6-DBD59C71E87D-htm.html',
    },
    {
      referencia:
        'Autodesk. (2020b, diciembre 7). ALARGA (comando). AutoCAD 2021 | Autodesk Knowledge Network. ',
      link:
        'https://knowledge.autodesk.com/es/support/autocad/learn-explore/caas/CloudHelp/cloudhelp/2021/ESP/AutoCAD-Core/files/GUID-89DD7B0F-F4F1-410D-9A3A-5847CA5F8744-htm.html?st=alarga,',
    },
    {
      referencia:
        'Autodesk. (2020c, diciembre 7). CHAFLAN (comando). AutoCAD 2021 | Autodesk Knowledge Network.',
      link:
        'https://knowledge.autodesk.com/es/support/autocad/learn-explore/caas/CloudHelp/cloudhelp/2021/ESP/AutoCAD-Core/files/GUID-B1DCF991-90A7-4DB0-96FC-BDA3FB76337C-htm.html?st=CHAFLAN',
    },
    {
      referencia:
        'Autodesk. (2020d, diciembre 7). COPIA (comando). AutoCAD 2021 | Autodesk Knowledge Network.',
      link:
        'https://knowledge.autodesk.com/es/support/autocad/learn-explore/caas/CloudHelp/cloudhelp/2021/ESP/AutoCAD-Core/files/GUID-1CF9287F-06E8-4D03-8377-2E130862FE02-htm.html?st=copiar',
    },
    {
      referencia:
        'Autodesk. (2020e, diciembre 7). DESFASE (comando). AutoCAD 2021 | Autodesk Knowledge Network.',
      link:
        'https://knowledge.autodesk.com/es/support/autocad/learn-explore/caas/CloudHelp/cloudhelp/2021/ESP/AutoCAD-Core/files/GUID-C0E4246D-C420-42BD-A6FC-8B1852EFD005-htm.html?st=desfase',
    },
    {
      referencia:
        'Autodesk. (2020f, diciembre 7). EMPALME (comando). AutoCAD 2021 | Autodesk Knowledge Network.',
      link:
        'https://knowledge.autodesk.com/es/support/autocad/learn-explore/caas/CloudHelp/cloudhelp/2021/ESP/AutoCAD-Core/files/GUID-64F8B700-23B3-4BD6-8C03-66121AA13E8F-htm.html?st=EMPALME',
    },
    {
      referencia:
        'Autodesk. (2020g, diciembre 7). ESTIRA (comando). AutoCAD 2021 | Autodesk Knowledge Network.',
      link:
        'https://knowledge.autodesk.com/es/support/autocad/learn-explore/caas/CloudHelp/cloudhelp/2021/ESP/AutoCAD-Core/files/GUID-F000A502-D39E-4D31-A8E2-4A626473FB72-htm.html?st=estirar',
    },
    {
      referencia:
        'Autodesk. (2020h, diciembre 7). RECORTA (comando). AutoCAD 2021 | Autodesk Knowledge Network. ',
      link:
        'https://knowledge.autodesk.com/es/support/autocad/learn-explore/caas/CloudHelp/cloudhelp/2021/ESP/AutoCAD-Core/files/GUID-B1A185EF-07C6-4C53-A76F-05ADE11F5C32-htm.html?st=recortar',
    },
  ],
  glosario: [
    {
      termino: 'Chaflán',
      significado:
        'Es una operación mediante la cual se hace un chaflán, esto es, un corte o rebaje en una arista. Se aplica en un ángulo de desbaste a un vértice agudo donde se encuentran dos líneas.',
    },
    {
      termino: 'Empalme',
      significado:
        'Al igual que el chaflán, es un rebaje de una arista aguda de un dibujo 2D por medio de un radio o circunferencia.',
    },
    {
      termino: 'SCP',
      significado:
        'Es el origen del plano cartesiano que se encuentra dentro del espacio de modelado. Para el caso de dibujo 2D, es el origen de las coordenadas “Y” y “X”.',
    },
    {
      termino: 'Desfase',
      significado:
        'Es la creación de líneas o circunferencias paralelas o concéntricas al objeto o dibujo base.',
    },
    {
      termino: 'Capa',
      significado:
        'En AutoCAD, hace referencia al elemento que organiza y separa por característica, color y tipo un grupo de elementos frente a otros. Esto, en dibujo, es similar al dibujo de mapas en acetatos, donde cada acetato tiene un color diferente con propiedades diferentes, siendo todos elementos de un mismo mapa.',
    },
    {
      termino: 'Bloque',
      significado:
        'Es la agrupación de líneas, circunferencias o elementos 2D y 3D dentro de un único elemento que sea de más fácil manipulación.',
    },
  ],
  complementario: [
    {
      texto:
        'Autodesk. (2019b, abril 4). Acerca del reflejo de objetos. AutoCAD 2019 | Autodesk Knowledge Network.',
      tipo: 'Página web',
      link:
        'https://knowledge.autodesk.com/es/support/autocad/learn-explore/caas/CloudHelp/cloudhelp/2019/ESP/AutoCAD-Core/files/GUID-54B774E9-EDB1-468D-8F5C-4A1B010F173A-htm.html',
    },
    {
      texto:
        'Autodesk. (2020c, diciembre 7). Acerca del recorte y alargamiento de los objetos. AutoCAD 2021 | Autodesk Knowledge Network',
      tipo: 'Página web',
      descarga:
        'https://knowledge.autodesk.com/es/support/autocad/learn-explore/caas/CloudHelp/cloudhelp/2021/ESP/AutoCAD-Core/files/GUID-725D3A7A-5E52-47F0-BA7A-7D15F9EF6D7F-htm.html',
    },
    {
      texto:
        'Autodesk. (2020a, diciembre 7). Acerca de los empalmes y los redondeos. AutoCAD 2021 | Autodesk Knowledge Network.',
      tipo: 'Página web',
      link:
        'https://knowledge.autodesk.com/es/support/autocad/learn-explore/caas/CloudHelp/cloudhelp/2021/ESP/AutoCAD-Core/files/GUID-357499AE-7EF5-4228-8DE9-7FA6A8F11C27-htm.html',
    },
    {
      texto:
        'Autodesk. (2019a, abril 4). Acerca de las matrices. AutoCAD 2019 | Autodesk Knowledge Network.',
      tipo: 'Página web',
      descarga:
        'https://knowledge.autodesk.com/es/support/autocad/learn-explore/caas/CloudHelp/cloudhelp/2019/ESP/AutoCAD-Core/files/GUID-07CB282A-2C71-46FE-937F-BC3DFB2C068B-htm.html',
    },
    {
      texto:
        'Autodesk. (2020b, diciembre 7). Acerca del desfase de objetos. AutoCAD 2021 | Autodesk Knowledge Network',
      tipo: 'Página web',
      link:
        'https://knowledge.autodesk.com/es/support/autocad/learn-explore/caas/CloudHelp/cloudhelp/2021/ESP/AutoCAD-Core/files/GUID-704C1ADE-A4AE-4A85-8822-454ACAC1345A-htm.html',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Saúl Santamaría Gutiérrez',
        cargo: 'Experto temático',
        centro:
          'Centro de Mercados, Logística y Tecnologías de la Información – Regional Distrito Capital.',
      },
      {
        nombre: 'Oscar Absalón Guevara',
        cargo: 'Diseñador instruccional',
        centro: 'Centro de Gestión Industrial – Regional Distrito Capital',
      },
      {
        nombre: 'Zvi Daniel Grosman Landáez',
        cargo: 'Diseñador instruccional',
        centro: 'Centro Agropecuario La Granja Espinal - Tolima',
      },
      {
        nombre: 'Uriel Darío González Montoya',
        cargo: 'Acompañamiento pedagógico',
        centro: 'Regional Tolima – Centro Agropecuario La Granja',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: ['Blanca Flor Tinoco Torres'],
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Gustavo Adolfo Marún Suárez',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Zuleidy María Ruiz Torres',
        cargo: 'Producción audiovisual',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
