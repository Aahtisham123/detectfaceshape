import type { Dict } from "../translate";
import type { LocaleContent } from "../types";

export const hub: LocaleContent["hub"] = {
  title: "Formatos de rosto: tabela dos 10 tipos",
  description:
    "Os 10 formatos de rosto em uma tabela: oval, redondo, quadrado, oblongo, retangular, coração, diamante, triangular, triângulo invertido e pera.",
  h1: "Formatos de rosto: os 10 tipos explicados",
  intro:
    "Existem 10 formatos de rosto principais: oval, redondo, quadrado, oblongo, retangular, coração, diamante, triangular, triângulo invertido e pera. O formato do seu rosto é definido por três larguras (testa, maçãs do rosto e mandíbula), pelo comprimento do rosto e pelo seu maxilar ser anguloso ou suave. A maioria das pessoas é uma mistura de dois formatos.",
  body: `## Tabela de formatos de rosto

| Formato | Comprimento x largura | Parte mais larga | Mandíbula | Queixo |
|---|---|---|---|---|
| Oval | ~1,5× | Maçãs do rosto | Suave, afinando | Arredondado |
| Redondo | ~1× | Bochechas | Suave, larga | Curto, arredondado |
| Quadrado | ~1–1,3× | Uniforme | Marcada, larga | Largo, reto |
| Oblongo | ~1,7×+ | Uniforme | Arredondada | Pode ser longo |
| Retangular | ~1,6×+ | Uniforme | Marcada | Largo |
| Coração | ~1,3–1,5× | Testa | Estreita | Pontudo |
| Diamante | ~1,4–1,6× | Maçãs do rosto | Estreita | Pontudo |
| Triangular | ~1,2–1,5× | Mandíbula | Larga, angulosa | Largo |
| Triângulo invertido | ~1,3–1,5× | Testa | Estreita, angulosa | Definido |
| Pera | ~1,1–1,4× | Mandíbula | Larga, suave | Arredondado |

## Como descobrir o formato do seu rosto

Existem três maneiras, da mais objetiva para a menos objetiva:

1. **Use uma foto.** Nosso [detector de formato de rosto](/pt/) mede suas proporções a partir de uma foto de frente em segundos. Sua foto nunca sai do seu aparelho.
2. **Meça com uma fita métrica.** Meça a testa, as maçãs do rosto, a mandíbula e o comprimento do rosto e depois use a [calculadora de formato de rosto](/pt/face-shape-calculator/). Nosso [guia para medir o rosto](/blog/how-to-measure-your-face/) mostra exatamente onde medir.
3. **Contorne no espelho.** Prenda o cabelo para trás, fique a um braço de distância do espelho e contorne o rosto com um marcador lavável. Depois faça o [quiz de formato de rosto](/pt/face-shape-quiz/).

## As três perguntas que definem o seu formato

- **Qual é o comprimento do rosto em relação à largura?** Quase igual indica redondo ou quadrado; claramente mais longo indica oblongo ou retangular; um meio-termo indica oval, coração ou diamante.
- **Qual parte é a mais larga?** Testa (coração, triângulo invertido), maçãs do rosto (oval, diamante, redondo), mandíbula (triangular, pera) ou tudo uniforme (quadrado, retangular, oblongo).
- **Sua mandíbula é angulosa ou suave?** Os ângulos diferenciam o quadrado do redondo, o retangular do oblongo e o triangular do pera.

## Formatos de rosto que costumam ser confundidos

- [Oval x oblongo](/blog/oval-vs-oblong-face-shape/): o oblongo é mais longo e tem as laterais mais retas.
- [Retangular x oblongo](/blog/rectangle-vs-oblong-face-shape/): o retangular tem a mandíbula marcada.
- [Coração x diamante](/blog/heart-vs-diamond-face-shape/): o coração tem a testa larga; a do diamante é estreita.
- [Diamante x oval](/blog/diamond-vs-oval-face-shape/): no diamante, a testa e a mandíbula são bem mais estreitas.
- Redondo x quadrado: o quadrado tem os cantos da mandíbula marcados; o redondo não.

## Formatos de rosto masculino e feminino

Os formatos são os mesmos para todo mundo, mas as dicas de estilo mudam. Veja os [formatos de rosto feminino](/face-shapes/women/) e os [formatos de rosto masculino](/face-shapes/men/).`,
  faqs: [
    {
      q: "Quantos formatos de rosto existem?",
      a: "A maioria dos estilistas usa de 7 a 10. Os 10 que usamos são oval, redondo, quadrado, oblongo, retangular, coração, diamante, triangular, triângulo invertido e pera.",
    },
    {
      q: "Qual é o formato de rosto mais comum?",
      a: "O oval costuma ser apontado como o mais comum, seguido do redondo, do quadrado e do coração.",
    },
    {
      q: "Qual é o formato de rosto mais raro?",
      a: "O diamante costuma ser considerado o mais raro, junto com o triangular e o pera.",
    },
    {
      q: "Qual é o formato de rosto mais bonito?",
      a: "O oval é muitas vezes chamado de ideal por causa do equilíbrio, mas estudos mostram que a atratividade depende muito mais de simetria, harmonia, pele e expressão do que do contorno do rosto.",
    },
    {
      q: "O formato do rosto pode mudar?",
      a: "A estrutura óssea é estável na vida adulta, mas o peso, o envelhecimento e o tônus muscular alteram os tecidos moles, o que pode mudar a aparência do formato do rosto.",
    },
    {
      q: "Os formatos de rosto são diferentes para homens e mulheres?",
      a: "Não, os formatos são os mesmos. Em média, os homens têm a mandíbula mais larga, por isso os formatos quadrado, retangular e triangular são um pouco mais comuns entre eles.",
    },
  ],
};

