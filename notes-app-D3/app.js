var input = d3.select("input");
var preview = d3.select(".preview");

d3.select("#new-note")
    .on('submit', function() {
      d3.event.preventDefault();
      var input = d3.select('input');
      d3.select("#notes")
        .append('p')
          .classed('note', true)
          .text(input.property('value'));
      input.property('value', '');
      setPreview("");
    });

    // Removing All Notes
d3.select(".remove").on('click',function(){
  d3.selectAll(".note")
      .remove();
});

    // Random Styling
d3.select(".lucky").on('click', function(){
  d3.selectAll(".note")
      .style("font-size", function(){
    return Math.random()* 40 + "px";
  });
});

    // Preview Notes
input.on("input", function () {
  var val = d3.event.target.value;
  setPreview(val);
});

function setPreview(val) {
  preview
    .classed("hide", val === "")
    .text(val);
}


