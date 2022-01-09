import React from 'react'
//for getting the req.params feature for dynamic routing
import {useRouter} from "next/router"
function ProjectPage() {
    const router = useRouter()
    console.log(router.pathname)
    console.log(router.query)
    return (
        <div>
            <h1>ProjectPage</h1>
        </div>
    )
}

export default ProjectPage
