//Save the private key to a parent folder and don't include in the git repository, create your own file with the authorization string or change the 'token' under 'headers' in this script
import token from '../../private/keys/token.mjs';
//Import Axios node module
import axios from 'axios';

//Post to the API and log response 
//Create the key name at the end of the URL in this case I'm using name
axios.post('https://dictionary.iachieved.it/dictionary/e4d14c27-be87-4b28-aa72-a4a930ed3b30/keys/name' ,{
    key: "name",
    value: "Cameron!"
    }, {
    headers: {
        'Authorization' : token //change this to the actual token if you did not choose to create a seperate key file
    }
})