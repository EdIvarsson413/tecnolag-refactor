import { collection, getDocs, query } from "firebase/firestore/lite";
import { db } from "../lib/firebase"

const useFirebase = () => {
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

    return {
        getData
    }
}

export default useFirebase