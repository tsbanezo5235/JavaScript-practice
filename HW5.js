`use strict`;

let beginAns = prompt(`Who's there?`,``);
let message;
if (beginAns == ``||beginAns == null){
    message = `Canceled`;
    alert(message);
}else if (beginAns == `Adim`){
    let afterAns = prompt(`Password?`,``)
    if(afterAns == ``||afterAns == null){
        message = `Canceled`;
        alert(message);
    }else if(afterAns == `The Master`){
        message = `Welcome!`
        alert(message)
    }else{
        message = `Wrong password`
        alert(message)
    }
}else{
    message = `I don't know you.`
    alert(message)
};