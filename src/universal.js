let mainDiv = document.getElementById('main')
let inputNode = document.getElementById('citySearchInput')
let searchButton = document.getElementById('citySearchBtn')
let currentApiSaved = ''
let savedApi = ``

let fetchFunction = (api, func, catchPromise) => {
    fetch(api)
        .then(res => res.json())
        .then(data => {
            func(data)
        }).catch(catchPromise)
}

