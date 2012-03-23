# Notatki do slajdów z „D3 Workshop”

Będę korzystał z serwera *serve*:

    npm install -g serve
    cd d3-notes
    serve .


## Resources

* [Stackoverflow](http://stackoverflow.com/questions/tagged/d3.js)
* [Wiki](https://github.com/mbostock/d3/wiki)
* [Google group](https://groups.google.com/group/d3-js)
* [W3C SVG](http://www.w3.org/TR/SVG/)
* [W3C SVG Primer](http://www.w3.org/Graphics/SVG/IG/resources/svgprimer.html)
* [SVG Tutorial](http://www.w3schools.com/svg/default.asp)
* [Learn SVG](http://www.learnsvg.com/)


## D3

* [Data-Driven Documents](http://mbostock.github.com/d3/) – home
* [API Reference](https://github.com/mbostock/d3/wiki/API-Reference)
* [SVG Shapes](https://github.com/mbostock/d3/wiki/SVG-Shapes)
* [Thinking with Joins](http://bost.ocks.org/mike/join/)
* [Towards Reusable Charts](http://bost.ocks.org/mike/chart/)

Talks:

* [flexible transitions](http://mbostock.github.com/d3/talk/20111116/transitions.html)


## Misc

* [Cube](http://square.github.com/cube/) –
  system for visualizing time series data, built on MongoDB, Node and D3
* [bl.ocks.org](http://bl.ocks.org/) –
  a simple viewer for code examples hosted on GitHub Gist
  - [Line Trasition](http://bl.ocks.org/1643051);
  zob. też [Path Transitions](http://bost.ocks.org/mike/path/)
* [D3 for Mere Mortals](http://www.recursion.org/d3-for-mere-mortals/)


## Uwagi

Zaczynamy od utworzenia elementu *svg* i dodania go do strony:

```javascript
var svg = d3.select("body").append("svg");
var data = [ {"x": 0, "y": 0} ];  // zawsze tablica
```

Następnie dodajemy różne rzeczy:

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
