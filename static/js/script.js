document.getElementById('predictionForm').addEventListener('submit', function (e) {
    e.preventDefault();

    // Get input features
    const features = document.getElementById('features').value.split(',').map(Number);

    // Send POST request to Flask API
    fetch('http://localhost:5001/predict', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ features: features }),
    })
    .then(response => response.json())
    .then(data => {
        const resultDiv = document.getElementById('result');
        if (data.error) {
            resultDiv.textContent = `Error: ${data.error}`;
        } else {
            resultDiv.textContent = `Prediction: ${data.prediction === 1 ? 'High Risk' : 'Low Risk'}`;
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });
});