//need to uptade the value use let
let clickCount=0;
function countClicks(){
    clickCount++;
    document.getElementById('clickCount').innerText = 'You have clicked ' + clickCount + 'times';

}
