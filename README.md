#Intro to D3

###Objectives
- Understand what D3 is
-

###What is D3?

	D3.js is a JavaScript library for manipulating documents based on data. D3 helps you bring data to life using HTML, SVG, and CSS. D3’s emphasis on web standards gives you the full capabilities of modern browsers without tying yourself to a proprietary framework, combining powerful visualization components and a data-driven approach to DOM manipulation.

Create a simple directory

	├── README.md
	├── css
	│   └── style.css
	├── index.html
	└── js
	    └── main.js

Open terminal and do the following

	$ mkdir d3 && mkdir d3/css d3/js && touch d3/README.md d3/index.html d3/css/style.css d3/js/main.js

In `index.html`, add the follow line 

	<script src="http://d3js.org/d3.v3.min.js" charset="utf-8"></script>

Your code should look like this in your `index.html`

	<html>
	  <head>
	    <meta http-equiv="content-type" content="text/html; charset=utf-8" />
	
	    <title>D3</title>
	  </head>
	  <body>
	
	    <!--D3-->
	    <script src="http://d3js.org/d3.v3.min.js" charset="utf-8"></script>
	    <script type="text/javascript" charset="utf-8" src="js/main.js"></script>
	  </body>
	</html>

###Targeting multiple elements

Now, add some paragraphs in your `index.html`

	<p>Hello world</p>
    <p>Y'all are cool</p>
    <p>This is a test</p>

In your `main.js`, write

	d3.selectAll("p").style("color", "red");

###Activity

	Try and make the backgroundColor of the paragraphs blue	

This will essentially get all your paragraphs and make them red. This is equivalent to the following:

	var paragraphs = document.getElementsByTagName("p");
	for (var i = 0; i < paragraphs.length; i++) {
	  var paragraph = paragraphs.item(i);
	  paragraph.style.setProperty("color", "white", null);
	}

###Targeting single elements

	d3.select("body").style("background-color", "black");

###Activity

	Try and make the font-size of the body text 60px

###Using random colors

`HSL` stands for `hue-saturation-lightness`. 

**Hue** is a degree on the color wheel. 0 (or 360) is red, 120 is green, 240 is blue.

**Saturation** is a percentage value; 100% is the full colour.

**Lightness** is also a percentage; 0% is dark (black), 100% is light (white), and 50% is the average.

	// Randomly color paragraphs
	d3.selectAll('p').style('color', function(){
	  return "hsl(" + Math.random() * 360 + ", 100%, 50%)";
	});

###Alternating between nodes

	// alternate red and blue for even and odd nodes
	d3.selectAll("p").style("color", function(d, i) {
	  return i % 2 ? "red" : "blue";
	});

###Dynamically changing font-size

	// Bind an array of numbers which will use the numbers to  compute dynamic font sizes

	d3.selectAll('p')
	  .data([90, 8, 15])
	  .style('font-size', function(d){return d + 'px';});

The array corresponds with the elements. Knowing that 90 is the first item in the array, we know the first paragraph will be 90 pixels. This is known as a **Update** selection when you use the data syntax since it merged your data and DOM together

###Enter and exit

In `index.html`

	<div id="test">
      <p>Hello</p>
      <p>Hello</p>
      <p>Hello</p>      
    </div>

In `main.js`

	var p = d3.select("#test").selectAll("p")
    .data(['hifi', 'rifi', 'wifi'])
    .text(String);

	// Enter…
	p.enter().append("p")
	    .text(String);
	
	// Exit…
	p.exit().remove();

	
   