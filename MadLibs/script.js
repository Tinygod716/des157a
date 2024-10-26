(function(){
    'use strict'
    const Madlib = document.querySelector('#madlib');
    console.log('reading js');
    const Form = document.querySelector('#myform');
    Form.addEventListener('submit', function(event){
        event.preventDefault();
        //insert input 

        const wordlist = document.getElementsByTagName('input').value;
        const Spann = document.querySelectorAll('span');
        for(let i =0;i<span.length;i++){
            if(wordlist[i] = Spann[i]){
                spans[i].innerHTML = wordlist[i].value;
            }
        }
        document.querySelector('.overlay').style.display = 'flex';

        //alert('form submitted');

        const noun1 = document.querySelector('#noun1').value;
        const noun2 = document.querySelector('#noun2').value;
        const Verb = document.querySelector('#verb').value;
        const Adj = document.querySelector('#adj').value;
        if (!noun1 || !noun2 || !Verb || !Adj) {
            Madlib.innerHTML = "Please fill out all the fields.";
        } else {
            const myText = `you taped the words ${noun1}, ${noun2}, ${Verb}, ${Adj}`;
            Madlib.innerHTML = myText;
            noun1.value = "";
            noun2.value = "";
            Verb.value = "";
            Adj.value = "";
        }
    });
}());