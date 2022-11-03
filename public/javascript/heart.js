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
  
  const xScale = d3
    .scaleBand()
    .domain(data.map(dataPoint => dataPoint.id))
    .rangeRound([0, 800]).padding(0.1);  
  const yScale = d3
  .scaleLinear()
  .domain([0, 180])
  .range([400, 0]);

  const chart = d3.select('#d3-container')

  const bars = chart
    .selectAll('.bar')
      .enter()
      .append('rect')
      .classed('bar', true)
      .attr('width', xScale.bandwidth())
      .attr('height', d =>400 - yScale(d.max))
      .attr('x', d => xScale(d.id))
      .attr('y', d => yScale(d.max));

    

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

