import { call, put, all, takeLastest } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import api from '../../../services/api';
import history from '../../../services/history';

import { FirstAction } from './action';

function* First({ id }) {
  const response = yield call(api.get, `/about/${id}`);
  toast.done('Sucesso');
  yield put(FirstAction(response.data));
  history.push('/about');
}

export default all([takeLastest('@about/ACTION_ONE', First)]);
