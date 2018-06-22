import { combineReducers } from 'redux';
import { news_articles } from './news.reducer';

const myReducers = combineReducers({
    news_articles
});

export default myReducers;