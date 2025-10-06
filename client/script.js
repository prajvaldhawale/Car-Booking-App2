document.addEventListener('DOMContentLoaded', () => {
    fetch('/api/cars')
        .then(res => res.json())
        .then(data => {
            const list = document.getElementById('car-list');
            list.innerHTML = '<h2>Available Cars</h2>' + data.map(car => 
                `<div>ID: ${car.id}, Model: ${car.model}, Status: ${car.status}</div>`
            ).join('');
        });

    document.getElementById('booking-form').addEventListener('submit', (e) => {
        e.preventDefault();
        const carId = document.getElementById('car-id').value;
        fetch('/api/book', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ id: carId })
        })
        .then(res => res.json())
        .then(data => alert(data.message));
    });
});