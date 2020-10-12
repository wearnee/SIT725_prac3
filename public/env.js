console.log('hello world')


// creating function to bind to button
$(document).ready(function(){
    console.log('ready')
        setInterval(()=>{
            $.get('/random',(data)=>{
                $('#randomNUmber').html(data.random)
            })
        },1000)


    $('#sum').click(function(){
        //go find element with that id
       let num1 = parseInt($('#number1').val(),10)
       let num2 = parseInt($('#number2').val(),10)
       let data = num1 + num2
       //alert ("the sum of these numbers = " + data)
       console.log(data)
       $('#answer').append('<div class="row">' + data + '</div>')

        //$('#result').val(returnData.result)
        
       // $( ".result" ).html( data );
        //alert( "Load was performed." );
      });


})