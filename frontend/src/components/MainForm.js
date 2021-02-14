import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { github, codechef } from '../controllers/findUserName';

export default function MainForm() {
  const [penname, setPenname] = useState("");

  const handleChange = (name) => (event) => {
    console.log("Inside handle change ", event.target.value);
    setPenname(event.target.value);
  };
  return (
    <div className="row m-0">
      <div className="col-md-6 mx-auto my-5">
        <div>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>PenName</Form.Label>
              <Form.Control type="text" placeholder="Enter your pen name" onChange={handleChange()} value={penname}/>
            </Form.Group>
            {/* <Button variant="primary" type="submit">
              Go
            </Button> */}
          </Form>
        </div>
        <br />
        {/* <div className="row">
        <Button variant="info" style={{"width": "7em","height": "8em"}}>Medium</Button>{' '}
        <Button variant="info">GitHub</Button>{' '}<br/>
        <Button variant="info">GitLab</Button>{' '}<br/><br/>
        <Button variant="info">CodeChef</Button>{' '}
        <Button variant="info">Codeforces</Button>{' '}
        <Button variant="info">LeetCode</Button>{' '}<br/><br/>
        <Button variant="info">HackerEarth</Button>{' '}
        <Button variant="info">AtCoder</Button>{' '}
        <Button variant="info">A<sup>2</sup> Online Judge</Button>{' '}        
        </div> */}
        <div className="wrapper">
          <div>Medium</div>
          <div>AtCoder</div>
          <div onClick={() => codechef(penname)}>CodeChef</div>
          <div>GitLab</div>
          <div onClick={() => github(penname)}>GitHub</div>
          <div>Codeforces</div>
          <div>HackerEarth</div>
          <div>A&#178; Online Judge</div>
          <div>LeetCode</div>
        </div>

      </div>
    </div>

  );
}


