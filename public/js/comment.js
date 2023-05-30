const commentHandler = async (event) => {

    event.preventDefault();
  
    const comment = document.querySelector('#comment-input').value.trim();
    const id = event.target.getAttribute('data-id');

    if (comment) {
      const response = await fetch(`/api/post/${id}`, {
        method: 'POST',
        body: JSON.stringify({ comment }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/');
      } else {
        alert('Failed to log in');
      }
    }
  };
  

document
  .querySelector('.comment-form')
  .addEventListener('submit', commentHandler);