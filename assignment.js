//FIRST ASSIGNMENT
//1 Javascript function that accepts a string as a parameter and converts the of each word of the string in uppercase
function uppercase(str) {
  var array1 = str.split(' ');
  var newarray1 = [];
  for (var x = 0; x < array1.length; x++){
    newarray1.push(array1[x].charAt(0).toUpperCase()+array1[x].slice(1));
  }
  return newarray1.join(' ');
}
console.log(uppercase("the quick brown fox"))

//2 Function that accepts argument and return the data type
function data_type(value) {
  var dtypes = [Function, RegExp, Number, String, Boolean, Object], x, len;
  if (typeof value === "object" || typeof value === "function") {
    for (x = 0, len = dtypes.length; x < len; x++) {
      if (value instanceof dtypes[x]) {
        return dtypes[x];
      }
    }
  }
  return typeof value;
}
console.log (data_type(12))
console.log (data_type("Yusuf"))
console.log (data_type(true))

//3 Javascript that find the area of a triangle where lenghts of its three side are 5,6,7
var side1 = 5;
var side2 = 6;
var side3 = 7;
var s = (side1 + side2 + side3)/2;
var area = Math.sqrt(s*((s-side1)*(s-side2)*(s-side3)));
console.log(area);
 
//4 To calculate area and perimeter
var lenEl = document.querySelector("#len");
var WidEl = document.querySelector("#wid");

var calcBtn=document.querySelector("#calcBtn");

var areagEl=document.querySelector("#area");
var perimeterEl=document.querySelector("#perimeter");

calcBtn.onclick=function() {
  area = Number(lenEl.value) * Number(WidEl.value)
  perimeter = 2*(Number(lenEl.value) + Number(WidEl.value))

  areagEl.innerHTML="Area of Rectangle"+area;
  perimeterEl.innerHTML="Perimeter of Rectangle"+perimeter;
}

//5 Reverse a number
function reverse_a_number(n) {
  n = n + "";
  return n.split("").reverse().join("");
}
console.log(reverse_a_number(32243));


// Num 6 String as parameter
function vowel_count(str)
{
  var vowel_list = 'aeiouAEIOU';
  var vcount = 0;
  
  for(var x = 0; x < str.length ; x++)
  {
    if (vowel_list.indexOf(str[x]) !== -1)
    {
      vcount += 1;
    }
  
  }
  return vcount;
}
console.log(vowel_count("My name is Yusuf Rabiu"));

// Num 7 To check if number is prime or not
function prime_num(n)
{

  if (n===1)
  {
    return false;
  }
  else if(n === 2)
  {
    return true;
  }else
  {
    for(var x = 2; x < n; x++)
    {
      if(n % x === 0)
      {
        return false;
      }
    }
    return true;  
  }
}

console.log(prime_num(24));
console.log(prime_num(11));

// Num 8 to check if a number is perfect
function perfect_num(number)
{
var temp = 0;
   for(var i=1;i<=number/2;i++)
     {
         if(number%i === 0)
          {
            temp += i;
          }
     }
   
     if(temp === number && temp !== 0)
        {
       console.log("It is a perfect number.");
        } 
     else
        {
       console.log("It is not a perfect number.");
        }   
 } 
perfect_num(20);
perfect_num(28);

// Num 9  Write a JavaScript function that checks whether a passed string is palindrome or not? 

function check_Palindrome(str_entry){
// Change the string into lower case and remove  all non-alphanumeric characters
var cstr = str_entry.toLowerCase().replace(/[^a-zA-Z0-9]+/g,'');
var ccount = 0;
// Check whether the string is empty or not
if(cstr==="") {
    console.log("Nothing found!");
    return false;
}
// Check if the length of the string is even or odd 
if ((cstr.length) % 2 === 0) {
    ccount = (cstr.length) / 2;
} else {
// If the length of the string is 1 then it becomes a palindrome
    if (cstr.length === 1) {
        console.log("the entered word is palindrome");
        return true;
    } else {
// If the length of the string is odd ignore middle character
        ccount = (cstr.length - 1) / 2;
    }
}
// Loop through to check the first character to the last character and then move next
for (var x = 0; x < ccount; x++) {
// Compare characters and drop them if they do not match 
    if (cstr[x] != cstr.slice(-1-x)[0]) {
        console.log("the entered word is not palindrome.");
        return false;
    }
}
console.log("The entry is a palindrome.");
return true;
}
check_Palindrome('civic');
check_Palindrome('nurses run');
check_Palindrome('mummy');

