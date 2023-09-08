function setHref() {
    document
    .querySelectorAll('.next-page')
    .forEach(element => {
         element.setAttribute('href', `#${parseInt(element.getAttribute('id'))+1}`);
    });
}
setHref()