import { put, takeLatest } from "redux-saga/effects";

export function* getnews() {

    console.log("saga reached")

    yield put({ type: "NEWS_SUCCESS", news: "Border Patrol Agents Shut Down Highways in Maine and New Hampshire With Checkpoints" });

}

export const getNewsSaga = [
    takeLatest("NEWS_REQUEST", getnews)
]