// Num 10 to generate combination of string
function substrings(str1)
{
var array1 = [];
for (var x = 0, y=1; x < str1.length; x++,y++) 
{
array1[x]=str1.substring(x, y);
}
var combi = [];
var temp= "";
var slent = Math.pow(2, array1.length);

for (var i = 0; i < slent ; i++)
{
temp= "";
for (var j=0;j<array1.length;j++) {
if ((i & Math.pow(2,j))){ 
temp += array1[j];
}
}
if (temp !== "")
{
combi.push(temp);
}
}
console.log(combi.join("\n"));
}

substrings("pot");

// Num 11 longest word within a string
function longest_word(string)
{
  var array1 = string.match(/\w[a-z]{0,}/gi);
  var result = array1[0];

  for(var x = 1 ; x < array1.length ; x++)
  {
    if(result.length < array1[x].length)
    {
    result = array1[x];
    } 
  }
  return result;
}
console.log(longest_word('Web Development'));

// Num 12
const dig = (obj, target) =>
target in obj
? obj[target]
: Object.values(obj).reduce((acc, val) => {
    if (acc !== undefined) return acc;
    if (typeof val === 'object') return dig(val, target);
    }, undefined);

const data = {
level1: {
level2: {
    level3: 'some data'
}
}
};

const dog = {
"status": "success",
"message": "https://images.dog.ceo/breeds/african/n02116738_1105.jpg"
}
console.log(dig(data, 'level3'));
console.log(dig(data, 'level4'));
console.log(dig(dog, 'message'));

// Num 13
const pull_at_Index = (arr, pullArr) => {
    let removed = [];
    let pulled = arr
    .map((v, i) => (pullArr.includes(i) ? removed.push(v) : v))
    .filter((v, i) => !pullArr.includes(i));
    arr.length = 0;
    pulled.forEach(v => arr.push(v));
    return removed;
};
let arra1 = ['a', 'b', 'c', 'd', 'e', 'f'];
console.log(pull_at_Index(arra1, [1, 3]));
let arra2 =  [1, 2, 3, 4, 5, 6, 7];
console.log(pull_at_Index(arra2, [4]));

// Num 14
const random_hex_color_code = () => {
let n = (Math.random() * 0xfffff * 1000000).toString(16);
return '#' + n.slice(0, 6);
};

console.log(random_hex_color_code())

// Num 15
const byte_Size = str => new Blob([str]).size;
console.log(byte_Size('123456'));  
console.log(byte_Size('Hello World'));  
console.log(byte_Size('Ã¢'));

// Num 16
const time_taken = callback => {
const result = callback();
return result;
};
console.log("Time taken: " + time_taken(() => Math.pow(1, 12))+" ms"); 
console.log("Time taken: " + time_taken(() => Math.sqrt(146))+" ms");
console.log("Time taken: " + time_taken(() => Math.sqrt((4 * 4) + (1 * 1)))+" ms");

// Num 17
const over = (...fns) => (...args) => fns.map(fn => fn.apply(null, args));
const minMax = over(Math.min, Math.max);
console.log(minMax(1, 2, 3, 4, 5)); 
console.log(minMax(1, 2, 5, 4, 3)); 
console.log(minMax(1, 2, 5, -4, 3));

// Num 18
const equals = (a, b) => {
if (a === b) return true;
if (a instanceof Date && b instanceof Date) return a.getTime() === b.getTime();
if (!a || !b || (typeof a !== 'object' && typeof b !== 'object')) return a === b;
if (a === null || a === undefined || b === null || b === undefined) return false;
if (a.prototype !== b.prototype) return false;
let keys = Object.keys(a);
if (keys.length !== Object.keys(b).length) return false;
return keys.every(k => equals(a[k], b[k]));
};

