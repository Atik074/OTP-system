
let  generatedOTP ;

const otpExpiresElem = document.getElementById('otp-exprires-id')

function expiresOTP(){

  const totalTime = 15000 
  const interval =1000 

  let slice = totalTime / interval

  const intervId = setInterval(function() {
      otpExpiresElem.innerText = `Your OTP will expires in ${slice} seconds`
       slice =slice - 1
  } , interval)


  setTimeout(function(){
    otpExpiresElem.innerText = 'Your OTP is expired'
    clearInterval(intervId) 
    generateOTP()
  } ,totalTime)


}

function tackleOtpBoxes (){
    const boxes = document.getElementById('otp-box-list-id')

    boxes.addEventListener("input" ,function(e){
       const target = e.target
       const value = target.value
         
         if(isNaN(value)){

            target.value = ""
            return;

         }

        const nextElement = target.nextElementSibling

        if(nextElement){
            nextElement.focus()
        }
       
        validateOTP()

    } )

   
}


function generateOTP(){
    generatedOTP = Math.floor(1000 + Math.random() * 9000
    )

    const otpElement = document.getElementById('generated-otp-id')

      otpElement.innerText = `Your OTP:${generatedOTP}`

      expiresOTP()
      
  }

  function validateOTP() {
    let typedNumber = "";
    const boxListElem = document.getElementById("otp-box-list-id");
    [...boxListElem.children].forEach((elem) => {
      typedNumber = typedNumber + elem.value;
    });
  
    console.log(generatedOTP, typedNumber);
  
    const result = (generatedOTP === parseInt(typedNumber, 10));
    const resultElem = document.getElementById("result-id");
    if (result) {
      resultElem.innerText = "OTP has been validate successfully";
      resultElem.classList.add('success')
      resultElem.classList.remove('fail')
     
    } else {
      resultElem.innerText = "OTP is Invalid";
      resultElem.classList.remove('success')
      resultElem.classList.add('fail')
   
    }
  
    
  }
  


function init(){
    tackleOtpBoxes()
    setTimeout( generateOTP, 2000)
}

init()