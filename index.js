class Formatter {
  static capitalize(string){
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  
  static sanitize(string){
    string = string.replace(/[^-, 'A-Za-z0-9]+/gim,'');
    return string.trim();
  }
  
  static titleize(string){
    let words = string.split(' ');
    let articles = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from'];
    words.map((word) => {
      if (articles.includes(word)){
        return word;
      } else {
        Formatter.capitalize(word);
      }
    })
    return words.join(' ');
  }
}