var isSubsequence = function(s, t) {
    
    let sPoint = 0;
    let tPoint = 0;
    
    while( sPoint < s.length && tPoint < t.length){
        if(t[tPoint] === s[sPoint]){
            sPoint++;
        }
        tPoint++;
    }
    
    return sPoint === s.length;
};