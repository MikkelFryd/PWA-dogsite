

if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("serviceWorker.js")

    .then(registration => {
        console.log("sw registered")
        console.log(registration)

    }).catch(error => {
        console.log("sw reg fail")
        console.log(error)
    })

} else {
    alert("pwa not supported")
}

const image = document.getElementById('dogimg')
const dogurl = 'https://dog.ceo/api/breeds/image/random'

getDogs(dogurl)

function getDogs(dogurl) {


    fetch(dogurl)
    .then(res => res.json())
    .then(json => save(json))

    .catch(err => {
        window.location.href = "https://mikk7021.github.io/PWA-dogsite/info.html"
        const offlinehtml = `
            <h2>Du er desværre offline<h2/>
            <img src="./assets/images/fetchimage.png"></img>
        `
        const main = document.querySelector('main')
        main.innerHTML = offlinehtml
    })

    function save(result) {
        image.src = result.message
    }
}