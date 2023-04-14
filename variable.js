//1.Create a variable.js file and declare variables and assign string, boolean, undefined and null data types, Display all the value with their data type.

/*//strings
let name="sushree";
//Booleans
var x=true;
var y=false;
//Undefined
let a;
//null
const b = null;*/

//2.Declare variables to store your first name, last name, marital status, country and age and display them using interploation method.

/*let firstName="sushree";
let lastName="panda";
let maritalstatus="unmaried";
let country="India";
let age=22;
console.log(`my name is ${firstName} ${lastName} \n marital status ${maritalstatus} \n my country ${country} \n my age ${age}`);*/

//3.Declare a varibale and assign string value to it and change all the string characters to capital letters using toUpperCase() method.

/*let name="sushree";
let upper=name.toUpperCase();
console.log(upper);*/

//4.Declare a varibale and assign string value to it and check if the string contains a word Script using includes() method.

/*let name="javascript";
let a=name.includes("script");
console.log(a);*/

//5.Declare a varibale and assign string value to it and then split it into an array using split() method

/*let name="sushree";
let array=name.split(" ");
console.log(array);*/

//6.'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' split the string at the comma and change it to an array.

/*let brand='Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon';
let array=brand.split(", ");
console.log(array);*/

//7.Declare an array containing the multiple values and use lastIndexOf to determine the position of the first and last occurrence of a word "pw skills".

/*let value=[1,2,"kittu","pw skills",3,4,"kitty","pw skills"];
console.log(value.lastIndexOf('pw skills'));
console.log(value.indexOf('pw skills'));*/

//8.Demonstrate the use of trim() to remove any trailing whitespace at the beginning and the end of a string.

/*let name=" sushree ";
let a=name.trim();
console.log(a);*/

//9.Boolean value is either true or false.

//a. Write three JavaScript statement example which provide truthy value.

/*let x;
x='0';
x='false';
x=[];
x={};*/

//b. Write three JavaScript statement example which provide falsy value.

/*let x;
x=false;
x=0;
x='',"",``;
x=null;
x=undefined;
x=NaN;*/

//10.Figure out the result of the following comparison expression first without using console.log(). After you decide the result confirm it using console.log()

 /*4 > 3
 console.log(4 > 3);
 4 >= 3
 console.log(4 >= 3);
  4 < 3
 console.log(4 < 3);
 4 <= 3
 console.log(4 <= 3);
 4 == 4
 console.log(4 == 4);
 4 === 4
 console.log(4 === 4);
 4 != 4
 console.log(4 != 4);
 4 !== 4
 console.log(4 !== 4);
 4 != '4'
 console.log(4 != '4');
 4 == '4'
 console.log(4 == '4');
 4 === '4'
 console.log(4 === '4');*/
//Find the length of python and jargon and make a falsy comparison statement. 

/*let lang1="python";
let lang2="jargon";
let a=lang1.length;
let b=lang2.length;
console.log(a + " "+b);*/

//11.Use the Date object to do the following activities

    //What is the year today?
    /*const now=new Date();
    console.log(now.getFullYear());
    //What is the month today as a number?
    console.log(now.getMonth());
    //What is the date today?
    console.log(now);
    //What is the day today as a number?
    console.log(now.getDay());
    //What is the hours now?
    console.log(now.getHours());
    //What is the minutes now?
    console.log(now.getMinutes());
    //Find out the numbers of seconds elapsed from January 1, 1970 to now.
    const past=new Date('1970-01-01');
    const now=new Date();
    const elapsed=(now-past);
    console.log(elapsed/1000);*/
    /*//12.Create a human readable time format using the Date time object

    // YYYY-MM-DD HH:mm
     const now=new Date();
     console.log(now.toISOString());
    // DD-MM-YYYY HH:mm
    const now=new Date();
    console.log(now);
    // DD/MM/YYYY HH:mm
     const now=new Date();
     console.log(now.toLocaleString());*/

   /*//20. In the following shopping cart add, remove, edit items

    //=> const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
    //- add 'Meat' in the beginning of your shopping cart if it has not been already added

    const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
    shoppingCart.unshift("meat");
    console.log(shoppingCart);
    //- add Sugar at the end of your shopping cart if it has not been already added
    shoppingCart.push("sugar");
    console.log(shoppingCart);
    //- remove 'Honey'
    shoppingCart.splice(4);
    console.log(shoppingCart);
   // - modify Tea to 'Green Tea'
   shoppingCart.splice(3,1,"Green Tea");
    console.log(shoppingCart);*/

    /*//21.In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list. 

    let countries=["India","America","Paris","England"]
    console.log(countries.includes("Ethiopia"));
    countries.push("Ethiopia");
    console.log(countries);*/

   /*// 22. The following is an array of 10 students ages:
   //  => const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
   //  - Sort the array and find the min and max age

   const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
   console.log(ages.sort());
   console.log(Math.min(19, 22, 19, 24, 20, 25, 26, 24, 25, 24));
   console.log(Math.max(19, 22, 19, 24, 20, 25, 26, 24, 25, 24));

   //  - Find the median age(one middle item or two middle items divided by two)
   //  - Find the average age(all items divided by number of items)
   //  - Find the range of the ages(max minus min)
   //  - Compare the value of (min - average) and (max - average), use abs() method*/

  /*// 29. Write a javascript program which takes the input of filename as string and prints the extension of the file in the console.

  let filename="array.html"
  console.log(filename.split('.').pop());*/



let a=20,b=30;
let temp=a;
a=b;
b=temp;
let c=[a,b]=[b,a];
console.log(c);



   




