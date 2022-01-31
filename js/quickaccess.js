
function quickAccess() {
    let access = document.getElementById('access').value
    document.getElementById('preview').src = 'loading.html';
    document.getElementById('preview').style.height = '300px';
    setTimeout(weit,100);
    document.getElementById('preview').style.display = 'block';
    function weit() {
        switch (access) {
            case 'pdf.html':
                document.getElementById('preview').style.height = '800px';
                break;
            case 'VideoClass':
                document.getElementById('preview').style.height = '300px';
                break
            case 'pdf/syllabus.pdf':
                document.getElementById('preview').style.height = '200vh';
                break
            case 'convert-cgpa.html':
                document.getElementById('preview').style.height = '500vh';
                break
            case 'teachers.html':
                document.getElementById('preview').style.height = '300px';
                break
            case 'student.html':
                document.getElementById('preview').style.height = '5000px';
                break
            case 'student-gallery.html':
                document.getElementById('preview').style.height = '500px';
                break
            case 'about.html':
                document.getElementById('preview').style.height = '300px';
                break
            case 'contact.html':
                document.getElementById('preview').style.height = '100px';
                break
            default:
                break;
        }
        document.getElementById('preview').src = access;
        
    }
}
