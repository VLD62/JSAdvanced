function wordsUppercase(words){
    console.log((words.match(/\w+/g)).join(", ").toUpperCase())
}

wordsUppercase("Functions in JS can be nested, i.e. hold other functions")