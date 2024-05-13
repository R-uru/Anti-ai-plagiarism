document.addEventListener('DOMContentLoaded', function(){
    //! values 🎗️ 
    let p1 = document.getElementById('p1');
    let textArea = document.getElementById('textArea');
    let p2 = document.getElementById('p2');
    let outputArea = document.getElementById('outputArea');



    //* for Paste button 📋
    document.getElementById('paste').addEventListener('click', function() {
        navigator.clipboard.readText()
        .then (text => {
            document.getElementById('textArea').value += text;
            updateLetterCount(textArea, p1);
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
            updateLetterCount(textArea, p1);
            updateWordCount2(outputArea, p2);
        }
    });

    //* Word counter input 💪🏻
    function updateLetterCount(textArea, p1) {
        let text = textArea.value.trim();
        p1.textContent = 'Letter' + (text.length !== 1 ? 's: ' : ': ') + text.length;
    }
    
    function letterCount(textArea, p1) {
        textArea.addEventListener('input', () => {
            updateLetterCount(textArea, p1);
        });
    }
    
    letterCount(textArea, p1);
    

    //* Word counter output ✨
    function updateWordCount2(outputArea, p2) {
        let text2 = outputArea.value.trim();
        // let words1 = text.split(/\s+/).filter(word => word !== '');
        p2.textContent = 'Letter' + (text2.length !== 1 ? 's: ' : ': ') + text2.length;
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

    //* alert show for copy 📁
    window.copyText = function() {
        var textArea = document.getElementById("outputArea");
        if (textArea.value.trim() !== '') { // Check if textarea is not empty
            var tempInput = document.createElement("textarea");
            tempInput.value = textArea.value;
            document.body.appendChild(tempInput);
            tempInput.select();
            document.execCommand("copy");
            document.body.removeChild(tempInput);
    
            var copySuccess = document.getElementById("copySuccess");
            copySuccess.classList.add("show");
            setTimeout(function() {
                copySuccess.classList.remove("show");
            }, 1000);
        }
    }
    //* Dark mode 🌚
    document.getElementById("darkModeToggle").addEventListener("click", function() {
        document.documentElement.classList.toggle("dark-mode");
        var darkModeEnabled = document.documentElement.classList.contains("dark-mode");
        localStorage.setItem("darkMode", darkModeEnabled);
    });
    
    // Check user preference on page load
    window.addEventListener("load", function() {
        var darkModePref = localStorage.getItem("darkMode");
        if (darkModePref && darkModePref === "true") {
            document.documentElement.classList.add("dark-mode");
        }
    });
    
    
    
    
    
});

//! ‎
