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
  const [leetCode, setLeetCode] = useState("default");
  const [behance, setBehance] = useState("default");
  const [devto, setDevto] = useState("default");
  const [instagram, setInstagram] = useState("default");
  const [pinterest, setPinterest] = useState("default");
  const [bitbucket, setBitbucket] = useState("default");
  const [interviewbit, setInterviewbit] = useState("default");
  const [facebook, setFacebook] = useState("default");
  const [codewars, setCodewars] = useState("default");
  const [freecodecamp, setFreecodecamp] = useState("default");
  const [twitter, setTwitter] = useState("default");
  const [quora,setQuora] = useState("default");

  const handleChange = (name) => (event) => {
    setPenname(event.target.value);
  };

  const checkMedium = async (PenName) => {
    await axios({
      method: 'GET',
      url: `${process.env.REACT_APP_API}/medium?username=${PenName}`,
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
  }

  const checkAtCoder = async (PenName) => {
    await axios({
      method: 'GET',
      url: `${process.env.REACT_APP_API}/atcoder?username=${PenName}`,
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
  }

  const checkCodechef = async (PenName) => {
    await axios({
      method: 'GET',
      url: `${process.env.REACT_APP_API}/codechef?username=${PenName}`,
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
  }

  const checkGitlab = async (PenName) => {
    await axios({
      method: 'GET',
      url: `${process.env.REACT_APP_API}/gitlab?username=${PenName}`,
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
  }

  const checkGithub = async (PenName) => {
    await axios({
      method: 'GET',
      url: `${process.env.REACT_APP_API}/github?username=${PenName}`,
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
  }

  const checkCodeforces = async (PenName) => {
    await axios({
      method: 'GET',
      url: `${process.env.REACT_APP_API}/codeforces?username=${PenName}`,
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
  }

  const checkHackerEarth = async (PenName) => {
    await axios({
      method: 'GET',
      url: `${process.env.REACT_APP_API}/hackerearth?username=${PenName}`,
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
  }

  const checkLeetcode = async (PenName) => {
    await axios({
      method: 'GET',
      url: `${process.env.REACT_APP_API}/leetcode?username=${PenName}`,
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
  }

  const checkBehance = async (PenName) => {
    await axios({
      method: 'GET',
      url: `${process.env.REACT_APP_API}/behance?username=${PenName}`,
    })
      .then((response) => {
        if(response.data.error) {
          setBehance("error");
        }
        else if (response.data.usernameAvailable) {
          setBehance("available");
        }
        else {
          setBehance("unavailable");
        }
      })
      .catch((error) => {
        setBehance("error");
      }) 
  }

  const checkDevto = async (PenName) => {
    await axios({
      method: 'GET',
      url: `${process.env.REACT_APP_API}/devto?username=${PenName}`,
    })
      .then((response) => {
        if(response.data.error) {
          setDevto("error");
        }
        else if (response.data.usernameAvailable) {
          setDevto("available");
        }
        else {
          setDevto("unavailable");
        }
      })
      .catch((error) => {
        setDevto("error");
      }) 
  }

  const checkInstagram = async (PenName) => {
    await axios({
      method: 'GET',
      url: `${process.env.REACT_APP_API}/instagram?username=${PenName}`,
    })
      .then((response) => {
        if(response.data.error) {
          setInstagram("error");
        }
        else if (response.data.usernameAvailable) {
          setInstagram("available");
        }
        else {
          setInstagram("unavailable");
        }
      })
      .catch((error) => {
        setInstagram("error");
      }) 
  }

  const checkPinterest = async (PenName) => {
    await axios({
      method: 'GET',
      url: `${process.env.REACT_APP_API}/pinterest?username=${PenName}`,
    })
      .then((response) => {
        if(response.data.error) {
          setPinterest("error");
        }
        else if (response.data.usernameAvailable) {
          setPinterest("available");
        }
        else {
          setPinterest("unavailable");
        }
      })
      .catch((error) => {
        setPinterest("error");
      }) 
  }

  const checkBitbucket = async (PenName) => {
    await axios({
      method: 'GET',
      url: `${process.env.REACT_APP_API}/bitbucket?username=${PenName}`,
    })
      .then((response) => {
        if(response.data.error) {
          setBitbucket("error");
        }
        else if (response.data.usernameAvailable) {
          setBitbucket("available");
        }
        else {
          setBitbucket("unavailable");
        }
      })
      .catch((error) => {
        setBitbucket("error");
      }) 
  }

  const checkInterviewbit = async (PenName) => {
    await axios({
      method: 'GET',
      url: `${process.env.REACT_APP_API}/interviewbit?username=${PenName}`,
    })
      .then((response) => {
        if(response.data.error) {
          setInterviewbit("error");
        }
        else if (response.data.usernameAvailable) {
          setInterviewbit("available");
        }
        else {
          setInterviewbit("unavailable");
        }
      })
      .catch((error) => {
        setInterviewbit("error");
      }) 
  }

  const checkFacebook = async (PenName) => {
    await axios({
      method: 'GET',
      url: `${process.env.REACT_APP_API}/facebook?username=${PenName}`,
    })
      .then((response) => {
        if(response.data.error) {
          setFacebook("error");
        }
        else if (response.data.usernameAvailable) {
          setFacebook("available");
        }
        else {
          setFacebook("unavailable");
        }
      })
      .catch((error) => {
        setFacebook("error");
      }) 
  }

  const checkCodewars = async (PenName) => {
    await axios({
      method: 'GET',
      url: `${process.env.REACT_APP_API}/codewars?username=${PenName}`,
    })
      .then((response) => {
        if(response.data.error) {
          setCodewars("error");
        }
        else if (response.data.usernameAvailable) {
          setCodewars("available");
        }
        else {
          setCodewars("unavailable");
        }
      })
      .catch((error) => {
        setCodewars("error");
      }) 
  }

  const checkFreecodecamp = async (PenName) => {
    await axios({
      method: 'GET',
      url: `${process.env.REACT_APP_API}/freecodecamp?username=${PenName}`,
    })
      .then((response) => {
        if(response.data.error) {
          setFreecodecamp("error");
        }
        else if (response.data.usernameAvailable) {
          setFreecodecamp("available");
        }
        else {
          setFreecodecamp("unavailable");
        }
      })
      .catch((error) => {
        setFreecodecamp("error");
      }) 
  }

  const checkTwitter = async (PenName) => {
    await axios({
      method: 'GET',
      url: `${process.env.REACT_APP_API}/twitter?username=${PenName}`,
    })
      .then((response) => {
        if(response.data.error) {
          setTwitter("error");
        }
        else if (response.data.usernameAvailable) {
          setTwitter("available");
        }
        else {
          setTwitter("unavailable");
        }
      })
      .catch((error) => {
        setTwitter("error");
      }) 
  }

  const checkQuora = async (PenName) => {
    await axios({
      method: 'GET',
      url: `${process.env.REACT_APP_API}/qoura?username=${PenName}`,
    })
      .then((response) => {
        if(response.data.error) {
          setQuora("error");
        }
        else if (response.data.usernameAvailable) {
          setQuora("available");
        }
        else {
          setQuora("unavailable");
        }
      })
      .catch((error) => {
        setQuora("error");
      }) 
  }


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
    setLeetCode("default");
    setBehance("default");
    setDevto("default");
    setInstagram("default");
    setPinterest("default");
    setBitbucket("default");
    setInterviewbit("default");
    setFacebook("default");
    setCodewars("default");
    setFreecodecamp("default");
    setTwitter("default");
    setQuora("default");


    Promise.all([
      checkMedium(penname),
      checkAtCoder(penname),
      checkCodechef(penname),
      checkGitlab(penname),
      checkGithub(penname),
      checkCodeforces(penname),
      checkHackerEarth(penname),
      checkLeetcode(penname),
      checkBehance(penname),
      checkDevto(penname),
      checkInstagram(penname),
      checkPinterest(penname),
      checkBitbucket(penname),
      checkInterviewbit(penname),
      checkFacebook(penname),
      checkCodewars(penname),
      checkFreecodecamp(penname),
      checkTwitter(penname),
      checkQuora(penname)
    ])
    .then(() => {
      setButtonText("Go");
    })
    .catch(() => {
      setButtonText("Go");
    })    
  };

  return (
    <div className="row mt-5">
      <div className="col-lg-8 mx-auto my-2 form-body">
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
          <a href="https://medium.com/" target="_blank" rel="noreferrer noopener" className={medium}><div>Medium</div></a>
          <a href="https://atcoder.jp/" target="_blank" rel="noreferrer noopener" className={atcoder}><div>AtCoder</div></a>
          <a href="https://www.codechef.com/" target="_blank" rel="noreferrer noopener" className={codechef}><div>CodeChef</div></a>
          <a href="https://gitlab.com/" target="_blank" rel="noreferrer noopener" className={gitlab}><div>GitLab</div></a>
          <a href="https://github.com/" target="_blank" rel="noreferrer noopener" className={gitHub}><div>GitHub</div></a>
          <a href="https://codeforces.com/" target="_blank" rel="noreferrer noopener" className={codeforces}><div>Codeforces</div></a>
          <a href="https://www.hackerearth.com/" target="_blank" rel="noreferrer noopener" className={hackerEarth}><div>HackerEarth</div></a>
          <a href="https://leetcode.com/" target="_blank" rel="noreferrer noopener" className={leetCode}><div>LeetCode</div></a>
          <a href="https://www.behance.net/" target="_blank" rel="noreferrer noopener" className={behance}><div>Behance</div></a>
          <a href="https://dev.to/" target="_blank" rel="noreferrer noopener" className={devto}><div>Dev Community</div></a>
          <a href="https://www.instagram.com/" target="_blank" rel="noreferrer noopener" className={instagram}><div>Instagram</div></a>
          <a href="https://in.pinterest.com/" target="_blank" rel="noreferrer noopener" className={pinterest}><div>Pinterest</div></a>
          <a href="https://bitbucket.org/" target="_blank" rel="noreferrer noopener" className={bitbucket}><div>Bitbucket</div></a>         
          <a href="https://www.interviewbit.com/" target="_blank" rel="noreferrer noopener" className={interviewbit}><div>Interviewbit</div></a>          
          <a href="https://www.facebook.com/" target="_blank" rel="noreferrer noopener" className={facebook}><div>Facebook</div></a>
          <a href="https://in.pinterest.com/" target="_blank" rel="noreferrer noopener" className={pinterest}><div>Pinterest</div></a>          
          <a href="https://forum.freecodecamp.org/" target="_blank" rel="noreferrer noopener" className={freecodecamp}><div>freeCodeCamp</div></a>          
          <a href="https://www.codewars.com" target="_blank" rel="noreferrer noopener" className={codewars}><div>Codewars</div></a>          
          <a href="https://twitter.com/" target="_blank" rel="noreferrer noopener" className={twitter}><div>Twitter</div></a>
          <a href="https://quora.com/" target="_blank" rel="noreferrer noopener" className={quora}><div>Quora</div></a>              
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
