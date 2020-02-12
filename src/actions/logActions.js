import { GET_LOGS, SET_LOADING, LOGS_ERROR } from "./types";

// Set loading to true
export const setLoading = () => {
    return {
        type: SET_LOADING
    };
};

// export const getLogs = () => {
//     // dispatch helps pass the function to reducer
//     // getState also is a parameter which allows to access parts of state
//     return async dispatch => {
//         setLoading();

//         const res = await fetch("/logs");
//         const data = await res.json();

//         dispatch({
//             type: GET_LOGS,
//             payload: data
//         });
//     };
// };

// Get logs from server     
export const getLogs = () => async dispatch => {
    try {
        setLoading();

        const res = await fetch("/logs");
        const data = await res.json();

        dispatch({
            type: GET_LOGS,
            payload: data
        });
    } catch (err) {
        dispatch({
            type: LOGS_ERROR,
            payload: err.response.data
        });
    }
};
