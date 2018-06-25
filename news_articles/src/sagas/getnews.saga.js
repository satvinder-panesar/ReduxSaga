import { call, put, takeLatest } from "redux-saga/effects";
import axios from 'axios';

function callNewsApi(){
	 return axios.get('https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=c8b2f3f94b474cadb0b08f0bae0b1b07')
	.then((response)=>response.data.articles)

}

export function* getnews() {
    console.log("saga reached");
    const news_articles = yield call(callNewsApi);   
    yield put({type:"NEWS_SUCCESS",news:news_articles});
}

export const getNewsSaga = [
    takeLatest("NEWS_REQUEST", getnews)
]