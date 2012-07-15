function glow() {
  var width = 64, // default width
      height = 64; // default height

  function my() {
    console.log('d3:', d3);
    console.log('this:', this); // svg

    var defs = this.append("defs");

    var filter = defs.append("filter")
      .attr("id", "drop-shadow")

    filter.append("feGaussianBlur")
      .attr("in", "SourceAlpha")
      .attr("stdDeviation", 2)
      .attr("result", "blur");
    filter.append("feOffset")
      .attr("in", "blur")
      .attr("dx", 4)
      .attr("dy", 4)
      .attr("result", "offsetBlur");

    var feMerge = filter.append("feMerge");

    feMerge.append("feMergeNode")
      .attr("in", "offsetBlur")
    feMerge.append("feMergeNode")
      .attr("in", "SourceGraphic");
  }

  my.width = function(value) {
    if (!arguments.length) return width;
    width = value;
    return my;
  };

  my.height = function(value) {
    if (!arguments.length) return height;
    height = value;
    return my;
  };

  return my;
}
