
function my_max(arr) {
     return (Math.max(...arr));
}
alert("Max value is : " + my_max([1,5,6,8,9]));


function vowel_count(string) {
    var m = string.match(/[aeiou]/gi);
    return m == null ? 0 : m.length;
}
console.log(vowel_count("cacaphonie"));


function reverse(string) {
    return string.split("").reverse().join("");
}
console.log(reverse("hello, world"));
