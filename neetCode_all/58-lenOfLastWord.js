 
var lengthOfLastWord = function(s) {

    let i = s.length-1;
    let length = 0;
    
    while(s[i] === ' '){
        i--;
    }
    
    while(s[i] !== ' ' && i >= 0){
        i--;
        length++;
    }
    return length;
};