export default 
/*function shortestWord(str) {
    var strSplit = str.split(' ');
    var shortest = strSplit;
    for(var i = 0; i < strSplit.length; i++) {
      if(strSplit[i].length <= shortest.length){
      shortest = strSplit[i];
       }
    }
    return shortest;
  }*/

  function findShortestWord(str) {
    var words = str.split(' ');
    var shortest = words.reduce((shortestWord, currentWord) => {
      return currentWord.length < shortestWord.length ? currentWord : shortestWord;
    }, words[0]);
    return shortest;
  }
  console.log(findShortestWord("The quick brown fox jumped over the lazy dog"));