export const items: LocaleContent["items"] = {
  "eye-shapes/almond": {
    name: "Olhos amendoados",
    definition:
      "Olhos amendoados são mais largos do que altos, com o vinco da pálpebra visível e cantos que afinam suavemente em ponta, como uma amêndoa. A íris toca as pálpebras superior e inferior, então quase não aparece branco acima ou abaixo dela.",
  },
  "eye-shapes/round": {
    name: "Olhos redondos",
    definition:
      "Olhos redondos são mais altos que a média em relação à largura, por isso parecem grandes e abertos. Muitas vezes aparece branco acima ou abaixo da íris, e o vinco da pálpebra é bem visível.",
  },
  "eye-shapes/hooded": {
    name: "Olhos encapuzados",
    definition:
      "Olhos encapuzados têm uma camada extra de pele que desce do osso da sobrancelha e cobre o vinco, então a pálpebra superior parece pequena ou escondida quando os olhos estão abertos.",
  },
  "eye-shapes/monolid": {
    name: "Olhos monolid",
    definition:
      "Olhos monolid não têm vinco visível na pálpebra superior, então a pálpebra parece uma superfície lisa dos cílios até a sobrancelha. São especialmente comuns em pessoas de ascendência do Leste Asiático.",
  },
  "eye-shapes/upturned": {
    name: "Olhos puxados para cima",
    definition:
      "Olhos puxados para cima têm os cantos externos mais altos que os internos, o que dá um olhar levantado, de gatinho. Em termos de medida, eles têm inclinação cantal positiva.",
  },
  "eye-shapes/downturned": {
    name: "Olhos caídos",
    definition:
      "Olhos caídos têm os cantos externos mais baixos que os internos. Isso dá um olhar suave e meigo e corresponde a uma inclinação cantal neutra ou negativa.",
  },
  "eye-shapes/deep-set": {
    name: "Olhos fundos",
    definition:
      "Olhos fundos ficam mais para dentro do crânio, então o osso da sobrancelha parece mais proeminente e faz sombra sobre a pálpebra. Costumam parecer maiores de perfil do que de frente.",
  },
  "eye-shapes/protruding": {
    name: "Olhos saltados",
    definition:
      "Olhos saltados (ou proeminentes) ficam mais para a frente, então boa parte da pálpebra fica visível e os olhos parecem grandes e abertos. Mudanças repentinas na proeminência dos olhos podem ser um sinal médico, então procure um médico se os seus mudarem.",
  },
  "eye-shapes/close-set": {
    name: "Olhos próximos",
    definition:
      "Olhos próximos têm um espaço entre eles menor que a largura de um olho. A regra dos quintos diz que o espaço ideal é de cerca da largura de um olho.",
  },
  "eye-shapes/wide-set": {
    name: "Olhos afastados",
    definition:
      "Olhos afastados têm um espaço entre eles maior que a largura de um olho. Costumam ser associados a um visual jovem e aberto.",
  },
  "nose-shapes/greek": {
    name: "Nariz grego",
    definition:
      "O nariz grego tem o dorso reto, sem calombo nem depressão, formando uma linha limpa da testa até a ponta. Geralmente tem largura estreita a média.",
  },
  "nose-shapes/roman": {
    name: "Nariz romano",
    definition:
      "O nariz romano tem o dorso proeminente e curvado para fora, muitas vezes com um leve calombo, o que dá um perfil marcante. Às vezes é chamado de aquilino, embora aquilino costume indicar uma curva mais acentuada, em gancho.",
  },
  "nose-shapes/nubian": {
    name: "Nariz núbio",
    definition:
      "O nariz núbio tem o dorso longo e relativamente baixo e a base mais larga nas narinas. É comum em pessoas de ascendência africana, mas aparece em todas as populações.",
  },
  "nose-shapes/hawk": {
    name: "Nariz de falcão (aquilino)",
    definition:
      "O nariz de falcão, também chamado de nariz aquilino, tem o dorso proeminente com uma curva forte e a ponta voltada para baixo, como o bico de um falcão.",
  },
  "nose-shapes/button": {
    name: "Nariz de botão",
    definition:
      "O nariz de botão é pequeno, curto e arredondado, com a ponta levemente arrebitada. Costuma ser associado a um visual jovem.",
  },
  "nose-shapes/snub": {
    name: "Nariz arrebitado",
    definition:
      "O nariz arrebitado é curto e claramente voltado para cima, então as narinas aparecem quando você olha o rosto de frente.",
  },
  "nose-shapes/celestial": {
    name: "Nariz celestial",
    definition:
      "O nariz celestial (também chamado de nariz empinado) tem uma pequena depressão no meio do dorso e a ponta voltada para cima. É mais longo que o nariz arrebitado.",
  },
  "nose-shapes/fleshy": {
    name: "Nariz carnudo",
    definition:
      "O nariz carnudo é grande e largo, com a ponta arredondada e proeminente. É um dos formatos de nariz mais comuns.",
  },
  "nose-shapes/bumpy": {
    name: "Nariz com calombo",
    definition:
      "O nariz com calombo tem uma saliência visível, ou giba dorsal, no dorso. É muito comum e pode ser natural ou resultado de uma lesão.",
  },
  "lip-shapes/full": {
    name: "Lábios carnudos",
    definition:
      "Lábios carnudos têm mais altura em relação à largura, então os dois lábios parecem volumosos.",
  },
  "lip-shapes/thin": {
    name: "Lábios finos",
    definition:
      "Lábios finos têm menos altura em relação à largura, e o vermelhão (a parte rosada) é estreito.",
  },
  "lip-shapes/heart": {
    name: "Lábios em formato de coração",
    definition:
      "Lábios em formato de coração têm o arco do cupido acentuado e o lábio superior mais cheio, que, junto com o inferior, forma um coração.",
  },
  "lip-shapes/bow": {
    name: "Lábios em formato de arco",
    definition:
      "Lábios em formato de arco têm o arco do cupido profundo e bem definido, como o arco de um arqueiro, com volume geral mais fino.",
  },
  "lip-shapes/top-heavy": {
    name: "Lábio superior mais cheio",
    definition:
      "Neste formato, o lábio superior é tão cheio quanto o inferior, ou mais.",
  },
  "lip-shapes/bottom-heavy": {
    name: "Lábio inferior mais cheio",
    definition:
      "Neste formato, o lábio inferior é bem mais cheio que o superior, acima da proporção típica de 1,5:1.",
  },
  "lip-shapes/wide": {
    name: "Lábios largos",
    definition:
      "Lábios largos se estendem mais pelo rosto; os cantos chegam mais ou menos às linhas traçadas a partir das pupilas.",
  },
  "lip-shapes/round": {
    name: "Lábios redondos",
    definition:
      "Lábios redondos são cheios, mas relativamente estreitos, então a boca parece compacta e arredondada.",
  },
  "lip-shapes/downturned": {
    name: "Lábios caídos",
    definition:
      "Lábios caídos têm os cantos mais baixos que o centro da boca em repouso.",
  },
  "head-shapes/round": {
    name: "Cabeça redonda",
    definition:
      "A cabeça redonda tem largura parecida com o comprimento e uma curva uniforme na nuca e no topo.",
  },
  "head-shapes/oval": {
    name: "Cabeça oval",
    definition:
      "A cabeça oval é um pouco mais longa da frente para trás do que larga, com uma curva suave na parte de trás.",
  },
  "head-shapes/long": {
    name: "Cabeça alongada",
    definition:
      "A cabeça alongada (dolicocéfala) é visivelmente mais longa da frente para trás do que larga.",
  },
  "head-shapes/flat-back": {
    name: "Nuca achatada",
    definition:
      "Na nuca achatada, a parte de trás da cabeça desce de forma mais reta atrás do topo, em vez de se curvar para fora.",
  },
  "head-shapes/square": {
    name: "Cabeça quadrada",
    definition:
      "A cabeça quadrada tem o topo achatado e as laterais relativamente retas.",
  },
  "head-shapes/egg": {
    name: "Cabeça em formato de ovo",
    definition:
      "A cabeça em formato de ovo é mais larga no topo ou atrás e mais estreita em direção à mandíbula, como um ovo.",
  },
  "jawline-shapes/square": {
    name: "Mandíbula quadrada",
    definition:
      "A mandíbula quadrada é larga, com ângulos marcados e visíveis abaixo das orelhas.",
  },
  "jawline-shapes/rounded": {
    name: "Mandíbula arredondada",
    definition:
      "A mandíbula arredondada faz uma curva suave da orelha até o queixo, sem ângulo visível.",
  },
  "jawline-shapes/v-shaped": {
    name: "Mandíbula em V",
    definition:
      "A mandíbula em V afina das maçãs do rosto até um queixo estreito, formando um V.",
  },
  "jawline-shapes/pointed": {
    name: "Mandíbula pontuda",
    definition:
      "A mandíbula pontuda termina em um queixo estreito e projetado.",
  },
  "jawline-shapes/wide": {
    name: "Mandíbula larga",
    definition:
      "A mandíbula larga é tão larga quanto as maçãs do rosto, ou mais.",
  },
  "jawline-shapes/narrow": {
    name: "Mandíbula estreita",
    definition:
      "A mandíbula estreita é visivelmente mais estreita que as maçãs do rosto.",
  },
  "kibbe-body-types/dramatic": {
    name: "Dramatic",
    definition:
      "Dramatic é yang puro: estrutura óssea longa, estreita e marcada, com traços faciais angulosos e pouca suavidade.",
  },
  "kibbe-body-types/soft-dramatic": {
    name: "Soft Dramatic",
    definition:
      "Soft Dramatic une estrutura óssea yang e carne yin: uma estrutura longa e grande, com curvas e traços exuberantes.",
  },
  "kibbe-body-types/flamboyant-natural": {
    name: "Flamboyant Natural",
    definition:
      "Flamboyant Natural tem uma estrutura longa e larga, com um yang mais robusto do que anguloso.",
  },
  "kibbe-body-types/natural": {
    name: "Natural",
    definition:
      "Natural é um tipo yang suave: altura moderada, estrutura óssea larga e levemente robusta, visual atlético.",
  },
  "kibbe-body-types/soft-natural": {
    name: "Soft Natural",
    definition:
      "Soft Natural tem uma estrutura levemente larga e robusta, com uma camada de suavidade yin e curvas.",
  },
  "kibbe-body-types/dramatic-classic": {
    name: "Dramatic Classic",
    definition:
      "Dramatic Classic é equilibrado e simétrico, com uma leve angulosidade nos ossos e no rosto.",
  },
  "kibbe-body-types/classic": {
    name: "Classic",
    definition:
      "Classic é o equilíbrio perfeito entre yin e yang: moderado, simétrico e refinado.",
  },
  "kibbe-body-types/soft-classic": {
    name: "Soft Classic",
    definition:
      "Soft Classic é equilibrado, com um toque de suavidade e arredondamento.",
  },
  "kibbe-body-types/flamboyant-gamine": {
    name: "Flamboyant Gamine",
    definition:
      "Flamboyant Gamine combina estatura pequena com mais yang: anguloso, reto e cheio de energia.",
  },
  "kibbe-body-types/gamine": {
    name: "Gamine",
    definition:
      "Gamine é uma mistura equilibrada de yin e yang em uma estrutura compacta.",
  },
  "kibbe-body-types/soft-gamine": {
    name: "Soft Gamine",
    definition:
      "Soft Gamine é uma estrutura compacta com mais yin: arredondada, curvilínea e jovem.",
  },
  "kibbe-body-types/theatrical-romantic": {
    name: "Theatrical Romantic",
    definition:
      "Theatrical Romantic é yin com um toque de angulosidade: estatura pequena, curvas e traços delicados e angulosos.",
  },
  "kibbe-body-types/romantic": {
    name: "Romantic",
    definition:
      "Romantic é yin puro: suave, arredondado e curvilíneo, com traços exuberantes.",
  },
};

