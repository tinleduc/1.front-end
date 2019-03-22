JavaScript

-// ngon ngu thong dich
// 
/*
	ECMA-262 Specification định nghĩa phiên bản chuẩn của ngôn ngũ JavaScript như sau:

	Là ngôn ngữ thông dịch nhẹ
	Được thiet ke tao ra các ứng dụng mạng trung tâm
	Là ngôn ngữ lập trình của HTML và Web
	Bổ sung và tích hợp với java - HTML
	Mở và đa nền tảng


Client-Side JavaScript là Form phổ biến nhất của ngôn ngữ này
HTML document có thể chứa hoặc tham chiếu đến Script  để trình duyệt biên dịch mã code.
Điều đó có nghĩa là trang web không nhất thiết là một HTML tĩnh, nó có thể là một chương trình tương tác với người dùng, kiểm soát trình duyệt và linh hoạt tạo nội dung HTML
JavasScript client-side mechianism provides many advantages over traditional CGI serverside with the User, control the browser and dynamically.

Javascript code is executed when the user submits the form
and only ig all the entries are valid they would be submitted to the Web Server

JavaScript can be used to trap user-initial events such as button clicks link navigation and other action that the user initites explicity or implicitly

Advantages of JavaScript

	Less server interaction
	Immediate feedback to the visitor
	Increased interactivity
	Richer interfaces

Limitations of JavaScript
Client-Side JavaScript does not allow the reading or writing of files.
Cannot be used for networking application because there is no such support avaiable
Doesn't have any multi-threading or multiprocessor capabilities

*/

Syntax
/*
JavaScript statements that are placed within <script></script>
Can place the <script/ tags anywhere within your web page but it is normally recommended that you should keep it within the <head> tags

*/

Whitespace and Line Break

ignores spaces  tabs and newlines that appear in JavaScript programs


Semicolons are Optional

just as they are in C C++ and Java, simple statements in JavaScript are generally followed by a semicolon character
JavasScript allows you to omit this semicolon if each of your statements are placed on a separate line,

<Script>
	var1 = 10
	var2 = 30
</Script>

<Script>
	var1 = 10; var2 = 30;
</Script>

Case-sensity
language keywords, variable, function name, and any other identifier must always be typed with aconsistent capitalization
So the identifier Time and TIME will convey different meaning in JavasScript

Comment in JavasScript
- Text between a // and the end of a line
- Text between /* and */
- <!-- single-line Comment
- <!-- and //-->

<script language = "javascript" type = "text/javascript">
   <!--
      // This is a comment. It is similar to comments in C++
   
      /*
      * This is a multi-line comment in JavaScript
      * It is very similar to comments in C Programming
      */
   //-->
</script>


Enabling JavasScript in browser

Firefox: 

type: about:config

--> take a tisk

find javascript.enabled

right click --> Toggle

Chrome:

Setting --> Show advanced Setting


Placement in HTML file

// su dung javascript truc tiep tren file HTML

Script in <head>...</head> section,



<script type="text/javascript">
    // Code javascript here
</script>




// Import javascript from external file

<script src="demo.js" type="text/javascript"></script>

//javascript in HTML tag

<button type="button" onclick="code">An vao roi biet</button>

//Example

<html>
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-A-Compatible" content="IE=edge">
    <title>Javascript lesson1</title>
    <link rel="stylesheet" href="">
</head>
<body>
    <button type="button" onclick="alert(1)">click</button>
</body>
</html>


// file index.html

<html>
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-A-Compatible" content="IE=edge">
    <title>Javascript lesson1</title>
    <link rel="stylesheet" href="">
</head>
<style type="text/css" media="screen">
    body{
        text-align: center;
    }
</style>
<body>
    <h3>Click vao button di</h3>
    <button type="button" onclick="alert('helloworld')">click</button>
</body>
</html>


{/* // Khai bao hang */}

const tenHang = giatri;

// Quy tac ten hang
// start with character or _
// Not start with number
// Unlimit length

// Khai bao bien
var tenbien = Giatri;

// Hien thi du lieu 
// C1: dung document.write() hoac document.writeln()
// C2: dung console.log()

// Break

for (var i=0; i<=10; i++){

    document.write(i)
    
    if (i==5){
        break;s
    }
}

// Countinue

