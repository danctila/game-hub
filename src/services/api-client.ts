import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params:{
        key: '503a7387fdb14134976bfad62314338c'
    }
})