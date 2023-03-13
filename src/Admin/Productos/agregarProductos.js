import { getStorage, ref, uploadBytesResumable, getDownloadURL, uploadBytes } from "firebase/storage";
import { app } from "../../firebase/config";
import { useState } from "react";
import { db } from "../../firebase/config";
import { addDoc, collection } from "firebase/firestore";
import { async } from "@firebase/util";
import OpcionesPedidosAdmin from "../OpcionesPedidos";
import PiePagina from "../../PiePagina/PiePagina";
import "../AdminProductosImg.css"

const AgregarProductos = ()=>{
    const [valor, setValor] = useState({barra:"0" ,img: null})
    const [valor2, setValor2] = useState({barra:"0" ,img: null})
 async function aver(e){
    
        e.preventDefault()
        const docRef = await addDoc(collection(db, "productos"), {
            nombre:e.target.nombre.value,
            color:e.target.color.value,
            categoria:e.target.categoria.value,
            marca:e.target.marca.value,
            precio:e.target.precio.value,
            stock:e.target.stock.value,
            modelo:e.target.modelo.value,
            img:valor.img,
            img2:valor2.img
          });
   
    }

    function uploadr1(files){
        const storage =getStorage(app)
        const storageRef= ref(storage, files.name)
        const uploadTask = uploadBytesResumable(storageRef, files);
        uploadTask.on('state_changed',
          (snapshot) => {
            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                setValor({barra:progress, img:downloadURL})
              })
          },
        );
      }

      function uploadr2(files){

        const storage =getStorage(app)
        const storageRef= ref(storage, files.name)
        const uploadTask = uploadBytesResumable(storageRef, files);
        uploadTask.on('state_changed',
          (snapshot) => {
            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                setValor2({barra:progress, img:downloadURL})
              })
          },
        );
      }
    return (<div className="fondo">
        



        <div className="">
 
    <div className="plantilla-pedidos col-12">
    <div className="col-3 posicion-info-pedidos">
   <OpcionesPedidosAdmin/>
    </div>
    <div className="menu-info-pedido col-9 mt-5" >

    <hr/>
    <form onSubmit={e=> aver(e)}>
                    <div className="plantilla-input">
                <div className="columna-input col-6">
            <div class="col-4">
            <input class="effect-1" type="text" placeholder="Nombre" name="nombre"/>
              <span class="focus-border"></span>
          </div>

          <div class="col-4">
            <input class="effect-1" type="text" placeholder="Color" name="color"/>
              <span class="focus-border"></span>
          </div>
          <div class="col-4">
            <input class="effect-1" type="text" placeholder="Categoria" name="categoria"/>
              <span class="focus-border"></span>
          </div>
          <div class="col-4">
            <input class="effect-1" type="text" placeholder="Marca" name="marca"/>
              <span class="focus-border"></span>
          </div>
          <div class="col-4">
            <input class="effect-1" type="text" placeholder="Modelo" name="modelo"/>
              <span class="focus-border"></span>
          </div>
          <div class="col-4">
            <input class="effect-1" type="number" placeholder="Stock" name="stock"/>
              <span class="focus-border"></span>
          </div>
          <div class="col-4">
            <input class="effect-1" type="number" placeholder="Coloque precio sin comas" name="precio"/>
              <span class="focus-border"></span>
        
          </div>
          <div  className="img-subida-input">

      
          <div>   
        <form encType="multipart/form-data">
        <div>
         <progress value={valor.barra} max="100"></progress>
        </div>
        <label class="btn btn-danger" for="fileupload">Subir Imagen
      

        <input class="fileupload" id="fileupload" type="file"onChange={e=>uploadr1(e.target.files[0])} /></label>
   


        </form>
      
        {(valor.barra === 100) && 
        <h5>Cargado Exitosamente!</h5>} 
    </div>

    <form encType="multipart/form-data">
        <div>
         <progress value={valor2.barra} max="100"></progress>
        </div>
        <label class="btn btn-danger">Subir Imagen 2
      

        <input className="fileupload" type="file"onChange={e=>uploadr2(e.target.files[0])} /></label>
   
        </form>
        </div>
            </div>
            </div>
            <button className="btn btn-danger"> Aceptar</button>
            </form>

</div>
        
</div>
</div>
       
    


        <PiePagina/>
   </div>
  
    )
   
}

export default AgregarProductos