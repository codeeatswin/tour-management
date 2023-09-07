import React from 'react';
import ServiceCard from './ServiceCard';
import { Col } from 'reactstrap';

import weatherImg from '../assets/images/weather.png';
import guideImg from '../assets/images/guide.png';
import customizationImg from '../assets/images/customization.png';

const serviceData = [
  {
    imgUrl: weatherImg,
    title: 'Calculate Weather',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },
  {
    imgUrl: guideImg,
    title: 'Best Tour Guide',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },
  {
    imgUrl: customizationImg,
    title: 'Customization',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },
];

const ServiceList = () => {
  return <>
 { serviceData.map((item,idx)=>(
    <Col lg='3'  key={idx} >
    <ServiceCard item={item}/>
    </Col>
 ))}
  </>
};

export default ServiceList;
