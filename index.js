var answers = {
    Q1: "Blue",
    Q2: 31
}

const questionList = Object.keys( answers )

function submitAnswer( element )
{
    console.log('HELLO')
    var answer = element.innerText;
    var questionNum = element.value;
    var msgContainer = document.getElementById( "message-container" );

    for( var i = 0; i < questionList.length; i++ )
    {
        if( questionNum === questionList[ i ] )
        {
            if( answer === answers[ questionNum ] )
            {
                msgContainer.innerText = "Correct!";
            }
            else
            {
                msgContainer.innerText = "Wrong!";
            }
        }
    }
}