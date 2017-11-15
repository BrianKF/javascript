var v = [10,20,30,40,70,100,30,1000,234];

v.push(30,4000);
var items = v.length;
console.log("Number of items: " + items);
console.log(v.pop());
var items = v.length;
console.log("Number of items: " + items);
var total = 0;
for (var i = 0; i < items; i++) {
	total += v[i];
}

var mean = total / items;
console.log(mean);
