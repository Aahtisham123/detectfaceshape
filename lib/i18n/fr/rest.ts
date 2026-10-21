import type { Dict } from "../translate";
import type { LocaleContent } from "../types";

export const hub: LocaleContent["hub"] = {
  title: "Formes de visage : les 10 types en un tableau",
  description:
    "Les 10 formes de visage en un tableau : ovale, rond, carré, allongé, rectangulaire, cœur, diamant, triangle, triangle inversé et poire.",
  h1: "Formes de visage : les 10 types expliqués",
  intro:
    "Il existe 10 grandes formes de visage : ovale, rond, carré, allongé, rectangulaire, cœur, diamant, triangulaire, triangle inversé et poire. La forme de votre visage dépend de trois largeurs (front, pommettes et mâchoire), de la longueur du visage et du caractère anguleux ou doux de la mâchoire. La plupart des gens combinent deux formes.",
  body: `## Tableau des formes de visage

| Forme | Longueur / largeur | Partie la plus large | Mâchoire | Menton |
|---|---|---|---|---|
| Ovale | ~1,5× | Pommettes | Douce, s'affine | Arrondi |
| Rond | ~1× | Joues | Douce, large | Court, arrondi |
| Carré | ~1–1,3× | Égale | Marquée, large | Large, plat |
| Allongé | ~1,7×+ | Égale | Arrondie | Parfois long |
| Rectangulaire | ~1,6×+ | Égale | Marquée | Large |
| Cœur | ~1,3–1,5× | Front | Étroite | Pointu |
| Diamant | ~1,4–1,6× | Pommettes | Étroite | Pointu |
| Triangulaire | ~1,2–1,5× | Mâchoire | Large, anguleuse | Large |
| Triangle inversé | ~1,3–1,5× | Front | Étroite, anguleuse | Dessiné |
| Poire | ~1,1–1,4× | Mâchoire | Large, douce | Arrondi |

## Comment déterminer la forme de votre visage

Il existe trois méthodes, de la plus objective à la moins objective :

1. **Utilisez une photo.** Notre [détecteur de forme du visage](/fr/) mesure vos proportions à partir d'une photo de face en quelques secondes. Votre photo ne quitte jamais votre appareil.
2. **Mesurez avec un mètre ruban.** Mesurez votre front, vos pommettes, votre mâchoire et la longueur de votre visage, puis utilisez le [calculateur de forme du visage](/fr/face-shape-calculator/). Notre [guide pour mesurer son visage](/blog/how-to-measure-your-face/) montre précisément où mesurer.
3. **Tracez-la sur un miroir.** Attachez vos cheveux, placez-vous à une longueur de bras d'un miroir et tracez le contour de votre visage avec un feutre lavable. Faites ensuite le [quiz sur la forme du visage](/fr/face-shape-quiz/).

## Les trois questions qui déterminent votre forme

- **Quelle est la longueur de votre visage par rapport à sa largeur ?** À peu près égales : visage rond ou carré ; nettement plus long : visage allongé ou rectangulaire ; entre les deux : visage ovale, cœur ou diamant.
- **Quelle partie est la plus large ?** Le front (cœur, triangle inversé), les pommettes (ovale, diamant, rond), la mâchoire (triangulaire, poire) ou tout est égal (carré, rectangulaire, allongé).
- **Votre mâchoire est-elle anguleuse ou douce ?** C'est ce qui distingue le carré du rond, le rectangulaire de l'allongé et le triangulaire de la poire.

## Les formes de visage souvent confondues

- [Ovale ou allongé](/blog/oval-vs-oblong-face-shape/) : le visage allongé est plus long, avec des côtés plus droits.
- [Rectangulaire ou allongé](/blog/rectangle-vs-oblong-face-shape/) : le visage rectangulaire a une mâchoire marquée.
- [Cœur ou diamant](/blog/heart-vs-diamond-face-shape/) : le visage en cœur a un front large ; celui du visage diamant est étroit.
- [Diamant ou ovale](/blog/diamond-vs-oval-face-shape/) : le front et la mâchoire du visage diamant sont bien plus étroits.
- Rond ou carré : le visage carré a des angles de mâchoire, le visage rond n'en a pas.

## Formes de visage pour hommes et femmes

Les formes sont les mêmes pour tout le monde, mais les conseils de style diffèrent. Consultez les [formes de visage pour femmes](/face-shapes/women/) et les [formes de visage pour hommes](/face-shapes/men/).`,
  faqs: [
    {
      q: "Combien existe-t-il de formes de visage ?",
      a: "La plupart des stylistes en utilisent de 7 à 10. Les 10 que nous retenons sont : ovale, rond, carré, allongé, rectangulaire, cœur, diamant, triangulaire, triangle inversé et poire.",
    },
    {
      q: "Quelle est la forme de visage la plus courante ?",
      a: "Le visage ovale est généralement considéré comme le plus courant, suivi du rond, du carré et du cœur.",
    },
    {
      q: "Quelle est la forme de visage la plus rare ?",
      a: "Le visage diamant est généralement présenté comme le plus rare, avec le triangulaire et la poire.",
    },
    {
      q: "Quelle est la forme de visage la plus attirante ?",
      a: "Le visage ovale est souvent qualifié d'idéal pour son équilibre, mais les études montrent que l'attractivité dépend bien plus de la symétrie, de la « moyenneté » des traits, de la peau et de l'expression que du contour.",
    },
    {
      q: "La forme du visage peut-elle changer ?",
      a: "Votre ossature est stable à l'âge adulte, mais le poids, le vieillissement et le tonus musculaire modifient les tissus mous, ce qui peut changer l'apparence de la forme de votre visage.",
    },
    {
      q: "Les formes de visage sont-elles différentes chez les hommes et les femmes ?",
      a: "Non, ce sont les mêmes formes. Les hommes ont en moyenne une mâchoire plus large, si bien que les visages carrés, rectangulaires et triangulaires sont un peu plus fréquents chez eux.",
    },
  ],
};

