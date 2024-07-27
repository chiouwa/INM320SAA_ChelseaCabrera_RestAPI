console.log("hello main");

// EXAMPLE FROM CLASS:
// Nothing shows up because
// async function getData (location, apiKey, endpoint, baseURL) {
//     const data = await fetch(`http://api.weatherapi.com/v1/current.json?q=${location}&key=${apiKey}`);
//     const result = await data.json();
//     const city = result.location.name;
//     const temp = result.current.temp_c;
//     const imgIcon = result.current.condition.icon;
//     const imgText = result.current.condition.text;
//     console.log(temp);

//     const containerResult = document.getElementById("data-container");
//     containerResult.innerHTML = `
//         <p>It is currently ${temp} degrees in ${city} right now</p>
//         <img src="${imgIcon}" alt="${imgText}"/>
//     `
// }

// getData("mississauga", "168267a458b84f939b4212828240606");

async function getData(){
    var apiKey = ("MNIbSY6o9DSzYlbH2fzdtXP0FARbbbr3H0ehkEU9");
    const data = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}`);
    let result = await data.json();
    const imgEXP = result.explanation;
    const imgURL = result.url;
    console.log(result);

    const containerResult = document.getElementById("data-container");
    containerResult.innerHTML = `
        <img src="${imgURL}" width=90%>
    `
    const containerEXP = document.getElementById("exp-container");
    containerEXP.innerHTML = `
        <p>${imgEXP}</p>
    `
}

getData("MNIbSY6o9DSzYlbH2fzdtXP0FARbbbr3H0ehkEU9");