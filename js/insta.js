const InitInstaFunc = () => {
    const feed = new Instafeed({
        accessToken: 'IGQVJXalE1MHBXV2dzclJHWUNRTDVoLThILXUxNDB0MmxMX0R5b1c3Tzg5U1dVdUxpb2U0c3RRS3AzMnlqTFd1X19jUGhHV0NWZAG05bXVkQnVZAX0xPeno4YkRyTmgyMldlLU9PbG9TLWFWcTlySVZA2agZDZD'
    });
    feed.run();

    setTimeout(()=>{
        document.querySelector(".instafeed").classList.add("shadowed")
    })
}

InitInstaFunc()