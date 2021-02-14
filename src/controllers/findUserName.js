import axios from 'axios';
import urlList from '../config/urlList';

exports.github = async (username) => {
  console.log("username ", username );
  if(username) 
  {
    await axios.head(urlList.github + username)
    .then((response) => {
      console.log(response.data);
      console.log(response.status);
      console.log(response.statusText);
      console.log(response.headers);
      console.log(response.config);
      console.log(response.request._redirectable._redirectCount);
      if(response.status === 200) {
        return {
          error: false,
          usernameAvailable: false,
        }
      }
      else {
        return {
          error: true,
          usernameAvailable: false,
          errormessage: response.statusText
        }
      }
    })
    .catch(error => {
      console.log(error);
      if(error.message === "Request failed with status code 404") {
        return {
          error: false,
          usernameAvailable: true
        }
      }
      else {
        return {
          error: true,
          usernameAvailable: false,
          errormessage: error.message
        }
      }
    })
  }
  else {
    return {
      error: true,
      usernameAvailable: false,
      errormessage: "username not provided"
    }
  }
};

exports.codechef = async (username) => {
  console.log("username ", username );
  if(username) 
  {
    await axios.head(urlList.codechef + username)
    .then((response) => {
      console.log(response.data);
      console.log(response.status);
      console.log(response.statusText);
      console.log(response.headers);
      console.log(response.config);
      console.log(response.request._redirectable._redirectCount);
      if(response.status === 200 && response.request._redirectable._redirectCount === 0) {
        return {
          error: false,
          usernameAvailable: false,
        }
      }
      else {
        return {
          error: true,
          usernameAvailable: false,
          errormessage: response.statusText
        }
      }
    })
    .catch(error => {
      console.log(error);
      if(error.message === "Request failed with status code 404") {
        return {
          error: false,
          usernameAvailable: true
        }
      }
      else {
        return {
          error: true,
          usernameAvailable: false,
          errormessage: error.message
        }
      }
    })
  }
  else {
    return {
      error: true,
      usernameAvailable: false,
      errormessage: "username not provided"
    }
  }
};