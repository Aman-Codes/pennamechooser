import axios from 'axios';
import urlList from '../config/urlList';

const github = async (username) => {
  console.log("username ", username );
  if(username) 
  {
    await axios.head(urlList.github + username, {
      headers: {
        'Access-Control-Allow-Origin': "*",
      },
      })
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

const codechef = async (username) => {
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
      if(response.status === 200) {
        if(response.request._redirectable._redirectCount === 1) {
          return {
            error: false,
            usernameAvailable: true,
          }
        }
        else {
          return {
            error: false,
            usernameAvailable: false,
          }
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
      return {
        error: true,
        usernameAvailable: false,
        errormessage: error.message
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

export{
github,
codechef
}

