const InitInstaFunc = () => {
    const feed = new Instafeed({
        accessToken: 'your-token'
    });
    feed.run();

    setTimeout(()=>{
        document.querySelector(".instafeed").classList.add("shadowed")
    })
}

InitInstaFunc()