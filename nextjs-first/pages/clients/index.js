import Link from 'next/link'
import React from 'react'
import { useRouter } from 'next/router'
function ClientPage() {
    const router =useRouter();
    function loadProjectHandler(){
        router.push("/clients/max/project1")
        
    }
    return (
        <div>
            <h1>ClientPage</h1>
            <Link href={{
                pathname:"/clients/[id]",
                query:{id:"max"}
            }}>max</Link>
            <br />
            <Link href="/clients/menu">menu</Link>
            <br />
            <button onClick={loadProjectHandler}>project1</button>
        </div>
     
    )
}

export default ClientPage

//router.replace("/blog/me") //if this is fired, we cannot go back