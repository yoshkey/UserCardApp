class Usercard{
    constructor(givenName, familyName, job, skills, country, imgUrl){
        this.givenName = givenName;
        this.familyName = familyName;
        this.job = job;
        this.skills = skills;
        this.country = country;
        this.imgUrl = imgUrl;
    }

    getFullName(){
        return this.givenName + " " + this.familyName;
    }
}

function createUserCard(cardObject){

    let container = document.createElement("div");
    container.classList.add("container", "bg-white", "col-md-8", "col-12", "m-4", "p-4", "rounded",  "d-flex", "flex-column");

    let titleDiv = document.createElement("div");
    titleDiv.classList.add("text-center");

    let title = document.createElement("h2")
    title.innerHTML = "User Card App";

    titleDiv.append(title);
    

    let infoBox = document.createElement("div");
    infoBox.classList.add("d-flex", "flex-row");

    //placing the text infomation on the left side of the card
    let textInfo = document.createElement("div");
    textInfo.classList.add("col-8");

    let nameDiv = document.createElement("div");
    nameDiv.classList.add("name", "py-2");

    let name = document.createElement("h4");
    name.innerHTML = cardObject.getFullName();

    nameDiv.append(name);


    let jobDiv = document.createElement("div");
    jobDiv.classList.add("job", "py-2");

    let job = document.createElement("p");
    job.innerHTML = "Job:" + "<br>" + cardObject.job;

    jobDiv.append(job);


    let skillsDiv = document.createElement("div");
    skillsDiv.classList.add("skills", "py-2");

    let skills = document.createElement("p");
    skills.innerHTML = "Skills:" + "<br>" + cardObject.skills;

    skillsDiv.append(skills);
    
    let countryDiv = document.createElement("div");
    countryDiv.classList.add("country", "py-2");

    let country = document.createElement("p");
    country.innerHTML = "Country:" + "<br>" + cardObject.country;

    countryDiv.append(country);

    textInfo.append(nameDiv);
    textInfo.append(jobDiv);
    textInfo.append(skillsDiv);
    textInfo.append(countryDiv);

    //placing face image on the right side of the card
    let imgInfo = document.createElement("div");
    imgInfo.classList.add("col-4", "d-flex", "align-items-center", "justify-content-center");

    let faceImg = document.createElement("img");
    faceImg.classList.add("avatar");
    faceImg.src = cardObject.imgUrl;

    imgInfo.append(faceImg);

    //appending both text and image into infoBox
    infoBox.append(textInfo, imgInfo);

    //appending all the contents into container
    container.append(titleDiv, infoBox);

    return container;
}


const cardBase = document.getElementById("cardApp");

let object1 = new Usercard("Kaiden" ,"Herman", "Software Engineer", "C++, C#, Java, PHP, JavaScript, Python","United States", "https://pbs.twimg.com/profile_images/501759258665299968/3799Ffxy.jpeg");
cardBase.append(createUserCard(object1));

let object2 = new Usercard("Elizabeth", "Dunn", "Accountant", "Excel, Word, Quickbooks", "England", "https://randomuser.me/api/portraits/women/76.jpg");
cardBase.append(createUserCard(object2));

let object3 = new Usercard("Duan", "Moreno", "Teacher",  "Working with children, History, Word", "Argentina", "https://randomuser.me/api/portraits/med/men/93.jpg");

cardBase.append(createUserCard(object3));