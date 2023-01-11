const display = document.getElementById("display");
const operation = ['+','-','*','/'];

function clearAll()
{
    display.innerText = " ";

}

function backspace()
{
    display.innerText = display.innerText.slice(0,-1);
}

function addToDisplay(x)
{
    if(display.innerText === "display")
    {
        display.innerText = ' ';
        display.innerText += x;
    }
    else
    {
        display.innerText += x;
    }

    if(display.innerText.length > 12)
    {
        document.getElementById("main-div").style.height = "fit-content";
        document.getElementById("display").style.height = (document.getElementById("display").style.height) * 2;
    }

}

function calculate()
{
    try 
    {
        display.innerText = eval(display.innerText);
    } 
    catch (error)
    {
        display.innerText = "Error"
    }
}