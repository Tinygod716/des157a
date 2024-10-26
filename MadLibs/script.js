(function() {
    'use strict';
    const Madlib = document.querySelector('#madlib');
    console.log('reading js');
    const Form = document.querySelector('#myform');
    
    Form.addEventListener('submit', function(event) {
        event.preventDefault();

       
        const wordlist = document.querySelectorAll('input[type="text"]'); 
        const spans = document.querySelectorAll('span'); 
        
 
        for (let i = 0; i < spans.length; i++) {
            if (wordlist[i] && wordlist[i].value) {
                spans[i].innerHTML = wordlist[i].value; 
            }
        }

    
        let allFilled = true;
        wordlist.forEach(input => {
            if (input.value.trim() === "") {
                allFilled = false;
            }
        });

        if (!allFilled) {
            alert("Please fill out all the fields.");
            return; 
        } else {
            document.querySelector('.overlay').style.display = 'flex';
        }
    });
})();