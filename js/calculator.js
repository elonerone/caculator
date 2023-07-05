// JavaScript Document

$(document).ready(function(){
    $operation = "";
    $firstVal = 0;
    $secondVal = 0;
    $nextVal = 0;


    $("input[type=button]").on("click", function(){
        $text = $(this).attr("id");

        switch($text){

        case "No0":
            $("#result").val($("#result").val() + "0");        
        break;    
        case "No1":
            $("#result").val($("#result").val() + "1");        
        break;    
        case "No2":
            $("#result").val($("#result").val() + "2");
        break;    
        case "No3":
            $("#result").val($("#result").val() + "3");
        break;    
        case "No4":
            $("#result").val($("#result").val() + "4");
        break;     
        case "No5":
            $("#result").val($("#result").val() + "5");
        break;
        case "No6":
            $("#result").val($("#result").val() + "6");
        break;
        case "No7":
            $("#result").val($("#result").val() + "7");
        break;
        case "No8":
            $("#result").val($("#result").val() + "8");
        break;
        case "No9":
            $("#result").val($("#result").val() + "9");
        break;
                case "plus":
            if ($operation == "") {
                $firstVal = parseFloat($("#result").val());
            } else {
                $nextVal = parseFloat($("#result").val());
                $firstVal = $firstVal + $nextVal;
            }
            $("#result").val("");
            $operation = "+";
        break; 
                
                        case "minus":
            if ($operation == "") {
                $firstVal = parseFloat($("#result").val());
            } else {
                $nextVal = parseFloat($("#result").val());
                $firstVal = $firstVal - $nextVal;
            }
            $("#result").val("");
            $operation = "-";
        break;
        case "multiplication":
            if ($operation == "") {
                $firstVal = parseFloat($("#result").val());
            } else {
                $nextVal = parseFloat($("#result").val());
                $firstVal = $firstVal * $nextVal;
            }
            $("#result").val("");
            $operation = "*";
        break;  
        case "Division":
            if ($operation == "") {
                $firstVal = parseFloat($("#result").val());
            } else {
                $nextVal = parseFloat($("#result").val());
                $firstVal = $firstVal / $nextVal;
            }

            $("#result").val("");
            $operation = "/";
            break;

        case "dot":
            if($("#result").val().indexOf(".") == -1){
                $("#result").val($("#result").val()+".");
             }
             break;


         case "equal":
            $secondVal = parseFloat($("#result").val());
            switch($operation){
                case "+":
                    $firstVal += $secondVal;
                    $("#result").val($firstVal);
                    $operation = "";
                break;
                case "-":
                    $firstVal -= $secondVal;
                    $("#result").val($firstVal);
                    $operation = "";
                break;    
                case "*":
                    $firstVal *= $secondVal;
                    $("#result").val($firstVal);
                    $operation = "";
                break;
                case "/":
                    $firstVal /= $secondVal;
                    $("#result").val($firstVal);
                    $operation = "";
                break;
            }

        break;    
        case "clear":
            $("#result").val("");
            $firstVal = 0;
            $secondVal = 0;
            $operation = "";

        break;    
            
        }
    });
});
