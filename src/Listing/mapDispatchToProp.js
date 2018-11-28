import superagent from "superagent";


const mapDispatchToProp = dispatch => ({
    getRestaurantsData(start,count, id){
        dispatch(function(dispatch){

            superagent
                .get(`https://developers.zomato.com/api/v2.1/search?entity_id=${id}&entity_type=city&start=${start}&count=${count}`)
                .set('user-key', 'fa81a3f97323eba13d8713d3284b8556')
                .then(res => {
                    console.log(res);
                    dispatch({
                        type:'RESTAURANTS_LIST_FETCHED',
                        data:res.body
                    })    
                     debugger;   
                });    

           
        })
    },
    addToLiked(id){
        dispatch({
            type: "ADD_TO_LIKED",
            data: id
        })
    },

    removeFromLiked(id){
        dispatch({
            type: "REMOVE_FROM_LIKED",
            data: id
        })
    }
    
})
export default mapDispatchToProp