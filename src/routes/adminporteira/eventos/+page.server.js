import * as scheduleDB from '$lib/server/schedule.js';

export const actions = {
    addEvent: async ({ request }) => {
        const data = await request.formData();
        const day = data.get('day').trim();
        const name = data.get('name').trim();
        let location = data.get('location').trim();
        const outros = data.get('outros')?.trim();
        const time = data.get('time').trim();
        if (location == "Outro...") {
            location = outros;
        }

        let successCode = scheduleDB.addEvent(day, name, location, time);

        return {
            success: successCode > 0 ? true : false,
            action: "",
            name: name
        };
    },
    removeEvent: async ({ request }) => {
        const data = await request.formData();
        const name = data.get('name').trim();

        let successCode = scheduleDB.removeEvent(name);

        return {
            success: successCode > 0 ? true : false,
            action: "",
            name: name
        };
    }
}