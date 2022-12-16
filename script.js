function arrayFilter(sentence){
    var words = sentence.split(" ");
    var biggerThanThree = [];

    for (var i = 0; i < words.length; i++) {
        console.log(words[i]);
    }
}

arrayFilter("London is a big city in the United Kingdom");
// should return "London city United Kingdom"