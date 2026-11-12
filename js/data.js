/* =========================================================================
   mitiendad STORE — DATOS DEL CATÁLOGO
   =========================================================================
   Este es el ÚNICO archivo que necesitas editar para:
   - Crear o renombrar categorías (colecciones)
   - Agregar, editar o eliminar productos
   - Configurar ciudades y valores de envío
   - Editar reseñas de clientes y logos de métodos de pago

   No necesitas tocar el HTML, CSS ni el resto del JS.
   Lee el README.md para instrucciones paso a paso con ejemplos.
   ========================================================================= */

/* -------------------------------------------------------------------------
   1) CATEGORÍAS / COLECCIONES
------------------------------------------------------------------------- */
const CATEGORIES = [
  { slug: "blusas",  name: "Blusas",  image: "images/Banner_Blusas.png" },
  { slug: "flores",  name: "Flores",    image: "images/Banner_Flores.png" },
  { slug: "camisetas", name: "Camisetas Personalizadas",   image: "images/Banner_Camisetas.png" }
  
];

/* -------------------------------------------------------------------------
   2) PRODUCTOS
   -------------------------------------------------------------------------
   - id: identificador único (no repetir, ej: "p11")
   - name: nombre del producto
   - price: precio en pesos, solo número
   - category: debe coincidir EXACTO con un "slug" de CATEGORIES
   - images: LISTA de fotos del producto (mínimo 1). La primera es la
     imagen principal que se ve en las tarjetas y galerías.
   - description: texto de la página del producto
   - bestseller: true/false → aparece en "Los más vendidos"
------------------------------------------------------------------------- */
const PRODUCTS = [


  /* -------------------------------------------------------------------------
   
  Categoria: Escencia Femenina
   
  ------------------------------------------------------------------------- */
  {
    id: "blusa-siena",
    name: "Blusa Siena",
    price: 55000,
    category: "blusas",
    images: [
      "images/Blusas/REF_1875.jpeg"
    ],
    description: "REF_1875\n\nBlusa femenina con un diseño moderno y versátil. Combina estilo, comodidad y elegancia en una prenda que no puede faltar en tu armario.\n\n<strong>Colores disponibles:</strong> Beige\n\n<strong>Tallas disponibles:</strong> S - M - L - XL\n\n🚚 Envío: 2 a 4 días hábiles.",
    bestseller: true,
    seo: true
  },


  {
    id: "blusa-olivia",
    name: "Blusa Olivia",
    price: 65000,
    category: "blusas",
    images: [
      "images/Blusas/REF_2092.jpeg"
    ],
    description: "REF_2092\n\nBlusa femenina con un diseño moderno y versátil. Combina estilo, comodidad y elegancia en una prenda que no puede faltar en tu armario.\n\n<strong>Colores disponibles:</strong> Verde, Mocca, Avena, Beige, Azul\n\n<strong>Tallas disponibles:</strong> M - L - XL\n\n🚚 Envío: 2 a 4 días hábiles.",
    bestseller: true,
    seo: true
  },

  {
    id: "blusa-florencia",
    name: "Blusa Florencia",
    price: 69000,
    category: "blusas",
    images: [
      "images/Blusas/REF_2017.jpeg"
    ],
    description: "REF_2017\n\nBlusa femenina con un diseño moderno y versátil. Combina estilo, comodidad y elegancia en una prenda que no puede faltar en tu armario.\n\n<strong>Colores disponibles:</strong> Café Rojizo\n\n<strong>Tallas disponibles:</strong> S - M - L - XL\n\n🚚 Envío: 2 a 4 días hábiles.",
    bestseller: true,
    seo: true
  },

  {
    id: "blusa-verona",
    name: "Blusa Verona",
    price: 69000,
    category: "blusas",
    images: [
      "images/Blusas/REF_2108.jpeg"
    ],
    description: "REF_2108\n\nBlusa femenina con un diseño moderno y versátil. Combina estilo, comodidad y elegancia en una prenda que no puede faltar en tu armario.\n\n<strong>Colores disponibles:</strong> Verde, Mocca azul, Avena, Beige\n\n<strong>Tallas disponibles:</strong> M - L - XL\n\n🚚 Envío: 2 a 4 días hábiles.",
    bestseller: true,
    seo: true
  },

  {
    id: "blusa-julieta",
    name: "Blusa Julieta",
    price: 65000,
    category: "blusas",
    images: [
      "images/Blusas/REF_2225.jpeg"
    ],
    description: "REF_2225\n\nBlusa femenina con un diseño moderno y versátil. Combina estilo, comodidad y elegancia en una prenda que no puede faltar en tu armario.\n\n<strong>Colores disponibles:</strong> Amarillo, Azul, Rosado, Verde\n\n<strong>Tallas disponibles:</strong> M - L - XL\n\n🚚 Envío: 2 a 4 días hábiles.",
    bestseller: true,
    seo: true
  },

  {
    id: "blusa-renata",
    name: "Blusa Renata",
    price: 69000,
    category: "blusas",
    images: [
      "images/Blusas/REF_2229.jpeg"
    ],
    description: "REF_2229\n\nBlusa femenina con un diseño moderno y versátil. Combina estilo, comodidad y elegancia en una prenda que no puede faltar en tu armario.\n\n<strong>Colores disponibles:</strong> Amarillo, Azul Claro, Rosado, Verde\n\n<strong>Tallas disponibles:</strong> M - L - XL\n\n🚚 Envío: 2 a 4 días hábiles.",
    bestseller: true,
    seo: true
  },

  {
    id: "blusa-celeste",
    name: "Blusa Celeste",
    price: 69000,
    category: "blusas",
    images: [
      "images/Blusas/REF_2232.jpeg"
    ],
    description: "REF_2232\n\nBlusa femenina con un diseño moderno y versátil. Combina estilo, comodidad y elegancia en una prenda que no puede faltar en tu armario.\n\n<strong>Colores disponibles:</strong> Verde, Azul, Amarillo, Rosado\n\n<strong>Tallas disponibles:</strong> M - L - XL\n\n🚚 Envío: 2 a 4 días hábiles.",
    bestseller: true,
    seo: true
  },

  {
    id: "blusa-gardenia",
    name: "Blusa Gardenia",
    price: 69000,
    category: "blusas",
    images: [
      "images/Blusas/REF_2272.jpeg"
    ],
    description: "REF_2272\n\nBlusa femenina con un diseño moderno y versátil. Combina estilo, comodidad y elegancia en una prenda que no puede faltar en tu armario.\n\n<strong>Colores disponibles:</strong> Verde, Palo Rosa, Azul\n\n<strong>Tallas disponibles:</strong> M - L - XL\n\n🚚 Envío: 2 a 4 días hábiles.",
    bestseller: false,
    seo: true
  },

  {
    id: "blusa-coralina",
    name: "Blusa Coralina",
    price: 69000,
    category: "blusas",
    images: [
      "images/Blusas/REF_2275.jpeg"
    ],
    description: "REF_2275\n\nBlusa femenina con un diseño moderno y versátil. Combina estilo, comodidad y elegancia en una prenda que no puede faltar en tu armario.\n\n<strong>Colores disponibles:</strong> Palo Rosa, Azul, Verde\n\n<strong>Tallas disponibles:</strong> M - L - XL\n\n🚚 Envío: 2 a 4 días hábiles.",
    bestseller: false,
    seo: true
  },

  {
    id: "blusa-esmeralda",
    name: "Blusa Esmeralda",
    price: 65000,
    category: "blusas",
    images: [
      "images/Blusas/REF_1722_AGO_STICKER.png"
    ],
    description: "REF_1722 AGOTADA\n\nBlusa femenina con un diseño moderno y versátil. Combina estilo, comodidad y elegancia en una prenda que no puede faltar en tu armario.\n\n<strong>Colores disponibles:</strong> Verde Light\n\n<strong>Tallas disponibles:</strong> M - L - XL\n\n🚚 Envío: 2 a 4 días hábiles.",
    bestseller: false,
    seo: true
  },

  {
    id: "blusa-siena-gloss",
    name: "Blusa Siena Gloss",
    price: 59000,
    category: "blusas",
    images: [
      "images/Blusas/AGO_9_STICKER.png"
    ],
    description: "AGO_9 AGOTADA\n\nBlusa femenina con un diseño moderno y versátil. Combina estilo, comodidad y elegancia en una prenda que no puede faltar en tu armario.\n\n<strong>Colores disponibles:</strong> Beige Gloss\n\n<strong>Tallas disponibles:</strong> M - L - XL\n\n🚚 Envío: 2 a 4 días hábiles.",
    bestseller: false,
    seo: true
  },

  {
    id: "falda-primavera",
    name: "Falda Primavera",
    price: 95000,
    category: "blusas",
    images: [
      "images/Blusas/1725_1719_AGO.jpeg"
    ],
    description: "REF_1719_1725 AGOTADA\n\nFalda femenina con un diseño moderno y versátil. Combina estilo, comodidad y elegancia en una prenda que no puede faltar en tu armario.\n\n<strong>Tallas disponibles:</strong> Única\n\n🚚 Envío: 2 a 4 días hábiles.",
    bestseller: false,
    seo: true
  },

  {
    id: "blusa-serena",
    name: "Blusa Serena",
    price: 69000,
    category: "blusas",
    images: [
      "images/Blusas/SIN_REF_3.jpeg"
    ],
    description: "REF 1980\n\nBlusa femenina con un diseño moderno y versátil. Combina estilo, comodidad y elegancia en una prenda que no puede faltar en tu armario.\n\n<strong>Colores disponibles:</strong> Camel, Negro\n\n<strong>Tallas disponibles:</strong> S - M\n\n🚚 Envío: 2 a 4 días hábiles.",
    bestseller: false,
    seo: true
  },

  {
    id: "blusa-lavanda",
    name: "Blusa Lavanda",
    price: 45000,
    category: "blusas",
    images: [
      "images/Blusas/SIN_REF_4.jpeg"
    ],
    description: "REF 1645\n\nBlusa femenina con un diseño moderno y versátil. Combina estilo, comodidad y elegancia en una prenda que no puede faltar en tu armario.\n\n<strong>Colores disponibles:</strong> Morado, Fucsia, Camel\n\n<strong>Tallas disponibles:</strong> S - M - L\n\n🚚 Envío: 2 a 4 días hábiles.",
    bestseller: false,
    seo: true
  },


  {
    id: "blusa-basica-fanny",
    name: "Blusa Básica Fanny",
    price: 45000,
    category: "blusas",
    images: [
      "images/Blusas/SIN_REF_1_OFF.png"
    ],
    description: "REF 1667 \n\nBlusa femenina con un diseño moderno y versátil. Combina estilo, comodidad y elegancia en una prenda que no puede faltar en tu armario.\n\n<strong>Colores disponibles:</strong> Blanco, Negro, Amarillo \n\n<strong>Tallas disponibles:</strong> S - M - L \n\n🚚 Envío: 2 a 4 días hábiles.",
    bestseller: false,
    seo: true
  },


  {
    id: "blusa-amelia",
    name: "Blusa Amelia",
    price: 69000,
    category: "blusas",
    images: [
      "images/Blusas/REF_2125.jpeg"
    ],
    description: "REF_2125\n\nBlusa femenina con un diseño moderno y versátil. Combina estilo, comodidad y elegancia en una prenda que no puede faltar en tu armario.\n\n<strong>Colores disponibles:</strong> Azul, Rosado, Verde, Amarillo, Beige\n\n<strong>Tallas disponibles:</strong> M - L - XL\n\n🚚 Envío: 2 a 4 días hábiles.",
    bestseller: false,
    seo: true
  },

  {
    id: "blusa-toscana",
    name: "Blusa Toscana",
    price: 69000,
    category: "blusas",
    images: [
      "images/Blusas/REF_2230.jpeg"
    ],
    description: "REF_2230\n\nBlusa femenina con un diseño moderno y versátil. Combina estilo, comodidad y elegancia en una prenda que no puede faltar en tu armario.\n\n<strong>Colores disponibles:</strong> Verde, Amarillo, Azul, Rosado\n\n<strong>Tallas disponibles:</strong> M - L - XL\n\n🚚 Envío: 2 a 4 días hábiles.",
    bestseller: false,
    seo: true
  },

  {
    id: "vestido-esmeralda",
    name: "Vestido Esmeralda",
    price: 145000,
    category: "blusas",
    images: [
      "images/Blusas/AGO_2_STICKER.png"
    ],
    description: "AGO_2 AGOTADA\n\nBlusa femenina con un diseño moderno y versátil. Combina estilo, comodidad y elegancia en una prenda que no puede faltar en tu armario.\n\n<strong>Colores disponibles:</strong> \n\n<strong>Tallas disponibles:</strong> \n\n🚚 Envío: 2 a 4 días hábiles.",
    bestseller: false,
    seo: true
  },

  {
    id: "blusa-arcoiris",
    name: "Blusa Arcoiris",
    price: 45000,
    category: "blusas",
    images: [
      "images/Blusas/SIN_REF_2_OFF.png"
    ],
    description: "REF 1574\n\nBlusa femenina con un diseño moderno y versátil. Combina estilo, comodidad y elegancia en una prenda que no puede faltar en tu armario.\n\n<strong>Colores disponibles:</strong> Arcoiris\n\n<strong>Tallas disponibles:</strong> S - M - L\n\n🚚 Envío: 2 a 4 días hábiles.",
    bestseller: false,
    seo: true
  },

  {
    id: "falda-cielo",
    name: "Falda Cielo",
    price: 95000,
    category: "blusas",
    images: [
      "images/Blusas/AGO_3_STICKER.png"
    ],
    description: "AGO_3 AGOTADA\n\nFalda con un diseño moderno y versátil. Combina estilo, comodidad y elegancia en una prenda que no puede faltar en tu armario.\n\n<strong>Colores disponibles:</strong> \n\n<strong>Tallas disponibles:</strong> \n\n🚚 Envío: 2 a 4 días hábiles.",
    bestseller: false,
    seo: true
  },

  {
    id: "vestido-genova",
    name: "Vestido Genova",
    price: 125000,
    category: "blusas",
    images: [
      "images/Blusas/AGO_5_STICKER.png"
    ],
    description: "AGO_5 AGOTADA\n\nVestido con un diseño moderno y versátil. Combina estilo, comodidad y elegancia en una prenda que no puede faltar en tu armario.\n\n<strong>Colores disponibles:</strong> \n\n<strong>Tallas disponibles:</strong> \n\n🚚 Envío: 2 a 4 días hábiles.",
    bestseller: false,
    seo: true
  },

  {
    id: "blusa-valentina-popelina",
    name: "Blusa Valentina",
    price: 45000,
    category: "blusas",
    images: [
      "images/Blusas/REF_1637_OFF.png"
    ],
    description: "REF_1637 \n\nBlusa femenina con un diseño moderno y versátil. Combina estilo, comodidad y elegancia en una prenda que no puede faltar en tu armario.\n\n<strong>Colores disponibles:</strong> Fucsia, Negro, Blanco \n\n<strong>Tallas disponibles:</strong> S - M - L \n\n🚚 Envío: 2 a 4 días hábiles.",
    bestseller: false,
    seo: true
  },


  {
    id: "blusa-basica-mia",
    name: "Blusa Básica Mia",
    price: 45000,
    category: "blusas",
    images: [
      "images/Blusas/REF_1668_OFF.png"
    ],
    description: "REF_1668 \n\nBlusa femenina con un diseño moderno y versátil. Combina estilo, comodidad y elegancia en una prenda que no puede faltar en tu armario.\n\n<strong>Colores disponibles:</strong> Amarillo \n\n<strong>Tallas disponibles:</strong> S - M - L - XL \n\n🚚 Envío: 2 a 4 días hábiles.",
    bestseller: false,
    seo: true
  },

  {
    id: "falda-pacific",
    name: "Falda Pacific",
    price: 95000,
    category: "blusas",
    images: [
      "images/Blusas/REF_1759.jpeg"
    ],
    description: "REF_1759 FALDA \n\nFalda femenina con un diseño moderno y versátil. Combina estilo, comodidad y elegancia en una prenda que no puede faltar en tu armario.\n\n<strong>Colores disponibles:</strong> Azul Floreada \n\n<strong>Tallas disponibles:</strong> Talla Única \n\n🚚 Envío: 2 a 4 días hábiles.",
    bestseller: false,
    seo: true
  },

  {
    id: "blusa-paris",
    name: "Blusa París",
    price: 69000,
    category: "blusas",
    images: [
      "images/Blusas/REF_2201.jpeg"
    ],
    description: "REF_2201 \n\nBlusa femenina con un diseño moderno y versátil. Combina estilo, comodidad y elegancia en una prenda que no puede faltar en tu armario.\n\n<strong>Colores disponibles:</strong> Negro\n\n<strong>Tallas disponibles:</strong> S - M - L - XL \n\n🚚 Envío: 2 a 4 días hábiles.",
    bestseller: false,
    seo: true
  },

  {
    id: "blusa-capri",
    name: "Blusa Capri",
    price: 69000,
    category: "blusas",
    images: [
      "images/Blusas/REF_2261.jpeg"
    ],
    description: "REF_2261 \n\nBlusa femenina con un diseño moderno y versátil. Combina estilo, comodidad y elegancia en una prenda que no puede faltar en tu armario.\n\n<strong>Colores disponibles:</strong> Azul, Palo Rosa, Verde\n\n<strong>Tallas disponibles:</strong> M - L - XL \n\n🚚 Envío: 2 a 4 días hábiles.",
    bestseller: false,
    seo: true
  },

  {
    id: "blusa-roma",
    name: "Blusa Roma",
    price: 69000,
    category: "blusas",
    images: [
      "images/Blusas/REF_2262.jpeg"
    ],
    description: "REF_2262 \n\nBlusa femenina con un diseño moderno y versátil. Combina estilo, comodidad y elegancia en una prenda que no puede faltar en tu armario.\n\n<strong>Colores disponibles:</strong> Azul, Rosado, Negro\n\n<strong>Tallas disponibles:</strong> M - L - XL \n\n🚚 Envío: 2 a 4 días hábiles.",
    bestseller: false,
    seo: true
  },

  {
    id: "blusa-midnight",
    name: "Blusa Midnight",
    price: 45000,
    category: "blusas",
    images: [
      "images/Blusas/AGO_1_STICKER.png"
    ],
    description: "AGO_1 AGOTADA\n\nBlusa femenina con un diseño moderno y versátil. Combina estilo, comodidad y elegancia en una prenda que no puede faltar en tu armario.\n\n<strong>Colores disponibles:</strong> \n\n<strong>Tallas disponibles:</strong> \n\n🚚 Envío: 2 a 4 días hábiles.",
    bestseller: false,
    seo: true
  },

  {
    id: "blusa-safari",
    name: "Blusa Safari",
    price: 69000,
    category: "blusas",
    images: [
      "images/Blusas/AGO_4_STICKER.png"
    ],
    description: "AGO_4 AGOTADA\n\nBlusa femenina con un diseño moderno y versátil. Combina estilo, comodidad y elegancia en una prenda que no puede faltar en tu armario.\n\n<strong>Colores disponibles:</strong> \n\n<strong>Tallas disponibles:</strong> \n\n🚚 Envío: 2 a 4 días hábiles.",
    bestseller: false,
    seo: true
  },

  {
    id: "blusa-marine",
    name: "Blusa Marine",
    price: 69000,
    category: "blusas",
    images: [
      "images/Blusas/AGO_6_STICKER.png"
    ],
    description: "AGO_6 AGOTADA\n\nBlusa femenina con un diseño moderno y versátil. Combina estilo, comodidad y elegancia en una prenda que no puede faltar en tu armario.\n\n<strong>Colores disponibles:</strong> \n\n<strong>Tallas disponibles:</strong> \n\n🚚 Envío: 2 a 4 días hábiles.",
    bestseller: false,
    seo: true
  },

  {
    id: "blusa-oxford",
    name: "Blusa Oxford",
    price: 69000,
    category: "blusas",
    images: [
      "images/Blusas/AGO_7_STICKER.png"
    ],
    description: "AGO_7 AGOTADA\n\nBlusa femenina con un diseño moderno y versátil. Combina estilo, comodidad y elegancia en una prenda que no puede faltar en tu armario.\n\n<strong>Colores disponibles:</strong> \n\n<strong>Tallas disponibles:</strong> \n\n🚚 Envío: 2 a 4 días hábiles.",
    bestseller: false,
    seo: true
  },


  {
    id: "blusa-aurora",
    name: "Blusa Aurora",
    price: 69000,
    category: "blusas",
    images: [
      "images/Blusas/AGO_8_STICKER.png"
    ],
    description: "AGO_8 AGOTADA\n\nBlusa femenina con un diseño moderno y versátil. Combina estilo, comodidad y elegancia en una prenda que no puede faltar en tu armario.\n\n<strong>Colores disponibles:</strong> \n\n<strong>Tallas disponibles:</strong> \n\n🚚 Envío: 2 a 4 días hábiles.",
    bestseller: false,
    seo: true
  },

  



  /* -------------------------------------------------------------------------
   
  Categoria: Flores

  ------------------------------------------------------------------------- */





























  /* -------------------------------------------------------------------------
   
  Categoria: Esencia Natural
   
  ------------------------------------------------------------------------- */
  

  








];

