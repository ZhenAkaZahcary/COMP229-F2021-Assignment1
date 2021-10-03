'use strict';
(() => {
    function Start() {
        console.log('App Front End Started');
    }
    window.addEventListener('load', Start);
})();


function BackToHome() 
{
    window.location.href = "/home";
}

try {
    document.getElementById("button1").addEventListener("click", BackToHome, false  );
} catch (error) {
    
}

//# sourceMappingURL=app.js.map