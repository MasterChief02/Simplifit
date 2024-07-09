import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import BodyMeasurementsForm from './components/BodyMeasurementsForm';
import PersonalEvaluationForm from './components/PersonalEvaluationForm';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/bmf" element={<BodyMeasurementsForm />} />
        <Route path="/pef" element={<PersonalEvaluationForm />} />
      </Routes>
    </Router>
  );
}

export default App;