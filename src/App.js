import './App.css';
import {Description,Image,Name,Price} from "./components/products/index";
import Card from 'react-bootstrap/Card';
import image from "./assets/image.png"
import ListGroup from 'react-bootstrap/ListGroup';
function App() {
  let name; // name === undefined
  name = "rayen";
  return (
    <>
      <Card style={{ width: '18rem' }}>
      <Image />
      <Card.Body>
        <Card.Title><Name /></Card.Title>
        <Card.Text>
        <Description />
        </Card.Text>
      </Card.Body>
      <Card.Body>
        <Card.Link href="#"><Price /></Card.Link>
        <Card.Footer> {name !== undefined ? `Bonjour ${name}` : "Hello, there!"  } </Card.Footer>
        {name && <Card.Img src={image} />}
      </Card.Body>
    </Card>


    </>
  );
}

export default App;
