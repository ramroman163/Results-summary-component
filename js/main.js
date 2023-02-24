fetch('././data.json')
    .then((response) => response.json())
    .then((data) => {
        main(data);
    });


function main(data){
    showSkills(data);
    showIcons(data);
    showScores(data);
}

function showSkills(data){
    let skills = document.querySelectorAll(".skill");

    for(let i = 0; i < skills.length; i++){
        skills[i].innerHTML = data[i]["category"];
    }
}

function showIcons(data){
    let imgTags = document.querySelectorAll(".icon-skill");
    
    for(let i = 0; i < imgTags.length; i++){
        let route = data[i]["icon"];
        imgTags[i].src = route;
    }
}

function showScores(data){
    let scores = document.querySelectorAll(".score");

    for(let i = 0; i < scores.length; i++){
        scores[i].innerHTML = data[i]["score"];
    }
}