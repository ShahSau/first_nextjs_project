import React, {useEffect, useState} from 'react'

function lastSalePage() {
    const [sales, setSales] = useState()
    const [isLoading, setIsLoading] = useState(fasle)
    useEffect(() => {
        setIsLoading(true)
        fetch("https://fakestoreapi.com/products")
        .then(res=>res.json())
        .then(data =>{
            setSales(data)
            setIsLoading(false)
        })
    }, [])
    return (
        <ul>
        
        </ul>
    )
}

export default lastSalePage
