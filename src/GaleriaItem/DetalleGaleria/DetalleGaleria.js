import "./DetalleGaleria.css"
const DetalleGaleriaItem = ({item}) => {

return(
    <div> 
    <nav className="navbar navbar-expand-lg navbar-light">
    
<div className="collapse navbar-collapse " id="navbarNavGaleria">
  
  <ul className="navbar-nav mb-lg-0 pl-4 barraCentral ">

   
      <li className="nav-item ml-4" id="palabraHeader">
        <a className="nav-link" href="#galeria__detalles">Detalles</a>
        </li>
      
       
          </ul>
          </div>
        </nav>

  <div className="product-description mb-5" id="galeria__detalles">
    <h2 className="mb-5">Detalles</h2>
    <dl className="row mb-5">
      <dt className="col-sm-3 ">Marca</dt>
      <dd className="col-sm-9 marca">{item.marca}</dd>
      <dt className="col-sm-3">Modelo</dt>
      <dd className="col-sm-9">{item.modelo}</dd>
      <dt className="col-sm-3">Color</dt>
      <dd className="col-sm-9 color">{item.color}</dd>
    
    </dl>
    

</div>


</div>

)}

export default DetalleGaleriaItem
