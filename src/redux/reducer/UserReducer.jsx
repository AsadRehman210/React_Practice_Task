const initialState = {
    token: ""
};
export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case "User_Login":
            localStorage.setItem("token", action.payload);
            const Token = localStorage.getItem("token")
            return {
                token: Token
            };
        case "User_logout":
            localStorage.removeItem("token")

            return {
                token: ""
            }



        default:
            return state;
    }
};