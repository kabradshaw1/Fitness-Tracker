async function heartFormHandler(event) {
  event.preventDefault();

  const qty = document.querySelector('#qty-input').value.trim();
  const date = new Date();

  const response = await fetch('/api/heart', {
    method: 'POST',
    body: JSON.stringify({ qty, date }),
    headers: { 'Content-Type': 'application/json' }
  });

  if (response.ok) {
    document.location.reload();
  } else {
    const parsedResponse = await response.json();
    alert(parsedResponse.statusText);
  };
};

document.querySelector('#heart-form').addEventListener('submit', heartFormHandler);
// first number is range, and should be a number slightly higher
// than your highest value in your dataset
chart(180, 'heart');

