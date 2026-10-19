const users = [
    {
        name: "Mayank",
        pic: "./image/boy1.jpg",
        bio: "CA"
    },
    {
        name: "Tarun",
        pic: "./image/boy2.jpg",
        bio: "Editor"
    },
    {
        name: "Vishal",
        pic: "./image/boy3.jpg",
        bio: "Developer"
    },
    {
        name: "Kunal",
        pic: "./image/boy4.jpg",
        bio: "Designer"
    },


];


const cards = document.querySelector(".cards");
function showuser(arr) {
    arr.forEach(function (users) {

        let box = document.createElement("div");
        box.classList.add("box");

        let img = document.createElement("img");
        img.src = users.pic;

        let content = document.createElement("div");
        content.classList.add("content");

        let h4 = document.createElement("h4");
        h4.textContent = users.name;

        let p = document.createElement("p");
        p.textContent = users.bio


        content.appendChild(h4)
        content.appendChild(p)

        box.appendChild(content)
        box.appendChild(img)

        cards.appendChild(box)
        console.log(cards)

    })
}

showuser(users);


let input = document.querySelector(".input");


input.addEventListener("input", () => {

    searchvalue = input.value.toLowerCase();

    let newuser = users.filter(function (users) {
        return users.name.toLowerCase().startsWith(searchvalue);
    })

    if (newuser.length == 0) {
        cards.textContent = "User not found";
    }
    else {
        cards.textContent = "";
        showuser(newuser)
    }
})