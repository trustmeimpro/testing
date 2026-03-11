let bar = document.getElementById("bar")
let percent = document.getElementById("percent")

let value = 0

let loading = setInterval(() => {

    value++

    bar.style.width = value + "%"
    percent.innerText = value + "%"

    if(value >= 100){
        clearInterval(loading)
    }

}, 50)