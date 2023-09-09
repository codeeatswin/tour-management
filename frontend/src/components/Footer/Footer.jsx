import React from 'react';
import './footer.css';
import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap';
import logo from '../../assets/images/logo.png';
import { Link } from 'react-router-dom';

const quick__link = [
  {
    path: '/home',
    display: 'Home',
  },
  {
    path: '/about',
    display: 'About',
  },
  {
    path: '/tours',
    display: 'Tours',
  },
];
const quick__link2 = [
  {
    path: '/gallery',
    display: 'Gallery',
  },
  {
    path: '/login',
    display: 'Login',
  },
  {
    path: '/register',
    display: 'Register',
  },
];

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className='footer'>
      <Container>
        <Row>
          <Col lg='3'>
            <div className='logo'>
              <img src={logo} alt='' />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque,
                corrupti!
              </p>
              <div className=' social__links d-flex align-items-center gap-4'>
                <span>
                  <Link to='#'>
                    <i class='ri-youtube-line'></i>
                  </Link>
                </span>
                <span>
                  <Link to='#'>
                    <i class='ri-facebook-box-line'></i>
                  </Link>
                </span>
                <span>
                  <Link to='#'>
                    <i class='ri-twitter-line'></i>
                  </Link>
                </span>
                <span>
                  <Link to='#'>
                    <i class='ri-instagram-line'></i>
                  </Link>
                </span>
                <span>
                  <Link to='#'>
                    <i class='ri-github-fill'></i>
                  </Link>
                </span>
              </div>
            </div>
          </Col>
          <Col lg='3'>
            <h5 className='footer__link-title'>Discover</h5>
            <ListGroup className='footer__quick-links'>
              {quick__link.map((item, idx) => (
                <ListGroupItem key={idx} className='ps-0 border-0'>
                  <Link to={item.path}>{item.display}</Link>
                </ListGroupItem>
              ))}
            </ListGroup>
          </Col>
          <Col lg='3'>
            <h5 className='footer__link-title'>Quick Links</h5>
            <ListGroup className='footer__quick-links'>
              {quick__link2.map((item, idx) => (
                <ListGroupItem key={idx} className='ps-0 border-0'>
                  <Link to={item.path}>{item.display}</Link>
                </ListGroupItem>
              ))}
            </ListGroup>
          </Col>
          <Col lg='3'>
            <h5 className='footer__link-title'>Contact</h5>
            <ListGroup className='footer__quick-links'>
              <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-3'>
                <h6 className='mb-0 d-flex align-items-center gap-2'>
                  <span>
                    <i class='ri-map-pin-line'></i>
                  </span>
                  Address:
                </h6>
                <p className='mb-0'> south. korea</p>
              </ListGroupItem>
              <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-3'>
                <h6 className='mb-0 d-flex align-items-center gap-2'>
                  <span>
                    <i class='ri-mail-line'></i>
                  </span>
                  Email:
                </h6>
                <p className='mb-0'> Dev.@gmail.com</p>
              </ListGroupItem>
              <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-3'>
                <h6 className='mb-0 d-flex align-items-center gap-2'>
                  <span>
                    <i class='ri-phone-fill'></i>
                  </span>
                  Phone:
                </h6>
                <p className='mb-0'>+0123456789</p>
              </ListGroupItem>
            </ListGroup>
          </Col>
          <Col lg='12' className='text-center pt-5'>
            <div className="copyright">Copyright {year} , design and developer dev. All rights resrved</div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
