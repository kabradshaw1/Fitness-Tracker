async function activeFormHandler(event) {
  event.preventDefault();

  const qty = document.querySelector('#qty-input').value.trim();
  const date = new Date();

  const response = await fetch('/api/active', {
    method: 'POST',
    body: JSON.stringify({ qty, date }),
    headers: { 'Content-Type': 'application/json' }
  });

  if (response.ok) {
    document.location.reload();
  } else {
    alert(response.statusText);
  };
};

document.querySelector('#active-form').addEventListener('submit', activeFormHandler);

chart(2200, 'active');