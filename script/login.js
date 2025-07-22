
    const emailInput = document.getElementById("user_email");
    const pwInput = document.getElementById("user_pw");
    const errorMsg = document.getElementById("login_error");
    const signBtn = document.getElementById("sign_in");
    
   /*  signBtn.addEventListener("click", (e)=>{

        e.preventDefalut();
        if(emailInput.value == '' && pwInput.value == '' ){
            errorMsg.textContent = "비밀번호와 이메일을 입력해주세요";
            errorMsg.style.display = "block";
        }

        //이메일이 입력되지 않았을 경우
        else if (emailInput.value.trim()== ''){
            errorMsg.textContent = "이메일을 입력해주세요";
            errorMsg.style.display = "block";
            emailInput.focus();

        }
        //비밀번호를 입력해주세요s
        else if (pwInput.value.trim() === ''){
            errorMsg.textContent = "비밀번호를입력헤주세요";
            errorMsg.style.display = "block";
            emailInput.focus();
        }
    })  */
    signBtn.addEventListener("click", (e) => {
        e.preventDefault(); // 기본 폼 제출 막기!!

        errorMsg.style.display = "none";
    //둘다 입력 안햇을때
    if (emailInput.value.trim() === '' && pwInput.value.trim() === '') {
        errorMsg.textContent = "이메일과 비밀번호를 입력해주세요";
        errorMsg.style.display = "block";

     // 이메일 입력 안했을 때
    } else if (emailInput.value.trim() === '') {
        errorMsg.textContent = "이메일을 입력해주세요";
        errorMsg.style.display = "block";
        emailInput.focus();

        //비밀번호 입력 안햇을때
    } else if (pwInput.value.trim() === '') {
        errorMsg.textContent = "비밀번호를 입력해주세요";
        errorMsg.style.display = "block";
        pwInput.focus();

        //둘다 입력시
    } else {
        // 메시지 없애고 로그인 처리 (지금은 그냥 테스트 alert)
        errorMsg.style.display = "none";
        alert("로그인 시도를 축하드려여");
    }
    });

    //trim은 쓸데없는 앞뒤여백 지우기