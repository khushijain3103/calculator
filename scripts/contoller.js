window.addEventListener('load',eventbinder());

function eventbinder(){
    var buttons = document.querySelectorAll('Button');
    console.log(buttons);
    var input = document.querySelector("#input");

    for(var idx=0 ; idx<buttons.length ; idx++)
    {
        buttons[idx].addEventListener('click' , function(event){
            // console.log(event);
            // console.log(buttons[idx].innerText);
            const val = event.target.innerText;
            input.value+=val;
        });
    }
}





