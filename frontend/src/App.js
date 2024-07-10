import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import BodyMeasurementsForm from './components/BodyMeasurementsForm';
import PersonalEvaluationForm from './components/PersonalEvaluationForm';
import HealthMetricsForm from './components/HealthMetricsForm';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './components/Navigation';
import Tracker from './components/Tracker';
import './App.css'
import WellnessData from './components/WellnessData';
import Tracker from './components/Tracker';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/bmf" element={<BodyMeasurementsForm />} />
        <Route path="/hmf" element={<HealthMetricsForm />} />
        <Route path="/pef" element={<PersonalEvaluationForm />} />
        <Route path="/wellness" element={<WellnessData />} />
        <Route path="/navigation" element={<Navigation />} />
        <Route path="/tracker" element={<Tracker />} />
      </Routes>
    </Router>
  );
}

export default App;