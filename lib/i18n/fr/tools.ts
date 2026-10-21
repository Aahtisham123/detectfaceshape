import type { ToolT } from "../types";

export const tools: Record<string, ToolT> = {
  "face-shape-detector": {
    name: "Détecteur de forme du visage",
    short: "Trouvez la forme de votre visage à partir d'une photo ou de votre caméra.",
    h1: "Détecteur de forme du visage",
    intro: "Importez une photo ou activez votre caméra : notre IA mesure votre front, vos pommettes, votre mâchoire et la longueur de votre visage pour vous dire laquelle des 10 formes de visage est la vôtre : ovale, rond, carré, allongé, rectangulaire, cœur, diamant, triangulaire, triangle inversé ou poire. C'est gratuit, cela prend environ cinq secondes et votre photo ne quitte jamais votre appareil.",
    body: `## Comment fonctionne le détecteur de forme du visage

1. **Il repère 478 points sur votre visage.** Nous utilisons MediaPipe Face Landmarker de Google, un modèle facial qui tourne dans votre navigateur, pour placer 478 repères sur votre visage : la zone de la racine des cheveux, les pommettes, les angles de la mâchoire, le menton et plus encore.
2. **Il redresse votre visage.** Si votre tête est inclinée, nous faisons pivoter les repères pour que vos yeux soient à l'horizontale avant de mesurer.
3. **Il mesure quatre largeurs et une longueur.** Largeur du front, largeur des pommettes, largeur de la mâchoire, largeur du menton et longueur du visage, ainsi que l'angle de vos angles mandibulaires.
4. **Il vous compare à de vrais visages.** Nous avons calibré le détecteur sur de vraies photos mesurées avec le même modèle : une « mâchoire large » signifie donc large par rapport à de vraies personnes, pas par rapport à un dessin.
5. **Il évalue les 10 formes.** Vous obtenez votre meilleure correspondance ainsi qu'un pourcentage pour chaque forme, car la plupart des gens sont un mélange.

## Ce que signifie chaque résultat

| Forme du visage | Proportions clés |
|---|---|
| [Ovale](/fr/face-shapes/oval/) | Environ 1,5× plus long que large, plus large au niveau des pommettes, mâchoire douce |
| [Rond](/fr/face-shapes/round/) | Longueur et largeur similaires, joues pleines, mâchoire douce |
| [Carré](/fr/face-shapes/square/) | Front, pommettes et mâchoire de largeur similaire, mâchoire anguleuse |
| [Allongé](/fr/face-shapes/oblong/) | Long et étroit, mâchoire arrondie |
| [Rectangulaire](/fr/face-shapes/rectangle/) | Long, avec une mâchoire anguleuse |
| [Cœur](/fr/face-shapes/heart/) | Front large, menton étroit et pointu |
| [Diamant](/fr/face-shapes/diamond/) | Plus large au niveau des pommettes, front et mâchoire étroits |
| [Triangulaire](/fr/face-shapes/triangle/) | Mâchoire plus large que le front, anguleux |
| [Triangle inversé](/fr/face-shapes/inverted-triangle/) | Front large, mâchoire étroite et anguleuse |
| [Poire](/fr/face-shapes/pear/) | Mâchoire pleine et large, front étroit |

Comparez toutes les formes côte à côte dans notre [tableau des formes de visage](/fr/face-shapes/).

## Utilisez votre caméra

Appuyez sur **Utiliser ma caméra** pour ouvrir une caméra en plein écran avec un ovale pour cadrer votre visage. Après la photo, vous pouvez la **reprendre** ou la **recadrer**, puis l'IA mesure votre visage et affiche votre résultat.

## Comment prendre la bonne photo

- **Placez-vous bien face à l'objectif.** Tourner la tête rétrécit un côté du visage et fausse tous les rapports.
- **Gardez le menton droit.** Relever le menton fait paraître le visage plus court ; le baisser fait paraître la mâchoire plus étroite.
- **Dégagez vos cheveux en arrière** pour que la racine des cheveux, le front et la mâchoire soient visibles.
- **Utilisez une lumière uniforme, de face.** La lumière d'une fenêtre est idéale. Évitez les ombres latérales marquées.
- **Expression neutre, bouche fermée.** Sourire élargit les joues et modifie la mâchoire.
- **Tenez l'appareil à hauteur des yeux, à environ une longueur de bras.** Les selfies pris de près déforment le visage (le nez paraît plus gros et le visage plus étroit).

## Comment trouver la forme de votre visage sans photo

Vous préférez ne pas utiliser de photo ? Faites le [test de forme de visage](/fr/face-shape-quiz/), ou mesurez-vous avec un mètre ruban souple et utilisez le [calculateur de forme de visage](/fr/face-shape-calculator/).

## Quelle est sa précision ?

Le détecteur est aussi précis que la photo. Avec une photo prise bien de face, bien éclairée et les cheveux dégagés, il mesure vos proportions de façon constante. Les catégories de formes de visage ont toutefois des frontières floues. Les coiffeurs sont souvent en désaccord sur les visages limites : regardez donc vos deux premiers résultats. S'ils sont proches, vous êtes un mélange, et les conseils pour les deux formes s'appliquent.

## Votre photo reste sur votre appareil

L'analyse s'effectue entièrement dans votre navigateur grâce à un modèle facial qui tourne en local. Votre photo n'est jamais envoyée, stockée ni vue par qui que ce soit, et rien n'est conservé lorsque vous fermez la page. Consultez notre [politique de confidentialité](/privacy/) et [le fonctionnement de notre détecteur](/how-it-works/).`,
    faqs: [
      { q: "Quelle est la forme de mon visage ?", a: "Importez une photo de face dans notre détecteur gratuit : il mesurera votre visage et vous dira s'il est ovale, rond, carré, allongé, rectangulaire, en cœur, en diamant, triangulaire, en triangle inversé ou en poire, avec un pourcentage de correspondance pour chaque forme." },
      { q: "Le détecteur de forme du visage est-il gratuit ?", a: "Oui. Il est entièrement gratuit, sans inscription." },
      { q: "Conservez-vous ma photo ?", a: "Non. L'analyse s'effectue dans votre navigateur et votre photo n'est jamais envoyée." },
      { q: "Pourquoi ai-je obtenu un résultat différent avec une autre photo ?", a: "L'angle de la tête, la déformation de l'objectif et l'expression modifient les proportions mesurées. Utilisez une photo bien de face, prise à bout de bras, avec un visage neutre. Si deux photos ne concordent pas, vous êtes probablement un mélange des deux formes." },
      { q: "Combien existe-t-il de formes de visage ?", a: "La plupart des coiffeurs en utilisent 7 à 10. Nous en utilisons 10 : ovale, rond, carré, allongé, rectangulaire, cœur, diamant, triangulaire, triangle inversé et poire." },
      { q: "Quelle est la forme de visage la plus courante ?", a: "Le visage ovale est généralement décrit comme le plus courant, suivi du rond, du carré et du cœur." },
      { q: "Puis-je l'utiliser sur mon téléphone ?", a: "Oui. Il fonctionne dans les navigateurs mobiles récents sur iPhone et Android, avec l'import de photo ou la caméra frontale." },
    ],
    title: "Forme du visage : quelle est la mienne ? Test IA gratuit",
    description: "Découvrez la forme de votre visage en quelques secondes. Notre détecteur IA gratuit mesure 478 points dans votre navigateur. Photo non envoyée.",
  },
  "face-shape-quiz": {
    name: "Test de forme de visage",
    short: "Répondez à 7 questions rapides, sans caméra.",
    h1: "Test de forme de visage",
    intro: "Répondez à sept questions rapides sur votre visage en vous regardant dans un miroir, et nous vous dirons quelle est la forme de votre visage. Aucune photo ni caméra nécessaire. Cela prend environ une minute.",
    body: `## Comment fonctionne le test

Chaque réponse ajoute des points aux formes de visage qui lui correspondent. Par exemple, « ma mâchoire a des angles marqués » ajoute des points au carré, au rectangulaire, au triangulaire et au triangle inversé, et « mon visage est nettement plus long que large » ajoute des points à l'ovale, à l'allongé et au rectangulaire. La forme qui obtient le plus de points l'emporte, et vous voyez vos trois premières.

## Conseils pour des réponses précises

- Regardez-vous bien de face dans un miroir, les cheveux dégagés en arrière.
- Tracez le contour de votre visage sur le miroir avec un feutre lavable ou un rouge à lèvres, puis reculez. Voir la forme rend les questions plus faciles.
- Si vous hésitez entre deux réponses, choisissez l'option du milieu.

## Test ou détecteur ?

Le test repose sur votre propre appréciation de vos traits, ce qui est difficile. Le [détecteur de forme du visage](/fr/) mesure directement votre visage à partir d'une photo. Utilisez les deux pour plus de certitude.

## Ajoutez ce test à votre site

Les salons de coiffure, barbiers et opticiens peuvent intégrer ce test gratuitement. [Obtenir le code d'intégration](#embed).`,
    faqs: [
      { q: "Comment trouver la forme de mon visage sans photo ?", a: "Faites ce test en vous regardant dans un miroir, ou mesurez votre visage avec un mètre ruban et utilisez le calculateur de forme de visage." },
      { q: "Le test de forme de visage est-il fiable ?", a: "Il est aussi fiable que vos réponses. Pour un résultat mesuré, utilisez aussi le détecteur à partir d'une photo." },
    ],
    title: "Test de forme de visage : quelle est la mienne ?",
    description: "Test de forme de visage gratuit, sans photo : sept questions rapides sur votre front, vos pommettes, votre mâchoire et votre menton.",
  },
  "face-shape-calculator": {
    name: "Calculateur de forme de visage",
    short: "Saisissez 4 mesures prises au mètre ruban.",
    h1: "Calculateur de forme de visage",
    intro: "Mesurez votre visage avec un mètre ruban souple, saisissez quatre nombres, et le calculateur compare vos proportions pour vous indiquer la forme de votre visage. Utilisez des pouces ou des centimètres : seuls les rapports comptent.",
    body: `## Comment mesurer votre visage

1. **Front :** mesurez votre front à son point le plus large, généralement à mi-chemin entre les sourcils et la racine des cheveux, d'un bord de la chevelure à l'autre.
2. **Pommettes :** mesurez d'un coin externe de l'œil à l'autre en passant par le point le plus haut des pommettes (les « pointes » situées sous les coins externes des yeux).
3. **Mâchoire :** mesurez de la pointe du menton jusqu'à l'angle de la mâchoire sous l'oreille, puis **multipliez par deux**. Notre calculateur le fait pour vous : saisissez simplement un seul côté.
4. **Longueur du visage :** mesurez du centre de la racine des cheveux jusqu'à la pointe du menton, en ligne droite.

## Comment le calculateur décide

| Si… | La forme de votre visage est probablement… |
|---|---|
| La longueur vaut 1,5× la largeur ou plus, front ≈ pommettes ≈ mâchoire | Allongé (ou rectangulaire avec une mâchoire marquée) |
| Longueur ≈ largeur, joues les plus larges, mâchoire douce | Rond |
| Longueur ≈ largeur, tout de largeur similaire, mâchoire marquée | Carré |
| Pommettes les plus larges, front > mâchoire, longueur ≈ 1,5× | Ovale |
| Front le plus large, mâchoire étroite | Cœur (ou triangle inversé) |
| Pommettes les plus larges, front et mâchoire étroits | Diamant |
| Mâchoire la plus large, front étroit | Triangulaire / poire |

Lisez le [guide complet pour mesurer votre visage](/blog/how-to-measure-your-face/).`,
    faqs: [
      { q: "Comment calculer la forme de mon visage ?", a: "Mesurez votre front, vos pommettes, votre mâchoire et la longueur de votre visage, puis comparez : quelle partie est la plus large, et quelle est la longueur de votre visage par rapport à sa largeur ? Notre calculateur fait la comparaison pour vous." },
      { q: "Dois-je utiliser des pouces ou des centimètres ?", a: "L'un ou l'autre. Le calculateur n'utilise que des rapports." },
    ],
    title: "Calculateur de forme de visage : vos mesures",
    description: "Mesurez front, pommettes, mâchoire et longueur au mètre ruban : le calculateur de forme de visage vous indique la forme de votre visage.",
  },
  "eye-shape-detector": {
    name: "Détecteur de forme des yeux",
    short: "En amande, ronds, tombants, relevés et plus.",
    h1: "Détecteur de forme des yeux",
    intro: "Importez une photo ou utilisez votre caméra : nous mesurons l'ouverture de vos yeux, l'inclinaison des coins externes et la surface de paupière visible sous le sourcil, puis nous vous indiquons la forme de vos yeux et s'ils sont rapprochés, moyens ou écartés.",
    body: `## Ce que mesure le détecteur de forme des yeux

- **Ouverture :** hauteur de l'œil divisée par sa largeur. Les yeux ronds sont hauts par rapport à leur largeur ; les yeux bridés et en amande sont plus longs.
- **Inclinaison canthale :** l'angle entre le coin interne et le coin externe. Une inclinaison positive donne des yeux relevés ; une inclinaison négative, des yeux tombant vers le bas.
- **Espace de paupière :** l'écart entre la paupière supérieure et le milieu du sourcil, rapporté à la largeur de l'œil. Un faible espace suggère des yeux tombants ou enfoncés.
- **Écartement :** la distance entre les coins internes comparée à la largeur de l'œil.

Chaque mesure est comparée aux moyennes de vrais visages, et chaque forme reçoit un pourcentage de correspondance.

## Limites

Les plis des paupières ne sont pas suivis par les modèles de repères faciaux : les résultats « paupières tombantes » et « yeux bridés » sont donc déduits de l'espace de paupière et de l'ouverture. Vérifiez-les dans un miroir à l'aide de notre [guide des formes d'yeux](/eye-shapes/).

## Comment prendre la bonne photo

- **Placez-vous bien face à l'objectif.** Tourner la tête rétrécit un côté du visage et fausse tous les rapports.
- **Gardez le menton droit.** Relever le menton fait paraître le visage plus court ; le baisser fait paraître la mâchoire plus étroite.
- **Dégagez vos cheveux en arrière** pour que la racine des cheveux, le front et la mâchoire soient visibles.
- **Utilisez une lumière uniforme, de face.** La lumière d'une fenêtre est idéale. Évitez les ombres latérales marquées.
- **Expression neutre, bouche fermée.** Sourire élargit les joues et modifie la mâchoire.
- **Tenez l'appareil à hauteur des yeux, à environ une longueur de bras.** Les selfies pris de près déforment le visage (le nez paraît plus gros et le visage plus étroit).

## Votre photo reste sur votre appareil

L'analyse s'effectue entièrement dans votre navigateur grâce à un modèle facial qui tourne en local. Votre photo n'est jamais envoyée, stockée ni vue par qui que ce soit, et rien n'est conservé lorsque vous fermez la page. Consultez notre [politique de confidentialité](/privacy/) et [le fonctionnement de notre détecteur](/how-it-works/).`,
    faqs: [
      { q: "Comment connaître la forme de mes yeux ?", a: "Importez une photo de face dans le détecteur, ou vérifiez dans un miroir : observez le pli de la paupière, si le blanc de l'œil est visible autour de l'iris, et l'angle des coins." },
      { q: "Peut-il détecter les paupières tombantes ?", a: "Il estime la paupière tombante à partir de la surface de paupière visible sous le sourcil. Vérifiez dans un miroir, car le pli lui-même n'est pas suivi." },
    ],
    title: "Forme des yeux : test IA gratuit par photo",
    description: "Trouvez la forme de vos yeux par photo : amande, ronds, tombants, bridés, relevés ou saillants, plus écartement et inclinaison. Gratuit.",
  },
  "nose-shape-detector": {
    name: "Détecteur de forme du nez",
    short: "Grec, romain, nubien, en bouton, retroussé et plus.",
    h1: "Détecteur de forme du nez",
    intro: "Importez une photo de face : nous mesurons la largeur, la longueur, l'angle de la pointe et le profil de l'arête de votre nez, puis nous vous associons à la plus proche de huit formes de nez courantes : grec, romain, nubien, aquilin, en bouton, retroussé, céleste et charnu.",
    body: `## Ce que mesure le détecteur de forme du nez

- **Largeur :** largeur des narines comparée à l'écart entre les coins internes des yeux.
- **Longueur :** longueur de l'arête à la base comparée à la longueur du visage.
- **Angle de la pointe :** la hauteur de la pointe par rapport à la base du nez. Les pointes retroussées sont plus hautes.
- **Arête et projection :** estimées à partir des données de profondeur du modèle. Une photo de face les montre moins clairement, elles comptent donc moins dans votre résultat.

## Limites

Les bosses de l'arête (nez romain et aquilin) se voient mieux de profil. Si votre résultat est romain ou aquilin, comparez avec une vue de côté à l'aide de notre [guide des formes de nez](/nose-shapes/).

## Comment prendre la bonne photo

- **Placez-vous bien face à l'objectif.** Tourner la tête rétrécit un côté du visage et fausse tous les rapports.
- **Gardez le menton droit.** Relever le menton fait paraître le visage plus court ; le baisser fait paraître la mâchoire plus étroite.
- **Dégagez vos cheveux en arrière** pour que la racine des cheveux, le front et la mâchoire soient visibles.
- **Utilisez une lumière uniforme, de face.** La lumière d'une fenêtre est idéale. Évitez les ombres latérales marquées.
- **Expression neutre, bouche fermée.** Sourire élargit les joues et modifie la mâchoire.
- **Tenez l'appareil à hauteur des yeux, à environ une longueur de bras.** Les selfies pris de près déforment le visage (le nez paraît plus gros et le visage plus étroit).

## Votre photo reste sur votre appareil

L'analyse s'effectue entièrement dans votre navigateur grâce à un modèle facial qui tourne en local. Votre photo n'est jamais envoyée, stockée ni vue par qui que ce soit, et rien n'est conservé lorsque vous fermez la page. Consultez notre [politique de confidentialité](/privacy/) et [le fonctionnement de notre détecteur](/how-it-works/).`,
    faqs: [
      { q: "Comment connaître la forme de mon nez ?", a: "Utilisez le détecteur avec une photo de face, puis vérifiez votre profil dans un miroir pour repérer une bosse ou un creux sur l'arête." },
      { q: "Quelles formes de nez existe-t-il ?", a: "Les plus courantes sont le nez grec, romain, nubien, aquilin, en bouton, retroussé, céleste, charnu et bosselé." },
    ],
    title: "Forme du nez : quelle est la mienne ? Test IA",
    description: "Trouvez la forme de votre nez par photo : grec, romain, nubien, aquilin, en bouton, retroussé, céleste ou charnu. Gratuit et privé.",
  },
  "lip-shape-analyzer": {
    name: "Analyseur de forme des lèvres",
    short: "Pulpeuses, fines, en cœur, en arc, lèvre supérieure dominante et plus.",
    h1: "Analyseur de forme des lèvres",
    intro: "Importez une photo, les lèvres doucement fermées : nous mesurons le volume de vos lèvres, le rapport entre lèvre supérieure et inférieure, la largeur de la bouche, l'arc de Cupidon et l'angle des commissures, puis nous vous indiquons la forme de vos lèvres.",
    body: `## Ce que mesure l'analyseur de forme des lèvres

- **Volume :** hauteur totale des lèvres comparée à la largeur de la bouche.
- **Rapport supérieure/inférieure :** chez la plupart des gens, la lèvre inférieure mesure environ 1,5 à 1,7× la hauteur de la lèvre supérieure.
- **Largeur :** largeur de la bouche comparée à la largeur du nez (en moyenne environ 1,4 à 1,6×).
- **Arc de Cupidon :** la profondeur du creux entre les deux pointes de la lèvre supérieure.
- **Commissures :** si les coins de votre bouche se situent au-dessus ou au-dessous de son centre.

Gardez les lèvres fermées et détendues. Sourire ou faire la moue modifie toutes les mesures.

## Comment prendre la bonne photo

- **Placez-vous bien face à l'objectif.** Tourner la tête rétrécit un côté du visage et fausse tous les rapports.
- **Gardez le menton droit.** Relever le menton fait paraître le visage plus court ; le baisser fait paraître la mâchoire plus étroite.
- **Dégagez vos cheveux en arrière** pour que la racine des cheveux, le front et la mâchoire soient visibles.
- **Utilisez une lumière uniforme, de face.** La lumière d'une fenêtre est idéale. Évitez les ombres latérales marquées.
- **Expression neutre, bouche fermée.** Sourire élargit les joues et modifie la mâchoire.
- **Tenez l'appareil à hauteur des yeux, à environ une longueur de bras.** Les selfies pris de près déforment le visage (le nez paraît plus gros et le visage plus étroit).

## Votre photo reste sur votre appareil

L'analyse s'effectue entièrement dans votre navigateur grâce à un modèle facial qui tourne en local. Votre photo n'est jamais envoyée, stockée ni vue par qui que ce soit, et rien n'est conservé lorsque vous fermez la page. Consultez notre [politique de confidentialité](/privacy/) et [le fonctionnement de notre détecteur](/how-it-works/).`,
    faqs: [
      { q: "Quel est le rapport idéal des lèvres ?", a: "Une lèvre inférieure d'environ 1,6× la hauteur de la lèvre supérieure est souvent décrite comme idéale." },
      { q: "Dois-je sourire sur la photo ?", a: "Non. Gardez les lèvres fermées et détendues." },
    ],
    title: "Forme des lèvres : analyseur gratuit par photo",
    description: "Trouvez la forme de vos lèvres par photo : pulpeuses, fines, en cœur, larges ou tombantes. Volume, arc de Cupidon et rapport mesurés.",
  },
  "face-symmetry-test": {
    name: "Test de symétrie du visage",
    short: "Évaluez la symétrie de votre visage.",
    h1: "Test de symétrie du visage",
    intro: "Importez une photo prise bien de face : nous trouvons la ligne médiane de votre visage, reflétons de part et d'autre 37 paires de points correspondants (coins des yeux, points des sourcils, narines, commissures, points de la mâchoire) et mesurons à quel point les deux côtés se correspondent. Vous obtenez un score de symétrie global et un score pour chaque trait.",
    body: `## Comment nous mesurons la symétrie du visage

1. Nous traçons une ligne passant par 21 points au centre de votre visage (front, arête du nez, pointe du nez, lèvres, menton).
2. Pour chaque paire de points correspondants, nous reflétons le point du côté droit par rapport à cette ligne et mesurons à quelle distance il tombe de son partenaire du côté gauche.
3. Les distances sont exprimées en unités de votre distance interpupillaire : le score ne dépend donc pas de la taille de la photo.
4. Plus la distance moyenne est faible, plus le score est élevé.

## Qu'est-ce qu'un score de symétrie normal ?

Aucun visage n'est parfaitement symétrique. Sur des photos prises bien de face, la plupart des visages obtiennent entre 80 et 92. Le score chute nettement si votre tête est tournée, même légèrement : un score faible signifie donc généralement que la photo a été prise de biais. Réessayez en faisant bien face à la caméra.

## La symétrie est-elle attirante ?

Des études ont trouvé un lien modeste entre la symétrie et l'attractivité perçue, mais ce n'est qu'un facteur parmi beaucoup d'autres, et de petites asymétries donnent au visage un air naturel. Essayez notre [test d'attractivité](/fr/attractiveness-test/) pour un score plus large, juste pour le plaisir.

## Comment prendre la bonne photo

- **Placez-vous bien face à l'objectif.** Tourner la tête rétrécit un côté du visage et fausse tous les rapports.
- **Gardez le menton droit.** Relever le menton fait paraître le visage plus court ; le baisser fait paraître la mâchoire plus étroite.
- **Dégagez vos cheveux en arrière** pour que la racine des cheveux, le front et la mâchoire soient visibles.
- **Utilisez une lumière uniforme, de face.** La lumière d'une fenêtre est idéale. Évitez les ombres latérales marquées.
- **Expression neutre, bouche fermée.** Sourire élargit les joues et modifie la mâchoire.
- **Tenez l'appareil à hauteur des yeux, à environ une longueur de bras.** Les selfies pris de près déforment le visage (le nez paraît plus gros et le visage plus étroit).

## Votre photo reste sur votre appareil

L'analyse s'effectue entièrement dans votre navigateur grâce à un modèle facial qui tourne en local. Votre photo n'est jamais envoyée, stockée ni vue par qui que ce soit, et rien n'est conservé lorsque vous fermez la page. Consultez notre [politique de confidentialité](/privacy/) et [le fonctionnement de notre détecteur](/how-it-works/).`,
    faqs: [
      { q: "Existe-t-il un visage parfaitement symétrique ?", a: "Non. Chaque visage présente de petites différences entre ses côtés gauche et droit." },
      { q: "Pourquoi mon score de symétrie est-il faible ?", a: "Généralement parce que votre tête était tournée ou inclinée. Faites bien face à la caméra avec une expression neutre." },
    ],
    title: "Test de symétrie du visage : gratuit par photo",
    description: "Testez la symétrie de votre visage par photo : 37 paires de repères reflétées pour noter yeux, sourcils, nez, bouche, joues et mâchoire.",
  },
  "golden-ratio-face": {
    name: "Calculateur du nombre d'or du visage",
    short: "Comparez vos proportions à 1,618.",
    h1: "Calculateur du nombre d'or du visage",
    intro: "On affirme souvent que le nombre d'or, environ 1,618, décrit les proportions idéales du visage. Importez une photo : nous mesurons sept rapports classiques (longueur du visage sur largeur, largeur de la bouche sur largeur du nez, tiers du visage, règle des cinquièmes et plus) et vous montrons à quel point chacun est proche de son idéal.",
    body: `## Les rapports que nous mesurons

| Rapport | Idéal |
|---|---|
| Longueur du visage ÷ largeur du visage | 1.618 |
| Largeur de la bouche ÷ largeur du nez | 1.618 |
| Tiers moyen ÷ tiers inférieur | 1 |
| Tiers supérieur ÷ tiers moyen | 1 |
| Lèvres-menton ÷ nez-lèvres | 2 |
| Écartement des yeux ÷ largeur de l'œil | 1 |
| Largeur du visage ÷ largeur de l'œil | 5 |

## Un mot sur le nombre d'or

Le nombre d'or est une idée populaire, mais les preuves scientifiques qu'il définit la beauté sont faibles. Dans les études sur l'attractivité, les visages moyens obtiennent souvent de meilleurs scores que les visages « d'or », et les idéaux varient selon les cultures. Considérez votre score comme un regard ludique sur vos proportions, pas comme un verdict.

Le modèle facial ne voit pas la racine de vos cheveux : le tiers supérieur est donc estimé.

## Comment prendre la bonne photo

- **Placez-vous bien face à l'objectif.** Tourner la tête rétrécit un côté du visage et fausse tous les rapports.
- **Gardez le menton droit.** Relever le menton fait paraître le visage plus court ; le baisser fait paraître la mâchoire plus étroite.
- **Dégagez vos cheveux en arrière** pour que la racine des cheveux, le front et la mâchoire soient visibles.
- **Utilisez une lumière uniforme, de face.** La lumière d'une fenêtre est idéale. Évitez les ombres latérales marquées.
- **Expression neutre, bouche fermée.** Sourire élargit les joues et modifie la mâchoire.
- **Tenez l'appareil à hauteur des yeux, à environ une longueur de bras.** Les selfies pris de près déforment le visage (le nez paraît plus gros et le visage plus étroit).

## Votre photo reste sur votre appareil

L'analyse s'effectue entièrement dans votre navigateur grâce à un modèle facial qui tourne en local. Votre photo n'est jamais envoyée, stockée ni vue par qui que ce soit, et rien n'est conservé lorsque vous fermez la page. Consultez notre [politique de confidentialité](/privacy/) et [le fonctionnement de notre détecteur](/how-it-works/).`,
    faqs: [
      { q: "Qu'est-ce que le nombre d'or du visage ?", a: "L'idée que les proportions idéales du visage suivent le rapport 1,618, par exemple un visage 1,618× plus long que large." },
      { q: "Qu'est-ce qu'un bon score de nombre d'or ?", a: "La plupart des gens obtiennent entre 55 et 80. C'est pour s'amuser : aucune preuve solide n'indique que le nombre d'or définit la beauté." },
    ],
    title: "Nombre d'or du visage : calculateur gratuit",
    description: "Votre visage suit-il le nombre d'or (1,618) ? Notre calculateur gratuit mesure et note 7 rapports du visage à partir d'une photo.",
  },
  "attractiveness-test": {
    name: "Test d'attractivité",
    short: "Une note du visage sur 10, juste pour le plaisir.",
    h1: "Test d'attractivité",
    intro: "Ceci est une note du visage juste pour le plaisir. Nous combinons cinq éléments mesurables que la recherche et la culture populaire associent à l'attractivité (symétrie, proportions du nombre d'or, équilibre des tiers du visage, inclinaison canthale et définition de la mâchoire) en un score sur 10. Il ne peut pas mesurer le charme, le style, l'expression ni ce qui rend réellement les gens attirants les uns pour les autres.",
    body: `## Ce qui compose votre score

| Facteur | Poids | Ce qu'il mesure |
|---|---|---|
| Symétrie | 30% | À quel point vos côtés gauche et droit se correspondent |
| Nombre d'or | 25% | Sept proportions classiques comparées à leurs idéaux |
| Tiers du visage | 15% | Équilibre entre le milieu et le bas du visage |
| Inclinaison canthale | 15% | L'angle des coins de vos yeux |
| Définition de la mâchoire | 15% | Angle de la mâchoire, largeur et menton |

## À lire, s'il vous plaît

L'attractivité est personnelle, culturelle et dépend surtout de choses qu'une photo ne peut pas saisir. Un score issu d'un outil de mesure du visage ne dit rien de votre valeur. L'éclairage, l'angle de prise de vue et la déformation de l'objectif peuvent à eux seuls faire varier votre score de plus d'un point. Amusez-vous, et ne le prenez pas au sérieux.

## Comment prendre la bonne photo

- **Placez-vous bien face à l'objectif.** Tourner la tête rétrécit un côté du visage et fausse tous les rapports.
- **Gardez le menton droit.** Relever le menton fait paraître le visage plus court ; le baisser fait paraître la mâchoire plus étroite.
- **Dégagez vos cheveux en arrière** pour que la racine des cheveux, le front et la mâchoire soient visibles.
- **Utilisez une lumière uniforme, de face.** La lumière d'une fenêtre est idéale. Évitez les ombres latérales marquées.
- **Expression neutre, bouche fermée.** Sourire élargit les joues et modifie la mâchoire.
- **Tenez l'appareil à hauteur des yeux, à environ une longueur de bras.** Les selfies pris de près déforment le visage (le nez paraît plus gros et le visage plus étroit).

## Votre photo reste sur votre appareil

L'analyse s'effectue entièrement dans votre navigateur grâce à un modèle facial qui tourne en local. Votre photo n'est jamais envoyée, stockée ni vue par qui que ce soit, et rien n'est conservé lorsque vous fermez la page. Consultez notre [politique de confidentialité](/privacy/) et [le fonctionnement de notre détecteur](/how-it-works/).`,
    faqs: [
      { q: "Le test d'attractivité est-il fiable ?", a: "Aucun outil de notation du visage ne peut mesurer l'attractivité. Celui-ci mesure quelques proportions qui y sont associées, pour le plaisir." },
      { q: "Pourquoi mon score a-t-il changé d'une photo à l'autre ?", a: "L'angle de la tête, l'éclairage, l'expression et la déformation de l'objectif modifient tous les mesures." },
    ],
    title: "Test d'attractivité : notez mon visage (IA)",
    description: "Note du visage par IA, gratuite et pour le plaisir : symétrie, nombre d'or, tiers du visage, inclinaison canthale et mâchoire.",
  },
  "how-old-do-i-look": {
    name: "Quel âge est-ce que je fais ?",
    short: "Estimation de l'âge par IA à partir de votre photo.",
    h1: "Quel âge est-ce que je fais ?",
    intro: "Importez un selfie ou utilisez votre caméra : un modèle d'IA qui tourne en local estime l'âge que vous paraissez. C'est juste pour le plaisir : ces modèles se trompent généralement de plusieurs années, et l'éclairage, le maquillage, l'expression et la qualité de l'image influencent tous l'estimation.",
    body: `## Comment fonctionne l'estimation de l'âge

Nous utilisons un modèle open source d'estimation de l'âge (GEAR, via la bibliothèque Human) qui tourne dans votre navigateur. Il a été entraîné sur de grands ensembles de visages étiquetés avec leur âge et prédit l'âge auquel un visage ressemble le plus. Votre photo n'est jamais envoyée.

## Pourquoi le résultat peut être faux

- **Éclairage :** une lumière dure fait ressortir la texture de la peau et peut ajouter des années ; une lumière douce en enlève.
- **Expression :** sourire crée des rides que certains modèles interprètent comme de l'âge.
- **Qualité de l'image :** les photos floues ou très filtrées perturbent le modèle.
- **Biais :** les modèles d'âge sont moins précis pour les groupes sous-représentés dans leurs données d'entraînement.

Essayez plusieurs photos et regardez la fourchette plutôt qu'un seul chiffre.

## Votre photo reste sur votre appareil

L'analyse s'effectue entièrement dans votre navigateur grâce à un modèle facial qui tourne en local. Votre photo n'est jamais envoyée, stockée ni vue par qui que ce soit, et rien n'est conservé lorsque vous fermez la page. Consultez notre [politique de confidentialité](/privacy/) et [le fonctionnement de notre détecteur](/how-it-works/).`,
    faqs: [
      { q: "Quelle est la précision de l'estimation de l'âge ?", a: "Comptez une marge d'environ 5 à 8 ans dans de bonnes conditions. C'est pour le plaisir." },
      { q: "Conservez-vous ma photo ?", a: "Non. Le modèle tourne dans votre navigateur et rien n'est envoyé." },
    ],
    title: "Quel âge je fais ? Estimation d'âge IA gratuite",
    description: "Importez une photo et notre IA devine l'âge que vous paraissez. Fonctionne en privé dans votre navigateur, avec un modèle local.",
  },
  "head-shape-detector": {
    name: "Détecteur de forme de la tête",
    short: "Ronde, ovale, longue, arrière plat et plus.",
    h1: "Détecteur de forme de la tête",
    intro: "La forme de votre tête correspond au contour de tout votre crâne, qu'une photo de face ne peut pas entièrement montrer. Répondez à cinq questions à l'aide d'un miroir et d'une photo de profil de votre tête : nous vous indiquerons la forme de votre tête et les coupes de cheveux qui lui conviennent le mieux.",
    body: `## Pourquoi un questionnaire plutôt qu'une photo ?

L'arrière et le sommet de la tête comptent le plus pour la forme de la tête, et ils sont cachés par les cheveux et invisibles sur une photo de face. Une vérification guidée avec une photo de profil est plus fiable.

## Forme de la tête et coupes de cheveux

- **Arrière de la tête plat :** gardez de la longueur au sommet, évitez les dégradés à blanc à l'arrière.
- **Tête longue :** évitez le volume sur le dessus.
- **Tête ronde ou ovale :** les coupes à la tondeuse et les coupes courtes fonctionnent bien.

Découvrez toutes les [formes de tête](/head-shapes/).`,
    faqs: [
      { q: "Comment connaître la forme de ma tête ?", a: "Plaquez vos cheveux et prenez une photo de profil. Regardez si l'arrière de votre tête s'arrondit vers l'extérieur ou tombe droit, et comparez la largeur à la longueur." },
    ],
    title: "Forme de la tête : quelle est la mienne ? (Test)",
    description: "Trouvez la forme de votre tête (ronde, ovale, longue, carrée, arrière plat ou en œuf) et les coupes de cheveux qui lui vont.",
  },
  "jawline-analyzer": {
    name: "Analyseur de mâchoire",
    short: "Mesurez l'angle, la largeur de la mâchoire et le menton.",
    h1: "Analyseur de mâchoire",
    intro: "Importez une photo prise bien de face : nous mesurons l'angle de vos angles mandibulaires, la largeur de votre mâchoire par rapport à vos pommettes, ainsi que la largeur et la longueur de votre menton. Vous obtenez votre type de mâchoire et un score de définition.",
    body: `## Ce que mesure l'analyseur de mâchoire

- **Angle de la mâchoire :** l'angle formé à l'angle mandibulaire entre la joue et le menton. Plus l'angle est petit, plus la mâchoire paraît marquée.
- **Largeur de la mâchoire :** d'un angle mandibulaire à l'autre, rapportée à la largeur des pommettes.
- **Menton :** largeur au niveau du menton et sa longueur sous la lèvre inférieure.

## Ce qui change l'apparence de votre mâchoire

La masse grasse, la posture, la forme de la barbe et l'éclairage modifient tous la définition apparente de votre mâchoire. Baisser le menton la fait paraître plus douce ; l'angle de la tête compte beaucoup.

Découvrez tous les [types de mâchoire](/jawline-shapes/).

## Comment prendre la bonne photo

- **Placez-vous bien face à l'objectif.** Tourner la tête rétrécit un côté du visage et fausse tous les rapports.
- **Gardez le menton droit.** Relever le menton fait paraître le visage plus court ; le baisser fait paraître la mâchoire plus étroite.
- **Dégagez vos cheveux en arrière** pour que la racine des cheveux, le front et la mâchoire soient visibles.
- **Utilisez une lumière uniforme, de face.** La lumière d'une fenêtre est idéale. Évitez les ombres latérales marquées.
- **Expression neutre, bouche fermée.** Sourire élargit les joues et modifie la mâchoire.
- **Tenez l'appareil à hauteur des yeux, à environ une longueur de bras.** Les selfies pris de près déforment le visage (le nez paraît plus gros et le visage plus étroit).

## Votre photo reste sur votre appareil

L'analyse s'effectue entièrement dans votre navigateur grâce à un modèle facial qui tourne en local. Votre photo n'est jamais envoyée, stockée ni vue par qui que ce soit, et rien n'est conservé lorsque vous fermez la page. Consultez notre [politique de confidentialité](/privacy/) et [le fonctionnement de notre détecteur](/how-it-works/).`,
    faqs: [
      { q: "Qu'est-ce qu'un bon angle de mâchoire ?", a: "Environ 120–130° à l'angle mandibulaire donne une mâchoire définie ; des angles plus grands paraissent plus doux." },
    ],
    title: "Analyseur de mâchoire : notez votre mâchoire",
    description: "Mesurez l'angle et la largeur de votre mâchoire et votre menton par photo. Trouvez votre type de mâchoire et un score de définition.",
  },
  "skin-undertone-test": {
    name: "Test de sous-ton de peau",
    short: "Chaud, froid ou neutre ? Questionnaire + photo.",
    h1: "Test de sous-ton de peau",
    intro: "Votre sous-ton est la couleur subtile sous la surface de votre peau : chaud (jaune, pêche, doré), froid (rose, rouge, bleuté) ou neutre (un mélange). Répondez à six questions, et ajoutez éventuellement une photo pour une lecture de la couleur de votre peau, afin de découvrir le vôtre.",
    body: `## Les tests classiques du sous-ton

- **Test des veines :** observez les veines de l'intérieur de votre poignet à la lumière du jour. Verdâtres, elles suggèrent un sous-ton chaud ; bleues ou violettes, un sous-ton froid ; difficiles à déterminer, un sous-ton neutre.
- **Test des bijoux :** si l'or vous met davantage en valeur, vous êtes probablement chaud ; si c'est l'argent, froid.
- **Test du blanc :** si le blanc éclatant vous fait paraître terne et que le crème vous va mieux, vous êtes probablement chaud.
- **Test du soleil :** si vous bronzez facilement, vous êtes plus probablement chaud ; si vous brûlez, froid.

## Pourquoi la vérification par photo n'est qu'un indice

La balance des blancs de l'appareil et l'éclairage de la pièce modifient beaucoup la couleur de la peau sur les photos. Nous échantillonnons vos joues et votre front et lisons la teinte, mais nous lui accordons moins de poids qu'à vos réponses au questionnaire. Prenez la photo à la lumière du jour, près d'une fenêtre, pour une meilleure lecture.

## Sous-ton ou carnation ?

La carnation correspond au degré de clarté ou de profondeur de votre peau. Le sous-ton est la teinte en dessous. Deux personnes ayant la même carnation peuvent avoir des sous-tons différents. Ensuite, trouvez votre [palette de couleurs saisonnière](/fr/color-analysis/) ou votre [teinte de fond de teint](/fr/foundation-shade-finder/).`,
    faqs: [
      { q: "Comment savoir si j'ai un sous-ton chaud ou froid ?", a: "Observez les veines de votre poignet à la lumière du jour, comparez des bijoux en or et en argent, et notez si vous bronzez ou brûlez. Notre questionnaire combine ces critères." },
      { q: "Qu'est-ce qu'un sous-ton olive ?", a: "L'olive est un sous-ton neutre à chaud avec un reflet verdâtre, courant chez les peaux méditerranéennes, moyen-orientales, sud-asiatiques et latino-américaines." },
    ],
    title: "Test de sous-ton de peau : chaud, froid, neutre ?",
    description: "Trouvez votre sous-ton de peau (chaud, froid, neutre ou olive) avec un questionnaire et une photo facultative. Couleurs qui vous vont.",
  },
  "color-analysis": {
    name: "Analyse colorimétrique saisonnière",
    short: "Printemps, Été, Automne ou Hiver ?",
    h1: "Analyse colorimétrique saisonnière",
    intro: "L'analyse colorimétrique saisonnière classe vos couleurs naturelles dans l'une des quatre saisons (Printemps, Été, Automne, Hiver) selon trois critères : le sous-ton (chaud ou froid), la profondeur (clair ou foncé) et le contraste entre vos cheveux, votre peau et vos yeux. Répondez à huit questions pour trouver votre saison et votre sous-saison, avec une palette de couleurs à porter.",
    body: `## Les quatre saisons

| Saison | Sous-ton | Profondeur | Contraste | Meilleures couleurs |
|---|---|---|---|---|
| Printemps | Chaud | Clair à moyen | Moyen à élevé | Couleurs vives, claires et chaudes : corail, pêche, vert chaud |
| Été | Froid | Clair à moyen | Faible à moyen | Douces, froides, sourdes : vieux rose, lavande, bleu doux |
| Automne | Chaud | Moyen à foncé | Faible à moyen | Riches, chaudes, sourdes : rouille, olive, moutarde |
| Hiver | Froid | Foncé ou contraste élevé | Élevé | Claires, froides, saturées : rouge franc, émeraude, noir, blanc |

## Les sous-saisons

Chaque saison comprend trois sous-saisons (par exemple Printemps clair, Printemps chaud et Printemps lumineux) selon la caractéristique dominante. Cela donne le système populaire à 12 saisons.

## Comment obtenir le résultat le plus précis

Répondez en vous basant sur votre couleur de cheveux naturelle, sans maquillage, à la lumière du jour. Une séance de drapage professionnelle en personne reste la référence ; ce test vous en rapproche.`,
    faqs: [
      { q: "Quelle est ma saison en colorimétrie ?", a: "Faites le test : il évalue votre sous-ton, votre profondeur et votre contraste et les associe au Printemps, à l'Été, à l'Automne ou à l'Hiver, avec une sous-saison." },
      { q: "Ma saison peut-elle changer ?", a: "Vos couleurs naturelles sont stables, mais des cheveux colorés ou un bronzage peuvent changer temporairement les couleurs qui vous vont le mieux." },
    ],
    title: "Test colorimétrie : quelle saison suis-je ?",
    description: "Trouvez votre palette saisonnière (Printemps, Été, Automne, Hiver et sous-saison) avec un test de colorimétrie gratuit.",
  },
  "foundation-shade-finder": {
    name: "Trouver sa teinte de fond de teint",
    short: "Trouvez votre code de teinte : profondeur + sous-ton.",
    h1: "Trouver sa teinte de fond de teint",
    intro: "Votre teinte de fond de teint dépend de deux choses : la profondeur (le degré de clarté ou de foncé de votre peau) et le sous-ton (chaud, froid, neutre ou olive). Répondez à cinq questions et nous vous indiquerons la plage de profondeur et le code de sous-ton à rechercher, quelle que soit la marque.",
    body: `## Comment fonctionnent les codes de teinte de fond de teint

La plupart des marques désignent leurs teintes par un chiffre pour la profondeur et une lettre pour le sous-ton :

- **W / Y / G** = chaud (jaune ou doré)
- **C / P / R** = froid (rose ou rouge)
- **N** = neutre
- **O** = olive

Les chiffres les plus bas sont généralement les plus clairs. Un « 120 N » est un clair neutre ; un « 450 W » est un foncé chaud.

## Comment tester une teinte

Appliquez deux ou trois teintes sur votre mâchoire, pas sur votre main, et vérifiez-les à la lumière du jour. La bonne teinte se fond dans votre peau et s'accorde avec votre cou.`,
    faqs: [
      { q: "Comment trouver ma teinte de fond de teint ?", a: "Déterminez votre profondeur et votre sous-ton, puis testez des teintes sur votre mâchoire à la lumière du jour." },
      { q: "Dois-je assortir mon fond de teint à mon visage ou à mon cou ?", a: "Assortissez-le à votre mâchoire pour que le visage et le cou se fondent." },
    ],
    title: "Teinte de fond de teint : trouvez la vôtre (test)",
    description: "Trouvez votre teinte de fond de teint selon profondeur et sous-ton. Lisez les codes (W, C, N, O) et testez à la lumière du jour.",
  },
  "kibbe-body-type-test": {
    name: "Test de morphologie Kibbe",
    short: "Trouvez votre type Kibbe en 12 questions.",
    h1: "Test de morphologie Kibbe",
    intro: "Le système Kibbe décrit votre corps et votre visage comme un équilibre entre yang (long, net, anguleux) et yin (doux, arrondi, petit). Répondez à 12 questions sur votre taille, votre ossature, votre corps et vos traits du visage, et nous évaluerons votre yin et votre yang pour vous suggérer votre type Kibbe.",
    body: `## Comment fonctionne le test Kibbe

Chaque question propose des réponses allant de très yang à très yin. Vos réponses construisent deux scores :

- **Équilibre yin–yang :** net et long ou doux et arrondi.
- **Largeur et robustesse :** ce qui distingue les Naturals (larges, robustes) des Dramatics (étroits, nets), et les Gamines (compacts, mixtes) des Romantics (doux, en courbes).

La combinaison désigne l'un des 13 types. Vos trois premiers sont affichés, car beaucoup de personnes se situent entre deux types.

## Conseils pour des réponses précises

Les types Kibbe reposent sur l'ossature et les traits naturels, pas sur le poids, la forme physique ou le style. Répondez pour votre silhouette telle qu'elle est naturellement. L'avis d'un ami peut aider, car il est difficile de se juger soi-même.

Découvrez les [13 types de morphologie Kibbe](/kibbe-body-types/).`,
    faqs: [
      { q: "Quel est mon type de morphologie Kibbe ?", a: "Faites le test : il évalue votre équilibre yin-yang et vous suggère votre type." },
      { q: "Kibbe, est-ce la même chose que la silhouette ?", a: "Non. Kibbe considère l'ossature et les traits dans leur ensemble, pas les proportions hanches-taille." },
    ],
    title: "Test Kibbe : trouvez votre morphologie Kibbe",
    description: "Test Kibbe gratuit : 12 questions sur votre ossature, votre corps et votre visage pour trouver lequel des 13 types Kibbe est le vôtre.",
  },
  "canthal-tilt-calculator": {
    name: "Calculateur d'inclinaison canthale",
    short: "Mesurez l'inclinaison de vos yeux en degrés.",
    h1: "Calculateur d'inclinaison canthale",
    intro: "L'inclinaison canthale est l'angle entre les coins interne et externe de votre œil. Importez une photo prise bien de face : après avoir redressé votre tête, nous la mesurons en degrés pour chaque œil et vous indiquons si votre inclinaison est positive, neutre ou négative.",
    body: `## Qu'est-ce que l'inclinaison canthale ?

Tracez une ligne du coin interne de votre œil (canthus médial) jusqu'au coin externe (canthus latéral). L'angle de cette ligne par rapport à l'horizontale est votre inclinaison canthale.

- **Positive (au-dessus d'environ 4°) :** le coin externe est plus haut. Les yeux paraissent relevés ou en « œil de chat ».
- **Neutre (0–4°) :** les coins sont à peu près au même niveau.
- **Négative (en dessous de 0°) :** le coin externe est plus bas. Les yeux paraissent tombants.

La moyenne sur nos photos de calibrage était d'environ +4°.

## Pourquoi nous redressons d'abord votre tête

Une inclinaison de la tête de seulement 3° modifie la mesure de 3°. Nous faisons pivoter vos repères pour que vos pupilles soient à l'horizontale avant de mesurer, mais une photo prise bien de face reste préférable.

## Votre photo reste sur votre appareil

L'analyse s'effectue entièrement dans votre navigateur grâce à un modèle facial qui tourne en local. Votre photo n'est jamais envoyée, stockée ni vue par qui que ce soit, et rien n'est conservé lorsque vous fermez la page. Consultez notre [politique de confidentialité](/privacy/) et [le fonctionnement de notre détecteur](/how-it-works/).`,
    faqs: [
      { q: "Qu'est-ce qu'une inclinaison canthale normale ?", a: "La plupart des gens ont une inclinaison légèrement positive, d'environ 2–6°." },
      { q: "L'inclinaison canthale peut-elle changer ?", a: "Elle change légèrement avec l'âge, à mesure que la peau et les tissus autour des yeux se relâchent." },
    ],
    title: "Inclinaison canthale : positive ou négative ?",
    description: "Mesurez votre inclinaison canthale en degrés à partir d'une photo : positive, neutre ou négative, pour chaque œil séparément.",
  },
  "facial-proportions-calculator": {
    name: "Calculateur de proportions du visage",
    short: "Tiers du visage et règle des cinquièmes.",
    h1: "Calculateur de proportions du visage",
    intro: "Les artistes et les chirurgiens décrivent le visage à l'aide de deux règles simples. La **règle des tiers** : racine des cheveux-sourcils, sourcils-nez et nez-menton sont à peu près égaux. La **règle des cinquièmes** : le visage mesure environ cinq largeurs d'œil. Importez une photo pour voir comment votre visage se situe selon ces deux règles.",
    body: `## Les tiers du visage

| Tiers | De | À |
|---|---|---|
| Supérieur | Racine des cheveux | Sourcils (glabelle) |
| Moyen | Sourcils | Base du nez |
| Inférieur | Base du nez | Menton |

Dans le tiers inférieur, la distance entre le nez et les lèvres est idéalement la moitié de la distance entre les lèvres et le menton.

## Les cinquièmes du visage

Divisez le visage verticalement en cinq parties égales : chaque œil occupe un cinquième, l'espace entre les yeux un cinquième, et l'espace entre chaque coin externe de l'œil et le bord du visage un cinquième.

Le modèle ne voit pas la racine de vos cheveux : votre tiers supérieur est donc estimé.

## Votre photo reste sur votre appareil

L'analyse s'effectue entièrement dans votre navigateur grâce à un modèle facial qui tourne en local. Votre photo n'est jamais envoyée, stockée ni vue par qui que ce soit, et rien n'est conservé lorsque vous fermez la page. Consultez notre [politique de confidentialité](/privacy/) et [le fonctionnement de notre détecteur](/how-it-works/).`,
    faqs: [
      { q: "Quelles sont les proportions idéales du visage ?", a: "Des tiers du visage égaux et un visage d'environ cinq largeurs d'œil sont des repères artistiques classiques. Les vrais visages varient beaucoup." },
    ],
    title: "Proportions du visage : tiers et cinquièmes",
    description: "Mesurez les tiers et cinquièmes de votre visage par photo : haut, milieu et bas du visage, et vos yeux selon la règle des cinquièmes.",
  },
  "face-comparison": {
    name: "Comparaison de visages",
    short: "À quel point deux visages se ressemblent-ils ?",
    h1: "Comparaison de visages",
    intro: "Importez deux photos : nous comparons la géométrie des deux visages (la position de plus de 70 repères clés après suppression des différences de taille et de rotation) et vous donnons un score de similarité, ainsi que les deux formes de visage côte à côte.",
    body: `## Comment fonctionne la comparaison de visages

Nous prenons les repères correspondants des deux visages, supprimons les différences de position, de taille et de rotation (une technique appelée alignement de Procuste), puis mesurons l'écart entre les formes restantes. Plus les formes sont proches, plus la similarité est élevée.

## Ce que c'est, et ce que ce n'est pas

Cet outil compare la **forme et les proportions** du visage, pas l'identité. Ce n'est pas de la reconnaissance faciale et il ne peut pas dire si deux photos montrent la même personne. C'est une façon ludique de comparer les ressemblances familiales ou de voir si un ami et vous partagez la même forme de visage.

## Votre photo reste sur votre appareil

L'analyse s'effectue entièrement dans votre navigateur grâce à un modèle facial qui tourne en local. Votre photo n'est jamais envoyée, stockée ni vue par qui que ce soit, et rien n'est conservé lorsque vous fermez la page. Consultez notre [politique de confidentialité](/privacy/) et [le fonctionnement de notre détecteur](/how-it-works/).`,
    faqs: [
      { q: "Est-ce de la reconnaissance faciale ?", a: "Non. L'outil compare uniquement la géométrie et les proportions et ne peut pas identifier les personnes." },
    ],
    title: "Comparaison de visages : ressemblance (gratuit)",
    description: "Comparez deux visages et obtenez un score de similarité basé sur leur géométrie. Famille, amis : même forme de visage ? Gratuit.",
  },
};
