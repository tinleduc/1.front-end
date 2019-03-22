ECMAScript 2015 - ES6

Tinh nang them moi vao trong ES6
Block Scoped
Destructuring Assignments
Default Parameters
Rest Parameters
Arrow function
Template String
Weak Set
Iterables vaf iterators
Class import

* Dieu kien can de tu hoc ES6

Trinh duyet uptodate

* ES6 Block Scoped - khoi tao bien voi tu khoa let

Block Scoped la pham vi trong mot khoi - chi hoat dong trong pham vi duoc khai bao boi cap {}

Khi su dung ES6 thi ban ne bat che do strict mode - che do nghiem nghat trong su dung cu phap javascript

let var_name = var_value;

if (true)
{ bien trong domain chi ton tai trong pham vi nay
 let domain = 'openmind.com';
}
// Loi vi bien domain khong ton tai - chi ton tai trong khoi if thu nhat
console.log(domain);

* Arrow function
javascript tao function

function Name(var1, var2){

}

hoac

var Name = function(var1, var2,){

}

Su dung Arrow function:

var Name = function(var1, var2) => {
    // Noi dung function
};

Arrow function:

var hello = (name, message) => {
    console.log("Chào " + name + ", bạn là " + message);
};
 
hello('Cường', 'admin freetuts.net');

Normal function:

var hello = function(name, message)
{
    console.log("Chào " + name + ", bạn là " + message);
}
 
hello('Cường', 'admin freetuts.net');


* 









