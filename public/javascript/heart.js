async function heartFormHandler(event) {
  event.preventDefault();

  const qty = document.querySelector('#qty-input').value.trim();
  const date = new Date();
  // const chart = 'heart'

  const response = await fetch('/api/heart', {
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

document.querySelector('#heart-form').addEventListener('submit', heartFormHandler);
// first number is range, and should be a number slightly higher 
// than your highest value in your dataset
chart(180, 'heart')

