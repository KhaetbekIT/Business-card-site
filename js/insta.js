const InitInstaFunc = () => {
    const feed = new Instafeed({
        accessToken: 'IGQVJYZAWVjV3Q2b0dtZAWlOY0F5UUdoTDA1ek9GeGt5UVU5THRubEphcnVDVWlMYmZAWT1E4aG94cHQ5eUtJd2NoOUtRcnFqZAHVVM1ZAVdk5neG14OXl1UklRLXNoNXl6WmJadmVqUFl2dlFPRWlRWThDNgZDZD'
    });
    feed.run();

    setTimeout(()=>{
        document.querySelector(".instafeed").classList.add("shadowed")
    })
}

InitInstaFunc()