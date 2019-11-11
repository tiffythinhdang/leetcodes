let candyItems = Array.from(document.getElementsByClassName("candy-item"));

candyItems.forEach(candy => {
  candy.addEventListener("click", (e) => {
    let candyType = e.target.classList;
    let candyCounter =
      e.target.parentNode
        .getElementsByClassName("candy-counter")[0];

    if (candyCounter.innerHTML === "0") return;


    let candySlots = Array.from(document.getElementsByClassName("candy-slot"));
    for (let i = 0; i < candySlots.length; i++) {
      let currSlot = candySlots[i];
      if (currSlot.innerHTML === "") {
        let fillCandy = document.createElement("div");
        fillCandy.classList = candyType;
        currSlot.appendChild(fillCandy);
        candyCounter.innerHTML = String(parseInt(candyCounter.innerHTML) - 1);
        break
      }
    }
  })
})

let candySlots = Array.from(document.getElementsByClassName("candy-slot"));

candySlots.forEach(slot => {
  slot.addEventListener("click", (e) => {
    let candy = e.target.innerHTML;

    if (candy === "") return;

    let candyType = candy.classList[1];

    let candyCounters = Array.from(document.querySelectorAll(`.candy-counter`));
    let candyCounter;

    for (let i = 0; i < candyCounters.length; i++) {
      let currCounter = candyCounters[i];
      if (currSlot.dataset["type"] === candyType) {
        candyCounter = currCounter;
        candyCounter.innerHTML = String(parseInt(candyCounter.innerHTML) + 1);
        e.target.innerHTML = ""
        break;
      }
    }
  })
})


