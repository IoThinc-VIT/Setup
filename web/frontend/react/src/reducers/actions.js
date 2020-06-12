export const VERIFIED = "VERIFIED";

export const updateLoginRequest = (username_, isUserAuthenticated_) => {
    return (dispatch) => {
        dispatch({
            type: VERIFIED,
            payload:{
                username_: username_, 
                isUserAuthenticated_: isUserAuthenticated_
            }
        })
    }
}
