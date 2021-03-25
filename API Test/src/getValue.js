//Save the private key to a parent folder and don't include in the git repository, create your own file with the authorization string or change the 'token' under 'headers' in this script
import token from '../../private/keys/token.mjs';
//Import Axios node module
import axios from 'axios';

// Supply an ID in the URL to return all key/value pairs for the given object
// Returns the value with the key named 'name' change it at the end of the URL to get a different value
axios.get('https://dictionary.iachieved.it/dictionary/e4d14c27-be87-4b28-aa72-a4a930ed3b30/keys/name',
{
    headers: {
        'Authorization' : token //change this to the actual token if you did not choose to create a seperate key file
    },
    data: {
    },
})
    //returns a promise, if successful log the data
    .then(response => console.log(response.data))
    .catch(error => console.log(error))