// ForEach
Array.prototype.forEachTwo = function(callback) {
    for (let i = 0; i < this.length; i++) {
        callback(this[i], i, this); 
    }
};

const nums = [1, 2, 3];
nums.forEachTwo((num, index) => {
    console.log(num, index);
});

// Steps:
// i=0
// callback(this[0], 0, this)
// callback(1, 0, [1,2,3])
// (num, index) => {  ---> CallBack Function
//     console.log(num, index);
// }


//MAP
Array.prototype.mapTwo = function(callback) {
    const result = [];
    for (let i = 0; i < this.length; i++) {
        result.push(callback(this[i], i, this));
    }

    return result;
};
const arr = [1, 2, 3];
const doubled = arr.mapTwo((num) => num * 2);
console.log(doubled);

// Filter

Array.prototype.filterTwo = function(callback) {
    const result = [];

    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) {
            result.push(this[i]);
        }
    }

    return result;
};

const nums1 = [1, 2, 3, 4];
const even = nums1.filterTwo((num) => num % 2 === 0);
console.log(even);