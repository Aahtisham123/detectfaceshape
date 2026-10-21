import type { ShapeT } from "../types";

export const shapesA: Record<string, ShapeT> = {
  oval: {
    name: "Oval",
    title: "Rosto oval: características, cortes e óculos",
    description: "O rosto oval é cerca de 1,5× mais longo que largo, com maçãs do rosto mais largas e mandíbula suave. Veja como identificar e os cortes ideais.",
    definition: "O formato de rosto oval é cerca de uma vez e meia mais longo do que largo. As maçãs do rosto são o ponto mais largo, a testa é um pouco mais larga que a mandíbula e a linha do maxilar se curva suavemente até um queixo arredondado, sem ângulos marcados.",
    measurements: [
      { feature: "Comprimento x largura do rosto", value: "Cerca de 1,4–1,6× mais longo que largo" },
      { feature: "Ponto mais largo", value: "Maçãs do rosto" },
      { feature: "Testa", value: "Um pouco mais larga que a mandíbula" },
      { feature: "Mandíbula", value: "Suave, arredondada, afina gradualmente" },
      { feature: "Queixo", value: "Arredondado, não pontudo" },
    ],
    traits: [
      "Proporções equilibradas de cima a baixo",
      "Maçãs do rosto um pouco mais largas que a testa",
      "Mandíbula mais estreita que a testa, sem cantos marcados",
      "O rosto lembra um ovo de cabeça para baixo",
    ],
    howToTell: [
      "Seu rosto é claramente mais longo do que largo, mas não de forma exagerada.",
      "A parte mais larga do seu rosto fica na altura das maçãs do rosto.",
      "Sua mandíbula forma uma curva em vez de um ângulo abaixo das orelhas.",
      "Se você contornar seu rosto no espelho, o desenho parece um ovo com a parte mais larga em cima.",
    ],
    body: `## Por que o rosto oval é chamado de "equilibrado"

Cabeleireiros consideram o rosto oval o formato mais versátil porque nenhuma área se destaca: a testa, as maçãs do rosto e a mandíbula vão diminuindo de largura gradualmente, e o comprimento é proporcional à largura. Por isso a maioria dos cortes de cabelo, óculos e estilos de barba funciona. O objetivo não é "corrigir" nada, apenas evitar esconder o equilíbrio que você já tem.

## O rosto oval é comum?

O oval é um dos resultados mais comuns do nosso detector, junto com o coração e o quadrado. Na prática, muitas pessoas são uma mistura, como oval com mandíbula levemente quadrada ou oval puxando para oblongo. Seu resultado mostra uma porcentagem para cada formato, para você ver para qual lado tende.

## Oval x oblongo

A diferença é o comprimento. Um rosto oval é cerca de 1,5× mais longo que largo; um rosto oblongo é visivelmente mais longo (perto de 1,7× ou mais), com laterais mais retas. Se franjas laterais e volume nas laterais deixam seu rosto mais equilibrado, você pode tender ao oblongo.`,
    women: {
      hairstyles: [
        { name: "Camadas longas", why: "Camadas que começam abaixo do queixo dão movimento sem alargar nenhuma parte do rosto." },
        { name: "Long bob reto", why: "Um corte na altura da clavícula com pontas retas emoldura a mandíbula e mantém o contorno equilibrado." },
        { name: "Franja cortina", why: "Uma franja repartida que cai para os dois lados abre o rosto e chama atenção para os olhos." },
        { name: "Pixie", why: "Rostos ovais têm proporções para usar cabelo bem curto; o corte valoriza as maçãs do rosto." },
        { name: "Repartido no meio liso", why: "A risca central funciona porque as duas metades do rosto oval são proporcionais." },
        { name: "Shaggy na altura dos ombros", why: "Pontas texturizadas dão volume na mandíbula, o que favorece rostos ovais que afinam levemente." },
        { name: "Rabo de cavalo alto", why: "Prender o cabelo mostra todo o contorno, e o oval é o formato que fica melhor totalmente à mostra." },
      ],
      avoid: [
        "Franjas pesadas e retas que cobrem toda a testa, o que pode encurtar o rosto.",
        "Muito volume no topo da cabeça se seu rosto tende a ser longo, pois pode puxar para o oblongo.",
      ],
      tips: "Quase qualquer comprimento funciona. Escolha primeiro um corte de acordo com a textura do seu cabelo e seu estilo de vida, depois ajuste a franja e a risca.",
    },
    men: {
      hairstyles: [
        { name: "Degradê clássico (taper)", why: "Laterais curtas e um pouco de comprimento em cima mantêm as proporções naturais." },
        { name: "Topete (quiff)", why: "Altura moderada em cima favorece o rosto oval; mantenha discreto para o rosto não parecer mais longo." },
        { name: "Risca lateral", why: "Uma risca lateral bem definida é atemporal e valoriza traços equilibrados." },
        { name: "Crop texturizado", why: "Um corte curto com franja para a frente funciona porque a testa não precisa ser escondida." },
        { name: "Raspado (buzz cut)", why: "Rostos ovais têm o formato de cabeça uniforme que cortes muito curtos revelam." },
        { name: "Cabelo médio solto", why: "Cabelo atrás das orelhas emoldura as maçãs do rosto sem alargar." },
      ],
      avoid: [
        "Pompadours muito altos que exageram o comprimento.",
        "Franjas pesadas que cortam o rosto ao meio.",
      ],
      beards: [
        { name: "Barba curta quadrada (boxed)", why: "O comprimento uniforme ao redor da mandíbula mantém o formato equilibrado." },
        { name: "Barba por fazer cheia", why: "Dá um pouco de definição à mandíbula sem mudar o contorno." },
        { name: "Sem barba", why: "O oval é um dos poucos formatos que fica igualmente bem sem barba." },
      ],
      tips: "Evite acrescentar altura ou largura demais. Mantenha as laterais alinhadas e o topo moderado.",
    },
    glasses: {
      best: [
        { name: "Armações quadradas ou retangulares", why: "Linhas angulares criam contraste com as curvas suaves do oval." },
        { name: "Wayfarer", why: "O formato levemente trapezoidal combina com o afinamento suave da mandíbula." },
        { name: "Aviador", why: "O formato de gota repete o contorno oval de um jeito favorável." },
        { name: "Armações geométricas", why: "Armações hexagonais ou octogonais dão interesse a traços equilibrados." },
      ],
      avoid: [
        "Armações mais largas que a parte mais larga do seu rosto.",
        "Armações muito altas que cobrem as maçãs do rosto.",
      ],
    },
    makeup: "Rostos ovais precisam de pouco contorno. Use um bronzer leve logo abaixo das maçãs do rosto e nas têmporas, e concentre o iluminador nos pontos altos das bochechas, no dorso do nariz e no arco do cupido.",
    confusedWith: [
      { slug: "oblong", difference: "O oblongo é mais longo, com laterais mais retas e menos afinamento em direção ao queixo." },
      { slug: "heart", difference: "O rosto coração tem a testa claramente mais larga e um queixo estreito, muitas vezes pontudo." },
      { slug: "diamond", difference: "O rosto diamante tem testa e mandíbula estreitas, com maçãs do rosto bem mais largas." },
    ],
    faqs: [
      { q: "Como é um rosto oval?", a: "Um rosto oval é mais longo do que largo, mais largo nas maçãs do rosto, com testa um pouco mais estreita e uma mandíbula que afina até um queixo arredondado. Ele lembra um ovo de cabeça para baixo." },
      { q: "O rosto oval é bonito?", a: "O oval é muitas vezes chamado de formato de rosto ideal porque suas proporções são equilibradas, e muitas pessoas o consideram atraente. Mas a beleza depende de muito mais do que o contorno, e todo formato de rosto tem seus pontos fortes." },
      { q: "O rosto oval é raro?", a: "O oval não é raro. É um dos formatos de rosto mais comuns, embora muitas pessoas sejam uma mistura de oval com outro formato." },
      { q: "Qual o melhor corte de cabelo para rosto oval?", a: "A maioria dos cortes favorece o rosto oval. Camadas longas, long bobs, franja cortina e pixie são populares entre mulheres; degradê, risca lateral e crops texturizados são populares entre homens." },
      { q: "Quais óculos combinam com rosto oval?", a: "Armações quadradas, retangulares, wayfarer e aviador funcionam. Escolha armações que não sejam mais largas que a parte mais larga do seu rosto." },
    ],
  },
  round: {
    name: "Redondo",
    title: "Rosto redondo: como identificar, cortes e óculos",
    description: "O rosto redondo é quase tão largo quanto longo, com bochechas cheias e mandíbula suave. Veja como identificar e os melhores cortes e óculos.",
    definition: "O formato de rosto redondo é mais ou menos tão largo quanto longo. As bochechas são a parte mais larga e cheia, a mandíbula é suave e sem cantos visíveis, e o queixo é arredondado. Como largura e comprimento são parecidos, o contorno lembra um círculo.",
    measurements: [
      { feature: "Comprimento x largura do rosto", value: "Perto de 1:1, raramente mais de 1,3×" },
      { feature: "Ponto mais largo", value: "Bochechas" },
      { feature: "Testa", value: "Largura parecida com a da mandíbula" },
      { feature: "Mandíbula", value: "Larga, suave e curva" },
      { feature: "Queixo", value: "Curto e arredondado" },
    ],
    traits: [
      "Bochechas cheias",
      "Mandíbula suave e curva, sem ângulos",
      "Queixo curto",
      "Linha do cabelo muitas vezes também arredondada",
    ],
    howToTell: [
      "Meça a largura do rosto na altura das maçãs do rosto e o comprimento da linha do cabelo até o queixo. Se forem quase iguais, você provavelmente tem rosto redondo.",
      "Sua mandíbula forma uma curva contínua da orelha até o queixo.",
      "Suas bochechas parecem cheias mesmo quando você não está sorrindo.",
    ],
    body: `## Redondo x quadrado

Rostos redondos e quadrados têm comprimento e largura parecidos. A diferença está na mandíbula: o rosto quadrado tem uma mandíbula forte e angular, com cantos visíveis abaixo das orelhas, enquanto o redondo forma uma curva suave. Se você passar o dedo pela mandíbula e sentir um canto definido, provavelmente tende ao quadrado.

## Objetivo do visual para rostos redondos

A ideia é acrescentar um pouco de comprimento e ângulo. Volume no topo da cabeça, risca lateral, camadas longas que passam do queixo e óculos angulares levam o olhar para cima e para baixo, em vez de para os lados.

## O peso muda o rosto redondo?

O peso influencia o quanto as bochechas parecem cheias, então emagrecer ou engordar pode deixar o rosto mais redondo ou mais anguloso. A estrutura óssea (largura da testa, das maçãs do rosto e da mandíbula) não muda, então seu formato básico costuma continuar o mesmo. Veja nosso guia sobre [se emagrecer muda o formato do rosto](/blog/does-losing-weight-change-your-face-shape/).`,
    women: {
      hairstyles: [
        { name: "Camadas longas abaixo do queixo", why: "O comprimento além da mandíbula alonga o rosto visualmente." },
        { name: "Risca lateral profunda", why: "Uma risca fora do centro cria assimetria e linhas diagonais que afinam o rosto redondo." },
        { name: "Franja longa de lado", why: "Uma franja inclinada sobre a testa quebra a largura." },
        { name: "Long bob assimétrico", why: "Um long bob mais comprido na frente leva o olhar para baixo." },
        { name: "Volume no topo", why: "Altura em cima acrescenta comprimento à silhueta." },
        { name: "Pixie com volume", why: "O pixie funciona se for mais longo e texturizado em cima, em vez de baixo e arredondado." },
        { name: "Ondas suaves abaixo das maçãs do rosto", why: "Ondas que começam mais embaixo mantêm o volume longe das bochechas." },
      ],
      avoid: [
        "Chanel arredondado na altura do queixo, que repete o círculo.",
        "Franjas retas e pesadas que encurtam o rosto.",
        "Volume nas laterais perto das bochechas.",
      ],
      tips: "Procure tudo que acrescente altura em cima ou comprimento abaixo do queixo, e mantenha a parte mais volumosa do penteado longe das bochechas.",
    },
    men: {
      hairstyles: [
        { name: "Pompadour ou topete", why: "Altura em cima faz o rosto parecer mais longo." },
        { name: "Faux hawk", why: "Altura concentrada no centro alonga o contorno." },
        { name: "Undercut com comprimento em cima", why: "Laterais bem curtas tiram largura; comprimento em cima acrescenta ângulo." },
        { name: "Risca lateral com fade", why: "Linhas limpas e um fade justo criam estrutura." },
        { name: "Franja angular", why: "Uma franja jogada para um lado acrescenta linhas diagonais." },
      ],
      avoid: [
        "Corte tigelinha e crops arredondados.",
        "Cabelo longo na altura das bochechas, que acrescenta largura.",
        "Raspado com o mesmo comprimento em toda a cabeça.",
      ],
      beards: [
        { name: "Cavanhaque ou cavanhaque estendido", why: "Pelos concentrados no queixo acrescentam comprimento." },
        { name: "Barba quadrada (boxed), mais curta nas laterais", why: "Manter as bochechas curtas e o queixo mais longo cria uma mandíbula angular." },
        { name: "Barba fina na mandíbula com queixo mais longo", why: "Define a linha da mandíbula que falta ao rosto redondo." },
      ],
      tips: "Mantenha as laterais curtas e crie altura em cima. Uma barba mais longa no queixo do que nas bochechas é a mudança mais eficaz.",
    },
    glasses: {
      best: [
        { name: "Armações retangulares", why: "Linhas retas contrastam com as curvas suaves e fazem o rosto parecer mais longo." },
        { name: "Armações quadradas", why: "Ângulos dão estrutura ao rosto redondo." },
        { name: "Armações browline", why: "Uma borda superior marcada leva o olhar para cima." },
        { name: "Armações gatinho", why: "Cantos externos levantados acrescentam elevação e ângulo." },
      ],
      avoid: [
        "Armações pequenas e redondas, que repetem o círculo.",
        "Armações mais estreitas que o seu rosto.",
      ],
    },
    makeup: "Faça o contorno nas bordas externas do rosto, das têmporas até a mandíbula, e aplique o bronzer abaixo das maçãs do rosto em um ângulo para cima. Ilumine o centro (testa, dorso do nariz, queixo) para acrescentar comprimento.",
    confusedWith: [
      { slug: "square", difference: "O rosto quadrado tem as mesmas proporções, mas uma mandíbula marcada e angular." },
      { slug: "oval", difference: "O rosto oval é visivelmente mais longo do que largo." },
      { slug: "pear", difference: "O rosto pera é mais largo na mandíbula, e não nas bochechas." },
    ],
    faqs: [
      { q: "Como saber se tenho rosto redondo?", a: "Se seu rosto é mais ou menos tão largo quanto longo, as bochechas são a parte mais larga e cheia e a mandíbula forma uma curva sem cantos visíveis, você provavelmente tem rosto redondo." },
      { q: "Qual o melhor corte de cabelo para rosto redondo?", a: "Cortes que acrescentam altura em cima ou comprimento abaixo do queixo funcionam melhor: camadas longas, risca lateral profunda, franja de lado e long bob assimétrico para mulheres; topete, pompadour e undercut para homens." },
      { q: "Quais óculos combinam com rosto redondo?", a: "Armações angulares, como retangulares, quadradas, browline e gatinho, dão estrutura. Evite armações pequenas e redondas." },
      { q: "Um rosto redondo pode ficar oval?", a: "A estrutura óssea não muda, mas perder gordura facial pode deixar o rosto redondo mais definido. Cortes de cabelo e contorno também podem fazê-lo parecer mais longo." },
      { q: "O rosto redondo é bonito?", a: "Sim. Rostos redondos passam uma impressão jovem e simpática, e muitos atores e modelos conhecidos têm rosto redondo." },
    ],
  },
  square: {
    name: "Quadrado",
    title: "Rosto quadrado: características, cortes e óculos",
    description: "O rosto quadrado tem mandíbula forte e angular e testa, maçãs e mandíbula de largura parecida. Veja os cortes, óculos e barbas ideais.",
    definition: "O formato de rosto quadrado tem testa, maçãs do rosto e mandíbula de largura parecida, e uma linha da mandíbula forte e angular, com cantos definidos abaixo das orelhas. O rosto é apenas um pouco mais longo do que largo.",
    measurements: [
      { feature: "Comprimento x largura do rosto", value: "Cerca de 1–1,3× mais longo que largo" },
      { feature: "Ponto mais largo", value: "Uniforme entre testa, maçãs do rosto e mandíbula" },
      { feature: "Testa", value: "Larga e muitas vezes reta na linha do cabelo" },
      { feature: "Mandíbula", value: "Larga, marcada, com ângulos nítidos" },
      { feature: "Queixo", value: "Largo e reto" },
    ],
    traits: [
      "Mandíbula forte e larga",
      "Cantos da mandíbula visíveis",
      "Laterais retas",
      "Queixo largo e reto",
    ],
    howToTell: [
      "Sua mandíbula forma um canto nítido abaixo das orelhas.",
      "Sua testa, maçãs do rosto e mandíbula parecem ter mais ou menos a mesma largura.",
      "Seu rosto é só um pouco mais longo do que largo.",
    ],
    body: `## Quadrado x retangular

O rosto retangular tem a mesma mandíbula forte, mas é visivelmente mais longo. Se o comprimento do seu rosto passa bem de 1,4× a largura, veja o [formato de rosto retangular](/pt/face-shapes/rectangle/).

## Objetivo do visual

Para mulheres, o objetivo costuma ser suavizar os ângulos: camadas ao redor da mandíbula, ondas e franja cortina. Para homens, a mandíbula quadrada costuma ser um ponto forte a valorizar, então laterais curtas e a linha da mandíbula bem definida funcionam bem.

## O rosto quadrado é masculino?

Uma mandíbula forte costuma ser descrita como masculina, mas muitas mulheres com rosto quadrado (Angelina Jolie, Olivia Wilde, Keira Knightley) são conhecidas justamente por isso. Um visual mais suave apenas desloca a atenção para os olhos e as maçãs do rosto.`,
    women: {
      hairstyles: [
        { name: "Camadas suaves emoldurando o rosto", why: "Camadas na altura da mandíbula suavizam seus ângulos." },
        { name: "Ondas longas", why: "Curvas contrastam com linhas retas e trazem suavidade." },
        { name: "Franja cortina", why: "Uma franja leve e repartida arredonda os cantos da testa." },
        { name: "Franja de lado", why: "Uma franja diagonal quebra uma testa larga." },
        { name: "Long bob texturizado abaixo da mandíbula", why: "Terminar abaixo da mandíbula evita marcar uma linha no seu ponto mais largo." },
        { name: "Coque solto com mechas soltas", why: "Mechas suaves ao redor do rosto disfarçam os cantos da mandíbula." },
      ],
      avoid: [
        "Chanel reto na altura do queixo que termina exatamente na mandíbula.",
        "Risca no meio marcada com cabelo liso e sem volume.",
        "Franjas retas e pesadas.",
      ],
      tips: "Busque suavidade e movimento ao redor da mandíbula e da testa.",
    },
    men: {
      hairstyles: [
        { name: "Corte militar (crew cut)", why: "Cabelo curto e alinhado valoriza uma mandíbula forte." },
        { name: "Raspado (buzz cut)", why: "Rostos quadrados ficam bem com cabelo bem curto porque a mandíbula dá estrutura." },
        { name: "Risca lateral com degradê (taper)", why: "Clássico e marcante; repete a mandíbula angular." },
        { name: "Crop texturizado", why: "Um crop moderno e despojado traz suavidade em cima." },
        { name: "Penteado para trás", why: "Deixa o rosto todo à mostra; funciona melhor com traços definidos." },
      ],
      avoid: [
        "Corte tigelinha ou franjas pesadas que deixam o rosto mais curto e largo.",
        "Cabelo longo que termina na mandíbula.",
      ],
      beards: [
        { name: "Barba por fazer", why: "Destaca a linha da mandíbula sem escondê-la." },
        { name: "Barba curta quadrada (boxed)", why: "Contornos alinhados acompanham a mandíbula natural." },
        { name: "Barba circular (cavanhaque fechado)", why: "Um cavanhaque arredondado com bigode suaviza uma mandíbula muito larga." },
      ],
      tips: "Laterais curtas e um pouco de textura em cima é a escolha fácil. Mantenha a barba curta para mostrar a mandíbula.",
    },
    glasses: {
      best: [
        { name: "Armações redondas", why: "Curvas equilibram ângulos fortes." },
        { name: "Armações ovais", why: "Suavizam a mandíbula e a testa largas." },
        { name: "Sem aro ou meio aro", why: "Armações leves não acrescentam mais linhas duras." },
        { name: "Armações gatinho", why: "Cantos levantados chamam atenção para as maçãs do rosto." },
      ],
      avoid: [
        "Armações quadradas e retas que repetem a mandíbula.",
        "Armações mais estreitas que a mandíbula.",
      ],
    },
    makeup: "Faça o contorno nos cantos da testa e nos ângulos da mandíbula para suavizá-los. Esfume o blush em movimentos circulares nas maçãs do rosto e ilumine o centro da testa e o queixo.",
    confusedWith: [
      { slug: "rectangle", difference: "O rosto retangular tem a mesma mandíbula, mas é bem mais longo." },
      { slug: "round", difference: "O rosto redondo tem proporções parecidas, mas mandíbula suave e curva." },
      { slug: "triangle", difference: "O rosto triangular tem a mandíbula claramente mais larga que a testa." },
    ],
    faqs: [
      { q: "Como saber se meu rosto é quadrado?", a: "Sua testa, maçãs do rosto e mandíbula têm mais ou menos a mesma largura, sua mandíbula tem cantos nítidos abaixo das orelhas e seu rosto é só um pouco mais longo do que largo." },
      { q: "Qual corte de cabelo combina com rosto quadrado?", a: "Mulheres: camadas suaves, ondas, franja cortina e franja de lado. Homens: corte militar, raspado, risca lateral e crops texturizados." },
      { q: "Quais óculos combinam com rosto quadrado?", a: "Armações redondas, ovais, sem aro e gatinho suavizam os ângulos. Evite armações quadradas e retas." },
      { q: "O rosto quadrado é bonito?", a: "Uma mandíbula definida é amplamente vista como atraente tanto em homens quanto em mulheres. Muitos modelos e atores têm rosto quadrado." },
      { q: "Qual a diferença entre rosto quadrado e retangular?", a: "O comprimento. Os dois têm mandíbula forte, mas o rosto retangular é visivelmente mais longo do que largo." },
    ],
  },
  oblong: {
    name: "Oblongo",
    title: "Rosto oblongo (longo): características e cortes",
    description: "O rosto oblongo é longo e estreito, com testa, maçãs e mandíbula de largura parecida. Veja como identificar e os melhores cortes e óculos.",
    definition: "O formato de rosto oblongo (também chamado de rosto longo) é visivelmente mais longo do que largo, geralmente 1,7× ou mais. A testa, as maçãs do rosto e a mandíbula têm larguras parecidas, as laterais são bem retas e a linha da mandíbula é levemente arredondada, não marcada.",
    measurements: [
      { feature: "Comprimento x largura do rosto", value: "Cerca de 1,7× ou mais" },
      { feature: "Ponto mais largo", value: "Uniforme, sem um ponto mais largo" },
      { feature: "Testa", value: "Muitas vezes alta" },
      { feature: "Mandíbula", value: "Arredondada, largura parecida com a da testa" },
      { feature: "Queixo", value: "Pode ser longo" },
    ],
    traits: [
      "Contorno longo e estreito",
      "Linha das bochechas reta",
      "Testa alta ou queixo longo",
      "Cantos da mandíbula arredondados",
    ],
    howToTell: [
      "Seu rosto parece claramente longo nas fotos, mesmo com o cabelo solto.",
      "Não há um ponto mais largo evidente; seu rosto é bem reto dos dois lados.",
      "Sua mandíbula é arredondada, não marcadamente angular (uma mandíbula marcada indica rosto retangular).",
    ],
    body: `## Oblongo, longo e retangular: qual a diferença?

"Rosto longo" e "rosto oblongo" significam a mesma coisa. O rosto **retangular** é um rosto longo com mandíbula forte e angular; o rosto **oblongo** tem mandíbula mais suave e arredondada. Os dois se beneficiam da mesma estratégia: acrescentar largura nas laterais e evitar altura extra.

## Objetivo do visual

Criar a ilusão de largura. Franjas encurtam uma testa alta, volume nas laterais (ondas, cachos, chanel em camadas) acrescenta largura, e armações de óculos largas ou altas quebram o comprimento.

## Oval x oblongo

Se você não sabe se é oval ou oblongo, compare o comprimento com a largura. O oval fica em torno de 1,5×; o oblongo fica perto de 1,7× ou mais, com laterais mais retas. Leia a [comparação completa entre oval e oblongo](/blog/oval-vs-oblong-face-shape/).`,
    women: {
      hairstyles: [
        { name: "Franja reta ou franja cortina", why: "A franja encurta uma testa alta e faz o rosto parecer menos longo." },
        { name: "Ondas na altura dos ombros", why: "Volume nas laterais acrescenta largura onde o rosto oblongo precisa." },
        { name: "Chanel na altura do queixo", why: "Um chanel que termina na mandíbula cria uma linha horizontal que equilibra o comprimento." },
        { name: "Shag em camadas", why: "Camadas desfiadas nas laterais acrescentam largura e movimento." },
        { name: "Cachos volumosos", why: "Os cachos se espalham para os lados em vez de para baixo." },
        { name: "Risca lateral com volume", why: "Acrescenta assimetria e largura sem altura." },
      ],
      avoid: [
        "Cabelo muito longo, liso e sem volume, que alonga o rosto.",
        "Altura no topo da cabeça, como coques altos.",
        "Penteados para trás sem volume nas laterais.",
      ],
      tips: "Pense em largura, não em altura. Se você ama cabelo longo, acrescente camadas e ondas para que ele não caia reto.",
    },
    men: {
      hairstyles: [
        { name: "Franja ou crop para a frente", why: "Cabelo penteado para a frente encurta a testa." },
        { name: "Risca lateral com laterais mais cheias", why: "Evite skin fade; manter algum comprimento nas laterais acrescenta largura." },
        { name: "Cabelo médio texturizado", why: "Volume nas laterais equilibra o comprimento." },
        { name: "Corte social clássico (sem laterais muito curtas)", why: "Alinhado, mas sem ficar rígido." },
        { name: "Corte César", why: "Uma franja curta e horizontal reduz o comprimento do rosto." },
      ],
      avoid: [
        "Pompadours e topetes altos.",
        "Fades altos muito justos com cabelo longo em cima.",
        "Cabelo longo caindo reto.",
      ],
      beards: [
        { name: "Barba cheia, mais volumosa nas laterais", why: "Largura nas bochechas e na mandíbula equilibra o comprimento." },
        { name: "Costeletas largas ou barba por fazer larga", why: "A ênfase horizontal alarga o rosto." },
        { name: "Evite barbas longas no queixo", why: "Um cavanhaque longo ou uma barba pontuda acrescenta ainda mais comprimento." },
      ],
      tips: "Mantenha pouca altura e bastante largura, tanto no cabelo quanto na barba.",
    },
    glasses: {
      best: [
        { name: "Armações oversized", why: "Armações grandes cobrem mais do comprimento do rosto." },
        { name: "Lentes altas", why: "Lentes mais altas quebram o espaço vertical." },
        { name: "Hastes decorativas ou em contraste", why: "Acrescentam largura nas laterais." },
        { name: "Armações redondas ou quadradas", why: "As duas funcionam, desde que sejam altas o suficiente." },
      ],
      avoid: [
        "Armações pequenas e estreitas.",
        "Armações retangulares baixas que destacam o comprimento.",
      ],
    },
    makeup: "Aplique bronzer ao longo da linha do cabelo no alto da testa e abaixo do queixo para encurtar o rosto visualmente. Espalhe o blush na horizontal pelas bochechas, em vez de puxar em direção às têmporas.",
    confusedWith: [
      { slug: "oval", difference: "O rosto oval é mais curto (cerca de 1,5×) e afina mais em direção ao queixo." },
      { slug: "rectangle", difference: "O rosto retangular é igualmente longo, mas tem mandíbula marcada e angular." },
      { slug: "diamond", difference: "O rosto diamante tem testa e queixo estreitos, com maçãs do rosto largas." },
    ],
    faqs: [
      { q: "O que é rosto oblongo?", a: "Um rosto oblongo é visivelmente mais longo do que largo, com testa, maçãs do rosto e mandíbula de largura parecida e linha da mandíbula arredondada. Também é chamado de rosto longo." },
      { q: "Rosto oblongo é o mesmo que rosto longo?", a: "Sim. Oblongo e rosto longo descrevem o mesmo formato. Um rosto longo com mandíbula marcada e quadrada é chamado de retangular." },
      { q: "Qual o melhor corte de cabelo para rosto oblongo?", a: "Franjas, ondas na altura dos ombros, chanel e shags em camadas que acrescentam largura. Homens devem manter algum comprimento nas laterais e evitar penteados altos." },
      { q: "Quais óculos combinam com rosto oblongo?", a: "Armações oversized e altas que cobrem mais do rosto, além de armações com hastes decorativas para acrescentar largura." },
      { q: "O rosto oblongo é bonito?", a: "Sim. Rostos longos são comuns entre modelos e atores e ficam ótimos em fotos. O visual certo equilibra comprimento e largura." },
    ],
  },
  rectangle: {
    name: "Retangular",
    title: "Rosto retangular: características e cortes",
    description: "O rosto retangular é longo, com mandíbula forte e quadrada e laterais retas. Veja como difere do oblongo e os cortes, óculos e barbas ideais.",
    definition: "O formato de rosto retangular é mais longo do que largo, como o rosto oblongo, mas com uma mandíbula forte e angular. A testa, as maçãs do rosto e a mandíbula têm mais ou menos a mesma largura, as laterais são retas e a mandíbula tem cantos definidos.",
    measurements: [
      { feature: "Comprimento x largura do rosto", value: "Cerca de 1,6× ou mais" },
      { feature: "Ponto mais largo", value: "Uniforme da testa à mandíbula" },
      { feature: "Testa", value: "Muitas vezes alta e reta na linha do cabelo" },
      { feature: "Mandíbula", value: "Larga, com cantos marcados" },
      { feature: "Queixo", value: "Largo e reto" },
    ],
    traits: [
      "Rosto longo",
      "Laterais retas e paralelas",
      "Cantos da mandíbula angulares",
      "Linha do cabelo quadrada",
    ],
    howToTell: [
      "Seu rosto é claramente longo.",
      "Sua mandíbula tem cantos nítidos, como a de um rosto quadrado.",
      "Sua testa e sua mandíbula têm mais ou menos a mesma largura.",
    ],
    body: `## Rosto retangular x oblongo

Os dois são rostos longos. A diferença está na mandíbula: o **retangular** tem mandíbula marcada e angular, com cantos definidos, enquanto o **oblongo** tem mandíbula arredondada. Muitos guias tratam os dois como iguais, mas o visual ideal é diferente. Rostos retangulares precisam de largura e também de suavidade ao redor da mandíbula. Veja o [guia completo de retangular x oblongo](/blog/rectangle-vs-oblong-face-shape/).

## Retangular x quadrado

O quadrado e o retangular compartilham a mandíbula angular. O rosto quadrado é só um pouco mais longo do que largo; o retangular é bem mais longo.

## Objetivo do visual

Acrescentar largura nas laterais, reduzir a altura em cima e suavizar os cantos da mandíbula e da testa.`,
    women: {
      hairstyles: [
        { name: "Franja leve e desfiada", why: "Encurta o rosto e suaviza uma linha do cabelo quadrada." },
        { name: "Chanel em camadas abaixo da mandíbula", why: "Acrescenta largura e quebra os cantos da mandíbula." },
        { name: "Ondas soltas", why: "Curvas suavizam os ângulos e acrescentam largura." },
        { name: "Shag com camadas emoldurando o rosto", why: "Textura nas laterais equilibra o comprimento." },
        { name: "Camadas longas de lado", why: "Linhas diagonais reduzem a ênfase vertical." },
      ],
      avoid: [
        "Cabelo longo, liso e escorrido.",
        "Altura no topo da cabeça.",
        "Cortes retos que terminam nos cantos da mandíbula.",
      ],
      tips: "Combine a estratégia do oblongo (acrescentar largura) com a do quadrado (suavizar a mandíbula).",
    },
    men: {
      hairstyles: [
        { name: "Franja texturizada", why: "Cobre parte da testa para encurtar o rosto." },
        { name: "Risca lateral com laterais moderadas", why: "Mantém largura nas têmporas." },
        { name: "Crop curto e despojado", why: "Pouca altura, textura suave." },
        { name: "Cabelo médio penteado para trás (com volume nas laterais)", why: "Funciona se não acrescentar altura." },
      ],
      avoid: [
        "Topetes e pompadours altos.",
        "Skin fade com altura em cima.",
      ],
      beards: [
        { name: "Barba cheia mantida larga", why: "Acrescenta largura; evite que o queixo fique longo demais." },
        { name: "Barba por fazer cheia", why: "Mostra a mandíbula sem acrescentar comprimento." },
      ],
      tips: "Evite acrescentar comprimento em qualquer extremidade do rosto.",
    },
    glasses: {
      best: [
        { name: "Armações redondas ou ovais", why: "Suavizam os ângulos." },
        { name: "Armações oversized", why: "Quebram o comprimento." },
        { name: "Aviador", why: "Largo em cima, com a parte de baixo curva." },
      ],
      avoid: [
        "Armações retangulares estreitas.",
        "Armações pequenas que parecem perdidas em um rosto longo.",
      ],
    },
    makeup: "Escureça o alto da testa e os cantos da mandíbula, e aplique o blush na horizontal nas maçãs do rosto para acrescentar largura.",
    confusedWith: [
      { slug: "oblong", difference: "O oblongo é igualmente longo, mas tem mandíbula arredondada." },
      { slug: "square", difference: "O quadrado tem a mesma mandíbula, mas é bem mais curto." },
    ],
    faqs: [
      { q: "O que é rosto retangular?", a: "Um rosto longo com laterais retas e mandíbula forte e angular. Testa, maçãs do rosto e mandíbula têm mais ou menos a mesma largura." },
      { q: "Rosto retangular é o mesmo que oblongo?", a: "Não exatamente. Os dois são longos, mas o retangular tem mandíbula marcada e quadrada, e o oblongo tem mandíbula arredondada." },
      { q: "Qual corte de cabelo combina com rosto retangular?", a: "Franjas, chanel em camadas, ondas soltas e shags que acrescentam largura e suavizam a mandíbula." },
      { q: "Quais óculos combinam com rosto retangular?", a: "Armações redondas, ovais, aviador e oversized." },
    ],
  },
};
