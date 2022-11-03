async function heartFormHandler(event) {
  event.preventDefault();

  const max = document.querySelector('#max-input').value.trim();
  const date = new Date();
  console.log(max, date)

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

document.querySelector('#heart-form').addEventListener('submit', heartFormHandler);

d3.json("/api/heart").then(data => displayGraph(data));

const displayGraph = (data) => {
  const xScale = d3
    .scaleBand()
    .domain(data.map(dataPoint => dataPoint.id))
    .rangeRound([0, 800]).padding(0.1);  
  const yScale = d3
  .scaleLinear()
  // you will need to change the upper end of the domain, here it says 180, to be something slightly out of the range of your data.
  // so, for example, if your highest data point is 1000, you want to go 1100.
  .domain([0, 180])
  .range([400, 0]);

  const chart = d3.select('#d3-container')
    .selectAll('.bar')
      .data(data)
      .enter()
      .append('rect')
      .classed('bar', true)
      .attr('width', xScale.bandwidth())
      // you will need to change max to what ever variable you are trying to graph on this line and down in the y attribute
      .attr('height', d =>400 - yScale(d.max))
      .attr('x', d => xScale(d.id))
      .attr('y', d => yScale(d.max));
};

