setTimeout(studentList,1);
function studentList() {
    // name list 
    let studentName = document.getElementById('studentName').value;
    let nameList = studentName.split(',');
    
    // Profile picture 
    let studentImage = document.getElementById('studentImage').value;
    let imageList = studentImage.split(',');

    // social link
    let socialLink = document.getElementById('socialLink').value;
    let socialList = studentName.split(',');
    document.getElementById('socialLink').innerHTML = test
    // create table
    let totalStudent = 61;
    let tr = ''
    for (let index = 0; index < totalStudent; index++){
        let Name = nameList[index];
        let Image = imageList[index];
        let Link = socialList[index];
        tr += '<tr><td>'+(index+1)+'</td><td>'+Name+'</td><td><img src="images/favicon.png" alt="" class="studentProfile"></td><td>'+Link+'<td></tr>';
        
    }
    return document.getElementById('studentTable').innerHTML = tr;
}