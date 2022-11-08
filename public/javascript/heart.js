async function heartFormHandler(event) {
  event.preventDefault();

  const qty = document.querySelector('#qty-input').value.trim();
  const date = new Date();

  const response = await fetch('/api/heart', {
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

document.querySelector('#heart-form').addEventListener('submit', heartFormHandler);

chart(180, 'heart')

