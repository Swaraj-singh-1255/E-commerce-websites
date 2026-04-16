import axios from "axios";

const authApiInstance = axios.create({
    baseURL: "http://localhost:3000/api/auth",
    withCredentials: true,
})


export async function register({ email, contact, password, fullname, isSeller }) {
    try {
        const response = await authApiInstance.post("/register", {
            email,
            contact,
            password,
            fullname,
            isSeller
        })
        return response.data
    } catch (error) {
        throw error.response?.data || { message: "Something went wrong" }
    }
}

export async function login({ email, password }) {
    try {
        const response = await authApiInstance.post("/login", { email, password })
        return response.data
    } catch (error) {
        throw error.response?.data || { message: "Something went wrong" }
    }
}

export async function logout() {
    try {
        const response = await authApiInstance.post("/logout")
        return response.data
    } catch (error) {
        throw error.response?.data || { message: "Something went wrong" }
    }
}