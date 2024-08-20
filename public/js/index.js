// async function updatePoints() {
//     try {
//         const response = await fetch('/update-points', {
//             method: 'POST',
//             headers: { 'Content-Type': 'application/json' }
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

// document.addEventListener('DOMContentLoaded', () => {
//     updatePoints(); // Update points once when the page loads
//     setInterval(updatePoints, 1000); // Update points every second
// });