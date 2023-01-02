let screenValue="";
$(document).ready(function(){
    $("button").click(function(){
        var buttonText = $(this).text();
        if(buttonText=='X')
        {
            buttonText='*';
            screenValue += buttonText
            $("#screen").val(screenValue);
        }
        else if(buttonText=='=')
        {
            $("#screen").val(eval(screenValue));
        }
        else if(buttonText=='CLR')
        {
            screenValue = " ";
            $("#screen").val(screenValue);
        }
        else
        {
            screenValue += buttonText;
            $("#screen").val(screenValue);
        }

        
    })
})