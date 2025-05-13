const settings = document.getElementById('settings');
settings.addEventListener('click',openSetting);

document.addEventListener('DOMContentLoaded',function (){
    document.getElementById('game-mode').addEventListener('click',function (){
        window.location.href = 'board.html?mode=game';
    });
    document.getElementById('free-mode').addEventListener('click',function (){
        window.location.href = 'board.html?mode=free';
    });
});

function openSetting(){

}