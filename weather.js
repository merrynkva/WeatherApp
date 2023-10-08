import{myApi }from './api'
const apikey=myApi();
window.addEventListener("load",()=>{
    if(navigator.geolocation){
        navigator.geolocation.
        getCurrentPosition((position)=>{
            let lon =position.coords.longitude;
            let lat =position.coords.latitude;
            const url = 'https://api.tomorrow.io/v4/weather/forecast?location=42.3478,-71.0466&apikey=XdLtrYd7ccV8agL0hmJv9PaME52u750G';
            fetch(url).then(res=>{
                return res.json()

            }).then((data)=>{
                console.log(data);
weatherReport(data)
            })

        })
    }
})
function weatherReport(){
var urlcast='https://api.tomorrow.io/v4/weather/forecast?location=42.3478,-71.0466&apikey=XdLtrYd7ccV8agL0hmJv9PaME52u750G';
fetch(urlcast).then(res=>{
    return res.json()

}).then((data)=>{
    console.log(data);
weatherReport(data)
})
}