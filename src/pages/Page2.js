import React, { useState } from 'react'

export default function Page2() {
  const [arr,setArr] = useState({
    cadena: '',
    numero: 0
  })
  const [resultado,setResultado] = useState("")
  

  const handleChange = (e)=>{
    setArr({
      ...arr,
      [e.target.name]:e.target.value
    })
    textoRecortado()
  }

  const textoRecortado = ()=>{
    let recortado = ""
    for(let i = 0; i < arr.numero;i++){
        recortado += arr.cadena[i]
    } 

    setResultado(recortado)
  }

  return (
    <div style={{
      display: 'flex',
      flexWrap: 'wrap'
      }}>
      <div>
        <form style={{
          margin: '10px'
        }}>
        <div className="input-group flex-nowrap">
        <span className="input-group-text" id="addon-wrapping">
          Text
        </span>
        <input
          type="text"
          className="form-control"
          placeholder="Ingrese texto"
          aria-label="Username"
          aria-describedby="addon-wrapping"
          onChange={handleChange}
          name="cadena"
          
        />
      </div>

      <div className="input-group flex-nowrap">
        <span className="input-group-text" id="addon-wrapping">
          num
        </span>
        <input
          type="number"
          className="form-control"
          placeholder="Ingrese num de recortes"
          aria-label="Username"
          aria-describedby="addon-wrapping"
          onChange={handleChange}
          name="numero"
          
        />
      </div>
        </form>
      </div>
      <div className="resultado" style={{
          margin: '10px',
          color: 'white'
        }}>
        {resultado}
      </div>
    </div>
  );
}
