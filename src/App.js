import './App.css';
import Form from 'react-bootstrap/Form'
import Navbar from 'react-bootstrap/Navbar'
import LoginForm from './components/login-form';
import SubmitButton from './components/submit-button';
import Nav from 'react-bootstrap/Nav'

function App() {
  return (
    <div className="App">
      <section>
      <Nav variant="pills" defaultActiveKey="/home" class="nav">
  <Nav.Item>
    <Nav.Link href="/home">Home</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="link-1">Features</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="About" disabled>
      Disabled
    </Nav.Link>
  </Nav.Item>
</Nav>
      </section>
     
      <div class="container">
      <h3>
       Log In
     </h3>
      <Form>
  <Form.Group className="mb-3" controlId="formGroupEmail">
    <Form.Label>Username</Form.Label>
    <Form.Control type="email" placeholder="Enter username" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formGroupPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
</Form>
<SubmitButton />
</div>
    </div>
  );
}

export default App;