for (var i=0; i<=10; i++){
    
    if (i==5){
        countinue;
    document.write(i + "<br>");
    }
}

//Function
function funName(){
    //Code
}

function getWebsite(){
    document.write('Http://toidicode.com');
}

 //Functin co tham so truyen vao

 function funName(param_1,..., param_n){
    //Code
 }

 function getSum(a,b){
     document.write('Tong: '+(a+b));
 }

 // function co tham so mac dinh
 
 function funName(param_1=value_1,..., param_n=value_n){
     //Code
 }

 function getSum(a=1, b=2){
    document.write('Tong: '+(a+b));

//Ham co gia tri tra va khong

function getSum(a=1, b=2){
    return a+b;
}

// Goi ham

funName();

// Hien thi thong bao ra man hinh trong javascript

// Ham alert()

alert(content);

alert('hoc lap trinh online toi dicodedao.com');

// Ham confirm

confirm(content);

if (confirm('Ban co phai fan cua toidicode.com khong?')){
    document.write('Cam on ban rat nhieu');
} else {
    document.write('Sao the ban?');
}

// Ham prompt()

if (resutl = confirm('Chao ban, nam nay ban bao nhieu tuoi?')){
    document.write(resutl);
} else {
    document.write('Sao khong tra loi a ban?');
}

// Mang trong javascript

// Khai bao mang
var arr = [value1, value2, ... , valuen];
//Khai bao mang bang new array

var arr=new Array(value1, value2, ... , valuen);

//Ham xu ly mang

arr.length;
var arr= new Array(1, 2, 4, 5, 9, 6);
alert(arr.length);

//Ham join 

arr.join(string);

// Ham valueOf()


// Ham push()


// Ham pop()


// Ham unshift()

//Ham shift()

//Ham splice()

//Ham concat()

//Ham slice()

//Ham sort()

//Ham reverse()


//DOM elements trong javascript

//DOM Document Object Model

// Tim the HTML thong qua id

document.getElementById('idName');

//Vd 

// <!DOCTYPE html>
// <html>

// <head>
//     <meta charset="utf-8">
//     <meta http-equiv="X-UA-Compatible" content="IE=edge">
//     <title>Toidicode.com javascript</title>
// </head>

// <body>
// <div id="hello">Chào mừng các bạn đến với website học lập trình online</div>
// <div id="toidicode">TOIDICODE.COM</div>

// <script type="text/javascript">
//     var element = document.getElementById('toidicode');
//     var content = element.innerHTML;
//     alert(content);
// </script>
// </body>

// </html>


// Tim the HTML thong qua class

document.getElementByclassName('className');
document.getElementByTagName('tagName');

// This trong javascript

<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
	<title>toidicode.com</title>
</head>
<body>
    <div>Click vào các button để xem kết quả</div>
	<button onclick="showInfo(this)" > button1</button>
	<button onclick="showInfo(this)" > button2</button>
	<button onclick="showInfo(this)" > button3</button>
	<button onclick="showInfo(this)" > button4</button>
	<script type="text/javascript">
		function showInfo(e)
		{
			alert(e.innerText);
		}
	</script>
</body>

</html>


addEventListener()
removeEventListener()

element.addEventListener('eventName', functionName);

element.addEventListener('eventName', function() {
    //CODE
})


{/* <!DOCTYPE html>
<html>

<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<title>toidicode.com</title>
	<link rel="stylesheet" href="">
</head>

<body>
	<div>Click vào chữ '<em>click</em>' để xem kết quả</div>
	<p id="container"> Click</p>
	<script type="text/javascript">
		var element = document.getElementById('container');
		element.addEventListener('click', function() {
			alert('Bạn vừa click');
		})
	</script>
</body>

</html> */}

element.removeEventListener('eventName', functionName, option);

{/* <!DOCTYPE html>
<html>

<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<title>toidicode.com</title>
	<link rel="stylesheet" href="">
</head>

<body>
	<div>Click vào chữ '<em>click</em>' để xem kết quả</div>
	<p id="container">Click</p>
	<script type="text/javascript">
		var element = document.getElementById('container');
		element.addEventListener('click', getClick );
		function getClick()
		{
			alert('Bạn vừa click');
		}
		element.removeEventListener('click', getClick);
	</script>
</body>

</html> */}



