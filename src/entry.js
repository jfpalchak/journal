
export default function Entry(title, journalText) {
  this.title = title;
  this.journalText = journalText;
}

Entry.prototype.wordCounter = function () {
  const textArr = this.journalText.split(" ").length;
  return textArr;
}

// returns count of all vowels in journal text
Entry.prototype.consonantCounter = function() {
    const textArray = this.journalText.split('');
  
    let vowelArray = ["a", "e", "i", "o", "u"];
    let vowels = 0;
    let consonants = 0;

    textArray.forEach(function(letter) {
        if (!vowelArray.includes(letter.toLowerCase())) {
            consonants++;
        }
        else {
            vowels++;
        }
    });  
  
    return [consonants, vowels];
  }


const newEntry = new Entry("Mondays suck.", "Still Mondays suck.");

newEntry.wordCounter();