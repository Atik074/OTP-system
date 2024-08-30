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
       

    } )
}


function generateOTP(){
    const generatedOtp = Math.floor(1000 + Math.random() * 9000
    )

    const otpElement = document.getElementById('generated-otp-id')

      otpElement.innerText = `Your OTP:${generatedOtp}`
  }
  generateOTP()


function init(){
    console.log('js code ')
    tackleOtpBoxes()
}

init()