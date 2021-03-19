//Save the private key to a parent folder and don't include in the git repository
import token from '../../private/keys/token.mjs';
//Import Axios node module
import axios from 'axios';

//Post to the API and log response
axios.post('https://dictionary.iachieved.it/dictionary' ,{
    //Data goes here
    }, {
    headers: {
        'Authorization' : token
    }
})
    //returns a promise, if successful log the data
    .then(response => console.log(response.data))
    .catch(error => console.log(error))