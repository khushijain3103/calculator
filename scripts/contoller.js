window.addEventListener('load',eventbinder());

function eventbinder(){
    var buttons = document.querySelectorAll('Button');

    var input = document.querySelector("#input");

    for(var idx=0 ; idx<buttons.length-2 ; idx++)
    {
        buttons[idx].addEventListener('click' , function(event){
            const val = event.target.innerText;
            input.value+=val;
        });
    }

    var clear = document.querySelector('#clear');
    clear.addEventListener('click',function(){
        let insertedVal = '';
        insertedVal+=input.value;
        const newVal= insertedVal.slice(0,-1);

        input.value='';
        input.value+=newVal;
    });

    var enter = document.querySelector('#enter') ;
    

   enter.addEventListener('click',function(){
        var span = document.querySelector('span');
        var ans  ;
        try{
            ans= eval(input.value);
        }
        catch{
            ans= "Wrong Expression";
        }
        
        span.innerText = ans;
    });
}





