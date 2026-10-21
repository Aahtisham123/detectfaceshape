import type { ShapeT } from "../types";

export const shapesB: Record<string, ShapeT> = {
  heart: {
    name: "Cœur",
    title: "Visage en cœur : traits, coupes et lunettes",
    description:
      "Le visage en cœur a un front large, des pommettes hautes et un menton étroit. Comment le reconnaître, coupes, lunettes et maquillage.",
    definition:
      "Un visage en cœur est plus large au niveau du front et s'affine jusqu'à un menton étroit, souvent pointu. Les pommettes sont hautes, la mâchoire est étroite, et certains visages en cœur présentent une pointe de cheveux en V (pointe de veuve) à la racine des cheveux.",
    measurements: [
      { feature: "Longueur vs largeur du visage", value: "Environ 1,3 à 1,5 fois plus long que large" },
      { feature: "Point le plus large", value: "Front et/ou pommettes" },
      { feature: "Front", value: "Large" },
      { feature: "Mâchoire", value: "Étroite, s'affine nettement" },
      { feature: "Menton", value: "Étroit, souvent pointu" },
    ],
    traits: [
      "Front large",
      "Pommettes hautes",
      "Mâchoire étroite",
      "Menton pointu",
      "Parfois une pointe de veuve",
    ],
    howToTell: [
      "Votre front est la partie la plus large de votre visage.",
      "Votre visage se rétrécit nettement des pommettes jusqu'au menton.",
      "Votre menton est petit ou pointu.",
    ],
    body: `## Cœur ou triangle inversé

Les deux sont larges en haut et étroits au niveau du menton. Le visage en cœur est plus doux, avec des joues arrondies et souvent une pointe de veuve. Le [visage en triangle inversé](/fr/face-shapes/inverted-triangle/) est plus anguleux, avec une mâchoire plus marquée.

## Cœur ou diamant

Le visage en diamant a un front **étroit**, les pommettes étant le point le plus large. Le visage en cœur a un front **large**. Pour en savoir plus, lisez [visage en cœur ou en diamant](/blog/heart-vs-diamond-face-shape/).

## Objectif coiffure

Équilibrer un front plus large et un menton plus étroit : une frange de côté réduit la largeur du front, et du volume à hauteur du menton étoffe le bas du visage.`,
    women: {
      hairstyles: [
        { name: "Frange de côté", why: "Couvre une partie d'un front large et ajoute des lignes diagonales." },
        { name: "Carré au menton", why: "Ajoute du volume exactement là où le visage s'affine." },
        { name: "Carré long aux pointes retournées vers l'extérieur", why: "La largeur au niveau de la mâchoire équilibre le front." },
        { name: "Dégradé long commençant au menton", why: "Le volume au niveau et en dessous de la mâchoire étoffe le bas du visage." },
        { name: "Frange rideau", why: "Adoucit le front et encadre les pommettes." },
        { name: "Raie très décalée sur le côté", why: "Casse la largeur du front." },
      ],
      avoid: [
        "Le volume au sommet du crâne ou aux tempes.",
        "Les coiffures plaquées en arrière qui dégagent tout le front.",
        "Les dégradés courts et effilés sur le dessus.",
      ],
      tips: "Gardez le dessus lisse et placez le volume à hauteur du menton.",
    },
    men: {
      hairstyles: [
        { name: "Cheveux mi-longs avec raie sur le côté", why: "Couvre une partie du front et ajoute de la largeur plus bas." },
        { name: "Frange", why: "Réduit un front large." },
        { name: "Coupe texturée plus longue", why: "Le volume sur les côtés près des oreilles équilibre le menton." },
        { name: "Cheveux mi-longs décoiffés", why: "Adoucit le dessus et ajoute du volume plus bas." },
      ],
      avoid: [
        "Les côtés très courts avec beaucoup de volume sur le dessus.",
        "Les coiffures plaquées en arrière.",
      ],
      beards: [
        { name: "Barbe pleine", why: "Ajoute de la largeur et du volume à un menton étroit." },
        { name: "Barbe carrée (boxed beard)", why: "Rend plus carré un menton pointu." },
        { name: "Barbe de quelques jours", why: "Ajoute une ombre de largeur au niveau de la mâchoire." },
      ],
      tips: "Pour les hommes au visage en cœur, la barbe est l'outil le plus efficace, car elle élargit le bas du visage.",
    },
    glasses: {
      best: [
        { name: "Montures plus marquées en bas", why: "Ajoutent de la largeur à la moitié inférieure du visage." },
        { name: "Montures rondes ou ovales", why: "Adoucissent un front large." },
        { name: "Montures sans cercle ou de couleur claire", why: "N'alourdissent pas le haut du visage." },
        { name: "Lunettes aviateur", why: "Plus larges en bas qu'en haut." },
      ],
      avoid: [
        "Les montures browline et celles plus marquées en haut.",
        "Les montures papillon (cat-eye) aux pointes exagérées.",
      ],
    },
    makeup:
      "Sculptez les tempes et les côtés du front pour en réduire la largeur, et illuminez le menton. Appliquez le blush sur le haut des pommettes et estompez vers l'extérieur.",
    confusedWith: [
      { slug: "inverted-triangle", difference: "Le visage en triangle inversé est plus anguleux, avec une mâchoire plus marquée." },
      { slug: "diamond", difference: "Le visage en diamant a un front étroit, et non large." },
      { slug: "oval", difference: "Le visage ovale s'affine plus doucement, avec un menton arrondi." },
    ],
    faqs: [
      {
        q: "À quoi ressemble un visage en cœur ?",
        a: "Un front large, des pommettes hautes et une mâchoire qui s'affine jusqu'à un menton petit ou pointu, parfois avec une pointe de veuve.",
      },
      {
        q: "Quelle coupe de cheveux pour un visage en cœur ?",
        a: "Les franges de côté, les carrés au menton, les carrés longs et les dégradés longs qui ajoutent du volume au niveau du menton.",
      },
      {
        q: "Quelles lunettes pour un visage en cœur ?",
        a: "Les montures plus marquées en bas, rondes, ovales, sans cercle et aviateur.",
      },
      {
        q: "Le visage en cœur est-il rare ?",
        a: "Non. Le visage en cœur fait partie des formes de visage les plus courantes.",
      },
      {
        q: "Tous les visages en cœur ont-ils une pointe de veuve ?",
        a: "Non. La pointe de veuve est fréquente, mais pas indispensable.",
      },
    ],
  },
  diamond: {
    name: "Diamant",
    title: "Visage en diamant : traits, coupes et lunettes",
    description:
      "Le visage en diamant a des pommettes hautes et larges, un front et une mâchoire étroits. Comment le reconnaître, coupes, lunettes, maquillage.",
    definition:
      "Un visage en diamant est plus large au niveau des pommettes, avec un front et une mâchoire nettement plus étroits. Le menton est étroit et souvent pointu, et les pommettes sont hautes et saillantes. C'est l'une des formes de visage les moins courantes.",
    measurements: [
      { feature: "Longueur vs largeur du visage", value: "Environ 1,4 à 1,6 fois plus long que large" },
      { feature: "Point le plus large", value: "Les pommettes, nettement" },
      { feature: "Front", value: "Étroit" },
      { feature: "Mâchoire", value: "Étroite, anguleuse" },
      { feature: "Menton", value: "Étroit, souvent pointu" },
    ],
    traits: [
      "Pommettes hautes et larges",
      "Front étroit",
      "Mâchoire étroite",
      "Menton pointu",
    ],
    howToTell: [
      "Vos pommettes dépassent nettement de votre front et de votre mâchoire.",
      "Votre front et votre mâchoire paraissent tous deux étroits.",
      "Votre menton se termine en pointe.",
    ],
    body: `## Diamant ou ovale

Dans les deux cas, les pommettes sont le point le plus large. Dans un visage ovale, le front n'est que légèrement plus étroit ; dans un visage en diamant, le front et la mâchoire sont **beaucoup** plus étroits. Voir [visage en diamant ou ovale](/blog/diamond-vs-oval-face-shape/).

## Diamant ou cœur

Le visage en cœur a un front large ; le visage en diamant a un front étroit.

## Le visage en diamant est-il la forme la plus rare ?

Le visage en diamant est souvent présenté comme la forme de visage la plus rare. Notre [guide sur la forme de visage la plus rare](/blog/rarest-face-shape/) explique pourquoi.

## Objectif coiffure

Ajouter de la largeur au niveau du front et du menton pour équilibrer les pommettes. Les franges, les franges de côté et le volume à hauteur du menton y contribuent.`,
    women: {
      hairstyles: [
        { name: "Frange de côté ou frange droite", why: "Ajoute de la largeur à un front étroit." },
        { name: "Carré au menton", why: "Étoffe une mâchoire étroite." },
        { name: "Carré long glissé derrière les oreilles", why: "Met en valeur les pommettes tout en ajoutant de la largeur au niveau du menton." },
        { name: "Raie très décalée sur le côté avec des ondulations", why: "Du volume au-dessus et en dessous des pommettes." },
        { name: "Pixie texturé avec une longue frange", why: "De la largeur au niveau du front, les pommettes bien visibles." },
      ],
      avoid: [
        "Le volume à hauteur des joues.",
        "Les raies au milieu strictes avec des cheveux plats aux tempes.",
        "Les queues-de-cheval hautes plaquées en arrière qui affinent le front.",
      ],
      tips: "Placez le volume au-dessus et en dessous des pommettes, pas à leur niveau.",
    },
    men: {
      hairstyles: [
        { name: "Frange", why: "Élargit un front étroit." },
        { name: "Crop texturé", why: "De la largeur sur le dessus sans hauteur." },
        { name: "Cheveux mi-longs coiffés en arrière avec du volume aux tempes", why: "Étoffe les tempes." },
        { name: "Raie sur le côté avec des côtés plus fournis", why: "Évitez les fades serrés qui exagèrent les pommettes." },
      ],
      avoid: [
        "Les fades high and tight.",
        "Les coupes à la tondeuse très courtes qui dégagent un front étroit.",
      ],
      beards: [
        { name: "Barbe pleine", why: "Élargit un menton étroit." },
        { name: "Barbe centrée sur le menton", why: "Ajoute de la largeur et du volume à un menton pointu." },
      ],
      tips: "Étoffez le front et le menton ; laissez les pommettes être votre atout.",
    },
    glasses: {
      best: [
        { name: "Montures papillon (cat-eye)", why: "Soulignent les pommettes tout en ajoutant de la largeur au niveau des sourcils." },
        { name: "Montures ovales", why: "Adoucissent les traits anguleux." },
        { name: "Montures sans cercle", why: "Laissent l'attention sur les pommettes." },
        { name: "Montures browline", why: "Ajoutent de la largeur au niveau du front." },
      ],
      avoid: [
        "Les montures étroites.",
        "Les montures plus larges que les pommettes.",
      ],
    },
    makeup:
      "Illuminez le centre du front et le menton pour les élargir, et restez léger avec le contouring sous les pommettes, déjà bien saillantes.",
    confusedWith: [
      { slug: "oval", difference: "Le visage ovale a un front plus large et un menton plus doux." },
      { slug: "heart", difference: "Le visage en cœur a un front large." },
    ],
    faqs: [
      {
        q: "Qu'est-ce qu'un visage en diamant ?",
        a: "Un visage plus large au niveau des pommettes, avec un front étroit, une mâchoire étroite et un menton pointu.",
      },
      {
        q: "Le visage en diamant est-il la forme la plus rare ?",
        a: "Il est souvent décrit comme le plus rare, même si les données sont limitées. Il est moins courant que les visages ovale, rond, carré et en cœur.",
      },
      {
        q: "Quelle coupe de cheveux pour un visage en diamant ?",
        a: "Les franges, les carrés au menton et les coiffures avec du volume au-dessus et en dessous des pommettes.",
      },
      {
        q: "Quelles lunettes pour un visage en diamant ?",
        a: "Les montures papillon (cat-eye), ovales, sans cercle et browline.",
      },
    ],
  },
  triangle: {
    name: "Triangulaire",
    title: "Visage triangulaire : traits, coupes et lunettes",
    description:
      "Le visage triangulaire a une mâchoire anguleuse plus large que le front. Comment le reconnaître, et les coupes, lunettes et barbes idéales.",
    definition:
      "Un visage triangulaire a une mâchoire plus large que le front et les pommettes, avec une ligne de mâchoire anguleuse. Le visage s'affine vers le haut, si bien que le front en est la partie la plus étroite.",
    measurements: [
      { feature: "Longueur vs largeur du visage", value: "Environ 1,2 à 1,5 fois" },
      { feature: "Point le plus large", value: "Mâchoire" },
      { feature: "Front", value: "Point le plus étroit" },
      { feature: "Mâchoire", value: "Large, anguleuse" },
      { feature: "Menton", value: "Large" },
    ],
    traits: [
      "Mâchoire large et anguleuse",
      "Front étroit",
      "Pommettes plus étroites que la mâchoire",
    ],
    howToTell: [
      "Votre mâchoire est nettement plus large que votre front.",
      "Votre mâchoire a des angles bien définis.",
      "Votre visage s'affine vers le haut.",
    ],
    body: `## Triangulaire ou poire

Les deux sont plus larges au niveau de la mâchoire qu'au niveau du front. Le visage **triangulaire** désigne généralement une mâchoire anguleuse ; le visage en **poire** désigne un bas du visage plus plein et plus arrondi. De nombreux guides emploient les deux termes indifféremment.

## Objectif coiffure

Ajouter de la largeur au niveau du front et des tempes, et éviter d'élargir davantage la mâchoire.`,
    women: {
      hairstyles: [
        { name: "Volume au sommet du crâne et aux tempes", why: "Élargit la moitié supérieure." },
        { name: "Frange de côté", why: "Ajoute de la largeur à un front étroit." },
        { name: "Coupe dégradée avec du volume au-dessus des oreilles", why: "Équilibre une mâchoire large." },
        { name: "Pixie avec de la hauteur", why: "Attire le regard vers le haut." },
        { name: "Dégradé long commençant sous la mâchoire", why: "Évite d'ajouter de la largeur au niveau de la mâchoire." },
      ],
      avoid: [
        "Les carrés au menton.",
        "Les cheveux plats sur le dessus avec du volume au niveau de la mâchoire.",
      ],
      tips: "Créez de la largeur au-dessus des pommettes et gardez la ligne de la mâchoire épurée.",
    },
    men: {
      hairstyles: [
        { name: "Dessus texturé avec du volume", why: "Élargit le front." },
        { name: "Frange balayée sur le côté", why: "Ajoute de la largeur sur le dessus." },
        { name: "Cheveux mi-longs avec des côtés plus fournis au-dessus des oreilles", why: "Équilibre la mâchoire." },
      ],
      avoid: [
        "Les côtés courts et serrés avec un dessus plat.",
        "Les crops très courts.",
      ],
      beards: [
        { name: "Barbe de quelques jours légère", why: "Évite d'ajouter de la largeur à la mâchoire." },
        { name: "Bouc", why: "Attire le regard vers le centre plutôt que vers les angles de la mâchoire." },
      ],
      tips: "Gardez la largeur sur le haut ; taillez la barbe court sur les joues.",
    },
    glasses: {
      best: [
        { name: "Montures browline", why: "Leur bord supérieur marqué élargit la moitié supérieure." },
        { name: "Montures papillon (cat-eye)", why: "Du relief et de la largeur au niveau des tempes." },
        { name: "Montures plus marquées en haut ou décoratives", why: "Attirent le regard vers le haut." },
      ],
      avoid: [
        "Les montures plus marquées en bas.",
        "Les montures étroites.",
      ],
    },
    makeup: "Illuminez le front et les tempes, et sculptez les angles de la mâchoire.",
    confusedWith: [
      { slug: "pear", difference: "Le visage en poire est la version plus douce et plus arrondie des mêmes proportions." },
      { slug: "square", difference: "Le visage carré a un front aussi large que la mâchoire." },
    ],
    faqs: [
      {
        q: "Qu'est-ce qu'un visage triangulaire ?",
        a: "Un visage dont la mâchoire est plus large que le front et les pommettes, généralement avec une ligne de mâchoire anguleuse.",
      },
      {
        q: "Le visage triangulaire est-il identique au visage en poire ?",
        a: "Ils sont proches. Le visage en poire désigne généralement un bas du visage plus doux et plus plein ; le visage triangulaire, un bas du visage plus anguleux.",
      },
      {
        q: "Quelle coupe de cheveux pour un visage triangulaire ?",
        a: "Les coiffures avec du volume au sommet du crâne et aux tempes, les franges de côté et les dégradés qui commencent sous la mâchoire.",
      },
    ],
  },
  "inverted-triangle": {
    name: "Triangle inversé",
    title: "Visage en triangle inversé : traits et coupes",
    description:
      "Le visage en triangle inversé a un front large et une mâchoire étroite et anguleuse. Différences avec le visage en cœur, coupes et lunettes.",
    definition:
      "Un visage en triangle inversé est plus large au niveau du front et s'affine de façon assez rectiligne jusqu'à une mâchoire anguleuse et un menton étroit. Il ressemble au visage en cœur, mais en plus anguleux, et généralement sans pointe de veuve.",
    measurements: [
      { feature: "Longueur vs largeur du visage", value: "Environ 1,3 à 1,5 fois" },
      { feature: "Point le plus large", value: "Front" },
      { feature: "Front", value: "Large" },
      { feature: "Mâchoire", value: "Étroite, anguleuse" },
      { feature: "Menton", value: "Étroit, bien défini" },
    ],
    traits: [
      "Front large",
      "Affinement rectiligne",
      "Mâchoire anguleuse et étroite",
      "Menton bien défini",
    ],
    howToTell: [
      "Votre front est la partie la plus large de votre visage.",
      "Votre visage s'affine en lignes assez droites jusqu'au menton.",
      "Votre mâchoire est anguleuse plutôt que douce.",
    ],
    body: `## Triangle inversé ou cœur

Les deux sont larges en haut et étroits au niveau du menton. Le visage en cœur est plus arrondi au niveau des joues et présente souvent une pointe de veuve ; le visage en triangle inversé est plus anguleux. Les conseils de coiffure sont très proches.

## Objectif coiffure

Réduire la largeur du front et étoffer la mâchoire et le menton.`,
    women: {
      hairstyles: [
        { name: "Frange de côté", why: "Affine visuellement le front." },
        { name: "Carré au menton ou carré long", why: "Du volume là où le visage s'affine." },
        { name: "Ondulations à partir des pommettes", why: "Ajoutent de la largeur en bas." },
      ],
      avoid: [
        "La hauteur et le volume au sommet du crâne.",
        "Les coiffures plaquées en arrière.",
      ],
      tips: "Gardez le dessus plat et placez le volume en bas.",
    },
    men: {
      hairstyles: [
        { name: "Cheveux mi-longs avec raie sur le côté", why: "Couvre une partie du front." },
        { name: "Frange", why: "Réduit la largeur du front." },
        { name: "Côtés plus longs", why: "Évitez les fades serrés qui accentuent l'affinement." },
      ],
      avoid: ["Beaucoup de volume sur le dessus avec des côtés courts et serrés."],
      beards: [
        { name: "Barbe pleine", why: "Ajoute de la largeur au niveau du menton." },
        { name: "Barbe carrée (boxed beard)", why: "Rend plus carrée une mâchoire étroite." },
      ],
      tips: "Misez sur la barbe pour élargir le bas du visage.",
    },
    glasses: {
      best: [
        { name: "Montures plus marquées en bas", why: "Ajoutent de la largeur en bas." },
        { name: "Montures rondes", why: "Adoucissent les angles." },
        { name: "Montures sans cercle", why: "N'alourdissent pas le haut du visage." },
      ],
      avoid: ["Les montures browline plus marquées en haut."],
    },
    makeup: "Sculptez les tempes et les côtés du front, et illuminez le menton.",
    confusedWith: [
      { slug: "heart", difference: "Le visage en cœur est plus doux, avec des joues plus rondes et souvent une pointe de veuve." },
      { slug: "diamond", difference: "Le visage en diamant a un front étroit." },
    ],
    faqs: [
      {
        q: "Qu'est-ce qu'un visage en triangle inversé ?",
        a: "Un visage plus large au niveau du front, qui s'affine en lignes droites jusqu'à une mâchoire et un menton étroits et anguleux.",
      },
      {
        q: "Le visage en triangle inversé est-il identique au visage en cœur ?",
        a: "Ce sont de proches cousins. Le visage en cœur est plus doux et plus arrondi ; le visage en triangle inversé est plus anguleux.",
      },
    ],
  },
  pear: {
    name: "Poire",
    title: "Visage en poire : traits, coupes et lunettes",
    description:
      "Le visage en poire a une mâchoire large et pleine et un front plus étroit. Comment le reconnaître, et les coupes et lunettes idéales.",
    definition:
      "Un visage en poire est plus large au niveau de la mâchoire et plus étroit au niveau du front, avec des joues pleines et un bas du visage doux et arrondi. C'est la version plus douce du visage triangulaire.",
    measurements: [
      { feature: "Longueur vs largeur du visage", value: "Environ 1,1 à 1,4 fois" },
      { feature: "Point le plus large", value: "Mâchoire et bas des joues" },
      { feature: "Front", value: "Étroit" },
      { feature: "Mâchoire", value: "Large, pleine, douce" },
      { feature: "Menton", value: "Large, arrondi" },
    ],
    traits: [
      "Bas du visage plein",
      "Front étroit",
      "Mâchoire large et douce",
    ],
    howToTell: [
      "La moitié inférieure de votre visage paraît plus pleine que la moitié supérieure.",
      "Votre front en est la partie la plus étroite.",
      "Votre mâchoire est large, mais douce plutôt qu'anguleuse.",
    ],
    body: `## Poire ou triangulaire

Les visages en poire et triangulaire ont les mêmes proportions : étroits en haut, larges en bas. Le visage en poire en est la version plus ronde et plus pleine ; le visage triangulaire est plus anguleux.

## Poire ou rond

Le visage rond est plus large au niveau des joues ; le visage en poire est plus large au niveau de la mâchoire.

## Objectif coiffure

Ajouter du volume sur le haut de la tête et aux tempes, et garder la ligne de la mâchoire dégagée.`,
    women: {
      hairstyles: [
        { name: "Volume au sommet du crâne", why: "Élargit la moitié supérieure." },
        { name: "Frange de côté", why: "Élargit un front étroit." },
        { name: "Coupe dégradée aux épaules", why: "Les dégradés au-dessus de la mâchoire équilibrent un bas du visage plein." },
        { name: "Pixie volumineux", why: "De la hauteur et de la largeur sur le dessus." },
      ],
      avoid: [
        "Les carrés au menton.",
        "Les cheveux plats sur le dessus.",
      ],
      tips: "Créez du volume au-dessus des oreilles.",
    },
    men: {
      hairstyles: [
        { name: "Quiff texturé", why: "Ajoute de la largeur et de la hauteur sur le dessus." },
        { name: "Côtés plus longs au-dessus des oreilles", why: "Équilibre la mâchoire." },
      ],
      avoid: ["Les coupes à la tondeuse qui dégagent un front étroit."],
      beards: [
        { name: "Barbe de quelques jours courte", why: "Définit la mâchoire sans l'élargir." },
        { name: "Bouc", why: "Attire le regard vers le centre." },
      ],
      tips: "Gardez la barbe courte sur les joues.",
    },
    glasses: {
      best: [
        { name: "Montures browline", why: "Élargissent le haut du visage." },
        { name: "Montures papillon (cat-eye)", why: "Du relief et de la largeur au niveau des tempes." },
        { name: "Montures au cercle supérieur épais et coloré", why: "Attirent le regard vers le haut." },
      ],
      avoid: [
        "Les montures plus marquées en bas.",
        "Les petites montures étroites.",
      ],
    },
    makeup: "Illuminez le front et les tempes, et sculptez délicatement le long de la mâchoire.",
    confusedWith: [
      { slug: "triangle", difference: "Le visage triangulaire est plus anguleux." },
      { slug: "round", difference: "Le visage rond est plus large au niveau des joues." },
    ],
    faqs: [
      {
        q: "Qu'est-ce qu'un visage en poire ?",
        a: "Un visage plus large au niveau de la mâchoire et plus étroit au niveau du front, avec des joues pleines et un bas du visage doux.",
      },
      {
        q: "Quelle coiffure pour un visage en poire ?",
        a: "Les coiffures avec du volume au sommet du crâne et aux tempes, les franges de côté et les dégradés au-dessus de la mâchoire.",
      },
    ],
  },
};
