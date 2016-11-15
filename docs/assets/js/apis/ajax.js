window.onload = function() {
    var ajaxButton = document.getElementById('ajax-button');
    var ajaxLandingZone = document.getElementById('ajax-landing-zone');

    ajaxButton.addEventListener('click', function(e) {
        var path = '/'+this.dataset.path;
        loadContent(path);
    }, false);

    function loadContent(path) {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', path);
        xhr.send(null);
        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    ajaxLandingZone.innerHTML += xhr.responseText;
                } else {
                    console.log('Error: ' + xhr.status); // An error occurred during the request.
                }
            }
        };
    }
};
