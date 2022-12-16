function arrayFilter(sentence){
    var words = sentence.split(" ");
    var biggerThanThree = [];

    for (var i = 0; i < words.length; i++) {
        var currentWord = words[i];
        if (currentWord.length > 3) {
            biggerThanThree.push(currentWord);
        }
    }
    console.log(biggerThanThree.join(" "));
    return biggerThanThree.join(" ");
}

arrayFilter("London is a big city in the United Kingdom");
// should return "London city United Kingdom"