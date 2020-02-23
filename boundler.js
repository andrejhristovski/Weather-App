let statisticsNav = document.getElementById('statistics')
let hourlyNav = document.getElementById('hourly-table')
let currentNav = document.getElementById('current')

searchButton.addEventListener('click', () => {
    let api = `http://api.openweathermap.org/data/2.5/forecast?q=${inputNode.value}&units=metric&appid=28f1e448ba6b706179d364ed60f31626`
    savedApi = api
    let currentApi = `http://api.openweathermap.org/data/2.5/weather?q=${inputNode.value}&units=metric&appid=28f1e448ba6b706179d364ed60f31626`
    currentApiSaved = currentApi
    fetchFunction(currentApi, homePage, res => {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong!',
        })
    })
})

if (savedApi !== '` `') {
    statisticsNav.addEventListener('click', () => {
        fetchFunction(savedApi, statisticsPage)
    })
    hourlyNav.addEventListener('click', () => {
        fetchFunction(savedApi, generateTable)
    })
    currentNav.addEventListener('click', () => {
        fetchFunction(currentApiSaved, homePage)
    })

} else {

}


