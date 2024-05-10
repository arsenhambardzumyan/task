import React, { useState, useEffect } from 'react';
import './App.css';
import BankCardForm from './BankCardForm';
import ConvertInputs from './ConvertInputs';
import CardDisplay from "./CardDisplay";

function App() {
  const [savedCards, setSavedCards] = useState([]);

  useEffect(() => {
    const fetchSavedCards = async () => {
      try {
        const response = await fetch('/api/cards'); // Replace with actual endpoint
        const data = await response.json();
        setSavedCards(data);
      } catch (error) {
        console.error('Error fetching saved cards:', error);
      }
    };

    fetchSavedCards();
  }, []);

  return (
      <div className="App">
        <div className="container center">
          <h1 className="title">Пополнить банковской картой</h1>
          <ConvertInputs />
          <CardDisplay/>
          <BankCardForm />
        </div>
      </div>
  );
}

export default App;
