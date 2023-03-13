import { useEffect, useState } from "react"
import { Spinner } from "react-bootstrap"
import { useParams } from "react-router-dom"
import ItemDetail from "../Item/Item"

import { doc, getDoc } from "firebase/firestore"
import { db } from "../firebase/config"
import PiePagina from "../PiePagina/PiePagina"

export const ItemDetailContainer = () => {

    const [item, setItem] = useState(null)
    const [loading, setLoading] = useState(true)

    const { itemId } = useParams()


    useEffect(() => {
        setLoading(true)

            const docRef = doc(db, "productos", itemId)
            getDoc(docRef)
            .then((resp) => {
               setItem({ id:resp.id, ...resp.data()}
               ) })
            
            .catch((error) => {
                console.log('ERROR', error)
            })
            .finally(() => {
                setLoading(false)
            })
    }, [])


    return (<div>


        <section className="container my-5 ">
            
            {
                loading
                ?   <Spinner animation="border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </Spinner>

                :  <ItemDetail item={item}/>
              
            }
            
        </section>
        <PiePagina/>
        </div>
    )
}