import type { ShapeT } from "../types";

export const shapesB: Record<string, ShapeT> = {
  heart: {
    name: "Corazón",
    title: "Cara de corazón: rasgos, cortes y gafas",
    description:
      "La cara en forma de corazón tiene frente ancha, pómulos altos y barbilla estrecha. Aprende a reconocerla y elige cortes, gafas y maquillaje.",
    definition:
      "Una cara en forma de corazón es más ancha en la frente y se estrecha hacia una barbilla fina, a menudo puntiaguda. Los pómulos son altos, la mandíbula es estrecha y algunas caras de corazón tienen un pico de viuda en el nacimiento del pelo.",
    measurements: [
      { feature: "Largo vs. ancho de la cara", value: "Entre 1,3 y 1,5 veces más larga que ancha" },
      { feature: "Punto más ancho", value: "Frente y/o pómulos" },
      { feature: "Frente", value: "Ancha" },
      { feature: "Mandíbula", value: "Estrecha, se afina marcadamente" },
      { feature: "Barbilla", value: "Estrecha, a menudo puntiaguda" },
    ],
    traits: [
      "Frente ancha",
      "Pómulos altos",
      "Mandíbula estrecha",
      "Barbilla puntiaguda",
      "A veces, pico de viuda",
    ],
    howToTell: [
      "Tu frente es la parte más ancha de tu cara.",
      "Tu cara se estrecha notablemente desde los pómulos hasta la barbilla.",
      "Tu barbilla es pequeña o puntiaguda.",
    ],
    body: `## Corazón vs. triángulo invertido

Ambas son anchas arriba y estrechas en la barbilla. La cara en forma de corazón es más suave, con mejillas redondeadas y, a menudo, pico de viuda. La cara en [triángulo invertido](/es/face-shapes/inverted-triangle/) es más angulosa, con una mandíbula más marcada.

## Corazón vs. diamante

La cara de diamante tiene la frente **estrecha** y los pómulos como punto más ancho. La cara en forma de corazón tiene la frente **ancha**. Lee más en [cara de corazón vs. cara de diamante](/blog/heart-vs-diamond-face-shape/).

## Objetivo del estilismo

Equilibrar una frente más ancha con una barbilla más estrecha: el flequillo de lado reduce el ancho de la frente y el volumen a la altura de la barbilla rellena la parte inferior del rostro.`,
    women: {
      hairstyles: [
        { name: "Flequillo de lado", why: "Cubre parte de una frente ancha y aporta líneas diagonales." },
        { name: "Bob a la altura de la barbilla", why: "Añade volumen justo donde la cara se estrecha." },
        { name: "Lob con las puntas hacia fuera", why: "El ancho a la altura de la mandíbula equilibra la frente." },
        { name: "Capas largas que empiezan en la barbilla", why: "El volumen en la mandíbula y por debajo rellena la parte inferior del rostro." },
        { name: "Flequillo cortina", why: "Suaviza la frente y enmarca los pómulos." },
        { name: "Raya al lado muy marcada", why: "Rompe el ancho de la frente." },
      ],
      avoid: [
        "Volumen en la coronilla o las sienes.",
        "Peinados hacia atrás que dejan toda la frente al descubierto.",
        "Capas cortas y desfiladas en la parte superior.",
      ],
      tips: "Mantén la parte de arriba lisa y lleva el volumen a la altura de la barbilla.",
    },
    men: {
      hairstyles: [
        { name: "Raya al lado de largo medio", why: "Cubre parte de la frente y añade ancho más abajo." },
        { name: "Flequillo", why: "Reduce una frente ancha." },
        { name: "Corte texturizado más largo", why: "El volumen en los laterales, cerca de las orejas, equilibra la barbilla." },
        { name: "Pelo despeinado de largo medio", why: "Suaviza la parte superior y añade volumen más abajo." },
      ],
      avoid: [
        "Laterales muy cortos con mucho volumen arriba.",
        "Peinados hacia atrás.",
      ],
      beards: [
        { name: "Barba completa", why: "Aporta ancho y volumen a una barbilla estrecha." },
        { name: "Barba cuadrada (boxed)", why: "Cuadra una barbilla puntiaguda." },
        { name: "Barba de pocos días", why: "Añade una sombra de ancho en la mandíbula." },
      ],
      tips: "La barba es la herramienta más eficaz para los hombres con cara en forma de corazón, porque ensancha la parte inferior del rostro.",
    },
    glasses: {
      best: [
        { name: "Monturas con más peso abajo", why: "Añaden ancho a la mitad inferior de la cara." },
        { name: "Monturas redondas u ovaladas", why: "Suavizan una frente ancha." },
        { name: "Monturas al aire o de colores claros", why: "No añaden peso en la parte superior." },
        { name: "Aviador", why: "Son más anchas abajo que arriba." },
      ],
      avoid: [
        "Monturas browline y con más peso arriba.",
        "Monturas cat-eye con puntas exageradas.",
      ],
    },
    makeup:
      "Aplica contorno en las sienes y los laterales de la frente para reducir su ancho, e ilumina la barbilla. Pon el colorete en la parte alta de las mejillas y difumínalo hacia fuera.",
    confusedWith: [
      { slug: "inverted-triangle", difference: "La cara en triángulo invertido es más angulosa, con una mandíbula más marcada." },
      { slug: "diamond", difference: "La cara de diamante tiene la frente estrecha, no ancha." },
      { slug: "oval", difference: "La cara ovalada se estrecha de forma más suave, con una barbilla redondeada." },
    ],
    faqs: [
      {
        q: "¿Cómo es una cara en forma de corazón?",
        a: "Frente ancha, pómulos altos y una mandíbula que se estrecha hacia una barbilla pequeña o puntiaguda, a veces con pico de viuda.",
      },
      {
        q: "¿Qué corte de pelo favorece a una cara de corazón?",
        a: "Flequillo de lado, bobs a la altura de la barbilla, lobs y capas largas que añaden volumen en la barbilla.",
      },
      {
        q: "¿Qué gafas favorecen a una cara de corazón?",
        a: "Monturas con más peso abajo, redondas, ovaladas, al aire y de aviador.",
      },
      {
        q: "¿Es rara la cara en forma de corazón?",
        a: "No. El corazón es una de las formas de cara más comunes.",
      },
      {
        q: "¿Todas las caras de corazón tienen pico de viuda?",
        a: "No. El pico de viuda es frecuente, pero no imprescindible.",
      },
    ],
  },
  diamond: {
    name: "Diamante",
    title: "Cara de diamante: cómo saberlo, cortes y gafas",
    description:
      "La cara de diamante tiene pómulos altos y anchos, frente y mandíbula estrechas y barbilla en punta. Descubre sus cortes, gafas y maquillaje.",
    definition:
      "Una cara de diamante es más ancha en los pómulos, con la frente y la mandíbula notablemente más estrechas. La barbilla es estrecha y a menudo puntiaguda, y los pómulos son altos y prominentes. Es una de las formas de cara menos comunes.",
    measurements: [
      { feature: "Largo vs. ancho de la cara", value: "Entre 1,4 y 1,6 veces más larga que ancha" },
      { feature: "Punto más ancho", value: "Los pómulos, claramente" },
      { feature: "Frente", value: "Estrecha" },
      { feature: "Mandíbula", value: "Estrecha, angulosa" },
      { feature: "Barbilla", value: "Estrecha, a menudo puntiaguda" },
    ],
    traits: [
      "Pómulos altos y anchos",
      "Frente estrecha",
      "Mandíbula estrecha",
      "Barbilla puntiaguda",
    ],
    howToTell: [
      "Tus pómulos sobresalen claramente más allá de la frente y la mandíbula.",
      "Tanto tu frente como tu mandíbula se ven estrechas.",
      "Tu barbilla termina en punta.",
    ],
    body: `## Diamante vs. ovalada

En ambas, los pómulos son el punto más ancho. En la cara ovalada, la frente es solo un poco más estrecha; en la cara de diamante, la frente y la mandíbula son **mucho** más estrechas. Consulta [cara de diamante vs. cara ovalada](/blog/diamond-vs-oval-face-shape/).

## Diamante vs. corazón

La cara en forma de corazón tiene la frente ancha; la cara de diamante, estrecha.

## ¿Es el diamante la forma de cara más rara?

A menudo se dice que el diamante es la forma de cara más rara. Nuestra [guía sobre la forma de cara más rara](/blog/rarest-face-shape/) explica por qué.

## Objetivo del estilismo

Añadir ancho en la frente y la barbilla para equilibrar los pómulos. El flequillo, el flequillo de lado y el volumen a la altura de la barbilla lo consiguen.`,
    women: {
      hairstyles: [
        { name: "Flequillo de lado o recto", why: "Añade ancho a una frente estrecha." },
        { name: "Bob a la altura de la barbilla", why: "Aporta volumen a una mandíbula estrecha." },
        { name: "Lob recogido detrás de las orejas", why: "Luce los pómulos y añade ancho en la barbilla." },
        { name: "Raya al lado marcada con ondas", why: "Volumen por encima y por debajo de los pómulos." },
        { name: "Pixie texturizado con flequillo largo", why: "Ancho en la frente y pómulos a la vista." },
      ],
      avoid: [
        "Volumen a la altura de las mejillas.",
        "Rayas al medio muy marcadas con el pelo pegado en las sienes.",
        "Coletas altas tirantes que estrechan la frente.",
      ],
      tips: "Coloca el volumen por encima y por debajo de los pómulos, no a su altura.",
    },
    men: {
      hairstyles: [
        { name: "Flequillo", why: "Ensancha una frente estrecha." },
        { name: "Crop texturizado", why: "Ancho arriba sin altura." },
        { name: "Pelo de largo medio hacia atrás con volumen en las sienes", why: "Rellena las sienes." },
        { name: "Raya al lado con laterales más llenos", why: "Evita los fades muy cerrados, que exageran los pómulos." },
      ],
      avoid: [
        "Fades altos y muy cortos (high and tight).",
        "Rapados muy cortos que dejan al descubierto una frente estrecha.",
      ],
      beards: [
        { name: "Barba completa", why: "Ensancha una barbilla estrecha." },
        { name: "Barba centrada en la barbilla", why: "Aporta ancho y volumen a una barbilla puntiaguda." },
      ],
      tips: "Rellena la frente y la barbilla; deja que los pómulos sean el rasgo protagonista.",
    },
    glasses: {
      best: [
        { name: "Monturas cat-eye", why: "Realzan los pómulos y añaden ancho a la altura de las cejas." },
        { name: "Monturas ovaladas", why: "Suavizan los rasgos angulosos." },
        { name: "Monturas al aire", why: "Mantienen la atención en los pómulos." },
        { name: "Monturas browline", why: "Añaden ancho en la frente." },
      ],
      avoid: [
        "Monturas estrechas.",
        "Monturas más anchas que los pómulos.",
      ],
    },
    makeup:
      "Ilumina el centro de la frente y la barbilla para ensancharlos, y usa un contorno ligero bajo los pómulos, que ya destacan por sí solos.",
    confusedWith: [
      { slug: "oval", difference: "La cara ovalada tiene la frente más ancha y la barbilla más suave." },
      { slug: "heart", difference: "La cara en forma de corazón tiene la frente ancha." },
    ],
    faqs: [
      {
        q: "¿Qué es una cara de diamante?",
        a: "Una cara que es más ancha en los pómulos, con la frente estrecha, la mandíbula estrecha y la barbilla puntiaguda.",
      },
      {
        q: "¿Es el diamante la forma de cara más rara?",
        a: "A menudo se describe como la más rara, aunque hay pocos datos. Es menos común que la ovalada, la redonda, la cuadrada y la de corazón.",
      },
      {
        q: "¿Qué corte de pelo favorece a una cara de diamante?",
        a: "El flequillo, los bobs a la altura de la barbilla y los peinados con volumen por encima y por debajo de los pómulos.",
      },
      {
        q: "¿Qué gafas favorecen a una cara de diamante?",
        a: "Monturas cat-eye, ovaladas, al aire y browline.",
      },
    ],
  },
  triangle: {
    name: "Triangular",
    title: "Cara triangular: rasgos, cortes y gafas",
    description:
      "La cara triangular tiene la mandíbula más ancha que la frente y angulosa. Aprende a reconocerla y elige los mejores cortes, gafas y barbas.",
    definition:
      "Una cara triangular tiene la mandíbula más ancha que la frente y los pómulos, con una línea de mandíbula angulosa. La cara se estrecha hacia arriba, de modo que la frente es la parte más estrecha.",
    measurements: [
      { feature: "Largo vs. ancho de la cara", value: "Entre 1,2 y 1,5 veces" },
      { feature: "Punto más ancho", value: "Mandíbula" },
      { feature: "Frente", value: "Punto más estrecho" },
      { feature: "Mandíbula", value: "Ancha, angulosa" },
      { feature: "Barbilla", value: "Ancha" },
    ],
    traits: [
      "Mandíbula ancha y angulosa",
      "Frente estrecha",
      "Pómulos más estrechos que la mandíbula",
    ],
    howToTell: [
      "Tu mandíbula es claramente más ancha que tu frente.",
      "Tu mandíbula tiene ángulos definidos.",
      "Tu cara se estrecha hacia arriba.",
    ],
    body: `## Triangular vs. pera

Ambas son más anchas en la mandíbula que en la frente. **Triangular** suele describir una mandíbula angulosa; **pera**, una parte inferior del rostro más llena y redondeada. Muchas guías usan los dos nombres indistintamente.

## Objetivo del estilismo

Añadir ancho en la frente y las sienes, y evitar más ancho en la mandíbula.`,
    women: {
      hairstyles: [
        { name: "Volumen en la coronilla y las sienes", why: "Ensancha la mitad superior." },
        { name: "Flequillo de lado", why: "Añade ancho a una frente estrecha." },
        { name: "Corte en capas con volumen por encima de las orejas", why: "Equilibra una mandíbula ancha." },
        { name: "Pixie con altura", why: "Atrae la mirada hacia arriba." },
        { name: "Capas largas que empiezan por debajo de la mandíbula", why: "Evitan añadir ancho en la línea de la mandíbula." },
      ],
      avoid: [
        "Bobs a la altura de la barbilla.",
        "Pelo pegado arriba con volumen en la mandíbula.",
      ],
      tips: "Crea ancho por encima de los pómulos y mantén la línea de la mandíbula despejada.",
    },
    men: {
      hairstyles: [
        { name: "Parte superior texturizada con volumen", why: "Ensancha la frente." },
        { name: "Flequillo de lado", why: "Añade ancho arriba." },
        { name: "Pelo de largo medio con laterales más llenos por encima de las orejas", why: "Equilibra la mandíbula." },
      ],
      avoid: [
        "Laterales muy cortos con la parte superior plana.",
        "Crops muy cortos.",
      ],
      beards: [
        { name: "Barba de pocos días ligera", why: "Evita añadir ancho a la mandíbula." },
        { name: "Perilla", why: "Lleva la mirada al centro en lugar de a los ángulos de la mandíbula." },
      ],
      tips: "Mantén el ancho arriba y lleva la barba corta en las mejillas.",
    },
    glasses: {
      best: [
        { name: "Monturas browline", why: "Su borde superior marcado ensancha la mitad superior." },
        { name: "Monturas cat-eye", why: "Elevan y añaden ancho en las sienes." },
        { name: "Monturas con más peso arriba o decorativas", why: "Atraen la mirada hacia arriba." },
      ],
      avoid: [
        "Monturas con más peso abajo.",
        "Monturas estrechas.",
      ],
    },
    makeup: "Ilumina la frente y las sienes, y aplica contorno en los ángulos de la mandíbula.",
    confusedWith: [
      { slug: "pear", difference: "La cara de pera es la versión más suave y redondeada de las mismas proporciones." },
      { slug: "square", difference: "La cara cuadrada tiene la frente tan ancha como la mandíbula." },
    ],
    faqs: [
      {
        q: "¿Qué es una cara triangular?",
        a: "Una cara con la mandíbula más ancha que la frente y los pómulos, normalmente con una línea de mandíbula angulosa.",
      },
      {
        q: "¿La cara triangular es lo mismo que la cara de pera?",
        a: "Son muy parecidas. La pera suele indicar una parte inferior del rostro más suave y llena; la triangular, una más angulosa.",
      },
      {
        q: "¿Qué corte de pelo favorece a una cara triangular?",
        a: "Peinados con volumen en la coronilla y las sienes, flequillo de lado y capas que empiezan por debajo de la mandíbula.",
      },
    ],
  },
  "inverted-triangle": {
    name: "Triángulo invertido",
    title: "Cara en triángulo invertido: cortes y gafas",
    description:
      "La cara en triángulo invertido tiene frente ancha y mandíbula y barbilla estrechas. Cómo distinguirla del corazón y qué cortes y gafas elegir.",
    definition:
      "Una cara en triángulo invertido es más ancha en la frente y se estrecha en una línea bastante recta hasta una mandíbula angulosa y una barbilla estrecha. Se parece a la cara en forma de corazón, pero es más angulosa y normalmente no tiene pico de viuda.",
    measurements: [
      { feature: "Largo vs. ancho de la cara", value: "Entre 1,3 y 1,5 veces" },
      { feature: "Punto más ancho", value: "Frente" },
      { feature: "Frente", value: "Ancha" },
      { feature: "Mandíbula", value: "Estrecha, angulosa" },
      { feature: "Barbilla", value: "Estrecha, definida" },
    ],
    traits: [
      "Frente ancha",
      "Estrechamiento en línea recta",
      "Mandíbula angulosa y estrecha",
      "Barbilla definida",
    ],
    howToTell: [
      "Tu frente es la parte más ancha de tu cara.",
      "Tu cara se estrecha en líneas bastante rectas hasta la barbilla.",
      "Tu mandíbula es angulosa más que suave.",
    ],
    body: `## Triángulo invertido vs. corazón

Ambas son anchas arriba y estrechas en la barbilla. La cara en forma de corazón es más redondeada en las mejillas y suele tener pico de viuda; la cara en triángulo invertido es más angulosa. Los consejos de estilismo son muy parecidos.

## Objetivo del estilismo

Reducir el ancho de la frente y añadir volumen en la mandíbula y la barbilla.`,
    women: {
      hairstyles: [
        { name: "Flequillo de lado", why: "Estrecha visualmente la frente." },
        { name: "Cortes a la altura de la barbilla o lob", why: "Volumen donde la cara se estrecha." },
        { name: "Ondas desde los pómulos hacia abajo", why: "Añaden ancho en la parte baja." },
      ],
      avoid: [
        "Altura y volumen en la coronilla.",
        "Peinados hacia atrás.",
      ],
      tips: "Mantén la parte de arriba plana y el volumen abajo.",
    },
    men: {
      hairstyles: [
        { name: "Raya al lado de largo medio", why: "Cubre parte de la frente." },
        { name: "Flequillo", why: "Reduce el ancho de la frente." },
        { name: "Laterales más largos", why: "Evita los fades muy cerrados, que exageran el estrechamiento." },
      ],
      avoid: [
        "Mucho volumen arriba con los laterales muy cortos.",
      ],
      beards: [
        { name: "Barba completa", why: "Añade ancho en la barbilla." },
        { name: "Barba cuadrada (boxed)", why: "Cuadra una mandíbula estrecha." },
      ],
      tips: "Usa la barba para ensanchar la parte inferior del rostro.",
    },
    glasses: {
      best: [
        { name: "Monturas con más peso abajo", why: "Añaden ancho en la parte baja." },
        { name: "Monturas redondas", why: "Suavizan los ángulos." },
        { name: "Monturas al aire", why: "No añaden peso en la parte superior." },
      ],
      avoid: [
        "Monturas browline con más peso arriba.",
      ],
    },
    makeup: "Aplica contorno en las sienes y en la parte exterior de la frente, e ilumina la barbilla.",
    confusedWith: [
      { slug: "heart", difference: "La cara en forma de corazón es más suave, con mejillas más redondeadas y, a menudo, pico de viuda." },
      { slug: "diamond", difference: "La cara de diamante tiene la frente estrecha." },
    ],
    faqs: [
      {
        q: "¿Qué es una cara en triángulo invertido?",
        a: "Una cara que es más ancha en la frente y se estrecha en líneas rectas hasta una mandíbula y una barbilla angulosas y estrechas.",
      },
      {
        q: "¿El triángulo invertido es lo mismo que la cara de corazón?",
        a: "Son primas cercanas. La de corazón es más suave y redondeada; la de triángulo invertido, más angulosa.",
      },
    ],
  },
  pear: {
    name: "Pera",
    title: "Cara de pera: rasgos, cortes y gafas",
    description:
      "La cara de pera tiene la mandíbula llena y ancha y la frente más estrecha. Aprende a reconocerla y descubre los mejores cortes y gafas.",
    definition:
      "Una cara de pera es más ancha en la mandíbula y más estrecha en la frente, con mejillas llenas y una parte inferior del rostro suave y redondeada. Es la versión más suave de la cara triangular.",
    measurements: [
      { feature: "Largo vs. ancho de la cara", value: "Entre 1,1 y 1,4 veces" },
      { feature: "Punto más ancho", value: "Mandíbula y parte baja de las mejillas" },
      { feature: "Frente", value: "Estrecha" },
      { feature: "Mandíbula", value: "Ancha, llena, suave" },
      { feature: "Barbilla", value: "Ancha, redondeada" },
    ],
    traits: [
      "Parte inferior del rostro llena",
      "Frente estrecha",
      "Mandíbula ancha y suave",
    ],
    howToTell: [
      "La mitad inferior de tu cara se ve más llena que la superior.",
      "Tu frente es la parte más estrecha.",
      "Tu mandíbula es ancha, pero suave más que angulosa.",
    ],
    body: `## Pera vs. triangular

La cara de pera y la triangular comparten las mismas proporciones: estrecha arriba y ancha abajo. La pera es la versión más redondeada y llena; la triangular, más angulosa.

## Pera vs. redonda

La cara redonda es más ancha en las mejillas; la cara de pera, en la mandíbula.

## Objetivo del estilismo

Añadir volumen en la parte superior de la cabeza y en las sienes, y mantener despejada la línea de la mandíbula.`,
    women: {
      hairstyles: [
        { name: "Volumen en la coronilla", why: "Ensancha la mitad superior." },
        { name: "Flequillo de lado", why: "Ensancha una frente estrecha." },
        { name: "Corte en capas a la altura de los hombros", why: "Las capas por encima de la mandíbula equilibran una parte inferior del rostro llena." },
        { name: "Pixie con volumen", why: "Altura y ancho arriba." },
      ],
      avoid: [
        "Bobs a la altura de la barbilla.",
        "Pelo pegado arriba.",
      ],
      tips: "Crea volumen por encima de las orejas.",
    },
    men: {
      hairstyles: [
        { name: "Tupé texturizado", why: "Añade ancho y altura arriba." },
        { name: "Laterales más largos por encima de las orejas", why: "Equilibran la mandíbula." },
      ],
      avoid: [
        "Rapados que dejan al descubierto una frente estrecha.",
      ],
      beards: [
        { name: "Barba de pocos días corta", why: "Define la mandíbula sin añadir ancho." },
        { name: "Perilla", why: "Lleva la mirada al centro." },
      ],
      tips: "Lleva la barba corta en las mejillas.",
    },
    glasses: {
      best: [
        { name: "Monturas browline", why: "Ensanchan la parte superior del rostro." },
        { name: "Monturas cat-eye", why: "Elevan y añaden ancho en las sienes." },
        { name: "Monturas con el borde superior llamativo y de color", why: "Atraen la mirada hacia arriba." },
      ],
      avoid: [
        "Monturas con más peso abajo.",
        "Monturas pequeñas y estrechas.",
      ],
    },
    makeup: "Ilumina la frente y las sienes, y aplica un contorno suave a lo largo de la mandíbula.",
    confusedWith: [
      { slug: "triangle", difference: "La cara triangular es más angulosa." },
      { slug: "round", difference: "La cara redonda es más ancha en las mejillas." },
    ],
    faqs: [
      {
        q: "¿Qué es una cara de pera?",
        a: "Una cara que es más ancha en la mandíbula y más estrecha en la frente, con mejillas llenas y una parte inferior del rostro suave.",
      },
      {
        q: "¿Qué peinado favorece a una cara de pera?",
        a: "Peinados con volumen en la coronilla y las sienes, flequillo de lado y capas por encima de la mandíbula.",
      },
    ],
  },
};
