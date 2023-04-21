const btRandom = document.querySelector('#random-data');
const output = document.querySelector('#output'); 
const btClean = document.querySelector('#clean');

const url = 'https://random-data-api.com/api/address/random_address';

btRandom.addEventListener('click', (e)=>{
    fetch(url)
    .then(response => response.json())
    .then(data=>{
        output.innerHTML = "city: " + data.city + "<br>" +
                            "full_address: " + data.full_address + "<br>" +
                            "street_address: " + data.street_address + "<br>" +
                            "number: " + data.building_number + "<br>"+
                            "zip_code: " + data.zip_code + "<br>"+
                            "zip: " + data.zip + "<br>"+
                            "postcode: " + data.postcode + "<br>"+
                            "time_zone: " + data.time_zone + "<br>"+
                            "state: " + data.state + "<br>"+
                            "state_abbr: " + data.state_abbr + "<br>"+
                            "country: " + data.country + "<br>"+
                            "latitude: " + data.latitude + "<br>"+
                            "longitude: " + data.longitude + "<br>";
        console.log(data)
    })
    .catch(e => console.log('error: ' + e.message))
});

btClean.addEventListener('click', ()=>{
    output.innerHTML = "";
    });
