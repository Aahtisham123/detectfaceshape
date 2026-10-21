import type { ShapeT } from "../types";

export const shapesA: Record<string, ShapeT> = {
  oval: {
    name: "Ovale",
    title: "Visage ovale : traits, coupes et lunettes",
    description:
      "Un visage ovale est environ 1,5× plus long que large, plus large aux pommettes. Comment le reconnaître, coupes et lunettes idéales.",
    definition:
      "Un visage ovale est environ une fois et demie plus long que large. Les pommettes sont la partie la plus large, le front est légèrement plus large que la mâchoire, et la ligne de la mâchoire s'arrondit doucement jusqu'à un menton rond, sans angles marqués.",
    measurements: [
      { feature: "Longueur par rapport à la largeur", value: "Environ 1,4 à 1,6× plus long que large" },
      { feature: "Partie la plus large", value: "Les pommettes" },
      { feature: "Front", value: "Légèrement plus large que la mâchoire" },
      { feature: "Mâchoire", value: "Douce, arrondie, légèrement effilée" },
      { feature: "Menton", value: "Arrondi, non pointu" },
    ],
    traits: [
      "Proportions équilibrées de haut en bas",
      "Pommettes un peu plus larges que le front",
      "Mâchoire plus étroite que le front, sans angles durs",
      "Le visage ressemble à un œuf à l'envers",
    ],
    howToTell: [
      "Votre visage est nettement plus long que large, mais sans excès.",
      "La partie la plus large de votre visage se situe au niveau des pommettes.",
      "Votre mâchoire s'arrondit au lieu de former un angle sous les oreilles.",
      "Si vous tracez le contour de votre visage sur un miroir, il ressemble à un œuf dont la partie la plus large est en haut.",
    ],
    body: `## Pourquoi dit-on que le visage ovale est « équilibré »

Les coiffeurs considèrent le visage ovale comme la forme la plus polyvalente, car aucune zone ne domine : le front, les pommettes et la mâchoire diminuent progressivement en largeur, et la longueur est proportionnée à la largeur. C'est pourquoi la plupart des coupes, des lunettes et des styles de barbe lui conviennent. L'objectif n'est pas de « corriger » quoi que ce soit, mais simplement de ne pas masquer l'équilibre que vous avez déjà.

## Le visage ovale est-il courant ?

L'ovale est l'un des résultats les plus fréquents de notre détecteur, avec le cœur et le carré. En pratique, beaucoup de personnes sont un mélange, par exemple un ovale avec une mâchoire légèrement carrée ou un ovale tirant vers l'allongé. Votre résultat affiche un pourcentage pour chaque forme, afin que vous voyiez vers laquelle vous penchez.

## Ovale ou allongé

La différence tient à la longueur. Un visage ovale est environ 1,5× plus long que large ; un visage allongé est nettement plus long (plutôt 1,7× ou plus) avec des côtés plus droits. Si les franges sur le côté et le volume sur les côtés équilibrent mieux votre visage, vous tirez peut-être vers l'allongé.`,
    women: {
      hairstyles: [
        { name: "Dégradé long", why: "Des couches qui commencent sous le menton apportent du mouvement sans élargir aucune partie du visage." },
        { name: "Carré long droit", why: "Une coupe à hauteur des clavicules, à la ligne nette, encadre la mâchoire et préserve l'équilibre du contour." },
        { name: "Frange rideau", why: "Une frange séparée qui retombe de chaque côté dégage le visage et attire l'attention sur les yeux." },
        { name: "Coupe pixie", why: "Le visage ovale a les proportions pour porter des cheveux très courts ; cette coupe met en valeur les pommettes." },
        { name: "Raie au milieu lisse", why: "Une raie centrale fonctionne car les deux moitiés d'un visage ovale sont harmonieusement proportionnées." },
        { name: "Coupe shag mi-longue", why: "Les pointes texturées ajoutent du volume au niveau de la mâchoire, ce qui convient aux visages ovales légèrement effilés." },
        { name: "Queue de cheval haute", why: "Attacher les cheveux révèle tout le contour, et l'ovale est la forme qui se prête le mieux à un visage entièrement dégagé." },
      ],
      avoid: [
        "Les franges épaisses et droites qui couvrent tout le front, car elles peuvent raccourcir le visage.",
        "Beaucoup de volume au sommet du crâne si votre visage tend à être long, car cela peut le faire paraître allongé.",
      ],
      tips: "Presque toutes les longueurs vous vont. Choisissez d'abord une coupe adaptée à la texture de vos cheveux et à votre mode de vie, puis ajustez la frange et la raie.",
    },
    men: {
      hairstyles: [
        { name: "Taper classique", why: "Des côtés courts et un peu de longueur sur le dessus préservent les proportions naturelles." },
        { name: "Quiff", why: "Une hauteur modérée sur le dessus convient au visage ovale ; restez mesuré pour ne pas allonger le visage." },
        { name: "Raie sur le côté", why: "Une raie latérale nette est intemporelle et met en valeur des traits équilibrés." },
        { name: "Crop texturé", why: "Une coupe courte avec frange vers l'avant fonctionne, car le front n'a pas besoin d'être caché." },
        { name: "Coupe à la tondeuse (buzz cut)", why: "Le visage ovale a la forme de tête régulière que les coupes très courtes révèlent." },
        { name: "Cheveux mi-longs flottants", why: "Des cheveux glissés derrière les oreilles encadrent les pommettes sans ajouter de largeur." },
      ],
      avoid: [
        "Les pompadours très hauts qui exagèrent la longueur.",
        "Les franges épaisses qui coupent le visage en deux.",
      ],
      beards: [
        { name: "Barbe courte taillée (boxed beard)", why: "Une longueur uniforme autour de la mâchoire préserve l'équilibre de la forme." },
        { name: "Barbe de trois jours épaisse", why: "Elle apporte un peu de définition à la mâchoire sans modifier le contour." },
        { name: "Rasé de près", why: "L'ovale est l'une des rares formes qui est tout aussi réussie sans barbe." },
      ],
      tips: "Évitez d'ajouter trop de hauteur ou trop de largeur. Gardez les côtés nets et le dessus modéré.",
    },
    glasses: {
      best: [
        { name: "Montures carrées ou rectangulaires", why: "Les lignes anguleuses contrastent avec les courbes douces de l'ovale." },
        { name: "Wayfarer", why: "La forme légèrement trapézoïdale s'accorde avec la mâchoire doucement effilée." },
        { name: "Aviateur", why: "La forme en goutte d'eau rappelle le contour ovale de manière flatteuse." },
        { name: "Montures géométriques", why: "Les montures hexagonales ou octogonales apportent du caractère à des traits équilibrés." },
      ],
      avoid: [
        "Les montures plus larges que la partie la plus large de votre visage.",
        "Les montures très hautes qui couvrent les pommettes.",
      ],
    },
    makeup:
      "Le visage ovale a besoin de peu de contouring. Appliquez une touche légère de poudre bronzante juste sous les pommettes et sur les tempes, et concentrez l'enlumineur sur le haut des joues, l'arête du nez et l'arc de Cupidon.",
    confusedWith: [
      { slug: "oblong", difference: "Le visage allongé est plus long, avec des côtés plus droits et un menton moins effilé." },
      { slug: "heart", difference: "Le visage en cœur a un front nettement plus large et un menton étroit, souvent pointu." },
      { slug: "diamond", difference: "Le visage diamant a un front et une mâchoire étroits, avec des pommettes nettement plus larges." },
    ],
    faqs: [
      {
        q: "À quoi ressemble un visage ovale ?",
        a: "Un visage ovale est plus long que large, plus large au niveau des pommettes, avec un front légèrement plus étroit et une mâchoire qui s'affine jusqu'à un menton arrondi. Il ressemble à un œuf à l'envers.",
      },
      {
        q: "Le visage ovale est-il attirant ?",
        a: "L'ovale est souvent qualifié de forme de visage idéale parce que ses proportions sont équilibrées, et beaucoup le trouvent attirant. Cela dit, la beauté dépend de bien plus que du contour, et chaque forme de visage a ses atouts.",
      },
      {
        q: "Le visage ovale est-il rare ?",
        a: "Non, l'ovale n'est pas rare. C'est l'une des formes de visage les plus courantes, même si beaucoup de personnes combinent l'ovale avec une autre forme.",
      },
      {
        q: "Quelle coupe de cheveux pour un visage ovale ?",
        a: "La plupart des coupes conviennent au visage ovale. Le dégradé long, le carré long, la frange rideau et la coupe pixie sont populaires chez les femmes ; le taper, la raie sur le côté et le crop texturé le sont chez les hommes.",
      },
      {
        q: "Quelles lunettes pour un visage ovale ?",
        a: "Les montures carrées, rectangulaires, wayfarer et aviateur conviennent toutes. Choisissez des montures qui ne dépassent pas la partie la plus large de votre visage.",
      },
    ],
  },
  round: {
    name: "Rond",
    title: "Visage rond : le reconnaître, coupes et lunettes",
    description:
      "Un visage rond est presque aussi large que long, avec des joues pleines et une mâchoire douce. Coupes, lunettes et barbes qui le flattent.",
    definition:
      "Un visage rond est à peu près aussi large que long. Les joues sont la partie la plus large et la plus pleine, la mâchoire est douce, sans angles visibles, et le menton est arrondi. Comme la largeur et la longueur sont proches, le contour ressemble à un cercle.",
    measurements: [
      { feature: "Longueur par rapport à la largeur", value: "Proche de 1:1, rarement plus de 1,3×" },
      { feature: "Partie la plus large", value: "Les joues" },
      { feature: "Front", value: "Largeur proche de celle de la mâchoire" },
      { feature: "Mâchoire", value: "Large, douce et arrondie" },
      { feature: "Menton", value: "Court et arrondi" },
    ],
    traits: [
      "Joues pleines",
      "Mâchoire douce et arrondie, sans angles",
      "Menton court",
      "Ligne des cheveux souvent arrondie elle aussi",
    ],
    howToTell: [
      "Mesurez la largeur de votre visage au niveau des pommettes et sa longueur de la racine des cheveux au menton. Si les deux sont presque égales, votre visage est probablement rond.",
      "Votre mâchoire décrit une courbe continue de l'oreille au menton.",
      "Vos joues paraissent pleines même quand vous ne souriez pas.",
    ],
    body: `## Visage rond ou carré

Les visages ronds et carrés ont une longueur et une largeur similaires. La différence tient à la mâchoire : un visage carré a une mâchoire forte et anguleuse, avec des angles visibles sous les oreilles, tandis qu'un visage rond s'arrondit harmonieusement. Si vous passez un doigt le long de votre mâchoire et sentez un angle marqué, vous tirez probablement vers le carré.

## L'objectif pour un visage rond

Le but est d'ajouter un peu de longueur et d'angles. Du volume au sommet du crâne, une raie sur le côté, un dégradé long qui tombe sous le menton et des lunettes anguleuses attirent le regard de haut en bas plutôt qu'en largeur.

## Le poids modifie-t-il un visage rond ?

Le poids influe sur l'aspect plus ou moins plein des joues : perdre ou prendre du poids peut donc rendre un visage plus rond ou plus anguleux. La structure osseuse (largeur du front, des pommettes et de la mâchoire) ne change pas, si bien que votre forme de base reste généralement la même. Consultez notre guide pour savoir [si perdre du poids change la forme du visage](/blog/does-losing-weight-change-your-face-shape/).`,
    women: {
      hairstyles: [
        { name: "Dégradé long sous le menton", why: "Une longueur qui dépasse la mâchoire allonge visuellement le visage." },
        { name: "Raie très sur le côté", why: "Une raie décentrée crée de l'asymétrie et des lignes diagonales qui affinent un visage rond." },
        { name: "Longue frange sur le côté", why: "Une frange en biais sur le front casse la largeur." },
        { name: "Carré long asymétrique", why: "Un carré plus long devant attire le regard vers le bas." },
        { name: "Volume au sommet du crâne", why: "De la hauteur sur le dessus allonge la silhouette générale." },
        { name: "Pixie avec du volume", why: "Une coupe pixie fonctionne si elle est plus longue et texturée sur le dessus plutôt que plate et arrondie." },
        { name: "Ondulations souples sous les pommettes", why: "Des ondulations qui commencent bas éloignent la largeur des joues." },
      ],
      avoid: [
        "Les carrés arrondis à hauteur du menton, qui répètent le cercle.",
        "Les franges droites et épaisses, qui raccourcissent le visage.",
        "Le volume sur les côtés, près des joues.",
      ],
      tips: "Privilégiez tout ce qui ajoute de la hauteur sur le dessus ou de la longueur sous le menton, et gardez la partie la plus volumineuse de la coiffure loin des joues.",
    },
    men: {
      hairstyles: [
        { name: "Pompadour ou quiff", why: "De la hauteur sur le dessus allonge le visage." },
        { name: "Faux hawk", why: "Une hauteur concentrée au centre allonge le contour." },
        { name: "Undercut long sur le dessus", why: "Des côtés très courts suppriment de la largeur ; la longueur sur le dessus ajoute de l'angle." },
        { name: "Raie sur le côté avec dégradé (fade)", why: "Des lignes nettes et un dégradé serré créent de la structure." },
        { name: "Frange asymétrique", why: "Une frange balayée sur un côté ajoute des lignes diagonales." },
      ],
      avoid: [
        "Les coupes au bol et les coupes courtes arrondies.",
        "Les cheveux longs qui tombent à hauteur des joues et ajoutent de la largeur.",
        "Les coupes à la tondeuse de longueur uniforme partout.",
      ],
      beards: [
        { name: "Bouc ou bouc étendu", why: "Une pilosité concentrée sur le menton ajoute de la longueur." },
        { name: "Barbe taillée, plus courte sur les côtés", why: "Des joues bien dégagées et un menton plus long créent une mâchoire anguleuse." },
        { name: "Collier avec menton plus long", why: "Il dessine la ligne de mâchoire qui manque à un visage rond." },
      ],
      tips: "Gardez les côtés courts et construisez de la hauteur sur le dessus. Une barbe plus longue au menton qu'aux joues est le changement le plus efficace.",
    },
    glasses: {
      best: [
        { name: "Montures rectangulaires", why: "Les lignes droites contrastent avec les courbes douces et allongent le visage." },
        { name: "Montures carrées", why: "Les angles apportent de la structure à un visage rond." },
        { name: "Montures browline", why: "Un bord supérieur marqué attire le regard vers le haut." },
        { name: "Montures papillon (cat-eye)", why: "Les coins extérieurs relevés apportent de l'élan et des angles." },
      ],
      avoid: [
        "Les petites montures rondes, qui répètent le cercle.",
        "Les montures plus étroites que votre visage.",
      ],
    },
    makeup:
      "Sculptez les contours extérieurs du visage, des tempes jusqu'à la mâchoire, et estompez la poudre bronzante sous les pommettes en remontant. Appliquez l'enlumineur au centre (front, arête du nez, menton) pour allonger le visage.",
    confusedWith: [
      { slug: "square", difference: "Le visage carré a les mêmes proportions, mais une mâchoire nette et anguleuse." },
      { slug: "oval", difference: "Le visage ovale est nettement plus long que large." },
      { slug: "pear", difference: "Le visage en poire est plus large au niveau de la mâchoire qu'au niveau des joues." },
    ],
    faqs: [
      {
        q: "Comment savoir si j'ai un visage rond ?",
        a: "Si votre visage est à peu près aussi large que long, que vos joues en sont la partie la plus large et la plus pleine, et que votre mâchoire s'arrondit sans angles visibles, vous avez probablement un visage rond.",
      },
      {
        q: "Quelle est la meilleure coupe pour un visage rond ?",
        a: "Les coupes qui ajoutent de la hauteur sur le dessus ou de la longueur sous le menton sont les plus flatteuses : dégradé long, raie très sur le côté, frange sur le côté et carré long asymétrique pour les femmes ; quiff, pompadour et undercut pour les hommes.",
      },
      {
        q: "Quelles lunettes pour un visage rond ?",
        a: "Les montures anguleuses, comme les modèles rectangulaires, carrés, browline et papillon, apportent de la structure. Évitez les petites montures rondes.",
      },
      {
        q: "Un visage rond peut-il devenir ovale ?",
        a: "La structure osseuse ne change pas, mais perdre de la graisse au niveau du visage peut rendre un visage rond plus dessiné. La coiffure et le contouring peuvent aussi le faire paraître plus long.",
      },
      {
        q: "Un visage rond est-il attirant ?",
        a: "Oui. Les visages ronds paraissent jeunes et sympathiques, et de nombreux acteurs et mannequins célèbres ont un visage rond.",
      },
    ],
  },
  square: {
    name: "Carré",
    title: "Visage carré : traits, coupes, lunettes, barbe",
    description:
      "Un visage carré a une mâchoire forte et anguleuse, un front, des pommettes et une mâchoire de largeur proche. Coupes, lunettes et barbes.",
    definition:
      "Un visage carré a un front, des pommettes et une mâchoire d'à peu près la même largeur, ainsi qu'une mâchoire forte et anguleuse avec des angles marqués sous les oreilles. Le visage n'est que légèrement plus long que large.",
    measurements: [
      { feature: "Longueur par rapport à la largeur", value: "Environ 1 à 1,3× plus long que large" },
      { feature: "Partie la plus large", value: "Égale entre front, pommettes et mâchoire" },
      { feature: "Front", value: "Large, souvent droit à la racine des cheveux" },
      { feature: "Mâchoire", value: "Large, nette, aux angles marqués" },
      { feature: "Menton", value: "Large et plat" },
    ],
    traits: [
      "Mâchoire forte et large",
      "Angles de la mâchoire visibles",
      "Côtés droits",
      "Menton large et plat",
    ],
    howToTell: [
      "Votre mâchoire forme un angle net sous les oreilles.",
      "Votre front, vos pommettes et votre mâchoire semblent avoir à peu près la même largeur.",
      "Votre visage n'est qu'un peu plus long que large.",
    ],
    body: `## Visage carré ou rectangulaire

Un visage rectangulaire a la même mâchoire forte, mais il est nettement plus long. Si la longueur de votre visage dépasse largement 1,4× sa largeur, consultez la page [visage rectangulaire](/fr/face-shapes/rectangle/).

## L'objectif de style

Pour les femmes, l'objectif est généralement d'adoucir les angles : couches autour de la mâchoire, ondulations et frange rideau. Pour les hommes, une mâchoire carrée est souvent un atout à mettre en valeur, donc des côtés courts et une ligne de mâchoire nette fonctionnent bien.

## Un visage carré est-il masculin ?

Une mâchoire forte est souvent décrite comme masculine, mais de nombreuses femmes au visage carré (Angelina Jolie, Olivia Wilde, Keira Knightley) en ont fait leur signature. Un style plus doux déplace simplement l'attention vers les yeux et les pommettes.`,
    women: {
      hairstyles: [
        { name: "Mèches souples qui encadrent le visage", why: "Des couches qui tombent autour de la mâchoire adoucissent ses angles." },
        { name: "Longues ondulations", why: "Les courbes contrastent avec les lignes droites et apportent de la douceur." },
        { name: "Frange rideau", why: "Une frange légère et séparée arrondit les coins du front." },
        { name: "Frange sur le côté", why: "Une frange en diagonale casse un front large." },
        { name: "Carré long texturé sous la mâchoire", why: "S'arrêter sous la mâchoire évite de tracer une ligne au niveau de sa partie la plus large." },
        { name: "Chignon flou avec mèches libres", why: "Des mèches souples autour du visage masquent les angles de la mâchoire." },
      ],
      avoid: [
        "Les carrés droits à hauteur du menton qui s'arrêtent pile au niveau de la mâchoire.",
        "Les raies au milieu strictes avec des cheveux plats et raides.",
        "Les franges droites et épaisses.",
      ],
      tips: "Recherchez de la douceur et du mouvement autour de la mâchoire et du front.",
    },
    men: {
      hairstyles: [
        { name: "Coupe en brosse (crew cut)", why: "Des cheveux courts et nets mettent en valeur une mâchoire forte." },
        { name: "Coupe à la tondeuse (buzz cut)", why: "Le visage carré supporte les cheveux très courts, car la mâchoire apporte la structure." },
        { name: "Raie sur le côté avec taper", why: "Classique et net, ce style fait écho à la mâchoire anguleuse." },
        { name: "Crop texturé", why: "Une coupe courte moderne et décoiffée adoucit le dessus." },
        { name: "Cheveux plaqués en arrière", why: "Ce style dégage tout le visage ; il fonctionne mieux avec des traits marqués." },
      ],
      avoid: [
        "Les coupes au bol ou les franges épaisses qui font paraître le visage plus court et plus large.",
        "Les cheveux longs qui s'arrêtent au niveau de la mâchoire.",
      ],
      beards: [
        { name: "Barbe de trois jours", why: "Elle souligne la mâchoire sans la cacher." },
        { name: "Barbe courte taillée (boxed beard)", why: "Des contours nets suivent la mâchoire naturelle." },
        { name: "Barbe circulaire (circle beard)", why: "Un bouc et une moustache arrondis adoucissent une mâchoire très large." },
      ],
      tips: "Des côtés courts et un peu de texture sur le dessus : la solution facile. Gardez la barbe courte pour montrer la mâchoire.",
    },
    glasses: {
      best: [
        { name: "Montures rondes", why: "Les courbes équilibrent les angles marqués." },
        { name: "Montures ovales", why: "Elles adoucissent une mâchoire et un front larges." },
        { name: "Montures sans cercle ou semi-cerclées", why: "Des montures légères n'ajoutent pas de lignes dures." },
        { name: "Montures papillon (cat-eye)", why: "Les coins relevés attirent l'attention sur les pommettes." },
      ],
      avoid: [
        "Les montures carrées très anguleuses qui répètent la mâchoire.",
        "Les montures plus étroites que la mâchoire.",
      ],
    },
    makeup:
      "Ombrez les coins du front et les angles de la mâchoire pour les adoucir. Estompez le blush d'un mouvement circulaire sur le haut des joues, et appliquez l'enlumineur au centre du front et sur le menton.",
    confusedWith: [
      { slug: "rectangle", difference: "Le visage rectangulaire a la même mâchoire, mais il est beaucoup plus long." },
      { slug: "round", difference: "Le visage rond a des proportions similaires, mais une mâchoire douce et arrondie." },
      { slug: "triangle", difference: "Le visage triangulaire a une mâchoire nettement plus large que le front." },
    ],
    faqs: [
      {
        q: "Comment savoir si mon visage est carré ?",
        a: "Votre front, vos pommettes et votre mâchoire ont à peu près la même largeur, votre mâchoire présente des angles nets sous les oreilles, et votre visage n'est que légèrement plus long que large.",
      },
      {
        q: "Quelle coiffure pour un visage carré ?",
        a: "Femmes : mèches souples, ondulations, frange rideau et frange sur le côté. Hommes : coupe en brosse, coupe à la tondeuse, raie sur le côté et crop texturé.",
      },
      {
        q: "Quelles lunettes pour un visage carré ?",
        a: "Les montures rondes, ovales, sans cercle et papillon adoucissent les angles. Évitez les montures carrées très anguleuses.",
      },
      {
        q: "Un visage carré est-il attirant ?",
        a: "Une mâchoire bien dessinée est largement perçue comme attirante, chez les hommes comme chez les femmes. De nombreux mannequins et acteurs ont un visage carré.",
      },
      {
        q: "Quelle est la différence entre un visage carré et un visage rectangulaire ?",
        a: "La longueur. Les deux ont une mâchoire forte, mais le visage rectangulaire est nettement plus long que large.",
      },
    ],
  },
  oblong: {
    name: "Allongé",
    title: "Visage allongé (long) : traits, coupes, lunettes",
    description:
      "Un visage allongé est long et étroit, avec front, pommettes et mâchoire de largeur proche. Comment le reconnaître, coupes et lunettes.",
    definition:
      "Un visage allongé (aussi appelé visage long) est nettement plus long que large, généralement 1,7× ou plus. Le front, les pommettes et la mâchoire ont des largeurs similaires, les côtés sont plutôt droits, et la ligne de la mâchoire est doucement arrondie plutôt que nette.",
    measurements: [
      { feature: "Longueur par rapport à la largeur", value: "Environ 1,7× ou plus" },
      { feature: "Partie la plus large", value: "Uniforme, pas de point plus large" },
      { feature: "Front", value: "Souvent haut" },
      { feature: "Mâchoire", value: "Arrondie, de largeur proche de celle du front" },
      { feature: "Menton", value: "Peut être long" },
    ],
    traits: [
      "Contour long et étroit",
      "Ligne des joues droite",
      "Front haut ou menton long",
      "Angles de la mâchoire arrondis",
    ],
    howToTell: [
      "Votre visage paraît clairement long sur les photos, même cheveux détachés.",
      "Il n'y a pas de point nettement plus large ; votre visage est plutôt droit des deux côtés.",
      "Votre mâchoire est arrondie, pas nettement anguleuse (une mâchoire anguleuse évoque plutôt le visage rectangulaire).",
    ],
    body: `## Allongé, long et rectangulaire : quelle différence ?

« Visage long » et « visage allongé » désignent la même chose. Un visage **rectangulaire** est un visage long avec une mâchoire forte et anguleuse ; un visage **allongé** a une mâchoire plus douce et arrondie. Les deux profitent de la même stratégie : ajouter de la largeur sur les côtés et éviter la hauteur supplémentaire.

## L'objectif de style

Créer l'illusion de la largeur. Une frange raccourcit un front haut, le volume sur les côtés (ondulations, boucles, carrés dégradés) ajoute de la largeur, et des montures de lunettes larges ou hautes cassent la longueur.

## Ovale ou allongé

Si vous hésitez entre ovale et allongé, comparez la longueur à la largeur. L'ovale tourne autour de 1,5× ; l'allongé se rapproche de 1,7× ou plus, avec des côtés plus droits. Lisez la [comparaison complète entre visage ovale et allongé](/blog/oval-vs-oblong-face-shape/).`,
    women: {
      hairstyles: [
        { name: "Frange droite ou frange rideau", why: "Une frange raccourcit un front haut et rend le visage moins long." },
        { name: "Ondulations aux épaules", why: "Le volume sur les côtés ajoute de la largeur là où le visage allongé en a besoin." },
        { name: "Carré court au menton", why: "Un carré qui s'arrête à la mâchoire crée une ligne horizontale qui équilibre la longueur." },
        { name: "Shag dégradé", why: "Des couches effilées sur les côtés ajoutent de la largeur et du mouvement." },
        { name: "Boucles volumineuses", why: "Les boucles s'étendent en largeur plutôt que vers le bas." },
        { name: "Raie sur le côté avec du volume", why: "Elle ajoute de l'asymétrie et de la largeur sans hauteur." },
      ],
      avoid: [
        "Les cheveux très longs, raides et plats, qui étirent le visage.",
        "La hauteur au sommet du crâne, comme les chignons hauts.",
        "Les coiffures plaquées en arrière sans volume sur les côtés.",
      ],
      tips: "Pensez largeur, pas hauteur. Si vous aimez les cheveux longs, ajoutez des couches et des ondulations pour qu'ils ne tombent pas tout droit.",
    },
    men: {
      hairstyles: [
        { name: "Frange ou crop vers l'avant", why: "Des cheveux coiffés vers l'avant raccourcissent le front." },
        { name: "Raie sur le côté avec côtés plus fournis", why: "Évitez les skin fades ; garder un peu de longueur sur les côtés ajoute de la largeur." },
        { name: "Cheveux mi-longs texturés", why: "Le volume sur les côtés équilibre la longueur." },
        { name: "Coupe courte classique sur l'arrière et les côtés (pas trop serrée)", why: "Soignée sans être austère." },
        { name: "Coupe César", why: "Une frange courte et horizontale coupe la longueur du visage." },
      ],
      avoid: [
        "Les pompadours et quiffs hauts.",
        "Les high fades très serrés avec des cheveux longs sur le dessus.",
        "Les cheveux longs qui tombent tout droit.",
      ],
      beards: [
        { name: "Barbe complète, plus fournie sur les côtés", why: "De la largeur aux joues et à la mâchoire équilibre la longueur." },
        { name: "Favoris épais (mutton chops) ou barbe de trois jours large", why: "L'accent horizontal élargit le visage." },
        { name: "Évitez les barbes longues au menton", why: "Un long bouc ou une barbe pointue ajoute encore de la longueur." },
      ],
      tips: "Peu de hauteur, beaucoup de largeur, aussi bien pour les cheveux que pour la barbe.",
    },
    glasses: {
      best: [
        { name: "Montures oversize", why: "Les grandes montures couvrent davantage la longueur du visage." },
        { name: "Verres hauts", why: "Des verres plus hauts cassent l'espace vertical." },
        { name: "Branches décoratives ou contrastées", why: "Elles ajoutent de la largeur sur les côtés." },
        { name: "Montures rondes ou carrées", why: "Les deux fonctionnent à condition d'être assez hautes." },
      ],
      avoid: [
        "Les petites montures étroites.",
        "Les montures rectangulaires peu hautes, qui accentuent la longueur.",
      ],
    },
    makeup:
      "Appliquez de la poudre bronzante le long de la racine des cheveux en haut du front et sous le menton pour raccourcir visuellement le visage. Estompez le blush horizontalement sur les joues plutôt qu'en remontant vers les tempes.",
    confusedWith: [
      { slug: "oval", difference: "Le visage ovale est plus court (environ 1,5×) et s'affine davantage vers le menton." },
      { slug: "rectangle", difference: "Le visage rectangulaire est tout aussi long, mais sa mâchoire est nette et anguleuse." },
      { slug: "diamond", difference: "Le visage diamant a un front et un menton étroits, avec des pommettes larges." },
    ],
    faqs: [
      {
        q: "Qu'est-ce qu'un visage allongé ?",
        a: "Un visage allongé est nettement plus long que large, avec un front, des pommettes et une mâchoire de largeur similaire et une mâchoire arrondie. On l'appelle aussi visage long.",
      },
      {
        q: "Un visage allongé, est-ce la même chose qu'un visage long ?",
        a: "Oui. Visage allongé et visage long décrivent la même forme. Un visage long avec une mâchoire nette et carrée est appelé visage rectangulaire.",
      },
      {
        q: "Quelle coupe de cheveux pour un visage allongé ?",
        a: "Les franges, les ondulations aux épaules, les carrés et les shags dégradés qui ajoutent de la largeur. Les hommes ont intérêt à garder un peu de longueur sur les côtés et à éviter les coiffures hautes.",
      },
      {
        q: "Quelles lunettes pour un visage allongé ?",
        a: "Des montures oversize et hautes qui couvrent une plus grande partie du visage, ainsi que des montures à branches décoratives pour ajouter de la largeur.",
      },
      {
        q: "Un visage allongé est-il attirant ?",
        a: "Oui. Les visages longs sont fréquents chez les mannequins et les acteurs, et ils sont très photogéniques. Un style adapté équilibre la longueur avec de la largeur.",
      },
    ],
  },
  rectangle: {
    name: "Rectangulaire",
    title: "Visage rectangulaire : traits, coupes, lunettes",
    description:
      "Un visage rectangulaire est long, avec une mâchoire forte et carrée et des côtés droits. Différence avec l'allongé, coupes et lunettes.",
    definition:
      "Un visage rectangulaire est plus long que large, comme un visage allongé, mais avec une mâchoire forte et anguleuse. Le front, les pommettes et la mâchoire ont à peu près la même largeur, les côtés sont droits et la mâchoire présente des angles marqués.",
    measurements: [
      { feature: "Longueur par rapport à la largeur", value: "Environ 1,6× ou plus" },
      { feature: "Partie la plus large", value: "Uniforme du front à la mâchoire" },
      { feature: "Front", value: "Souvent haut et droit à la racine des cheveux" },
      { feature: "Mâchoire", value: "Large, aux angles nets" },
      { feature: "Menton", value: "Large et plat" },
    ],
    traits: [
      "Visage long",
      "Côtés droits et parallèles",
      "Angles de la mâchoire marqués",
      "Racine des cheveux carrée",
    ],
    howToTell: [
      "Votre visage est clairement long.",
      "Votre mâchoire présente des angles nets, comme un visage carré.",
      "Votre front et votre mâchoire ont à peu près la même largeur.",
    ],
    body: `## Visage rectangulaire ou allongé

Ce sont deux visages longs. La différence tient à la mâchoire : le visage **rectangulaire** a une mâchoire nette et anguleuse aux angles marqués, tandis que le visage **allongé** a une mâchoire arrondie. Beaucoup de guides les confondent, mais le style à adopter diffère. Le visage rectangulaire a besoin à la fois de largeur et d'adoucissement autour de la mâchoire. Consultez le [guide complet rectangulaire ou allongé](/blog/rectangle-vs-oblong-face-shape/).

## Visage rectangulaire ou carré

Le carré et le rectangulaire partagent la mâchoire anguleuse. Un visage carré n'est que légèrement plus long que large ; un visage rectangulaire est beaucoup plus long.

## L'objectif de style

Ajoutez de la largeur sur les côtés, réduisez la hauteur sur le dessus et adoucissez les angles de la mâchoire et du front.`,
    women: {
      hairstyles: [
        { name: "Frange effilée", why: "Elle raccourcit le visage et adoucit une racine des cheveux carrée." },
        { name: "Carré dégradé sous la mâchoire", why: "Il ajoute de la largeur et casse les angles de la mâchoire." },
        { name: "Ondulations souples", why: "Les courbes adoucissent les angles et ajoutent de la largeur." },
        { name: "Shag avec mèches qui encadrent le visage", why: "La texture sur les côtés équilibre la longueur." },
        { name: "Dégradé long sur le côté", why: "Les lignes diagonales réduisent l'effet vertical." },
      ],
      avoid: [
        "Les cheveux longs, lisses et raides.",
        "La hauteur au sommet du crâne.",
        "Les coupes droites qui s'arrêtent aux angles de la mâchoire.",
      ],
      tips: "Combinez la stratégie du visage allongé (ajouter de la largeur) et celle du visage carré (adoucir la mâchoire).",
    },
    men: {
      hairstyles: [
        { name: "Frange texturée", why: "Elle couvre une partie du front pour raccourcir le visage." },
        { name: "Raie sur le côté avec côtés modérés", why: "Elle conserve de la largeur au niveau des tempes." },
        { name: "Crop court décoiffé", why: "Peu de hauteur, texture souple." },
        { name: "Cheveux mi-longs coiffés en arrière (avec volume sur les côtés)", why: "Fonctionne tant que cela n'ajoute pas de hauteur." },
      ],
      avoid: [
        "Les quiffs et pompadours hauts.",
        "Les skin fades avec de la hauteur sur le dessus.",
      ],
      beards: [
        { name: "Barbe complète gardée large", why: "Elle ajoute de la largeur ; évitez que le menton devienne trop long." },
        { name: "Barbe de trois jours épaisse", why: "Elle montre la mâchoire sans ajouter de longueur." },
      ],
      tips: "Évitez d'ajouter de la longueur à l'une ou l'autre extrémité du visage.",
    },
    glasses: {
      best: [
        { name: "Montures rondes ou ovales", why: "Elles adoucissent les angles." },
        { name: "Montures oversize", why: "Elles cassent la longueur." },
        { name: "Aviateur", why: "Larges en haut, avec un bas arrondi." },
      ],
      avoid: [
        "Les montures rectangulaires étroites.",
        "Les petites montures qui semblent perdues sur un visage long.",
      ],
    },
    makeup:
      "Ombrez le haut du front et les angles de la mâchoire, et appliquez le blush horizontalement sur le haut des joues pour ajouter de la largeur.",
    confusedWith: [
      { slug: "oblong", difference: "Le visage allongé est tout aussi long, mais sa mâchoire est arrondie." },
      { slug: "square", difference: "Le visage carré a la même mâchoire, mais il est beaucoup plus court." },
    ],
    faqs: [
      {
        q: "Qu'est-ce qu'un visage rectangulaire ?",
        a: "Un visage long aux côtés droits, avec une mâchoire forte et anguleuse. Le front, les pommettes et la mâchoire ont à peu près la même largeur.",
      },
      {
        q: "Un visage rectangulaire, est-ce la même chose qu'un visage allongé ?",
        a: "Pas tout à fait. Les deux sont longs, mais le visage rectangulaire a une mâchoire nette et carrée, alors que le visage allongé a une mâchoire arrondie.",
      },
      {
        q: "Quelle coiffure pour un visage rectangulaire ?",
        a: "Les franges, les carrés dégradés, les ondulations souples et les shags qui ajoutent de la largeur et adoucissent la mâchoire.",
      },
      {
        q: "Quelles lunettes pour un visage rectangulaire ?",
        a: "Les montures rondes, ovales, aviateur et oversize.",
      },
    ],
  },
};
