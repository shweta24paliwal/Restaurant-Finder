const mapDispatchToProp = dispatch => ({
    updateName(name){
        dispatch({
            type:"name-type",
            data:name
        })
    }
    
})
export default mapDispatchToProp