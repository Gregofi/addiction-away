
const remove_grid = () => {
    // Remove grid of videos
    var style = document.createElement('style');
    style.innerHTML = `
    ytd-rich-grid-renderer {
        display: none
    }
    `;

    if (!document.location.pathname.match(/\/@.*/)) {
        document.head.appendChild(style);
    }
}

remove_grid();


const remove_shorts = () => {
    // Remove shorts menu
    let entries = document.getElementsByTagName('ytd-mini-guide-entry-renderer');

    for (obj of entries) {
        if (obj.getAttribute('aria-label') == 'Shorts') {
            obj.style.display = 'none';
        }
    }
};

// This is stupid and inefficient, use MutationObserver
setInterval(remove_shorts, 50);
