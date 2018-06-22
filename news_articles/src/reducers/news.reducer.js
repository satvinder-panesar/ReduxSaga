const initialState = {dataAvailable:false, news: "Nothing"}

export function news_articles(state = initialState, action) {
    switch (action.type) {
        case 'NEWS_SUCCESS':
            console.log("reducer reached: response: ",action.news);
            return {
                dataAvailable: true,
                news: action.news
            }
        
        default:
            return state;
    }
}