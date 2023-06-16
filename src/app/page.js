'use client'

import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import { motion } from 'framer-motion';
import Cards from './CardGrid';
import './index.css';
import NavigationBar from './NavigationBar';

const App = () => {
  return (
    <Router>
      <div className="App">
      <motion.section
              className="pClass"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
            </motion.section>
      <NavigationBar />
              <Cards />
      </div>
    </Router>
  );
};

export default App;

// generate a boilerplate for a React a

