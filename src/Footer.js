import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';
import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Spinner from 'react-bootstrap/Spinner';
import './App.css';

export const Footer = () => {
  return (
    <div>
      <Container>
      <Row md={4} className='xyz'>
        <Col>1 of 3</Col>
        <Col xs={6}>2 of 3</Col>
        <Col>3 of 3</Col>
      </Row>
    </Container>
   
    <>
      <Button variant="primary" className='abc'>Primary</Button>
      <Button variant="secondary" className='abc'>Secondary</Button>
      <Button variant="success" className='abc'>Success</Button>
      <Button variant="warning" className='abc'>Warning</Button>
      <Button variant="danger" className='abc'>Danger</Button>
      <Button variant="info" className='abc'>Info</Button>
      <Button variant="light" className='abc'>Light</Button>
      <Button variant="dark" className='abc'>Dark</Button>
      <Button variant="link">Link</Button>
    </>
  </div>
  )
}
