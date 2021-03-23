# Dictionary API

## In order to work with an API we start by looking through the API documentation, making inferences and expecting certain results. In order to affirm our assumptions, we need to test the abilities of our endpoints. We can think of API’s as a contract between the service and the client, we need to make sure we understand the contract as we would any contract by understanding its abilities and limitations.
***
In this example, we will look at a Dictionary API with simple functionality, since the codebase is small, let’s move it locally so we can set up our testing environment.

1.	Copy the JavaScript examples and save them locally, we will change these later
2.	Set up environment

    -	Make sure you have git, node, npm, and the axios npm module installed
    -	Run ‘git -init’ to initialize a new git repo
    -	Run ‘npm -init’ to create a package.json file
    -	Run ‘npm install jest’ to install our testing framework
    - Run ‘npm install supertest’ to install additional tools for Jest
    - Run ‘jest api-test –notify –config=config.json’

**Note: you may have to run ‘node --experimental-vm-modules node_modules/.bin/jest’ if you plan to save the authentication key in a separate file**

3.	Make an API call
  
    - Create a private key file for the API key to be stored (somewhat) securely, we will exclude it from our git repository
    - Add the headers and reference the API key, in node we can use the import/export feature to pass the variable to your app
    - Run the first example (Create a Dictionary)
    - ‘node createDictionary.js’ //or whatever api your testing, check the /src folder for more examples
    - In the terminal you should get back the same result as the Apiary example, but with a new Dictionary ID.

## Testing Parameters

Let’s establish what we are testing for:

1.	Basic input with expected output:
    - Verify status code
        - Expect 201
        - Unauthorized
        - Error
    - Verify Response Payload
    - Check valid JSON body, correct field names, types, values and errors
2.	Basic performance
    - How long does a request take, is it longer than expected?
    
## Testing Scenario Categories
  - Positive tests
  - Extended positive with optional parameters
  - Negative testing with valid input
  - Negative with invalid input
  - Destructive tests
  - Security, authorization, permissions, etc.

## Test Flows
1.	Simple API requests
2.	Multi-step workflow with many requests
    - Execute a POST request that creates a resource and returns an auto-generated identifier in its response. We then use this identifier to check if this resource is present in the list of elements received by a GET request. Then we use a PATCH endpoint to update new data, and we again invoke a GET request to validate the new data. Finally, we DELETE that resource and use GET again to verify it no longer exists.
3.	Repeat for each endpoint

## Run Tests

Create a new Dictionary

    POST /dictionary	
        - Creates a new dictionary object and returns a dictionary id
    GET /dictionary	
        - Should return 404

  - Test 1: Normal behavior
      - Findings: Output is as expected

  - Test 2: Change POST request to PUT 
      - Findings: 404 Not Found (expected)

  - Test 3: Make sure the API call returns a new Dictionary ID
      - Findings: 201 Created and returns dictionary id