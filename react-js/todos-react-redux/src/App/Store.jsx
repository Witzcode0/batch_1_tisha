import { applyMiddleware, configureStore, createStore } from "@reduxjs/toolkit";
import todoReducer from '../Features/TodoSlice'
import reducer from "../Features/TodoSlice";
import { thunk } from "redux-thunk";
import { call, put, takeEvery } from "redux-saga/effects";


// const fetchData = () => {
//     // Action-> Dispatch function -> Async operation -> Dispatch success / failure
//     return async (dispatch) => {
//         dispatch({type: "FETCH_START"});
//         try{
//             const res = await fetch("https://jsonplaceholder.typicode.com/posts");
//             const data = await res.json();
//             dispatch({type:"FETCH_SUCCESS", payload: data});
//         }catch(error){
//             dispatch({type:"FETCH_ERROR", payload:error})
//         }
//     }
// }

// export const storeReduxThunk = createStore(reducer, applyMiddleware(thunk));

// const fetchDataApi = async () => {
//     const res = await fetch("https://jsonplaceholder.typicode.com/posts");
//     return res.json();
// }


// function* fetchDataPosts() {
// Action -> saga listens -> perform async task -> Dispatch success / failure
//     try{
//         const data = yield call(fetchDataApi);
//         yield put({type:"FETCH_SUCCESS", payload:data});
//     }catch(error){
//         yield put({type:"FETCH_ERROR", payload:error});
//     }
// }

// export function* watchFetchData(){
//     yield takeEvery("FETCH_STATR", fetchDataPosts);
// }


const store = configureStore({
    reducer: {
        todos: todoReducer,
    }
})


export default store;