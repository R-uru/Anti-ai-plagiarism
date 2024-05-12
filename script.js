 document.addEventListener('DOMContentLoaded', function(){
    // values
    let p1 = document.getElementById('p1');
    let textArea = document.getElementById('textArea');
    let p2 = document.getElementById('p2');
    let outputArea = document.getElementById('outputArea');



    //* for Paste button 📋
    document.getElementById('paste').addEventListener('click', function() {
        navigator.clipboard.readText()
        .then (text => {
            document.getElementById('textArea').value += text;
            updateWordCount(textArea, p1);
        })
        .catch(err => {
            console.log(err);
        })
    });
    
    //* Trash Button 🚮
    document.getElementById('trash').addEventListener('click', function(){
        var ask = confirm('Do you want to delete the text?');
        if (ask){
            document.getElementById("textArea").value = '';
            document.getElementById("outputArea").value = '';
            updateWordCount(textArea, p1);
            updateWordCount2(outputArea, p2);
        }
    });

    //* Word counter input 💪🏻
    function updateWordCount(textArea, p1) {
        let text = textArea.value.trim();
        let words1 = text.split(/\s+/).filter(word => word !== '');
        p1.textContent = 'Word' + (words1.length !== 1 ? 's: ' : ': ') + words1.length;
    }
    
    function wordCount(textArea, p1) {
        textArea.addEventListener('input', () => {
            updateWordCount(textArea, p1);
        });
    }
    wordCount(textArea, p1);

    //* Word counter output ✨
    function updateWordCount2(outputArea, p2) {
        let text2 = outputArea.value.trim();
        let word2 = text2.split(/\s+/).filter(word => word !== '');
        p2.textContent = 'Word' + (word2.length !== 1 ? 's: ' : ': ') + word2.length;
    }
    
    function wordCount2(outputArea, p2) {
        outputArea.addEventListener('input', () => {
            updateWordCount2(outputArea, p2);
        });
    }
    wordCount2(outputArea, p2);

    //* Ai button 😈
    window.addLetter = function() {
        var input = document.getElementById("textArea").value;
        var output = insertWord(input);
        document.getElementById("outputArea").value = output;
        updateWordCount2(outputArea, p2);
    }
    
    function insertWord(inputString) {
        return inputString.split('').join('‎');
    }
});

//! ‎

