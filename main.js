$(document).ready(function () {
    // All Clear
    $('.ac').click(function () {
        $('h1').html("0").removeClass('after1 after2'); 
    });

    // Backspace 
    $(".back").click(function () {
        backspace();
    });

    $(document).keydown(function (e) {
        if (e.key === "Backspace") {
            backspace();
        }
    });

    function backspace() {
        var currentText = $('h1').html();
        var currentLength = $('h1').text().length;
        var lastChar = $('h1').text().slice(-1);
        if (currentText.length > 1) {
            
                if (currentLength < 10) {
                $('h1').removeClass('after1 after2');
                $('.image-select').removeClass('image-size1 image-size2');
            } else if (currentLength < 20) {
                $('h1').addClass('after1').removeClass('after2');
                $('.image-select').addClass('image-size1').removeClass('image-size2');
            } else {
                $('h1').removeClass('after1').addClass('after2');
                $('.image-select').addClass('image-size2').removeClass('image-size1');
            }
            $('h1').html(currentText.slice(0, -1));  
        }
        else{
             $('h1').html("0").removeClass('after1 after2'); // Reset font size classes
        }
        
    }

    // Symbol Buttons
    $('.plus, .minus, .percentage,.multiply,.divi,.point').click(function () {
        var symbol = $(this).text();
        appendSymbol(symbol);
    });

    //$('.divi').click(function () {
     //   appendIcon("divide-sign-32.ico");
   // });

   // $('.multiply').click(function () {
    //    appendIcon("multiply-2-32.ico");
   // });

    function appendSymbol(symbol) {
        var currentText = $('h1').html();
        var currentLength = $('h1').text().length; 
        var lastChar = $('h1').text().slice(-1);
        var symbols = ['+','-','%','*','/','.'];
        if (!symbols.includes(lastChar) ){
            if (currentText !== "0") {
              if (currentLength < 10) {
                $('h1').html(currentText + "" + symbol+"").removeClass('after1 after2');
                $('.image-select').removeClass('image-size1 image-size2');
            } else if (currentLength < 20) {
                $('h1').html(currentText + "" + symbol+"").addClass('after1').removeClass('after2');
                $('.image-select').addClass('image-size1').removeClass('image-size2');
            } else {
                $('h1').html(currentText + "" + symbol+"").removeClass('after1').addClass('after2');
                $('.image-select').addClass('image-size2').removeClass('image-size1');
            }
        } 
          
        
        }   
       
    }
    // function appendIcon(iconPath) {
    //     var currentText = $('h1').html();
    //     var currentLength = $('h1').text().length; // Length without HTML tags/icons
    //     var lastChar = $('h1').html().slice(-1);
    //     let iconHTML = `<img class="image-select" src="${iconPath}" alt="icon">`;
    //     var symbols = ['+','-','%'];

    
    //     // Check if the last character is already an icon (avoid appending the same icon)
    //     if (lastChar!== '>' && !symbols.includes(lastChar)) {
    //         if (currentText !== "0") {
    //             if (currentLength < 10) {
    //                 $('h1').html(currentText + "" + iconHTML+"" ).removeClass('after1 after2');
    //                 $('.image-select').removeClass('image-size1 image-size2');
    //             } else if (currentLength <20) {
    //                 $('h1').html(currentText + "" + iconHTML+"" ).addClass('after1').removeClass('after2');
    //                 $('.image-select').addClass('image-size1').removeClass('image-size2');
    //             } else {
    //                 $('h1').html(currentText + "" + iconHTML+"" ).removeClass('after1').addClass('after2');
    //                 $('.image-select').addClass('image-size2').removeClass('image-size1');
    //             }
    //         }
    //     }
    // }
    
    // Number Buttons
    $('.num').click(function () {
        var number = $(this).text();
        appendNumber(number);
    });

    $(document).keydown(function (e) {
        var key = e.key;
        if (!isNaN(key)) {
            appendNumber(key);
        } else {
            handleKeySymbol(key);
        }
    });

    function appendNumber(key) {
        var currentText = $('h1').html();
        var currentLength = $('h1').text().length; 
        var lastChar = $('h1').text().slice(-1); 
        if(lastChar)
        if (currentText === "0") {
            $('h1').html(key).removeClass('after1 after2');
        } else {

          
            if (currentLength < 10) {
                $('h1').html(currentText + key).removeClass('after1 after2');
                $('.image-select').removeClass('image-size1 image-size2');
            } else if (currentLength < 20) {
                $('h1').html(currentText + key).addClass('after1').removeClass('after2');
                $('.image-select').addClass('image-size1').removeClass('image-size2');
            } else {
                $('h1').html(currentText + key).removeClass('after1').addClass('after2');
                $('.image-select').addClass('image-size2').removeClass('image-size1');
            }
        }
    }
    

    function handleKeySymbol(key) {
        switch (key) {
            case "+":
            case "-":
            case "%":
            case "/":   
            case "*": 
            case ".":
            appendSymbol(key);
            break;
           
               // appendIcon("divide-sign-32.ico");
                //break;

               // appendIcon("multiply-2-32.ico");
                //break;
            default:
                break;
        }
    }

$('.equal').click(function () {
    calculateResult();
});

$(document).keydown(function (e) {
    if (e.key === "Enter") {
        calculateResult();
    }
});

function calculateResult() {
    var expression = $('h1').html();
    try {
        
        var result = eval(expression);
        $('h1').html(result);
    } catch (error) {
        $('h1').html("Syntax Error"); 
    }
}
});


