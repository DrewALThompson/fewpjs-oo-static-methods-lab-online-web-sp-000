class Formatter {
  static capitalize(string){
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  
  static sanitize(string){
    string = string.replace(/[^\w,'-],''/);
    return string.trim();
  }
  
  static titleize(){}
}