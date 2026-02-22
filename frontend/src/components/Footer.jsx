import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer>
      <Container>
        <Row>
          <Col className='text-center py-3'>
            <p>Greg's Webdev Practice &copy; 2023 - {currentYear}</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;