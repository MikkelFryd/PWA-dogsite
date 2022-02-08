

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