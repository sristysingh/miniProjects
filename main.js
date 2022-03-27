

const searchinput = document.getElementById("search-input");
const searchbutton = document.getElementById("search-button");
let loc = document.getElementById("location");
let tempicon = document.getElementById("temp-icon");
let tempvalue = document.getElementById("temp-value");
let climate = document.getElementById("climate");


searchbutton.addEventListener("click", (e) =>{
    e.preventDefault();
    getweather(searchinput.value);
    searchinput.value='';
});

const getweather = async (city) =>{
    try{
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=ad3e0b510c716a503e20563b9aee8fb6`,
        {mode: 'cors'});

        const weatherdata = await response.json();
        console.log(weatherdata);
        const{name} = weatherdata;
        const{feels_like}=weatherdata.main;
        const{id, main}=weatherdata.weather[0];
        loc.textContent =name;
                 climate.textContent = main;
                tempvalue.textContent=Math.round(feels_like-273);
                console.log(data);
                if(id<300 && id>200)
                {
                    tempicon.src ="./icons/thunderstorm.svg"
                }
                else if(id<400 && id>300)
                {
                    tempicon.src ="./icons/cloud-solid.svg"
                }
                else if(id<600 && id>500)
                {
                    tempicon.src ="./icons/rain.svg"
                }
                else if(id<700 && id>600)
                {
                    tempicon.src ="./icons/snow.svg"
                }
                else if(id<800 && id>700)
                {
                    tempicon.src ="./icons/clouds.svg"
                }
                else (id==800)
                {
                    tempicon.src ="./icons/cloud-and-sun.svg"
                }
    }
    catch(error){
        console.log('city not found');
    }
};



window.addEventListener("load", () => {
    if (navigator.geolocation){
        navigator.geolocation.getCurrentPosition((position) => {
            let long = position.coords.longitude;
            let lat = position.coords.latitude;
                            //const proxy = "https://cors-anywhere.herokuapp.com/";
                            //const api = `${proxy}api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=ad3e0b510c716a503e20563b9aee8fb6`
                            //const api = fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=ad3e0b510c716a503e20563b9aee8fb6`,
                            //{mode: 'cors'});
            fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=ad3e0b510c716a503e20563b9aee8fb6`,
            {mode: 'cors'}).then((response) => {
                return response.json();
            })

            .then( data => {
                 const{name} = data;
                 const{feels_like} = data.main;
                 const{id,main} = data.weather[0];

                 loc.textContent =name;
                 climate.textContent = main;
                tempvalue.textContent=Math.round(feels_like-273);
                console.log(data);
                if(id<300 && id>200)
                {
                    tempicon.src ="./icons/thunderstorm.svg"
                }
                else if(id<400 && id>300)
                {
                    tempicon.src ="./icons/cloud-solid.svg"
                }
                else if(id<600 && id>500)
                {
                    tempicon.src ="./icons/rain.svg"
                }
                else if(id<700 && id>600)
                {
                    tempicon.src ="./icons/snow.svg"
                }
                else if(id<800 && id>700)
                {
                    tempicon.src ="./icons/clouds.svg"
                }
                else (id==800)
                {
                    tempicon.src ="./icons/cloud-and-sun.svg"
                }
                })
        })
    }
})