export const items: LocaleContent["items"] = {
  "eye-shapes/almond": {
    name: "Yeux en amande",
    definition:
      "Les yeux en amande sont plus larges que hauts, avec un pli visible et des coins qui s'affinent en une pointe douce, comme une amande. L'iris touche les paupières supérieure et inférieure, si bien qu'on voit peu de blanc au-dessus ou en dessous.",
  },
  "eye-shapes/round": {
    name: "Yeux ronds",
    definition:
      "Les yeux ronds sont plus hauts que la moyenne par rapport à leur largeur, ce qui les fait paraître grands et ouverts. Le blanc est souvent visible au-dessus ou en dessous de l'iris, et le pli de la paupière est bien visible.",
  },
  "eye-shapes/hooded": {
    name: "Paupières tombantes",
    definition:
      "Les paupières tombantes présentent un excès de peau qui descend de l'arcade sourcilière et recouvre le pli, si bien que la paupière supérieure paraît petite ou cachée lorsque les yeux sont ouverts.",
  },
  "eye-shapes/monolid": {
    name: "Yeux sans pli (monopaupière)",
    definition:
      "Les yeux sans pli n'ont pas de pli visible sur la paupière supérieure : celle-ci forme une surface lisse et continue des cils jusqu'au sourcil. Ils sont particulièrement fréquents chez les personnes d'origine est-asiatique.",
  },
  "eye-shapes/upturned": {
    name: "Yeux relevés",
    definition:
      "Les yeux relevés ont les coins externes plus hauts que les coins internes, ce qui donne un regard étiré, façon « œil de chat ». En termes de mesure, leur inclinaison canthale est positive.",
  },
  "eye-shapes/downturned": {
    name: "Yeux tombants",
    definition:
      "Les yeux tombants ont les coins externes plus bas que les coins internes. Cela donne un regard doux et correspond à une inclinaison canthale neutre ou négative.",
  },
  "eye-shapes/deep-set": {
    name: "Yeux enfoncés",
    definition:
      "Les yeux enfoncés sont situés plus en retrait dans le crâne, si bien que l'arcade sourcilière paraît plus saillante et projette une ombre sur la paupière. Ils semblent souvent plus grands de profil que de face.",
  },
  "eye-shapes/protruding": {
    name: "Yeux saillants",
    definition:
      "Les yeux saillants (ou proéminents) sont situés plus en avant : une grande partie de la paupière est visible et les yeux paraissent grands et ouverts. Un changement soudain de la proéminence des yeux peut être un signe médical : consultez un médecin si les vôtres changent.",
  },
  "eye-shapes/close-set": {
    name: "Yeux rapprochés",
    definition:
      "Les yeux rapprochés sont séparés par un écart plus étroit que la largeur d'un œil. Selon la règle des cinquièmes, l'écart idéal correspond à environ la largeur d'un œil.",
  },
  "eye-shapes/wide-set": {
    name: "Yeux écartés",
    definition:
      "Les yeux écartés sont séparés par un écart plus large que la largeur d'un œil. On les associe souvent à un air jeune et ouvert.",
  },
  "nose-shapes/greek": {
    name: "Nez grec",
    definition:
      "Le nez grec a une arête droite, sans bosse ni creux, qui forme une ligne nette du front jusqu'à la pointe. Il est généralement étroit à moyen en largeur.",
  },
  "nose-shapes/roman": {
    name: "Nez romain",
    definition:
      "Le nez romain a une arête proéminente qui se courbe vers l'extérieur, souvent avec une légère bosse, ce qui donne un profil affirmé. On le dit parfois aquilin, même si ce terme désigne plutôt une courbe plus prononcée et crochue.",
  },
  "nose-shapes/nubian": {
    name: "Nez nubien",
    definition:
      "Le nez nubien a une arête longue et assez basse, et une base plus large au niveau des narines. Il est courant chez les personnes d'origine africaine, mais on le retrouve dans toutes les populations.",
  },
  "nose-shapes/hawk": {
    name: "Nez aquilin (en bec d'aigle)",
    definition:
      "Le nez aquilin, ou nez en bec d'aigle, a une arête proéminente fortement courbée et une pointe orientée vers le bas, comme le bec d'un rapace.",
  },
  "nose-shapes/button": {
    name: "Nez en bouton",
    definition:
      "Le nez en bouton est petit, court et arrondi, avec une pointe légèrement retroussée. On l'associe souvent à un air juvénile.",
  },
  "nose-shapes/snub": {
    name: "Nez camus",
    definition:
      "Le nez camus est court et nettement retroussé, si bien que les narines sont visibles lorsqu'on regarde le visage de face.",
  },
  "nose-shapes/celestial": {
    name: "Nez retroussé (céleste)",
    definition:
      "Le nez céleste (aussi appelé nez retroussé) présente un léger creux au milieu de l'arête et une pointe orientée vers le haut. Il est plus long qu'un nez camus.",
  },
  "nose-shapes/fleshy": {
    name: "Nez charnu",
    definition:
      "Le nez charnu est grand et large, avec une pointe arrondie et proéminente. C'est l'une des formes de nez les plus courantes.",
  },
  "nose-shapes/bumpy": {
    name: "Nez bossu",
    definition:
      "Le nez bossu présente une bosse visible (ou bosse dorsale) sur l'arête. Très courante, elle peut être naturelle ou résulter d'un traumatisme.",
  },
  "lip-shapes/full": {
    name: "Lèvres pulpeuses",
    definition:
      "Les lèvres pulpeuses sont plus hautes par rapport à leur largeur, si bien que les deux lèvres paraissent charnues.",
  },
  "lip-shapes/thin": {
    name: "Lèvres fines",
    definition:
      "Les lèvres fines sont moins hautes par rapport à leur largeur, et le vermillon (la partie rose) est étroit.",
  },
  "lip-shapes/heart": {
    name: "Lèvres en cœur",
    definition:
      "Les lèvres en cœur ont un arc de Cupidon marqué et une lèvre supérieure plus pulpeuse qui, avec la lèvre inférieure, dessine un cœur.",
  },
  "lip-shapes/bow": {
    name: "Lèvres en arc",
    definition:
      "Les lèvres en arc ont un arc de Cupidon profond et très dessiné, comme un arc d'archer, avec un volume global plus fin.",
  },
  "lip-shapes/top-heavy": {
    name: "Lèvre supérieure plus pulpeuse",
    definition:
      "Dans ce cas, la lèvre supérieure est aussi pulpeuse, voire plus, que la lèvre inférieure.",
  },
  "lip-shapes/bottom-heavy": {
    name: "Lèvre inférieure plus pulpeuse",
    definition:
      "Dans ce cas, la lèvre inférieure est bien plus pulpeuse que la lèvre supérieure, au-delà de la proportion habituelle de 1,5:1.",
  },
  "lip-shapes/wide": {
    name: "Lèvres larges",
    definition:
      "Les lèvres larges s'étendent davantage sur le visage : les commissures arrivent à peu près à l'aplomb des pupilles.",
  },
  "lip-shapes/round": {
    name: "Lèvres rondes",
    definition:
      "Les lèvres rondes sont pulpeuses mais relativement étroites, si bien que la bouche paraît compacte et arrondie.",
  },
  "lip-shapes/downturned": {
    name: "Lèvres tombantes",
    definition:
      "Les lèvres tombantes ont des commissures situées plus bas que le centre de la bouche au repos.",
  },
  "head-shapes/round": {
    name: "Tête ronde",
    definition:
      "Une tête ronde est à peu près aussi large que longue et s'arrondit de manière régulière à l'arrière et au sommet.",
  },
  "head-shapes/oval": {
    name: "Tête ovale",
    definition:
      "Une tête ovale est légèrement plus longue d'avant en arrière que large, avec une courbe régulière à l'arrière.",
  },
  "head-shapes/long": {
    name: "Tête allongée",
    definition:
      "Une tête allongée (dolichocéphale) est nettement plus longue d'avant en arrière que large.",
  },
  "head-shapes/flat-back": {
    name: "Arrière de la tête plat",
    definition:
      "Un arrière de tête plat descend plus abruptement derrière le sommet du crâne au lieu de s'arrondir vers l'extérieur.",
  },
  "head-shapes/square": {
    name: "Tête carrée",
    definition: "Une tête carrée a un sommet plat et des côtés assez droits.",
  },
  "head-shapes/egg": {
    name: "Tête en forme d'œuf",
    definition:
      "Une tête en forme d'œuf est plus large au sommet ou à l'arrière et plus étroite vers la mâchoire, comme un œuf.",
  },
  "jawline-shapes/square": {
    name: "Mâchoire carrée",
    definition: "Une mâchoire carrée est large, avec des angles nets et visibles sous les oreilles.",
  },
  "jawline-shapes/rounded": {
    name: "Mâchoire arrondie",
    definition:
      "Une mâchoire arrondie suit une courbe régulière de l'oreille au menton, sans angle visible.",
  },
  "jawline-shapes/v-shaped": {
    name: "Mâchoire en V",
    definition:
      "Une mâchoire en V s'affine des pommettes jusqu'à un menton étroit, en formant un V.",
  },
  "jawline-shapes/pointed": {
    name: "Mâchoire pointue",
    definition: "Une mâchoire pointue se termine par un menton étroit et projeté vers l'avant.",
  },
  "jawline-shapes/wide": {
    name: "Mâchoire large",
    definition: "Une mâchoire large est aussi large que les pommettes, voire plus.",
  },
  "jawline-shapes/narrow": {
    name: "Mâchoire étroite",
    definition: "Une mâchoire étroite est nettement plus étroite que les pommettes.",
  },
  "kibbe-body-types/dramatic": {
    name: "Dramatic",
    definition:
      "Le Dramatic est du yang pur : une ossature longue, étroite et anguleuse, des traits du visage marqués et peu de douceur.",
  },
  "kibbe-body-types/soft-dramatic": {
    name: "Soft Dramatic",
    definition:
      "Le Soft Dramatic associe une ossature yang à des chairs yin : une silhouette longue et imposante, avec des courbes et des traits généreux.",
  },
  "kibbe-body-types/flamboyant-natural": {
    name: "Flamboyant Natural",
    definition:
      "Le Flamboyant Natural a une silhouette longue et large, avec un yang plus massif qu'anguleux.",
  },
  "kibbe-body-types/natural": {
    name: "Natural",
    definition:
      "Le Natural est un type yang adouci : taille moyenne, ossature large et légèrement massive, allure sportive.",
  },
  "kibbe-body-types/soft-natural": {
    name: "Soft Natural",
    definition:
      "Le Soft Natural a une silhouette légèrement large et massive, avec une couche de douceur yin et des courbes.",
  },
  "kibbe-body-types/dramatic-classic": {
    name: "Dramatic Classic",
    definition:
      "Le Dramatic Classic est équilibré et symétrique, avec une légère netteté dans l'ossature et le visage.",
  },
  "kibbe-body-types/classic": {
    name: "Classic",
    definition:
      "Le Classic est un équilibre parfait entre yin et yang : modéré, symétrique et raffiné.",
  },
  "kibbe-body-types/soft-classic": {
    name: "Soft Classic",
    definition: "Le Soft Classic est équilibré, avec une légère douceur et des rondeurs.",
  },
  "kibbe-body-types/flamboyant-gamine": {
    name: "Flamboyant Gamine",
    definition:
      "Le Flamboyant Gamine associe une petite taille à davantage de yang : net, droit et pétillant.",
  },
  "kibbe-body-types/gamine": {
    name: "Gamine",
    definition: "Le Gamine est un mélange équilibré de yin et de yang dans une silhouette compacte.",
  },
  "kibbe-body-types/soft-gamine": {
    name: "Soft Gamine",
    definition:
      "Le Soft Gamine est une silhouette compacte avec davantage de yin : ronde, pulpeuse et juvénile.",
  },
  "kibbe-body-types/theatrical-romantic": {
    name: "Theatrical Romantic",
    definition:
      "Le Theatrical Romantic est yin avec une pointe de netteté : petite taille, courbes et traits délicats et légèrement anguleux.",
  },
  "kibbe-body-types/romantic": {
    name: "Romantic",
    definition:
      "Le Romantic est du yin pur : doux, arrondi et tout en courbes, avec des traits généreux.",
  },
};

