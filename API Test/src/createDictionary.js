//Save the private key to a parent folder and don't include in the git repository, create your own file with the authorization string or change the 'token' under 'headers' in this script
import token from '../../private/keys/token.mjs';
//Import Axios node module
import axios from 'axios';

//Post to the API and log response
axios.post('https://dictionary.iachieved.it/dictionary' ,{
    //Data goes here
    }, {
    headers: {
        'Authorization' : token //change this to the actual token if you did not choose to create a seperate key file
    }
})
    //returns a promise, if successful log the data
    .then(response => console.log(response.data))
    .catch(error => console.log(error))