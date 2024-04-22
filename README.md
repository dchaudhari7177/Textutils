
# Textutils

Textutils is a simple React.js application that allows users to manipulate text entered into a textarea. It provides functionality to convert text to uppercase, lowercase, and to clear the textarea. Additionally, the application displays the number of words, characters, a live preview of the text, and estimates the reading time for the entered paragraph.

## Features

- **Text Transformation**: Convert entered text to uppercase or lowercase.
- **Clear Text**: Clear the textarea to start fresh.
- **Text Statistics**: Display the number of words and characters in the entered text.
- **Live Text Preview**: Show a live preview of the entered text.
- **Estimated Reading Time**: Estimate the time needed to read the entered text based on average adult reading speed.

## Usage

1. **Input Text**: Enter or paste text into the textarea.
2. **Text Transformation**:
   - Click the "Convert to Uppercase" button to change all text to uppercase.
   - Click the "Convert to Lowercase" button to change all text to lowercase.
3. **Clear Text**:
   - Click the "Clear Text" button to empty the textarea.
4. **Text Statistics**:
   - Below the textarea, you will see:
     - Number of words in the text.
     - Number of characters (including spaces and special characters).
     - Estimated reading time for the text.
5. **Live Text Preview**:
   - As you type or modify the text, the preview area updates in real-time.

## Reading Time Calculation

The estimated reading time is calculated based on the average adult reading speed of 200 words per minute (WPM).

\[ \text{Reading Time (in minutes)} = \frac{\text{Number of words}}{200 \text{ WPM}} \]

## Installation

To run this project locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone 
   ```

2. Navigate to the project directory:
   ```bash
   cd textutils
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm start
   ```

5. Open your web browser and go to `http://localhost:3000` to view the application.

## Technologies Used

- React.js
- HTML/CSS
- JavaScript

## Contributing

Contributions are welcome! If you have suggestions or improvements, please fork the repository and create a pull request.

