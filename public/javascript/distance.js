async function distanceFormHandler(event) {
  event.preventDefault();

  const qty = document.querySelector('#qty-input').value.trim();
  const date = new Date();

  const response = await fetch('/api/distance', {
    method: 'POST',
      body: JSON.stringify({
        qty,
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

document.querySelector('#distance-form').addEventListener('submit', distanceFormHandler);

chart(10, 'distance')