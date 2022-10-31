var removeElement = function (nums, val) {
	//Constraints
	// nums will have a length from 0 to 100
	// nums[i] will be from 0 to 50
	// the value requested will be from 0 to 100.
	let length = 0;
	for (let i = 0; i < nums.length; i++) {
		if (nums[i] !== val) {
			nums[length] = nums[i];
			length++;
		}
	}
	return length;
};
