import React, { useState, useEffect } from 'react';
import { Card, ListGroup } from 'react-bootstrap';
import axios from 'axios';

const PersonalEvaluation = () => {
  const [evaluation, setEvaluation] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/personalevaluation');
        const userEvaluation = response.data.filter(evaluation => evaluation.user.i === 1).slice(-1)[0];
        setEvaluation(userEvaluation);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  if (!evaluation) return null;

  const booleanToYesNo = (value) => value ? 'Yes' : 'No';

  return (
    <Card className="mb-4 border-success">
      <Card.Header className="bg-success text-white">
        <h2>Personal Evaluation</h2>
      </Card.Header>
      <Card.Body>
        <ListGroup variant="flush">
          <ListGroup.Item><strong>Favorite Snacks:</strong> {evaluation.favoriteSnacks || 'Not specified'}</ListGroup.Item>
          <ListGroup.Item><strong>Breakfast:</strong> {evaluation.breakfast || 'Not specified'}</ListGroup.Item>
          <ListGroup.Item><strong>Daily Water Intake:</strong> {evaluation.dailyWater || 'Not specified'}</ListGroup.Item>
          <ListGroup.Item><strong>Diet Type:</strong> {evaluation.vegNonVeg || 'Not specified'}</ListGroup.Item>
          <ListGroup.Item><strong>Lunch:</strong> {evaluation.lunch || 'Not specified'}</ListGroup.Item>
          <ListGroup.Item><strong>Eating Out:</strong> {evaluation.eatingOut || 'Not specified'}</ListGroup.Item>
          <ListGroup.Item><strong>Exercise:</strong> {evaluation.walkExercise || 'Not specified'}</ListGroup.Item>
          <ListGroup.Item><strong>Dinner:</strong> {evaluation.dinner || 'Not specified'}</ListGroup.Item>
          <ListGroup.Item><strong>Surgery:</strong> {evaluation.surgery || 'Not specified'}</ListGroup.Item>
          <ListGroup.Item><strong>Stress Level:</strong> {evaluation.stress || 'Not specified'}</ListGroup.Item>
          <ListGroup.Item><strong>Cravings:</strong> {evaluation.cravings || 'Not specified'}</ListGroup.Item>
          <ListGroup.Item><strong>Coffee/Tea/Soda:</strong> {evaluation.coffeeTeaSoda || 'Not specified'}</ListGroup.Item>
          <ListGroup.Item><strong>Bleeding Gums:</strong> {booleanToYesNo(evaluation.bleedingGums)}</ListGroup.Item>
          <ListGroup.Item><strong>Daytime Sleepiness/Laziness:</strong> {booleanToYesNo(evaluation.dayTimeSleepingLazy)}</ListGroup.Item>
          <ListGroup.Item><strong>Night Sleep Frequent Urination:</strong> {booleanToYesNo(evaluation.nightSleepFrequentUrination)}</ListGroup.Item>
          <ListGroup.Item><strong>Dandruff/Hair Fall:</strong> {booleanToYesNo(evaluation.dandruffHairFall)}</ListGroup.Item>
          <ListGroup.Item><strong>Motion Problem:</strong> {booleanToYesNo(evaluation.motionProblem)}</ListGroup.Item>
          <ListGroup.Item><strong>Acidity/Gastric:</strong> {booleanToYesNo(evaluation.acidityGastric)}</ListGroup.Item>
          <ListGroup.Item><strong>Body Pain:</strong> {booleanToYesNo(evaluation.bodyPain)}</ListGroup.Item>
          <ListGroup.Item><strong>Asthma/Wheezing/Breathlessness:</strong> {booleanToYesNo(evaluation.asthmaWheezingBreathlessness)}</ListGroup.Item>
          <ListGroup.Item><strong>Sneezing/Dust Allergy:</strong> {booleanToYesNo(evaluation.sneezingDustAllergy)}</ListGroup.Item>
          <ListGroup.Item><strong>Skin Problem:</strong> {booleanToYesNo(evaluation.skinProblem)}</ListGroup.Item>
          <ListGroup.Item><strong>Regular Medication:</strong> {booleanToYesNo(evaluation.regularMedication)}</ListGroup.Item>
          {evaluation.regularMedication && (
            <ListGroup.Item><strong>Medication For:</strong> {evaluation.medicationForWhat || 'Not specified'}</ListGroup.Item>
          )}
        </ListGroup>
      </Card.Body>
    </Card>
  );
};

export default PersonalEvaluation;