import pickle
import numpy as np
import pandas as pd
from flask import Flask, request, jsonify
from flask_cors import CORS

# Load the trained model
model = pickle.load(open("multi_card_credit_card_model.pkl", "rb"))

# Define Flask app
app = Flask(__name__)
CORS(app)  # Enable CORS to allow requests from React frontend

# Define Card Categories
premium_cards = [0, 1, 2, 6, 7]
travel_cards = [8, 9]
fuel_cards = [13, 14]
lifestyle_cards = [10, 11, 12]
all_purpose_cards = [3, 4, 5]

def determine_credit_limit(income):
    """Calculate credit limit as 75% of user's income."""
    return round(income * 0.75, 2)

# Define API route for predictions
@app.route('/predict', methods=['POST'])
def predict():
    
    try:
        # Get JSON data from React frontend
        data = request.get_json()
        user_df = pd.DataFrame([data])

        # Ensure test_user matches training columns
        expected_features = ["Income", "Travel", "Lifestyle", "Premium", "All_Purpose", "Fuel",
                             "High_Income", "Student", "Self_Employed", "Frequent_Traveler",
                             "Online_Shopper", "Fuel_Customer"]
                             
        for col in expected_features:
            if col not in user_df.columns:
                user_df[col] = 0  # Add missing features with default 0
        
        user_df = user_df[expected_features]  # Reorder columns to match training data

        # Get Probability Scores for Each Card
        probs = model.predict_proba(user_df)[0]

        # Apply Filtering Rules (Remove Premium Cards for Students or Low-Income Users)
        filtered_indices = []
        for idx in np.argsort(probs)[-5:][::-1]:  # Get top 5 cards
            if user_df["Student"].values[0] == 1 or user_df["Income"].values[0] <= 150000:
                if idx in premium_cards:
                    continue  # Skip premium cards for students/low-income users
            filtered_indices.append(idx)

        # Ensure at Least 5 Recommendations
        if len(filtered_indices) < 5:
            filtered_indices = np.argsort(probs)[-5:][::-1]  # Fallback to top 5

        # Convert predictions to original card labels
        card_mapping = {i: f"Card {i}" for i in range(15)}  # Replace with actual card names if available
        best_3_cards = [{"card": card_mapping[idx], "credit_limit": determine_credit_limit(user_df["Income"].values[0])} for idx in filtered_indices[:3]]
        best_5_cards = [{"card": card_mapping[idx], "credit_limit": determine_credit_limit(user_df["Income"].values[0])} for idx in filtered_indices[:5]]

        # Return JSON response
        return jsonify({
            "top_3_recommendations": best_3_cards,
            "top_5_recommendations": best_5_cards
        })

    except Exception as e:
        return jsonify({"error": str(e)})

# Run Flask app
if __name__ == '__main__':
    app.run(host="127.0.0.1", port=5000, debug=True)
