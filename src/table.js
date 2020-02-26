let generateTable = (data) => {
    let table = ` <div class="container animated fadeInLeft">
    <table id="table" class="table table-hover mt-5  text-center sortable">
        <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Icon</th>
                <th scope="col">Description</th>
                <th scope="col"> Wind Speed-km/h</th>
                <th scope="col">Temperature-&#8451</th>
                <th scope="col">Humidity-%</th>
                <th scope="col">Date</th>
            </tr>    
        </thead>
        <tbody>`

    for (let i = 0; i < data.list.length; i++) {
        let { icon, description } = data.list[i].weather[0]
        let myIcon = `<img src="${`http://openweathermap.org/img/w/${icon}.png`}" >`
        let { wind: { speed }, main: { temp, humidity }, dt_txt } = data.list[i]
        let results = [myIcon, description, speed, temp, humidity, dt_txt]

        let row = `<tr><th scope="row">${i + 1}</th>`

        for (let j = 0; j < results.length; j++) {
            let cell = ` <td>${results[j]}</td> `
            row += cell

        }

        row += `</tr>`
        table += row
    }
    table += `
    </tbody>
    </table>
    </div>
    `
    mainDiv.innerHTML = table

}

