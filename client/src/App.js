import React, {Component} from 'react';
import './App.css';
import InsertComment from './components/InsertComment/InsertComment';
import ViewComments from './components/ViewComments/ViewComments';

class App extends Component {
  constructor(props){
    super(props);
    this.refresh = this.refresh.bind(this);
  }

  refresh = () => {
    setTimeout(() => {
      window.location.reload();
    }, 1500);
  }

  render() {
    return (
      <div className="App">
        <section className="container">
        <div className="column">
          <InsertComment />
        </div>
        <hr width="2" size="500" />
        <div className="column">
          <h3>Comentários<button type="submit" className="btn-refresh" title="Recarregar" onClick={this.refresh}>⟳</button></h3>
          <ul id="comments">
            <ViewComments/>
          </ul>
        </div>
      </section>
      </div>
    );
  }
}

export default App;