import React from 'react';
import './InsertComment.css';

function InsertComment() {
    function insertComment() {

    }

    return (
        <>
            <h3>Comentário</h3>
            <textarea cols="20" rows="10" className="text-area" />
            <button type="submit" className="btn-insert" onClick={insertComment}>Cadastrar</button>
        </>
    );
}

export default InsertComment;