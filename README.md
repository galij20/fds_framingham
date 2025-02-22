# fds_framingham

## Overview
Foundations of Data Science (FDS) project on Exploratory Data Analysis (EDA) and model training for the Framingham database to predict the 10-year risk of future coronary heart disease (CHD).

The dataset was obtained from [GeeksforGeeks](https://www.geeksforgeeks.org/ml-heart-disease-prediction-using-logistic-regression/).

## Installation
To set up the project locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/galij20/fds_framingham.git
   ``` 
2. Navigate to the project directory:
   ```bash
   cd fds_framingham
   ```
3. Install the required packages:
   ```bash
   pip install -r requirements.txt
   ```

## Usage
To run the analysis and model training, execute the following command:
```bash
python app.py
```

This will perform the following steps:
1. Load the pickle file containing the trained model
2. Start the Flask server
3. Make a POST request to the server with the features to predict the 10-year risk of future coronary heart disease (CHD)

After the server starts running, go to the following link:
[Live Preview: Heart Attack Prediction](https://galij20.github.io/fds_framingham/)
## Project Structure
- `static`: Contains the source code for the frontend, css and js files.
- `project.ipynb`: Jupyter notebooks for EDA and model experimentation.
- `framingham.csv`: The dataset used for training and testing the model.
- `index.html`: The main html file for the frontend.
- `knn_model.pkl`: The pickle file containing the trained model.
- `requirements.txt`: The dependencies for the project.
- `README.md`: The readme file for the project.

## Contributing
Contributions are welcome! Please fork the repository and submit a pull request.
