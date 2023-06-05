const InitInstaFunc = () => {
    const feed = new Instafeed({
        accessToken: 'IGQVJXWk5sd2hETTBLeWYxVnpwSmE0ZA1dVT3hmNmxtNFZAqZAU1PUnZAmM29IWHM5bXlPSTdjZAFZAoU1Bnd2R0Qlo4ZAHNZAa0FXY1ZAfb1p4VGkya3p2VlAyMDJ6WWcwSXdkXzdfVC1aOHhLVVlEc3gwakx4WgZDZD'
    });
    feed.run();

    setTimeout(()=>{
        document.querySelector(".instafeed").classList.add("shadowed")
    })
}

InitInstaFunc()