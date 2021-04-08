// Apply header in all html documents
const header = document.querySelector('header');
const headerxhr = new XMLHttpRequest();
headerxhr.addEventListener('load', e => {
    header.innerHTML = headerxhr.response;
});
headerxhr.open('get', './header.html');
headerxhr.send();

// Apply nav in all html documents
const nav = document.querySelector('nav');
const navxhr = new XMLHttpRequest();
navxhr.addEventListener('load', e => {
    nav.innerHTML = navxhr.response;
});
navxhr.open('get', './nav.html');
navxhr.send();

// Apply footer in all html documents
const footer = document.querySelector('footer');
const footerxhr = new XMLHttpRequest();
footerxhr.addEventListener('load', e => {
    footer.innerHTML = footerxhr.response;
});
footerxhr.open('get', './footer.html');
footerxhr.send();