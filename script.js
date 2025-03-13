let cartBtns = document.querySelectorAll("#cartBtn");
let removeBtns = document.querySelectorAll("#removeBtn"); // Variable corrected
let loginBtn = document.getElementById("loginBtn");
let user = document.getElementById("user");
let chefs = document.querySelectorAll(".chefCard");
let cartNum = document.getElementById("cartNum");

let num = 0; // Cart count

// Chef Card Click Event
chefs.forEach(function (chef) {
    chef.addEventListener("click", function () {
        document.querySelector(".detail").innerHTML = "";
        document.querySelector(".chefData").style.display = "block";

        let div = document.createElement("div");
        div.classList.add("chefDetail");
        div.innerHTML = `
            <img src=${chef.firstElementChild.src} alt="Chef Image">
            <div>
                <p>Top Chef's</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio assumenda, modi ut consectetur, quod illo perspiciatis officiis officia possimus voluptates nisi amet!</p>
            </div>
        `;
        document.querySelector(".detail").appendChild(div);

        // Close Button Event
        document.getElementById("closeBtn").addEventListener("click", function () {
            document.querySelector(".chefData").style.display = "none";
        });
    });
});

// Login Toggle
user.addEventListener("click", function () {
    document.querySelector(".loginPage").classList.toggle("showPage");
});

// Login Button Click Event
loginBtn.addEventListener("click", function () {
    let email = document.getElementById("email").value.trim();
    let pass = document.getElementById("pass").value.trim();

    if (email === "" || pass === "") {
        alert("Enter Email & Password!");
    } else {
        alert("Thank you! You are logged in.");
        document.querySelector(".loginPage").style.display = "none";
    }
});

// Add to Cart
cartBtns.forEach(function (btn) {
    btn.addEventListener("click", function () {
        num++;
        cartNum.innerHTML = num;
        cartNum.classList.add("cart-anim");

        setTimeout(() => {
            cartNum.classList.remove("cart-anim");
        }, 300);
    });
});

// Remove from Cart
removeBtns.forEach(function (remove) {
    remove.addEventListener("click", function () {
        if (num > 0) {
            num--;
            cartNum.innerHTML = num;
            cartNum.classList.add("cart-anim");

            setTimeout(() => {
                cartNum.classList.remove("cart-anim");
            }, 300);
        }
    });
});
