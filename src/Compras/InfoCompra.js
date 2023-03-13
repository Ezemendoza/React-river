import "./InfoCompra.css"
const InfoCompra = ({item})=>{


    return (<div>
                <h4 className="titulo-info-pedido">INFORMACION DE PEDIDO</h4>
                <hr/>
                <div className="plantilla-info-pedido ">
                    <div className="col-7">
                        <h5>DIRECCION DE ENVIO</h5>

                        <p>{item.NombreEntrega} {item.apellidoEntrega}</p>
                        <p>{item.calle}</p>
                        <p>{item.Localidad} , {item.Pronvincia}, {item.CP}</p>
                        <p>{item.telefono}</p>
                        <p>{item.email}</p>
                    </div>
                    <div className="col-4">
                        <h5>Metodo de envio</h5>
                        <p>Puerta a Puerta</p>
                    </div>
                </div>
            </div>

    )

}

export default InfoCompra