/* -------------------------------------------------------------------------
   3) CIUDADES Y VALORES DE ENVÍO
   -------------------------------------------------------------------------
   Esta es tu "base de datos" de ciudades. Agrega, edita o elimina las
   ciudades a las que despachas, con el valor del envío según la forma de
   pago del envío (anticipado o contraentrega). El carrito usa esta lista
   para calcular el costo automáticamente según lo que elija el cliente.
   - name: nombre de la ciudad (se muestra en el selector)
   - shippingPrepaid: costo de envío si el cliente paga el envío anticipado
   - shippingCOD: costo de envío si el cliente paga el envío contraentrega
------------------------------------------------------------------------- */
const CITIES = [
  { name: "Cali",         shippingPrepaid: 10000, shippingCOD: 12000 },
  { name: "Bogota",       shippingPrepaid: 18500, shippingCOD: 20750 },
  { name: "Medellin",     shippingPrepaid: 12500, shippingCOD: 14750 },
  { name: "Pereira",      shippingPrepaid: 12500, shippingCOD: 14750 },
  { name: "Popayan",      shippingPrepaid: 12500, shippingCOD: 14750 },
  { name: "Barranquilla",       shippingPrepaid: 18500, shippingCOD: 20750 },
  { name: "Cartagena",          shippingPrepaid: 18500, shippingCOD: 20750 },
  { name: "Otra (Poner en observaciones)",         shippingPrepaid: 20900, shippingCOD: 23150 }
];

