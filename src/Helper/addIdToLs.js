function addLikedinLS(id){
    console.log(id);
    debugger;
    let likedIdInLS = localStorage.getItem('likedRestaurants');
    if (likedIdInLS) {
        likedIdInLS = JSON.parse(likedIdInLS);
        if (likedIdInLS.indexOf(id) < 0) {
            likedIdInLS.push(id);
            localStorage.setItem('likedRestaurants', JSON.stringify(likedIdInLS));
        }
    } else {
        var likedIds = [id];
        localStorage.setItem('likedRestaurants', JSON.stringify(likedIds));
    }
}

export default addLikedinLS;