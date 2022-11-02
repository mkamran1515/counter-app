function initApp(){
    document.getElementsById("result_app").innerHTML = 0;
}
function addNew() {
    let result = document.getElementById("result_app").innerHTML;
    result = parseInt(result);
    if(result <= 0 ) {
        result = 0;
    }
    result = result + 1;
    document.getElementById("result_app").innerHTML = result;
}
function reset() {
    let result = document.getElementById("result_app").innerHTML;
    result = parseInt(result);
    result = 0;
    document.getElementById("result_app").innerHTML = result;
}
function removeNew() {
    let result = document.getElementById("result_app").innerHTML;
    if(result <= 0 ) {
        result = 0;
        document.getElementById("result_app").innerHTML = result;
    }
    else {
        result = parseInt(result);
        result = result - 1;
        document.getElementById("result_app").innerHTML = result;
    }
}