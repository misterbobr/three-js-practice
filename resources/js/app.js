import { delay } from 'lodash';
import './bootstrap'

function hideWindow(element) {
    if (element.style.opacity >= 1)
        fadeOut(element);
}

function showWindow(element) {
    if (element.style.opacity <= 0.01)
        fadeIn(element);
}

function toggleLoginWindow(element) {
    let windows = document.querySelectorAll('.login-window, .register-window');
    windows.forEach(el => {
        hideWindow(el);
    });
    showWindow(element);
}

function fadeOut(el) {
  
	let opacity = 1;
  
	let timer = setInterval(function() {
    
		if(opacity <= 0.01) {
		
			clearInterval(timer);
			el.style.display = "none";
            opacity = 0;

		}
	
		el.style.opacity = opacity;
     
		opacity -= opacity * 0.1;
   
	}, 20);

}

function fadeIn(el) {
  
	let opacity = 0.01;
  
	el.style.display = "block";
  
	let timer = setInterval(function() {
    
		if(opacity >= 1) {
			
			clearInterval(timer);
		
		}
		
		el.style.opacity = opacity;
     
		opacity += opacity * 0.1;
   
	}, 20);
	
}

const loginWindow = document.querySelector('div.login-window');
const registerWindow = document.querySelector('div.register-window');
const loginButton = document.querySelector('#login-button');
const registerButton = document.querySelector('#register-button');

const closeBtns = document.querySelectorAll('.btn-close');
closeBtns.forEach(btn => btn.onclick = ()=>{
    hideWindow(btn.parentElement);
});

loginButton.onclick = ()=>{
    toggleLoginWindow(loginWindow);
}
registerButton.onclick = ()=>{
    toggleLoginWindow(registerWindow);
}
