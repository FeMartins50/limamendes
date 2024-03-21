import { fetchDays, fetchEventsByDay } from '$lib/server/schedule.js'

export function load () {
    let dailySchedule = [], events = [];
    let days = fetchDays({ distinct: true }).map(({ day }) => day);
    days = sortDays(days);
    for (let day of days) {
        events = [];
        events = fetchEventsByDay(day);
        events = sortEvents(events);
        dailySchedule.push({
            day: day,
            events: events
        });
    }
    return {
        dailySchedule: dailySchedule
    }
}

function sortDays (days) {
    let sorted = days;
    let back, next;
    for (let i = 0; i < days.length; i++) {
        for (let j = 0; j < (days.length - 1); j++) {
            back = sorted[j];
            next = sorted[j + 1];
            if (Date(back) > Date(next)) {
                sorted[j] = next;
                sorted[j + 1] = back;
            }
        }
    }
    return sorted;
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