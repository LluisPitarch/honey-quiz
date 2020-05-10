import React from 'react';
import './styles/honeyproduct.css'

class HoneyProduct extends React.Component {
    state = {  }
    render() { 
        return ( 
            <div className="honey__container">
                <a href="https://www.lasdehesasmiel.com/producto/miel-de-romero/">
                <div style={{background: "#15526B", borderRadius: "7px", width:"85%", margin: "50px auto"}}>
                    
                    <div className="prod-div-container" id="container">

                        <div className="prod-img-container">
                            <img className="shake-animation" src="https://www.lasdehesasmiel.com/wp-content/uploads/2020/03/romero.png" alt="romero - tienda" title="tienda" />
                        </div>

                        <div>
  	                    <h3 className="producto-title"> Miel de Romero</h3>
                            <p className="producto-price">
                                Precio: 8,10€
                            </p> 
                            <a className="link__comprar" href="https://www.lasdehesasmiel.com/producto/miel-de-romero/">
                                <span className="btn__comprar">
                                    Comprar
                                </span> 
                            </a>
                        </div>
                    </div>
  
                </div>
                </a>
            </div>
         );
    }
}
 
export default HoneyProduct;