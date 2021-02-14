import Table from 'react-bootstrap/Table';

export default function MainTable() {
  return (
    <div className="row m-0">
      <div className="col-md-6 mx-auto">
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>Platform</th>
              <th>Pen Name Availablitiy</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>GitHub</td>
              <td>Yes</td>
            </tr>
          </tbody>
        </Table>
      </div>
    </div>

  );
}

