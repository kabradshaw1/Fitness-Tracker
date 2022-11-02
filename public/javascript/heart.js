data = []

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

getHeart = () => {

  fetch('/api/heart')
    .then(response => {
      if(response.ok) {
        response.json().then(function(data) {
          data = data;
          console.log(data)
        })
      } else {
        alert('Error: Item Not Found');
      }
    })
    .catch(function(error) {
      alert("Unable to get items.")
    })
}
// async function getHeart() {
//   await fetch('http://localhost:3001/api/heart', data => {
//     console.log('javascript test 2')

    // data.json().then(function(json) {
    //   console.log(json)
    // })
//   })
// }

// d3.json('http://localhost:3001/api/heart', function (d) {
//   console.log(d)
// })
// const width = 800;
// const height = 400;
// const margin = { top: 50, bottom: 50, left: 50, right: 50};

// const svg = d3.select('#heart')
//   .append('svg')
  // .addClass('graph')
//   .attr('viewBox', [0, 0, width, height]);

// const x = d3.scaleBand()
//   .domain(d.range(data.length))
//   .range([margin.left, width - margin.right])
//   .padding(0.1);

// const y = d3.scaleBand()
//   .domain([0, 300])
//   .range([height - margin.bottom, margin.top])

// svg
//   .append('g')
//   .attr('fill', 'royalblue')
//   .selectAll('rect')
//   .join('rect')
//     .attr('x', (d, i) => x(i))
//     .attr('y', (d) => y(d.score))
//     .attr('height', d => y(0) - y(d.score))
//     .attr('width', x.bandwidth())

// svg.node();

document.querySelector('#heart-form').addEventListener('submit', heartFormHandler);
getHeart()
