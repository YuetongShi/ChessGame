document.addEventListener('DOMContentLoaded',function (){
    document.getElementById('game-mode').addEventListener('click',function (){
        window.location.href = 'gameApp.html?mode=game';
    });
    document.getElementById('free-mode').addEventListener('click',function (){
        window.location.href = 'gameApp.html?mode=free';
    });
});

