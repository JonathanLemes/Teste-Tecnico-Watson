import React from 'react';
import './InsertComment.css';

function InsertComment() {
    return (
        <>
            <h3>Comentário</h3>
            <textarea name="Caixa de Texto" id="caixaTexto" cols="30" rows="10" class="text-area" />
            <button type="submit" class="btn-insert" onclick="cadastrar()">
                <span class="btn-title">Cadastrar</span>          
            </button>
        </>
    );
}

export default InsertComment;