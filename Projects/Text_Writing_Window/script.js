/* 
ES5 = Javascript 
const TypeWriter = function (txtElement, words, wait = 3000) {
    this.txtElement = txtElement;
    this.words = words;
    this.txt = '';
    this.wordIndex = 0;
    this.wait = parseInt(wait, 10);
    this.type();
    this.isDeleting = false;
} */

/* // Type Method
TypeWriter.prototype.type = function () {
    // Current index of word
    const current = this.wordIndex % this.words.length;
    // get the full text of current word
    const fulltxt = this.words[current];

    // check is deleting 
    if (this.isDeleting) {
        // Remove characters
        this.txt = fulltxt.substring(0, this.txt.length - 1);

    } else {
        // Adding Character
        this.txt = fulltxt.substring(0, this.txt.length + 1);

    }

    // Insrting the txt element 
    this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;

    // Type Speed
    let typespeed = 300;
    if (this.isDeleting) {
        typespeed /= 2;
    }

    // if the word is completed
    if (!this.isDeleting && this.txt == fulltxt) {
        typespeed = this.wait;
        // set delete to true
        this.isDeleting = true;
    }
    else if (this.isDeleting && this.txt == '') {
        this.isDeleting = false;
        this.wordIndex += 1;
        // Pause before start typing 
        typespeed = 500;
    }

    setTimeout(() => this.type(), typespeed);
} */


// Init on DOM Load
document.addEventListener('DOMContentLoaded', init);

// Init app
function init() {
    const txtElement = document.querySelector('.txt-type');
    const words = JSON.parse(txtElement.getAttribute('data-words'));
    const wait = txtElement.getAttribute('data-wait');

    // Init typewriter
    new TypeWriter(txtElement, words, wait);
}

// ES6 Class
class TypeWriter {
    constructor(txtElement, words, wait = 3000) {
        this.txtElement = txtElement;
        this.words = words;
        this.txt = '';
        this.wordIndex = 0;
        this.wait = parseInt(wait, 10);
        this.type();
        this.isDeleting = false;
    }
    type() {

        // Current index of word
        const current = this.wordIndex % this.words.length;
        // get the full text of current word
        const fulltxt = this.words[current];

        // check is deleting 
        if (this.isDeleting) {
            // Remove characters
            this.txt = fulltxt.substring(0, this.txt.length - 1);

        } else {
            // Adding Character
            this.txt = fulltxt.substring(0, this.txt.length + 1);

        }

        // Insrting the txt element 
        this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;

        // Type Speed
        let typespeed = 300;
        if (this.isDeleting) {
            typespeed /= 2;
        }

        // if the word is completed
        if (!this.isDeleting && this.txt == fulltxt) {
            typespeed = this.wait;
            // set delete to true
            this.isDeleting = true;
        }
        else if (this.isDeleting && this.txt == '') {
            this.isDeleting = false;
            this.wordIndex += 1;
            // Pause before start typing 
            typespeed = 500;
        }  

        setTimeout(() => this.type(), typespeed);
    }
}

