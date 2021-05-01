// eslint-disable-next-line import/no-anonymous-default-export
export default (reviews = [], action) => {
    switch(action.type){
        case 'FETCH_ALL':
            return action.payload;
        case 'CREATE':
            return [...reviews, action.payload];
        default:
            return reviews;
        }
}