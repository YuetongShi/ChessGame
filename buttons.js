const mainButtons = document.querySelectorAll('.goto-main');
//The class for all button that points to main menu
const settingButtons = document.querySelectorAll('.goto-settings');

mainButtons.forEach(button => {
    button.addEventListener('click',function (){
        window.location.href="home.html"
    });
});

settingButtons.forEach(button => {
    button.addEventListener('click',function (){
        window.location.href="settings.html"
    });
});