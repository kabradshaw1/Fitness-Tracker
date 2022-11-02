async function heartFormHandler(event) {
  event.preventDefault();

  const average = $('[name="average-input"]').val()
  const max = $('[name="max-input"]').val()
  const min = $('[name="min-input"]').val()

  const response = await fetch('/api/heart', {
    method: 'POST',
      body: JSON.stringify({
        average,
        max,
        min
      }),
      headers: {
        'Content-Type': 'application/json'
      }
  })

  if (response.ok) {
    document.location.reload()
  } else {
    alert(response.statusText);
  }
}

d3.json("/api/heart").then(data => displayGraph(data))

const displayGraph = (data) => {
 
  const dummy_data = [
    {id:'d1', value:10, region:'USA'},
    {id:'d2', value:11, region:'india'},
    {id:'d1', value:12, region:'China'}
  ]
  const chart = d3.select('#d3-container')
    .classed('graph', true)
  
  const bar = chart
    .selectAll('.bar')
    .data(dummy_data)
    .enter()
    .append('div')
    .classed('.bar', true)
    .style('width', '50px')
    .style('height', '150px')
  

  // const width = 800;
  // const height = 400;
  // const margin = { top: 50, bottom: 50, left: 50, right: 50};

 
  // const svg = d3.select('#d3-container')
  //   .append('svg')
  //   .attr('height', height - margin.top - margin.bottom)
  //   .attr('width', width - margin.left - margin.right)
  //   .attr('viewBox', [0, 0, width, height]);

  // const x = d3.scaleBand()
  //   .domain(d3.range(data.length))
  //   .range([margin.left, width - margin.right])
  //   .padding(0.1);

  // const y = d3.scaleLinear()
  //   .domain([0, 180])
  //   .range([height - margin.bottom, margin.top]);
  // svg
  //   .append('g')
  //   .attr('fill', 'royalblue')
  //   .selectAll('rect')
  //   .join('rect')
  //     .attr('x', (d, i) => x(i))
  //     .attr('y', (d) => y(d.max))
  //     .attr('height', d => y(0) - y(d.max))
  //     .attr('width', x.bandwidth());

  // svg.node();
}
document.querySelector('#heart-form').addEventListener('submit', heartFormHandler);

