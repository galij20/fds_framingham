from flask import Flask, request, jsonify
from flask_cors import CORS  # Import CORS
import pickle
import numpy as np

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

# Load the KNN model
with open('knn_model.pkl', 'rb') as file:
    knn_model = pickle.load(file)

@app.route('/predict', methods=['POST'])
def predict():
    data = request.get_json()
    if 'features' not in data:
        return jsonify({'error': 'Missing "features" key in request data'}), 400

    try:
        input_data = np.array(data['features']).reshape(1, -1)
        prediction = knn_model.predict(input_data)
        return jsonify({'prediction': int(prediction[0])})
    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5001, debug=True)