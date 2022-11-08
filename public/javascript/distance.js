async function distanceFormHandler(event) {
  event.preventDefault();

  const qty = $('[name="qty-input"]').val()
/*   const max = $('[name="max-input"]').val()
  const min = $('[name="min-input"]').val() */

  const response = await fetch('/api/distance', {
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
  }
}

d3.json("/api/distance").then(data => displayGraph(data))

const displayGraph = (data) => {
 
const chart = d3.select('#d3-container')

chart
  .selectAll('.div')
    .data(data)
    .enter()
    .append('div')
    .classed('bar', true)
    .style('width', '40px')
    .style('height', dta=>(dta.max * 2) + 'px');
	}
document.querySelector('#distance-form').addEventListener('submit', distanceFormHandler);