console.log(equals({ a: [2, { e: 3 }], b: [4], c: 'foo' }, { a: [2, { e: 3 }], b: [4], c: 'foo' }));

// Num 19
const detectDeviceType = () =>
/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
? 'Mobile'
: 'Desktop';
console.log(detectDeviceType()); 

// Num 20
const sdbm = str => {
let arr = str.split('');
return arr.reduce(
    (hashCode, currentVal) =>
    (hashCode = currentVal.charCodeAt(0) + (hashCode << 6) + (hashCode << 16) - hashCode),
    0
);
};
console.log(sdbm('password'));
console.log(sdbm('Yusuf'));

//SECOND ASSIGNMENT
//1 iterate the integers from 1 to 100, fizz, buzz, fizzbuzz
for (var i = 0; i <= 100; i++) {
    if(i%3 === 0 && i% 5 === 0) {
        console.log("fizzbuzz");
    } else if (i % 3 === 0) {
        console.log("fizz");
        // continue
    } else if (i % 5 === 0) {
        console.log("buzz");
    }
        console.log(`The number is ${i}`);
}

//2 sum the multiples of 3 and 5 under 1000
var sum = 0;
for (var x = 0; x < 1000; x++) {
    if (x % 3 === 0 || x % 5 === 0) {
        sum += x;
    }
}
    console.log(sum);

//3


//4 loop that will iterate from 0 to 15
for (var a = 0; a <= 15; a++) {
    if(a%2) {
        console.log("the number is even");
    } else if (a % a === 0) {
        console.log("the number is odd");
    } 
        console.log(`${a}`);
}

//5 happy numbers
function happy_number(num) {
    var m, n ;
    var c = [] ;
    while (num != 1 & c[num] !== true) {
        c[num] = true ;
        m = 0;
        while (num > 0) {
            n = num % 10 ;
            m += n * n ;
            num = (num - n) / 10;
        }
        num = m;
    }
    return (num == 1);
}
    var cnt = 5;
    var num = 1;
    var f5 = '';
    while (cnt -- > 0) {
        num++;
        f5 = f5+(num + ",");
            num++ ;
    }
console.log('First 5 happy numbers are : '+f5);

//6 split a string and convert to array of words
string_to_array = function (str) {
    return str.trim().split(" ");
};
console.log(string_to_array("Yusuf Rabiu"));

//7 uncapitalize the character of a string
function Uncapitalize(str1) {
    return str1.charAt(0).toLowerCase() + str1.slice(1);
}
console.log(Uncapitalize('YUSUF RABIU'));

//8 accept number as input and insert dashes
function myFunction() {
var x 
document.getElementById("myNumber").value;
document.getElementById("demo").innerHTML = x;
}

//9 add items in a blank array and display
var a = 0;
var array = Array();

function add_element_to_array()
{
 array[a] = document.getElementById("text1").value;
 alert("Element: " + array[a] + " Added at index " + a);
 a++;
 document.getElementById("text1").value = "";
}

function display_array()
{
   var e = "<hr/>";   
    
   for (var y=0; y < array.length; y++)
   {
     e += "Element " + y + " = " + array[y] + "<br/>";
   }
   document.getElementById("Result").innerHTML = e;
}

//10 remove duplicate items from an array
let chars = ['A', 'B', 'A', 'C', 'B'];
let uniqueChars = [...new Set(chars)];
console.log(uniqueChars);

//11 filter out null, false and null values
function filter_array_values(arr) {
    arr = arr.filter(isEligible);
    return arr;
  }
  
  function isEligible(value) {
    if(value !== false || value !== null || value !== 0 || value !== "") {
      return value;
    }
  }
  
  console.log(filter_array_values([58, '', 'abcd', true, null, false, 0]));

  //Second Assignment