/* -------------------------------------------------------------------------
   4) MÉTODOS DE PAGO (sección "Pagos seguros" en el Inicio)
   -------------------------------------------------------------------------
   Reemplaza el "logo" por la ruta de tu imagen real cuando la tengas
   (guárdala en la carpeta images/, por ejemplo images/logo-nequi.png).
------------------------------------------------------------------------- */
const PAYMENT_METHODS = [
  { name: "Nequi",        logo: "images/LogosPagos/Nequi_Logo_2.png" },
  { name: "Bancolombia",  logo: "images/LogosPagos/Bancolombia_Logo.png" },
  { name: "Daviplata",    logo: "images/LogosPagos/Daviplata_Logo.png" },
  { name: "Bre-B",        logo: "images/LogosPagos/Bre-B_Logo.png" },
  { name: "PayPal",       logo: "images/LogosPagos/PayPal_Logo_2.png" }
];

/* -------------------------------------------------------------------------
   5) RESEÑAS DE CLIENTES (sección "Lo que dicen nuestros clientes")
   -------------------------------------------------------------------------
   - stars: número del 1 al 5
   - photo: foto del cliente (opcional, puedes dejar el placeholder)
------------------------------------------------------------------------- */
const REVIEWS = [
  {
    name: "Manuela J.",
    photo: "images/reviewer-1.svg",
    stars: 5,
    comment: "La blusa olivia es hermosa, la calidad superó lo que esperaba y llegó en buen tiempo. ¡Totalmente recomendados!"
  },
  {
    name: "Carolina V.",
    photo: "images/reviewer-2.svg",
    stars: 5,
    comment: "Pedí una blusa para mi mamá y le encantó. La atención fue muy buena"
  },
  {
    name: "Vanessa A.",
    photo: "images/reviewer-3.svg",
    stars: 5,
    comment: "Muy buen producto y llegó a tiempo a mi ciudad. Lo volvería a pedir sin duda."
  }
];

/* -------------------------------------------------------------------------
   6) DATOS GENERALES DEL NEGOCIO
------------------------------------------------------------------------- */
const STORE = {
  name: "Mi Tienda D",
  logo: "images/MiTiendaD_Logo.png",
  shippingText: "Blusas, Ropa Femenina, Flores y mucho más ",
  whatsappNumber: "573153753681", // sin "+" y sin espacios
  instagram: "mi_tienda_d",
  tiktok: "mi_tienda_d",
  bannerImage: "images/Banner_Fati_6.png",
  bannerTitle: "Estilo que representa la mujer que eres",
  bannerSubtitle: "Looks que se adaptan a tu esencia",
  codTitle: "Pago Contraentrega",
  codText: "Manejamos entregas en Cali y envíos a nivel nacional con la opción de pago contraentrega: Pagas el valor del producto y domicilio cuando recibes tu pedido en la puerta de tu casa"
};
