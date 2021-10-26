// console.log("subhrajit")
// var add=()=>{
//     console.log(10+20);
// }
// add()
// function pow(x,n){
//     if(n==1){
//         return x;
//     }
//     else{
//         return x* pow(x,n-1);
//     }
// }
// console.log(pow(2,2))
// function fun(...input){
//     var sum=0;
//     for(var i of input){
//         sum+=i;
//     }
//     return sum;
// }
// console.log(fun(5,6,7))
//debugger
//another problem....
 function avag(){
     let math=document.getElementById('nmath').value;
     let english=document.getElementById('nenglish').value;
     let physics=document.getElementById('nphysices').value;

     //sum of all subject
     let subavg=parseFloat(math)+parseFloat(english)+parseFloat(physics);
     
     //percentage 
      let persub=(subavg/300)*100;
      if(persub>=80 && persub<=100){
          grade='A'
      }else if(persub>=60 && persub<=79){
          grade='B'

      }else{
          grade='D'
      }
     // alert(persub);
      if(persub>=39.5){
        document.getElementById('showmass').innerHTML=`Out of 300 You Get ${subavg} and ${persub}% and Garde is ${grade}.<br>You are Passed!Congratulation.`

      }else{
        document.getElementById('showmass').innerHTML=`Out of 300 You Get ${subavg} and ${persub}% and Garde is ${grade}.<br>Sorry!You Are Failed.`
      }
      

 }

 //async function
 /*async function f(){
     let promise=new Promise((resolve,reject)=>{
         setTimeout(()=>resolve("done"),3000)
     });
     let result=await promise;
     alert(result);
 }
 f();*/

 $(document).ready(function(){
     $("#error_math").hide();
     $("#error_english").hide();
     $("#error_physices").hide();

     //simple veriabe check
     var math_val=true;
     var english_val=true;
     var physices_val=true;

     //keyup function
     $("#nmath").keyup(function(){
        math_check();
     })
    //function for math_check()
   function math_check(){
    var user_val=$("#nmath").val();
    if(user_val.length==''){
        $("#error_math").show();
        $("#error_math").html("Please fill this Field");
        $("#error_math").focus();
        $("#error_math").css("color","red");
        math_err=false;
       return false;
    }else{
     $("#error_math").hide();
    }
   }
   //keyup function
   $("#nenglish").keyup(function(){
    english_check();
 })
 //function for english
 function english_check(){
    var user_val=$("#nenglish").val();
    if(user_val.length==''){
        $("#error_english").show();
        $("#error_english").html("Please fill this Field");
        $("#error_english").focus();
        $("#error_english").css("color","red");
        english_err=false;
       return false;
    }else{
     $("#error_english").hide();
    }
   }

   //keyup function
   $("#nphysices").keyup(function(){
    physices_check();
 })
 //function for physices
    function physices_check(){
        var user_val=$("#nphysices").val();
    if(user_val.length==''){
        $("#error_physices").show();
        $("#error_physices").html("Please fill this Field");
        $("#error_physices").focus();
        $("#error_physices").css("color","red");
        physices_err=false;
       return false;
    }else{
     $("#error_physices").hide();
    } 
    }

    //submission 
    $("#submitbtn").click(function(){
        var math_val=true;
        var english_val=true;
        var physices_val=true;
        math_check();
        english_check();
        physices_check();
        if((math_val==true) && (english_val==true) && (physices_val==true)){
            avag();
            return true;
        }else{
            return false;
        }
       })

 });
 
 //callback function
 /*function divideByHalf(sum){
    console.log(Math.floor(sum / 2));
  }
  
  function multiplyBy2(sum){
    console.log(sum * 2);
  }
  
  function operationOnSum(num1,num2,operation){
    var sum = num1 + num2;
    operation(sum);
  }
  
  operationOnSum(3, 3, divideByHalf); // Outputs 3
  
  operationOnSum(5, 5, multiplyBy2); */


  //
  // repeat with the interval of 2 seconds
let timerId = setInterval(() => console.log('tick'), 1000);

// after 5 seconds stop
setTimeout(() => { clearInterval(timerId); console.log('stop'); }, 5000);

//JSON.stringify method
 let student={
     name:"subhrajit",
     address:"md Bazar",
     isAdmin: false,
  courses: ['html', 'css', 'js'],
  wife: null
 }

 let obj=JSON.stringify(student);
 console.log(obj);

//  let narray=["subhrajit", "chatterjee"]
//  function nfunction(){
//     var text="subhrajit";
//     document.getElementById("ndemo").innerHTML=narray.toString();
//    console.log(text);
//   }