document.getElementById('predictionForm').addEventListener('submit', function (e) {
    e.preventDefault();

    // Get input features
    const features = {
        male: parseInt(document.getElementById('sex').value),
        age: parseInt(document.getElementById('age').value),
        education: parseInt(document.getElementById('education').value),
        currentSmoker: parseInt(document.getElementById('currentSmoker').value),
        cigsPerDay: parseInt(document.getElementById('cigsPerDay').value),
        BPMeds: parseInt(document.getElementById('BPMeds').value),
        prevalentStroke: parseInt(document.getElementById('prevalentStroke').value),
        prevalentHyp: parseInt(document.getElementById('prevalentHyp').value),
        diabetes: parseInt(document.getElementById('diabetes').value),
        totChol: parseInt(document.getElementById('totChol').value),
        sysBP: parseInt(document.getElementById('sysBP').value),
        diaBP: parseInt(document.getElementById('diaBP').value),
        BMI: parseFloat(document.getElementById('BMI').value),
        heartRate: parseInt(document.getElementById('heartRate').value),
        glucose: parseInt(document.getElementById('glucose').value)
    };

    // Send POST request to Flask API
    fetch('http://localhost:5001/predict', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ features: Object.values(features) }),
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