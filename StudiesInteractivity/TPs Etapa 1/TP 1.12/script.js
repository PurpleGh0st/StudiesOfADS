var links = document.querySelectorAll('a');

links.forEach(function(link) {
    link.removeAttribute('target');
});