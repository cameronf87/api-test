// This script does run however it does not seem to delete the key/value pair as described in the API documentation

//Save the private key to a parent folder and don't include in the git repository, create your own file with the authorization string or change the 'token' under 'headers' in this script
import token from '../../private/keys/token.mjs';
//Import Axios node module
import axios from 'axios';

//Delete the newly created ID, First add the ID to the end of the URL like this
axios.delete('https://dictionary.iachieved.it/dictionary/e4d14c27-be87-4b28-aa72-a4a930ed3b30/keys/key',
{
    headers: {
        'Authorization' : token //change this to the actual token if you did not choose to create a seperate key file
    },
    data: {
        // This may not be needed if the ID is in the URL
        key: 'key',
        value: 'Cameron'
    },
})
    //returns a promise, if successful log the data
    .then(response => console.log(response.data))
    .catch(error => console.log(error))