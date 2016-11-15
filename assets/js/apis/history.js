window.onload = function() {
    var l = history.length;
    var randomHistoryIndex = Math.floor(Math.random() * l) + 1;
    var button = document.getElementById('random-history-button');
    
    button.addEventListener('click', function() {
        console.log(-randomHistoryIndex);
        history.go(-randomHistoryIndex);
    });
};
