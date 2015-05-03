#Intro to D3

###Objectives
- Understand what D3 is
- Be able to use basic selectors in D3
- Be able to dynamically change styles, add transitions, and connect data and DOM
- Create a bar graph using D3


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

	d3.select("body").style("background-color", "blue");

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

###Transitions

Let's make the page black using a transition

	d3.select("body").transition().style("background-color", "black");

Add a duration

	d3.select("body").transition().duration(2500).style("background-color", "black");

###Putting it together

Let's create a bar graph!

In `index.html`


    <div id="chart">
      <div class="bar"></div>
      <div class="bar"></div>
      <div class="bar"></div>
      <div class="bar"></div>
    </div>

In `style.css`

	.bar {
	    float: left;
	    width: 30px;
	    margin-right: 20px;
	    background-color: #F4F5F7;
		border: 1px solid #C5C5C5;
		text-align: center;
	    font-size: 10px;
	  }
	
In your `main.js`, let's make all the bars equal to 40px

	// Select all bars within the bar chart
	var bars = d3.select("#chart").selectAll(".bar");
	bars.style("height", "100px");

You should see four bars on your screen!

###Add data to it

In `main.js`

	var numbers = [15, 22, 42, 72];

	var bars = d3.select("#chart").selectAll(".bar").data(numbers).style("height", function(d){
	  return d;
	})
	.style("margin-top", function(d){
	  return 100 - d;
	}).text(String);

###Create an bar graph that displays random numbers

Create an update functions and tie it to a click event for the bars

	function update(){
	  var numbers = [];
	
	  for(var i = 0; i < 4; i++){
	    var rand = Math.floor(Math.random()*100);
	    numbers.push(rand);
	  }
	
	  var selection = d3.select("#chart").selectAll(".bar").data(numbers).style("height", function(d){
	    return d;
	  }).style("margin-top", function(d){
	    return 100 - d;
	  }).text(String);
	}
	
	var numbers = [15, 8, 42, 4];
	
	var bars = d3.select("#chart").selectAll(".bar").data(numbers).style("height", function(d){
	  return d;
	})
	.style("margin-top", function(d){
	  return 100 - d;
	}).text(String).on('click', function(e, i){
	  update();
	});
 
 Add some transitions and durations to it
 
 	function update(){
	  var numbers = [];
	
	  for(var i = 0; i < 4; i++){
	    var rand = Math.floor(Math.random()*100);
	    numbers.push(rand);
	  }
	
	  var selection = d3.select("#chart").selectAll(".bar").data(numbers).transition().duration(500).style("height",     function(d){
	    return d;
	  }).style("margin-top", function(d){
	    return 100 - d;
	  }).text(String);
	
	
	}

###Congrats! You are now able to connect data and DOM together using D3