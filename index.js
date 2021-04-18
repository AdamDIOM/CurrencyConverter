content = document.getElementById('content');

async function getCurrencies(){
    const response = await fetch("https://free.currconv.com/api/v7/currencies?apiKey=8d0ec3330ebae2692015")
    .then(response => response.json());
    json = response;
    //console.log(json);
    for(currency in json.results){
        var option = document.createElement("option");
        option.innerHTML = currency;
        option.value = currency;
        document.getElementById('from').appendChild(option);
        var option = document.createElement("option");
        option.innerHTML = currency;
        option.value = currency;
        document.getElementById('to').appendChild(option);
    }
}

async function fetchData(){
    const response = await fetch(`https://free.currconv.com/api/v7/convert?q=${document.getElementById('from').value}_${document.getElementById('to').value}&compact=ultra&apiKey=8d0ec3330ebae2692015`)
    .then(response => response.json());
    json = response;
    console.log(json);
    for(val in json){
        console.log(val);
        document.getElementById('content').innerHTML = json[val] * document.getElementById('value').value;
    }
}