import { useRouter } from 'next/router'
import React from 'react'

function ClientProjectPage() {
    const {query} =useRouter();
    return (
        <div>
            <h1>ClientProjectPage {query.id}</h1>
        </div>
    )
}

export default ClientProjectPage
