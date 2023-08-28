
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