document.addEventListener("DOMContentLoaded", function(){
    const display = document.querySelector(".display-output");
    let expression = '';
    
    window.updateDisplay = function() {
      display.textContent = expression;
    }
    
    window.appendToDisplay = function(value) {
      expression += value;
      updateDisplay();
    }
    
    window.clearDisplay = function() {
      expression = '';
      updateDisplay();
    }
    
    window.deleteLast = function() {
      if (expression == "ERROR" || expression == "NaN" || expression == "Infinity"){
        expression = '';
      } 
      else {
        expression = expression.slice(0,-1);
      }
      updateDisplay();
    }
    
    window.calculate = function() {
      try {
        const result = eval(expression);
        expression = result.toString();
        updateDisplay();
      }catch(error){
        expression = 'ERROR';
        updateDisplay();
      }
    }

    // Function to toggle between themes
  });
  
  document.addEventListener('DOMContentLoaded', function() {
    const outerContainer = document.getElementById('outer-pseudo');
    const defaultTheme = 'theme-1';
    
    outerContainer.classList.add(defaultTheme);
    
    const themeButton = document.querySelector('.circle');

    let currentTheme = 1;
    themeButton.addEventListener('click', function() {
        const mainContainer = document.getElementById('outer-pseudo');
        mainContainer.classList.remove(`theme-${currentTheme}`);
        currentTheme = currentTheme === 3 ? 1 : currentTheme + 1;
        mainContainer.classList.add(`theme-${currentTheme}`);

        const themeControls = document.querySelectorAll('.theme-controls');
        themeControls.forEach(control => {
            switch (currentTheme) {
                case 1:
                    control.style.justifyContent = 'flex-start';
                    break;
                case 2:
                    control.style.justifyContent = 'center';
                    break;
                case 3:
                    control.style.justifyContent = 'flex-end';
                    break;
                default:
                    break;
            }
        });
    });

});
