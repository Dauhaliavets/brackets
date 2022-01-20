module.exports = function check(str, bracketsConfig) {
  let stack = [];
  
  for(let i = 0; i < str.length; i++){
    let indOpenBracket = bracketsConfig.findIndex(el => el[0] === str[i]);

    if(indOpenBracket !== -1) {

      if(bracketsConfig[indOpenBracket][1] === stack[stack.length - 1]) {
        stack.pop();
      } else {
        stack.push(str[i]);
      }

    } else {

      if(stack.length === 0) {
        return false;
      }

      let indCloseBracket = bracketsConfig.findIndex(el => el[1] === str[i]);

      if(bracketsConfig[indCloseBracket][0] === stack[stack.length - 1]) {
        stack.pop();
      } else {
        return false;
      }

    }
    
  }

  return stack.length === 0;

}
