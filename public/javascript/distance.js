async function distanceFormHandler(event) {
  event.preventDefault();

  const qty = document.querySelector('#qty-input').value.trim();
  const date = new Date();
  // const chart = 'distance'

  const response = await fetch('/api/distance', {
    method: 'POST',
      body: JSON.stringify({
        qty,
        date,
        // chart,
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

document.querySelector('#distance-form').addEventListener('submit', distanceFormHandler);
// first number is range, and should be a number slightly higher 
// than your highest value in your dataset
chart(10, 'distance')