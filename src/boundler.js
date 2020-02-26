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
            text: 'That city does not exist!',

        })
        mainDiv.innerHTML = `
       
        <div id="home" class="text-center mt-5 align-middle">
            <h2>Weather App</h2>
            <p>Hello stranger here we offer weather statistics just write the city name in the search bar and check
                results
            </p>
        </div>

        `
    })
})

if (savedApi !== '` `') {
    statisticsNav.addEventListener('click', () => {
        fetchFunction(savedApi, statisticsPage)
        statisticsNav.classList.add('active')
        hourlyNav.classList.remove('active')
        currentNav.classList.remove('active')
    })
    hourlyNav.addEventListener('click', () => {
        fetchFunction(savedApi, generateTable)
        hourlyNav.classList.add('active')
        statisticsNav.classList.remove('active')
        currentNav.classList.remove('active')
    })
    currentNav.addEventListener('click', () => {
        fetchFunction(currentApiSaved, homePage)
        currentNav.classList.add('active')
        hourlyNav.classList.remove('active')
        statisticsNav.classList.remove('active')
    })

} else {

}



