import { useEffect } from "react"
import { getCookie } from "../services/CookieFunction"

function Home() {

    const cookies = getCookie()
    useEffect(() => {
        if (cookies.token === undefined || cookies.useId === undefined) {
            window.location.href = '/login'
        }
        console.log(cookies)
    }, [])

    return (
        <div className="h-100 d-flex bg-secondary">
            <h1>Home</h1>
        </div>
    )
}

export default Home