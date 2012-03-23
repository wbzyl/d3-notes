
    npm install -g serve
    serve ~/temp/d3-notes


## Resources

http://stackoverflow.com/questions/tagged/d3.js
https://github.com/mbostock/d3/wiki
https://groups.google.com/group/d3-js


svg.selectAll("circle")
    .data(data)
  .enter().append("circle")
    .attr("cx", x)
    .attr("cy", y)
    .attr("r", 2.5);

Data is Messy

This doesn’t scratch the surface of the data cleaning problem. For that, see projects such as Google Refine and Stanford’s Data Wrangler.
