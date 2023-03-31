import {
    GET_PROJECT_LIST,
    API_RESPONSE_SUCCESS,
    API_RESPONSE_ERROR,
} from "./actionType";

// common success
export const projectApiResponseSuccess = (actionType, data) => ({
    type: API_RESPONSE_SUCCESS,
    payload: { actionType, data },
});
// common error
export const projectApiResponseError = (actionType, error) => ({
    type: API_RESPONSE_ERROR,
    payload: { actionType, error },
});

export const getProjectList = () => ({
    type: GET_PROJECT_LIST,
});
