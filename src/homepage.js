let homePage = (data) => {
    let { weather: [{ icon, description }], name, wind: { speed }, main: { temp, humidity } } = data
    let myIcon = `<img id="icon" src="${`http://openweathermap.org/img/w/${icon}.png`}" >`
    mainDiv.innerHTML = `
    <div id="homeDiv" class="container animated fadeInLeft">
        <div class="row text-center mt-5">

            <div class="col-6">
                <h2>${name}</h2>
            </div>
            <div class="col-6">
                <h2>${myIcon}</h2>
            </div>


        </div>
        <div class="row text-center mt-5">

            <div class="col-4">
                <h3>Wind Speed</h3>
            </div>
            <div class="col-4">
                <h3>Temperature</h3>
            </div>
            <div class="col-4">
                <h3>Humidity</h3>
            </div>

        </div>
        <div class="row text-center mt-2">

            <div class="col-4">
                <h5>${speed} km/h</h5>
            </div>
            <div class="col-4">
                <h5>${temp}&#8451</h5>
            </div>
            <div class="col-4">
                <h5>${humidity} %</h5>
            </div>

        </div>
        <div class="row text-center mt-5">

            <div class="col-12">
                <h5>${description}</h5>
            </div>


        </div>
    </div>
    `
}



