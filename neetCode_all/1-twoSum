var twoSum = function(nums, target) {
    //constraints
     // nums will allways have a length >= 2, and <= 10^4
    // each int in nums will be between -10^9 and 10^9
    // the target will be between -10^9 and 10^9
    // there is only one valid answer.
    
 // okay, a hashMap using simple subtraction.
    
    let hashMap = {};
    let result = new Array(2);
    
    nums.forEach((el, i) => {
        if( hashMap[target-el] ){
             result[1] = i;
            result[0] = nums.indexOf(target - el);
        }  
        else hashMap[el] = true;
    });
    return result;
    
};


var twoSum2 = function(nums, target) {
    //constraints
     // nums will allways have a length >= 2, and <= 10^4
    // each int in nums will be between -10^9 and 10^9
    // the target will be between -10^9 and 10^9
    // there is only one valid answer.
    
    let copy = nums.map(el => el);
    copy.sort((a,b) => a-b);    

    let left = 0;
    let right = copy.length-1;
    
    let result = new Array(2);
    while(left < right){
        let sum = copy[left]+copy[right];
        if(sum === target){
            result[0] = nums.indexOf(copy[left]);
            result[1] = nums.lastIndexOf(copy[right]);
        }
        if(sum < target) left++;
        else right--;
    }
    
    
    return result;
    
};