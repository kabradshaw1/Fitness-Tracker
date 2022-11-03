async function heartFormHandler(event) {
  event.preventDefault();

  const max = document.querySelector('#max-input').value.trim();
  // let date = new date();

  const response = await fetch('/api/heart', {
    method: 'POST',
      body: JSON.stringify({
        max,
        date
      }),
      headers: {
        'Content-Type': 'application/json'
      }
  });

  if (response.ok) {
    document.location.reload()
  } else {
    alert(response.statusText);
  };
};

d3.json("/api/heart").then(data => displayGraph(data));

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
      .data(data)
      .enter()
      .append('rect')
      .classed('bar', true)
      .attr('width', xScale.bandwidth())
      .attr('height', d =>400 - yScale(d.max))
      .attr('x', d => xScale(d.id))
      .attr('y', d => yScale(d.max));
};

document.querySelector('#heart-form').addEventListener('submit', heartFormHandler);