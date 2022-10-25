document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('form');
  form.addEventListener('submit', formSend);
  

  function formSend(e) {
    e.preventDefault();

    let error = formValidate(form);

    if (error > 0) {
      console.log('Заполните обязательные поля');
    } else if (error <= 0) {
      alert('Вы успешно вошли');
    }
  }

  function formValidate(form) {
    let error = 0;
    
    const email = document.getElementById('formEmail');
    const password = document.getElementById('formPassword');
    formRemoveError(email);
    formRemoveError(password);

    if (emailTest(email.value)) {
      formAddError(email);
      error++;
      console.log('Email error');
    }
  
    if (passTest(password.value)) {
      formAddError(password);
      error++;
      console.log('Password error');
    } 

    return error;
  }

  function formAddError(input) {
    input.parentElement.classList.add('_error');
    input.classList.add('_error');
  }

  function formRemoveError(input) {
    input.parentElement.classList.remove('_error');
    input.classList.remove('_error');
  }

  function emailTest(value) {
    return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(value);
  }

  function passTest(value) {
    const reg = new RegExp(/^\d+$/);
    return reg.test(value) && value.length < 6;
  }


  



});