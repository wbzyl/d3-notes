/*global d3:true */

function draw(data) {
  "use strict";

  var container_dimensions = {width: 900, height: 400},
    margins = {top: 10, right: 20, bottom: 30, left: 60},
    chart_dimensions = {
      width: container_dimensions.width - margins.left - margins.right,
      height: container_dimensions.height - margins.top - margins.bottom
    };

  var chart = d3.select("#timeseries")
    .append("svg")
      .attr("width", container_dimensions.width)
      .attr("height", container_dimensions.height)
    .append("g")
      .attr("transform", "translate(" + margins.left + "," + margins.top + ")")
      .attr("id","chart");

  // axes

  var time_scale = d3.time.scale()
    .range([0, chart_dimensions.width])
    .domain([new Date(2008, 0, 1), new Date(2011, 3, 1)]);

  var percent_scale = d3.scale.linear()
    .range([chart_dimensions.height, 0])
    .domain([65, 90]);

  var time_axis = d3.svg.axis().scale(time_scale);
  var count_axis = d3.svg.axis().scale(percent_scale).orient("left");

  chart.append("g")
    .attr("class", "x axis")
    .attr("transform", "translate(0," + chart_dimensions.height + ")")
    .call(time_axis);

  chart.append("g")
    .attr("class", "y axis")
    .call(count_axis);

  d3.select(".y.axis")
    .append("text")
      .text("percent on time")
      .attr("transform", "rotate (-90, -40, 0) translate(-260)")

  // line names (keys)

  var key_items = d3.select("#key")
    .selectAll("div")
      .data(data)
    .enter().append("div")
    .attr("class", "key_line");
      // .call(function() {
      //    this.append("div")
      //        .attr("class", function(d) { return "key_square " + d.line_id; })
      //        //.attr("class", function(d) { return "key_square_" + d.line_id; })
      //        //.attr("class", "key_square")
      //    this.append("div")
      //        // .attr("class", "key_label")
      //        .text(function(d) { return d.line_name; });
      // });

   key_items.append("div")
      .attr("class", function(d) { return "key_square " + d.line_id; });
   key_items.append("div")
       .attr("class", "key_label")
       .text(function(d) { return d.line_name; });

}
