import React from 'react';
import './App.css';
import {Component} from "src/03-react-i18next/03-Component";
import {useTranslation} from "react-i18next";

function App() {
    const {i18n} = useTranslation()
  return (
    <div className="App">
        <button onClick={() => i18n.changeLanguage("de")}>de</button>
        <button onClick={() => i18n.changeLanguage("en")}>en</button>
        <Component />
    </div>
  );
}

export default App;
