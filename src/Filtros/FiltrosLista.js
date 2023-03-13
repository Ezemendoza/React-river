import { collection, getDocs, query, where } from "firebase/firestore";
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import { db } from "../firebase/config";
import ItemList from "../ItemList/ItemList";


const FiltrosLista = () =>{
    const {filtro} = useParams()
    console.log(filtro)
    return(<div>
        cdaasdsadsda    
    </div>

    )
}

export default FiltrosLista