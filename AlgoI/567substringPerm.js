/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */

// Challenge #567 - Permutation in String
//https://leetcode.com/problems/permutation-in-string/

// This algorithm relies on a "sliding window" solution. See:
// https://www.youtube.com/watch?v=6gRj_FH3MsA
//  https://stackoverflow.com/questions/8269916/what-is-sliding-window-algorithm-examples


// solution after reviewing youtube and solution samples.
var checkInclusion = function (s1, s2) {
	let x = s1.length,
		y = s2.length;
	let a = 'a'.charCodeAt(0);

	if (!y || y < x) return false;
	if (!x) return true;

	let characters = new Array(26).fill(0);

	for (let i = 0; i < s1.length; i++) {
		characters[s1.charCodeAt(i) - a]--;
	}

	for (let i = 0; i < y; i++) {
		characters[s2.charCodeAt(i) - a]++;

		if (i < x - 1) continue;
		if (i > x - 1) characters[s2.charCodeAt(i - x) - a]--;
		if (characters.every((val) => val === 0)) return true;
	}

	return false;
};
