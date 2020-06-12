/**
 * @author Shyam Mittal
 * @email mittalshyam1007@gmail.com
 * @create date 2020-06-12 09:28:49
 * @modify date 2020-06-12 09:28:49
 * @desc [description]
 */


import initialState from "./initialState";
import {VERIFIED} from "./actions";

const MainReducer = (state = initialState, action) => {
  switch(action.type){
    
    case VERIFIED:
      const {username_,isUserAuthenticated_ } = action.payload
      state = {
        ...state,
        login:{
          username : username_,
          isUserAuthenticated : isUserAuthenticated_
        }
      }
      break;
          
    default:
      break;
  }
  return state;
};

export default MainReducer;