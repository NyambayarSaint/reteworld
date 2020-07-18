import Axios from "axios"

async function Logout() {
    let res = await Axios(localStorage.getItem('url')+'/influencer/logout')
    document.location.href="/landing"
}

export default Logout
