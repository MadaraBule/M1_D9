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
    }

    //4) appent it to the parent

}