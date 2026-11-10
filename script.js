window.addEventListener('load', () => {
    setTimeout(() => {
        const loader = document.getElementById('loader');
        const mainContent = document.getElementById('main-content');

        loader.style.opacity = '0';
        loader.style.visibility = 'hidden';

        mainContent.classList.add('show');
    }, 2000);
});
