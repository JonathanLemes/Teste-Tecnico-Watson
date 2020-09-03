import React from 'react';
import './ViewComments.css';

function ViewComments({sentence, id}) {
    return (
        <>
            <li>
                <div className="container-comment">
                    <span className="comment" id={id}>{sentence}</span>
                    <button type="submit" className="btn-listen">
                        <span className="btn-title">Ouvir</span>
                    </button>
                </div>
            </li>
        </>
    );
}

export default ViewComments;