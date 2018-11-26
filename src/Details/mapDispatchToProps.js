import superagent from "superagent";

const mapDispatchToProp = dispatch => ({
    getRestaurantDetails(id){
        dispatch(function(dispatch){
            superagent
                .get(`https://developers.zomato.com/api/v2.1/restaurant?res_id=${id}`)
                .set("user-key",'fa81a3f97323eba13d8713d3284b8556')
                .then(res =>{
                    dispatch({
                        type:'RESTAURANT_DETAILS_FETCHED',
                        data:res.body
                    });
                });
        })
    },
    getRestaurantReviews(id){
        dispatch(function(dispatch){
            superagent
                .get(`https://developers.zomato.com/api/v2.1/reviews?res_id=${id}&count=10&start=20`)
                .set("user-key",'fa81a3f97323eba13d8713d3284b8556')
                .then(res => {
                    dispatch({
                        type:'RESTAURANT_REVIEWS_FETCHED',
                        data:res.body
                    });
                });
        });
    }
    
})
export default mapDispatchToProp