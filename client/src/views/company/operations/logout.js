import Axios from "axios"

async function Logout() {
    let res = await Axios(localStorage.getItem('url')+'/company/logout')
    document.location.href="/landing"
}

export default Logout
