import { useEffect } from "react"
import useFirebase from "../hooks/useFirebase"

const Contactanos = () => {
    const { getData } = useFirebase()

    useEffect(() => {
        const fetchData = async () => {
            await getData()
        }

        fetchData()
    }, [getData])

    return (
      <div>Contactanos</div>
    )
}

export default Contactanos