

document.getElementById("checkBtn").addEventListener("click", function () {
  const loader = document.getElementById("loader");
  const output = document.getElementById("output");
  const pincode = document.getElementById("pincode").value.trim();

  if (pincode === "") {
    output.textContent = "⚠️ Please enter a pincode!";
    return;
  }

  loader.style.display = "block";
  output.textContent = "";

  setTimeout(() => {
    loader.style.display = "none";

    if (pincode.startsWith("11")) {
      output.textContent = " Roses are available in your area!";
    } else if (pincode.startsWith("22")) {
      output.textContent = " Sunflowers are available in your area!";
    }else if (pincode.startsWith("33")) {
      output.textContent = " Lilies are available in your area!";
    }else if (pincode.startsWith("44")) {
      output.textContent = " Chrysanthemum are available in your area!";
    }else if (pincode.startsWith("55")) {
      output.textContent = " Dandelions are available in your area!";
    }else {
      output.textContent = "❌ Sorry, no flowers available for this pincode.";
    }
  }, 3000);
});


const words = [
  { text: "roses", class: "color-rose" },
  { text: "lilies", class: "color-lily" },
  { text: "sunflowers", class: "color-sunflower" },
  { text: "chrysanthemum", class: "color-chrysanthemum" },
  { text: "dandelions", class: "color-dandelions" }
];

let index = 0;
let charIndex = 0;
const textElement = document.querySelector(".changing-text");

function typeWord() {
  if (!textElement) return; 
  const word = words[index].text;
  const cssClass = words[index].class;

  textElement.className = "changing-text " + cssClass;

  if (charIndex < word.length) {
    textElement.textContent = word.substring(0, charIndex + 1);
    charIndex++;
    setTimeout(typeWord, 150);
  } else {
    setTimeout(eraseWord, 1500);
  }
}

function eraseWord() {
  const word = words[index].text;
  if (charIndex > 0) {
    textElement.textContent = word.substring(0, charIndex - 1);
    charIndex--;
    setTimeout(eraseWord, 100);
  } else {
    index = (index + 1) % words.length;
    setTimeout(typeWord, 300);
  }
}

typeWord();


const loginBtn = document.getElementById("loginBtn");
const signupBtn = document.getElementById("signupBtn");
const loginForm = document.getElementById("loginForm");
const signupForm = document.getElementById("signupForm");

if (loginBtn && signupBtn) {
  loginBtn.addEventListener("click", () => {
    loginBtn.classList.add("active");
    signupBtn.classList.remove("active");
    loginForm.classList.add("active");
    signupForm.classList.remove("active");
  });

  signupBtn.addEventListener("click", () => {
    signupBtn.classList.add("active");
    loginBtn.classList.remove("active");
    signupForm.classList.add("active");
    loginForm.classList.remove("active");
  });
}
