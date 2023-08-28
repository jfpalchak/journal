
Entry()


## Tests

#### **Describe:** Entry()

```javascript

Test 1: "It should return an object with a title and journalText properties." 
Code: let newEntry = new Entry();
Expected Output: Entry {title: undefined, journalText: undefined}

```

#### **Describe:** Entry.prototype.wordCounter()

```javascript

Test 2: "It should count the number of words in the journalText."
Code: newEntry.wordCounter("Mondays suck.");
Expected Output: 2

```

#### **Describe:** Entry.prototype.vowelCounter()

```javascript

Test 3: "It should count the number of vowels in the journalText and return that number."
Code: 
  const newEntry = new Entry("Mondays suck.", "Still Mondays suck.");
  newEntry.vowelCounter();
Expected Output: 4

```

#### **Describe:** Entry.prototype.getTeaser()

```javascript

Test 4: "It should return the first sentence of the journalText or if the first sentence is longer than eight words, the first eight words."
Code: 
  const newEntry = new Entry("Mondays suck.", "Still Mondays suck and they always will forever and ever.");
  newEntry.getTeaser();
Expected Output: "Still Mondays suck and they always will forever"

```