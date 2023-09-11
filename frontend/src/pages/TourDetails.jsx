import React, { useRef, useState } from 'react';
import '../styles/tour-details.css';
import { Container, Row, Col, Form, ListGroup } from 'reactstrap';
import { useParams } from 'react-router-dom';
import tourData from '../assets/data/tours';
import calculateAvgRating from '../utils/avgRating';
import avatar from '../assets/images/avatar.jpg';
import Booking from '../components/Booking/Booking';
import Newsletter from '../shared/Newsletter';
const TourDetails = () => {
  const { id } = useParams();
  const reviewMsgRef = useRef('');
  const [tourRating, setTourRating] = useState(null);
  //this is an static data later we will call our API and load our data from database
  const tour = tourData.find((tour) => tour.id === id);
  const {
    photo,
    title,
    desc,
    price,
    reviews,
    address,
    city,
    distance,
    maxGroupSize,
  } = tour;
  const { totalRation, avgRating } = calculateAvgRating(reviews);
  // format Date
  const options = { day: 'numeric', month: 'long', year: 'numeric' };
  //submit request to the serve
  const submitHandler = (e) => {
    e.preventDefault();
    const reviewText = reviewMsgRef.current.value;
    // 추후 api 연동
    console.log(reviewText);
    alert(`${reviewText}  ${tourRating !== null ? tourRating : ''}`);
  };
  return (
    <>
      <section>
        <Container>
          <Row>
            <Col lg='8'>
              <div className='tour__content'>
                <img src={photo} alt='' />
                <div className='tour__info'>
                  <h2>{title}</h2>
                  <div className=' d-flex align-items-center gap-5'>
                    <span className='tour__rating d-flex align-items-center gap-1'>
                      <i
                        class='ri-star-fill'
                        style={{ color: 'var(--secondary-color)' }}
                      ></i>
                      {avgRating === 0 ? null : avgRating}
                      {totalRation === 0 ? (
                        'Not rated'
                      ) : (
                        <span>({reviews?.length})</span>
                      )}
                    </span>
                    <span>
                      <i class='ri-map-pin-user-fill'></i> {address}
                    </span>
                  </div>

                  <div className='tour__extra-details'>
                    <span>
                      <i class='ri-map-pin-2-line'></i>
                      {city}
                    </span>
                    <span>
                      <i class='ri-money-dollar-circle-line'></i>${price} /per
                      person
                    </span>
                    <span>
                      <i class='ri-map-pin-time-line'></i>
                      {distance} K/m
                    </span>
                    <span>
                      <i class='ri-group-line'></i>
                      {maxGroupSize} people
                    </span>
                  </div>
                  <h5>Description</h5>
                  <p>{desc}</p>
                </div>
                {/* === tour reviews section start === */}
                <div className='tour__reviews mt-4'>
                  <h4>Reviews({reviews?.length} reviews)</h4>
                  <Form>
                    <div className='d-flex align-items-center gap-3 mb-4 rating__group'>
                      <span
                        onClick={() => setTourRating(1)}
                        className={tourRating >= 1 ? 'active__rating' : ''}
                      >
                        1 <i class='ri-star-s-fill'></i>
                      </span>
                      <span
                        onClick={() => setTourRating(2)}
                        className={tourRating >= 2 ? 'active__rating' : ''}
                      >
                        2 <i class='ri-star-s-fill'></i>
                      </span>
                      <span
                        onClick={() => setTourRating(3)}
                        className={tourRating >= 3 ? 'active__rating' : ''}
                      >
                        3 <i class='ri-star-s-fill'></i>
                      </span>
                      <span
                        onClick={() => setTourRating(4)}
                        className={tourRating >= 4 ? 'active__rating' : ''}
                      >
                        4 <i class='ri-star-s-fill'></i>
                      </span>
                      <span
                        onClick={() => setTourRating(5)}
                        className={tourRating >= 5 ? 'active__rating' : ''}
                      >
                        5 <i class='ri-star-s-fill'></i>
                      </span>
                    </div>
                    <div className='review__input'>
                      <input
                        type='text'
                        ref={reviewMsgRef}
                        placeholder='share yout thoughts'
                      />
                      <button
                        className='btn primary__btn text-white'
                        onClick={submitHandler}
                      >
                        submit
                      </button>
                    </div>
                  </Form>
                  <ListGroup className='user__reviews'>
                    {reviews?.map((review) => (
                      <div className='review__item'>
                        <img src={avatar} alt='' />
                        <div className='w-100'>
                          <div className='d-flex align-items-center justify-content-between'>
                            <div>
                              <h5>codeeats</h5>
                              {/* en-US , ko-KR */}
                              <p>
                                {new Date('11-09-2023').toLocaleDateString(
                                  'en-US',
                                  options
                                )}
                              </p>
                            </div>
                            <span className=' d-flex align-items-center'>
                              5<i class='ri-star-s-fill'></i>
                            </span>
                          </div>
                          <h6>Amazing tour</h6>
                        </div>
                      </div>
                    ))}
                  </ListGroup>
                </div>
                {/* === tour reviews section end === */}
              </div>
            </Col>
            <Col lg='4'>
              <Booking tour={tour} avgRating={avgRating} />
            </Col>
          </Row>
        </Container>
      </section>
      <Newsletter />
    </>
  );
};

export default TourDetails;
