function scrollToElement(element){
    document.getElementById(element).scrollIntoView({
        behavior: "smooth",
        block:"start"
    });
}