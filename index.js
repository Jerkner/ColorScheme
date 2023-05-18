let seedColorValue = document.getElementById("seedColor").value.slice(1)
let mode = document.getElementById("colorSchemeField").value

function render() {
        document.getElementById("colorPalette").innerHTML =''
        document.getElementById("footer").innerHTML =''
        const url = `https://www.thecolorapi.com/scheme?hex=${seedColorValue}&mode=${mode}`
    fetch(url, {
    method: "GET",
    headers: {
        "Content-Type": "application/json",
    }
})
  .then(response => response.json())
  .then(data => {
    for (let i = 0; i < data.colors.length; i++) {
        document.getElementById("colorPalette").innerHTML +=`
        <div id="color${i}" class="color" style="background-color:
        ${data.colors[i].hex.value};"></div>`
    }

    for (let i = 0; i < data.colors.length; i++) {
        document.getElementById("footer").innerHTML +=`
        <div class="hexValue">${data.colors[i].hex.value}</div>`        
    }
  })
}

document.getElementById("getColorSchemeBtn").addEventListener("click",function() {
    mode = document.getElementById("colorSchemeField").value
    seedColorValue = document.getElementById("seedColor").value.slice(1)
render()
})

render()
