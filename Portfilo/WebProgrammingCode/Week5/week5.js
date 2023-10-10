var click = 1;

function postFunction()
{
    var posttext = document.getElementById("text1").value;
    console.log(posttext);

    if(click == 1){
        document.getElementById("topic1").innerHTML = posttext;
        click ++;
    }
    else if(click == 2){
        document.getElementById("comment1").innerHTML = posttext ;
        click ++;
    }
    else if(click == 3){
        document.getElementById("comment2").innerHTML = posttext ;
        click ++;
    }
}
function clearFunction(){
    click = 1;

    posttext = document.getElementById("topic1").innerHTML = ("");
    posttext = document.getElementById("comment1").innerHTML = ("");
    posttext = document.getElementById("comment2").innerHTML = ("");
}