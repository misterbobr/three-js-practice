import { delay } from 'lodash';
import { createScene } from './three';

async function isLogged() {
    let response = await fetch(`${window.origin}/isLogged`, {
        method: "GET"
    }).then((res) => {
        return res.json();
    });
    response = await response['result'];
    return response;
}

function hideWindow(element) {
    if (element.style.opacity >= 1)
        fadeOut(element);
}

function showWindow(element) {
    if (element.style.display !== 'block')
        fadeIn(element);
}

function toggleLoginWindow(element) {
    let windows = document.querySelectorAll('.login-window, .register-window');
    for (const el of windows.values()) {
		if (!el.isEqualNode(element))
        hideWindow(el);
    };
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

var logged = await isLogged();
if (!logged) {
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
}

createScene();