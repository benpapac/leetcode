var longestCommonPrefix = function(strs) {
    if(strs.length === 1) return strs[0];
    //Constraints:
        // strs.length will be from 1 to 200.
        // the length of a string will be from 0 to 200.
        // all letters are English lowercase.
    let res = strs[0];
    let end = res.length-1;
    
    for(let i = 0; i < strs.length; i++){
        for(let j = end; j >=0; j--){
            if(res[j] === strs[i][j]){
                continue;
            } else {
             res = res.substring(0,j);
            }
        }
    }
    
    return res;
};

var longestCommonPrefix2 = function (strs) {
	if (strs.length === 1) return strs[0];
	//Constraints:
	// strs.length will be from 1 to 200.
	// the length of a string will be from 0 to 200.
	// all letters are English lowercase.

	let substring = strs[0];

	for (let i = 0; i < strs[0].length; i++) {
		let letter = strs[0].charAt(i);
		for (let j = 0; j < strs.length; j++) {
			if (strs[j].charAt(i) === letter) continue;
			else substring = substring.substring(0, i);
		}
	}

	return substring;
};

var longestCommonPrefix3 = function (strs) {
	if (strs.length === 1) return strs[0];
	if (strs.length === 2) {
		let result = strs[0];
		for (let i = 0; i < strs[0].length; i++) {
			if (strs[1].charAt(i) === strs[0].charAt(i)) continue;
			else result = result.substring(0, i);
		}
		return result;
	}

	let pivot = Math.floor(strs.length / 2);

	let lcpLeft = longestCommonPrefix(strs.slice(0, pivot));
	let lcpRight = longestCommonPrefix(strs.slice(pivot));

	return longestCommonPrefix([lcpLeft, lcpRight]);
};