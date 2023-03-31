import { call, put, takeEvery, all, fork } from "redux-saga/effects";

// Ecoomerce Redux States
import {
  GET_CONTACTS,
  GET_COMPANIES,
  GET_DEALS,
  GET_LEADS,

  ADD_NEW_COMPANIES,
  DELETE_COMPANIES,
  UPDATE_COMPANIES,

  ADD_NEW_CONTACT,
  DELETE_CONTACT,
  UPDATE_CONTACT,

  ADD_NEW_LEAD,
  DELETE_LEAD,
  UPDATE_LEAD,
} from "./actionType";

import {
  crmApiResponseSuccess,
  crmApiResponseError,
  addCompaniesFail,
  addCompaniesSuccess,
  updateCompaniesSuccess,
  updateCompaniesFail,
  deleteCompaniesSuccess,
  deleteCompaniesFail,

  addContactFail,
  addContactSuccess,
  updateContactSuccess,
  updateContactFail,
  deleteContactSuccess,
  deleteContactFail,

  addLeadSuccess,
  addLeadFail,
  updateLeadSuccess,
  updateLeadFail,
  deleteLeadSuccess,
  deleteLeadFail
} from "./action";

//Include Both Helper File with needed methods
import {
  getContacts as getContactsApi,
  getCompanies as getCompaniesApi,
  getDeals as getDealsApi,
  getLeads as getLeadsApi,
  addNewCompanies,
  updateCompanies,
  deleteCompanies,
  addNewContact,
  updateContact,
  deleteContact,

  addNewLead,
  updateLead,
  deleteLead
} from "../../helpers/fakebackend_helper";

function* getContacts() {
  try {
    const response = yield call(getContactsApi);
    yield put(crmApiResponseSuccess(GET_CONTACTS, response.data));
  } catch (error) {
    yield put(crmApiResponseError(GET_CONTACTS, error));
  }
}

function* getCompanies() {
  try {
    const response = yield call(getCompaniesApi);
    yield put(crmApiResponseSuccess(GET_COMPANIES, response.data));
  } catch (error) {
    yield put(crmApiResponseError(GET_COMPANIES, error));
  }
}

function* getDeals() {
  try {
    const response = yield call(getDealsApi);
    yield put(crmApiResponseSuccess(GET_DEALS, response));
  } catch (error) {
    yield put(crmApiResponseError(GET_DEALS, error));
  }
}

function* getLeads() {
  try {
    const response = yield call(getLeadsApi);
    yield put(crmApiResponseSuccess(GET_LEADS, response.data));
  } catch (error) {
    yield put(crmApiResponseError(GET_LEADS, error));
  }
}

function* onUpdateCompanies({ payload: companies }) {
  try {
    const response = yield call(updateCompanies, companies);
    yield put(updateCompaniesSuccess(response));
  } catch (error) {
    yield put(updateCompaniesFail(error));
  }
}

function* onDeleteCompanies({ payload: companies }) {
  try {
    const response = yield call(deleteCompanies, companies);
    yield put(deleteCompaniesSuccess({ companies, ...response }));
  } catch (error) {
    yield put(deleteCompaniesFail(error));
  }
}

function* onAddNewCompanies({ payload: companies }) {
  try {
    const response = yield call(addNewCompanies, companies);

    yield put(addCompaniesSuccess(response));
  } catch (error) {
    yield put(addCompaniesFail(error));
  }
}

function* onUpdateContact({ payload: contact }) {
  try {
    const response = yield call(updateContact, contact);
    yield put(updateContactSuccess(response));
  } catch (error) {
    yield put(updateContactFail(error));
  }
}

function* onDeleteContact({ payload: contact }) {
  try {
    const response = yield call(deleteContact, contact);
    yield put(deleteContactSuccess({ contact, ...response }));
  } catch (error) {
    yield put(deleteContactFail(error));
  }
}

function* onAddNewContact({ payload: contact }) {
  try {
    const response = yield call(addNewContact, contact);
    yield put(addContactSuccess(response));
  } catch (error) {
    yield put(addContactFail(error));
  }
}

function* onUpdateLead({ payload: leads }) {
  try {
    const response = yield call(updateLead, leads);
    yield put(updateLeadSuccess(response));
  } catch (error) {
    yield put(updateLeadFail(error));
  }
}

function* onDeleteLead({ payload: leads }) {
  try {
    const response = yield call(deleteLead, leads);
    yield put(deleteLeadSuccess({ leads, ...response }));
  } catch (error) {
    yield put(deleteLeadFail(error));
  }
}

function* onAddNewLead({ payload: leads }) {
  try {
    const response = yield call(addNewLead, leads);
    yield put(addLeadSuccess(response));
  } catch (error) {
    yield put(addLeadFail(error));
  }
}


export function* watchGetContacts() {
  yield takeEvery(GET_CONTACTS, getContacts);
}

export function* watchGetComgetCompanies() {
  yield takeEvery(GET_COMPANIES, getCompanies);
}

export function* watchGetDeals() {
  yield takeEvery(GET_DEALS, getDeals);
}

export function* watchGetLeads() {
  yield takeEvery(GET_LEADS, getLeads);
}

export function* watchUpdateCompanies() {
  yield takeEvery(UPDATE_COMPANIES, onUpdateCompanies);
}

export function* watchDeleteCompanies() {
  yield takeEvery(DELETE_COMPANIES, onDeleteCompanies);
}

export function* watchAddNewCompanies() {
  yield takeEvery(ADD_NEW_COMPANIES, onAddNewCompanies);
}

export function* watchUpdateContact() {
  yield takeEvery(UPDATE_CONTACT, onUpdateContact);
}

export function* watchDeleteContact() {
  yield takeEvery(DELETE_CONTACT, onDeleteContact);
}

export function* watchAddNewContact() {
  yield takeEvery(ADD_NEW_CONTACT, onAddNewContact);
}

export function* watchUpdateLead() {
  yield takeEvery(UPDATE_LEAD, onUpdateLead);
}

export function* watchDeleteLead() {
  yield takeEvery(DELETE_LEAD, onDeleteLead);
}

export function* watchAddNewLead() {
  yield takeEvery(ADD_NEW_LEAD, onAddNewLead);
}

function* crmSaga() {
  yield all([
    fork(watchGetContacts),
    fork(watchGetComgetCompanies),
    fork(watchGetDeals),
    fork(watchGetLeads),
    fork(watchDeleteCompanies),
    fork(watchUpdateCompanies),
    fork(watchAddNewCompanies),
    fork(watchDeleteContact),
    fork(watchUpdateContact),
    fork(watchAddNewContact),
    fork(watchAddNewLead),
    fork(watchDeleteLead),
    fork(watchUpdateLead),
  ]);
}

export default crmSaga;
