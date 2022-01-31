function syllebus() {
    let explore = 'about.html'
    document.getElementById('preview').src = 'loading.html';
    document.getElementById('preview').class = 'iframePosition'
    setTimeout(weit,2000);
    document.getElementById('preview').style.display = 'block';
    function weit() {
        document.getElementById('preview').src = explore;
        // document.getElementById('preview').src = explore;
    }
}