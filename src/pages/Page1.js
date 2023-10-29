import React, { useState } from "react";

export default function Page1() {
  const [text,setTexto] = useState("")
  
  const handleChange = (e)=>{
    setTexto(e.target.value)
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
        </form>
      </div>
      <div className="resultado" style={{
          margin: '10px',
          color: 'white'
        }}>
        {text.length}
      </div>
    </div>
  );
}
