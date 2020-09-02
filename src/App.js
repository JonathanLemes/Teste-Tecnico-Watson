import React from 'react';
import './App.css';
import InsertComment from './components/InsertComment/InsertComment';
import ViewComments from './components/ViewComments/ViewComments';

function App() {
  return (
    <div className="App">
      <head>
      <meta charset="UTF-8" />
    </head>
    <body>
      <section class="container">
        <div class="column">
          <InsertComment />
        </div>
        <hr width="2" size="500" />
        <div class="column">
          <ViewComments />
        </div>
      </section>    
    </body>
    </div>
  );
}

export default App;
