# Dictionary API

## In order to work with an API we start by looking through the API documentation, making inferences and expecting certain results. In order to affirm our assumptions, we need to test the abilities of our endpoints. We can think of API’s as a contract between the service and the client, we need to make sure we understand the contract as we would any contract by understanding its abilities and limitations.
***


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

1. Copy the JavaScript examples and save them locally, we will change these later
2. Set up environment

3. Make sure you have node, npm, axios jest, and supertest npm modules installed

4. Checkout code and save it in a location of your choice
5. Open terminal
6. Cd into wherever you saved the project folder
7. Create a private folder and to save our authorization token
    - Type ‘mkdir private’
    - Cd into the newly created folder
    - Type ‘mkdir keys’
    - Type ‘nano token.mjs’
    - Paste the authorization token, make sure you include ‘basic ‘ before the string
    - Save by typing CTRL+O then Y then Enter
    - Cd out 1 levels ‘cd ../‘
    - Cd into API Test folder
    - Type ls to see the available files to test
8. Run each of the .js files that are in the root folder
    - Use this command “npm createDictionary.js” to run the first API test, this one should just return a dictionary ID
    - Repeat for each of the .js files in this folder
9. Run the testing modules
    - Cd into ‘__test__’
    - Type ls to list the available files to test
    - Use this command ‘NODE_OPTIONS=--experimental-vm-modules npx jest createDictionary.test.js’ to test the first module
    - Repeat for each .js files in this folder
