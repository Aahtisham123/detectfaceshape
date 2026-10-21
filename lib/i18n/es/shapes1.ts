import type { ShapeT } from "../types";

export const shapesA: Record<string, ShapeT> = {
  oval: {
    name: "Ovalada",
    title: "Cara ovalada: rasgos, cortes de pelo y gafas",
    description: "La cara ovalada mide 1,5 veces más de largo que de ancho, con los pómulos como zona más ancha. Cómo saberlo y los mejores cortes y gafas.",
    definition: "Una cara ovalada es aproximadamente una vez y media más larga que ancha. Los pómulos son la parte más ancha, la frente es ligeramente más ancha que la mandíbula y la línea de la mandíbula se curva suavemente hacia un mentón redondeado, sin ángulos marcados.",
    measurements: [
      { feature: "Largo frente a ancho", value: "Entre 1,4 y 1,6 veces más larga que ancha" },
      { feature: "Zona más ancha", value: "Pómulos" },
      { feature: "Frente", value: "Ligeramente más ancha que la mandíbula" },
      { feature: "Mandíbula", value: "Suave, redondeada, se estrecha poco a poco" },
      { feature: "Mentón", value: "Redondeado, no puntiagudo" },
    ],
    traits: [
      "Proporciones equilibradas de arriba abajo",
      "Pómulos algo más anchos que la frente",
      "Mandíbula más estrecha que la frente, sin esquinas marcadas",
      "La cara parece un huevo al revés",
    ],
    howToTell: [
      "Tu cara es claramente más larga que ancha, pero no de forma exagerada.",
      "La parte más ancha de tu cara está a la altura de los pómulos.",
      "Tu mandíbula se curva en lugar de formar una esquina debajo de las orejas.",
      "Si trazas el contorno de tu cara en un espejo, parece un huevo con la parte más ancha arriba.",
    ],
    body: `## Por qué se dice que la cara ovalada es «equilibrada»

Los estilistas consideran la cara ovalada la forma más versátil porque ningún rasgo domina: la frente, los pómulos y la mandíbula se estrechan de forma gradual, y el largo guarda proporción con el ancho. Por eso funcionan la mayoría de los cortes de pelo, gafas y estilos de barba. El objetivo no es «corregir» nada, sino evitar ocultar el equilibrio que ya tienes.

## ¿Qué tan común es la cara ovalada?

La ovalada es uno de los resultados más frecuentes de nuestro detector, junto con la de corazón y la cuadrada. En la práctica, muchas personas tienen una mezcla, como una cara ovalada con la mandíbula algo cuadrada o una ovalada que tiende a alargada. Tu resultado muestra un porcentaje para cada forma, así puedes ver hacia cuál te inclinas.

## Ovalada vs. alargada

La diferencia está en el largo. Una cara ovalada es unas 1,5 veces más larga que ancha; una cara alargada es notablemente más larga (cerca de 1,7 veces o más) y tiene los lados más rectos. Si los flequillos laterales y el volumen a los lados hacen que tu cara se vea más equilibrada, puede que tiendas a alargada.`,
    women: {
      hairstyles: [
        { name: "Capas largas", why: "Las capas que empiezan por debajo del mentón aportan movimiento sin ensanchar ninguna parte de la cara." },
        { name: "Bob largo recto", why: "Un corte a la altura de la clavícula con el borde recto enmarca la mandíbula y mantiene el contorno equilibrado." },
        { name: "Flequillo cortina", why: "Un flequillo abierto que cae hacia ambos lados despeja la cara y atrae la atención hacia los ojos." },
        { name: "Corte pixie", why: "Las caras ovaladas tienen las proporciones para llevar el pelo muy corto; resalta los pómulos." },
        { name: "Raya al medio pulida", why: "La raya al medio funciona porque las dos mitades de una cara ovalada están proporcionadas por igual." },
        { name: "Corte shaggy a la altura de los hombros", why: "Las puntas texturizadas añaden volumen a la altura de la mandíbula, algo que favorece a las caras ovaladas que se estrechan un poco." },
        { name: "Coleta alta", why: "Recoger el pelo deja ver todo el contorno, y la ovalada es la forma que mejor luce totalmente despejada." },
      ],
      avoid: [
        "Flequillos densos y rectos que tapan toda la frente, porque pueden acortar la cara.",
        "Mucha altura en la coronilla si tu cara tiende a ser larga, ya que puede acercarte a la forma alargada.",
      ],
      tips: "Casi cualquier largo funciona. Elige primero un corte según la textura de tu pelo y tu estilo de vida, y después ajusta el flequillo y la raya.",
    },
    men: {
      hairstyles: [
        { name: "Degradado clásico (taper)", why: "Los lados cortos y algo de largo arriba mantienen las proporciones naturales." },
        { name: "Tupé", why: "Una altura moderada arriba favorece a la cara ovalada; mantenla discreta para que la cara no parezca más larga." },
        { name: "Raya al lado", why: "Una raya al lado limpia es atemporal y luce unos rasgos equilibrados." },
        { name: "Crop texturizado", why: "Un crop corto con el flequillo hacia delante funciona porque no hace falta ocultar la frente." },
        { name: "Rapado (buzz cut)", why: "Las caras ovaladas tienen la forma de cabeza uniforme que dejan ver los cortes muy cortos." },
        { name: "Pelo de largo medio suelto", why: "El pelo detrás de las orejas enmarca los pómulos sin añadir anchura." },
      ],
      avoid: [
        "Pompadours muy altos que exageran el largo.",
        "Flequillos densos que parten la cara por la mitad.",
      ],
      beards: [
        { name: "Barba corta perfilada (boxed)", why: "Un largo uniforme alrededor de la mandíbula mantiene la forma equilibrada." },
        { name: "Barba de varios días marcada", why: "Aporta algo de definición a la mandíbula sin cambiar el contorno." },
        { name: "Afeitado completo", why: "La ovalada es una de las pocas formas que luce igual de bien sin barba." },
      ],
      tips: "Evita añadir demasiada altura o demasiada anchura. Mantén los lados pulidos y la parte de arriba moderada.",
    },
    glasses: {
      best: [
        { name: "Monturas cuadradas o rectangulares", why: "Las líneas angulosas contrastan con las curvas suaves de la cara ovalada." },
        { name: "Wayfarer", why: "Su forma ligeramente trapezoidal acompaña el suave estrechamiento de la mandíbula." },
        { name: "Aviador", why: "La forma de gota repite el contorno ovalado de forma favorecedora." },
        { name: "Monturas geométricas", why: "Las monturas hexagonales u octogonales dan interés a unos rasgos equilibrados." },
      ],
      avoid: [
        "Monturas más anchas que la parte más ancha de tu cara.",
        "Monturas muy altas que tapan los pómulos.",
      ],
    },
    makeup: "Las caras ovaladas necesitan poco contorno. Aplica un bronceador ligero justo debajo de los pómulos y en las sienes, y concentra el iluminador en la parte alta de las mejillas, el puente de la nariz y el arco de Cupido.",
    confusedWith: [
      { slug: "oblong", difference: "La cara alargada es más larga, con los lados más rectos y se estrecha menos hacia el mentón." },
      { slug: "heart", difference: "La cara de corazón tiene la frente claramente más ancha y un mentón estrecho, a menudo puntiagudo." },
      { slug: "diamond", difference: "La cara de diamante tiene la frente y la mandíbula estrechas, con unos pómulos mucho más anchos." },
    ],
    faqs: [
      { q: "¿Cómo es una cara ovalada?", a: "Una cara ovalada es más larga que ancha, más ancha a la altura de los pómulos, con una frente algo más estrecha y una mandíbula que se estrecha hacia un mentón redondeado. Parece un huevo al revés." },
      { q: "¿Es atractiva la cara ovalada?", a: "A la cara ovalada se la suele llamar la forma ideal porque sus proporciones son equilibradas, y mucha gente la percibe como atractiva. Sin embargo, el atractivo depende de mucho más que el contorno, y cada forma de cara tiene sus propios puntos fuertes." },
      { q: "¿Qué tan rara es la cara ovalada?", a: "La cara ovalada no es rara. Es una de las formas de cara más comunes, aunque muchas personas tienen una mezcla de ovalada con otra forma." },
      { q: "¿Qué corte de pelo favorece más a una cara ovalada?", a: "A las caras ovaladas les quedan bien la mayoría de los cortes. Las capas largas, los bob largos, el flequillo cortina y el pixie son populares entre las mujeres; el degradado, la raya al lado y el crop texturizado, entre los hombres." },
      { q: "¿Qué gafas le quedan bien a una cara ovalada?", a: "Funcionan las monturas cuadradas, rectangulares, wayfarer y de aviador. Procura que la montura no sea más ancha que la parte más ancha de tu cara." },
    ],
  },
  round: {
    name: "Redonda",
    title: "Cara redonda: cómo saberlo, cortes y gafas",
    description: "La cara redonda es casi tan ancha como larga, con mejillas llenas y mandíbula suave. Cómo saberlo y los peinados, gafas y barbas que más favorecen.",
    definition: "Una cara redonda es aproximadamente igual de ancha que de larga. Las mejillas son la parte más ancha y llena, la mandíbula es suave y sin esquinas visibles, y el mentón es redondeado. Como el ancho y el largo son parecidos, el contorno se parece a un círculo.",
    measurements: [
      { feature: "Largo frente a ancho", value: "Cerca de 1:1, rara vez más de 1,3 veces" },
      { feature: "Zona más ancha", value: "Mejillas" },
      { feature: "Frente", value: "De ancho similar a la mandíbula" },
      { feature: "Mandíbula", value: "Ancha, suave y curva" },
      { feature: "Mentón", value: "Corto y redondeado" },
    ],
    traits: [
      "Mejillas llenas",
      "Mandíbula suave y curva, sin ángulos",
      "Mentón corto",
      "La línea del nacimiento del pelo también suele ser redondeada",
    ],
    howToTell: [
      "Mide el ancho de tu cara a la altura de los pómulos y el largo desde el nacimiento del pelo hasta el mentón. Si son casi iguales, probablemente tengas la cara redonda.",
      "Tu mandíbula se curva de forma continua desde la oreja hasta el mentón.",
      "Tus mejillas se ven llenas incluso cuando no sonríes.",
    ],
    body: `## Redonda vs. cuadrada

Las caras redondas y cuadradas tienen un largo y un ancho parecidos. La diferencia está en la mandíbula: una cara cuadrada tiene una mandíbula fuerte y angulosa con esquinas visibles debajo de las orejas, mientras que una cara redonda se curva de forma suave. Si pasas un dedo por la mandíbula y notas una esquina definida, probablemente tiendas a cuadrada.

## Objetivo de estilo para caras redondas

La idea es añadir un poco de largo y de ángulo. La altura en la coronilla, la raya al lado, las capas largas que caen por debajo del mentón y las gafas angulosas llevan la mirada de arriba abajo en lugar de a lo ancho.

## ¿El peso cambia una cara redonda?

El peso influye en lo llenas que se ven las mejillas, así que adelgazar o engordar puede hacer que una cara parezca más redonda o más angulosa. La estructura ósea de base (el ancho de la frente, los pómulos y la mandíbula) no cambia, por lo que tu forma básica suele mantenerse. Consulta nuestra guía sobre [si adelgazar cambia la forma de la cara](/blog/does-losing-weight-change-your-face-shape/).`,
    women: {
      hairstyles: [
        { name: "Capas largas por debajo del mentón", why: "El largo por debajo de la mandíbula estira visualmente la cara." },
        { name: "Raya al lado marcada", why: "Una raya descentrada crea asimetría y líneas diagonales que estilizan una cara redonda." },
        { name: "Flequillo largo de lado", why: "Un flequillo en diagonal sobre la frente rompe la anchura." },
        { name: "Bob largo asimétrico", why: "Un bob largo más largo por delante lleva la mirada hacia abajo." },
        { name: "Volumen en la coronilla", why: "La altura arriba añade largo a la silueta general." },
        { name: "Pixie con altura", why: "El pixie funciona si es más largo y texturizado arriba, en lugar de plano y redondeado." },
        { name: "Ondas suaves que empiezan por debajo de los pómulos", why: "Las ondas que empiezan abajo mantienen la anchura lejos de las mejillas." },
      ],
      avoid: [
        "Bobs redondeados a la altura del mentón, que repiten el círculo.",
        "Flequillos rectos y densos que acortan la cara.",
        "Volumen a los lados, cerca de las mejillas.",
      ],
      tips: "Busca cualquier cosa que añada altura arriba o largo por debajo del mentón, y mantén la parte con más volumen del peinado lejos de las mejillas.",
    },
    men: {
      hairstyles: [
        { name: "Pompadour o tupé", why: "La altura arriba hace que la cara parezca más larga." },
        { name: "Faux hawk", why: "La altura concentrada en el centro alarga el contorno." },
        { name: "Undercut con largo arriba", why: "Los lados muy cortos quitan anchura; el largo arriba añade ángulo." },
        { name: "Raya al lado con fade", why: "Las líneas limpias y un fade ajustado crean estructura." },
        { name: "Flequillo anguloso", why: "Un flequillo peinado hacia un lado añade líneas diagonales." },
      ],
      avoid: [
        "Cortes tipo tazón y crops redondeados.",
        "Pelo largo que queda a la altura de las mejillas y añade anchura.",
        "Rapados con el mismo largo en toda la cabeza.",
      ],
      beards: [
        { name: "Perilla o perilla extendida", why: "El pelo concentrado en el mentón añade largo." },
        { name: "Barba perfilada (boxed), más corta a los lados", why: "Llevar las mejillas cortas y el mentón más largo crea una mandíbula angulosa." },
        { name: "Barba de contorno (chin strap) con el mentón más largo", why: "Define la línea de la mandíbula que le falta a una cara redonda." },
      ],
      tips: "Mantén los lados cortos y construye altura arriba. Una barba más larga en el mentón que en las mejillas es el cambio más eficaz.",
    },
    glasses: {
      best: [
        { name: "Monturas rectangulares", why: "Las líneas rectas contrastan con las curvas suaves y hacen que la cara parezca más larga." },
        { name: "Monturas cuadradas", why: "Los ángulos aportan estructura a una cara redonda." },
        { name: "Monturas browline", why: "Un borde superior marcado eleva la mirada." },
        { name: "Monturas cat-eye", why: "Las esquinas exteriores elevadas aportan altura y ángulo." },
      ],
      avoid: [
        "Monturas redondas pequeñas, que repiten el círculo.",
        "Monturas más estrechas que tu cara.",
      ],
    },
    makeup: "Haz el contorno a lo largo de los bordes exteriores de la cara, desde las sienes hasta la mandíbula, y aplica el bronceador debajo de los pómulos en ángulo ascendente. Ilumina el centro (frente, puente de la nariz y mentón) para añadir largo.",
    confusedWith: [
      { slug: "square", difference: "La cara cuadrada tiene las mismas proporciones, pero una mandíbula marcada y angulosa." },
      { slug: "oval", difference: "La cara ovalada es notablemente más larga que ancha." },
      { slug: "pear", difference: "La cara de pera es más ancha en la mandíbula que en las mejillas." },
    ],
    faqs: [
      { q: "¿Cómo sé si tengo la cara redonda?", a: "Si tu cara es aproximadamente igual de ancha que de larga, las mejillas son la parte más ancha y llena, y tu mandíbula se curva sin esquinas visibles, probablemente tengas la cara redonda." },
      { q: "¿Cuál es el mejor corte de pelo para una cara redonda?", a: "Funcionan mejor los cortes que añaden altura arriba o largo por debajo del mentón: capas largas, raya al lado marcada, flequillo de lado y bob largo asimétrico para mujeres; tupés, pompadours y undercuts para hombres." },
      { q: "¿Qué gafas le quedan bien a una cara redonda?", a: "Las monturas angulosas, como las rectangulares, cuadradas, browline y cat-eye, aportan estructura. Evita las monturas redondas pequeñas." },
      { q: "¿Una cara redonda puede volverse ovalada?", a: "La estructura ósea no cambia, pero perder grasa facial puede hacer que una cara redonda se vea más definida. Los peinados y el contorno de maquillaje también pueden hacer que parezca más larga." },
      { q: "¿Es atractiva la cara redonda?", a: "Sí. Las caras redondas transmiten juventud y cercanía, y muchos actores y modelos conocidos tienen la cara redonda." },
    ],
  },
  square: {
    name: "Cuadrada",
    title: "Cara cuadrada: rasgos, peinados, gafas y barba",
    description: "La cara cuadrada tiene una mandíbula fuerte y angulosa, y frente, pómulos y mandíbula de ancho similar. Cómo saberlo y qué cortes y gafas elegir.",
    definition: "Una cara cuadrada tiene la frente, los pómulos y la mandíbula de aproximadamente el mismo ancho, y una mandíbula fuerte y angulosa con esquinas definidas debajo de las orejas. La cara es solo un poco más larga que ancha.",
    measurements: [
      { feature: "Largo frente a ancho", value: "Entre 1 y 1,3 veces más larga que ancha" },
      { feature: "Zona más ancha", value: "Igual en frente, pómulos y mandíbula" },
      { feature: "Frente", value: "Ancha y a menudo recta en el nacimiento del pelo" },
      { feature: "Mandíbula", value: "Ancha, marcada, con ángulos claros" },
      { feature: "Mentón", value: "Ancho y plano" },
    ],
    traits: [
      "Mandíbula fuerte y ancha",
      "Esquinas de la mandíbula visibles",
      "Lados rectos",
      "Mentón ancho y plano",
    ],
    howToTell: [
      "Tu mandíbula forma una esquina clara debajo de las orejas.",
      "Tu frente, tus pómulos y tu mandíbula parecen tener más o menos el mismo ancho.",
      "Tu cara es solo un poco más larga que ancha.",
    ],
    body: `## Cuadrada vs. rectangular

Una cara rectangular tiene la misma mandíbula fuerte, pero es notablemente más larga. Si el largo de tu cara supera con claridad 1,4 veces su ancho, consulta la [forma de cara rectangular](/es/face-shapes/rectangle/).

## Objetivo de estilo

En las mujeres, el objetivo suele ser suavizar los ángulos: capas alrededor de la mandíbula, ondas y flequillo cortina. En los hombres, la mandíbula cuadrada suele ser un rasgo que conviene lucir, así que los lados cortos y una línea de mandíbula limpia funcionan bien.

## ¿Es masculina la cara cuadrada?

A menudo se describe una mandíbula fuerte como masculina, pero muchas mujeres con cara cuadrada (Angelina Jolie, Olivia Wilde, Keira Knightley) son conocidas precisamente por ella. Un estilo más suave simplemente desplaza la atención hacia los ojos y los pómulos.`,
    women: {
      hairstyles: [
        { name: "Capas suaves que enmarcan la cara", why: "Las capas que caen alrededor de la mandíbula suavizan sus ángulos." },
        { name: "Ondas largas", why: "Las curvas contrastan con las líneas rectas y aportan suavidad." },
        { name: "Flequillo cortina", why: "Un flequillo ligero y abierto redondea las esquinas de la frente." },
        { name: "Flequillo de lado", why: "Un flequillo en diagonal rompe una frente ancha." },
        { name: "Bob largo texturizado por debajo de la mandíbula", why: "Terminar por debajo de la mandíbula evita marcar una línea en su punto más ancho." },
        { name: "Recogido suelto con mechones sueltos", why: "Los mechones suaves alrededor de la cara disimulan las esquinas de la mandíbula." },
      ],
      avoid: [
        "Bobs rectos a la altura del mentón que terminan justo en la mandíbula.",
        "Rayas al medio muy marcadas con el pelo liso y plano.",
        "Flequillos densos y rectos.",
      ],
      tips: "Busca suavidad y movimiento alrededor de la mandíbula y la frente.",
    },
    men: {
      hairstyles: [
        { name: "Corte militar (crew cut)", why: "El pelo corto y pulido luce una mandíbula fuerte." },
        { name: "Rapado (buzz cut)", why: "A las caras cuadradas les queda bien el pelo muy corto porque la mandíbula aporta estructura." },
        { name: "Raya al lado con degradado (taper)", why: "Clásico y nítido; repite la mandíbula angulosa." },
        { name: "Crop texturizado", why: "Un crop moderno y desenfadado aporta suavidad arriba." },
        { name: "Peinado hacia atrás", why: "Deja toda la cara a la vista; funciona mejor con rasgos definidos." },
      ],
      avoid: [
        "Cortes tipo tazón o flequillos densos que hacen que la cara parezca más corta y ancha.",
        "Pelo largo que termina a la altura de la mandíbula.",
      ],
      beards: [
        { name: "Barba de pocos días", why: "Resalta la línea de la mandíbula sin ocultarla." },
        { name: "Barba corta perfilada (boxed)", why: "Los bordes pulidos siguen la mandíbula natural." },
        { name: "Candado (circle beard)", why: "Una perilla redondeada unida al bigote suaviza una mandíbula muy ancha." },
      ],
      tips: "Los lados cortos con algo de textura arriba son la apuesta segura. Lleva la barba corta para que se vea la mandíbula.",
    },
    glasses: {
      best: [
        { name: "Monturas redondas", why: "Las curvas equilibran los ángulos marcados." },
        { name: "Monturas ovaladas", why: "Suavizan una mandíbula y una frente anchas." },
        { name: "Sin montura o al aire", why: "Las monturas ligeras no añaden más líneas duras." },
        { name: "Monturas cat-eye", why: "Las esquinas elevadas atraen la atención hacia los pómulos." },
      ],
      avoid: [
        "Monturas cuadradas y rígidas que repiten la mandíbula.",
        "Monturas más estrechas que la mandíbula.",
      ],
    },
    makeup: "Aplica contorno en las esquinas de la frente y en los ángulos de la mandíbula para suavizarlos. Difumina el colorete con movimientos circulares sobre la parte más alta de las mejillas e ilumina el centro de la frente y el mentón.",
    confusedWith: [
      { slug: "rectangle", difference: "La cara rectangular tiene la misma mandíbula, pero es mucho más larga." },
      { slug: "round", difference: "La cara redonda tiene proporciones parecidas, pero una mandíbula suave y curva." },
      { slug: "triangle", difference: "La cara triangular tiene la mandíbula claramente más ancha que la frente." },
    ],
    faqs: [
      { q: "¿Cómo sé si tengo la cara cuadrada?", a: "Tu frente, tus pómulos y tu mandíbula tienen más o menos el mismo ancho, tu mandíbula tiene esquinas claras debajo de las orejas y tu cara es solo un poco más larga que ancha." },
      { q: "¿Qué peinado le queda bien a una cara cuadrada?", a: "Mujeres: capas suaves, ondas, flequillo cortina y flequillo de lado. Hombres: corte militar, rapado, raya al lado y crop texturizado." },
      { q: "¿Qué gafas le quedan bien a una cara cuadrada?", a: "Las monturas redondas, ovaladas, sin montura y cat-eye suavizan los ángulos. Evita las monturas cuadradas y rígidas." },
      { q: "¿Es atractiva la cara cuadrada?", a: "Una mandíbula definida se considera atractiva en general, tanto en hombres como en mujeres. Muchos modelos y actores tienen la cara cuadrada." },
      { q: "¿Qué diferencia hay entre una cara cuadrada y una rectangular?", a: "El largo. Ambas tienen una mandíbula fuerte, pero la cara rectangular es notablemente más larga que ancha." },
    ],
  },
  oblong: {
    name: "Alargada",
    title: "Cara alargada: rasgos, peinados y gafas",
    description: "La cara alargada es larga y estrecha, con frente, pómulos y mandíbula de ancho similar. Cómo saberlo y los peinados y gafas que mejor le van.",
    definition: "Una cara alargada (también llamada cara larga) es notablemente más larga que ancha, normalmente 1,7 veces o más. La frente, los pómulos y la mandíbula tienen un ancho similar, los lados son bastante rectos y la mandíbula es suavemente redondeada en lugar de marcada.",
    measurements: [
      { feature: "Largo frente a ancho", value: "Unas 1,7 veces o más" },
      { feature: "Zona más ancha", value: "Uniforme, sin una zona claramente más ancha" },
      { feature: "Frente", value: "A menudo alta" },
      { feature: "Mandíbula", value: "Redondeada, de ancho similar a la frente" },
      { feature: "Mentón", value: "Puede ser largo" },
    ],
    traits: [
      "Contorno largo y estrecho",
      "Línea de las mejillas recta",
      "Frente alta o mentón largo",
      "Esquinas de la mandíbula redondeadas",
    ],
    howToTell: [
      "Tu cara se ve claramente larga en las fotos, incluso con el pelo suelto.",
      "No hay una zona claramente más ancha; tu cara es bastante recta por ambos lados.",
      "Tu mandíbula es redondeada, no angulosa (una mandíbula marcada indica cara rectangular).",
    ],
    body: `## Alargada, larga y rectangular: ¿en qué se diferencian?

«Cara larga» y «cara alargada» significan lo mismo. Una cara **rectangular** es una cara larga con una mandíbula fuerte y angulosa; una cara **alargada** tiene la mandíbula más suave y redondeada. A ambas les conviene la misma estrategia: añadir anchura a los lados y evitar altura extra.

## Objetivo de estilo

Crear la ilusión de anchura. El flequillo acorta una frente alta, el volumen a los lados (ondas, rizos, bobs en capas) añade anchura y las monturas de gafas anchas o altas rompen el largo.

## Ovalada vs. alargada

Si no tienes claro si tu cara es ovalada o alargada, compara el largo con el ancho. La ovalada ronda 1,5 veces; la alargada se acerca a 1,7 veces o más, con los lados más rectos. Lee la [comparación completa entre cara ovalada y alargada](/blog/oval-vs-oblong-face-shape/).`,
    women: {
      hairstyles: [
        { name: "Flequillo recto o cortina", why: "El flequillo acorta una frente alta y hace que la cara se vea menos larga." },
        { name: "Ondas a la altura de los hombros", why: "El volumen a los lados añade anchura justo donde la cara alargada lo necesita." },
        { name: "Bob a la altura del mentón", why: "Un bob que termina en la mandíbula crea una línea horizontal que equilibra el largo." },
        { name: "Shag en capas", why: "Las capas desfiladas a los lados añaden anchura y movimiento." },
        { name: "Rizos con volumen", why: "Los rizos se expanden hacia los lados en lugar de hacia abajo." },
        { name: "Raya al lado con volumen", why: "Añade asimetría y anchura sin añadir altura." },
      ],
      avoid: [
        "Pelo muy largo, liso y plano, que estira la cara.",
        "Altura en la coronilla, como los moños altos.",
        "Peinados hacia atrás sin volumen a los lados.",
      ],
      tips: "Piensa en anchura, no en altura. Si te encanta el pelo largo, añade capas y ondas para que no caiga recto.",
    },
    men: {
      hairstyles: [
        { name: "Flequillo o crop hacia delante", why: "El pelo peinado hacia delante acorta la frente." },
        { name: "Raya al lado con los lados más llenos", why: "Evita los fades a piel; dejar algo de largo a los lados añade anchura." },
        { name: "Pelo texturizado de largo medio", why: "El volumen a los lados equilibra el largo." },
        { name: "Corte clásico corto por detrás y a los lados (sin apurar demasiado)", why: "Pulido, pero no severo." },
        { name: "Corte César", why: "Un flequillo corto y horizontal corta el largo de la cara." },
      ],
      avoid: [
        "Pompadours y tupés altos.",
        "Fades altos muy apurados con pelo largo arriba.",
        "Pelo largo que cae recto.",
      ],
      beards: [
        { name: "Barba completa, más poblada a los lados", why: "La anchura en mejillas y mandíbula equilibra el largo." },
        { name: "Patillas anchas o barba de pocos días ancha", why: "El énfasis horizontal ensancha la cara." },
        { name: "Evita las barbas largas en el mentón", why: "Una perilla larga o una barba en punta añaden todavía más largo." },
      ],
      tips: "Mantén poca altura y mucha anchura, tanto en el pelo como en la barba.",
    },
    glasses: {
      best: [
        { name: "Monturas oversize", why: "Las monturas grandes cubren más parte del largo de la cara." },
        { name: "Lentes altas y profundas", why: "Las lentes más altas rompen el espacio vertical." },
        { name: "Varillas decorativas o en contraste", why: "Añaden anchura a los lados." },
        { name: "Monturas redondas o cuadradas", why: "Ambas funcionan siempre que sean lo bastante altas." },
      ],
      avoid: [
        "Monturas pequeñas y estrechas.",
        "Monturas rectangulares bajas que acentúan el largo.",
      ],
    },
    makeup: "Aplica bronceador a lo largo del nacimiento del pelo, en la parte alta de la frente, y debajo del mentón para acortar visualmente la cara. Extiende el colorete en horizontal sobre las mejillas en lugar de llevarlo hacia las sienes.",
    confusedWith: [
      { slug: "oval", difference: "La cara ovalada es más corta (unas 1,5 veces) y se estrecha más hacia el mentón." },
      { slug: "rectangle", difference: "La cara rectangular es igual de larga, pero tiene una mandíbula marcada y angulosa." },
      { slug: "diamond", difference: "La cara de diamante tiene la frente y el mentón estrechos, con los pómulos anchos." },
    ],
    faqs: [
      { q: "¿Qué es una cara alargada?", a: "Una cara alargada es notablemente más larga que ancha, con la frente, los pómulos y la mandíbula de ancho similar y una mandíbula redondeada. También se llama cara larga." },
      { q: "¿Cara alargada es lo mismo que cara larga?", a: "Sí. Cara alargada y cara larga describen la misma forma. Una cara larga con una mandíbula marcada y cuadrada se llama rectangular." },
      { q: "¿Qué corte de pelo favorece más a una cara alargada?", a: "Flequillos, ondas a la altura de los hombros, bobs y shags en capas que añaden anchura. Los hombres deberían dejar algo de largo a los lados y evitar los peinados altos." },
      { q: "¿Qué gafas le quedan bien a una cara alargada?", a: "Monturas oversize y altas que cubran más parte de la cara, además de monturas con varillas decorativas para añadir anchura." },
      { q: "¿Es atractiva la cara alargada?", a: "Sí. Las caras largas son comunes entre modelos y actores, y salen bien en las fotos. El estilo adecuado equilibra el largo con la anchura." },
    ],
  },
  rectangle: {
    name: "Rectangular",
    title: "Cara rectangular: rasgos, peinados y gafas",
    description: "La cara rectangular es larga, con mandíbula fuerte y cuadrada y lados rectos. En qué se diferencia de la alargada y qué cortes, gafas y barbas elegir.",
    definition: "Una cara rectangular es más larga que ancha, como la cara alargada, pero con una mandíbula fuerte y angulosa. La frente, los pómulos y la mandíbula tienen aproximadamente el mismo ancho, los lados son rectos y la mandíbula tiene esquinas definidas.",
    measurements: [
      { feature: "Largo frente a ancho", value: "Unas 1,6 veces o más" },
      { feature: "Zona más ancha", value: "Uniforme de la frente a la mandíbula" },
      { feature: "Frente", value: "A menudo alta y recta en el nacimiento del pelo" },
      { feature: "Mandíbula", value: "Ancha, con esquinas marcadas" },
      { feature: "Mentón", value: "Ancho y plano" },
    ],
    traits: [
      "Cara larga",
      "Lados rectos y paralelos",
      "Esquinas de la mandíbula angulosas",
      "Nacimiento del pelo cuadrado",
    ],
    howToTell: [
      "Tu cara es claramente larga.",
      "Tu mandíbula tiene esquinas marcadas, como una cara cuadrada.",
      "Tu frente y tu mandíbula tienen más o menos el mismo ancho.",
    ],
    body: `## Cara rectangular vs. alargada

Ambas son caras largas. La diferencia está en la mandíbula: la **rectangular** tiene una mandíbula marcada y angulosa con esquinas definidas, mientras que la **alargada** tiene la mandíbula redondeada. Muchas guías las agrupan, pero el estilo que les favorece es distinto. Las caras rectangulares necesitan a la vez anchura y suavizar la zona de la mandíbula. Consulta la [guía completa de cara rectangular vs. alargada](/blog/rectangle-vs-oblong-face-shape/).

## Rectangular vs. cuadrada

La cara cuadrada y la rectangular comparten la mandíbula angulosa. Una cara cuadrada es solo un poco más larga que ancha; una cara rectangular es mucho más larga.

## Objetivo de estilo

Añade anchura a los lados, reduce la altura arriba y suaviza las esquinas de la mandíbula y de la frente.`,
    women: {
      hairstyles: [
        { name: "Flequillo ligero y desfilado", why: "Acorta la cara y suaviza un nacimiento del pelo cuadrado." },
        { name: "Bob en capas por debajo de la mandíbula", why: "Añade anchura y rompe las esquinas de la mandíbula." },
        { name: "Ondas sueltas", why: "Las curvas suavizan los ángulos y añaden anchura." },
        { name: "Shag con capas que enmarcan la cara", why: "La textura a los lados equilibra el largo." },
        { name: "Capas largas peinadas de lado", why: "Las líneas diagonales reducen el énfasis vertical." },
      ],
      avoid: [
        "Pelo largo, pulido y liso.",
        "Altura en la coronilla.",
        "Cortes rectos que terminan en las esquinas de la mandíbula.",
      ],
      tips: "Combina la estrategia de la cara alargada (añadir anchura) con la de la cara cuadrada (suavizar la mandíbula).",
    },
    men: {
      hairstyles: [
        { name: "Flequillo texturizado", why: "Cubre parte de la frente para acortar la cara." },
        { name: "Raya al lado con los lados moderados", why: "Mantiene la anchura en las sienes." },
        { name: "Crop corto y desenfadado", why: "Poca altura y textura suave." },
        { name: "Pelo de largo medio peinado hacia atrás (con volumen a los lados)", why: "Funciona si no añade altura." },
      ],
      avoid: [
        "Tupés y pompadours altos.",
        "Fades a piel con altura arriba.",
      ],
      beards: [
        { name: "Barba completa y ancha", why: "Añade anchura; evita que el mentón quede demasiado largo." },
        { name: "Barba de varios días marcada", why: "Deja ver la mandíbula sin añadir largo." },
      ],
      tips: "Evita añadir largo en cualquiera de los dos extremos de la cara.",
    },
    glasses: {
      best: [
        { name: "Monturas redondas u ovaladas", why: "Suavizan los ángulos." },
        { name: "Monturas oversize", why: "Rompen el largo." },
        { name: "Aviador", why: "Anchas arriba y con la parte inferior curva." },
      ],
      avoid: [
        "Monturas rectangulares estrechas.",
        "Monturas pequeñas que se pierden en una cara larga.",
      ],
    },
    makeup: "Sombrea la parte alta de la frente y las esquinas de la mandíbula, y aplica el colorete en horizontal sobre la parte más alta de las mejillas para añadir anchura.",
    confusedWith: [
      { slug: "oblong", difference: "La cara alargada es igual de larga, pero tiene la mandíbula redondeada." },
      { slug: "square", difference: "La cara cuadrada tiene la misma mandíbula, pero es mucho más corta." },
    ],
    faqs: [
      { q: "¿Qué es una cara rectangular?", a: "Una cara larga con los lados rectos y una mandíbula fuerte y angulosa. La frente, los pómulos y la mandíbula tienen aproximadamente el mismo ancho." },
      { q: "¿Cara rectangular es lo mismo que cara alargada?", a: "No exactamente. Ambas son largas, pero la rectangular tiene una mandíbula marcada y cuadrada, y la alargada tiene la mandíbula redondeada." },
      { q: "¿Qué peinado le queda bien a una cara rectangular?", a: "Flequillos, bobs en capas, ondas sueltas y shags que añaden anchura y suavizan la mandíbula." },
      { q: "¿Qué gafas le quedan bien a una cara rectangular?", a: "Monturas redondas, ovaladas, de aviador y oversize." },
    ],
  },
};
