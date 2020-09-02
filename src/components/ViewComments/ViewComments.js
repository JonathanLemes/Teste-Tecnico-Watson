import React from 'react';
import './ViewComments.css';

function ViewComments() {
    var htmlComments = (
        <>
            <h3>Comentários</h3>
            <ul id="comments"></ul>
        </>
    );
    var commentDefault = (
        <>
            <li>
            <div className="container-comment">
            <span className="comment" id=""></span>
            <button type="submit" className="btn-listen" id="" onclick="">
                <span className="btn-title">Ouvir</span>
            </button>
            </div>
            </li>
        </>
    );
    return (
        htmlComments
    );
}

export default ViewComments;