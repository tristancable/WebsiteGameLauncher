function updatePoints() {
    fetch('/update-points', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.json())
    .then(data => {
        if (data.points !== undefined) {
            document.getElementById('points').innerText = `Points: ${data.points}`;
        }
    })
    .catch(error => console.error('Error updating points:', error));
}

setInterval(updatePoints, 10000);