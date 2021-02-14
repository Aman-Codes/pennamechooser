import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default function MainForm() {
  return (
    <div className="row m-0">
      <div className="col-md-6 mx-auto my-5">
        <div>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>PenName</Form.Label>
              <Form.Control type="text" placeholder="Enter your pen name" />
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
        <div class="wrapper">
          <div>Medium</div>
          <div>AtCoder</div>
          <div>CodeChef</div>
          <div>GitLab</div>
          <div>GitHub</div>
          <div>Codeforces</div>
          <div>HackerEarth</div>
          <div>A&#178; Online Judge</div>
          <div>LeetCode</div>
        </div>

      </div>
    </div>

  );
}


