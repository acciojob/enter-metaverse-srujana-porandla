//your JS code here. If required.
document.addEventListener('click', function() {
    
    const enterBtn = document.getElementById('enterBtn');
    const statusParagraph = document.getElementById('status');
    
   
    enterBtn.addEventListener('click', function() {
       
        statusParagraph.innerHTML = '<h1>Entered Metaverse</h1>';
    });
});
