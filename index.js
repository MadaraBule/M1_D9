//write js here

function onLoad() {
    //can put more than one thing
    displayDaysOfTheMonth()
}
window.onload = onLoad()
const daysCount = 31; //Assumption always display 31 days
function displayDaysOfTheMonth() {
    //1) Get the div where we want to add the days as children: the parent
    let monthNode = document.getElementById("month");

    for (let day = 1; day <= daysCount; day++) {
        //2) create a new div
        let dayNode = document.createElement("div")
        //3) add the text/class (we customize it)
        dayNode.innerText = day
        dayNode.classList.add("day");
        dayNode.addEventListener("click", selectDay);

        monthNode.appendChild(dayNode);
    }

    //4) appent it to the parent

}

function selectDay(event) {
    let clickedDayNode = event.target
    let previouslySelectedDay = document.querySelector(".selected-day")
    if (previouslySelectedDay)
        previouslySelectedDay.classList.remove("selected-day")

    clickedDayNode.classList.add("selected-day");
}
