import axios from "axios";


let instance = axios.create({
    baseURL:`https://social-network.samuraijs.com/api/1.0/`,
     withCredentials: true,
    headers: {
    "API-KEY": "352c90ad-3ef7-45e1-a349-cc1b511e4092"
}
    
})

export const getApi = {
 getUsers(pageNumber, pageSize ) {
    return  instance.get(`users?page=${pageNumber}&count=${pageSize}`,).then(response => response.data)
},
unfollow(id){
    return instance.delete(`follow/${id}`).then(response=> response.data)
},
follow(id) {
        return instance.post(`follow/${id}`).then(response => response.data)
    
},
authMe(){
    return instance.get(`auth/me`).then(response => response.data)
},
getProfile(userId){
    return instance.get(`profile/${userId}`).then(response => response.data )
},
    getStatus(userId) {
        return instance.get(`profile/status/${userId}`)
    },
    putStatus(status) {
        return instance.put(`profile/status`, {status:status}).then(response => response)
    },
    onLogin(email, password, rememberMe){
        return instance.post('auth/login', { email, password,  rememberMe})
    },
    desLogin(){
        return instance.delete('auth/login')
    }
}
