function removeLikedinLS(id){
    console.log(id);
    let likedIdInLS = localStorage.getItem('likedRestaurants');
    if (likedIdInLS) {
        likedIdInLS = JSON.parse(likedIdInLS);
        const indexOfId = likedIdInLS.indexOf(id);
        if (indexOfId >= 0) {
            likedIdInLS.splice(indexOfId, 1);    
            localStorage.setItem('likedRestaurants', JSON.stringify(likedIdInLS));
        }
    }
}

export default removeLikedinLS;