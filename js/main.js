// Change the paragraphs to red
//d3.selectAll('p').style('color', 'red');

// Randomly color paragraphs
//d3.selectAll('p').style('color', function(){
  //return "hsl(" + Math.random() * 360 + ", 100%, 50%)";
//});

// alternate shades of grey for even and odd nodes
d3.selectAll("p").style("color", function(d, i) {
  return i % 2 ? "red" : "green";
});

// Change the background to black
d3.select("body").style("background-color", "blue");

// Bind an array of numbers which will use the numbers to compute dynamic font sizes

d3.selectAll('p')
  .data([90, 8, 15])
  .style('font-size', function(d){return d + 'px';});

// Enter and exit selections
// Update…
var p = d3.select("#test").selectAll("p")
    .data(['hifi', 'rifi'])
    .text(String);

// Enter…
p.enter().append("p")
    .text(String);

// Exit…
p.exit().remove();
