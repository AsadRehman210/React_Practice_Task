export const login = (value)=>{
    return {
        type: "User_Login",
        payload: value
    }
}
export const logout = ()=>{
    return {
        type: "User_logout",
        
    }
}