
// Number count 
// Start he animation with JavaScript
function numberCount() {
    var showCountNumber = document.getElementById("showCountNumber");
    showCountNumber.style.animation = "count 1ms infinite"; 
    showCountNumber.addEventListener("webkitAnimationIteration", RepeatNumberFunction);
}

// Code for Chrome, Safari and Opera
function RepeatNumberFunction() {
    var number = document.getElementById('number').value
    var countNumber = number.split(',')
    this.innerHTML = '<span class="btn bg-info text-white">'+countNumber.length+'</span>';

}
// credit count


// Start he animation with JavaScript
function creditCount() {
    var showCountCredit = document.getElementById("showCountCredit");
    showCountCredit.style.animation = "count 1ms infinite"; 
    showCountCredit.addEventListener("webkitAnimationIteration", RepeatCreditFunction);
}

// Code for Chrome, Safari and Opera
function RepeatCreditFunction() {
    var perSubjectCredit = document.getElementById('perSubjectCredit').value
    var countNumber = perSubjectCredit.split(',')
    this.innerHTML = '<span class="btn bg-info text-white">'+countNumber.length+'</span>';

}
// credit count




