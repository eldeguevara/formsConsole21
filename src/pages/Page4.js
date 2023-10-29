import React,{useState} from 'react'

export default function Page4() {
  const [arr,setArr] = useState({
    precio: 0,
    descuento: 0
  })
  const [resultado,setResultado] = useState(0)
  
  const descuento = ()=>{
    let resultadoDescuento = (arr.precio * arr.descuento)/100
    let resultadoPrecioDescuento = arr.precio - resultadoDescuento
    setResultado(resultadoPrecioDescuento)
  }

  const handleChange = (e)=>{
    setArr({
      ...arr,
      [e.target.name]:e.target.value
    }
    )

    descuento()
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
          type="number"
          className="form-control"
          placeholder="Ingrese precio"
          aria-label="Username"
          aria-describedby="addon-wrapping"
          onChange={handleChange}
          name="precio"
          
        />
      </div>

      <div className="input-group flex-nowrap">
        <span className="input-group-text" id="addon-wrapping">
          Text
        </span>
        <input
          type="number"
          className="form-control"
          placeholder="Ingrese descuento"
          aria-label="Username"
          aria-describedby="addon-wrapping"
          onChange={handleChange}
          name="descuento"
          
        />
      </div>
        </form>
      </div>
      <div className="resultado" style={{
          margin: '10px',
          color: 'white'
        }}>
        {
          resultado
        }
      </div>
    </div>
  );
}
