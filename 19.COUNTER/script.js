var count = 0;

// 1 stars
document.querySelector("#increase").addEventListener("click", () => {
  changeCount(1);
});

document.querySelector("#decrease").addEventListener("click", () => {
  changeCount(-1);
});
// 1end


// 2 stars
document.querySelector("#two").addEventListener("click", () => {
  changeCount(2);
});

// 2end

// 3 stars
document.querySelector("#three").addEventListener("click", () => {
  changeCount(3);
});


// 3end

// 4 stars
document.querySelector("#for").addEventListener("click", () => {
  changeCount(4);
});


// 4end


// 5 stars
document.querySelector("#five").addEventListener("click", () => {
  changeCount(5);
});


// 5end

// 6 stars
document.querySelector("#six").addEventListener("click", () => {
  changeCount(6);
});


// 6end

// 7 stars
document.querySelector("#seven").addEventListener("click", () => {
  changeCount(7);
});


// 7end

// 8 stars
document.querySelector("#eight").addEventListener("click", () => {
  changeCount(8);
});


// 8end

// 9 stars
document.querySelector("#nine").addEventListener("click", () => {
  changeCount(9);
});


// 9end
changeCount = (number) => {
  count += number;
  document.querySelector("#count").textContent = count;
}
