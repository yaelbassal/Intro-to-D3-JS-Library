var data = [30, 86, 168, 281, 303, 365];

//we want linear data scale - linear relationship between output values and our data
var scale = d3.scaleLinear()
//domain is the values that we will put into the scale. our data variable.
//second domain number must be highest value of data set.
//scaling bar chart down b/c css size is smaller than the chart columns.
  .domain([0, 365])
  //output values, squeezes into defined chart size in css.
  .range([0, 300])

//select method on d3 obj. available b/c imported the script.
d3.select('.chart')
//chain methods - invoke selectAll divs inside of chart class. saying to d3 - no divs inside of this chart yet but we will be creating some.
  .selectAll("div")
  //invoke data method with data as an argument.
  .data(data)
    //executed six times (# of array items) - creates placeholder elements
    .enter()

    //inserts a div to each placeholder
    .append("div")

    //style the div, d reperesents current element and adding pxl.
    //setting width for each div
    .style("width", function (d) {return scale(d) + "px"; })

    //adding text to each div.
    .text(function(d) {return `$ ${d}`; })



