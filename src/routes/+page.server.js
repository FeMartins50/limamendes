import { fetchEventsByDay } from '$lib/server/schedule.js';

export function load () {
    let date = new Date(new Date().getTime() - 3*60*60*1000);
    let dayStr = date.toISOString();
    let events = fetchEventsByDay(dayStr.substring(0, 10));
    dayStr = dayStr.substring(8, 10) + "/" + dayStr.substring(5, 7);

    return {
        day: dayStr,
        events: events
    }
}