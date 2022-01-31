
// processingData 
function processingData() {

    var number = document.getElementById('number').value;
    var subjectCredit = document.getElementById('perSubjectCredit').value;
    var numberArray = number.split(','); //create Array of subject number
    var subjectCreditArray = subjectCredit.split(','); //create array per subject credit
    // number convert int 
    var numberList = [];
    var subCreditList = [];
    var cgpaCountList = []; //cgpa A+ added
    var cgpaPoint = []; //cgpa point
    var earnedPoint = []; //cgpa * per subject
    var totalEarnedPoint = 0;
    var totalCredit = 0;
    // tableData table row 
    var tr = ''
    // varify number and credit input
    for (const intNumber of numberArray) {
        var numberConvertInt = Number(intNumber);
        numberList.push(numberConvertInt);
        // condition apply cgpa and point
    
        if (numberConvertInt >= 80) {
            
            cgpaCountList.push('A+');
            cgpaPoint.push(4.00);
        }
        else if (numberConvertInt >= 75) {
            
            cgpaCountList.push('A');
            cgpaPoint.push(3.75);
        }
        else if (numberConvertInt >= 70) {
            
            cgpaCountList.push('A-');
            cgpaPoint.push(3.50);
        }
        else if (numberConvertInt >= 65) {
            
            cgpaCountList.push('B+');
            cgpaPoint.push(3.25);
        }
        else if (numberConvertInt >= 60) {
            
            cgpaCountList.push('B');
            cgpaPoint.push(3.00);
        }
        else if (numberConvertInt >= 55) {
            
            cgpaCountList.push('B-');
            cgpaPoint.push(2.75);
        }
        else if (numberConvertInt >= 50) {
            
            cgpaCountList.push('C+');
            cgpaPoint.push(2.50);
        }
        else if (numberConvertInt >= 45) {
            
            cgpaCountList.push('C');
            cgpaPoint.push(2.25);
        }
        else if (numberConvertInt >= 40) {
            
            cgpaCountList.push('D');
            cgpaPoint.push(2.00);
        }
        else if (numberConvertInt < 40) {
            cgpaCountList.push('F');
            cgpaPoint.push(0.00);
        }
    }
// earnedPoint calculator
    for (let index = 0; index < cgpaPoint.length; index++){
        const cgpa = cgpaPoint[index];
        const subCredit = Number(subjectCreditArray[index]); //convert credit 
        subCreditList.push(subCredit);
        var perSubjectEarnPoint = cgpa*subCredit;
        earnedPoint.push(perSubjectEarnPoint);
        totalEarnedPoint += perSubjectEarnPoint;
        totalCredit += subCredit;
    }
    // tableData decorate
    var avgCgpa = totalEarnedPoint / Number(totalCredit) 

    if (numberList.length == subCreditList.length){
        var i = 0;
        while (i < cgpaPoint.length) {
            var creditEror = ''
            var earnedPointEror = ''
            var cgpaEror = ''
            if (Number.isNaN(subCreditList[i])) {
                creditEror = 'Invalid';
                earnedPointEror = 'Invalid';
                cgpaEror = "Invalid";
            }
            else {
                creditEror = subCreditList[i];
                earnedPointEror = earnedPoint[i];
                cgpaEror = avgCgpa.toFixed(2);
            }
            if (i==0) {
                tr += '<tr><td>'+(i+1)+'</td><td>'+numberList[i]+'</td><td>'+creditEror+'</td><td>'+cgpaCountList[i]+'</td><td>'+cgpaPoint[i]+'</td><td>'+earnedPointEror+'</td><td height="'+25*cgpaPoint.length+'px;" rowspan="'+cgpaPoint.length+'"><div class="avgCgpa">'+cgpaEror+'</div><td></tr>'
            }
            else {
                tr += '<tr><td>'+(i+1)+'</td><td>'+numberList[i]+'</td><td>'+creditEror+'</td><td>'+cgpaCountList[i]+'</td><td>'+cgpaPoint[i]+'</td><td>'+earnedPointEror+'</td></tr>'
            }
            i++
        }
        var errorMsg = document.getElementById('errorMsg').innerHTML = ''
        return tr + errorMsg;
    }
    else {
       document.getElementById('errorMsg').innerHTML = '<span class="bg-danger text-white p-1">Please check Number or Credit sequence</span>'
       return '<h1>Invalid Input</h1>'
    }
     
}

// result data 
function tableData() {
    document.getElementById('resultData').innerHTML = processingData()
    
}
