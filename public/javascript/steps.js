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
  
chart(24000, 'steps')