import { call, put, takeEvery, all, fork } from "redux-saga/effects";

// Crypto Redux States
import {
    GET_TASK_LIST,
    ADD_NEW_TASK,
    DELETE_TASK,
    UPDATE_TASK,
} from "./actionType";
import {
    TaskApiResponseSuccess, TaskApiResponseError,
    addTaskSuccess,
    addTaskFail,
    updateTaskSuccess,
    updateTaskFail,
    deleteTaskSuccess,
    deleteTaskFail,
} from "./action";

//Include Both Helper File with needed methods
import {
    getTaskList as getTaskListApi,
    addNewTask,
    updateTask,
    deleteTask,
}
    from "../../helpers/fakebackend_helper";

function* getTaskList() {
    try {
        const response = yield call(getTaskListApi);
        yield put(TaskApiResponseSuccess(GET_TASK_LIST, response.data));
    } catch (error) {
        yield put(TaskApiResponseError(GET_TASK_LIST, error));
    }
}

function* onAddNewTask({ payload: task }) {
    try {
        const response = yield call(addNewTask, task);

        yield put(addTaskSuccess(response));
    } catch (error) {
        yield put(addTaskFail(error));
    }
}

function* onDeleteTask({ payload: task }) {
    try {
        const response = yield call(deleteTask, task);
        yield put(deleteTaskSuccess({ task, ...response }));
    } catch (error) {
        yield put(deleteTaskFail(error));
    }
}

function* onUpdateTask({ payload: task }) {
    try {
        const response = yield call(updateTask, task);
        yield put(updateTaskSuccess(response));
    } catch (error) {
        yield put(updateTaskFail(error));
    }
}



export function* watchGetTaskList() {
    yield takeEvery(GET_TASK_LIST, getTaskList);
}

export function* watchAddNewTask() {
    yield takeEvery(ADD_NEW_TASK, onAddNewTask);
}

export function* watchUpdateTask() {
    yield takeEvery(UPDATE_TASK, onUpdateTask);
}

export function* watchDeleteTask() {
    yield takeEvery(DELETE_TASK, onDeleteTask);
}



function* taskSaga() {
    yield all([
        fork(watchGetTaskList),
        fork(watchAddNewTask),
        fork(watchUpdateTask),
        fork(watchDeleteTask)
    ]
    );
}

export default taskSaga;
