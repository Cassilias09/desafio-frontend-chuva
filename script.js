function expandResume(){

    var text = document.getElementById("resume-content");
    var button = document.getElementById("resume-button");
    if(text.style.maxHeight != "none"){
        text.style.maxHeight = "none";
        button.innerHTML = "ver menos";
        button.className = "resume-button-shown";
    }
    else{
        text.style.maxHeight = "50px";
        button.innerHTML = "ver mais";
        button.className = "resume-button-collapsed";
    }
}

function like(likeButton){
    if(getComputedStyle(likeButton).getPropertyValue("background-color") != "rgb(255, 0, 0)")
        likeButton.style.backgroundColor = "rgb(255, 0, 0)";
    else
        likeButton.style.backgroundColor = "rgb(255, 255, 255)";
}

function showAnswers(button){
    var mainCommentary = button.parentNode.parentNode.parentNode;
    var answer = mainCommentary.lastElementChild;
    
    if(answer.style.display == "none"){
        answer.style.display = "block";
    } else if(answer.style.display == "block"){
        answer.style.display = "none";
    }
    
}

function addTopic(){

    var addState = document.getElementById("add-topic-state");
    var editState = document.getElementById("edit-topic-state");
    var sentState = document.getElementById("sent-topic-state");

    if(getComputedStyle(addState).getPropertyValue("display") == "flex"){
        addState.style.display = "none";
        editState.style.display = "block";
    }
    else if(getComputedStyle(sentState).getPropertyValue("display") == "flex"){
        sentState.style.display = "none";
        editState.style.display = "block";
    }
}

function submitTopic(){
    document.getElementById("edit-topic-state").style.display = "none";
    document.getElementById("sent-topic-state").style.display = "flex";
}