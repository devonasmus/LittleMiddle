var gameScreen = document.body;
gameScreen.style.backgroundColor = "#6699ff";
var title = document.createElement("h1");
var textToTitle = document.createTextNode("Little Middle");
title.appendChild(textToTitle);
gameScreen.appendChild(title);
title.style.position = "absolute";
title.style.left = "565px";
var instructions = document.createElement("p");
var textToInstructions = document.createTextNode("Choose the Group of Squares Containing the Smallest Square in the Center Before the Time Runs Out!");
instructions.appendChild(textToInstructions);
gameScreen.appendChild(instructions);
instructions.style.position = "absolute";
instructions.style.top = "100px";
instructions.style.left = "330px";
var playButton = document.createElement("button");
var textToButton = document.createTextNode("PLAY!!");
playButton.appendChild(textToButton);
gameScreen.appendChild(playButton);
playButton.style.position = "absolute";
playButton.style.height = "100px";
playButton.style.width = "150px";
playButton.style.top = "175px";
playButton.style.left = "575px";
var group = document.createElement("div");
var group2 = document.createElement("div");
var group3 = document.createElement("div");
var comSel1;
var comSel2;
var comSel3;
var comSel4;
var comSel5;
function startGame()
{
    var smallSquare = document.createElement("canvas");
    var smallSquare2 = document.createElement("canvas");
    var smallSquare3 = document.createElement("canvas");
    var mediumSquare = document.createElement("canvas");
    var mediumSquare2 = document.createElement("canvas");
    var mediumSquare3 = document.createElement("canvas");
    var largeSquare = document.createElement("canvas");
    var largeSquare2 = document.createElement("canvas");
    var largeSquare3 = document.createElement("canvas");
    smallSquare.style.backgroundColor = "black";
    smallSquare.style.height = "30px";
    smallSquare.style.width = "30px";
    smallSquare2.style.backgroundColor = "black";
    smallSquare2.style.height = "30px";
    smallSquare2.style.width = "30px";
    smallSquare3.style.backgroundColor = "black";
    smallSquare3.style.height = "30px";
    smallSquare3.style.width = "30px";
    mediumSquare.style.backgroundColor = "black";
    mediumSquare.style.height = "40px";
    mediumSquare.style.width = "40px";
    mediumSquare2.style.backgroundColor = "black";
    mediumSquare2.style.height = "40px";
    mediumSquare2.style.width = "40px";
    mediumSquare3.style.backgroundColor = "black";
    mediumSquare3.style.height = "40px";
    mediumSquare3.style.width = "40px";
    largeSquare.style.backgroundColor = "black";
    largeSquare.style.height = "50px";
    largeSquare.style.width = "50px";
    largeSquare2.style.backgroundColor = "black";
    largeSquare2.style.height = "50px";
    largeSquare2.style.width = "50px";
    largeSquare3.style.backgroundColor = "black";
    largeSquare3.style.height = "50px";
    largeSquare3.style.width = "50px";
    gameScreen.appendChild(group);
    gameScreen.appendChild(group2);
    gameScreen.appendChild(group3);
    group.style.position = "absolute";
    group.style.top = "300px";
    group.style.left = "100px";
    group2.style.position = "absolute";
    group2.style.top = "300px";
    group2.style.left = "600px";
    group3.style.position = "absolute";
    group3.style.top = "300px";
    group3.style.left = "1050px";
    comSel1 = Math.floor((Math.random()) * 3);
    comSel2 = Math.floor((Math.random()) * 2);
    comSel3 = Math.floor((Math.random()) * 2);
    comSel4 = Math.floor((Math.random()) * 2);
    comSel5 = Math.floor((Math.random()) * 2);
    if (comSel1 == 0)
    {
        if (comSel2 == 0)
        {
            group.appendChild(mediumSquare);
            group.appendChild(smallSquare);
            smallSquare.style.position = "relative";
            smallSquare.style.left = "10px";
            group.appendChild(largeSquare);
            largeSquare.style.position = "relative";
            largeSquare.style.left = "20px";
        }
        else if (comSel2 == 1)
        {
            group.appendChild(largeSquare);
            group.appendChild(smallSquare);
            smallSquare.style.position = "relative";
            smallSquare.style.left = "10px";
            group.appendChild(mediumSquare);
            mediumSquare.style.position = "relative";
            mediumSquare.style.left = "20px";
        }
        if (comSel3 == 0)
        {
            if (comSel4 == 0)
            {
                group2.appendChild(mediumSquare2);
                group2.appendChild(largeSquare2);
                largeSquare2.style.position = "relative";
                largeSquare2.style.left = "10px";
                group2.appendChild(smallSquare2);
                smallSquare2.style.position = "relative";
                smallSquare2.style.left = "20px";
            }
            else if (comSel4 == 1)
            {
                group2.appendChild(largeSquare2);
                group2.appendChild(mediumSquare2);
                mediumSquare2.style.position = "relative";
                mediumSquare2.style.left = "10px";
                group2.appendChild(smallSquare2);
                smallSquare2.style.position = "relative";
                smallSquare2.style.left = "20px";
            }
            if (comSel5 == 0)
            {
                group3.appendChild(smallSquare3);
                group3.appendChild(mediumSquare3);
                mediumSquare3.style.position = "relative";
                mediumSquare3.style.left = "10px";
                group3.appendChild(largeSquare3);
                largeSquare3.style.position = "relative";
                largeSquare3.style.left = "20px";
            }
            else if (comSel5 == 1)
            {
                group3.appendChild(smallSquare3);
                group3.appendChild(largeSquare3);
                largeSquare3.style.position = "relative";
                largeSquare3.style.left = "10px";
                group3.appendChild(mediumSquare3);
                mediumSquare3.style.position = "relative";
                mediumSquare3.style.left = "20px";
            }
        }
        else if (comSel3 == 1)
        {
            if (comSel4 == 0)
            {
                group3.appendChild(mediumSquare3);
                group3.appendChild(largeSquare3);
                largeSquare3.style.position = "relative";
                largeSquare3.style.left = "10px";
                group3.appendChild(smallSquare3);
                smallSquare3.style.position = "relative";
                smallSquare3.style.left = "20px";
            }
            else if (comSel4 == 1)
            {
                group3.appendChild(largeSquare3);
                group3.appendChild(mediumSquare3);
                mediumSquare3.style.position = "relative";
                mediumSquare3.style.left = "10px";
                group3.appendChild(smallSquare3);
                smallSquare3.style.position = "relative";
                smallSquare3.style.left = "20px";
            }
            if (comSel5 == 0)
            {
                group2.appendChild(smallSquare2);
                group2.appendChild(mediumSquare2);
                mediumSquare2.style.position = "relative";
                mediumSquare2.style.left = "10px";
                group2.appendChild(largeSquare2);
                largeSquare2.style.position = "relative";
                largeSquare2.style.left = "20px";
            }
            else if (comSel5 == 1)
            {
                group2.appendChild(smallSquare2);
                group2.appendChild(largeSquare2);                    
                largeSquare2.style.position = "relative";
                largeSquare2.style.left = "10px";
                group2.appendChild(mediumSquare2);
                mediumSquare2.style.position = "relative";
                mediumSquare2.style.left = "20px";
            }
        }
    }
    else if (comSel1 == 1)
    {
        if (comSel2 == 0)
        {
            group2.appendChild(mediumSquare2);
            group2.appendChild(smallSquare2);
            smallSquare2.style.position = "relative";
            smallSquare2.style.left = "10px";
            group2.appendChild(largeSquare2);
            largeSquare2.style.position = "relative";
            largeSquare2.style.left = "20px";
        }
        else if (comSel2 == 1)
        {
            group2.appendChild(largeSquare2);
            group2.appendChild(smallSquare2);
            smallSquare2.style.position = "relative";
            smallSquare2.style.left = "10px";
            group2.appendChild(mediumSquare2);
            mediumSquare2.style.position = "relative";
            mediumSquare2.style.left = "20px";
        }
        if (comSel3 == 0)
        {
            if (comSel4 == 0)
            {
                group.appendChild(mediumSquare);
                group.appendChild(largeSquare);
                largeSquare.style.position = "relative";
                largeSquare.style.left = "10px";
                group.appendChild(smallSquare);
                smallSquare.style.position = "relative";
                smallSquare.style.left = "20px";
            }
            else if (comSel4 == 1)
            {
                group.appendChild(largeSquare);
                group.appendChild(mediumSquare);
                mediumSquare.style.position = "relative";
                mediumSquare.style.left = "10px";
                group.appendChild(smallSquare);
                smallSquare.style.position = "relative";
                smallSquare.style.left = "20px";
            }
            if (comSel5 == 0)
            {
                group3.appendChild(smallSquare3);
                group3.appendChild(mediumSquare3);                 
                mediumSquare3.style.position = "relative";
                mediumSquare3.style.left = "10px";
                group3.appendChild(largeSquare3);
                largeSquare3.style.position = "relative";
                largeSquare3.style.left = "20px";
            }
            else if (comSel5 == 1)
            {
                group3.appendChild(smallSquare3);
                group3.appendChild(largeSquare3);
                largeSquare3.style.position = "relative";
                largeSquare3.style.left = "10px";
                group3.appendChild(mediumSquare3);
                mediumSquare3.style.position = "relative";
                mediumSquare3.style.left = "20px";
            }
        }
        else if (comSel3 == 1)
        {
            if (comSel4 == 0)
            {
                group3.appendChild(mediumSquare3);
                group3.appendChild(largeSquare3);
                largeSquare3.style.position = "relative";
                largeSquare3.style.left = "10px";
                group3.appendChild(smallSquare3);
                smallSquare3.style.position = "relative";
                smallSquare3.style.left = "20px";
            }
            else if (comSel4 == 1)
            {
                group3.appendChild(largeSquare3);
                group3.appendChild(mediumSquare3);
                mediumSquare3.style.position = "relative";
                mediumSquare3.style.left = "10px";
                group3.appendChild(smallSquare3);
                smallSquare3.style.position = "relative";
                smallSquare3.style.left = "20px";
            }
            if (comSel5 == 0)
            {
                group.appendChild(smallSquare);
                group.appendChild(mediumSquare);                 
                mediumSquare.style.position = "relative";
                mediumSquare.style.left = "10px";
                group.appendChild(largeSquare);
                largeSquare.style.position = "relative";
                largeSquare.style.left = "20px";
            }
            else if (comSel5 == 1)
            {
                group.appendChild(smallSquare);
                group.appendChild(largeSquare);
                largeSquare.style.position = "relative";
                largeSquare.style.left = "10px";
                group.appendChild(mediumSquare);
                mediumSquare.style.position = "relative";
                mediumSquare.style.left = "20px";
            }
        }
    }
    else if (comSel1 == 2)
    {
        if (comSel2 == 0)
        {
            group3.appendChild(mediumSquare3);
            group3.appendChild(smallSquare3);
            smallSquare3.style.position = "relative";
            smallSquare3.style.left = "10px";
            group3.appendChild(largeSquare3);
            largeSquare3.style.position = "relative";
            largeSquare3.style.left = "20px";
        }
        else if (comSel2 == 1)
        {
            group3.appendChild(largeSquare3);
            group3.appendChild(smallSquare3);
            smallSquare3.style.position = "relative";
            smallSquare3.style.left = "10px";
            group3.appendChild(mediumSquare3);
            mediumSquare3.style.position = "relative";
            mediumSquare3.style.left = "20px";
        }
        if (comSel3 == 0)
        {
            if (comSel4 == 0)
            {
                group.appendChild(mediumSquare);
                group.appendChild(largeSquare);
                largeSquare.style.position = "relative";
                largeSquare.style.left = "10px";
                group.appendChild(smallSquare);
                smallSquare.style.position = "relative";
                smallSquare.style.left = "20px";
            }
            else if (comSel4 == 1)
            {
                group.appendChild(largeSquare);
                group.appendChild(mediumSquare);
                mediumSquare.style.position = "relative";
                mediumSquare.style.left = "10px";
                group.appendChild(smallSquare);
                smallSquare.style.position = "relative";
                smallSquare.style.left = "20px";
            }
            if (comSel5 == 0)
            {
                group2.appendChild(smallSquare2);
                group2.appendChild(mediumSquare2);                 
                mediumSquare2.style.position = "relative";
                mediumSquare2.style.left = "10px";
                group2.appendChild(largeSquare2);
                largeSquare2.style.position = "relative";
                largeSquare2.style.left = "20px";
            }
            else if (comSel5 == 1)
            {
                group2.appendChild(smallSquare2);
                group2.appendChild(largeSquare2);
                largeSquare2.style.position = "relative";
                largeSquare2.style.left = "10px";
                group2.appendChild(mediumSquare2);
                mediumSquare2.style.position = "relative";
                mediumSquare2.style.left = "20px";
            }
        }
        else if (comSel3 == 1)
        {
            if (comSel4 == 0)
            {
                group2.appendChild(mediumSquare2);
                group2.appendChild(largeSquare2);
                largeSquare2.style.position = "relative";
                largeSquare2.style.left = "10px";
                group2.appendChild(smallSquare2);
                smallSquare2.style.position = "relative";
                smallSquare2.style.left = "20px";
            }
            else if (comSel4 == 1)
            {
                group2.appendChild(largeSquare2);
                group2.appendChild(mediumSquare2);
                mediumSquare2.style.position = "relative";
                mediumSquare2.style.left = "10px";
                group2.appendChild(smallSquare2);
                smallSquare2.style.position = "relative";
                smallSquare2.style.left = "20px";
            }
            if (comSel5 == 0)
            {
                group.appendChild(smallSquare);
                group.appendChild(mediumSquare);                 
                mediumSquare.style.position = "relative";
                mediumSquare.style.left = "10px";
                group.appendChild(largeSquare);
                largeSquare.style.position = "relative";
                largeSquare.style.left = "20px";
            }
            else if (comSel5 == 1)
            {
                group.appendChild(smallSquare);
                group.appendChild(largeSquare);
                largeSquare.style.position = "relative";
                largeSquare.style.left = "10px";
                group.appendChild(mediumSquare);
                mediumSquare.style.position = "relative";
                mediumSquare.style.left = "20px";
            }
        }
    }
}
var winOrLose = document.createElement("h1");
var lose = document.createTextNode("You Lose :(");
winOrLose.style.position = "absolute";
winOrLose.style.left = "565px";
winOrLose.appendChild(lose);
function timer()
{
    var container = document.createElement("canvas");
    var time = 0;
    var time2 = 300;
    container.style.backgroundColor = "black";
    container.style.height = "50px";
    container.style.width = "1000px";
    var out = container.getContext("2d");
    out.fillStyle = "#6699ff";
    var score = document.createElement("h1");
    var s = 0;
    var scoreNumber = document.createTextNode(s);
    score.appendChild(scoreNumber);
    gameScreen.appendChild(score);
    score.style.position = "absolute";
    score.style.bottom = "0px";
    function gameOver()
    {
        function goBack()
        {
            gameScreen.removeChild(winOrLose);
            gameScreen.appendChild(title);
            gameScreen.appendChild(instructions);
            gameScreen.appendChild(playButton);
            scoreNumber.nodeValue = 0;
            gameScreen.removeChild(score);
        }
        clearInterval(count);
        gameScreen.removeChild(container);
        gameScreen.appendChild(winOrLose);
        group.innerHTML = "";
        group2.innerHTML = "";
        group3.innerHTML = "";
        gameScreen.removeChild(group);
        gameScreen.removeChild(group2);
        gameScreen.removeChild(group3);
        setTimeout(goBack, 3000);
    }
    var count = setInterval(function()
    {
        if (time2 != 0)
        {
            time += 1; time2 -= 1;
            out.fillRect(time2, 0, time, 150);
        }
        else
        {
            gameOver();
        }
    }, 1);
    gameScreen.appendChild(container);
    function startOver()
    {
        group.innerHTML = "";
        group2.innerHTML = "";
        group3.innerHTML = "";
        gameScreen.removeChild(group);
        gameScreen.removeChild(group2);
        gameScreen.removeChild(group3);
        startGame();
        s += (time2 * 9);
        scoreNumber.nodeValue = s;
        score.removeChild(scoreNumber);
        score.appendChild(scoreNumber);
        out.clearRect(time2, 0, time, 150);
        time = 0;
        time2 = 300;
    }
    group.onclick = function()
    {
        if (comSel1 == 0)
        {
            startOver();
        }
        else
        {
            gameOver();
        }
    }
    group2.onclick = function()
    {
        if (comSel1 == 1)
        {
            startOver();
        }
        else
        {
            gameOver();
        }
    }
    group3.onclick = function()
    {
        if (comSel1 == 2)
        {
            startOver();
        }
        else
        {
            gameOver();
        }
    }
}
playButton.onclick = function()
{
    gameScreen.removeChild(title);
    gameScreen.removeChild(instructions);
    gameScreen.removeChild(playButton);
    startGame();
    timer();
}