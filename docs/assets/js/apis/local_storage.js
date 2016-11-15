if(window.localStorage) {
    var input = document.getElementById('input');
    var submit = document.getElementById('submit');
    var storageVariable = document.getElementById('storage-variable');

    updateStorageVariable();


    submit.addEventListener("click", function(e) {
        e.preventDefault();
        localStorage.setItem('storage', input.value);
        updateStorageVariable();
    }, false);
}

function updateStorageVariable() {
    storageVariable.value = localStorage.getItem('storage');
}
