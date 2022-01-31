setTimeout(viewPdfList,100)
function viewPdfList() {
    // get class total lenght 
    let classLength = document.getElementsByClassName('pdfList').length;
    
    for (let index = 0; index < classLength; index++) {
        
        let getPdfId = document.getElementsByClassName('pdfList')[index].id;
        // get pdf file name
        let pdfFile = document.getElementsByClassName('pdfFile')[index].id;
        let pdfFileName =document.getElementById(pdfFile).value;
        let pdfFileList = pdfFileName.split(',');
        // add link 
        let li = ''
        for (let i = 0; i < pdfFileList.length; i++) {
            if (pdfFileList[i] == 'none') {
                li += '<li><i style="font-size:24px" class="fa">&#xf1c1;</i> No pdf found</li>'
            }
            else {
                 li += '<li><i style="font-size:24px" class="fa">&#xf1c1;</i><a href="pdf/'+getPdfId+'/'+pdfFileList[i]+'" onclick="viewPdf">'+pdfFileList[i]+'</a></li>';
            }
           
            
        }
        document.getElementById(getPdfId).innerHTML = li;
    }

}

// iframe section preview
// function viewPdf() {
//     let cgpa = 'convert-cgpa.html';
//     document.getElementById('preview').src = 'loading.html';
//     document.getElementById('preview').style.height = '300px';
//     document.getElementById('preview').style.display = 'block';
//      setTimeout(weit,100);
//     function weit() {
//         document.getElementById('preview').src = cgpa;
//         document.getElementById('preview').style.height = '4000px';
//     }
// }