//1 pattern that matches email address
function ValidateEmail(mail) 
{
 if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(myForm.emailAddr.value))
  {
    return (true)
  }
    alert("You have entered an invalid email address!")
    return (false)
}
//2 check if it works as a trim function using regular expression
function Trim(str)
{
  var result;
  if (typeof str === 'string') 
  {
    result = str.replace(/^\s+|\s+$/g, '');
    return result;
  }
  else
  {
    return false;
  }
}
console.log(Trim(' Yusuf '));
//3

//4 IP value

function is_IP(str)
{
 regexp =  /^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$|^(([a-zA-Z]|[a-zA-Z][a-zA-Z0-9\-]*[a-zA-Z0-9])\.)*([A-Za-z]|[A-Za-z][A-Za-z0-9\-]*[A-Za-z0-9])$|^\s*((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(%.+)?\s*$/;
  
        if (regexp.test(str))
          {
            return true;
          }
        else
          {
            return false;
          }
}

console.log(is_IP('198.156.23.5'));

console.log(is_IP("172.16.0.1"));

//5 Valid Url or not
function validURL(str) {
  var pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
    '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
    '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
    '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
    '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
    '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
  return !!pattern.test(str);
}

//6 AlphaNumeric
function alphaNumeric(str) {
    numeric= /^[A-Za-z0-9]+$/;
        if (numeric.test(str)) {
            return true;
        }else {
            return false;
        }
}
console.log (alphaNumeric("37828yoo"));
console.log (alphaNumeric("3243#sew"));

//7 US ZipCode
function zipCode(str) {
    zip = /^[0-9]{5}(?:-[0-9]{4})?$/;
        if (zip.test(str)) {
            return true;
        } else {
            return false;
        }
}
console.log (zipCode("03201-2150"));
console.log (zipCode("7892"));

//8 Uk PostCode
function ukPostcode(str) {
  post = /^(?!.*[DFIOQU])[A-VXY][0-9][A-Z]\s?[0-9][A-Z][0-9]$/;
    if (post.test(str)) {
      return true;
    } else {
      return false;
    }
}
console.log(ukPostcode("K8V3Y1"));
console.log(ukPostcode("K8V 3Y1"));
console.log(ukPostcode("Z4V4X1"));

//9 Canada PostCode
function CanadaPostcode(str) {
  Cpost = /^(?!.*[DFIOQU])[A-VXY][0-9][A-Z]\s?[0-9][A-Z][0-9]$/;
    if (Cpost.test(str)) {
      return true;
    } else {
      return false;
    }
}
console.log(CanadaPostcode("K8V3Y1"));
console.log(CanadaPostcode("K8V 3Y1"));
console.log(CanadaPostcode("Z4V4X1"));

//10 Lenght of an Object
Object.objsize = function(MyObj) {
  var osize = 0, key;
  for (key in MyObj) {
    if (MyObj.hasOwnProperty(key)) osize++;
  } 
  return osize;
};

var student = { 
  name: "Yusuf Rabiu",
  class: "HTML",
  MatricNo : 12 
};
var objsize = Object.objsize(student);
console.log('Size of the current object : ' + objsize);

//11 check whether a value boolean or not
function boolean(value) {
  return value === true || value === false || toString.call(value) === '[object Boolean]';
}
console.log(boolean(true));
console.log(boolean('bar'));

//12 check whether a value is object or not
function object(value) {
  var datatype = typeof value
  return datatype === 'function' || datatype=== 'object' && !!value;
}
console.log(object({name: 'Yusuf'}));
console.log(object('bar'));
console.log(object('90'));

//13

//14 if given values are the same or not
function is_sameType(value1, value2) {
  if(is_nan(value1) || is_nan(value2)) {
   return is_nan(value1) === is_nan(value2);
  }
  return toString.call(value1) === toString.call(value2);
}

function is_nan(val)
  {
  return val !== val;
 }

console.log(is_sameType('12', 100));
console.log(is_sameType('12', '100'));
console.log(is_sameType(12, 100));
