

//console.log("Connected");

//variable   are  containers   for  holding  data

//let var  or  const
const   $name =  45;



console.log(   $name)



//function    is  just  a  piece  of  code  that  u  can  call  enywhere  in  ur  application

//function  nameOf  Function( )  { }


function  sayHellow()
{

      console.log(  "Hellow   World!!")



}

sayHellow();







function  greet()
{

    let  firstName  =  "Elon";

    let  secondNAme  =  "Musk";

    console.log(  ` Hellow  Good  morning mr ${firstName}  ${secondNAme} `)

}

greet();



function  comparison  ()
{


    let  num1  =  2;
    let  num2  = 4;

    if (num1  ==  num2){
        console.log(  "  they are  equal")
    }   else  {
        console.log(  "err")
    }


}

comparison()

//arrow  function


//const  let  var

  const fn  = ()=>{
    console.log(  "this  is  an  arrow  function ")
   }
   fn()

   //callback  function
  // parameter  argument

  function  add(  a  , b ){

   return (console.log(a+b));

  }

  add( 6  , 2 );


  function c ()
  {

  }
  c( function(){

    

  })


  //callback  fn  is  a  fn  that u pass as  an  argument  to  another

  function  call (cb){


    cb()
  }

  call(  function(){
    console.log( "i am a  call  back  function")

  } )




  function add ( )
  {



  }

  add(   function(){

  })




  //objects  is a collection of properties, 

   let  obj  = {
 
    name:  "peter",
    age:   34,
    city:  "New-York"

   }

   console.log(obj.age);



   let  user  =  {
    name:  "js",
    email:  "  js254@gmail.com",
    password:  "325562re642378",
 
   }

user.name = "gdwjhksvcjhwdbjcbejkdncef "
console.log( user)
  

//var   link  
//fn  greet  you
//cb console.log  calling  internet 
//obj Governt officials