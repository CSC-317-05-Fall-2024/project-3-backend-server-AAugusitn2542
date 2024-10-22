document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');

     // Assign the handleSubmit function to the form's submit event
     
     form.addEventListener('submit', handleSubmit);
     function handleSubmit(event) {
     event.preventDefault();

    const name = document.getElementById('name').value;
    const color = document.getElementById('color').value;
    const human = document.getElementById('human').value;
    const image = document.getElementById('image-url').value;

    fetch('/api/cats' , {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify({
               name,color, human, image
                }),
    })
    .then(response => {
        return response.json();
    }).then(data => {
        console.log(data);
        window.location.href = `/cats/${data.id}`;
    }).catch(error => {
        console.error('Error:', error);
    })   
    }
});
