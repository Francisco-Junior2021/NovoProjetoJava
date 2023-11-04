
class Event {
    constructor(name, time) {
        this.name = name;
        this.time = time;
    }
}

const eventNameInput = document.getElementById("eventName");
const eventTimeInput = document.getElementById("eventTime");
const addEventButton = document.getElementById("addEvent");
const eventList = document.getElementById("event-list");

const events = [];

addEventButton.addEventListener("click", () => {
    const eventName = eventNameInput.value;
    const eventTime = new Date(eventTimeInput.value);

    if (eventName && eventTime) {
        events.push({ name: eventName, time: eventTime });
        events.sort((a, b) => a.time - b.time);

        renderEvents();
        eventNameInput.value = "";
        eventTimeInput.value = "";
    }
});


function renderEvents() {
    eventList.innerHTML = "";
    events.forEach(event => {
        const listItem = document.createElement("li");
        listItem.className = "event";
        listItem.textContent = `${event.name} - ${event.time.toLocaleString()}`;
        eventList.appendChild(listItem);
    });
}