jQuery(document).ready(function ($) {

  var w = window.innerWidth;
  var h = window.innerHeight;

  if (w < 1000) return;

  var colors = ['#6ECD56', '#F16529', '#33A9DC', '#CC6699'],
      count = 0,
      radii = [4,4,6,6,8,10],
      number = Math.round(w / 50),
      charge = -1000,    // How much circles repel each other
      gravity = 0.05,   // How close circles are
      nodes = [],
      nodes_count = 0,
      d3 = window.d3;

  var svg = d3.select('#dots').append('svg:svg')
      .attr('width', w)
      .attr('height', h);

  var force = d3.layout.force()
      .charge(charge)
      .gravity(gravity)
      .size([w, h])
      .nodes(nodes)
      .on('tick', tick)
      .start();

  function tick() {
    svg.selectAll('circle')
        .attr('cx', function(d) { return d.x; })
        .attr('cy', function(d) { return d.y; });
  }

  var interval = setInterval(function() {

    ++nodes_count;

    // Postive or negative
    var plusOrMinus = Math.random() < 0.5 ? -1 : 1;

    // Initial coordinates
    var d = {
      x: w / 2 + 500 * plusOrMinus * Math.random() - 1,
      y: h / 2 + 100 * plusOrMinus * Math.random() - 1
    };

    // Random attributes
    var random_color_index = Math.floor(Math.random()*colors.length);
    var random_size_index = Math.floor(Math.random()*radii.length);
    var color = colors[random_color_index];
    var size = radii[random_size_index];

    svg.append('svg:circle')
        .data([d])
        .attr('r', 1e-6)
        .attr('fill', 'white')
      .transition()
        .ease(Math.sqrt)
        .attr('r', size)
        .attr('fill', color);

    if (nodes.push(d) > number) clearInterval(interval);

    force.start();

  }, 10);

  d3.timer(function() {

    ++count;
    var circles = svg.selectAll('circle');
    var intensity = 0.25;
    var slowness = 2;

    circles
      .each(function(d,i) {
        var plusOrMinus = (i % 2 === 0) ? 1 : -1;
        var actual_intensity = (i % 2 === 0) ? 1 * intensity : 1 * intensity;
        var actual_slowness = (i % 2 === 0) ? 1 * slowness : 2 * slowness;
        d3.select(this).style('transform', 'translateX(' +  Math.cos(plusOrMinus * count / actual_slowness) * actual_intensity + 'px) translateY(' + Math.sin(plusOrMinus * count / actual_slowness) * actual_intensity + 'px)');
        d3.select(this).style('-webkit-transform', 'translateX(' +  Math.cos(plusOrMinus * count / actual_slowness) * actual_intensity + 'px) translateY(' + Math.sin(plusOrMinus * count / actual_slowness) * actual_intensity + 'px)');
      });

  }, 1000);

});
