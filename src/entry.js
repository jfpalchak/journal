
function Entry(title, journalText) {
  this.title = title;
  this.journalText = journalText;
}

Entry.prototype.wordCounter = function () {
  const textArr = this.journalText.split(" ").length;
  return textArr;
}

const newEntry = new Entry("Mondays suck.", "Still Mondays suck.");

newEntry.wordCounter();
