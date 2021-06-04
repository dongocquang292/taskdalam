                                                        // Làm việc với Arrays
var arr = [1, 2, 3, 4]; // tạo mảng arr
var num =  arr[0]; // truy cập vào phần tử thứ 0 của mảng arr, cho ra giá trị là 1
arr[0] = 10; // thay đổi giá trị phần tử đầu của mảng 1 -> 10
console.log(arr) // truy cập vào tất cả các phần tử của mảng bằng cách gọi tên mảng


// push() thêm phần tử vào vị trí cuối cùng array
var number = [1, 2, 3, 4];
number.push(5); // giá trị trả về là độ dài của mảng sau khi thay đổi
// [1, 2, 3, 4, 5]

// pop()
number.pop(); // đẩy phần tử cuối ra ngoài, trả về phần tử bị đẩy ra
// [1, 2, 3]

// shift()
number.shift() // đẩy phần tử đầu mảng ra ngoài, trả về phần tử bị đẩy
// [ 2, 3, 4]

// unshift()
number.unshift(8) // đẩy phần tử vào đầu mảng, trả về độ dài mới của mảng sau khi mảng bị thay đổi
// [8, 1, 2, 3, 4]

// length() để thêm phần tử vào array
var number = [1, 2, 3, 4];
number[number.length] = 5; 
console.log(number); // [ 1, 2, 3, 4, 5 ]

// map()
var sobinhphuong =  number.map(function(x){
    return x*x; // [1,4,9,16]
});
//  x đại diện cho mỗi phần tử của mảng number, trả về 1 mảng mới

// filter()
number.filter(function(x){
    return x % 2 === 0; 
});
// trả về các phần tử chia hết cho 2

// find()
number.find(function(x){
    return x % 2 === 0; 
});
// kết quả trả về là 2, find() trả về giá trị true thì dừng lại

// reduce()
var a = [1,2,3,4];
var ktra = a.reduce(function(x,y){
    return a + b;
});
// Hàm reduce trả về 1 giá trị là 10, x là phần tử đầu tiên trong mảng, y là phần tủ thứ 2. Lần lặp đầu lấy 1+2=3, lần lặp sau lấy 3+3=6, 6+4=10;

// phương thức splice()
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2, 2, "Lemon", "Kiwi");
// tham số 2 đầu tiên: vị trí  thêm vào phần tử trong mảng fruit[2]
// tham số 2 thứ 2 là số phần tử bị remove khỏi mảng : 2 phần tử
// "Lemon", "Kiwi" là 2 giá trị thêm vào mảng
// Kết quả: Banana,Orange,Lemon,Kiwi

// sử dụng splice() để xóa phần tử
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(0, 1); // 0 là vị trí xóa, 1 là số phần tử bị xóa



                                                                // Bài tập
/* 
cho 1 mảng bao gồm các phần tử
['1','2','2','1','3','1','4']
Viết func để xóa các phần tử bị trùng lặp sao cho kết quả trả về là
['1','2','3','4']
*/

// Cách dùng for()
var arr = ['1','2','2','1','3','1','4'];
var tg;
// Dùng for để sắp xếp các phần tử
for(let i = 0; i < arr.length; i++){
    for(let j = i + 1; j < arr.length; j++){
        if(arr[i] > arr[j]){
            tg = arr[i];
            arr[i] = arr[j];
            arr[j] = tg;
        }
    }
}
// Dùng for để loại bỏ các phần tử trùng nhau
for(let i = 0; i < arr.length - 1; i++){
    for(let j = i + 1; j < arr.length; j++){
        if(arr[i] == arr[j]){
            let index =  j;
            for(let k = index + 1; k < arr.length; k ++){
                arr[k-1] = arr[k];
            }
            arr.length--;
        }
    }
    
}

// Cách dùng indexOf()
// indexOf() : Trả về vị trí xuất hiện lần đầu tiên của một giá trị được tìm thấy trong mảng
var arr = ['1','2','2','1','3','1','4'];
function sapxep(arr){
    var newArr = [];
    for (var i = 0; i < arr.length; i++) { // dùng vòng for duyệt qua mỗi phần tử của mảng arr
        if (newArr.indexOf(arr[i]) === -1) { // indexOf sẽ trả về giá trị -1 nếu ko tìm thấy giá trị trong mảng. Bởi vậy dùng if với điều kiện === 1
            newArr.push(arr[i]) // Nếu thỏa mãn điều kiện if chứng tỏ phần tử đó xuất hiện đầu tiên trong mảng và dùng push() để đẩy nó vào cuối mảng newArr
        }
      }
    return newArr; // trả về mảng newArr  với các phần tử ko bị trùng nhau
}
console.log(sapxep(arr));

// Cách dùng sort()
var arr = ['1','2','2','1','3','1','4'];
function sapxep(arr) {
    var formArr = arr.sort() // Hàm sort() sắp xếp các phần tử từ bé đến lớn ['1','1','1','2','2','3','4']
    var newArr = []
    for (let i = 0; i < formArr.length; i++) { // dùng vòng for để loại ra các phần tử trùng nhau
      if (formArr[i] !== formArr[i - 1]) {
        newArr.push(formArr[i])
      }
    }
    return newArr;
  }
  console.log(sapxep(arr))

// Cách dùng Set()
var arr = ['1','2','2','1','3','1','4'];
var sapxep = new Set(arr);// truyền vào Set mảng arr, vì Set chỉ chứa giá trị duy nhất nên sẽ loại ra các phần tử trùng nhau
console.log(sapxep); 

