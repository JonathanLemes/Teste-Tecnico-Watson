import React, { Component } from 'react';
import './ViewComments.css';
import ReactAudioPlayer from 'react-audio-player';
import axios from 'axios';

class ViewComments extends Component {
    constructor(props){
        super(props);
        this.componentDidMount = this.componentDidMount.bind(this);
        this.state = { returnData: null }
    }

    async componentDidMount() {
        var html = [];
        await axios.get(`http://localhost:8080/`, {})
        .then((response) => {
            html = response.data.res;
        })
        .catch((err) => {
            console.log(err);
        });
        this.setState({ returnData: html });
    }
    
    render() {
        const html = this.state.returnData;
        if (html !== null) {
            const htmlFinal = html.map(function (item, i) {
                return (
                    <li key={i}>
                        <div className="container-comment">
                            <span className="comment" id={i}>{item.sentence}</span>
                            <ReactAudioPlayer
                                src={`http://localhost:8080/audios/?timestamp=${item.timestamp}`}
                                controls
                            />
                        </div>
                    </li>
                )
            });
            return (
            <>{htmlFinal}</>
            );
        } else {
            return (
                <></>
            );
        }
    }
}

export default ViewComments;