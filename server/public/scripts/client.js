console.log('client.js is sourced!');

axios({
    method: 'GET',
    url: '/calculations'
})
.then(() => {

})
.catch(() => {

});

function pageLoad(){
    axios({
        method: 'GET',
        url: '/calculations'
    })
    .then(() => {

    })
    .catch(() => {

    })
};
pageLoad();

function requestMath(){
    
    axios({
        method: 'POST',
        url: '/calculations',
        data:
    })
};