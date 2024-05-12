 document.addEventListener('DOMContentLoaded', function(){
    // values
    let p1 = document.getElementById('p1');
    let textArea = document.getElementById('textArea');
    let p2 = document.getElementById('p2');



    //* for Paste button 📋
    document.getElementById('paste').addEventListener('click', function() {
        navigator.clipboard.readText()
        .then (text => {
            document.getElementById('textArea').value += text;
            updateWordCount(textArea, p1);
        })
        .catch(err => {
            alert(err);
        })
    });
    
    //* Trash Button 🚮
    document.getElementById('trash').addEventListener('click', function(){
        var ask = confirm('Do you want to delete the text?');
        if (ask){
            document.getElementById("textArea").value = '';
            document.getElementById("outputArea").value = '';
            updateWordCount(textArea, p1);
        }
    });

    //* Word counter 💪🏻
    function updateWordCount(textArea, p1) {
        let text = textArea.value.trim();
        let words1 = text.split(/\s+/).filter(word => word !== '');
        p1.textContent = ' Word' + (words1.length !== 1 ? 's: ' : ': ') + words1.length;
    }
    
    function wordCount(textArea, p1) {
        textArea.addEventListener('input', () => {
            updateWordCount(textArea, p1);
        });
    }
    
    wordCount(textArea, p1);
});