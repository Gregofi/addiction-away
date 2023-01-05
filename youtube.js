const removeHTML = () => {
    const videoGrids = document.getElementsByTagName('ytd-rich-grid-renderer');
    for (grid of videoGrids) {
        grid.style.display = 'none';
    }
};

setInterval(removeHTML, 100);
