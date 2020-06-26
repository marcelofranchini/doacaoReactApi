import React, { useState } from 'react'
import Header from '../../components/header'

export default function cadastroItemDoacao(e){
    const [nome, setNome] = useState("")
    const [descricao, setDescricao] = useState("")
    const info = JSON.stringify({nome, descricao})

    async function cadastrarItem(e){
        e.preventDefault()

        const resposta = await fetch('http://localhost:3000/itens',{
            method: 'POST',
            body: info,
            headers:{
                "Content-Type": "aplication/json"
            }


        })
        if(resposta.status === 201){
            alert('item cadastrado')
            setNome('')
            setDescricao('')
        }else{
            alert('erro')
        }


    }
    
    return (
        <form onSubmit={cadastrarItem} className="card p-5 my-5" >
            <div className="form-group">
                <label>Nome Item</label>
                <input type="text" 
                className="form-control" 
                name="nome" id="" 
                value={nome}
                onChange = {(e)=>{ setNome(e.target.value)   }}
                
                /> 
               
            </div>

            <div className="form-group">
                <label>Descricao Item</label>
                <input type="text"
                 className="form-control"
                  name="descricao" 
                  id="" 
                  value={descricao} 
                  onChange = {(e)=>{ setDescricao(e.target.value)   }}
                  
                  />
            </div>


        </form>
      );
}