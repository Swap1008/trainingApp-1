// Global app controller
const axios =require('axios');

async function getResults(query) {
    const res=axios.get("https://api.spotify.com/v1/audio-analysis/6EJiVf7U0p1BBfs0qqeb1f");
    console.log(res.data);    
}

getResults();