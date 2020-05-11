import React from 'react';
import './styles/honeyproduct.css'

class HoneyProduct extends React.Component {
    render() { 
        const honey = this.props.product
        return ( 
            <div className="honey__container">
                <a href={honey.url}>
                <div style={{background: honey.color, borderRadius: "7px", width:"85%", margin: "50px auto"}}>
                    
                    <div className="prod-div-container" id="container">

                        <div className="prod-img-container">
                            <img className="shake-animation" src={honey.image} alt="romero - tienda" title="tienda" />
                        </div>

                        <div>
                        <h3 className="producto-title">{honey.name}</h3>
                            <p className="producto-price">
                                Precio: {honey.price}
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