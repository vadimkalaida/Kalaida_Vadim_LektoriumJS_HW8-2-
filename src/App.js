import React from 'react';
import './App.scss';
import ItemComponent from "./components/ItemComponent/ItemComponent";

function App() {
  return (
    <div className="App">
      <p className={'rightClickText'}>Mouse Right Click - delete item</p>
      <ItemComponent />
    </div>
  );
}

export default App;
