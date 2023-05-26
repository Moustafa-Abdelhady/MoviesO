import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, ListGroup } from 'react-bootstrap';

const TodoList = () => {
  const [newText, setNewText] = useState('');
  const [Text, setText] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setText([...Text, { text: newText, completed: false }]);
    setNewText(newText);
  };



  const handleClearText = () => {
  
    const newText = Text.filter((Text) => !Text);
    setText(newText);
  };

  return (
    <Container className="bg-dark text-white p-5  mt-5 d-flex flex-column justify-content-center align-items-center">
           
      <Row className='w-100'> 
        <Col className='d-flex justify-content-center align-items-center flex-column' >
          
          <Form onSubmit={handleSubmit} className='w-100 px-5 d-flex justify-content-center align-items-center flex-column'>
            <Form.Group controlId="newText" className='w-100 px-5 '>
              <Form.Control className='w-75 px-5  rounded-pill text-center'
                type="text"
                placeholder="Enter new Text"
                value={newText}
                onChange={(event) => setNewText(event.target.value)}
                required
              />
            </Form.Group><br/>
          
              <Button variant="success text-center" type="submit">
                Add New Text
              </Button>
                        </Form>
                        <ListGroup className="mt-4">
              {Text.map((Text, index) => (
                <ListGroup.Item
                  key={index}
                  className={Text.completed ? "text-decoration-line-through" : ""}
                >
                  {Text.text}
              
                </ListGroup.Item>
              ))}
                        </ListGroup>
                        <Button
              variant="success"
              className="mt-4"
              onClick={handleClearText}
                        >
              Clear Text
                        </Button>
          
        </Col>
      </Row>
    </Container>
  );
};

export default TodoList;