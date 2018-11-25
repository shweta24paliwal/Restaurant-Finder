const mapDispatchToProp = dispatch => ({
    updateName(name){
        dispatch({
            type:"name-type",
            data:name
        })
    },
    updateAge(age){
        dispatch({
            type:"age-type",
            data:age
        })
    },
    showDetails(){
        dispatch({
            type:"show-me",
            data:true
        })
    }
})
export default mapDispatchToProp