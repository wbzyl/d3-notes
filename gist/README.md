# SVG Essentials – Filters

This is a recreation (for the purpose of tinkering with an
implementation in *d3.js*) of the example from the book
[SVG Essentials](http://commons.oreilly.com/wiki/index.php/SVG_Essentials/Filters#Creating_a_Glowing_Shadow)
by J. David Eisenberg.

The `<feColorMatrix>` element allows to change color values in a following way.

```html
<filter id="glow">
  <feColorMatrix type="matrix" values=
     "0 0 0 red   0
      0 0 0 green 0
      0 0 0 blue  0
      0 0 0 1     0"/>
  <feGaussianBlur stdDeviation="number" result="coloredBlur"/>
  <feMerge>
    <feMergeNode in="coloredBlur"/>
    <feMergeNode in="SourceGraphic"/>
  </feMerge>
</filter>
```
