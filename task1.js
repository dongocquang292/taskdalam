// 1 .Variable
/*
    3 kiểu khai báo: var, let, const
*/

// Những biến được khai báo bên ngoài bất kì một hàm sẽ có phạm vi toàn cục
var name1 = 'Quang';
let name2 = 'Kien';

function testVar(){
    console.log(name1);
    console.log(name2);
}
testVar(); // Quang

// Biến khai báo trong hàm sẽ có phạm vi cục bộ
function testVar2(){
    var a = 3;
    let b = 4;
}
    console.log(a);
    console.log(b);

// 2 biến này ko sử dụng được vì nó khai báo ở trong hàm testVar2

// Block Scope 
// var khai báo trong {} có thể truy cập bên ngoài
{
    var x = 6;
}
console.log(x); // => 6;

// let và const khai báo trong {} không thể truy cập bên ngoài
{
    let y = 7;
}
{
    const z = 6;
}
console.log(y); // => undefined
console.log(z); // => undefined

// Redeclaring
// var được phép redeclaring ở bất cứ đâu
var re1 = 3;
var re1 = 4;
console.log(re1); // => 4;
// var với let, let với let trong cùng phạm vi, block là không được phép
var re2 = 8;
let re2 = 9; 
{
    let re3 = 4;
    let re3 = 5; // Identifier 're3' has already been declared
}
// let với let khác phạm vi, khối thì được phép
let re4 = 4;
{
    let re4 = 6;
}
console.log(res4); // => 4
// var, let có thể thay đổi được giá trị
var x = 3;
var x = 5
console.log(x); // => 5

let y = 5;
{
    let y = 6;
    console.log(y); // => 6
}
console.log(y); // => 5

// Biến const phải được gán giá trị khi khai báo
const x; // sai

// Biến const không xác định giá trị không đổi, mà xác định tham chiếu không đổi. Bởi vậy không thể thay giá trị là hằng số nhưng có thể thay đổi thuộc tính
const x = 3;
x = 4; // sai

const meo = {
    name: 'Tom',
    weight: 3
};
meo.name = 'Tam'; // thay đổi được.

// 2.Scope
// scope chia làm 2 loại: global và local
var x = 2; // x đang ở golbal scope
function myFunction(){
    var y = 3; // y đang ở local scope
}
// tất cả các scopes chỉ được tạo ra bởi function scope
function myFunction2(){
    // đây là scope của function
}

// function bên trong có thể truy cập đến scope của function bên ngoài, đó gọi là Lexical Scope hay là Closure - còn được gọi là Static Scope
    // Scope A
var myFunction = function () {
    // Scope B
    var name = 'Bap'; // định nghĩa trong Scope B
var myOtherFunction = function () {
      // Scope C: `name` có thể được truy cập tại đây
    };
};
//  scope bên ngoài không thể truy cập đến scope bên trong 
var scope1 = function () {
    // name = undefined
    var scope2 = function () {
      // name = undefined
      var scope3 = function () {
        var name = 'Quang'; // scope local
      };
    };
  };

// 3. Loop
// for loop
for(var i = 0; i < 10; i++) {
    console.log(i) // 0 1 2 3 4 5 6 7 8 9
}
// vòng for bắt đầu với giá trị i = 0, điều kiện dừng vòng for i < 10, sau mỗi lần lặp thì i tăng 1 

// While loop
var i = 0;
while(i < 10) {
    console.log(i); // 0 1 2 3 4 5 6 7 8 9
    i++;
}
// vòng lặp while kiểm tra điều kiện trước khi lặp, nếu thỏa mãn điều kiện thì vào vòng lặp, thoát vòng lặp khi ko thỏa mãn điều kiện

// Do...While loop
var i = 10;
do {
    console.log(i);
    i++;
}
while ( i > 10 && i < 12) // 10 11
// vòng lặp do while chạy vòng lặp trước rồi mới kiểm tra điều kiện, dù có sai điều kiện thì đã chạy 1 lần.

//forEach() 
// forEach sẽ lặp lại từng phần tử trong mảng theo thứ tự index và thực thi function được truyền vào
var arr=[10, 20, "hi", ,{}];

arr.forEach(function(item, index){
    console.log(' arr['+index+'] is '+ item);
});
// index thứ tự phần tử mảng, item là các giá trị phần tử của mảng
/*  arr[0] is 10
    arr[1] is 20
    arr[2] is hi
    arr[4] is [object Object]
*/

// map()
var a = [1,2,3,4];
var phepnhan =  a.map(function(x){
    return x*x;
});
console.log(phepnhan); // => [1,4,9,16]
// x được truyền vào đại diện cho phần tử của mảng a, hàm map trả về 1 mảng mới có kích thước bằng mảng ban đầu

// filter()
var a = [1,2,3,4];
var ktra = a.filter(function(x){
    return x % 2 === 0;
});
// hàm filter lọc các phần tử của mảng thỏa mãn điều kiện chia hết cho 2, cho ra kết quả là 1 mảng [2,4]

// find()
var a = [1,2,3,4];
var ktra = a.find(function(x){
    return x % 2 === 0;
});
// hàm find trả về 1 phần tử đầu tiên thỏa mãn điều kiện, sau khi tìm thấy phần tử thì thoát khỏi vòng lặp

