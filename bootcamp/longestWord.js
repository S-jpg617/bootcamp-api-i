export default function longestWord(sentence) {
    var sentenceSplit = sentence.split(' ');
    var longest = "";
    for (var i = 0; i < sentenceSplit.length; i++) {
      if (sentenceSplit[i].length >= longest.length) {
        longest = sentenceSplit[i];
      }
    }
    return longest;
  }
  