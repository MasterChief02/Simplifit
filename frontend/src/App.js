import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import BodyMeasurementsForm from './components/BodyMeasurementsForm';
import PersonalEvaluationForm from './components/PersonalEvaluationForm';
import HealthMetricsForm from './components/HealthMetricsForm';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './components/Navigation';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/bmf" element={<BodyMeasurementsForm />} />
        <Route path="/hmf" element={<HealthMetricsForm />} />
        <Route path="/pef" element={<PersonalEvaluationForm />} />
        <Route path="/navigation" element={<Navigation />} />
      </Routes>
    </Router>
  );
}

export default App;