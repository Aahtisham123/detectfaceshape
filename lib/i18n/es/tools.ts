import type { ToolT } from "../types";

export const tools: Record<string, ToolT> = {
  "face-shape-detector": {
    name: "Detector de forma de cara",
    short: "Descubre tu forma de cara con una foto o la cámara en vivo.",
    h1: "Detector de forma de cara",
    intro: "Sube una foto o activa la cámara y nuestra IA mide tu frente, pómulos, mandíbula y largo de la cara para decirte cuál de las 10 formas de cara tienes: ovalada, redonda, cuadrada, alargada, rectangular, corazón, diamante, triangular, triángulo invertido o pera. Es gratis, tarda unos cinco segundos y tu foto nunca sale de tu dispositivo.",
    body: `## Cómo funciona el detector de forma de cara

1. **Encuentra 478 puntos en tu cara.** Usamos MediaPipe Face Landmarker de Google, un modelo facial que funciona dentro de tu navegador, para colocar 478 puntos de referencia en tu cara: la zona de la línea del cabello, los pómulos, los ángulos de la mandíbula, la barbilla y más.
2. **Endereza tu cara.** Si tienes la cabeza inclinada, rotamos los puntos para que tus ojos queden nivelados antes de medir.
3. **Mide cuatro anchos y un largo.** Ancho de la frente, ancho de los pómulos, ancho de la mandíbula, ancho de la barbilla y largo de la cara, además del ángulo de las esquinas de tu mandíbula.
4. **Te compara con caras reales.** Calibramos el detector con fotos reales medidas con el mismo modelo, así que una "mandíbula ancha" significa ancha en comparación con personas reales, no con un dibujo.
5. **Puntúa las 10 formas.** Obtienes tu forma principal y un porcentaje para cada forma, porque la mayoría de las personas son una mezcla.

## Qué significa cada resultado

| Forma de cara | Proporciones clave |
|---|---|
| [Ovalada](/es/face-shapes/oval/) | Aproximadamente 1.5× más larga que ancha, más ancha en los pómulos, mandíbula suave |
| [Redonda](/es/face-shapes/round/) | Largo y ancho similares, mejillas llenas, mandíbula suave |
| [Cuadrada](/es/face-shapes/square/) | Frente, pómulos y mandíbula de ancho similar, mandíbula angulosa |
| [Alargada](/es/face-shapes/oblong/) | Larga y estrecha, mandíbula redondeada |
| [Rectangular](/es/face-shapes/rectangle/) | Larga, con mandíbula angulosa |
| [Corazón](/es/face-shapes/heart/) | Frente ancha, barbilla estrecha y puntiaguda |
| [Diamante](/es/face-shapes/diamond/) | Más ancha en los pómulos, frente y mandíbula estrechas |
| [Triangular](/es/face-shapes/triangle/) | Mandíbula más ancha que la frente, angulosa |
| [Triángulo invertido](/es/face-shapes/inverted-triangle/) | Frente ancha, mandíbula estrecha y angulosa |
| [Pera](/es/face-shapes/pear/) | Mandíbula llena y ancha, frente estrecha |

Mira todas las formas lado a lado en nuestra [tabla de formas de cara](/es/face-shapes/).

## Modo cámara en vivo (filtro de forma de cara)

Toca **Usar mi cámara** para ver un filtro de forma de cara en vivo: el contorno de tu cara y tus líneas de medición te siguen en tiempo real, con tu forma de cara actual en pantalla. Pulsa **Capturar y analizar** para obtener una lectura completa.

## Cómo hacer la foto correcta

- **Mira a la cámara de frente.** Si giras la cabeza, un lado de la cara se ve más pequeño y se distorsionan todas las proporciones.
- **Mantén la barbilla recta.** Si la inclinas hacia arriba, la cara parece más corta; hacia abajo, la mandíbula parece más estrecha.
- **Recógete el pelo** para que se vean la línea del cabello, la frente y la mandíbula.
- **Usa una luz uniforme y frontal.** La luz de una ventana es ideal. Evita sombras laterales fuertes.
- **Expresión neutra y boca cerrada.** Sonreír ensancha las mejillas y cambia la mandíbula.
- **Sostén la cámara a la altura de los ojos, a un brazo de distancia.** Los selfies muy cercanos deforman la cara (la nariz parece más grande y la cara más estrecha).

## Cómo saber tu forma de cara sin foto

¿Prefieres no usar una foto? Haz el [test de forma de cara](/es/face-shape-quiz/) o mídete con una cinta métrica flexible y usa la [calculadora de forma de cara](/es/face-shape-calculator/).

## ¿Qué tan preciso es?

El detector es tan preciso como la foto. Con una foto de frente, bien iluminada y con el pelo recogido, mide tus proporciones de forma consistente. Aun así, las categorías de forma de cara tienen límites difusos. Los estilistas a menudo no se ponen de acuerdo con las caras intermedias, así que fíjate en tus dos primeros resultados. Si están muy cerca, eres una mezcla, y los consejos para ambas formas te sirven.

## Tu foto no sale de tu dispositivo

El análisis se realiza por completo en tu navegador con un modelo facial que funciona en el propio dispositivo. Tu foto nunca se sube, no se guarda y nadie la ve, y no se conserva nada al cerrar la página. Lee nuestra [política de privacidad](/privacy/) y [cómo funciona nuestro detector](/how-it-works/).`,
    faqs: [
      { q: "¿Qué forma de cara tengo?", a: "Sube una foto de frente a nuestro detector gratuito y medirá tu cara para decirte si es ovalada, redonda, cuadrada, alargada, rectangular, corazón, diamante, triangular, triángulo invertido o pera, con un porcentaje de coincidencia para cada una." },
      { q: "¿El detector de forma de cara es gratis?", a: "Sí. Es totalmente gratis y no necesitas registrarte." },
      { q: "¿Guardan mi foto?", a: "No. El análisis se realiza en tu navegador y tu foto nunca se sube." },
      { q: "¿Por qué obtuve un resultado distinto con otra foto?", a: "El ángulo de la cabeza, la distorsión del lente y la expresión cambian tus proporciones medidas. Usa una foto de frente, a un brazo de distancia y con la cara neutra. Si dos fotos no coinciden, probablemente eres una mezcla de ambas formas." },
      { q: "¿Cuántas formas de cara hay?", a: "La mayoría de los estilistas usan entre 7 y 10. Nosotros usamos 10: ovalada, redonda, cuadrada, alargada, rectangular, corazón, diamante, triangular, triángulo invertido y pera." },
      { q: "¿Cuál es la forma de cara más común?", a: "La ovalada suele describirse como la más común, seguida de la redonda, la cuadrada y la de corazón." },
      { q: "¿Puedo usarlo en el móvil?", a: "Sí. Funciona en navegadores móviles modernos en iPhone y Android, subiendo una foto o con la cámara frontal." },
    ],
    title: "Detector de forma de cara: ¿qué forma tiene mi cara? (IA)",
    description: "Descubre qué forma de cara tienes en segundos. Nuestro detector gratis con IA mide 478 puntos de tu cara en tu navegador. Tu foto no se sube.",
  },
  "face-shape-quiz": {
    name: "Test de forma de cara",
    short: "Responde 7 preguntas rápidas, sin cámara.",
    h1: "Test de forma de cara",
    intro: "Responde siete preguntas rápidas sobre tu cara mientras te miras al espejo y te diremos tu forma de cara. No necesitas foto ni cámara. Tarda alrededor de un minuto.",
    body: `## Cómo funciona el test

Cada respuesta suma puntos a las formas de cara con las que encaja. Por ejemplo, "mi mandíbula tiene ángulos marcados" suma puntos a cuadrada, rectangular, triangular y triángulo invertido, y "mi cara es claramente más larga que ancha" suma puntos a ovalada, alargada y rectangular. Gana la forma con más puntos y ves tus tres primeras.

## Consejos para responder con precisión

- Mírate de frente en un espejo con el pelo recogido.
- Traza el contorno de tu cara sobre el espejo con un marcador lavable o un labial y luego da un paso atrás. Ver la forma hace que las preguntas sean más fáciles.
- Si no te decides por una respuesta, elige la opción del medio.

## Test vs detector

El test depende de cómo juzgas tú tus propios rasgos, y eso es difícil. El [detector de forma de cara](/es/) mide tu cara directamente a partir de una foto. Usa ambos para tener más seguridad.

## Añade este test a tu web

Salones, barberías y ópticas pueden insertar este test gratis. [Obtén el código para insertarlo](#embed).`,
    faqs: [
      { q: "¿Cómo sé mi forma de cara sin una foto?", a: "Haz este test mirándote al espejo, o mide tu cara con una cinta métrica y usa la calculadora de forma de cara." },
      { q: "¿Es preciso el test de forma de cara?", a: "Es tan preciso como tus respuestas. Para un resultado medido, usa también el detector con foto." },
    ],
    title: "Test de forma de cara: ¿qué forma de cara tengo?",
    description: "Haz nuestro test gratis de forma de cara y descúbrela sin foto. Siete preguntas rápidas sobre tu frente, pómulos, mandíbula y barbilla.",
  },
  "face-shape-calculator": {
    name: "Calculadora de forma de cara",
    short: "Introduce 4 medidas tomadas con cinta métrica.",
    h1: "Calculadora de forma de cara",
    intro: "Mide tu cara con una cinta métrica flexible, introduce cuatro números y la calculadora compara tus proporciones para decirte tu forma de cara. Usa pulgadas o centímetros; solo importan las proporciones.",
    body: `## Cómo medir tu cara

1. **Frente:** mide a lo ancho de la frente en su punto más ancho, normalmente a mitad de camino entre las cejas y la línea del cabello, de un lado de la línea del cabello al otro.
2. **Pómulos:** mide a lo ancho de los pómulos desde el rabillo exterior de un ojo hasta el rabillo exterior del otro, pasando por el punto más alto de los pómulos (las "puntas" bajo los rabillos exteriores de los ojos).
3. **Mandíbula:** mide desde la punta de la barbilla hasta el ángulo de la mandíbula bajo la oreja y luego **multiplica por dos**. Nuestra calculadora lo hace por ti: solo introduce un lado.
4. **Largo de la cara:** mide desde el centro de la línea del cabello en línea recta hasta la punta de la barbilla.

## Cómo decide la calculadora

| Si… | Tu forma de cara probablemente es… |
|---|---|
| El largo es 1.5× el ancho o más, frente ≈ pómulos ≈ mandíbula | Alargada (o rectangular con mandíbula marcada) |
| Largo ≈ ancho, mejillas lo más ancho, mandíbula suave | Redonda |
| Largo ≈ ancho, todo similar, mandíbula marcada | Cuadrada |
| Pómulos lo más ancho, frente > mandíbula, largo ≈ 1.5× | Ovalada |
| Frente lo más ancho, mandíbula estrecha | Corazón (o triángulo invertido) |
| Pómulos lo más ancho, frente y mandíbula estrechas | Diamante |
| Mandíbula lo más ancho, frente estrecha | Triangular / pera |

Lee la [guía completa para medir tu cara](/blog/how-to-measure-your-face/).`,
    faqs: [
      { q: "¿Cómo calculo mi forma de cara?", a: "Mide tu frente, pómulos, mandíbula y largo de la cara, y luego compara: ¿qué parte es la más ancha y qué tan larga es tu cara en relación con su ancho? Nuestra calculadora hace la comparación por ti." },
      { q: "¿Uso pulgadas o centímetros?", a: "Cualquiera de los dos. La calculadora solo usa proporciones." },
    ],
    title: "Calculadora de forma de cara: usa tus medidas",
    description: "Mide tu frente, pómulos, mandíbula y largo de la cara con una cinta, introdúcelos y la calculadora de forma de cara te dirá cuál es la tuya.",
  },
  "eye-shape-detector": {
    name: "Detector de forma de ojos",
    short: "Almendrados, redondos, encapotados, rasgados y más.",
    h1: "Detector de forma de ojos",
    intro: "Sube una foto o usa tu cámara y mediremos qué tan abiertos están tus ojos, la inclinación de los rabillos exteriores y cuánto párpado se ve bajo la ceja, para decirte tu forma de ojos y si tus ojos están juntos, a distancia media o separados.",
    body: `## Qué mide el detector de forma de ojos

- **Apertura:** alto del ojo dividido entre su ancho. Los ojos redondos son altos en relación con su ancho; los monopárpado y almendrados son más alargados.
- **Inclinación cantal:** el ángulo desde el rabillo interior hasta el exterior. Una inclinación positiva se ve como ojos rasgados hacia arriba; una negativa, como ojos caídos.
- **Espacio del párpado:** la distancia entre el párpado superior y el centro de la ceja, en relación con el ancho del ojo. Poco espacio sugiere ojos encapotados o hundidos.
- **Separación:** la distancia entre los rabillos interiores comparada con el ancho de tus ojos.

Cada medida se compara con promedios de caras reales y cada forma recibe un porcentaje de coincidencia.

## Limitaciones

Los modelos de puntos faciales no detectan el pliegue del párpado, así que los resultados de ojos encapotados y monopárpado se deducen a partir del espacio del párpado y la apertura. Confírmalos frente a un espejo con nuestra [guía de formas de ojos](/eye-shapes/).

## Cómo hacer la foto correcta

- **Mira a la cámara de frente.** Si giras la cabeza, un lado de la cara se ve más pequeño y se distorsionan todas las proporciones.
- **Mantén la barbilla recta.** Si la inclinas hacia arriba, la cara parece más corta; hacia abajo, la mandíbula parece más estrecha.
- **Recógete el pelo** para que se vean la línea del cabello, la frente y la mandíbula.
- **Usa una luz uniforme y frontal.** La luz de una ventana es ideal. Evita sombras laterales fuertes.
- **Expresión neutra y boca cerrada.** Sonreír ensancha las mejillas y cambia la mandíbula.
- **Sostén la cámara a la altura de los ojos, a un brazo de distancia.** Los selfies muy cercanos deforman la cara (la nariz parece más grande y la cara más estrecha).

## Tu foto no sale de tu dispositivo

El análisis se realiza por completo en tu navegador con un modelo facial que funciona en el propio dispositivo. Tu foto nunca se sube, no se guarda y nadie la ve, y no se conserva nada al cerrar la página. Lee nuestra [política de privacidad](/privacy/) y [cómo funciona nuestro detector](/how-it-works/).`,
    faqs: [
      { q: "¿Cómo sé qué forma de ojos tengo?", a: "Sube una foto de frente al detector o revisa en un espejo: fíjate en el pliegue, en si se ve blanco alrededor del iris y en el ángulo de los rabillos." },
      { q: "¿Puede detectar ojos encapotados?", a: "Calcula el encapotado según cuánto espacio de párpado se ve bajo la ceja. Confírmalo en un espejo, ya que el pliegue en sí no se detecta." },
    ],
    title: "Detector de forma de ojos: test gratis con IA",
    description: "Descubre tu forma de ojos con una foto: almendrados, redondos, encapotados, monopárpado, rasgados, caídos o saltones, y su separación. Gratis.",
  },
  "nose-shape-detector": {
    name: "Detector de forma de nariz",
    short: "Griega, romana, nubia, de botón, respingada y más.",
    h1: "Detector de forma de nariz",
    intro: "Sube una foto de frente y mediremos el ancho y el largo de tu nariz, el ángulo de la punta y el perfil del puente, para asignarte la más cercana de ocho formas de nariz comunes: griega, romana, nubia, aguileña, de botón, chata, respingada y carnosa.",
    body: `## Qué mide el detector de forma de nariz

- **Ancho:** el ancho de las fosas nasales comparado con la distancia entre los rabillos interiores de los ojos.
- **Largo:** la longitud del puente a la base comparada con el largo de tu cara.
- **Ángulo de la punta:** cuánto se eleva la punta sobre la base de la nariz. Las puntas respingadas quedan más arriba.
- **Puente y proyección:** se estiman con los datos de profundidad del modelo. Una foto de frente los muestra con menos claridad, así que pesan menos en tu resultado.

## Limitaciones

Las jorobas del puente (narices romanas y aguileñas) se ven mejor de perfil. Si tu resultado es romana o aguileña, compáralo con una vista lateral usando nuestra [guía de formas de nariz](/nose-shapes/).

## Cómo hacer la foto correcta

- **Mira a la cámara de frente.** Si giras la cabeza, un lado de la cara se ve más pequeño y se distorsionan todas las proporciones.
- **Mantén la barbilla recta.** Si la inclinas hacia arriba, la cara parece más corta; hacia abajo, la mandíbula parece más estrecha.
- **Recógete el pelo** para que se vean la línea del cabello, la frente y la mandíbula.
- **Usa una luz uniforme y frontal.** La luz de una ventana es ideal. Evita sombras laterales fuertes.
- **Expresión neutra y boca cerrada.** Sonreír ensancha las mejillas y cambia la mandíbula.
- **Sostén la cámara a la altura de los ojos, a un brazo de distancia.** Los selfies muy cercanos deforman la cara (la nariz parece más grande y la cara más estrecha).

## Tu foto no sale de tu dispositivo

El análisis se realiza por completo en tu navegador con un modelo facial que funciona en el propio dispositivo. Tu foto nunca se sube, no se guarda y nadie la ve, y no se conserva nada al cerrar la página. Lee nuestra [política de privacidad](/privacy/) y [cómo funciona nuestro detector](/how-it-works/).`,
    faqs: [
      { q: "¿Cómo sé qué forma de nariz tengo?", a: "Usa el detector con una foto de frente y luego mira tu perfil en un espejo para ver si el puente tiene joroba o curva hacia dentro." },
      { q: "¿Qué formas de nariz existen?", a: "Las más comunes son la griega, romana, nubia, aguileña, de botón, chata, respingada, carnosa y con joroba." },
    ],
    title: "Detector de forma de nariz: ¿cómo es mi nariz?",
    description: "Descubre tu forma de nariz con una foto: griega, romana, nubia, aguileña, de botón, chata, respingada o carnosa. Mide ancho, largo y punta.",
  },
  "lip-shape-analyzer": {
    name: "Analizador de forma de labios",
    short: "Gruesos, finos, corazón, arco, superior marcado y más.",
    h1: "Analizador de forma de labios",
    intro: "Sube una foto con los labios suavemente cerrados y mediremos el volumen de tus labios, la proporción entre el labio superior y el inferior, el ancho de la boca, el arco de Cupido y el ángulo de las comisuras, para decirte tu forma de labios.",
    body: `## Qué mide el analizador de forma de labios

- **Volumen:** la altura total de los labios comparada con el ancho de la boca.
- **Proporción superior-inferior:** en la mayoría de las personas, el labio inferior mide unas 1.5–1.7× la altura del superior.
- **Ancho:** el ancho de la boca comparado con el ancho de la nariz (en promedio, unas 1.4–1.6×).
- **Arco de Cupido:** qué tan profunda es la curva entre los dos picos del labio superior.
- **Comisuras:** si las comisuras de la boca quedan por encima o por debajo de su centro.

Mantén los labios cerrados y relajados. Sonreír o hacer pucheros cambia todas las medidas.

## Cómo hacer la foto correcta

- **Mira a la cámara de frente.** Si giras la cabeza, un lado de la cara se ve más pequeño y se distorsionan todas las proporciones.
- **Mantén la barbilla recta.** Si la inclinas hacia arriba, la cara parece más corta; hacia abajo, la mandíbula parece más estrecha.
- **Recógete el pelo** para que se vean la línea del cabello, la frente y la mandíbula.
- **Usa una luz uniforme y frontal.** La luz de una ventana es ideal. Evita sombras laterales fuertes.
- **Expresión neutra y boca cerrada.** Sonreír ensancha las mejillas y cambia la mandíbula.
- **Sostén la cámara a la altura de los ojos, a un brazo de distancia.** Los selfies muy cercanos deforman la cara (la nariz parece más grande y la cara más estrecha).

## Tu foto no sale de tu dispositivo

El análisis se realiza por completo en tu navegador con un modelo facial que funciona en el propio dispositivo. Tu foto nunca se sube, no se guarda y nadie la ve, y no se conserva nada al cerrar la página. Lee nuestra [política de privacidad](/privacy/) y [cómo funciona nuestro detector](/how-it-works/).`,
    faqs: [
      { q: "¿Cuál es la proporción ideal de los labios?", a: "Se suele considerar ideal un labio inferior de unas 1.6× la altura del labio superior." },
      { q: "¿Debo sonreír en la foto?", a: "No. Mantén los labios cerrados y relajados." },
    ],
    title: "Analizador de forma de labios: ¿cómo son los míos?",
    description: "Descubre tu forma de labios con una foto: gruesos, finos, corazón, arco, superior o inferior marcado, anchos, redondos o caídos. Gratis.",
  },
  "face-symmetry-test": {
    name: "Test de simetría facial",
    short: "Mide qué tan simétrica es tu cara.",
    h1: "Test de simetría facial",
    intro: "Sube una foto de frente y encontraremos la línea media de tu cara, reflejaremos 37 pares de puntos equivalentes (rabillos de los ojos, puntos de las cejas, fosas nasales, comisuras, puntos de la mandíbula) a través de ella y mediremos cuánto coinciden ambos lados. Obtienes una puntuación de simetría general y una para cada rasgo.",
    body: `## Cómo medimos la simetría facial

1. Trazamos una línea que pasa por 21 puntos del centro de tu cara (frente, puente de la nariz, punta de la nariz, labios, barbilla).
2. Para cada par de puntos equivalentes, reflejamos el punto del lado derecho a través de esa línea y medimos qué tan lejos queda de su pareja del lado izquierdo.
3. Las distancias se miden en unidades de tu distancia interpupilar, así que la puntuación no depende del tamaño de la foto.
4. Menor distancia promedio = mayor puntuación.

## ¿Cuál es una puntuación de simetría normal?

Ninguna cara es perfectamente simétrica. En fotos de frente, la mayoría de las caras obtienen entre 80 y 92. La puntuación baja mucho si giras la cabeza aunque sea un poco, así que una puntuación baja suele significar que la foto se tomó en ángulo. Vuelve a intentarlo mirando directamente a la cámara.

## ¿La simetría es atractiva?

Los estudios han encontrado una relación modesta entre la simetría y el atractivo percibido, pero es solo un factor entre muchos, y las pequeñas asimetrías hacen que las caras se vean naturales. Prueba nuestro [test de atractivo](/es/attractiveness-test/) para obtener una puntuación más amplia y solo por diversión.

## Cómo hacer la foto correcta

- **Mira a la cámara de frente.** Si giras la cabeza, un lado de la cara se ve más pequeño y se distorsionan todas las proporciones.
- **Mantén la barbilla recta.** Si la inclinas hacia arriba, la cara parece más corta; hacia abajo, la mandíbula parece más estrecha.
- **Recógete el pelo** para que se vean la línea del cabello, la frente y la mandíbula.
- **Usa una luz uniforme y frontal.** La luz de una ventana es ideal. Evita sombras laterales fuertes.
- **Expresión neutra y boca cerrada.** Sonreír ensancha las mejillas y cambia la mandíbula.
- **Sostén la cámara a la altura de los ojos, a un brazo de distancia.** Los selfies muy cercanos deforman la cara (la nariz parece más grande y la cara más estrecha).

## Tu foto no sale de tu dispositivo

El análisis se realiza por completo en tu navegador con un modelo facial que funciona en el propio dispositivo. Tu foto nunca se sube, no se guarda y nadie la ve, y no se conserva nada al cerrar la página. Lee nuestra [política de privacidad](/privacy/) y [cómo funciona nuestro detector](/how-it-works/).`,
    faqs: [
      { q: "¿Hay alguien con la cara perfectamente simétrica?", a: "No. Toda cara tiene pequeñas diferencias entre su lado izquierdo y el derecho." },
      { q: "¿Por qué mi puntuación de simetría es baja?", a: "Normalmente porque tenías la cabeza girada o inclinada. Mira a la cámara de frente con una expresión neutra." },
    ],
    title: "Test de simetría facial: ¿qué tan simétrica es?",
    description: "Mide la simetría de tu cara con una foto. Reflejamos 37 pares de puntos sobre tu línea media y puntuamos ojos, cejas, nariz, boca y mandíbula.",
  },
  "golden-ratio-face": {
    name: "Calculadora de proporción áurea facial",
    short: "Compara tus proporciones con 1.618.",
    h1: "Calculadora de proporción áurea facial",
    intro: "A menudo se dice que la proporción áurea, de aproximadamente 1.618, describe las proporciones faciales ideales. Sube una foto y mediremos siete proporciones clásicas (largo de la cara respecto al ancho, ancho de la boca respecto a la nariz, tercios faciales, la regla de los quintos y más) y te mostraremos qué tan cerca está cada una de su ideal.",
    body: `## Las proporciones que medimos

| Proporción | Ideal |
|---|---|
| Largo de la cara ÷ ancho de la cara | 1.618 |
| Ancho de la boca ÷ ancho de la nariz | 1.618 |
| Tercio medio ÷ tercio inferior | 1 |
| Tercio superior ÷ tercio medio | 1 |
| Labios a barbilla ÷ nariz a labios | 2 |
| Separación de los ojos ÷ ancho del ojo | 1 |
| Ancho de la cara ÷ ancho del ojo | 5 |

## Una nota sobre la proporción áurea

La proporción áurea es una idea popular, pero la evidencia científica de que define la belleza es débil. En los estudios sobre atractivo, las caras promedio suelen puntuar mejor que las "áureas", y los ideales varían entre culturas. Toma tu puntuación como una forma divertida de ver tus proporciones, no como un veredicto.

El modelo facial no ve la línea del cabello, así que el tercio superior es una estimación.

## Cómo hacer la foto correcta

- **Mira a la cámara de frente.** Si giras la cabeza, un lado de la cara se ve más pequeño y se distorsionan todas las proporciones.
- **Mantén la barbilla recta.** Si la inclinas hacia arriba, la cara parece más corta; hacia abajo, la mandíbula parece más estrecha.
- **Recógete el pelo** para que se vean la línea del cabello, la frente y la mandíbula.
- **Usa una luz uniforme y frontal.** La luz de una ventana es ideal. Evita sombras laterales fuertes.
- **Expresión neutra y boca cerrada.** Sonreír ensancha las mejillas y cambia la mandíbula.
- **Sostén la cámara a la altura de los ojos, a un brazo de distancia.** Los selfies muy cercanos deforman la cara (la nariz parece más grande y la cara más estrecha).

## Tu foto no sale de tu dispositivo

El análisis se realiza por completo en tu navegador con un modelo facial que funciona en el propio dispositivo. Tu foto nunca se sube, no se guarda y nadie la ve, y no se conserva nada al cerrar la página. Lee nuestra [política de privacidad](/privacy/) y [cómo funciona nuestro detector](/how-it-works/).`,
    faqs: [
      { q: "¿Qué es la proporción áurea de la cara?", a: "La idea de que las proporciones faciales ideales siguen el número 1.618, por ejemplo, una cara 1.618× más larga que ancha." },
      { q: "¿Cuál es una buena puntuación de proporción áurea?", a: "La mayoría de las personas obtienen entre 55 y 80. Es solo por diversión; no hay evidencia sólida de que la proporción áurea defina la belleza." },
    ],
    title: "Proporción áurea facial: calculadora gratis",
    description: "¿Qué tan cerca está tu cara de la proporción áurea (1.618)? Nuestra calculadora gratis mide 7 proporciones faciales con una foto.",
  },
  "attractiveness-test": {
    name: "Test de atractivo",
    short: "Una puntuación facial del 1 al 10, solo por diversión.",
    h1: "Test de atractivo",
    intro: "Esta es una puntuación facial solo por diversión. Combinamos cinco aspectos medibles que la investigación y la cultura popular asocian con el atractivo (simetría, proporciones áureas, tercios faciales equilibrados, inclinación cantal y definición de la mandíbula) en una puntuación sobre 10. No puede medir el encanto, el estilo, la expresión ni nada de lo que realmente hace que las personas se atraigan entre sí.",
    body: `## Qué compone tu puntuación

| Factor | Peso | Qué mide |
|---|---|---|
| Simetría | 30% | Cuánto coinciden tu lado izquierdo y tu lado derecho |
| Proporción áurea | 25% | Siete proporciones clásicas frente a sus ideales |
| Tercios faciales | 15% | Equilibrio entre la parte media e inferior de la cara |
| Inclinación cantal | 15% | El ángulo de los rabillos de tus ojos |
| Definición de la mandíbula | 15% | Ángulo y ancho de la mandíbula, y barbilla |

## Lee esto, por favor

El atractivo es personal, cultural y depende sobre todo de cosas que una foto no puede captar. Una puntuación de una herramienta de medición facial no dice nada sobre tu valor. Solo la iluminación, el ángulo de la cámara y la distorsión del lente pueden mover tu puntuación más de un punto. Diviértete con ella y no te la tomes en serio.

## Cómo hacer la foto correcta

- **Mira a la cámara de frente.** Si giras la cabeza, un lado de la cara se ve más pequeño y se distorsionan todas las proporciones.
- **Mantén la barbilla recta.** Si la inclinas hacia arriba, la cara parece más corta; hacia abajo, la mandíbula parece más estrecha.
- **Recógete el pelo** para que se vean la línea del cabello, la frente y la mandíbula.
- **Usa una luz uniforme y frontal.** La luz de una ventana es ideal. Evita sombras laterales fuertes.
- **Expresión neutra y boca cerrada.** Sonreír ensancha las mejillas y cambia la mandíbula.
- **Sostén la cámara a la altura de los ojos, a un brazo de distancia.** Los selfies muy cercanos deforman la cara (la nariz parece más grande y la cara más estrecha).

## Tu foto no sale de tu dispositivo

El análisis se realiza por completo en tu navegador con un modelo facial que funciona en el propio dispositivo. Tu foto nunca se sube, no se guarda y nadie la ve, y no se conserva nada al cerrar la página. Lee nuestra [política de privacidad](/privacy/) y [cómo funciona nuestro detector](/how-it-works/).`,
    faqs: [
      { q: "¿Es preciso el test de atractivo?", a: "Ninguna herramienta de puntuación facial puede medir el atractivo. Esta mide algunas proporciones asociadas con él, por diversión." },
      { q: "¿Por qué cambió mi puntuación entre fotos?", a: "El ángulo de la cabeza, la iluminación, la expresión y la distorsión del lente cambian las medidas." },
    ],
    title: "Test de atractivo: puntúa tu cara (IA gratis)",
    description: "Puntuación facial gratis con IA, solo por diversión, según simetría, proporción áurea, tercios, inclinación cantal y mandíbula.",
  },
  "how-old-do-i-look": {
    name: "¿Cuántos años aparento?",
    short: "Estimación de edad con IA a partir de tu foto.",
    h1: "¿Cuántos años aparento?",
    intro: "Sube un selfie o usa tu cámara y un modelo de IA que funciona en tu dispositivo calculará cuántos años aparentas. Es solo por diversión: estos modelos suelen equivocarse por varios años, y la iluminación, el maquillaje, la expresión y la calidad de la imagen influyen en el resultado.",
    body: `## Cómo funciona el calculador de edad

Usamos un modelo de estimación de edad de código abierto (GEAR, a través de la biblioteca Human) que funciona en tu navegador. Se entrenó con grandes conjuntos de caras etiquetadas con su edad y predice la edad a la que más se parece una cara. Tu foto nunca se sube.

## Por qué el resultado puede fallar

- **Iluminación:** la luz dura resalta la textura y puede sumar años; la luz suave los quita.
- **Expresión:** sonreír crea líneas que algunos modelos interpretan como edad.
- **Calidad de imagen:** las fotos borrosas o con muchos filtros confunden al modelo.
- **Sesgo:** los modelos de edad son menos precisos con grupos poco representados en sus datos de entrenamiento.

Prueba con varias fotos y fíjate en el rango en lugar de en un solo número.

## Tu foto no sale de tu dispositivo

El análisis se realiza por completo en tu navegador con un modelo facial que funciona en el propio dispositivo. Tu foto nunca se sube, no se guarda y nadie la ve, y no se conserva nada al cerrar la página. Lee nuestra [política de privacidad](/privacy/) y [cómo funciona nuestro detector](/how-it-works/).`,
    faqs: [
      { q: "¿Qué tan preciso es el calculador de edad?", a: "En buenas condiciones, espera un margen de unos 5–8 años. Es solo por diversión." },
      { q: "¿Guardan mi foto?", a: "No. El modelo funciona en tu navegador y no se sube nada." },
    ],
    title: "¿Cuántos años aparento? Calculador de edad con IA",
    description: "Sube una foto y nuestra IA adivina cuántos años aparentas. Funciona en privado en tu navegador con un modelo de estimación de edad local.",
  },
  "head-shape-detector": {
    name: "Detector de forma de cabeza",
    short: "Redonda, ovalada, larga, plana por detrás y más.",
    h1: "Detector de forma de cabeza",
    intro: "La forma de tu cabeza es el contorno de todo tu cráneo, algo que una foto de frente no puede mostrar del todo. Responde cinco preguntas con ayuda de un espejo y una foto de perfil de tu cabeza, y te diremos tu forma de cabeza y los cortes de pelo que mejor le quedan.",
    body: `## ¿Por qué un test en lugar de una foto?

La parte de atrás y la parte superior de la cabeza son las que más importan para su forma, y quedan ocultas por el pelo e invisibles en una foto de frente. Una revisión guiada con una foto de perfil es más fiable.

## Forma de cabeza y cortes de pelo

- **Cabeza plana por detrás:** deja largo en la coronilla y evita los degradados al ras en la nuca.
- **Cabeza larga:** evita el volumen arriba.
- **Cabeza redonda u ovalada:** los cortes al rape y los cortes cortos quedan bien.

Mira todas las [formas de cabeza](/head-shapes/).`,
    faqs: [
      { q: "¿Cómo sé qué forma de cabeza tengo?", a: "Alísate el pelo hacia abajo y hazte una foto de perfil. Comprueba si la parte de atrás de tu cabeza se curva hacia fuera o cae recta, y compara el ancho con el largo." },
    ],
    title: "Detector de forma de cabeza: ¿cómo es la mía?",
    description: "Descubre tu forma de cabeza (redonda, ovalada, larga, cuadrada, plana por detrás u ovoide) con un test guiado y los cortes que te quedan.",
  },
  "jawline-analyzer": {
    name: "Analizador de mandíbula",
    short: "Mide el ángulo y ancho de la mandíbula y la barbilla.",
    h1: "Analizador de mandíbula",
    intro: "Sube una foto de frente y mediremos el ángulo de tu mandíbula, el ancho de la mandíbula en relación con los pómulos, y el ancho y largo de tu barbilla. Obtienes tu tipo de mandíbula y una puntuación de definición.",
    body: `## Qué mide el analizador de mandíbula

- **Ángulo mandibular:** el ángulo en la esquina de la mandíbula entre la mejilla y la barbilla. Los ángulos más pequeños se ven más marcados.
- **Ancho de la mandíbula:** de una esquina de la mandíbula a la otra, en relación con el ancho de los pómulos.
- **Barbilla:** su ancho y su largo por debajo del labio inferior.

## Qué cambia cómo se ve tu mandíbula

La grasa corporal, la postura, la forma de la barba y la iluminación cambian lo definida que se ve tu mandíbula. Bajar la barbilla la hace parecer más suave; el ángulo de la cabeza influye mucho.

Mira todos los [tipos de mandíbula](/jawline-shapes/).

## Cómo hacer la foto correcta

- **Mira a la cámara de frente.** Si giras la cabeza, un lado de la cara se ve más pequeño y se distorsionan todas las proporciones.
- **Mantén la barbilla recta.** Si la inclinas hacia arriba, la cara parece más corta; hacia abajo, la mandíbula parece más estrecha.
- **Recógete el pelo** para que se vean la línea del cabello, la frente y la mandíbula.
- **Usa una luz uniforme y frontal.** La luz de una ventana es ideal. Evita sombras laterales fuertes.
- **Expresión neutra y boca cerrada.** Sonreír ensancha las mejillas y cambia la mandíbula.
- **Sostén la cámara a la altura de los ojos, a un brazo de distancia.** Los selfies muy cercanos deforman la cara (la nariz parece más grande y la cara más estrecha).

## Tu foto no sale de tu dispositivo

El análisis se realiza por completo en tu navegador con un modelo facial que funciona en el propio dispositivo. Tu foto nunca se sube, no se guarda y nadie la ve, y no se conserva nada al cerrar la página. Lee nuestra [política de privacidad](/privacy/) y [cómo funciona nuestro detector](/how-it-works/).`,
    faqs: [
      { q: "¿Cuál es un buen ángulo mandibular?", a: "Un ángulo de unos 120–130° en la esquina de la mandíbula se ve definido; los ángulos mayores se ven más suaves." },
    ],
    title: "Analizador de mandíbula: mide tu mandíbula gratis",
    description: "Mide el ángulo y ancho de tu mandíbula y tu barbilla con una foto. Descubre tu tipo (cuadrada, redondeada, en V, puntiaguda, ancha o estrecha).",
  },
  "skin-undertone-test": {
    name: "Test de subtono de piel",
    short: "¿Cálido, frío o neutro? Test + foto.",
    h1: "Test de subtono de piel",
    intro: "Tu subtono es el color sutil que hay bajo la superficie de tu piel: cálido (amarillo, melocotón, dorado), frío (rosado, rojizo, azulado) o neutro (una mezcla). Responde seis preguntas y, si quieres, añade una foto para obtener una lectura del color de tu piel y descubrir cuál es el tuyo.",
    body: `## Las pruebas clásicas de subtono

- **Prueba de las venas:** mira las venas de la parte interior de tu muñeca con luz natural. Si se ven verdosas, sugiere un subtono cálido; azules o moradas, frío; si cuesta distinguirlo, neutro.
- **Prueba de las joyas:** si el dorado te favorece más, probablemente eres cálido; si es la plata, frío.
- **Prueba del blanco:** si el blanco brillante te hace ver apagado y el crema te queda mejor, probablemente eres cálido.
- **Prueba del sol:** si te bronceas con facilidad, es más probable que seas cálido; si te quemas, frío.

## Por qué la foto es solo una pista

El balance de blancos de la cámara y la luz de la habitación cambian mucho el color de la piel en las fotos. Tomamos muestras de tus mejillas y frente y leemos el tono, pero le damos menos peso que a tus respuestas. Haz la foto con luz natural cerca de una ventana para obtener la mejor lectura.

## Subtono vs tono de piel

El tono de piel es lo clara u oscura que es tu piel. El subtono es el matiz que hay debajo. Dos personas con el mismo tono de piel pueden tener subtonos distintos. Después, descubre tu [paleta de colores por estación](/es/color-analysis/) o tu [tono de base de maquillaje](/es/foundation-shade-finder/).`,
    faqs: [
      { q: "¿Cómo sé si mi subtono es cálido o frío?", a: "Mira las venas de tu muñeca con luz natural, compara joyas doradas y plateadas, y fíjate en si te bronceas o te quemas. Nuestro test combina todo esto." },
      { q: "¿Qué es un subtono oliva?", a: "El oliva es un subtono entre neutro y cálido con un matiz verdoso, común en pieles mediterráneas, de Oriente Medio, del sur de Asia y latinoamericanas." },
    ],
    title: "Test de subtono de piel: ¿cálido, frío o neutro?",
    description: "Descubre tu subtono de piel (cálido, frío, neutro u oliva) con un test rápido y una foto opcional. Aprende qué colores y joyas te favorecen.",
  },
  "color-analysis": {
    name: "Análisis de color por estaciones",
    short: "¿Primavera, Verano, Otoño o Invierno?",
    h1: "Análisis de color por estaciones",
    intro: "El análisis de color por estaciones clasifica tu colorido natural en una de cuatro estaciones (Primavera, Verano, Otoño, Invierno) según tres aspectos: subtono (cálido o frío), profundidad (claro u oscuro) y contraste entre tu pelo, tu piel y tus ojos. Responde ocho preguntas para descubrir tu estación y subestación, con una paleta de colores para vestir.",
    body: `## Las cuatro estaciones

| Estación | Subtono | Profundidad | Contraste | Mejores colores |
|---|---|---|---|---|
| Primavera | Cálido | Claro a medio | Medio a alto | Tonos vivos, claros y cálidos: coral, melocotón, verde cálido |
| Verano | Frío | Claro a medio | Bajo a medio | Suaves, fríos y apagados: rosa empolvado, lavanda, azul suave |
| Otoño | Cálido | Medio a oscuro | Bajo a medio | Intensos, cálidos y apagados: óxido, verde oliva, mostaza |
| Invierno | Frío | Oscuro o alto contraste | Alto | Claros, fríos y saturados: rojo puro, esmeralda, negro, blanco |

## Subestaciones

Cada estación tiene tres subestaciones (por ejemplo, Primavera Clara, Primavera Cálida y Primavera Brillante) según qué cualidad predomina. Así se obtiene el popular sistema de 12 estaciones.

## Cómo obtener el resultado más preciso

Responde según tu color de pelo natural, sin maquillaje y con luz natural. Una sesión profesional de análisis con telas en persona es la referencia; este test te acerca bastante.`,
    faqs: [
      { q: "¿Qué estación soy en el análisis de color?", a: "Haz el test: puntúa tu subtono, profundidad y contraste y los asigna a Primavera, Verano, Otoño o Invierno, además de una subestación." },
      { q: "¿Puede cambiar mi estación?", a: "Tu colorido natural es estable, pero el pelo teñido o el bronceado pueden cambiar durante un tiempo qué colores te quedan mejor." },
    ],
    title: "Análisis de color: ¿qué estación soy? (test)",
    description: "Descubre tu paleta (Primavera, Verano, Otoño o Invierno y tu subestación) con un test de análisis de color: subtono, profundidad, contraste.",
  },
  "foundation-shade-finder": {
    name: "Buscador de tono de base",
    short: "Descubre tu código de profundidad + subtono.",
    h1: "Buscador de tono de base",
    intro: "Tu tono de base de maquillaje depende de dos cosas: la profundidad (lo clara u oscura que es tu piel) y el subtono (cálido, frío, neutro u oliva). Responde cinco preguntas y te diremos el rango de profundidad y el código de subtono que debes buscar en cualquier marca.",
    body: `## Cómo funcionan los códigos de tono de base

La mayoría de las marcas etiquetan los tonos con un número para la profundidad y una letra para el subtono:

- **W / Y / G** = cálido (amarillo o dorado)
- **C / P / R** = frío (rosado o rojizo)
- **N** = neutro
- **O** = oliva

Los números más bajos suelen ser más claros. Un "120 N" es un tono claro neutro; un "450 W" es un tono oscuro cálido.

## Cómo probar un tono

Aplica dos o tres tonos en la línea de la mandíbula, no en la mano, y revísalos con luz natural. El tono correcto desaparece en tu piel y coincide con tu cuello.`,
    faqs: [
      { q: "¿Cómo encuentro mi tono de base?", a: "Averigua tu profundidad y tu subtono, y luego prueba tonos en la línea de la mandíbula con luz natural." },
      { q: "¿La base debe coincidir con la cara o con el cuello?", a: "Con la línea de la mandíbula, para que la cara y el cuello se fundan." },
    ],
    title: "Buscador de tono de base: encuentra el tuyo",
    description: "Encuentra tu tono de base según tu profundidad y subtono con un test rápido. Aprende a leer los códigos (W, C, N, O) y a probarlo.",
  },
  "kibbe-body-type-test": {
    name: "Test de tipo de cuerpo Kibbe",
    short: "Descubre tu tipo Kibbe en 12 preguntas.",
    h1: "Test de tipo de cuerpo Kibbe",
    intro: "El sistema Kibbe describe tu cuerpo y tu cara como un equilibrio entre yang (largo, afilado, anguloso) y yin (suave, redondeado, pequeño). Responde 12 preguntas sobre tu estatura, estructura ósea, cuerpo y rasgos faciales, y puntuaremos tu yin y tu yang para sugerirte tu tipo Kibbe.",
    body: `## Cómo funciona el test Kibbe

Cada pregunta tiene respuestas que van de muy yang a muy yin. Tus respuestas forman dos puntuaciones:

- **Equilibrio yin–yang:** afilado y largo frente a suave y redondeado.
- **Anchura y robustez:** lo que separa a los Naturales (anchos, robustos) de los Dramáticos (estrechos, afilados), y a los Gamines (compactos, mixtos) de los Románticos (suaves, con curvas).

La combinación apunta a uno de los 13 tipos. Se muestran tus tres primeros porque muchas personas están entre dos tipos.

## Consejos para responder con precisión

Los tipos Kibbe se basan en la estructura ósea y los rasgos naturales, no en el peso, la forma física ni el estilo. Responde según tu complexión natural. La opinión de un amigo puede ayudar, porque es difícil juzgarse a uno mismo.

Mira los [13 tipos de cuerpo Kibbe](/kibbe-body-types/).`,
    faqs: [
      { q: "¿Cuál es mi tipo de cuerpo Kibbe?", a: "Haz el test: puntúa tu equilibrio entre yin y yang y te sugiere tu tipo." },
      { q: "¿Kibbe es lo mismo que la forma del cuerpo?", a: "No. Kibbe analiza la estructura ósea y los rasgos en conjunto, no las proporciones de cadera y cintura." },
    ],
    title: "Test Kibbe: descubre tu tipo de cuerpo gratis",
    description: "Haz nuestro test Kibbe gratis y descubre tu tipo de cuerpo. 12 preguntas sobre tus huesos, cuerpo y cara para saber cuál de los 13 tipos eres.",
  },
  "canthal-tilt-calculator": {
    name: "Calculadora de inclinación cantal",
    short: "Mide la inclinación de tus ojos en grados.",
    h1: "Calculadora de inclinación cantal",
    intro: "La inclinación cantal es el ángulo entre el rabillo interior y el exterior del ojo. Sube una foto de frente y la mediremos en grados para cada ojo, tras nivelar tu cabeza, para decirte si tu inclinación es positiva, neutra o negativa.",
    body: `## ¿Qué es la inclinación cantal?

Traza una línea desde el rabillo interior del ojo (canto medial) hasta el rabillo exterior (canto lateral). El ángulo de esa línea respecto a la horizontal es tu inclinación cantal.

- **Positiva (más de unos 4°):** el rabillo exterior está más alto. Los ojos se ven rasgados hacia arriba o de "ojos de gato".
- **Neutra (0–4°):** los rabillos están más o menos a la misma altura.
- **Negativa (menos de 0°):** el rabillo exterior está más bajo. Los ojos se ven caídos.

El promedio en nuestras fotos de calibración fue de unos +4°.

## Por qué primero nivelamos tu cabeza

Una inclinación de la cabeza de solo 3° cambia la lectura en 3°. Rotamos tus puntos faciales para que tus pupilas queden niveladas antes de medir, pero una foto de frente sigue siendo lo mejor.

## Tu foto no sale de tu dispositivo

El análisis se realiza por completo en tu navegador con un modelo facial que funciona en el propio dispositivo. Tu foto nunca se sube, no se guarda y nadie la ve, y no se conserva nada al cerrar la página. Lee nuestra [política de privacidad](/privacy/) y [cómo funciona nuestro detector](/how-it-works/).`,
    faqs: [
      { q: "¿Cuál es una inclinación cantal normal?", a: "La mayoría de las personas tienen una inclinación ligeramente positiva, de unos 2–6°." },
      { q: "¿Puede cambiar la inclinación cantal?", a: "Cambia un poco con la edad, a medida que la piel y los tejidos alrededor de los ojos se aflojan." },
    ],
    title: "Inclinación cantal: ¿positiva, neutra o negativa?",
    description: "Mide tu inclinación cantal en grados con una foto. Descubre si tus ojos tienen una inclinación cantal positiva, neutra o negativa, en cada ojo.",
  },
  "facial-proportions-calculator": {
    name: "Calculadora de proporciones faciales",
    short: "Tercios faciales y la regla de los quintos.",
    h1: "Calculadora de proporciones faciales",
    intro: "Artistas y cirujanos describen las caras con dos reglas sencillas. La **regla de los tercios**: de la línea del cabello a las cejas, de las cejas a la nariz y de la nariz a la barbilla son aproximadamente iguales. La **regla de los quintos**: la cara mide unos cinco anchos de ojo. Sube una foto para ver cómo se ajusta tu cara a ambas.",
    body: `## Tercios faciales

| Tercio | Desde | Hasta |
|---|---|---|
| Superior | Línea del cabello | Entrecejo (glabela) |
| Medio | Entrecejo | Base de la nariz |
| Inferior | Base de la nariz | Barbilla |

Dentro del tercio inferior, lo ideal es que la distancia de la nariz a los labios sea la mitad de la distancia de los labios a la barbilla.

## Quintos faciales

Divide la cara verticalmente en cinco partes iguales: cada ojo ocupa un quinto, el espacio entre los ojos es un quinto y el espacio desde cada rabillo exterior hasta el lado de la cara es un quinto.

El modelo no ve la línea del cabello, así que tu tercio superior es una estimación.

## Tu foto no sale de tu dispositivo

El análisis se realiza por completo en tu navegador con un modelo facial que funciona en el propio dispositivo. Tu foto nunca se sube, no se guarda y nadie la ve, y no se conserva nada al cerrar la página. Lee nuestra [política de privacidad](/privacy/) y [cómo funciona nuestro detector](/how-it-works/).`,
    faqs: [
      { q: "¿Cuáles son las proporciones faciales ideales?", a: "Unos tercios faciales iguales y una cara de unos cinco anchos de ojo son pautas artísticas clásicas. Las caras reales varían mucho." },
    ],
    title: "Proporciones faciales: calculadora de tercios",
    description: "Calculadora de proporciones faciales: mide tus tercios y quintos con una foto y compara la parte superior, media e inferior de tu cara.",
  },
  "face-comparison": {
    name: "Comparador de caras",
    short: "¿Qué tan parecidas son dos caras?",
    h1: "Comparador de caras",
    intro: "Sube dos fotos y compararemos la geometría de las dos caras (la posición de más de 70 puntos clave tras eliminar el tamaño y la rotación) para darte una puntuación de similitud, además de ambas formas de cara lado a lado.",
    body: `## Cómo funciona la comparación de caras

Tomamos puntos equivalentes de ambas caras, eliminamos las diferencias de posición, tamaño y rotación (una técnica llamada alineamiento de Procrustes) y medimos cuánto se diferencian las formas resultantes. Formas más cercanas = mayor similitud.

## Qué es y qué no es

Esto compara la **forma y las proporciones** de la cara, no la identidad. No es reconocimiento facial y no puede saber si dos fotos muestran a la misma persona. Es una forma divertida de comparar el parecido familiar o ver si tú y un amigo tienen la misma forma de cara.

## Tu foto no sale de tu dispositivo

El análisis se realiza por completo en tu navegador con un modelo facial que funciona en el propio dispositivo. Tu foto nunca se sube, no se guarda y nadie la ve, y no se conserva nada al cerrar la página. Lee nuestra [política de privacidad](/privacy/) y [cómo funciona nuestro detector](/how-it-works/).`,
    faqs: [
      { q: "¿Esto es reconocimiento facial?", a: "No. Solo compara la geometría y las proporciones, y no puede identificar a personas." },
    ],
    title: "Comparador de caras: ¿qué tan parecidas son?",
    description: "Compara dos caras y obtén una puntuación de similitud por su geometría. ¿Tienen hermanos, padres e hijos o amigos formas de cara parecidas?",
  },
};
