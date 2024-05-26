import { collection, doc, getDocs, query, setDoc } from "firebase/firestore/lite"
import { db } from "../lib/firebase"
import { nanoid } from "nanoid"
import { useState } from "react"

const useFirebase = () => {
    const [ loading, setLoading ] = useState(false);
    const [ mensaje, setMensaje ] = useState('');

    const getData = async () => {
        try {
            //Prev permite traer informacion previa del state, en este caso atributo de un objeto 
            // setLoading(prev => ({...prev, getData: true}));
            
            //Metodo para realizar una consulta y pasarla al state
            const dataRef = collection(db, 'pruebas');
            const q = query(dataRef);  //el where es propio de firebase y los operadores no son los mismo que JS
    
            //Metodo de la documentacion oara extraer datos
            const querySnapshot = await getDocs(q);     //getDoc obtiene la referencia desde la consulta
    
            //Del query hecho se extraen los datos
            const dataDB = querySnapshot.docs.map(doc => doc.data())
    
            //Una vez hecho entra al state de datos
            console.log(dataDB)
        } catch (error) {
            console.log(error.code);
            // setError(error.message);
        }finally {
            // setLoading(prev => ({...prev, getData: false}));
        }
    }

    const enviarFormulario = async ( form ) => {
        setLoading(true);

        try {
            const nuevoDoc = {
                uuid: nanoid(),
                nombre: form.nombre,
                numero: form.numero === ''? 'Sin Número' : form.numero,
                correo: form.correo,
                asunto: form.asunto,
                mensaje: form.mensaje,
                atentido: false
            }

            // Crear documento en firebase
            const docRef = doc( db, 'buzon', nanoid());
            await setDoc( docRef, nuevoDoc );

            // Enviar mensaje de exito
            setMensaje( 'Formulario enviado, espere hasta que lo atendamos' );
        } catch (error) {
            console.log(error)
            setMensaje( 'Hubo un problema, intente más tarde' );
        } finally {
            setLoading( false );
            alert( mensaje )
        }
    }

    return {
        getData,
        enviarFormulario,
        loading
    }
}

export default useFirebase