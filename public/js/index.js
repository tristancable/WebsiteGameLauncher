// async function updatePoints() {
//     let username;
//     let points;
//     try {
//         const response = await fetch('http://localhost:1225/update-points', {
//             method: 'POST',
//             headers: {
//                 "Content-Type": "application/json"
//             },
//             credentials: 'include',
//             body: JSON.stringify({ username: username, points: points })
//         });

//         const data = await response.json();
//         if (response.ok) {
//             const pointsElement = document.getElementById('points');
//             if (pointsElement) {
//                 pointsElement.innerText = `Points: ${data.points}`;
//             }
//         } else {
//             console.error('Error updating points:', data.error);
//         }
//     } catch (error) {
//         console.error('Error communicating with the server:', error);
//     }
// }

// window.addEventListener('load', () => {
//     updatePoints(); // Update points once when the page loads
//     setInterval(updatePoints, 1000); // Update points every second
// });