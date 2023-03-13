import { getStorage, ref, uploadBytesResumable, getDownloadURL, uploadBytes } from "firebase/storage";
import { app } from "../firebase/config";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../firebase/config";
import "./AdminProductosImg.css"
import { useState } from "react";


export const SubirImagen= ({value, valor,item})=>{
  const [valor2, setValor2] = useState({barra:"0" ,img: null})

          const washingtonRef = doc(db, "productos", item.id);
          updateDoc(washingtonRef, {
            img:valor.img,
            img2:valor2.img
          });

    function uploadr1(files){
        const storage =getStorage(app)
        const storageRef= ref(storage, files.name)
        const uploadTask = uploadBytesResumable(storageRef, files);
        uploadTask.on('state_changed',
          (snapshot) => {
            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                value({barra:progress, img:downloadURL})
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
 
return (
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
)
}
