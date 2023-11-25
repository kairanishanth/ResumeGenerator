let previousLength = 0;
  const handleInput = (event) => {
    const bullet = "\u2022";
    const newLength = event.target.value.length;
    const characterCode = event.target.value.substr(-1).charCodeAt(0);
  
    if (newLength > previousLength) {
      if (characterCode === 10) {
        event.target.value = `${event.target.value}${bullet} `;
      } else if (newLength === 1) {
        event.target.value = `${bullet} ${event.target.value}`;
      }
    }
    
    previousLength = newLength;
  }

function addNewExp() {
    let newnode = document.createElement("textarea");
    newnode.classList.add("form-control");
    newnode.style.marginTop = "20px";
    newnode.classList.add("wefield");
    newnode.setAttribute("rows", 3);
    newnode.setAttribute("placeholder", "Enter your Work Experience");
  
    let weAdd = document.getElementById("we");
    let weAddButton = document.getElementById("weAddButton");
  
    weAdd.insertBefore(newnode, weAddButton);
  }
  
  function addNewEdu() {
    let newnode = document.createElement("textarea");
    newnode.classList.add("form-control");
    newnode.style.marginTop = "20px";
    newnode.classList.add("edufield");
    newnode.setAttribute("rows", 3);
    newnode.setAttribute("placeholder", "Enter your Education");
  
    let weAdd = document.getElementById("edu");
    let weAddButton = document.getElementById("EAddButton");
  
    weAdd.insertBefore(newnode, weAddButton);
  }
  
  //generating cv
  
  function generateResume() {
    let file = document.getElementById("imgField").files[0];
    console.log(file);
  
    let reader = new FileReader();
  
    reader.readAsDataURL(file);
  
    //set image
  
    reader.onloadend = function () {
      document.getElementById("my-img").src = reader.result;
    };
  
    let nameField = document.getElementById("namefield").value;
    document.getElementById("nameT1").innerHTML = nameField;
  
    let contactNo = document.getElementById("contactfield").value;
    document.getElementById("noT").innerHTML = contactNo;
  
    let email = document.getElementById("emailfield").value;
    document.getElementById("emailT").innerHTML = email;
  
    let address = document.getElementById("addressfield").value;
    document.getElementById("addressT").innerHTML = address;
  
    let Github = document.getElementById("githubfield").value;
    document.getElementById("githubT").innerHTML = Github;
  
    let Linkedin = document.getElementById("linkedinfield").value;
    document.getElementById("linkedinT").innerHTML = Linkedin;
  
    let Twitter = document.getElementById("twitterfield").value;
    document.getElementById("twitterT").innerHTML = Twitter;
  
    let Website = document.getElementById("websitefield").value;
    document.getElementById("websiteT").innerHTML = Website;
  
    let TechSkill = document.getElementById("techskillfield").value;
    document.getElementById("techskillT").innerHTML = TechSkill;
  
    let SoftSkill = document.getElementById("softskillfield").value;
    document.getElementById("softskillT").innerHTML = SoftSkill;

    let project = document.getElementById("projectfield").value;
    document.getElementById("projectT").innerHTML = project;

    let interest = document.getElementById("interestfield").value;
    document.getElementById("interestT").innerHTML = interest;

    let Awards = document.getElementById("awardfield").value;
    document.getElementById("awardT").innerHTML = Awards;

    let obj = document.getElementById("objfield").value;
    document.getElementById("objT").innerHTML = obj;

    
  
    // experience
    let work = document.getElementsByClassName("wefield");
  
    let str = "";
    for (let e of work) {
      str = str + `<li> ${e.value}</li>`;
    }
    document.getElementById("weT").innerHTML = str;
  
    //education
    let Education = document.getElementsByClassName("edufield");
  
    let str2 = "";
    for (let e of Education) {
      str2 = str2 + `<li> ${e.value}</li>`;
      console.log(str2);
    }
    document.getElementById("eduT").innerHTML = str2;
  
    document.getElementById("cv-form").style.display = "none";
  
    document.getElementById("cv-template").style.display = "block";
  }
  
  //printing the resume
  
  function printResume() {
    console.log("clicked");
    window.print();
  }