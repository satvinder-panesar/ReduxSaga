import { all } from "redux-saga/effects";
import { getNewsSaga } from './getnews.saga';

export default function* mySaga() {
  yield all([
    ...getNewsSaga
  ]);
}