// reduce()
var a = [1,2,3,4];
var ktra = a.reduce(function(x,y){
    return a + b;
});
// Hàm reduce trả về 1 giá trị là 10, x là phần tử đầu tiên trong mảng, y là phần tủ thứ 2. Lần lặp đầu lấy 1+2=3, lần lặp sau lấy 3+3=6, 6+4=10;


// 4. Function
// tạo 1 hàm 
var a = 3;
var b = 4;
function myFunction(a,b){
    return a + b;
}
// Hàm myFunction truyền vào 2 tham số, hàm trả về giá trị tổng a và b là 7
// Gọi hàm
myFunction();

// 5. Comparison and Logical Operators
/* các toán tử so sánh:
    >	Lớn hơn
    >=	Lớn hơn hoặc bằng
    <	Nhỏ hơn
    <=	Nhỏ hơn hoặc bằng
    ==	Bằng giá trị (không phân biệt kiểu dữ liệu)
    ===	Bằng giá trị (phải có chung kiểu dữ liệu)
    !=	Khác giá trị
    !==	Khác giá trị hoặc khác kiểu dữ liệu
*/ 
        var result_1 = 5 > 3; // true
        var result_2 = 5 > 7;  // flase
        var result_3 = 5 >= 3;  // true
        var result_4 = 5 >= 5;// true
        var result_5 = 5 >= 7;// flase
        var result_6 = 5 < 7;// true
        var result_7 = 5 < 3;// flase
        var result_8 = 5 <= 7;// true
        var result_9 = 5 <= 5;// true
        var result_10 = 5 <= 3;// flase
        var result_11 = 5 == "5";// true
        var result_12 = 5 === "5";// flase
        var result_13 = 5 != 7;// true
        var result_14 = 5 !== "7";// true

// Toán tử logic có 3 loại:  && (and), ||(or), !(not)
        var result_1 = true && true;// true
        var result_2 = true && false;// flase
        var result_3 = false && true;// flase
        var result_4 = false && false;// flase
        var result_5 = true || true;// true
        var result_6 = true || false;// true
        var result_7 = false || true;// true
        var result_8 = false || false;// flase
        var result_9 = !true;// flase
        var result_10 = !false;// true

// 6. Condition 
// if
var a = 5;
var b = 6;
if (a != b) {
	//Vì a khác b nên code phía trong if sẽ được chạy
	document.write('a khác b');
}

//if else
var a = 3;
if(a === 4){
    console.log('NOT');
} else {
    console.log('OK');
}
// a có giá trị bằng 3, chạy đến if kiểm tra điều kiện ko thỏa mãn chạy sang else

// switch case
var so = 3;
switch (so) {
    case 0:
        document.write('không');
        break;
    case 1:
        document.write('Một');
        break;
    case 2:
        document.write('Hai');
        break;
    case 3:
        document.write('Ba');
        break;
}
// so là biến muốn kiểm tra, qua các case nếu case nào đúng thì break và in ra kết quả.

// 7.Các toán tử
// Các toán tử gán
// var x = 2; => gán 2 vào x;
// var x += 2; => x = x + 2;
// var x -= 2; => x = x - 2;
// var x *= 2; => x = x * 2;
// var x /= 2; => x = x/2;
// var x %= 2; => x = x % 2

// Các toán tử số học
// var a = 3;
// var b = 5;
// var c = a + b; => 8
// var d = a - b; => -2
// var e = a * b; => 15
// var f = a / b; => 0.6
// var k = a % b; => 3 phép chia lấy phần dư
// var a++; => a tăng 1
// var a--; => a giảm 1



// Hoisting trong JS
// là cơ chế của JavaScript cho phép các khai báo biến hoặc hàm được dời lên trên đầu phạm vi của chúng trước khi thực thi đoạn code

// Hoistring với Biến
a = 13;
console.log(a); // 13
var a;
// Dù phần khai báo biến a ở cuối cùng nhưng vẫn có thể dùng biến a để console ra kết quả 13

// chỉ di chuyển phần khai báo, không lưu trữ khởi tạo
var name = 'Quang';
console.log(name + age);
var age = 23;
//Kết quả consol sẽ là Quang undefined

// Hoistring với Hàm
hoi();
function hoi() {
    var message = "Lập trình JavaScript căn bản";
    document.write(message);
}
// Gọi hàm trước cũng tương đương với gọi hàm sau, đều cho ra kết quả

// Khai báo hàm
function hoi() {
    var message = "Lập trình JavaScript căn bản";
    document.write(message);
}
hoi();

// Đối với Biểu thức hàm, hàm được gán cho biến nên cơ chết hoisting không áp dụng
hoi();
var hoi = function() {
    var message = "Lập trình JavaScript căn bản";
    document.write(message);
};
// Gây ra lỗi hois is not a function

// Gán biến sẽ ưu tiên hơn khai báo hàm
var a = 'Gán biến';
function a(){
    document.write('Hàm');
}
document.write(typeof a); // cho ra kết qủa là Gán biến

// Biểu thức hàm ưu tiên hơn gán biến
var a = 'Gán biến';
var a = function(){
    document.write('Hàm');
}
document.write(typeof a); // cho ra kết qủa là Hàm

//Khai báo hàm ưu tiên hơn khai báo biếnKhai báo hàm ưu tiên hơn khai báo biến
var a;
function a(){
    document.write('Hàm');
}
document.write(typeof a); // cho ra kết qủa là Hàm

