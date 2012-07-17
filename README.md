# Notatki do slajdów z „D3 Workshop”

* [Mike Bostock](http://bost.ocks.org/mike/), „[D3 Workshop](http://bost.ocks.org/mike/d3/workshop/)” (slajdy)
* [D3 Show Reel](http://bl.ocks.org/1256572)

Będę korzystał z serwera *serve* (NodeJS, NPM):

    npm install -g serve
    cd d3-notes
    serve .

Użyteczne:

* Gabriel Florit, [Live coding in D3](http://gabrielflor.it/blog-water)


## Resources

* [Stackoverflow](http://stackoverflow.com/questions/tagged/d3.js)
* [Wiki](https://github.com/mbostock/d3/wiki)
* [Google group](https://groups.google.com/group/d3-js)
* [W3C SVG](http://www.w3.org/TR/SVG/)
* [W3C SVG Primer](http://www.w3.org/Graphics/SVG/IG/resources/svgprimer.html)
* [SVG Tutorial](http://www.w3schools.com/svg/default.asp)
* [Learn SVG](http://www.learnsvg.com/)
  - [Basics](http://www.learnsvg.com/tutorials/tutorialBasics/)


## SVG

* [Mozilla Developer Network SVG](https://developer.mozilla.org/en/SVG)
  - [SVG Attribute reference](https://developer.mozilla.org/en/SVG/Attribute)
  - [SVG element reference](https://developer.mozilla.org/en/SVG/Element)


## D3

* D3 Home – [Data-Driven Documents](http://mbostock.github.com/d3/)
* [D3 API Reference](https://github.com/mbostock/d3/wiki/API-Reference)
* [D3 SVG Shapes](https://github.com/mbostock/d3/wiki/SVG-Shapes)

Blog:

* [Thinking with Joins](http://bost.ocks.org/mike/join/)
* [Towards Reusable Charts](http://bost.ocks.org/mike/chart/)

Talks:

* [Flexible transitions](http://mbostock.github.com/d3/talk/20111116/transitions.html)


## Misc

* [Cube](http://square.github.com/cube/) –
  system for visualizing time series data, built on MongoDB, Node and D3
* [bl.ocks.org](http://bl.ocks.org/) –
  a simple viewer for code examples hosted on GitHub Gist
  - [Line Trasition](http://bl.ocks.org/1643051);
  zob. też [Path Transitions](http://bost.ocks.org/mike/path/)
* Luke Francl,
  [D3 for Mere Mortals](http://www.recursion.org/d3-for-mere-mortals/)
* Jerome Cukier,
  [D3 scales & color](http://www.jeromecukier.net/blog/2011/08/11/d3-scales-and-color/)


## Uwagi

Zaczynamy od utworzenia elementu *svg* i dodania go do strony:

```javascript
var svg = d3.select("body")
  .append("svg")
    .attr("width", 600)
    .attr("height", 400);
```
Jeśli będziemy potrzebować jakiś danych to definiujemy je teraz:

```javascript
var data = [ {"x": 0, "y": 0} ];  // zawsze tablica
```

Po tych przygotowaniach zaczynamy dodawać różne elementy do strony:

```javascript
svg.selectAll("circle")
    .data(data)
  .enter().append("circle")
    .attr("cx", data.x)
    .attr("cy", data.y)
    .attr("r", 100);
```


## Data is Messy

This doesn’t scratch the surface of the data cleaning problem. For
that, see projects such as Google Refine and Stanford’s Data Wrangler:

* [DataWrangler](http://vis.stanford.edu/wrangler/)–
  an interactive tool for data cleaning and transformation
* [Google Refine](http://code.google.com/p/google-refine/) –
  tool for working with messy data, cleaning it up, transforming it
  from one format into another, extending it with web services, and
  linking it to databases like [Freebase](http://www.freebase.com/)


## An example

Converting from decimal to binary + left padding with zeroes:

```javascript
y = (new Array(6 - Number(5).toString(2).length)).join('0') + Number(5).toString(2)

var fillZeroes = "000000"
input = Number(5).toString(2)
fillZeroes.slice(0, input.length) + input
```

## TL;TR

* [clicking a node in d3 from a button outside the svg](http://stackoverflow.com/questions/11206015/clicking-a-node-in-d3-from-a-button-outside-the-svg/11211391#11211391)
* [Lab and LCh color spaces](http://bl.ocks.org/3014589)
* [Horizon Chart](http://bl.ocks.org/1483226)
* [How To Avoid Equidistant HSV Colors](http://vis4.net/blog/posts/avoid-equidistant-hsv-colors/)
* [Predefined Colors](https://github.com/gka/chroma.js/wiki/Predefined-Colors) –
  [chroma.js](https://github.com/gka/chroma.js)
* [Doing the Line Charts Right](http://vis4.net/blog/posts/doing-the-line-charts-right/)
