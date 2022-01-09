import React from 'react'
import { useRouter } from "next/router";
function AllRoutesinBlog() {
    const {query} = useRouter()
    return (
        <div>
            {/* it creates an array */}
            <h1>AllRoutesinBlog AllRoutesinBlog {query.id}</h1>
        </div>
    )
}

export default AllRoutesinBlog
