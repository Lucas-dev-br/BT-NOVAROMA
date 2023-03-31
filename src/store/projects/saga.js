import { call, put, takeEvery, all, fork } from "redux-saga/effects";

// Crypto Redux States
import {
    GET_PROJECT_LIST,
} from "./actionType";
import { projectApiResponseSuccess, projectApiResponseError } from "./action";

//Include Both Helper File with needed methods
import {
    getProjectList as getProjectListApi,
}
    from "../../helpers/fakebackend_helper";

function* getProjectList() {
    try {
        const response = yield call(getProjectListApi);
        yield put(projectApiResponseSuccess(GET_PROJECT_LIST, response));
    } catch (error) {
        yield put(projectApiResponseError(GET_PROJECT_LIST, error));
    }
}

export function* watchGetProjectList() {
    yield takeEvery(GET_PROJECT_LIST, getProjectList);
}

function* projectSaga() {
    yield all(
        [fork(watchGetProjectList)]
    );
}

export default projectSaga;
