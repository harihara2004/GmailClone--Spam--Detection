import{configureStore} from"@reduxjs/toolkit"
import appReducer from "./AppSlice";
const store=configureStore({
    reducer:{
AppSlice:appReducer
    }
});
export default store;

