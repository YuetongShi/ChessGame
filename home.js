document.addEventListener('DOMContentLoaded',function (){
    document.getElementById('game-mode').addEventListener('click',function (){
        window.location.href = 'board.html?mode=game';
    });
    document.getElementById('free-mode').addEventListener('click',function (){
        window.location.href = 'board.html?mode=free';
    });
});

function openSetting(){
    document.getElementById('popup-region').classList.remove('hidden');
}

function closeSetting(){
    document.getElementById('popup-region').classList.add('hidden');
}