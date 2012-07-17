function glow() {
  var width = 64, // default width
      height = 64; // default height

  var stdDev = 2,
      colorMatrix = "0 0 0 1  0  0 0 0 0  0  0 0 0 0  0  0 0 0 1  0";

  function my() {

    var defs = this.append("defs");

    var filter = defs.append("filter")
        .attr("id", "glow")
      .call(function() {
        this.append("feColorMatrix")
            .attr("type", "matrix")
            .attr("values", colorMatrix);
        this.append("feGaussianBlur")
             // .attr("in", "SourceGraphics")
             .attr("stdDeviation", stdDev)
            .attr("result", "coloredBlur");
      });

    // filter.append("feColorMatrix")
    //     .attr("type", "matrix")
    //     .attr("values", colorMatrix);

    // filter.append("feGaussianBlur")
    //      // .attr("in", "SourceGraphics")
    //     .attr("stdDeviation", stdDev)
    //     .attr("result", "coloredBlur");

    filter.append("feMerge")
      .call(function() {
        this.append("feMergeNode")
            .attr("in", "coloredBlur");
        this.append("feMergeNode")
            .attr("in", "SourceGraphic");
      });

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
