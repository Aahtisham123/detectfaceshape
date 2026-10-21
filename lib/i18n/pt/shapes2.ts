import type { ShapeT } from "../types";

export const shapesB: Record<string, ShapeT> = {
  heart: {
    name: "Coração",
    title: "Rosto coração: características, cortes e óculos",
    description: "Rosto coração: testa larga, maçãs altas e queixo fino. Saiba como identificar e veja os melhores cortes, óculos e maquiagem.",
    definition: "O rosto em formato de coração é mais largo na testa e vai se afinando até um queixo estreito, muitas vezes pontudo. As maçãs do rosto são altas, a mandíbula é estreita e alguns rostos coração têm um bico de viúva na linha do cabelo.",
    measurements: [
      { feature: "Comprimento x largura do rosto", value: "Cerca de 1,3–1,5× mais longo que largo" },
      { feature: "Ponto mais largo", value: "Testa e/ou maçãs do rosto" },
      { feature: "Testa", value: "Larga" },
      { feature: "Mandíbula", value: "Estreita, afina bastante" },
      { feature: "Queixo", value: "Estreito, muitas vezes pontudo" },
    ],
    traits: [
      "Testa larga",
      "Maçãs do rosto altas",
      "Mandíbula estreita",
      "Queixo pontudo",
      "Às vezes, bico de viúva",
    ],
    howToTell: [
      "Sua testa é a parte mais larga do rosto.",
      "Seu rosto afina visivelmente das maçãs do rosto até o queixo.",
      "Seu queixo é pequeno ou pontudo.",
    ],
    body: `## Coração x triângulo invertido

Os dois são largos em cima e estreitos no queixo. O rosto coração é mais suave, com bochechas arredondadas e, muitas vezes, bico de viúva. O [triângulo invertido](/pt/face-shapes/inverted-triangle/) é mais anguloso, com a mandíbula mais marcada.

## Coração x diamante

O rosto diamante tem a testa **estreita**, e as maçãs do rosto são o ponto mais largo. O rosto coração tem a testa **larga**. Leia mais em [rosto coração x rosto diamante](/blog/heart-vs-diamond-face-shape/).

## Objetivo do estilo

Equilibrar a testa mais larga com o queixo mais estreito: franjas laterais reduzem a largura da testa, e volume na altura do queixo preenche a parte de baixo do rosto.`,
    women: {
      hairstyles: [
        { name: "Franja lateral", why: "Cobre parte da testa larga e cria linhas diagonais." },
        { name: "Bob na altura do queixo", why: "Dá volume exatamente onde o rosto afina." },
        { name: "Long bob com pontas para fora", why: "A largura na mandíbula equilibra a testa." },
        { name: "Camadas longas a partir do queixo", why: "O volume na mandíbula e abaixo dela preenche a parte de baixo do rosto." },
        { name: "Franja cortininha", why: "Suaviza a testa e emoldura as maçãs do rosto." },
        { name: "Repartido bem lateral", why: "Quebra a largura da testa." },
      ],
      avoid: [
        "Volume no topo da cabeça ou nas têmporas.",
        "Penteados puxados para trás que deixam a testa toda à mostra.",
        "Camadas curtas e desfiadas no topo.",
      ],
      tips: "Mantenha o topo alinhado e coloque o volume na altura do queixo.",
    },
    men: {
      hairstyles: [
        { name: "Cabelo médio com risca lateral", why: "Cobre parte da testa e dá largura mais embaixo." },
        { name: "Franja", why: "Reduz a testa larga." },
        { name: "Corte texturizado mais longo", why: "O volume nas laterais, perto das orelhas, equilibra o queixo." },
        { name: "Cabelo médio despenteado", why: "Suaviza o topo e dá volume mais embaixo." },
      ],
      avoid: [
        "Laterais muito curtas com muito volume em cima.",
        "Penteados puxados para trás.",
      ],
      beards: [
        { name: "Barba cheia", why: "Dá largura e volume ao queixo estreito." },
        { name: "Barba quadrada (boxed beard)", why: "Deixa o queixo pontudo mais quadrado." },
        { name: "Barba por fazer", why: "Cria uma sombra de largura na mandíbula." },
      ],
      tips: "A barba é o recurso mais eficaz para homens com rosto coração, porque alarga a parte de baixo do rosto.",
    },
    glasses: {
      best: [
        { name: "Armações mais marcadas embaixo", why: "Dão largura à metade inferior do rosto." },
        { name: "Armações redondas ou ovais", why: "Suavizam a testa larga." },
        { name: "Armações sem aro ou de cores claras", why: "Não pesam na parte de cima." },
        { name: "Aviador", why: "É mais largo embaixo do que em cima." },
      ],
      avoid: [
        "Armações browline e mais pesadas em cima.",
        "Armações gatinho com pontas exageradas.",
      ],
    },
    makeup: "Faça o contorno nas têmporas e nas laterais da testa para reduzir a largura e ilumine o queixo. Aplique o blush nas maçãs do rosto e esfume para fora.",
    confusedWith: [
      { slug: "inverted-triangle", difference: "O triângulo invertido é mais anguloso, com a mandíbula mais marcada." },
      { slug: "diamond", difference: "O rosto diamante tem a testa estreita, e não larga." },
      { slug: "oval", difference: "O rosto oval afina de forma mais suave, com o queixo arredondado." },
    ],
    faqs: [
      { q: "Como é um rosto em formato de coração?", a: "Testa larga, maçãs do rosto altas e uma mandíbula que afina até um queixo pequeno ou pontudo, às vezes com bico de viúva." },
      { q: "Qual corte de cabelo combina com rosto coração?", a: "Franjas laterais, bob na altura do queixo, long bob e camadas longas que dão volume no queixo." },
      { q: "Quais óculos combinam com rosto coração?", a: "Armações mais marcadas embaixo, redondas, ovais, sem aro e aviador." },
      { q: "O rosto coração é raro?", a: "Não. O coração é um dos formatos de rosto mais comuns." },
      { q: "Todo rosto coração tem bico de viúva?", a: "Não. O bico de viúva é comum, mas não obrigatório." },
    ],
  },
  diamond: {
    name: "Diamante",
    title: "Rosto diamante: como identificar, cortes e óculos",
    description: "Rosto diamante: maçãs largas e altas, testa e mandíbula estreitas e queixo pontudo. Veja como identificar e os melhores cortes e óculos.",
    definition: "O rosto em formato de diamante é mais largo nas maçãs do rosto, com a testa e a mandíbula visivelmente mais estreitas. O queixo é estreito e muitas vezes pontudo, e as maçãs do rosto são altas e proeminentes. É um dos formatos de rosto menos comuns.",
    measurements: [
      { feature: "Comprimento x largura do rosto", value: "Cerca de 1,4–1,6× mais longo que largo" },
      { feature: "Ponto mais largo", value: "Maçãs do rosto, claramente" },
      { feature: "Testa", value: "Estreita" },
      { feature: "Mandíbula", value: "Estreita, angulosa" },
      { feature: "Queixo", value: "Estreito, muitas vezes pontudo" },
    ],
    traits: [
      "Maçãs do rosto altas e largas",
      "Testa estreita",
      "Mandíbula estreita",
      "Queixo pontudo",
    ],
    howToTell: [
      "Suas maçãs do rosto se projetam claramente além da testa e da mandíbula.",
      "Tanto a testa quanto a mandíbula parecem estreitas.",
      "Seu queixo termina em ponta.",
    ],
    body: `## Diamante x oval

Nos dois, as maçãs do rosto são o ponto mais largo. No rosto oval, a testa é só um pouco mais estreita; no rosto diamante, a testa e a mandíbula são **muito** mais estreitas. Veja [rosto diamante x rosto oval](/blog/diamond-vs-oval-face-shape/).

## Diamante x coração

O rosto coração tem a testa larga; o rosto diamante tem a testa estreita.

## O diamante é o formato de rosto mais raro?

O diamante costuma ser chamado de formato de rosto mais raro. Nosso [guia do formato de rosto mais raro](/blog/rarest-face-shape/) explica por quê.

## Objetivo do estilo

Dar largura à testa e ao queixo para equilibrar as maçãs do rosto. Franjas, franjas laterais e volume na altura do queixo fazem isso.`,
    women: {
      hairstyles: [
        { name: "Franja lateral ou franja reta cheia", why: "Dá largura à testa estreita." },
        { name: "Bob na altura do queixo", why: "Dá volume à mandíbula estreita." },
        { name: "Long bob preso atrás das orelhas", why: "Valoriza as maçãs do rosto e dá largura ao queixo." },
        { name: "Repartido bem lateral com ondas", why: "Volume acima e abaixo das maçãs do rosto." },
        { name: "Pixie texturizado com franja longa", why: "Largura na testa, com as maçãs do rosto à mostra." },
      ],
      avoid: [
        "Volume na altura das bochechas.",
        "Repartido no meio bem marcado com o cabelo rente nas têmporas.",
        "Rabo de cavalo alto e puxado, que estreita a testa.",
      ],
      tips: "Coloque o volume acima e abaixo das maçãs do rosto, e não na altura delas.",
    },
    men: {
      hairstyles: [
        { name: "Franja", why: "Alarga a testa estreita." },
        { name: "Textured crop", why: "Largura em cima sem altura." },
        { name: "Cabelo médio penteado para trás com volume nas têmporas", why: "Preenche as têmporas." },
        { name: "Risca lateral com laterais mais cheias", why: "Evite fades muito curtos, que exageram as maçãs do rosto." },
      ],
      avoid: [
        "Fades altos e bem rentes (high and tight).",
        "Cortes na máquina muito curtos, que expõem a testa estreita.",
      ],
      beards: [
        { name: "Barba cheia", why: "Alarga o queixo estreito." },
        { name: "Barba concentrada no queixo", why: "Dá largura e volume ao queixo pontudo." },
      ],
      tips: "Preencha a testa e o queixo; deixe as maçãs do rosto serem o destaque.",
    },
    glasses: {
      best: [
        { name: "Armações gatinho", why: "Realçam as maçãs do rosto e dão largura na altura das sobrancelhas." },
        { name: "Armações ovais", why: "Suavizam os traços angulosos." },
        { name: "Armações sem aro", why: "Mantêm o foco nas maçãs do rosto." },
        { name: "Armações browline", why: "Dão largura à testa." },
      ],
      avoid: [
        "Armações estreitas.",
        "Armações mais largas que as maçãs do rosto.",
      ],
    },
    makeup: "Ilumine o centro da testa e o queixo para alargá-los e faça um contorno leve abaixo das maçãs do rosto, que já se destacam.",
    confusedWith: [
      { slug: "oval", difference: "O rosto oval tem a testa mais larga e o queixo mais suave." },
      { slug: "heart", difference: "O rosto coração tem a testa larga." },
    ],
    faqs: [
      { q: "O que é um rosto em formato de diamante?", a: "Um rosto mais largo nas maçãs do rosto, com testa estreita, mandíbula estreita e queixo pontudo." },
      { q: "O diamante é o formato de rosto mais raro?", a: "Costuma ser descrito como o mais raro, embora os dados sejam limitados. É menos comum que o oval, o redondo, o quadrado e o coração." },
      { q: "Qual corte de cabelo combina com rosto diamante?", a: "Franjas, bob na altura do queixo e penteados com volume acima e abaixo das maçãs do rosto." },
      { q: "Quais óculos combinam com rosto diamante?", a: "Armações gatinho, ovais, sem aro e browline." },
    ],
  },
  triangle: {
    name: "Triangular",
    title: "Rosto triangular: características, cortes e óculos",
    description: "Rosto triangular: mandíbula mais larga que a testa e angulosa. Veja como identificar e os melhores cortes, óculos e barbas para esse formato.",
    definition: "O rosto triangular tem a mandíbula mais larga que a testa e as maçãs do rosto, com uma linha da mandíbula angulosa. O rosto vai se estreitando para cima, então a testa é a parte mais estreita.",
    measurements: [
      { feature: "Comprimento x largura do rosto", value: "Cerca de 1,2–1,5×" },
      { feature: "Ponto mais largo", value: "Mandíbula" },
      { feature: "Testa", value: "Ponto mais estreito" },
      { feature: "Mandíbula", value: "Larga, angulosa" },
      { feature: "Queixo", value: "Largo" },
    ],
    traits: [
      "Mandíbula larga e angulosa",
      "Testa estreita",
      "Maçãs do rosto mais estreitas que a mandíbula",
    ],
    howToTell: [
      "Sua mandíbula é claramente mais larga que a testa.",
      "Sua mandíbula tem ângulos bem definidos.",
      "Seu rosto fica mais estreito em direção ao topo.",
    ],
    body: `## Triangular x pera

Os dois são mais largos na mandíbula do que na testa. **Triangular** geralmente descreve uma mandíbula angulosa; **pera** descreve a parte de baixo do rosto mais cheia e arredondada. Muitos guias usam os nomes como sinônimos.

## Objetivo do estilo

Dar largura à testa e às têmporas e evitar largura extra na mandíbula.`,
    women: {
      hairstyles: [
        { name: "Volume no topo da cabeça e nas têmporas", why: "Alarga a metade de cima." },
        { name: "Franja lateral", why: "Dá largura à testa estreita." },
        { name: "Corte em camadas com volume acima das orelhas", why: "Equilibra a mandíbula larga." },
        { name: "Pixie com altura", why: "Leva a atenção para cima." },
        { name: "Camadas longas que começam abaixo da mandíbula", why: "Evita dar largura à linha da mandíbula." },
      ],
      avoid: [
        "Bob na altura do queixo.",
        "Cabelo rente em cima com volume na mandíbula.",
      ],
      tips: "Crie largura acima das maçãs do rosto e mantenha a linha da mandíbula alinhada.",
    },
    men: {
      hairstyles: [
        { name: "Topo texturizado com volume", why: "Alarga a testa." },
        { name: "Franja lateral", why: "Dá largura em cima." },
        { name: "Cabelo médio com laterais mais cheias acima das orelhas", why: "Equilibra a mandíbula." },
      ],
      avoid: [
        "Laterais rentes com o topo baixo.",
        "Cortes muito curtos.",
      ],
      beards: [
        { name: "Barba por fazer leve", why: "Evita dar largura à mandíbula." },
        { name: "Cavanhaque", why: "Leva o olhar para o centro, e não para os cantos da mandíbula." },
      ],
      tips: "Mantenha a largura em cima; deixe a barba curta nas bochechas.",
    },
    glasses: {
      best: [
        { name: "Armações browline", why: "A borda superior marcada alarga a metade de cima." },
        { name: "Armações gatinho", why: "Elevam e dão largura nas têmporas." },
        { name: "Armações mais pesadas em cima ou decoradas", why: "Levam a atenção para cima." },
      ],
      avoid: [
        "Armações mais marcadas embaixo.",
        "Armações estreitas.",
      ],
    },
    makeup: "Ilumine a testa e as têmporas e faça o contorno nos cantos da mandíbula.",
    confusedWith: [
      { slug: "pear", difference: "O rosto pera é a versão mais suave e arredondada das mesmas proporções." },
      { slug: "square", difference: "O rosto quadrado tem a testa tão larga quanto a mandíbula." },
    ],
    faqs: [
      { q: "O que é um rosto triangular?", a: "Um rosto com a mandíbula mais larga que a testa e as maçãs do rosto, geralmente com a linha da mandíbula angulosa." },
      { q: "Rosto triangular é o mesmo que rosto pera?", a: "São parecidos. Pera geralmente indica a parte de baixo do rosto mais suave e cheia; triangular indica uma mais angulosa." },
      { q: "Qual corte de cabelo combina com rosto triangular?", a: "Penteados com volume no topo da cabeça e nas têmporas, franjas laterais e camadas que começam abaixo da mandíbula." },
    ],
  },
  "inverted-triangle": {
    name: "Triângulo invertido",
    title: "Rosto triângulo invertido: cortes e óculos",
    description: "Rosto triângulo invertido: testa larga, mandíbula e queixo estreitos e angulosos. Veja a diferença do rosto coração e os melhores cortes.",
    definition: "O rosto triângulo invertido é mais largo na testa e se estreita em uma linha quase reta até uma mandíbula angulosa e um queixo estreito. É parecido com o rosto coração, mas mais anguloso e geralmente sem bico de viúva.",
    measurements: [
      { feature: "Comprimento x largura do rosto", value: "Cerca de 1,3–1,5×" },
      { feature: "Ponto mais largo", value: "Testa" },
      { feature: "Testa", value: "Larga" },
      { feature: "Mandíbula", value: "Estreita, angulosa" },
      { feature: "Queixo", value: "Estreito, definido" },
    ],
    traits: [
      "Testa larga",
      "Afinamento em linha reta",
      "Mandíbula estreita e angulosa",
      "Queixo definido",
    ],
    howToTell: [
      "Sua testa é a parte mais larga do rosto.",
      "Seu rosto se estreita em linhas quase retas até o queixo.",
      "Sua mandíbula é angulosa, e não suave.",
    ],
    body: `## Triângulo invertido x coração

Os dois são largos em cima e estreitos no queixo. O rosto coração é mais arredondado nas bochechas e muitas vezes tem bico de viúva; o triângulo invertido é mais anguloso. As dicas de estilo são muito parecidas.

## Objetivo do estilo

Reduzir a largura da testa e dar volume à mandíbula e ao queixo.`,
    women: {
      hairstyles: [
        { name: "Franja lateral", why: "Estreita a testa visualmente." },
        { name: "Cortes na altura do queixo ou long bob", why: "Volume onde o rosto afina." },
        { name: "Ondas das maçãs do rosto para baixo", why: "Dão largura embaixo." },
      ],
      avoid: [
        "Altura e volume no topo da cabeça.",
        "Penteados puxados para trás.",
      ],
      tips: "Mantenha o topo baixo e o volume embaixo.",
    },
    men: {
      hairstyles: [
        { name: "Cabelo médio com risca lateral", why: "Cobre parte da testa." },
        { name: "Franja", why: "Reduz a largura da testa." },
        { name: "Laterais mais longas", why: "Evite fades muito curtos, que exageram o afinamento." },
      ],
      avoid: [
        "Muito volume em cima com laterais rentes.",
      ],
      beards: [
        { name: "Barba cheia", why: "Dá largura ao queixo." },
        { name: "Barba quadrada (boxed beard)", why: "Deixa a mandíbula estreita mais quadrada." },
      ],
      tips: "Use a barba para alargar a parte de baixo do rosto.",
    },
    glasses: {
      best: [
        { name: "Armações mais marcadas embaixo", why: "Dão largura embaixo." },
        { name: "Armações redondas", why: "Suavizam os ângulos." },
        { name: "Armações sem aro", why: "Não pesam na parte de cima." },
      ],
      avoid: [
        "Armações browline, mais pesadas em cima.",
      ],
    },
    makeup: "Faça o contorno nas têmporas e nas laterais da testa e ilumine o queixo.",
    confusedWith: [
      { slug: "heart", difference: "O rosto coração é mais suave, com bochechas mais arredondadas e muitas vezes bico de viúva." },
      { slug: "diamond", difference: "O rosto diamante tem a testa estreita." },
    ],
    faqs: [
      { q: "O que é um rosto triângulo invertido?", a: "Um rosto mais largo na testa que se estreita em linhas retas até uma mandíbula e um queixo estreitos e angulosos." },
      { q: "Rosto triângulo invertido é o mesmo que rosto coração?", a: "São primos próximos. O coração é mais suave e arredondado; o triângulo invertido é mais anguloso." },
    ],
  },
  pear: {
    name: "Pera",
    title: "Rosto pera: características, cortes e óculos",
    description: "Rosto pera: mandíbula larga e cheia e testa mais estreita. Saiba como identificar e veja os melhores cortes e óculos para o rosto pera.",
    definition: "O rosto pera é mais largo na mandíbula e mais estreito na testa, com bochechas cheias e a parte de baixo do rosto suave e arredondada. É a versão mais suave do rosto triangular.",
    measurements: [
      { feature: "Comprimento x largura do rosto", value: "Cerca de 1,1–1,4×" },
      { feature: "Ponto mais largo", value: "Mandíbula e parte inferior das bochechas" },
      { feature: "Testa", value: "Estreita" },
      { feature: "Mandíbula", value: "Larga, cheia, suave" },
      { feature: "Queixo", value: "Largo, arredondado" },
    ],
    traits: [
      "Parte de baixo do rosto cheia",
      "Testa estreita",
      "Mandíbula larga e suave",
    ],
    howToTell: [
      "A metade de baixo do seu rosto parece mais cheia que a de cima.",
      "Sua testa é a parte mais estreita.",
      "Sua mandíbula é larga, mas suave, e não angulosa.",
    ],
    body: `## Pera x triangular

O rosto pera e o triangular têm as mesmas proporções: estreito em cima e largo embaixo. O pera é a versão mais arredondada e cheia; o triangular é mais anguloso.

## Pera x redondo

O rosto redondo é mais largo nas bochechas; o rosto pera é mais largo na mandíbula.

## Objetivo do estilo

Dar volume ao topo da cabeça e às têmporas e deixar a linha da mandíbula livre.`,
    women: {
      hairstyles: [
        { name: "Volume no topo da cabeça", why: "Alarga a metade de cima." },
        { name: "Franja lateral", why: "Alarga a testa estreita." },
        { name: "Corte em camadas na altura dos ombros", why: "Camadas acima da mandíbula equilibram a parte de baixo do rosto cheia." },
        { name: "Pixie com volume", why: "Altura e largura em cima." },
      ],
      avoid: [
        "Bob na altura do queixo.",
        "Cabelo rente em cima.",
      ],
      tips: "Crie volume acima das orelhas.",
    },
    men: {
      hairstyles: [
        { name: "Topete texturizado", why: "Dá largura e altura em cima." },
        { name: "Laterais mais longas acima das orelhas", why: "Equilibram a mandíbula." },
      ],
      avoid: [
        "Cortes na máquina que expõem a testa estreita.",
      ],
      beards: [
        { name: "Barba por fazer curta", why: "Define a mandíbula sem dar largura." },
        { name: "Cavanhaque", why: "Leva o olhar para o centro." },
      ],
      tips: "Mantenha a barba curta nas bochechas.",
    },
    glasses: {
      best: [
        { name: "Armações browline", why: "Alargam a parte de cima do rosto." },
        { name: "Armações gatinho", why: "Elevam e dão largura nas têmporas." },
        { name: "Aros superiores marcantes e coloridos", why: "Levam a atenção para cima." },
      ],
      avoid: [
        "Armações mais marcadas embaixo.",
        "Armações pequenas e estreitas.",
      ],
    },
    makeup: "Ilumine a testa e as têmporas e faça um contorno suave ao longo da mandíbula.",
    confusedWith: [
      { slug: "triangle", difference: "O rosto triangular é mais anguloso." },
      { slug: "round", difference: "O rosto redondo é mais largo nas bochechas." },
    ],
    faqs: [
      { q: "O que é um rosto pera?", a: "Um rosto mais largo na mandíbula e mais estreito na testa, com bochechas cheias e a parte de baixo do rosto suave." },
      { q: "Qual penteado combina com rosto pera?", a: "Penteados com volume no topo da cabeça e nas têmporas, franjas laterais e camadas acima da mandíbula." },
    ],
  },
};
