import React, { useState } from 'react';
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default function MainForm() {
  const [penname, setPenname] = useState("");

  const [buttonText, setButtonText] = useState("Go");

  // possible values of state are: default, available, unavailable, error
  const [medium, setMedium] = useState("default");
  const [atcoder, setAtcoder] = useState("default");
  const [codechef, setCodechef] = useState("default");
  const [gitlab, setGitlab] = useState("default");
  const [gitHub, setGitHub] = useState("default");
  const [codeforces, setCodeforces] = useState("default");
  const [hackerEarth, setHackerEarth] = useState("default");
  const [a2oj, setA2oj] = useState("default");
  const [leetCode, setLeetCode] = useState("default");

  const handleChange = (name) => (event) => {
    setPenname(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setButtonText("Processing ...");
    setMedium("default");
    setAtcoder("default");
    setCodechef("default");
    setGitlab("default");
    setGitHub("default");
    setCodeforces("default");
    setHackerEarth("default");
    setA2oj("default");
    setLeetCode("default");

    await axios({
      method: 'GET',
      url: `${process.env.REACT_APP_API}/medium?username=${penname}`,
    })
      .then((response) => {
        if(response.data.error) {
          setMedium("error");
        }
        else if (response.data.usernameAvailable) {
          setMedium("available");
        }
        else {
          setMedium("unavailable");
        }
      })
      .catch((error) => {
        setMedium("error");
      }) 

    await axios({
      method: 'GET',
      url: `${process.env.REACT_APP_API}/atcoder?username=${penname}`,
    })
      .then((response) => {
        if(response.data.error) {
          setAtcoder("error");
        }
        else if (response.data.usernameAvailable) {
          setAtcoder("available");
        }
        else {
          setAtcoder("unavailable");
        }
      })
      .catch((error) => {
        setAtcoder("error");
      }) 

    await axios({
      method: 'GET',
      url: `${process.env.REACT_APP_API}/codechef?username=${penname}`,
    })
      .then((response) => {
        if(response.data.error) {
          setCodechef("error");
        }
        else if (response.data.usernameAvailable) {
          setCodechef("available");
        }
        else {
          setCodechef("unavailable");
        }
      })
      .catch((error) => {
        setCodechef("error");
      })

    await axios({
      method: 'GET',
      url: `${process.env.REACT_APP_API}/gitlab?username=${penname}`,
    })
      .then((response) => {
        if(response.data.error) {
          setGitlab("error");
        }
        else if (response.data.usernameAvailable) {
          setGitlab("available");
        }
        else {
          setGitlab("unavailable");
        }
      })
      .catch((error) => {
        setGitlab("error");
      }) 

    await axios({
      method: 'GET',
      url: `${process.env.REACT_APP_API}/github?username=${penname}`,
    })
      .then((response) => {
        if(response.data.error) {
          setGitHub("error");
        }
        else if (response.data.usernameAvailable) {
          setGitHub("available");
        }
        else {
          setGitHub("unavailable");
        }
      })
      .catch((error) => {
        setGitHub("error");
      }) 

    await axios({
      method: 'GET',
      url: `${process.env.REACT_APP_API}/codeforces?username=${penname}`,
    })
      .then((response) => {
        if(response.data.error) {
          setCodeforces("error");
        }
        else if (response.data.usernameAvailable) {
          setCodeforces("available");
        }
        else {
          setCodeforces("unavailable");
        }
      })
      .catch((error) => {
        setCodeforces("error");
      }) 

    await axios({
      method: 'GET',
      url: `${process.env.REACT_APP_API}/hackerearth?username=${penname}`,
    })
      .then((response) => {
        if(response.data.error) {
          setHackerEarth("error");
        }
        else if (response.data.usernameAvailable) {
          setHackerEarth("available");
        }
        else {
          setHackerEarth("unavailable");
        }
      })
      .catch((error) => {
        setHackerEarth("error");
      }) 

    await axios({
      method: 'GET',
      url: `${process.env.REACT_APP_API}/a2oj?username=${penname}`,
    })
      .then((response) => {
        if(response.data.error) {
          setA2oj("error");
        }
        else if (response.data.usernameAvailable) {
          setA2oj("available");
        }
        else {
          setA2oj("unavailable");
        }
      })
      .catch((error) => {
        setA2oj("error");
      }) 

    await axios({
      method: 'GET',
      url: `${process.env.REACT_APP_API}/leetcode?username=${penname}`,
    })
      .then((response) => {
        if(response.data.error) {
          setLeetCode("error");
        }
        else if (response.data.usernameAvailable) {
          setLeetCode("available");
        }
        else {
          setLeetCode("unavailable");
        }
      })
      .catch((error) => {
        setLeetCode("error");
      }) 

      setButtonText("Go");
  };

  return (
    <div className="row m-0">
      <div className="col-md-6 mx-auto my-2 form-body">
        <div className="mt-2">
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label><h4 className="title">Pen Name</h4></Form.Label>
              <Form.Control type="text" placeholder="Enter your pen name" onChange={handleChange()} value={penname}/>
            </Form.Group>
            <Button variant="primary" type="submit" onClick={handleSubmit}>
              {buttonText}
            </Button>
          </Form>
        </div>
        <br />
        <div className="wrapper">
          <div className={medium}>Medium</div>
          <div className={atcoder}>AtCoder</div>
          <div className={codechef}>CodeChef</div>
          <div className={gitlab}>GitLab</div>
          <div className={gitHub}>GitHub</div>
          <div className={codeforces}>Codeforces</div>
          <div className={hackerEarth}>HackerEarth</div>
          <div className={a2oj}>A&#178; Online Judge</div>
          <div className={leetCode}>LeetCode</div>
        </div>
        <br />
        <div>
          <div>
            <button className="legend-default inline" title="legend-default" type="button">
            </button>
            <span> Default</span>
          </div>

          <div>
            <button className="legend-available inline" title="legend-available" type="button">
            </button>
            <span> Pen name is available to choose </span>
          </div>

          <div>
            <button className="legend-unavailable inline" title="legend-unavailable" type="button">
            </button>
            <span> Pen name is not available to choose</span>
          </div>

          <div>
            <button className="legend-error inline" title="legend-error" type="button">
            </button>
            <span> Error occured while processing</span>
          </div>

        </div>
      </div>
    </div>
  );
}