export const hubNames: LocaleContent["hubNames"] = {
  "eye-shapes": "Formes des yeux",
  "nose-shapes": "Formes du nez",
  "lip-shapes": "Formes des lèvres",
  "head-shapes": "Formes de tête",
  "jawline-shapes": "Types de mâchoire",
  "kibbe-body-types": "Morphotypes Kibbe",
};

export const pages: Dict = {
  "Key takeaways": "À retenir",
  "478 landmarks are placed and measured right in your browser.": "478 points de repère sont placés et mesurés directement dans votre navigateur.",
  "AI face shape detector measuring forehead, cheekbone and jaw width on a face outline": "Détecteur de forme du visage par IA mesurant la largeur du front, des pommettes et de la mâchoire sur le contour d'un visage",
  "AI measures your face": "L'IA mesure votre visage",
  "Add a photo": "Ajoutez une photo",
  "Advice you can use": "Des conseils concrets",
  "Answer a few questions": "Répondez à quelques questions",
  "At a glance": "En bref",
  "Beard styles for {shape} faces": "Styles de barbe pour un visage {shape}",
  "Best glasses for {shape} faces": "Meilleures lunettes pour un visage {shape}",
  "Best haircuts for {shape} faces (men)": "Meilleures coupes pour un visage {shape} (hommes)",
  "Best hairstyles for {shape} faces (women)": "Meilleures coiffures pour un visage {shape} (femmes)",
  "Breadcrumb": "Fil d'Ariane",
  "By": "Par",
  "Calibrated on real faces": "Calibré sur de vrais visages",
  "Celebrities with {shape} faces": "Célébrités au visage {shape}",
  "Chart of the 10 face shapes with forehead, cheekbone and jaw width lines": "Tableau des 10 formes de visage avec les lignes de largeur du front, des pommettes et de la mâchoire",
  "Check if you have {a_shape} face": "Vérifiez si vous avez un visage {shape}",
  "Copy embed code": "Copier le code d'intégration",
  "Each answer adds points to the types it fits.": "Chaque réponse ajoute des points aux formes qui lui correspondent.",
  "Embed this quiz on your website": "Intégrez ce quiz à votre site",
  "Every result links to haircuts, glasses, beards and makeup for your shape.": "Chaque résultat renvoie vers des coupes, lunettes, barbes et maquillages adaptés à votre forme.",
  "Face Shapes": "Formes de visage",
  "Face shape guide": "Guide des formes de visage",
  "Face shapes chart: gold lines mark forehead, cheekbone and jaw width": "Tableau des formes de visage : les lignes dorées indiquent la largeur du front, des pommettes et de la mâchoire",
  "Find your face shape from a photo": "Trouvez la forme de votre visage à partir d'une photo",
  "Frames to avoid": "Montures à éviter",
  "Free AI tool": "Outil IA gratuit",
  "Free for salons, barbers, stylists, eyewear shops and bloggers. Copy this code into your page:": "Gratuit pour les salons de coiffure, barbiers, stylistes, opticiens et blogueurs. Copiez ce code dans votre page :",
  "Frequently asked questions": "Questions fréquentes",
  "Get your result": "Obtenez votre résultat",
  "Get your result in 3 steps": "Votre résultat en 3 étapes",
  "Glasses for {shape} faces": "Lunettes pour un visage {shape}",
  "Haircuts for {shape} faces (men)": "Coupes pour un visage {shape} (hommes)",
  "Hairstyles for {shape} faces (women)": "Coiffures pour un visage {shape} (femmes)",
  "Home": "Accueil",
  "How to tell if you have {a_shape} face": "Comment savoir si vous avez un visage {shape}",
  "Just for fun · Free": "Pour s'amuser · Gratuit",
  "Last updated": "Dernière mise à jour",
  "Live camera mode": "Mode caméra en direct",
  "Makeup and contouring for {shape} faces": "Maquillage et contouring pour un visage {shape}",
  "Man with a diamond face shape": "Homme au visage diamant",
  "Man with a heart face shape": "Homme au visage en cœur",
  "Man with a pear face shape": "Homme au visage en poire",
  "Man with a rectangle face shape": "Homme au visage rectangulaire",
  "Man with a round face shape": "Homme au visage rond",
  "Man with a square face shape": "Homme au visage carré",
  "Man with a triangle face shape": "Homme au visage triangulaire",
  "Man with an inverted triangle face shape": "Homme au visage en triangle inversé",
  "Man with an oblong face shape": "Homme au visage allongé",
  "Man with an oval face shape": "Homme au visage ovale",
  "More free face analysis tools": "Plus d'outils gratuits d'analyse du visage",
  "Most faces mix two shapes, so you see a percentage match for all ten.": "La plupart des visages combinent deux formes : vous voyez donc un pourcentage de correspondance pour les dix.",
  "No photo needed": "Aucune photo nécessaire",
  "No sign-up": "Sans inscription",
  "Photo never uploaded": "Photo jamais envoyée",
  "Private by design": "Confidentiel par conception",
  "Real examples of {a_shape} face shape": "Exemples réels de visage {shape}",
  "Related tools": "Outils associés",
  "Results in seconds": "Résultats en quelques secondes",
  "Save a result card for Instagram, TikTok or Pinterest. It never includes your photo.": "Enregistrez une carte de résultat pour Instagram, TikTok ou Pinterest. Elle n'inclut jamais votre photo.",
  "See all haircuts for men": "Voir toutes les coupes pour hommes",
  "See all hairstyles for women": "Voir toutes les coiffures pour femmes",
  "See all {n} tools": "Voir les {n} outils",
  "See your best match, your runners-up and a guide.": "Découvrez votre forme principale, les formes proches et un guide.",
  "See your match, the measurements behind it and what to do next.": "Découvrez votre forme, les mesures qui l'expliquent et la marche à suivre.",
  "Send feedback": "Envoyer un avis",
  "Share your result": "Partagez votre résultat",
  "Shows your blend": "Montre votre mélange de formes",
  "Tap a shape to see its proportions, best hairstyles, glasses and celebrity examples.": "Touchez une forme pour voir ses proportions, les coiffures et lunettes les plus flatteuses et des exemples de célébrités.",
  "The AI runs inside your browser. Your photo is never uploaded, stored or seen.": "L'IA fonctionne dans votre navigateur. Votre photo n'est jamais envoyée, stockée ni consultée.",
  "Tried it? Tell us how it went": "Vous l'avez essayé ? Dites-nous ce que vous en pensez",
  "Upload a front-facing photo or turn on your camera.": "Importez une photo de face ou activez votre caméra.",
  "Use a mirror. Every answer takes a few seconds.": "Munissez-vous d'un miroir. Chaque réponse prend quelques secondes.",
  "Want to learn about every type? Read our guide to": "Envie d'en savoir plus sur chaque type ? Lisez notre guide des",
  "Watch your face shape update in real time, then capture for a full reading.": "Regardez la forme de votre visage s'actualiser en temps réel, puis prenez une photo pour une analyse complète.",
  "We compare your proportions with measurements from real photos, not drawings.": "Nous comparons vos proportions à des mesures issues de vraies photos, pas de dessins.",
  "We read every message and use your feedback to make the detector more accurate. Share your result, a suggestion or a bug.": "Nous lisons chaque message et utilisons vos retours pour rendre le détecteur plus précis. Partagez votre résultat, une suggestion ou un bug.",
  "We score your answers": "Nous analysons vos réponses",
  "What is your face shape? The 10 types": "Quelle est la forme de votre visage ? Les 10 types",
  "What people say": "Ce qu'en disent les utilisateurs",
  "What {a_shape} face shape looks like": "À quoi ressemble un visage {shape}",
  "Why people use our face shape detector": "Pourquoi utiliser notre détecteur de forme du visage",
  "Woman with a diamond face shape": "Femme au visage diamant",
  "Woman with a heart face shape": "Femme au visage en cœur",
  "Woman with a pear face shape": "Femme au visage en poire",
  "Woman with a rectangle face shape": "Femme au visage rectangulaire",
  "Woman with a round face shape": "Femme au visage rond",
  "Woman with a square face shape": "Femme au visage carré",
  "Woman with a triangle face shape": "Femme au visage triangulaire",
  "Woman with an inverted triangle face shape": "Femme au visage en triangle inversé",
  "Woman with an oblong face shape": "Femme au visage allongé",
  "Woman with an oval face shape": "Femme au visage ovale",
  "face shapes scored": "formes de visage évaluées",
  "facial landmarks measured": "points du visage mesurés",
  "photos uploaded, ever": "photo envoyée sur nos serveurs",
  "to your result": "jusqu'à votre résultat",
  "{Shape} Face": "Visage {shape}",
  "{Shape} Face Shape": "Forme de visage {shape}",
  "{Shape} face guides": "Guides pour visage {shape}",
  "{Shape} face shape diagram with forehead, cheekbone and jaw width lines": "Schéma de la forme de visage {shape} avec les lignes de largeur du front, des pommettes et de la mâchoire",
  "{Shape} face shape measurements": "Mesures de la forme de visage {shape}",
  "{Shape} vs similar face shapes": "Visage {shape} et formes similaires",
  "{n} min read": "{n} min de lecture",
  "{shape} face shape": "forme de visage {shape}",
  "{shape} face shape diagram": "schéma de la forme de visage {shape}",
  "{shape} face shape diagram showing forehead, cheekbone and jaw widths": "schéma de la forme de visage {shape} montrant la largeur du front, des pommettes et de la mâchoire",
};
