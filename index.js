class Formatter {
  static capitalize(string){
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  
  static sanitize(string){
    string = string.replace(/[^a-zA-Z0-9 -]/gim,'');
    return string.trim();
  }
  
  static titleize(){}
}