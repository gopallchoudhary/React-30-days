import React, { useState } from "react";
import "./App.css";

function Ten() {
  const quotes = [
    "The best way to predict the future is to create it. – Peter Drucker",
    "Success is not final, failure is not fatal: It is the courage to continue that counts. – Winston Churchill",
    "In the end, we will remember not the words of our enemies, but the silence of our friends. – Martin Luther King Jr.",
    "What lies behind us and what lies before us are tiny matters compared to what lies within us. – Ralph Waldo Emerson",
    "Your time is limited, don’t waste it living someone else’s life. – Steve Jobs",
    "It always seems impossible until it’s done. – Nelson Mandela",
    "Strive not to be a success, but rather to be of value. – Albert Einstein",
    "Believe you can and you’re halfway there. – Theodore Roosevelt",
    "Don’t watch the clock; do what it does. Keep going. – Sam Levenson",
    "The only way to do great work is to love what you do. – Steve Jobs",
  ];
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const quote = quotes[randomIndex]

  return (
    <div>
      <h1 className="text-4xl font-semibold text-orange-500 italic">
        {quote}
      </h1>
    </div>
  );
}

export default Ten;
