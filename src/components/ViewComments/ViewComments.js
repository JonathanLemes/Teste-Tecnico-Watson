import React from 'react';
import './ViewComments.css';
import mysql from 'mysql';

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
            <div class="container-comment">
            <span class="comment" id=""></span>
            <button type="submit" class="btn-listen" id="" onclick="">
                <span class="btn-title">Ouvir</span>
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