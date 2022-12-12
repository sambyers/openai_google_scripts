function OpenAIPost(apiEndpoint, data) {
  var apiKey = "YOUR_KEY_HERE" // Put your API key here
  var apiBaseUrl = "https://api.openai.com/v1"
  var apiUrl = apiBaseUrl + apiEndpoint

  // Set up the UrlFetch options and serialize data to string
  var options = {
      "method": "POST",
      "headers": {
        "Authorization": "Bearer " + apiKey,
        "Content-Type": "application/json"
      },
      "payload": JSON.stringify(data)
  }

  // Send the HTTP request to the OpenAI API
  var response = UrlFetchApp.fetch(apiUrl, options)

  // Parse the response from the OpenAI API and return
  return JSON.parse(response.getContentText())
}

function AITextCompletion(promptText, temperature) {
  // The OpenAI API endpoint for sending a prompt
  var apiEndpoint = "/completions"

  // Construct the HTTP request to the OpenAI API
  var data = { 
    "model": "text-davinci-003",
    "prompt": promptText,
    "temperature": temperature,
    "max_tokens": 1000
  }

  responseData = OpenAIPost(apiEndpoint, data)

  // Extract the generated response text from the response
  var generatedResponse = responseData.choices[0].text

  // Return the generated response
  return generatedResponse
}

function AITextEdit(input, instruction) {
  // The OpenAI API endpoint for sending a prompt
  var apiEndpoint = "/edits"

  // Construct the HTTP request to the OpenAI API
  var data = { 
    "model": "text-davinci-edit-001",
    "input": input,
    "instruction": instruction
  }

  responseData = OpenAIPost(apiEndpoint, data)

  // Extract the generated response text from the response
  var generatedResponse = responseData.choices[0].text

  // Return the generated response
  return generatedResponse
}

function AICodeCompletion(prompt) {
  // The OpenAI API endpoint for sending a prompt
  var apiEndpoint = "/completions"

  // Construct the HTTP request to the OpenAI API
  var data = { 
    "model": "code-davinci-002",
    "prompt": prompt,
    "temperature": .2,
    "max_tokens": 8000
  }

  responseData = OpenAIPost(apiEndpoint, data)

  // Extract the generated response text from the response
  var generatedResponse = responseData.choices[0].text

  // Return the generated response
  return generatedResponse
}
