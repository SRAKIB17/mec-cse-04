// Navigator link
function navOpen() {
    document.getElementById('navLink').style.display = 'block';
    document.getElementById('navOpen').style.display = 'none';
    document.getElementById('navClose').style.display = 'block';
}
function navClose() {
    document.getElementById('navLink').style.display = 'none';
    document.getElementById('navOpen').style.display = 'block';
    document.getElementById('navClose').style.display = 'none';
}
// toggle buttom auto iframe
function home() {
    navClose()
    document.getElementById('preview').style.display = 'block';
    document.getElementById('preview').src = 'loading.html';
}

function about() {
    navClose()
    let about = 'about.html'
    document.getElementById('preview').src = 'loading.html';
    document.getElementById('preview').style.height = '300px';
    document.getElementById('preview').style.display = 'block';
     setTimeout(weit,100);
    function weit() {
        document.getElementById('preview').src = about;
    }
}
function explore() {
    navClose()
    let explore = 'explore.html'
    document.getElementById('preview').src = 'loading.html';
    document.getElementById('preview').style.height = '300px';
    document.getElementById('preview').style.display = 'block';
     setTimeout(weit,100);
    function weit() {
        document.getElementById('preview').src = explore;
    }
}
function contact() {
    navClose()
    let contact = 'contact.html';
    document.getElementById('preview').src = 'loading.html';
    document.getElementById('preview').style.height = '300px';
    document.getElementById('preview').style.display = 'block';
     setTimeout(weit,100);
    function weit() {
        document.getElementById('preview').style.height = '100px';
        document.getElementById('preview').src = contact;
    }
}
function convertCgpa() {
    navClose()
    let cgpa = 'convert-cgpa.html';
    document.getElementById('preview').src = 'loading.html';
    document.getElementById('preview').style.height = '300px';
    document.getElementById('preview').style.display = 'block';
     setTimeout(weit,100);
    function weit() {
        document.getElementById('preview').src = cgpa;
        document.getElementById('preview').style.height = '4000px';
    }
}