# Real portrait photos

Drop photos here named `<shape>-<woman|man>.<jpg|png|webp>`, for example `oval-woman.jpg`, `square-man.png`.
Valid shapes: oval, round, square, oblong, rectangle, heart, diamond, triangle, inverted-triangle, pear.

Then run `npm run images`. Each photo is cropped to 4:5, resized to 640px wide, compressed to WebP in
`public/images/portraits/`, and automatically shown (with alt text) on that face shape's page and in galleries.

Use only photos you have the rights to (your own, licensed stock, or AI-generated images you're allowed to use),
and check them with the detector first so the example really matches the shape.
