import type { Dict } from "../translate";
import type { LocaleContent } from "../types";

export const hub: LocaleContent["hub"] = {
  title: "Formas de cara: tabla de los 10 tipos",
  description:
    "Las 10 formas de cara en una tabla: ovalada, redonda, cuadrada, alargada, rectangular, corazón, diamante, triangular, triángulo invertido y pera.",
  h1: "Formas de cara: los 10 tipos explicados",
  intro:
    "Hay 10 formas de cara principales: ovalada, redonda, cuadrada, alargada, rectangular, corazón, diamante, triangular, triángulo invertido y pera. Tu forma de cara depende de tres anchos (frente, pómulos y mandíbula), del largo de tu rostro y de si tu mandíbula es angulosa o suave. La mayoría de las personas combina dos formas.",
  body: `## Tabla de formas de cara

| Forma | Largo frente a ancho | Parte más ancha | Mandíbula | Mentón |
|---|---|---|---|---|
| Ovalada | ~1,5× | Pómulos | Suave, se estrecha | Redondeado |
| Redonda | ~1× | Mejillas | Suave, ancha | Corto, redondeado |
| Cuadrada | ~1–1,3× | Uniforme | Marcada, ancha | Ancho, plano |
| Alargada | ~1,7×+ | Uniforme | Redondeada | Puede ser largo |
| Rectangular | ~1,6×+ | Uniforme | Marcada | Ancho |
| Corazón | ~1,3–1,5× | Frente | Estrecha | Puntiagudo |
| Diamante | ~1,4–1,6× | Pómulos | Estrecha | Puntiagudo |
| Triangular | ~1,2–1,5× | Mandíbula | Ancha, angulosa | Ancho |
| Triángulo invertido | ~1,3–1,5× | Frente | Estrecha, angulosa | Definido |
| Pera | ~1,1–1,4× | Mandíbula | Ancha, suave | Redondeado |

## Cómo saber tu forma de cara

Hay tres maneras, de la más objetiva a la menos:

1. **Usa una foto.** Nuestro [detector de forma de cara](/es/) mide tus proporciones a partir de una foto de frente en segundos. Tu foto nunca sale de tu dispositivo.
2. **Mide con una cinta métrica.** Mide tu frente, pómulos, mandíbula y largo del rostro, y luego usa la [calculadora de forma de cara](/es/face-shape-calculator/). Nuestra [guía para medir tu cara](/blog/how-to-measure-your-face/) te muestra exactamente dónde medir.
3. **Dibújala en un espejo.** Recógete el pelo, colócate a un brazo de distancia del espejo y traza tu contorno con un rotulador lavable. Después haz el [test de forma de cara](/es/face-shape-quiz/).

## Las tres preguntas que definen tu forma

- **¿Cuánto mide tu cara de largo en comparación con su ancho?** Si son casi iguales, apunta a redonda o cuadrada; si es claramente más larga, a alargada o rectangular; si está en un punto intermedio, a ovalada, corazón o diamante.
- **¿Qué parte es la más ancha?** La frente (corazón, triángulo invertido), los pómulos (ovalada, diamante, redonda), la mandíbula (triangular, pera) o todo por igual (cuadrada, rectangular, alargada).
- **¿Tu mandíbula es angulosa o suave?** Una mandíbula angulosa distingue la cuadrada de la redonda, la rectangular de la alargada y la triangular de la pera.

## Formas de cara que se confunden a menudo

- [Ovalada vs. alargada](/blog/oval-vs-oblong-face-shape/): la alargada es más larga y tiene los lados más rectos.
- [Rectangular vs. alargada](/blog/rectangle-vs-oblong-face-shape/): la rectangular tiene la mandíbula marcada.
- [Corazón vs. diamante](/blog/heart-vs-diamond-face-shape/): la de corazón tiene la frente ancha; la de diamante, estrecha.
- [Diamante vs. ovalada](/blog/diamond-vs-oval-face-shape/): en la de diamante, la frente y la mandíbula son mucho más estrechas.
- Redonda vs. cuadrada: la cuadrada tiene ángulos en la mandíbula; la redonda no.

## Formas de cara para hombres y mujeres

Las formas son las mismas para todos, pero los consejos de estilo cambian. Consulta las [formas de cara para mujeres](/face-shapes/women/) y las [formas de cara para hombres](/face-shapes/men/).`,
  faqs: [
    {
      q: "¿Cuántas formas de cara hay?",
      a: "La mayoría de los estilistas usan entre 7 y 10. Las 10 que usamos nosotros son ovalada, redonda, cuadrada, alargada, rectangular, corazón, diamante, triangular, triángulo invertido y pera.",
    },
    {
      q: "¿Cuál es la forma de cara más común?",
      a: "La ovalada suele describirse como la más común, seguida de la redonda, la cuadrada y la de corazón.",
    },
    {
      q: "¿Cuál es la forma de cara más rara?",
      a: "La de diamante suele considerarse la más rara, junto con la triangular y la de pera.",
    },
    {
      q: "¿Cuál es la forma de cara más atractiva?",
      a: "La ovalada se suele considerar la ideal por su equilibrio, pero los estudios muestran que el atractivo depende mucho más de la simetría, la proporción media, la piel y la expresión que del contorno.",
    },
    {
      q: "¿Puede cambiar tu forma de cara?",
      a: "Tu estructura ósea es estable en la edad adulta, pero el peso, el envejecimiento y el tono muscular modifican los tejidos blandos, lo que puede cambiar cómo se ve tu forma de cara.",
    },
    {
      q: "¿Las formas de cara son distintas en hombres y mujeres?",
      a: "No, se aplican las mismas formas. Los hombres suelen tener la mandíbula más ancha de media, por lo que las formas cuadrada, rectangular y triangular son algo más frecuentes en ellos.",
    },
  ],
};

