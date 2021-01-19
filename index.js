class Formatter {
  static capitalize(string){
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  
  static sanitize(string){
    string = string.replace(/[^a-z0-9_-\s\.,]/,'');
    return string.trim();
  }
  
  static titleize(){}
}