window.addEventListener('DOMContentLoaded', ()=>{
    setTimeout(() => {
        $('.photos').masonry({
            // set itemSelector so .grid-sizer is not used in layout
            itemSelector: '.photo-item',
            // use element for option
            columnWidth: '.photo-sizer',
            fitWidth: true
        })
    }, 1000);
})