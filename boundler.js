let statisticsNav = document.getElementById('statistics')
let hourlyNav = document.getElementById('hourly-table')

searchButton.addEventListener('click', () => {
    let api = `http://api.openweathermap.org/data/2.5/forecast?q=${inputNode.value}&units=metric&appid=28f1e448ba6b706179d364ed60f31626`
    savedApi = api
    fetchFunction(api, homePage, res => {
        swal("Wrong Input", "You havent chosen city or that city doesent exist");
        console.log('aa');

    })


})

if (savedApi !== '` `') {
    statisticsNav.addEventListener('click', () => {
        fetchFunction(savedApi, homePage)
    })
    hourlyNav.addEventListener('click', () => {
        fetchFunction(savedApi, generateTable)
    })
} else {
    console.log('aa');

}


