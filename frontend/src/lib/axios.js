import axios from "axios";
const api =axios.create({
    //baseURL: 'http://localhost:3000'
    baseURL:'https://mern-bookstore-6opp.onrender.com/'
})
export default api
