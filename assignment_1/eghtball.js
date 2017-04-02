var numberofreplys = 2;
function ask(){
    var choice = Math.floor(Math.random() * numberofreplys +1);
    var reply = "You stand no chance";
    if (choice == 3)
    {
        reply = "Maybe";
    }
    else if (choice == 2)
    {
        reply = "Yes, you fool!";
    }
    else 
    {
        reply = "No way, Jose!";
    }
    console.log (reply);
    console.log(choice);
}

ask();
function ask1()
{
    var choice = Math.floor(Math.random() * numberofreplys +1);
    var reply = "You stand no chance";
    switch (choice) {
        case 3:
            reply = "Maybe";
            break;
        case 2:
            reply = "Yes, you fool!";
            break;
        default:
            reply = "No way, Jose!";
            break;
    }
    console.log (reply);
    console.log(choice);
}
ask1();
