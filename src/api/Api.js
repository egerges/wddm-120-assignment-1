function Api() {

    // API Constants
    const API_KEY = "382a310bcamsh9847265c8d625c6p16f99djsn1e772e742aa2";
    const BASE_URL = "https://data-imdb1.p.rapidapi.com/";
    const HEADERS = {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "data-imdb1.p.rapidapi.com",
            "x-rapidapi-key": API_KEY
        }
    };

    return {
        getFirstPageMovies: (page) => {
            return fetch(`${BASE_URL}movie/byYear/2021/?page_size=25`, HEADERS)
            .then(response => response.json());
        },
        getFirstPageSeries: (page) => {
            return fetch(`${BASE_URL}series/byYear/2021/?page_size=25`, HEADERS)
            .then(response => response.json());
        },
        getThisYearMovies: (page) => {
            return fetch(`${BASE_URL}movie/byYear/2021/?page_size=100&page=${page}`, HEADERS)
            .then(response => response.json());
        },
        getLastYearMovies: (page) => {
            return fetch(`${BASE_URL}movie/byYear/2020/?page_size=50&page=${page}`, HEADERS)
            .then(response => response.json());
        },
        getThisYearSeries: (page) => {
            return fetch(`${BASE_URL}series/byYear/2021/?page_size=50&page=${page}`, HEADERS)
            .then(response => response.json());
        },
        getLastYearSeries: (page) => {
            return fetch(`${BASE_URL}series/byYear/2020/?page_size=50&page=${page}`, HEADERS)
            .then(response => response.json());
        },
        getMovieDetails: (id) => {
            return fetch(`${BASE_URL}/movie/id/${id}/`, HEADERS)
            .then(response => response.json());
        }
    }
}

export default Api;