export const items: LocaleContent["items"] = {
  "eye-shapes/almond": {
    name: "Ojos almendrados",
    definition:
      "Los ojos almendrados son más anchos que altos, con un pliegue visible y unas esquinas que se estrechan en una punta suave, como una almendra. El iris toca el párpado superior y el inferior, así que apenas se ve blanco por encima o por debajo.",
  },
  "eye-shapes/round": {
    name: "Ojos redondos",
    definition:
      "Los ojos redondos son más altos de lo habitual en relación con su ancho, por lo que se ven grandes y abiertos. A menudo se ve blanco por encima o por debajo del iris, y el pliegue es claramente visible.",
  },
  "eye-shapes/hooded": {
    name: "Ojos encapotados",
    definition:
      "Los ojos encapotados tienen una capa extra de piel que cae desde el hueso de la ceja y cubre el pliegue, de modo que el párpado superior se ve pequeño u oculto con los ojos abiertos.",
  },
  "eye-shapes/monolid": {
    name: "Ojos monopárpado",
    definition:
      "Los ojos monopárpado no tienen pliegue visible en el párpado superior, así que el párpado parece una superficie lisa desde las pestañas hasta la ceja. Son especialmente comunes en personas de ascendencia asiática oriental.",
  },
  "eye-shapes/upturned": {
    name: "Ojos rasgados hacia arriba",
    definition:
      "Los ojos rasgados hacia arriba tienen las esquinas externas más altas que las internas, lo que da una mirada elevada y felina. En términos de medida, tienen una inclinación cantal positiva.",
  },
  "eye-shapes/downturned": {
    name: "Ojos caídos",
    definition:
      "Los ojos caídos tienen las esquinas externas más bajas que las internas. Esto da una mirada suave y dulce, y corresponde a una inclinación cantal neutra o negativa.",
  },
  "eye-shapes/deep-set": {
    name: "Ojos hundidos",
    definition:
      "Los ojos hundidos están situados más atrás en el cráneo, por lo que el hueso de la ceja se ve más prominente y proyecta sombra sobre el párpado. Suelen parecer más grandes de perfil que de frente.",
  },
  "eye-shapes/protruding": {
    name: "Ojos saltones",
    definition:
      "Los ojos saltones (o prominentes) están situados más adelante, por lo que se ve mucho párpado y los ojos parecen grandes y abiertos. Un cambio repentino en la prominencia de los ojos puede ser una señal médica, así que consulta a un médico si los tuyos cambian.",
  },
  "eye-shapes/close-set": {
    name: "Ojos juntos",
    definition:
      "Los ojos juntos tienen entre ellos una separación menor que el ancho de un ojo. La regla de los quintos dice que la separación ideal es de aproximadamente el ancho de un ojo.",
  },
  "eye-shapes/wide-set": {
    name: "Ojos separados",
    definition:
      "Los ojos separados tienen entre ellos una separación mayor que el ancho de un ojo. Suelen asociarse a una mirada juvenil y abierta.",
  },
  "nose-shapes/greek": {
    name: "Nariz griega",
    definition:
      "La nariz griega tiene un tabique recto, sin giba ni hundimiento, que forma una línea limpia desde la frente hasta la punta. Suele ser de anchura estrecha a media.",
  },
  "nose-shapes/roman": {
    name: "Nariz romana",
    definition:
      "La nariz romana tiene un tabique prominente que se curva hacia fuera, a menudo con un ligero bulto, lo que da un perfil marcado. A veces se la llama aguileña, aunque ese término suele implicar una curva más pronunciada y ganchuda.",
  },
  "nose-shapes/nubian": {
    name: "Nariz nubia",
    definition:
      "La nariz nubia tiene un tabique largo y bastante bajo, y una base más ancha a la altura de las fosas nasales. Es común en personas de ascendencia africana, pero aparece en todas las poblaciones.",
  },
  "nose-shapes/hawk": {
    name: "Nariz aguileña",
    definition:
      "La nariz aguileña, también llamada nariz de halcón, tiene un tabique prominente con una curva marcada y una punta que apunta hacia abajo, como el pico de un ave rapaz.",
  },
  "nose-shapes/button": {
    name: "Nariz de botón",
    definition:
      "La nariz de botón es pequeña, corta y redondeada, con la punta ligeramente hacia arriba. Suele asociarse a un aspecto juvenil.",
  },
  "nose-shapes/snub": {
    name: "Nariz chata",
    definition:
      "La nariz chata es corta y claramente respingada, de modo que las fosas nasales se ven al mirar la cara de frente.",
  },
  "nose-shapes/celestial": {
    name: "Nariz respingona",
    definition:
      "La nariz respingona (también llamada nariz celestial) tiene un pequeño hundimiento en el centro del tabique y una punta que apunta hacia arriba. Es más larga que la nariz chata.",
  },
  "nose-shapes/fleshy": {
    name: "Nariz carnosa",
    definition:
      "La nariz carnosa es grande y ancha, con una punta redondeada y prominente. Es una de las formas de nariz más comunes.",
  },
  "nose-shapes/bumpy": {
    name: "Nariz con giba",
    definition:
      "La nariz con giba tiene un bulto visible, o giba dorsal, en el tabique. Es muy común y puede ser natural o consecuencia de una lesión.",
  },
  "lip-shapes/full": {
    name: "Labios gruesos",
    definition:
      "Los labios gruesos tienen más altura en relación con su ancho, por lo que ambos labios se ven carnosos.",
  },
  "lip-shapes/thin": {
    name: "Labios finos",
    definition:
      "Los labios finos tienen menos altura en relación con su ancho, y el bermellón (la parte rosada) es estrecho.",
  },
  "lip-shapes/heart": {
    name: "Labios en forma de corazón",
    definition:
      "Los labios en forma de corazón tienen un arco de Cupido pronunciado y un labio superior más carnoso que, junto con el inferior, forma un corazón.",
  },
  "lip-shapes/bow": {
    name: "Labios en forma de arco",
    definition:
      "Los labios en forma de arco tienen un arco de Cupido profundo y muy definido, como el arco de un arquero, con un volumen general más fino.",
  },
  "lip-shapes/top-heavy": {
    name: "Labios con el superior más grueso",
    definition:
      "Los labios con el superior más grueso tienen un labio superior tan carnoso como el inferior, o más.",
  },
  "lip-shapes/bottom-heavy": {
    name: "Labios con el inferior más grueso",
    definition:
      "Los labios con el inferior más grueso tienen un labio inferior mucho más carnoso que el superior, por encima de la proporción típica de 1,5:1.",
  },
  "lip-shapes/wide": {
    name: "Labios anchos",
    definition:
      "Los labios anchos se extienden más a lo ancho de la cara; las comisuras llegan aproximadamente a las líneas verticales que bajan desde las pupilas.",
  },
  "lip-shapes/round": {
    name: "Labios redondos",
    definition:
      "Los labios redondos son carnosos pero relativamente estrechos, así que la boca se ve compacta y redondeada.",
  },
  "lip-shapes/downturned": {
    name: "Labios caídos",
    definition:
      "Los labios caídos tienen las comisuras más bajas que el centro de la boca en reposo.",
  },
  "head-shapes/round": {
    name: "Cabeza redonda",
    definition:
      "La cabeza redonda es casi tan ancha como larga y se curva de forma uniforme en la nuca y la coronilla.",
  },
  "head-shapes/oval": {
    name: "Cabeza ovalada",
    definition:
      "La cabeza ovalada es algo más larga de delante hacia atrás que ancha, con una curva suave en la parte posterior.",
  },
  "head-shapes/long": {
    name: "Cabeza alargada",
    definition:
      "La cabeza alargada (dolicocéfala) es notablemente más larga de delante hacia atrás que ancha.",
  },
  "head-shapes/flat-back": {
    name: "Cabeza plana por detrás",
    definition:
      "La cabeza plana por detrás cae de forma más pronunciada detrás de la coronilla en lugar de curvarse hacia fuera.",
  },
  "head-shapes/square": {
    name: "Cabeza cuadrada",
    definition:
      "La cabeza cuadrada tiene la parte superior plana y los lados bastante rectos.",
  },
  "head-shapes/egg": {
    name: "Cabeza en forma de huevo",
    definition:
      "La cabeza en forma de huevo es más ancha en la parte superior o posterior y más estrecha hacia la mandíbula, como un huevo.",
  },
  "jawline-shapes/square": {
    name: "Mandíbula cuadrada",
    definition:
      "La mandíbula cuadrada es ancha, con ángulos marcados y visibles debajo de las orejas.",
  },
  "jawline-shapes/rounded": {
    name: "Mandíbula redondeada",
    definition:
      "La mandíbula redondeada se curva suavemente desde la oreja hasta el mentón, sin un ángulo visible.",
  },
  "jawline-shapes/v-shaped": {
    name: "Mandíbula en V",
    definition:
      "La mandíbula en V se estrecha desde los pómulos hasta un mentón fino, formando una V.",
  },
  "jawline-shapes/pointed": {
    name: "Mandíbula puntiaguda",
    definition:
      "La mandíbula puntiaguda termina en un mentón estrecho y proyectado.",
  },
  "jawline-shapes/wide": {
    name: "Mandíbula ancha",
    definition:
      "La mandíbula ancha es tan ancha como los pómulos o más.",
  },
  "jawline-shapes/narrow": {
    name: "Mandíbula estrecha",
    definition:
      "La mandíbula estrecha es notablemente más estrecha que los pómulos.",
  },
  "kibbe-body-types/dramatic": {
    name: "Dramatic",
    definition:
      "Dramatic es yang puro: estructura ósea larga, estrecha y afilada, con rasgos faciales angulosos y poca suavidad.",
  },
  "kibbe-body-types/soft-dramatic": {
    name: "Soft Dramatic",
    definition:
      "Soft Dramatic combina una estructura ósea yang con carne yin: una complexión larga y grande, con curvas y rasgos voluptuosos.",
  },
  "kibbe-body-types/flamboyant-natural": {
    name: "Flamboyant Natural",
    definition:
      "Flamboyant Natural tiene una complexión larga y ancha, con un yang más romo que afilado.",
  },
  "kibbe-body-types/natural": {
    name: "Natural",
    definition:
      "Natural es un tipo yang suave: estatura media, estructura ósea ancha y ligeramente roma, y aspecto atlético.",
  },
  "kibbe-body-types/soft-natural": {
    name: "Soft Natural",
    definition:
      "Soft Natural es una complexión algo ancha y roma, con una capa de suavidad yin y curvas.",
  },
  "kibbe-body-types/dramatic-classic": {
    name: "Dramatic Classic",
    definition:
      "Dramatic Classic es equilibrado y simétrico, con un ligero toque afilado en los huesos y el rostro.",
  },
  "kibbe-body-types/classic": {
    name: "Classic",
    definition:
      "Classic es un equilibrio perfecto entre yin y yang: moderado, simétrico y refinado.",
  },
  "kibbe-body-types/soft-classic": {
    name: "Soft Classic",
    definition:
      "Soft Classic es equilibrado, con una ligera suavidad y redondez.",
  },
  "kibbe-body-types/flamboyant-gamine": {
    name: "Flamboyant Gamine",
    definition:
      "Flamboyant Gamine combina un tamaño menudo con más yang: afilado, recto y vivaz.",
  },
  "kibbe-body-types/gamine": {
    name: "Gamine",
    definition:
      "Gamine es una mezcla equilibrada de yin y yang en una complexión compacta.",
  },
  "kibbe-body-types/soft-gamine": {
    name: "Soft Gamine",
    definition:
      "Soft Gamine es una complexión compacta con más yin: redondeada, curvilínea y juvenil.",
  },
  "kibbe-body-types/theatrical-romantic": {
    name: "Theatrical Romantic",
    definition:
      "Theatrical Romantic es yin con un toque afilado: menudo, curvilíneo y con rasgos delicadamente angulosos.",
  },
  "kibbe-body-types/romantic": {
    name: "Romantic",
    definition:
      "Romantic es yin puro: suave, redondeado y curvilíneo, con rasgos voluptuosos.",
  },
};

