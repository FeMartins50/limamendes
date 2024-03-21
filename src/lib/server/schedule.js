// Criar uma table de nome 'schedule'
import SQLite from 'better-sqlite3';
const sql = new SQLite("./db.sqlite");

export function fetchDays ({ distinct }) {
    let days = []
    if (distinct) {
        days = sql.prepare("SELECT DISTINCT day FROM schedule;").all();
    } else {
        days = sql.prepare("SELECT day FROM schedule;").all();
    }
    return days;
}
export function fetchEventsByDay (day)  {
    let events = [];
    events = sql.prepare("SELECT * FROM schedule WHERE day = ?;").all(day);
    return events;
}
export function addEvent (day, name, location, time) {
    try {
        sql.prepare("INSERT INTO schedule (day, name, location, time) VALUES (?, ?, ?, ?);").run(day, name, location, time);
    } catch (e) {
        console.error(e);
        console.log("== ERROR INSERTING INTO schedule ==");
        return -1;
    }
    return 1;
}
export function removeEvent (name) {
    try {
        sql.prepare("DELETE FROM schedule WHERE name = ?;").run(name);
    } catch (e) {
        console.error(e);
        console.log("== ERROR DELETING FROM schedule ==");
        return -1;
    }
    return 1;
}
/*
export function updateEvent (day, name, location, time) {
    try {
        sql.prepare("UPDATE schedule SET (day = ?, location = ?, time = ?) WHERE name = ?;").run(day, location, time, name);
    } catch (e) {
        console.log("== ERROR UPDATING schedule TABLE ==");
        console.error(e);
        return -1;
    }
    return 1;
}
*/