import React from 'react';
import './App.css';
import InsertComment from './components/InsertComment/InsertComment';
import ViewComments from './components/ViewComments/ViewComments';
import ScriptTag from 'react-script-tag';

function App() {
  return (
    <div className="App">
      <section className="container">
        <div className="column">
          <InsertComment />
        </div>
        <hr width="2" size="500" />
        <div className="column">
          <ViewComments />
        </div>
      </section>
    </div>
  );
}

export default App;