export const hubNames: LocaleContent["hubNames"] = {
  "eye-shapes": "Formas de ojos",
  "nose-shapes": "Formas de nariz",
  "lip-shapes": "Formas de labios",
  "head-shapes": "Formas de cabeza",
  "jawline-shapes": "Tipos de mandíbula",
  "kibbe-body-types": "Tipos de cuerpo Kibbe",
};

export const pages: Dict = {
  "478 landmarks are placed and measured right in your browser.": "Se colocan y miden 478 puntos faciales directamente en tu navegador.",
  "AI face shape detector measuring forehead, cheekbone and jaw width on a face outline": "Detector de forma de cara con IA midiendo el ancho de la frente, los pómulos y la mandíbula sobre el contorno de un rostro",
  "AI measures your face": "La IA mide tu cara",
  "Add a photo": "Añade una foto",
  "Advice you can use": "Consejos útiles",
  "Answer a few questions": "Responde unas preguntas",
  "At a glance": "De un vistazo",
  "Beard styles for {shape} faces": "Estilos de barba para cara {shape}",
  "Best glasses for {shape} faces": "Mejores gafas para cara {shape}",
  "Best haircuts for {shape} faces (men)": "Mejores cortes de pelo para cara {shape} (hombres)",
  "Best hairstyles for {shape} faces (women)": "Mejores peinados para cara {shape} (mujeres)",
  "Breadcrumb": "Ruta de navegación",
  "By": "Por",
  "Calibrated on real faces": "Calibrado con rostros reales",
  "Celebrities with {shape} faces": "Famosos con cara {shape}",
  "Chart of the 10 face shapes with forehead, cheekbone and jaw width lines": "Tabla de las 10 formas de cara con líneas de ancho de frente, pómulos y mandíbula",
  "Check if you have {a_shape} face": "Comprueba si tienes la cara {shape}",
  "Copy embed code": "Copiar código para insertar",
  "Each answer adds points to the types it fits.": "Cada respuesta suma puntos a los tipos con los que encaja.",
  "Embed this quiz on your website": "Inserta este test en tu web",
  "Every result links to haircuts, glasses, beards and makeup for your shape.": "Cada resultado enlaza a cortes de pelo, gafas, barbas y maquillaje para tu forma.",
  "Face Shapes": "Formas de cara",
  "Face shape guide": "Guía de formas de cara",
  "Face shapes chart: gold lines mark forehead, cheekbone and jaw width": "Tabla de formas de cara: las líneas doradas marcan el ancho de la frente, los pómulos y la mandíbula",
  "Find your face shape from a photo": "Descubre tu forma de cara con una foto",
  "Frames to avoid": "Monturas que conviene evitar",
  "Free AI tool": "Herramienta de IA gratuita",
  "Free for salons, barbers, stylists, eyewear shops and bloggers. Copy this code into your page:": "Gratis para peluquerías, barberías, estilistas, ópticas y blogueros. Copia este código en tu página:",
  "Frequently asked questions": "Preguntas frecuentes",
  "Get your result": "Obtén tu resultado",
  "Get your result in 3 steps": "Obtén tu resultado en 3 pasos",
  "Glasses for {shape} faces": "Gafas para cara {shape}",
  "Haircuts for {shape} faces (men)": "Cortes de pelo para cara {shape} (hombres)",
  "Hairstyles for {shape} faces (women)": "Peinados para cara {shape} (mujeres)",
  "Home": "Inicio",
  "How to tell if you have {a_shape} face": "Cómo saber si tienes la cara {shape}",
  "Just for fun · Free": "Solo por diversión · Gratis",
  "Last updated": "Última actualización",
  "Live camera mode": "Modo cámara en directo",
  "Makeup and contouring for {shape} faces": "Maquillaje y contouring para cara {shape}",
  "Man with a diamond face shape": "Hombre con cara de diamante",
  "Man with a heart face shape": "Hombre con cara de corazón",
  "Man with a pear face shape": "Hombre con cara de pera",
  "Man with a rectangle face shape": "Hombre con cara rectangular",
  "Man with a round face shape": "Hombre con cara redonda",
  "Man with a square face shape": "Hombre con cara cuadrada",
  "Man with a triangle face shape": "Hombre con cara triangular",
  "Man with an inverted triangle face shape": "Hombre con cara de triángulo invertido",
  "Man with an oblong face shape": "Hombre con cara alargada",
  "Man with an oval face shape": "Hombre con cara ovalada",
  "More free face analysis tools": "Más herramientas gratuitas de análisis facial",
  "Most faces mix two shapes, so you see a percentage match for all ten.": "La mayoría de las caras combinan dos formas, así que verás un porcentaje de coincidencia para las diez.",
  "No photo needed": "No necesitas foto",
  "No sign-up": "Sin registro",
  "Photo never uploaded": "La foto nunca se sube",
  "Private by design": "Privado por diseño",
  "Real examples of {a_shape} face shape": "Ejemplos reales de forma de cara {shape}",
  "Related tools": "Herramientas relacionadas",
  "Results in seconds": "Resultados en segundos",
  "Save a result card for Instagram, TikTok or Pinterest. It never includes your photo.": "Guarda una tarjeta con tu resultado para Instagram, TikTok o Pinterest. Nunca incluye tu foto.",
  "See all haircuts for men": "Ver todos los cortes para hombres",
  "See all hairstyles for women": "Ver todos los peinados para mujeres",
  "See all {n} tools": "Ver las {n} herramientas",
  "See your best match, your runners-up and a guide.": "Descubre tu forma principal, las que le siguen y una guía.",
  "See your match, the measurements behind it and what to do next.": "Descubre tu resultado, las medidas en las que se basa y qué hacer a continuación.",
  "Send feedback": "Enviar comentarios",
  "Share your result": "Comparte tu resultado",
  "Shows your blend": "Muestra tu combinación",
  "Tap a shape to see its proportions, best hairstyles, glasses and celebrity examples.": "Toca una forma para ver sus proporciones, los mejores peinados, gafas y ejemplos de famosos.",
  "The AI runs inside your browser. Your photo is never uploaded, stored or seen.": "La IA funciona dentro de tu navegador. Tu foto nunca se sube, se guarda ni se ve.",
  "Tried it? Tell us how it went": "¿Lo has probado? Cuéntanos qué tal",
  "Upload a front-facing photo or turn on your camera.": "Sube una foto de frente o activa tu cámara.",
  "Use a mirror. Every answer takes a few seconds.": "Usa un espejo. Cada respuesta lleva unos segundos.",
  "Want to learn about every type? Read our guide to": "¿Quieres conocer todos los tipos? Lee nuestra guía de",
  "Watch your face shape update in real time, then capture for a full reading.": "Mira cómo se actualiza tu forma de cara en tiempo real y luego haz una captura para obtener un análisis completo.",
  "We compare your proportions with measurements from real photos, not drawings.": "Comparamos tus proporciones con medidas de fotos reales, no de dibujos.",
  "We read every message and use your feedback to make the detector more accurate. Share your result, a suggestion or a bug.": "Leemos todos los mensajes y usamos tus comentarios para que el detector sea más preciso. Comparte tu resultado, una sugerencia o un error.",
  "We score your answers": "Puntuamos tus respuestas",
  "What is your face shape? The 10 types": "¿Cuál es tu forma de cara? Los 10 tipos",
  "What people say": "Lo que dice la gente",
  "What {a_shape} face shape looks like": "Cómo es la forma de cara {shape}",
  "Why people use our face shape detector": "Por qué la gente usa nuestro detector de forma de cara",
  "Woman with a diamond face shape": "Mujer con cara de diamante",
  "Woman with a heart face shape": "Mujer con cara de corazón",
  "Woman with a pear face shape": "Mujer con cara de pera",
  "Woman with a rectangle face shape": "Mujer con cara rectangular",
  "Woman with a round face shape": "Mujer con cara redonda",
  "Woman with a square face shape": "Mujer con cara cuadrada",
  "Woman with a triangle face shape": "Mujer con cara triangular",
  "Woman with an inverted triangle face shape": "Mujer con cara de triángulo invertido",
  "Woman with an oblong face shape": "Mujer con cara alargada",
  "Woman with an oval face shape": "Mujer con cara ovalada",
  "face shapes scored": "formas de cara evaluadas",
  "facial landmarks measured": "puntos faciales medidos",
  "photos uploaded, ever": "fotos subidas, jamás",
  "to your result": "hasta tu resultado",
  "{Shape} Face": "Cara {shape}",
  "{Shape} Face Shape": "Forma de cara {shape}",
  "{Shape} face guides": "Guías para cara {shape}",
  "{Shape} face shape diagram with forehead, cheekbone and jaw width lines": "Diagrama de la forma de cara {shape} con líneas de ancho de frente, pómulos y mandíbula",
  "{Shape} face shape measurements": "Medidas de la forma de cara {shape}",
  "{Shape} vs similar face shapes": "Cara {shape} frente a formas similares",
  "{n} min read": "{n} min de lectura",
  "{shape} face shape": "forma de cara {shape}",
  "{shape} face shape diagram": "diagrama de la forma de cara {shape}",
  "{shape} face shape diagram showing forehead, cheekbone and jaw widths": "diagrama de la forma de cara {shape} con los anchos de frente, pómulos y mandíbula",
};