export const hubNames: LocaleContent["hubNames"] = {
  "eye-shapes": "Formatos de olhos",
  "nose-shapes": "Formatos de nariz",
  "lip-shapes": "Formatos de lábios",
  "head-shapes": "Formatos de cabeça",
  "jawline-shapes": "Tipos de mandíbula",
  "kibbe-body-types": "Biotipos Kibbe",
};

export const pages: Dict = {
  "478 landmarks are placed and measured right in your browser.": "478 pontos de referência são marcados e medidos direto no seu navegador.",
  "AI face shape detector measuring forehead, cheekbone and jaw width on a face outline": "Detector de formato de rosto com IA medindo a largura da testa, das maçãs do rosto e da mandíbula em um contorno de rosto",
  "AI measures your face": "A IA mede o seu rosto",
  "Add a photo": "Adicione uma foto",
  "Advice you can use": "Dicas que você pode usar",
  "Answer a few questions": "Responda algumas perguntas",
  "At a glance": "Resumo rápido",
  "Beard styles for {shape} faces": "Estilos de barba para rosto {shape}",
  "Best glasses for {shape} faces": "Melhores óculos para rosto {shape}",
  "Best haircuts for {shape} faces (men)": "Melhores cortes de cabelo para rosto {shape} (masculino)",
  "Best hairstyles for {shape} faces (women)": "Melhores penteados para rosto {shape} (feminino)",
  "Breadcrumb": "Trilha de navegação",
  "By": "Por",
  "Calibrated on real faces": "Calibrado com rostos reais",
  "Celebrities with {shape} faces": "Famosos com rosto {shape}",
  "Chart of the 10 face shapes with forehead, cheekbone and jaw width lines": "Tabela dos 10 formatos de rosto com linhas de largura da testa, das maçãs do rosto e da mandíbula",
  "Check if you have {a_shape} face": "Descubra se você tem rosto {shape}",
  "Copy embed code": "Copiar código de incorporação",
  "Each answer adds points to the types it fits.": "Cada resposta soma pontos aos tipos com que combina.",
  "Embed this quiz on your website": "Incorpore este quiz no seu site",
  "Every result links to haircuts, glasses, beards and makeup for your shape.": "Cada resultado leva a cortes de cabelo, óculos, barbas e maquiagem para o seu formato.",
  "Face Shapes": "Formatos de rosto",
  "Face shape guide": "Guia de formatos de rosto",
  "Face shapes chart: gold lines mark forehead, cheekbone and jaw width": "Tabela de formatos de rosto: linhas douradas marcam a largura da testa, das maçãs do rosto e da mandíbula",
  "Find your face shape from a photo": "Descubra o formato do seu rosto por foto",
  "Frames to avoid": "Armações para evitar",
  "Free AI tool": "Ferramenta de IA gratuita",
  "Free for salons, barbers, stylists, eyewear shops and bloggers. Copy this code into your page:": "Grátis para salões, barbearias, cabeleireiros, óticas e blogueiros. Copie este código na sua página:",
  "Frequently asked questions": "Perguntas frequentes",
  "Get your result": "Veja o seu resultado",
  "Get your result in 3 steps": "Seu resultado em 3 passos",
  "Glasses for {shape} faces": "Óculos para rosto {shape}",
  "Haircuts for {shape} faces (men)": "Cortes de cabelo para rosto {shape} (masculino)",
  "Hairstyles for {shape} faces (women)": "Penteados para rosto {shape} (feminino)",
  "Home": "Início",
  "How to tell if you have {a_shape} face": "Como saber se você tem rosto {shape}",
  "Just for fun · Free": "Só por diversão · Grátis",
  "Last updated": "Última atualização",
  "Live camera mode": "Modo câmera ao vivo",
  "Makeup and contouring for {shape} faces": "Maquiagem e contorno para rosto {shape}",
  "Man with a diamond face shape": "Homem com rosto diamante",
  "Man with a heart face shape": "Homem com rosto coração",
  "Man with a pear face shape": "Homem com rosto pera",
  "Man with a rectangle face shape": "Homem com rosto retangular",
  "Man with a round face shape": "Homem com rosto redondo",
  "Man with a square face shape": "Homem com rosto quadrado",
  "Man with a triangle face shape": "Homem com rosto triangular",
  "Man with an inverted triangle face shape": "Homem com rosto triângulo invertido",
  "Man with an oblong face shape": "Homem com rosto oblongo",
  "Man with an oval face shape": "Homem com rosto oval",
  "More free face analysis tools": "Mais ferramentas gratuitas de análise facial",
  "Most faces mix two shapes, so you see a percentage match for all ten.": "A maioria dos rostos mistura dois formatos, então você vê a porcentagem de compatibilidade com os dez.",
  "No photo needed": "Sem precisar de foto",
  "No sign-up": "Sem cadastro",
  "Photo never uploaded": "Foto nunca enviada",
  "Private by design": "Privado desde a concepção",
  "Real examples of {a_shape} face shape": "Exemplos reais de rosto {shape}",
  "Related tools": "Ferramentas relacionadas",
  "Results in seconds": "Resultado em segundos",
  "Save a result card for Instagram, TikTok or Pinterest. It never includes your photo.": "Salve um card do resultado para Instagram, TikTok ou Pinterest. Ele nunca inclui a sua foto.",
  "See all haircuts for men": "Ver todos os cortes masculinos",
  "See all hairstyles for women": "Ver todos os penteados femininos",
  "See all {n} tools": "Ver todas as {n} ferramentas",
  "See your best match, your runners-up and a guide.": "Veja o formato que mais combina com você, os seguintes da lista e um guia.",
  "See your match, the measurements behind it and what to do next.": "Veja o seu formato, as medidas por trás dele e o que fazer em seguida.",
  "Send feedback": "Enviar feedback",
  "Share your result": "Compartilhe o seu resultado",
  "Shows your blend": "Mostra a sua mistura",
  "Tap a shape to see its proportions, best hairstyles, glasses and celebrity examples.": "Toque em um formato para ver as proporções, os melhores penteados, óculos e exemplos de famosos.",
  "The AI runs inside your browser. Your photo is never uploaded, stored or seen.": "A IA roda dentro do seu navegador. Sua foto nunca é enviada, armazenada ou vista.",
  "Tried it? Tell us how it went": "Experimentou? Conte para a gente como foi",
  "Upload a front-facing photo or turn on your camera.": "Envie uma foto de frente ou ligue a câmera.",
  "Use a mirror. Every answer takes a few seconds.": "Use um espelho. Cada resposta leva poucos segundos.",
  "Want to learn about every type? Read our guide to": "Quer conhecer todos os tipos? Leia nosso guia de",
  "Watch your face shape update in real time, then capture for a full reading.": "Veja o formato do seu rosto atualizar em tempo real e depois capture para uma análise completa.",
  "We compare your proportions with measurements from real photos, not drawings.": "Comparamos suas proporções com medidas de fotos reais, não de desenhos.",
  "We read every message and use your feedback to make the detector more accurate. Share your result, a suggestion or a bug.": "Lemos todas as mensagens e usamos o seu feedback para deixar o detector mais preciso. Compartilhe seu resultado, uma sugestão ou um bug.",
  "We score your answers": "Pontuamos suas respostas",
  "What is your face shape? The 10 types": "Qual é o formato do seu rosto? Os 10 tipos",
  "What people say": "O que as pessoas dizem",
  "What {a_shape} face shape looks like": "Como é o rosto {shape}",
  "Why people use our face shape detector": "Por que as pessoas usam nosso detector de formato de rosto",
  "Woman with a diamond face shape": "Mulher com rosto diamante",
  "Woman with a heart face shape": "Mulher com rosto coração",
  "Woman with a pear face shape": "Mulher com rosto pera",
  "Woman with a rectangle face shape": "Mulher com rosto retangular",
  "Woman with a round face shape": "Mulher com rosto redondo",
  "Woman with a square face shape": "Mulher com rosto quadrado",
  "Woman with a triangle face shape": "Mulher com rosto triangular",
  "Woman with an inverted triangle face shape": "Mulher com rosto triângulo invertido",
  "Woman with an oblong face shape": "Mulher com rosto oblongo",
  "Woman with an oval face shape": "Mulher com rosto oval",
  "face shapes scored": "formatos de rosto avaliados",
  "facial landmarks measured": "pontos faciais medidos",
  "photos uploaded, ever": "fotos enviadas, nunca",
  "to your result": "até o seu resultado",
  "{Shape} Face": "Rosto {shape}",
  "{Shape} Face Shape": "Formato de rosto {shape}",
  "{Shape} face guides": "Guias para rosto {shape}",
  "{Shape} face shape diagram with forehead, cheekbone and jaw width lines": "Diagrama do rosto {shape} com linhas de largura da testa, das maçãs do rosto e da mandíbula",
  "{Shape} face shape measurements": "Medidas do rosto {shape}",
  "{Shape} vs similar face shapes": "Rosto {shape} x formatos parecidos",
  "{n} min read": "{n} min de leitura",
  "{shape} face shape": "rosto {shape}",
  "{shape} face shape diagram": "diagrama do rosto {shape}",
  "{shape} face shape diagram showing forehead, cheekbone and jaw widths": "diagrama do rosto {shape} mostrando a largura da testa, das maçãs do rosto e da mandíbula",
};
