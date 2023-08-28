
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

Entry.prototype.getTeaser = function () {
    const text = this.journalText;

    let indexNum = text.indexOf(".");
    let firstSentence = text.slice(0, [indexNum]);

    let words = firstSentence.split(" ");

    let teaserOfEight = [];

    if (words.length > 8) { // if there are more than 8 words
      for (let i=0; i < 8; i++) { // get only the first 8 words
        teaserOfEight.push(words[i]);
      }
        return teaserOfEight.join(' '); // return the 8 words
    } else {
      return words.join(' ');
    }
};

const newEntry = new Entry("Mondays suck.", "Still Mondays suck.");

newEntry.wordCounter();