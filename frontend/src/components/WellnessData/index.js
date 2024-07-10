import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Button, Form, Row, Col } from 'react-bootstrap';
import axios from 'axios';
import './WellnessData.css';
import HealthMetrics from './HealthMetrics';
import BodyMeasurements from './BodyMeasurements';
import PersonalEvaluation from './PersonalEvaluation';

const WellnessData = () => {
  const navigate = useNavigate();
  const [beforeImageId, setBeforeImageId] = useState(localStorage.getItem('beforeImageId') || '');
  const [afterImageId, setAfterImageId] = useState(localStorage.getItem('afterImageId') || '');
  const [beforeImage, setBeforeImage] = useState(null);
  const [afterImage, setAfterImage] = useState(null);

  const handleGoBack = () => {
    navigate(-1);
  };

  const handleImageUpload = async (event, setImageId) => {
    const file = event.target.files[0];
    if (file) {
      const formData = new FormData();
      formData.append('file', file);

      try {
        const response = await axios.post('http://localhost:8080/images/upload', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
        const imageId = response.data.image_id;
        setImageId(imageId);
        localStorage.setItem(setImageId === setBeforeImageId ? 'beforeImageId' : 'afterImageId', imageId);
      } catch (error) {
        console.error('Error uploading image:', error);
      }
    }
  };

  useEffect(() => {
    const fetchImage = async (imageId, setImage) => {
      if (imageId) {
        try {
          const response = await axios.get(`http://localhost:8080/images/${imageId}`, {
            responseType: 'blob',
          });
          const imageUrl = URL.createObjectURL(response.data);
          setImage(imageUrl);
        } catch (error) {
          console.error('Error fetching image:', error);
        }
      }
    };

    fetchImage(beforeImageId, setBeforeImage);
    fetchImage(afterImageId, setAfterImage);
  }, [beforeImageId, afterImageId]);

  return (
    <div className="user-data-wrapper">
      <header className="user-data-header">SimpliFit: it's Simple to be Fit</header>
      <Container fluid className="user-data-container">
        <div className="py-4 px-3 shadow-lg user-data-res-box bg-white rounded-4">
          <div className='d-flex'>
            <Button 
              variant="outline-secondary" 
              onClick={handleGoBack} 
              className="mb-3"
            >
              &larr; Back
            </Button>
            <h2
              className="text-success font-weight-bold text-center mb-4 mx-auto"
            >
              Wellness Data
            </h2>
          </div>
          <HealthMetrics />
          <BodyMeasurements />
          <PersonalEvaluation />
          {/* // localhost:8080/images/upload    */}
          {/* New section for image upload and display */}
          <div className="mt-5">
            <h3 className="text-success mb-4">Progress Images</h3>
            <Row>
              <Col md={6}>
                <Form.Group controlId="beforeImage" className="mb-3">
                  <Form.Label>Before Image</Form.Label>
                  <Form.Control 
                    type="file" 
                    onChange={(e) => handleImageUpload(e, setBeforeImageId)} 
                    accept="image/*"
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group controlId="afterImage" className="mb-3">
                  <Form.Label>After Image</Form.Label>
                  <Form.Control 
                    type="file" 
                    onChange={(e) => handleImageUpload(e, setAfterImageId)} 
                    accept="image/*"
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row className="mt-4">
              <Col md={6}>
                {beforeImage && (
                  <div>
                    <h5>Before</h5>
                    <img src={beforeImage} alt="Before" className="img-fluid" />
                  </div>
                )}
              </Col>
              <Col md={6}>
                {afterImage && (
                  <div>
                    <h5>After</h5>
                    <img src={afterImage} alt="After" className="img-fluid" />
                  </div>
                )}
              </Col>
            </Row>
          </div>
        </div>
      </Container>

      <footer className="user-data-footer">© 2024 SimpliFit</footer>
    </div>
  );
};

export default WellnessData;