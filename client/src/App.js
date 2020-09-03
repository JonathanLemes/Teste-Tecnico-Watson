import React, {Component} from 'react';
import './App.css';
import InsertComment from './components/InsertComment/InsertComment';
import ViewComments from './components/ViewComments/ViewComments';
import Request from 'axios-react';

class App extends Component {
  constructor(props){
    super(props);
    this.renderComments = this.renderComments.bind(this);
  }
  renderComments = (comments) => {
    var html = [];
    for (var i = 0; i < comments.length; i++) {
      html.push(
        <ViewComments sentence={comments[i].sentence} id={i} />
      )
    }
    var htmlFinal = (
      <section className="container">
        <div className="column">
          <InsertComment />
        </div>
        <hr width="2" size="500" />
        <div className="column">
          <h3>Comentários</h3>
          <ul id="comments">{html}</ul>
        </div>
      </section>
    )
    return htmlFinal;
  }

  render() {
    return (
      <div className="App">
        <Request
          config={{
            method: 'get',
            url: 'http://localhost:8080/',
          }}
        >
          {({ loading, response, error, refetch, networkStatus }) => (
            <div>
                {error && <span>{error.response.data}</span>}
                {response && <div id="response">{this.renderComments(response.data.res)}</div>}
            </div>
          )}
        </Request>
      </div>
    );
  }
}

export default App;