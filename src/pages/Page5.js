import React,{useState} from 'react'

export default function Page5() {
  const [date,setDate] = useState(new Date())
  const [edad,setEdad] = useState(0)
  
  const calcularEdad = ()=>{
    let fechaActual = new Date()
    let resultadoEdad = fechaActual.getFullYear() - date.getFullYear()
    let mesNacimiento = date.getMonth()
    let mesActual = fechaActual.getMonth()
    let diaNacimiento = date.getDate()
    let diaActual = fechaActual.getDate()

    if(mesActual < mesNacimiento || (mesActual === mesNacimiento && diaActual < diaNacimiento)){
        setEdad(resultadoEdad-1)
    }else{
        setEdad(resultadoEdad)
    }
  }

  const handleChange = (e)=>{
    setDate(new Date(e.target.value))
    calcularEdad()
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
          type="date"
          className="form-control"
          placeholder="fecha de nacimiento"
          aria-label="Username"
          aria-describedby="addon-wrapping"
          onChange={handleChange}
          name="fecha"
          
        />
      </div>
        </form>
      </div>
      <div className="resultado" style={{
          margin: '10px',
          color: 'white'
        }}>
        {edad+" years"}
      </div>
    </div>
  );
}
