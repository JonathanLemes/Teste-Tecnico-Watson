import React, {Component} from 'react';
import './InsertComment.css';
import axios from 'axios';
import configs from '../../configs.json';

class InsertComment extends Component {
    constructor(props){
        super(props);
        this.state = {
               sentence: '',
               isLoading: false,
        };
        this.insertComment = this.insertComment.bind(this);
    }

    insertComment = () => {
        if (this.state.sentence !== '') {
            axios.post(`http://localhost:${configs.expressServerPort}/insert?sentence=${this.state.sentence}`, {})
            .then((response) => {
                this.setState({ sentence: '', isLoading: false });
            })
            .catch((err) => {
                this.setState({ data: err, isLoading: false });
            });
        }
    }

    render() {
        return (<>
            <h3>Comentário</h3>
            <textarea cols="20" rows="10" className="text-area" value = {this.state.sentence}
                onChange={(event)=>{
                    this.setState({
                        sentence: event.target.value
                    });
                }} 
            />
            <button type="submit" className="btn-insert" disabled={this.state.isLoading} onClick={this.insertComment}>Cadastrar</button>
        </>)
    }
}

export default InsertComment;