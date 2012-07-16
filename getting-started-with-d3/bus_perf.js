function draw(data) {
  "use strict";

  var margin = 50,
    width = 700,
    height = 300;

  var x_extent = d3.extent(data, function(d) { return d.collision_with_injury; });
  var x_scale = d3.scale.linear()
      .range([margin, width-margin])
      .domain(x_extent);

  var y_extent = d3.extent(data, function(d) { return d.dist_between_fail; });
  var y_scale = d3.scale.linear()
      .range([height-margin, margin])  // reverse
      .domain(y_extent);


  var svg = d3.select("body").append("svg")
      .attr("width", width)
      .attr("height", height);

  svg.selectAll("circle")
      .data(data)
    .enter().append("circle")
      .attr("cx", function(d) { return x_scale(d.collision_with_injury); })
      .attr("cy", function(d) { return y_scale(d.dist_between_fail); })
      .attr("r", 5);

  // Adding axes

  var x_axis = d3.svg.axis().scale(x_scale);

  d3.select("svg")
    .append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(0," + (height - margin) + ")")
      .call(x_axis);

}
