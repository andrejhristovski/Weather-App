
let homePage = (data) => {

    let maxTemp = Math.floor(data.list.map(el => el.main.temp_max).reduce((a, b) => Math.max(a, b)))
    let minTemp = Math.ceil(data.list.map(el => el.main.temp_min).reduce((a, b) => Math.min(a, b)))
    let avgTemp = Math.round((minTemp + maxTemp) / 2)

    let humidity = data.list.map(el => el.main.humidity)
    let maxHumidity = humidity.reduce((a, b) => Math.max(a, b))
    let minHumidity = humidity.reduce((a, b) => Math.min(a, b))
    let avgHumidity = (maxHumidity + minHumidity) / 2

    let warmestTime = data.list.filter(el => el.main.temp_max >= maxTemp).map(el => el.dt_txt)
    let coldestTime = data.list.filter(el => el.main.temp_min <= minTemp).map(el => el.dt_txt)


    mainDiv.innerHTML = `
    <div class="container">
        <div class="text-center m-5">
            <h2>Weather statistics for the following 5 days</h2>
        </div>
        <hr>
        <div class="text-center mt-5">
            <h3>Temperature</h3>
        </div>
        <div class="row text-center mt-5">
    
            <div class="col-4">
            <h5>Average</h5>
            </div>
            <div class="col-4">
            <h5>Highest</h5>
            </div>
            <div class="col-4">
            <h5>Lowest</h5>
            </div>
    
        </div>
        <div class="row text-center mt-2">
    
            <div class="col-4">
                <p>${avgTemp}&#8451</p>
            </div>
            <div class="col-4">
                <p>${maxTemp}&#8451</p>
            </div>
            <div class="col-4">
                <p>${minTemp}&#8451</p>
            </div>
    
        </div>
        <hr>
        <div class="text-center mt-5">
            <h3>Humidity</h3>
        </div>
        <div class="row text-center mt-5">
    
            <div class="col-4">
                <h5>Average</h5>
            </div>
            <div class="col-4">
            <h5>Highest</h5>
            </div>
            <div class="col-4">
            <h5>Lowest</h5>
            </div>
    
        </div>
        <div class="row text-center mt-2">
    
            <div class="col-4">
                <p>${avgHumidity}%</p>
            </div>
            <div class="col-4">
                <p>${maxHumidity}%</p>
            </div>
            <div class="col-4">
                <p>${minHumidity}%</p>
            </div>
    
        </div>
        <hr>
        <div class="text-center mt-5">
            <h3>Time</h3>
        </div>
        <div class="row text-center mt-5">
    
            <div class="col-6">
            <h5>Warmest</h5>
            </div>
            <div class="col-6">
            <h5>Coldest</h5>
            </div>
    
        </div>
        <div class="row text-center mt-2">
            <div class="col-6">
            <p>${warmestTime}</p>
            </div>
            <div class="col-6">
            <p>${coldestTime[0]}</p>
            </div>
        </div>
    </div>`
}

