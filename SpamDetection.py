import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.feature_extraction.text import CountVectorizer
from sklearn.naive_bayes import MultinomialNB
import streamlit as st

# Load data
data = pd.read_csv("D:\hari\spamdata.csv")
data.drop_duplicates(inplace=True)
data['Category'] = data['Category'].replace(['ham', 'spam'], ['Not spam', 'spam'])

# Split data
mes = data['Message']
cate = data['Category']
mes_train, mes_test, cate_train, cate_test = train_test_split(mes, cate, test_size=0.2)

# Vectorize text
cv = CountVectorizer(stop_words='english')
features = cv.fit_transform(mes_train)

# Train model
model = MultinomialNB()
model.fit(features, cate_train)

# Test model
features_test = cv.transform(mes_test)

# Predict function
def predict(message):
    input_message = cv.transform([message]).toarray()
    result = model.predict(input_message)
    return result[0]

# Streamlit app
st.markdown(
    """
    
    <style>
    body {
        background-color: #f0f2f6; /* Light gray background */
    }
    .container {
        width: 80%;
        margin: auto;
        padding: 20px;
        font-family: 'Arial', sans-serif;
        background-color: white; /* White container background */
        border-radius: 10px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Subtle shadow */
    }
    .header {
        text-align: center;
        margin-bottom: 30px;
        color: #333;
    }
    .input-box {
        width: 100%;
        padding: 10px;
        margin-bottom: 20px;
        border: 1px solid #ddd;
        border-radius: 5px;
    }
    .button {
        background-color: #007bff; /* Professional blue */
        border: none;
        color: white;
        padding: 15px 32px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 16px;
        border-radius: 5px;
        cursor: pointer;
    }
    .button:hover {
        background-color: #0056b3; /* Darker blue on hover */
    }
    .result-box {
        margin-top: 20px;
        padding: 15px;
        border-radius: 5px;
        text-align: center;
        font-weight: bold;
    }
    .spam {
        background-color: #ffe6e6; /* light red */
        color: #d00;
        border: 1px solid #d00;
    }
    .not-spam {
        background-color: #e6ffe6; /* light green */
        color: #0d0;
        border: 1px solid #0d0;
    }
   
    </style>
    """,
    unsafe_allow_html=True,
)


st.markdown('<h1 class="header">Spam Detection</h1>', unsafe_allow_html=True)

input_mess = st.text_area('Enter your Message Here', height=150, key="input_text", placeholder="Type your message here...",
                        help="Enter the message you want to check for spam.")

if st.button('Validate', key="validate_button", help="Click to check if the message is spam."):
    output = predict(input_mess)
    if output == 'spam':
        st.markdown(f'<p class="result-box spam">{output.upper()}! This message is classified as spam.</p>', unsafe_allow_html=True)
    else:
        st.markdown(f'<p class="result-box not-spam">{output.upper()}! This message is not spam.</p>', unsafe_allow_html=True)
else :
        st.markdown(f'<p style= color:#FFF8DC; padding:10px; border-radius:5px;"> Please enter a message to validate.</p>', unsafe_allow_html=True)

     

st.markdown('''
<script>
    document.addEventListener('DOMContentLoaded', function() {
        const inputTextArea = document.getElementById('input_text');
        const validateButton = document.getElementById('validate_button');
        const resultBox = document.querySelector('.result-box');

        if (inputTextArea && validateButton) {
            validateButton.addEventListener('click', function() {

                if(resultBox){
                    resultBox.style.display = 'block';
                }

            });
        }
    });

</script>
''', unsafe_allow_html=True)

st.markdown('</div>', unsafe_allow_html=True)

 
