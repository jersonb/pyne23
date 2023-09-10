function setHref() {
    let i=0;
    document
    .querySelectorAll('.next-page')
    .forEach(element => {
         element.setAttribute('id', i++);
         element.setAttribute('href', `#${parseInt(element.getAttribute('id'))+1}`);
    });
}
setHref()