var checkbox = document.querySelector('input[name=theme]');

checkbox.addEventListener('change', function() {
    if(this.checked) {
        transform('lite', '#f7f7f7')
        
    } else {
        transform('', '#0c0e10')
    }
})

let transform = function(data, color) {
    document.querySelector('meta[name="theme-color"]').setAttribute("content", color);
    document.documentElement.setAttribute('data-theme', data)
    document.documentElement.classList.add('transition');
    window.setTimeout(() => {
        document.documentElement.classList.remove('transition')
    }, 1000)
};