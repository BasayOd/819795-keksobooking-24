import {isEscapeKey
} from './utils.js';

const ALERT_SHOW_TIME = 2000;


const templateSuccess = document.querySelector('#success').content.querySelector('.success');
const success = templateSuccess.cloneNode(true);
const templateErrorData = document.querySelector('#error__data').content.querySelector('.error');
const errorData = templateErrorData.cloneNode(true);
const body = document.querySelector('body');
const templateError = document.querySelector('#error').content.querySelector('.error');
const error = templateError.cloneNode(true);


const onPopupEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    if (body.lastChild === error) {
      closeErrorWindow();
    }else if (body.lastChild === success) {
      closeSuccessWindow();
    }
  }
};

function closeSuccessWindow () {
  body.removeChild(success);
  body.removeEventListener('keydown', onPopupEscKeydown);
}

function closeErrorWindow () {
  body.removeChild(error);
  body.removeEventListener('keydown', onPopupEscKeydown);
}

const showSuccess  = () => {
  body.appendChild(success);
  success.addEventListener('click', closeSuccessWindow);
  body.addEventListener('keydown', onPopupEscKeydown);
};

const showNewErrorServer  = () => {
  body.appendChild(errorData);
  setTimeout(() => {
    body.removeChild(errorData);
  }, ALERT_SHOW_TIME );
};

const showError = () => {
  body.appendChild(error);
  error.addEventListener('click', closeErrorWindow);
  body.addEventListener('keydown', onPopupEscKeydown);

};


export {showNewErrorServer , showSuccess, showError};

