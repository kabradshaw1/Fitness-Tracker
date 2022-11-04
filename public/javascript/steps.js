async function stepsFormHandler(event) {
    event.preventDefault();
  
    const qty = document.querySelector('#qty-input').value.trim();
    const date = new Date();

    const response = await fetch('/api/steps', {
      method: 'POST',
        body: JSON.stringify({
          qty,
          date
        }),
        headers: {
          'Content-Type': 'application/json'
        }
    })
  
    if (response.ok) {
      document.location.reload()
    } else {
      alert(response.statusText);
    };
  };
  
  document.querySelector('#steps-form').addEventListener('submit', stepsFormHandler);
  
d3.json("/api/steps").then(data => displayGraph(data));

const displayGraph = (data) => {
  
  const xScale = d3
    .scaleBand()
    .domain(data.map(dataPoint => dataPoint.id))
    .rangeRound([0, 800]).padding(0.1);  
  const yScale = d3
    .scaleLinear()
    // you will need to change the upper end of the domain, here it says 180, to be something slightly out of the range of your data.
    // so, for example, if your highest data point is 1000, you want to go 1100.
    .domain([0, 24000])
    .range([400, 0]);
  const formatted = data.map(d => {
    const date = new Date(d.date);
    const newDate = date.getDate();
    return { ...d, date:newDate }
  });
  console.log(formatted)
  const chart = d3.select('#d3-container');
  
  const bar = chart
    .selectAll('.bar')
      .data(formatted)
      .enter()
      .append('rect')
      .classed('bar', true)
      .attr('width', xScale.bandwidth())
      // you will need to change max to what ever variable you are trying to graph on this line and down in the y attribute
      .attr('height', d =>400 - yScale(d.qty))
      .attr('x', d => xScale(d.id))
      .attr('y', d => yScale(d.qty));
  const dates = chart
    .selectAll('text')
      .data(formatted)
      .enter()
      .append('text')
      .text(d => d.date)
      .attr('x', d => xScale(d.id))
      .attr('y', 395);
};