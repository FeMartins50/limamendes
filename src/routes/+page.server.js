import { fetchEventsByDay } from '$lib/server/schedule.js';

export function load () {
    let date = new Date(new Date().getTime() - 3*60*60*1000);
    let dayStr = date.toISOString();
    let events = fetchEventsByDay(dayStr.substring(0, 10));
    events = sortEvents(events);
    dayStr = dayStr.substring(8, 10) + "/" + dayStr.substring(5, 7);

    return {
        day: dayStr,
        events: events
    }
}

function sortEvents (events) {
    let sorted = events;
    let back, next;
    for (let i = 0; i < events.length; i++) {
        for (let j = 0; j < (events.length - 1); j++) {
            back = sorted[j];
            next = sorted[j + 1];
            if (back.time > next.time) {
                sorted[j] = next;
                sorted[j + 1] = back;
            }
        }
    }
    return sorted;
}