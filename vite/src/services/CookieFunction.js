import { useCookies } from "react-cookie";


export function getCookie() {
    const [cookies, setCookies] = useCookies(['user_id'])

    setCookies("user_id", 'this is id', {
        path: '/'
    })

    const test = {
        useId: cookies
    }

    return test
}