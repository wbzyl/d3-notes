# Notatki do slajdów z „D3 Workshop”

Będę korzystał z serwera *serve*:

    npm install -g serve
    cd d3-notes
    serve .


## Resources

* [Stackoverflow](http://stackoverflow.com/questions/tagged/d3.js)
* [Wiki](https://github.com/mbostock/d3/wiki)
* [Google group](https://groups.google.com/group/d3-js)


### D3

* [SVG Shapes](https://github.com/mbostock/d3/wiki/SVG-Shapes)

Demo:

* [flexible transitions](http://mbostock.github.com/d3/talk/20111116/transitions.html)


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
