import type { ToolT } from "../types";

export const tools: Record<string, ToolT> = {
  "face-shape-detector": {
    name: "Detector de Formato de Rosto",
    short: "Descubra o formato do seu rosto por foto ou pela câmera.",
    h1: "Detector de Formato de Rosto",
    intro: "Envie uma foto ou ligue a câmera, e nossa IA mede sua testa, maçãs do rosto, mandíbula e o comprimento do rosto para dizer qual dos 10 formatos de rosto você tem: oval, redondo, quadrado, oblongo, retangular, coração, diamante, triangular, triângulo invertido ou pera. É grátis, leva cerca de cinco segundos e sua foto nunca sai do seu dispositivo.",
    body: `## Como funciona o detector de formato de rosto

1. **Ele encontra 478 pontos no seu rosto.** Usamos o MediaPipe Face Landmarker, do Google, um modelo facial que roda dentro do seu navegador, para posicionar 478 pontos de referência no seu rosto: a região da linha do cabelo, as maçãs do rosto, os cantos da mandíbula, o queixo e muito mais.
2. **Ele nivela o seu rosto.** Se a sua cabeça estiver inclinada, giramos os pontos para que os olhos fiquem nivelados antes de medir.
3. **Ele mede quatro larguras e um comprimento.** Largura da testa, das maçãs do rosto, da mandíbula e do queixo, e o comprimento do rosto, além do ângulo dos cantos da mandíbula.
4. **Ele compara você com rostos reais.** Calibramos o detector com fotos reais medidas pelo mesmo modelo, então uma "mandíbula larga" significa larga em comparação com pessoas reais, e não com um desenho.
5. **Ele pontua todos os 10 formatos.** Você recebe o formato que mais combina com você e uma porcentagem para cada formato, porque a maioria das pessoas é uma mistura.

## O que cada resultado significa

| Formato de rosto | Proporções principais |
|---|---|
| [Oval](/pt/face-shapes/oval/) | Cerca de 1,5× mais longo do que largo, mais largo nas maçãs do rosto, mandíbula suave |
| [Redondo](/pt/face-shapes/round/) | Comprimento e largura parecidos, bochechas cheias, mandíbula suave |
| [Quadrado](/pt/face-shapes/square/) | Testa, maçãs do rosto e mandíbula com larguras parecidas, mandíbula angular |
| [Oblongo](/pt/face-shapes/oblong/) | Longo e estreito, mandíbula arredondada |
| [Retangular](/pt/face-shapes/rectangle/) | Longo, com mandíbula angular |
| [Coração](/pt/face-shapes/heart/) | Testa larga, queixo estreito e pontudo |
| [Diamante](/pt/face-shapes/diamond/) | Mais largo nas maçãs do rosto, testa e mandíbula estreitas |
| [Triangular](/pt/face-shapes/triangle/) | Mandíbula mais larga que a testa, angular |
| [Triângulo invertido](/pt/face-shapes/inverted-triangle/) | Testa larga, mandíbula estreita e angular |
| [Pera](/pt/face-shapes/pear/) | Mandíbula cheia e larga, testa estreita |

Veja todos os formatos lado a lado no nosso [guia de formatos de rosto](/pt/face-shapes/).

## Use sua câmera

Toque em **Usar minha câmera** para abrir uma câmera em tela cheia com um guia oval para enquadrar seu rosto. Depois de tirar a foto, você pode **tirar outra** ou **cortá-la**, e então a IA mede seu rosto e mostra o resultado.

## Como tirar a foto certa

- **Fique de frente para a câmera.** Virar a cabeça encolhe um lado do rosto e distorce todas as proporções.
- **Mantenha o queixo nivelado.** Inclinar para cima faz o rosto parecer mais curto; inclinar para baixo faz a mandíbula parecer mais estreita.
- **Prenda o cabelo para trás** para que a linha do cabelo, a testa e a mandíbula fiquem visíveis.
- **Use luz uniforme e frontal.** A luz de uma janela é ideal. Evite sombras laterais fortes.
- **Expressão neutra, boca fechada.** Sorrir alarga as bochechas e altera a mandíbula.
- **Segure a câmera na altura dos olhos, a cerca de um braço de distância.** Selfies muito de perto distorcem o rosto (o nariz parece maior e o rosto, mais estreito).

## Como descobrir o formato do seu rosto sem foto

Prefere não usar uma foto? Faça o [teste de formato de rosto](/pt/face-shape-quiz/) ou meça seu rosto com uma fita métrica e use a [calculadora de formato de rosto](/pt/face-shape-calculator/).

## Qual é a precisão?

O detector é tão preciso quanto a foto. Com uma foto de frente, bem iluminada e com o cabelo preso, ele mede suas proporções de forma consistente. Mas as categorias de formato de rosto têm limites imprecisos. Cabeleireiros costumam discordar sobre rostos que ficam no limite entre dois formatos, então observe seus dois principais resultados. Se os dois estiverem próximos, você é uma mistura, e as dicas para os dois formatos valem para você.

## Sua foto fica no seu dispositivo

A análise é feita inteiramente no seu navegador, com um modelo facial que roda no próprio dispositivo. Sua foto nunca é enviada, armazenada ou vista por ninguém, e nada é salvo quando você fecha a página. Leia nossa [política de privacidade](/privacy/) e [como nosso detector funciona](/how-it-works/).`,
    faqs: [{ q: "Qual é o formato do meu rosto?", a: "Envie uma foto de frente para o nosso detector grátis: ele vai medir seu rosto e dizer se você tem rosto oval, redondo, quadrado, oblongo, retangular, coração, diamante, triangular, triângulo invertido ou pera, com uma porcentagem de correspondência para cada um." }, { q: "O detector de formato de rosto é grátis?", a: "Sim. É totalmente grátis e não exige cadastro." }, { q: "Vocês armazenam minha foto?", a: "Não. A análise é feita no seu navegador e sua foto nunca é enviada." }, { q: "Por que tive um resultado diferente com outra foto?", a: "O ângulo da cabeça, a distorção da lente e a expressão mudam as proporções medidas. Use uma foto de frente, tirada a um braço de distância, com expressão neutra. Se duas fotos discordarem, você provavelmente é uma mistura dos dois formatos." }, { q: "Quantos formatos de rosto existem?", a: "A maioria dos cabeleireiros usa de 7 a 10. Nós usamos 10: oval, redondo, quadrado, oblongo, retangular, coração, diamante, triangular, triângulo invertido e pera." }, { q: "Qual é o formato de rosto mais comum?", a: "O oval costuma ser descrito como o mais comum, seguido pelo redondo, o quadrado e o coração." }, { q: "Posso usar no celular?", a: "Sim. Funciona nos navegadores modernos de iPhone e Android, com envio de foto ou a câmera frontal." }],
    title: "Formato de Rosto: Qual é o Meu? Detector com IA Grátis",
    description: "Descubra qual é o formato do seu rosto em segundos. Nosso detector com IA grátis mede 478 pontos no seu rosto, direto no navegador, sem upload.",
  },
  "face-shape-quiz": {
    name: "Teste de Formato de Rosto",
    short: "Responda 7 perguntas rápidas, sem precisar de câmera.",
    h1: "Teste de Formato de Rosto",
    intro: "Responda sete perguntas rápidas sobre o seu rosto enquanto se olha no espelho, e nós diremos qual é o formato do seu rosto. Não precisa de foto nem de câmera. Leva cerca de um minuto.",
    body: `## Como o teste funciona

Cada resposta soma pontos para os formatos de rosto que ela descreve. Por exemplo, "minha mandíbula tem cantos marcados" soma pontos para quadrado, retangular, triangular e triângulo invertido, e "meu rosto é claramente mais longo do que largo" soma pontos para oval, oblongo e retangular. O formato com mais pontos vence, e você vê os três primeiros.

## Dicas para respostas precisas

- Olhe de frente para o espelho com o cabelo preso para trás.
- Contorne o seu rosto no espelho com um marcador lavável ou um batom e depois dê um passo para trás. Ver o formato facilita responder às perguntas.
- Se não conseguir decidir uma resposta, escolha a opção do meio.

## Teste vs detector

O teste depende da sua própria avaliação dos seus traços, o que é difícil. O [detector de formato de rosto](/pt/) mede o seu rosto diretamente a partir de uma foto. Use os dois para ter mais segurança.

## Adicione este teste ao seu site

Salões, barbearias e óticas podem incorporar este teste gratuitamente. [Pegue o código de incorporação](#embed).`,
    faqs: [{ q: "Como descobrir o formato do meu rosto sem foto?", a: "Faça este teste olhando no espelho, ou meça seu rosto com uma fita métrica e use a calculadora de formato de rosto." }, { q: "O teste de formato de rosto é preciso?", a: "Ele é tão preciso quanto as suas respostas. Para um resultado medido, use também o detector por foto." }],
    title: "Teste de Formato de Rosto: Qual é o Meu?",
    description: "Faça o teste de formato de rosto grátis e descubra seu formato sem foto: 7 perguntas rápidas sobre testa, maçãs do rosto, mandíbula e queixo.",
  },
  "face-shape-calculator": {
    name: "Calculadora de Formato de Rosto",
    short: "Insira 4 medidas tiradas com fita métrica.",
    h1: "Calculadora de Formato de Rosto",
    intro: "Meça seu rosto com uma fita métrica flexível, insira quatro números e a calculadora compara suas proporções para dizer qual é o formato do seu rosto. Use polegadas ou centímetros; só as proporções importam.",
    body: `## Como medir o seu rosto

1. **Testa:** meça a testa na parte mais larga, geralmente no meio do caminho entre as sobrancelhas e a linha do cabelo, de um lado da linha do cabelo ao outro.
2. **Maçãs do rosto:** meça de um lado ao outro das maçãs do rosto, do canto externo de um olho até o canto externo do outro, passando pelo ponto mais alto das maçãs do rosto (as "pontas" logo abaixo dos cantos externos dos olhos).
3. **Mandíbula:** meça da ponta do queixo até o canto da mandíbula, abaixo da orelha, e depois **multiplique por dois**. Nossa calculadora faz isso por você: basta inserir a medida de um lado.
4. **Comprimento do rosto:** meça do centro da linha do cabelo, em linha reta, até a ponta do queixo.

## Como a calculadora decide

| Se… | Seu formato de rosto provavelmente é… |
|---|---|
| Comprimento de 1,5× a largura ou mais, testa ≈ maçãs do rosto ≈ mandíbula | Oblongo (ou retangular, com mandíbula marcada) |
| Comprimento ≈ largura, bochechas mais largas, mandíbula suave | Redondo |
| Comprimento ≈ largura, tudo parecido, mandíbula marcada | Quadrado |
| Maçãs do rosto mais largas, testa > mandíbula, comprimento ≈ 1,5× | Oval |
| Testa mais larga, mandíbula estreita | Coração (ou triângulo invertido) |
| Maçãs do rosto mais largas, testa e mandíbula estreitas | Diamante |
| Mandíbula mais larga, testa estreita | Triangular / pera |

Leia o [guia completo para medir o rosto](/blog/how-to-measure-your-face/).`,
    faqs: [{ q: "Como calcular o formato do meu rosto?", a: "Meça a testa, as maçãs do rosto, a mandíbula e o comprimento do rosto e compare: qual é a parte mais larga, e quão longo é o seu rosto em relação à largura? Nossa calculadora faz essa comparação por você." }, { q: "Devo usar polegadas ou centímetros?", a: "Tanto faz. A calculadora usa apenas proporções." }],
    title: "Calculadora de Formato de Rosto: Use Suas Medidas",
    description: "Meça testa, maçãs do rosto, mandíbula e comprimento do rosto com uma fita, insira aqui e a calculadora de formato de rosto mostra seu formato.",
  },
  "eye-shape-detector": {
    name: "Detector de Formato dos Olhos",
    short: "Amendoado, redondo, encapuzado, puxado para cima e mais.",
    h1: "Detector de Formato dos Olhos",
    intro: "Envie uma foto ou use a câmera, e nós medimos o quanto seus olhos são abertos, a inclinação dos cantos externos e quanto da pálpebra aparece abaixo da sobrancelha, para dizer qual é o formato dos seus olhos e se eles são próximos, médios ou afastados.",
    body: `## O que o detector de formato dos olhos mede

- **Abertura:** a altura do olho dividida pela largura. Olhos redondos são altos em relação à largura; olhos monolid e amendoados são mais alongados.
- **Canthal tilt:** o ângulo do canto interno até o canto externo. Uma inclinação positiva indica olhos puxados para cima; negativa, olhos caídos.
- **Espaço da pálpebra:** o espaço entre a pálpebra superior e o meio da sobrancelha, em relação à largura do olho. Pouco espaço sugere olhos encapuzados ou profundos.
- **Espaçamento:** a distância entre os cantos internos comparada com a largura dos olhos.

Cada medida é comparada com médias de rostos reais, e cada formato recebe uma porcentagem de correspondência.

## Limitações

Os vincos das pálpebras não são rastreados pelos modelos de pontos faciais, então os resultados encapuzado e monolid são deduzidos a partir do espaço da pálpebra e da abertura. Confirme no espelho usando nosso [guia de formatos dos olhos](/eye-shapes/).

## Como tirar a foto certa

- **Fique de frente para a câmera.** Virar a cabeça encolhe um lado do rosto e distorce todas as proporções.
- **Mantenha o queixo nivelado.** Inclinar para cima faz o rosto parecer mais curto; inclinar para baixo faz a mandíbula parecer mais estreita.
- **Prenda o cabelo para trás** para que a linha do cabelo, a testa e a mandíbula fiquem visíveis.
- **Use luz uniforme e frontal.** A luz de uma janela é ideal. Evite sombras laterais fortes.
- **Expressão neutra, boca fechada.** Sorrir alarga as bochechas e altera a mandíbula.
- **Segure a câmera na altura dos olhos, a cerca de um braço de distância.** Selfies muito de perto distorcem o rosto (o nariz parece maior e o rosto, mais estreito).

## Sua foto fica no seu dispositivo

A análise é feita inteiramente no seu navegador, com um modelo facial que roda no próprio dispositivo. Sua foto nunca é enviada, armazenada ou vista por ninguém, e nada é salvo quando você fecha a página. Leia nossa [política de privacidade](/privacy/) e [como nosso detector funciona](/how-it-works/).`,
    faqs: [{ q: "Como saber o formato dos meus olhos?", a: "Envie uma foto de frente para o detector ou confira no espelho: observe o vinco da pálpebra, se aparece a parte branca ao redor da íris e o ângulo dos cantos." }, { q: "Ele consegue detectar olhos encapuzados?", a: "Ele estima o encapuzamento pelo espaço da pálpebra visível abaixo da sobrancelha. Confirme no espelho, já que o vinco em si não é rastreado." }],
    title: "Formato dos Olhos: Qual é o Meu? Teste com IA",
    description: "Descubra o formato dos seus olhos por foto: amendoado, redondo, encapuzado, monolid, caído e mais, além do espaçamento e canthal tilt. Grátis.",
  },
  "nose-shape-detector": {
    name: "Detector de Formato do Nariz",
    short: "Grego, romano, núbio, arrebitado e mais.",
    h1: "Detector de Formato do Nariz",
    intro: "Envie uma foto de frente, e nós medimos a largura, o comprimento, o ângulo da ponta e o perfil do dorso do seu nariz, para encontrar o mais próximo entre oito formatos de nariz comuns: grego, romano, núbio, aquilino, botão, arrebitado, celestial e carnudo.",
    body: `## O que o detector de formato do nariz mede

- **Largura:** a largura das narinas comparada com o espaço entre os cantos internos dos olhos.
- **Comprimento:** o comprimento do dorso até a base, comparado com o comprimento do rosto.
- **Ângulo da ponta:** o quanto a ponta fica acima da base do nariz. Pontas arrebitadas ficam mais altas.
- **Dorso e projeção:** estimados a partir dos dados de profundidade do modelo. Uma foto de frente mostra isso com menos clareza, então eles pesam menos no seu resultado.

## Limitações

Calombos no dorso (narizes romano e aquilino) ficam mais claros de perfil. Se o seu resultado for romano ou aquilino, compare com uma vista lateral usando nosso [guia de formatos de nariz](/nose-shapes/).

## Como tirar a foto certa

- **Fique de frente para a câmera.** Virar a cabeça encolhe um lado do rosto e distorce todas as proporções.
- **Mantenha o queixo nivelado.** Inclinar para cima faz o rosto parecer mais curto; inclinar para baixo faz a mandíbula parecer mais estreita.
- **Prenda o cabelo para trás** para que a linha do cabelo, a testa e a mandíbula fiquem visíveis.
- **Use luz uniforme e frontal.** A luz de uma janela é ideal. Evite sombras laterais fortes.
- **Expressão neutra, boca fechada.** Sorrir alarga as bochechas e altera a mandíbula.
- **Segure a câmera na altura dos olhos, a cerca de um braço de distância.** Selfies muito de perto distorcem o rosto (o nariz parece maior e o rosto, mais estreito).

## Sua foto fica no seu dispositivo

A análise é feita inteiramente no seu navegador, com um modelo facial que roda no próprio dispositivo. Sua foto nunca é enviada, armazenada ou vista por ninguém, e nada é salvo quando você fecha a página. Leia nossa [política de privacidade](/privacy/) e [como nosso detector funciona](/how-it-works/).`,
    faqs: [{ q: "Como saber o formato do meu nariz?", a: "Use o detector com uma foto de frente e depois confira seu perfil no espelho para ver se há um calombo ou uma curva para dentro no dorso." }, { q: "Quais formatos de nariz existem?", a: "Grego, romano, núbio, aquilino, botão, arrebitado, celestial, carnudo e com calombo são os mais comuns." }],
    title: "Formato do Nariz: Qual é o Meu? Detector com IA",
    description: "Descubra o formato do nariz por foto: grego, romano, núbio, aquilino, botão, arrebitado, celestial ou carnudo. Mede largura, tamanho e ponta.",
  },
  "lip-shape-analyzer": {
    name: "Analisador de Formato dos Lábios",
    short: "Carnudos, finos, coração, arco, superior cheio e mais.",
    h1: "Analisador de Formato dos Lábios",
    intro: "Envie uma foto com os lábios levemente fechados, e nós medimos o volume dos lábios, a proporção entre o lábio superior e o inferior, a largura da boca, o arco do cupido e o ângulo dos cantos, para dizer qual é o formato dos seus lábios.",
    body: `## O que o analisador de formato dos lábios mede

- **Volume:** a altura total dos lábios comparada com a largura da boca.
- **Proporção superior/inferior:** na maioria das pessoas, o lábio inferior tem cerca de 1,5–1,7× a altura do lábio superior.
- **Largura:** a largura da boca comparada com a largura do nariz (em média, cerca de 1,4–1,6×).
- **Arco do cupido:** a profundidade da curva entre os dois picos do lábio superior.
- **Cantos:** se os cantos da boca ficam acima ou abaixo do centro.

Mantenha os lábios fechados e relaxados. Sorrir ou fazer biquinho muda todas as medidas.

## Como tirar a foto certa

- **Fique de frente para a câmera.** Virar a cabeça encolhe um lado do rosto e distorce todas as proporções.
- **Mantenha o queixo nivelado.** Inclinar para cima faz o rosto parecer mais curto; inclinar para baixo faz a mandíbula parecer mais estreita.
- **Prenda o cabelo para trás** para que a linha do cabelo, a testa e a mandíbula fiquem visíveis.
- **Use luz uniforme e frontal.** A luz de uma janela é ideal. Evite sombras laterais fortes.
- **Expressão neutra, boca fechada.** Sorrir alarga as bochechas e altera a mandíbula.
- **Segure a câmera na altura dos olhos, a cerca de um braço de distância.** Selfies muito de perto distorcem o rosto (o nariz parece maior e o rosto, mais estreito).

## Sua foto fica no seu dispositivo

A análise é feita inteiramente no seu navegador, com um modelo facial que roda no próprio dispositivo. Sua foto nunca é enviada, armazenada ou vista por ninguém, e nada é salvo quando você fecha a página. Leia nossa [política de privacidade](/privacy/) e [como nosso detector funciona](/how-it-works/).`,
    faqs: [{ q: "Qual é a proporção ideal dos lábios?", a: "Um lábio inferior com cerca de 1,6× a altura do lábio superior costuma ser descrito como ideal." }, { q: "Devo sorrir na foto?", a: "Não. Mantenha os lábios fechados e relaxados." }],
    title: "Formato dos Lábios: Qual é o Meu? Teste Grátis",
    description: "Formato dos lábios por foto: carnudos, finos, coração, arco, superior ou inferior cheio, largos, redondos ou caídos. Mede volume e arco.",
  },
  "face-symmetry-test": {
    name: "Teste de Simetria Facial",
    short: "Descubra o quanto o seu rosto é simétrico.",
    h1: "Teste de Simetria Facial",
    intro: "Envie uma foto de frente, e nós encontramos a linha média do seu rosto, espelhamos 37 pares de pontos correspondentes (cantos dos olhos, pontos das sobrancelhas, narinas, cantos da boca, pontos da mandíbula) em relação a ela e medimos o quanto os dois lados combinam. Você recebe uma pontuação geral de simetria e uma pontuação para cada traço.",
    body: `## Como medimos a simetria facial

1. Traçamos uma linha que passa por 21 pontos no centro do seu rosto (testa, dorso do nariz, ponta do nariz, lábios, queixo).
2. Para cada par de pontos correspondentes, espelhamos o ponto do lado direito em relação a essa linha e medimos a que distância ele fica do seu par do lado esquerdo.
3. As distâncias são medidas em unidades da sua distância interpupilar, então a pontuação não depende do tamanho da foto.
4. Quanto menor a distância média, maior a pontuação.

## Qual é uma pontuação de simetria normal?

Nenhum rosto é perfeitamente simétrico. Em fotos de frente, a maioria dos rostos fica entre 80 e 92. A pontuação cai bastante se a cabeça estiver virada, mesmo que só um pouco, então uma pontuação baixa geralmente significa que a foto foi tirada em ângulo. Tente de novo olhando diretamente para a câmera.

## Simetria é atraente?

Estudos encontraram uma relação modesta entre simetria e atratividade percebida, mas ela é só um fator entre muitos, e pequenas assimetrias deixam o rosto com aparência natural. Veja nosso [teste de atratividade](/pt/attractiveness-test/) para uma pontuação mais ampla, só por diversão.

## Como tirar a foto certa

- **Fique de frente para a câmera.** Virar a cabeça encolhe um lado do rosto e distorce todas as proporções.
- **Mantenha o queixo nivelado.** Inclinar para cima faz o rosto parecer mais curto; inclinar para baixo faz a mandíbula parecer mais estreita.
- **Prenda o cabelo para trás** para que a linha do cabelo, a testa e a mandíbula fiquem visíveis.
- **Use luz uniforme e frontal.** A luz de uma janela é ideal. Evite sombras laterais fortes.
- **Expressão neutra, boca fechada.** Sorrir alarga as bochechas e altera a mandíbula.
- **Segure a câmera na altura dos olhos, a cerca de um braço de distância.** Selfies muito de perto distorcem o rosto (o nariz parece maior e o rosto, mais estreito).

## Sua foto fica no seu dispositivo

A análise é feita inteiramente no seu navegador, com um modelo facial que roda no próprio dispositivo. Sua foto nunca é enviada, armazenada ou vista por ninguém, e nada é salvo quando você fecha a página. Leia nossa [política de privacidade](/privacy/) e [como nosso detector funciona](/how-it-works/).`,
    faqs: [{ q: "Existe alguém com o rosto perfeitamente simétrico?", a: "Não. Todo rosto tem pequenas diferenças entre o lado esquerdo e o direito." }, { q: "Por que minha pontuação de simetria está baixa?", a: "Geralmente porque sua cabeça estava virada ou inclinada. Fique de frente para a câmera com expressão neutra." }],
    title: "Teste de Simetria Facial: Meu Rosto é Simétrico?",
    description: "Teste a simetria do seu rosto por foto. Espelhamos 37 pares de pontos faciais e pontuamos olhos, sobrancelhas, nariz, boca, bochechas e queixo.",
  },
  "golden-ratio-face": {
    name: "Calculadora de Proporção Áurea do Rosto",
    short: "Compare suas proporções com 1,618.",
    h1: "Calculadora de Proporção Áurea do Rosto",
    intro: "A proporção áurea, cerca de 1,618, é muitas vezes apontada como a descrição das proporções faciais ideais. Envie uma foto, e nós medimos sete proporções clássicas (comprimento do rosto em relação à largura, largura da boca em relação ao nariz, terços faciais, a regra dos quintos e mais) e mostramos o quanto cada uma se aproxima do ideal.",
    body: `## As proporções que medimos

| Proporção | Ideal |
|---|---|
| Comprimento do rosto ÷ largura do rosto | 1,618 |
| Largura da boca ÷ largura do nariz | 1,618 |
| Terço médio ÷ terço inferior | 1 |
| Terço superior ÷ terço médio | 1 |
| Lábios ao queixo ÷ nariz aos lábios | 2 |
| Espaço entre os olhos ÷ largura do olho | 1 |
| Largura do rosto ÷ largura do olho | 5 |

## Uma observação sobre a proporção áurea

A proporção áurea é uma ideia popular, mas a evidência científica de que ela define a beleza é fraca. Rostos médios muitas vezes pontuam melhor do que rostos "áureos" em estudos de atratividade, e os ideais variam entre culturas. Encare sua pontuação como uma forma divertida de observar suas proporções, não como um veredito.

O modelo facial não enxerga a linha do cabelo, então o terço superior é estimado.

## Como tirar a foto certa

- **Fique de frente para a câmera.** Virar a cabeça encolhe um lado do rosto e distorce todas as proporções.
- **Mantenha o queixo nivelado.** Inclinar para cima faz o rosto parecer mais curto; inclinar para baixo faz a mandíbula parecer mais estreita.
- **Prenda o cabelo para trás** para que a linha do cabelo, a testa e a mandíbula fiquem visíveis.
- **Use luz uniforme e frontal.** A luz de uma janela é ideal. Evite sombras laterais fortes.
- **Expressão neutra, boca fechada.** Sorrir alarga as bochechas e altera a mandíbula.
- **Segure a câmera na altura dos olhos, a cerca de um braço de distância.** Selfies muito de perto distorcem o rosto (o nariz parece maior e o rosto, mais estreito).

## Sua foto fica no seu dispositivo

A análise é feita inteiramente no seu navegador, com um modelo facial que roda no próprio dispositivo. Sua foto nunca é enviada, armazenada ou vista por ninguém, e nada é salvo quando você fecha a página. Leia nossa [política de privacidade](/privacy/) e [como nosso detector funciona](/how-it-works/).`,
    faqs: [{ q: "O que é a proporção áurea do rosto?", a: "É a ideia de que as proporções faciais ideais seguem 1,618, por exemplo, um rosto 1,618× mais longo do que largo." }, { q: "Qual é uma boa pontuação de proporção áurea?", a: "A maioria das pessoas fica entre 55 e 80. É só por diversão; não há evidência forte de que a proporção áurea defina a beleza." }],
    title: "Proporção Áurea do Rosto: Calculadora Grátis",
    description: "Seu rosto está perto da proporção áurea (1,618)? Nossa calculadora grátis mede 7 proporções faciais por foto, como comprimento e largura.",
  },
  "attractiveness-test": {
    name: "Teste de Atratividade",
    short: "Uma nota para o seu rosto de 0 a 10, só por diversão.",
    h1: "Teste de Atratividade",
    intro: "Esta é uma avaliação facial só por diversão. Combinamos cinco fatores mensuráveis que pesquisas e a cultura popular associam à atratividade (simetria, proporções da proporção áurea, terços faciais equilibrados, canthal tilt e definição da mandíbula) em uma nota de 0 a 10. Ela não consegue medir charme, estilo, expressão nem nada do que realmente torna as pessoas atraentes umas para as outras.",
    body: `## O que entra na sua nota

| Fator | Peso | O que mede |
|---|---|---|
| Simetria | 30% | O quanto o lado esquerdo e o direito combinam |
| Proporção áurea | 25% | Sete proporções clássicas vs seus ideais |
| Terços faciais | 15% | Equilíbrio entre a parte média e a inferior do rosto |
| Canthal tilt | 15% | O ângulo dos cantos dos olhos |
| Definição da mandíbula | 15% | Ângulo, largura da mandíbula e queixo |

## Leia isto, por favor

A atratividade é pessoal, cultural e depende principalmente de coisas que uma foto não captura. Uma nota de uma ferramenta de medição facial não diz nada sobre o seu valor. Só a iluminação, o ângulo da câmera e a distorção da lente já podem mudar sua nota em mais de um ponto. Divirta-se e não leve a sério.

## Como tirar a foto certa

- **Fique de frente para a câmera.** Virar a cabeça encolhe um lado do rosto e distorce todas as proporções.
- **Mantenha o queixo nivelado.** Inclinar para cima faz o rosto parecer mais curto; inclinar para baixo faz a mandíbula parecer mais estreita.
- **Prenda o cabelo para trás** para que a linha do cabelo, a testa e a mandíbula fiquem visíveis.
- **Use luz uniforme e frontal.** A luz de uma janela é ideal. Evite sombras laterais fortes.
- **Expressão neutra, boca fechada.** Sorrir alarga as bochechas e altera a mandíbula.
- **Segure a câmera na altura dos olhos, a cerca de um braço de distância.** Selfies muito de perto distorcem o rosto (o nariz parece maior e o rosto, mais estreito).

## Sua foto fica no seu dispositivo

A análise é feita inteiramente no seu navegador, com um modelo facial que roda no próprio dispositivo. Sua foto nunca é enviada, armazenada ou vista por ninguém, e nada é salvo quando você fecha a página. Leia nossa [política de privacidade](/privacy/) e [como nosso detector funciona](/how-it-works/).`,
    faqs: [{ q: "O teste de atratividade é preciso?", a: "Nenhuma ferramenta de avaliação facial consegue medir a atratividade. Esta mede algumas proporções associadas a ela, só por diversão." }, { q: "Por que minha nota mudou entre as fotos?", a: "O ângulo da cabeça, a iluminação, a expressão e a distorção da lente mudam as medidas." }],
    title: "Teste de Atratividade: Dê Nota ao Meu Rosto (IA)",
    description: "Uma nota facial com IA, grátis e só por diversão, baseada em simetria, proporção áurea, terços faciais, canthal tilt e mandíbula. Sem upload.",
  },
  "how-old-do-i-look": {
    name: "Quantos Anos Eu Pareço Ter?",
    short: "Estimativa de idade com IA a partir da sua foto.",
    h1: "Quantos Anos Eu Pareço Ter?",
    intro: "Envie uma selfie ou use a câmera, e um modelo de IA que roda no seu dispositivo estima quantos anos você aparenta. É só por diversão: esses modelos costumam errar por vários anos, e a iluminação, a maquiagem, a expressão e a qualidade da imagem influenciam o palpite.",
    body: `## Como funciona o detector de idade

Usamos um modelo de estimativa de idade de código aberto (GEAR, por meio da biblioteca Human) que roda no seu navegador. Ele foi treinado com grandes conjuntos de rostos marcados com a idade e prevê a idade com a qual um rosto mais se parece. Sua foto nunca é enviada.

## Por que o resultado pode errar

- **Iluminação:** luz forte destaca a textura da pele e pode somar anos; luz suave os tira.
- **Expressão:** sorrir cria linhas que alguns modelos interpretam como idade.
- **Qualidade da imagem:** fotos borradas ou com muitos filtros confundem o modelo.
- **Viés:** modelos de idade são menos precisos para grupos pouco representados nos dados de treinamento.

Teste algumas fotos e observe a faixa de resultados, em vez de um único número.

## Sua foto fica no seu dispositivo

A análise é feita inteiramente no seu navegador, com um modelo facial que roda no próprio dispositivo. Sua foto nunca é enviada, armazenada ou vista por ninguém, e nada é salvo quando você fecha a página. Leia nossa [política de privacidade](/privacy/) e [como nosso detector funciona](/how-it-works/).`,
    faqs: [{ q: "Qual é a precisão do detector de idade?", a: "Em boas condições, espere uma margem de cerca de 5–8 anos. É só por diversão." }, { q: "Vocês guardam minha foto?", a: "Não. O modelo roda no seu navegador e nada é enviado." }],
    title: "Quantos Anos Eu Pareço Ter? Teste de Idade com IA",
    description: "Envie uma foto e nossa IA adivinha quantos anos você aparenta. Roda de forma privada no navegador, com um modelo de estimativa de idade local.",
  },
  "head-shape-detector": {
    name: "Detector de Formato da Cabeça",
    short: "Redonda, oval, longa, nuca achatada e mais.",
    h1: "Detector de Formato da Cabeça",
    intro: "O formato da cabeça é o contorno do seu crânio inteiro, algo que uma foto de frente não consegue mostrar por completo. Responda cinco perguntas usando um espelho e uma foto lateral da sua cabeça, e nós diremos qual é o formato da sua cabeça e quais cortes de cabelo combinam melhor com ele.",
    body: `## Por que um teste em vez de uma foto?

A parte de trás e o topo da cabeça são o que mais importa para o formato da cabeça, e eles ficam escondidos pelo cabelo e invisíveis em uma foto de frente. Uma verificação guiada com uma foto lateral é mais confiável.

## Formato da cabeça e cortes de cabelo

- **Nuca achatada:** mantenha comprimento no topo de trás (coroa) e evite degradê na pele na parte de trás.
- **Cabeça longa:** evite volume no topo.
- **Cabeça redonda ou oval:** cortes raspados e cortes curtos funcionam bem.

Veja todos os [formatos de cabeça](/head-shapes/).`,
    faqs: [{ q: "Como saber o formato da minha cabeça?", a: "Assente o cabelo e tire uma foto de lado. Veja se a parte de trás da cabeça faz uma curva para fora ou desce reta, e compare a largura com o comprimento." }],
    title: "Formato da Cabeça: Qual é o Meu? Teste Rápido",
    description: "Descubra o formato da sua cabeça (redonda, oval, longa, quadrada, nuca achatada ou em formato de ovo) com um teste guiado e os cortes ideais.",
  },
  "jawline-analyzer": {
    name: "Analisador de Mandíbula",
    short: "Meça o ângulo, a largura da mandíbula e o queixo.",
    h1: "Analisador de Mandíbula",
    intro: "Envie uma foto de frente, e nós medimos o ângulo dos cantos da sua mandíbula, a largura da mandíbula em relação às maçãs do rosto e a largura e o comprimento do queixo. Você recebe o tipo da sua mandíbula e uma pontuação de definição.",
    body: `## O que o analisador de mandíbula mede

- **Ângulo da mandíbula:** o ângulo no canto da mandíbula, entre a bochecha e o queixo. Ângulos menores parecem mais marcados.
- **Largura da mandíbula:** de um canto da mandíbula ao outro, em relação à largura das maçãs do rosto.
- **Queixo:** a largura do queixo e o comprimento dele abaixo do lábio inferior.

## O que muda a aparência da sua mandíbula

Gordura corporal, postura, formato da barba e iluminação mudam o quanto sua mandíbula parece definida. Inclinar o queixo para baixo a deixa mais suave; o ângulo da cabeça importa muito.

Veja todos os [tipos de mandíbula](/jawline-shapes/).

## Como tirar a foto certa

- **Fique de frente para a câmera.** Virar a cabeça encolhe um lado do rosto e distorce todas as proporções.
- **Mantenha o queixo nivelado.** Inclinar para cima faz o rosto parecer mais curto; inclinar para baixo faz a mandíbula parecer mais estreita.
- **Prenda o cabelo para trás** para que a linha do cabelo, a testa e a mandíbula fiquem visíveis.
- **Use luz uniforme e frontal.** A luz de uma janela é ideal. Evite sombras laterais fortes.
- **Expressão neutra, boca fechada.** Sorrir alarga as bochechas e altera a mandíbula.
- **Segure a câmera na altura dos olhos, a cerca de um braço de distância.** Selfies muito de perto distorcem o rosto (o nariz parece maior e o rosto, mais estreito).

## Sua foto fica no seu dispositivo

A análise é feita inteiramente no seu navegador, com um modelo facial que roda no próprio dispositivo. Sua foto nunca é enviada, armazenada ou vista por ninguém, e nada é salvo quando você fecha a página. Leia nossa [política de privacidade](/privacy/) e [como nosso detector funciona](/how-it-works/).`,
    faqs: [{ q: "Qual é um bom ângulo de mandíbula?", a: "Cerca de 120–130° no canto da mandíbula transmite definição; ângulos maiores parecem mais suaves." }],
    title: "Analisador de Mandíbula: Avalie Seu Maxilar",
    description: "Meça ângulo e largura da mandíbula e queixo por foto. Veja seu tipo (quadrada, arredondada, em V, pontuda, larga ou estreita) e a definição.",
  },
  "skin-undertone-test": {
    name: "Teste de Subtom de Pele",
    short: "Quente, frio ou neutro? Teste + foto.",
    h1: "Teste de Subtom de Pele",
    intro: "O seu subtom é a cor sutil abaixo da superfície da pele: quente (amarelado, pêssego, dourado), frio (rosado, avermelhado, azulado) ou neutro (uma mistura). Responda seis perguntas e, se quiser, adicione uma foto para uma leitura da cor da sua pele, e descubra qual é o seu.",
    body: `## Os testes clássicos de subtom

- **Teste das veias:** observe as veias na parte interna do pulso sob luz natural. Esverdeadas sugerem subtom quente; azuis ou roxas sugerem frio; difíceis de definir sugerem neutro.
- **Teste das joias:** se o dourado valoriza mais você, provavelmente seu subtom é quente; se for o prateado, frio.
- **Teste do branco:** se o branco puro deixa você com aparência apagada e o creme fica melhor, provavelmente seu subtom é quente.
- **Teste do sol:** se você se bronzeia com facilidade, é mais provável que seja quente; se você se queima, frio.

## Por que a análise por foto é só uma pista

O balanço de branco da câmera e a iluminação do ambiente mudam muito a cor da pele nas fotos. Analisamos amostras das suas bochechas e da testa e lemos o tom, mas damos menos peso a isso do que às respostas do teste. Tire a foto sob luz natural, perto de uma janela, para uma leitura melhor.

## Subtom vs tom de pele

O tom de pele é o quanto a sua pele é clara ou escura. O subtom é a nuance por baixo. Duas pessoas com o mesmo tom de pele podem ter subtons diferentes. Em seguida, descubra sua [paleta de cores sazonal](/pt/color-analysis/) ou seu [tom de base](/pt/foundation-shade-finder/).`,
    faqs: [{ q: "Como saber se meu subtom é quente ou frio?", a: "Observe as veias do pulso sob luz natural, compare joias douradas e prateadas e veja se você se bronzeia ou se queima. Nosso teste combina tudo isso." }, { q: "O que é subtom oliva?", a: "Oliva é um subtom entre neutro e quente, com um fundo esverdeado, comum em peles mediterrâneas, do Oriente Médio, do sul da Ásia e latino-americanas." }],
    title: "Teste de Subtom de Pele: Quente, Frio ou Neutro?",
    description: "Descubra seu subtom de pele (quente, frio, neutro ou oliva) com um teste rápido e foto opcional. Veja quais cores e joias combinam com você.",
  },
  "color-analysis": {
    name: "Coloração Pessoal Sazonal",
    short: "Primavera, Verão, Outono ou Inverno?",
    h1: "Coloração Pessoal Sazonal",
    intro: "A coloração pessoal sazonal classifica suas cores naturais em uma de quatro estações (Primavera, Verão, Outono, Inverno) com base em três fatores: subtom (quente ou frio), profundidade (clara ou profunda) e contraste entre cabelo, pele e olhos. Responda oito perguntas para descobrir sua estação e subestação, com uma paleta de cores para usar.",
    body: `## As quatro estações

| Estação | Subtom | Profundidade | Contraste | Melhores cores |
|---|---|---|---|---|
| Primavera | Quente | Clara a média | Médio a alto | Cores vivas, limpas e quentes: coral, pêssego, verde quente |
| Verão | Frio | Clara a média | Baixo a médio | Suaves, frias e esmaecidas: rosa antigo, lavanda, azul suave |
| Outono | Quente | Média a profunda | Baixo a médio | Ricas, quentes e esmaecidas: ferrugem, verde-oliva, mostarda |
| Inverno | Frio | Profunda ou de alto contraste | Alto | Limpas, frias e saturadas: vermelho puro, esmeralda, preto, branco |

## Subestações

Cada estação tem três subestações (por exemplo, Primavera Clara, Quente e Brilhante), dependendo de qual característica é mais forte. Isso dá origem ao popular sistema de 12 estações.

## Como ter o resultado mais preciso

Responda com base na sua cor de cabelo natural, sem maquiagem, sob luz natural. Uma sessão presencial com tecidos (drapeamento) feita por um profissional é o padrão-ouro; este teste chega perto.`,
    faqs: [{ q: "Qual é a minha estação na coloração pessoal?", a: "Faça o teste: ele pontua seu subtom, profundidade e contraste e os relaciona a Primavera, Verão, Outono ou Inverno, além de uma subestação." }, { q: "Minha estação pode mudar?", a: "Suas cores naturais são estáveis, mas cabelo tingido ou bronzeado podem mudar, por um tempo, quais cores ficam melhores em você." }],
    title: "Teste de Coloração Pessoal: Qual é Minha Estação?",
    description: "Descubra sua paleta sazonal (Primavera, Verão, Outono, Inverno e subestação) com um teste de coloração pessoal grátis por subtom e contraste.",
  },
  "foundation-shade-finder": {
    name: "Descubra Seu Tom de Base",
    short: "Encontre seu código de profundidade + subtom.",
    h1: "Descubra Seu Tom de Base",
    intro: "O tom da sua base depende de duas coisas: profundidade (o quanto sua pele é clara ou escura) e subtom (quente, frio, neutro ou oliva). Responda cinco perguntas, e nós diremos a faixa de profundidade e o código de subtom que você deve procurar em qualquer marca.",
    body: `## Como funcionam os códigos de tom de base

A maioria das marcas identifica os tons com um número para a profundidade e uma letra para o subtom:

- **W / Y / G** = quente (amarelado ou dourado)
- **C / P / R** = frio (rosado ou avermelhado)
- **N** = neutro
- **O** = oliva

Números menores costumam ser mais claros. Um "120 N" é um tom claro neutro; um "450 W" é um tom profundo quente.

## Como testar a cor

Aplique duas ou três cores na linha da mandíbula, não na mão, e confira sob luz natural. O tom certo desaparece na pele e combina com o pescoço.`,
    faqs: [{ q: "Como descobrir meu tom de base?", a: "Descubra sua profundidade e seu subtom e depois teste as cores na linha da mandíbula sob luz natural." }, { q: "Devo combinar a base com o rosto ou com o pescoço?", a: "Combine com a linha da mandíbula para que rosto e pescoço se misturem." }],
    title: "Tom de Base Ideal: Descubra o Seu (Teste Grátis)",
    description: "Descubra seu tom de base pela profundidade e subtom com um teste rápido. Aprenda a ler códigos (W, C, N, O) e a testar a cor sob luz natural.",
  },
  "kibbe-body-type-test": {
    name: "Teste de Tipo Corporal Kibbe",
    short: "Descubra seu tipo Kibbe em 12 perguntas.",
    h1: "Teste de Tipo Corporal Kibbe",
    intro: "O sistema Kibbe descreve seu corpo e rosto como um equilíbrio entre yang (longo, marcado, anguloso) e yin (suave, arredondado, pequeno). Responda 12 perguntas sobre sua altura, estrutura óssea, corpo e traços faciais, e nós pontuamos seu yin e yang para sugerir seu tipo Kibbe.",
    body: `## Como funciona o teste Kibbe

Cada pergunta tem respostas que vão de muito yang a muito yin. Suas respostas formam duas pontuações:

- **Equilíbrio yin–yang:** marcado e longo vs suave e arredondado.
- **Largura e robustez:** o que separa os Naturals (largos, robustos) dos Dramatics (estreitos, marcados), e as Gamines (compactas, mistas) dos Romantics (suaves, com curvas).

A combinação aponta para um dos 13 tipos. Mostramos seus três primeiros porque muitas pessoas ficam entre dois tipos.

## Dicas para respostas precisas

Os tipos Kibbe se baseiam na estrutura óssea e nos traços naturais, não no peso, no condicionamento físico ou no estilo. Responda pensando na sua estrutura como ela é naturalmente. A opinião de um amigo pode ajudar, já que é difícil avaliar a si mesmo.

Veja todos os [13 tipos corporais Kibbe](/kibbe-body-types/).`,
    faqs: [{ q: "Qual é o meu tipo corporal Kibbe?", a: "Faça o teste: ele pontua seu equilíbrio entre yin e yang e sugere o seu tipo." }, { q: "Kibbe é a mesma coisa que tipo de corpo?", a: "Não. O Kibbe analisa a estrutura óssea e os traços como um todo, e não as proporções entre quadril e cintura." }],
    title: "Teste Kibbe: Descubra Seu Tipo Corporal Kibbe",
    description: "Faça o teste Kibbe grátis e descubra seu tipo corporal. 12 perguntas sobre estrutura óssea, corpo e rosto para achar qual dos 13 tipos é o seu.",
  },
  "canthal-tilt-calculator": {
    name: "Calculadora de Canthal Tilt",
    short: "Meça a inclinação dos seus olhos em graus.",
    h1: "Calculadora de Canthal Tilt",
    intro: "O canthal tilt (inclinação cantal) é o ângulo entre o canto interno e o canto externo do olho. Envie uma foto de frente, e nós medimos esse ângulo em graus para cada olho, depois de nivelar sua cabeça, e dizemos se a sua inclinação é positiva, neutra ou negativa.",
    body: `## O que é canthal tilt?

Trace uma linha do canto interno do olho (canto medial) até o canto externo (canto lateral). O ângulo dessa linha em relação à horizontal é o seu canthal tilt.

- **Positivo (acima de cerca de 4°):** o canto externo fica mais alto. Os olhos parecem puxados para cima, estilo "olho de gato".
- **Neutro (0–4°):** os cantos ficam mais ou menos nivelados.
- **Negativo (abaixo de 0°):** o canto externo fica mais baixo. Os olhos parecem caídos.

A média nas nossas fotos de calibração foi de cerca de +4°.

## Por que nivelamos sua cabeça primeiro

Uma inclinação da cabeça de apenas 3° muda a leitura em 3°. Giramos seus pontos de referência para que as pupilas fiquem niveladas antes de medir, mas uma foto de frente ainda é o ideal.

## Sua foto fica no seu dispositivo

A análise é feita inteiramente no seu navegador, com um modelo facial que roda no próprio dispositivo. Sua foto nunca é enviada, armazenada ou vista por ninguém, e nada é salvo quando você fecha a página. Leia nossa [política de privacidade](/privacy/) e [como nosso detector funciona](/how-it-works/).`,
    faqs: [{ q: "Qual é um canthal tilt normal?", a: "A maioria das pessoas tem uma inclinação levemente positiva, de cerca de 2–6°." }, { q: "O canthal tilt pode mudar?", a: "Ele muda um pouco com a idade, à medida que a pele e os tecidos ao redor dos olhos ficam mais flácidos." }],
    title: "Canthal Tilt: Positivo, Neutro ou Negativo?",
    description: "Meça seu canthal tilt em graus a partir de uma foto. Descubra se seus olhos têm inclinação cantal positiva, neutra ou negativa, para cada olho.",
  },
  "facial-proportions-calculator": {
    name: "Calculadora de Proporções Faciais",
    short: "Terços faciais e a regra dos quintos.",
    h1: "Calculadora de Proporções Faciais",
    intro: "Artistas e cirurgiões descrevem rostos com duas regras simples. A **regra dos terços**: da linha do cabelo à sobrancelha, da sobrancelha ao nariz e do nariz ao queixo, as distâncias são mais ou menos iguais. A **regra dos quintos**: o rosto tem cerca de cinco larguras de olho. Envie uma foto para ver como o seu rosto se sai nas duas.",
    body: `## Terços faciais

| Terço | De | Até |
|---|---|---|
| Superior | Linha do cabelo | Sobrancelha (glabela) |
| Médio | Sobrancelha | Base do nariz |
| Inferior | Base do nariz | Queixo |

Dentro do terço inferior, a distância do nariz até os lábios idealmente é metade da distância dos lábios até o queixo.

## Quintos faciais

Divida o rosto verticalmente em cinco partes iguais: cada olho ocupa um quinto, o espaço entre os olhos é um quinto, e o espaço entre cada canto externo do olho e a lateral do rosto é um quinto.

O modelo não enxerga a linha do cabelo, então o seu terço superior é estimado.

## Sua foto fica no seu dispositivo

A análise é feita inteiramente no seu navegador, com um modelo facial que roda no próprio dispositivo. Sua foto nunca é enviada, armazenada ou vista por ninguém, e nada é salvo quando você fecha a página. Leia nossa [política de privacidade](/privacy/) e [como nosso detector funciona](/how-it-works/).`,
    faqs: [{ q: "Quais são as proporções faciais ideais?", a: "Terços faciais iguais e um rosto com cerca de cinco larguras de olho são diretrizes artísticas clássicas. Rostos reais variam muito." }],
    title: "Proporções Faciais: Calculadora de Terços",
    description: "Meça seus terços e quintos faciais por foto. Compare as partes superior, média e inferior do rosto e veja seus olhos na regra dos quintos.",
  },
  "face-comparison": {
    name: "Comparação de Rostos",
    short: "O quanto dois rostos são parecidos?",
    h1: "Comparação de Rostos",
    intro: "Envie duas fotos, e nós comparamos a geometria dos dois rostos (as posições de mais de 70 pontos de referência principais, depois de remover diferenças de tamanho e rotação) e damos uma pontuação de semelhança, além dos dois formatos de rosto lado a lado.",
    body: `## Como funciona a comparação de rostos

Pegamos os pontos de referência correspondentes dos dois rostos, removemos as diferenças de posição, tamanho e rotação (uma técnica chamada alinhamento de Procrustes) e medimos o quanto as formas restantes se distanciam. Formas mais próximas = maior semelhança.

## O que isto é e o que não é

Esta ferramenta compara o **formato e as proporções** do rosto, não a identidade. Não é reconhecimento facial e não consegue dizer se duas fotos mostram a mesma pessoa. É um jeito divertido de comparar a semelhança entre familiares ou ver se você e um amigo têm o mesmo formato de rosto.

## Sua foto fica no seu dispositivo

A análise é feita inteiramente no seu navegador, com um modelo facial que roda no próprio dispositivo. Sua foto nunca é enviada, armazenada ou vista por ninguém, e nada é salvo quando você fecha a página. Leia nossa [política de privacidade](/privacy/) e [como nosso detector funciona](/how-it-works/).`,
    faqs: [{ q: "Isto é reconhecimento facial?", a: "Não. A ferramenta compara apenas geometria e proporções e não consegue identificar pessoas." }],
    title: "Comparação de Rostos: Dois Rostos São Parecidos?",
    description: "Compare dois rostos e receba uma pontuação de semelhança pela geometria facial. Veja se irmãos, pais e filhos ou amigos têm rostos parecidos.",
  },
};
