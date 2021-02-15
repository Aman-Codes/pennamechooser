const axios = require('axios');
const urlList = require('../config/urlList');

const leetcode = async (username) => {
  console.log("username ", username );
  var result = {};
  if(username) 
  {
    await axios.head(urlList.leetcode + username)
    .then((response) => {
      console.log(response.data);
      console.log(response.status);
      console.log(response.statusText);
      console.log(response.headers);
      console.log(response.config);
      console.log(response.request._redirectable._redirectCount);
      if(response.status === 200) {
        result = {
          error: false,
          usernameAvailable: false,
        };
      }
      else {
        result = {
          error: true,
          usernameAvailable: false,
          errormessage: response.statusText
        };
      }
    })
    .catch(error => {
      console.log(error);
      if(error.message === "Request failed with status code 404") {
        result = {
          error: false,
          usernameAvailable: true
        };
      }
      else {
        result = {
          error: true,
          usernameAvailable: false,
          errormessage: error.message
        };
      }
    })
  }
  else {
    result = {
      error: true,
      usernameAvailable: false,
      errormessage: "username not provided"
    };
  }
  console.log("result inside controller ", result);
  return result;
};

module.exports = leetcode;
