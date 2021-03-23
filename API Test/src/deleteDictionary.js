//Save the private key to a parent folder and don't include in the git repository
import token from '../../private/keys/token.mjs';
//Import Axios node module
import axios from 'axios';

//Post to the API and log response
axios.delete('https://dictionary.iachieved.it/dictionary/id/',
{
    headers: {
        'Authorization' : token
    },
    data: {
        id: '147775b7-f3d6-41c4-ae38-3fd899ebba34' 
    },
})
    //returns a promise, if successful log the data
    .then(response => console.log(response.data))
    .catch(error => console.log(error))