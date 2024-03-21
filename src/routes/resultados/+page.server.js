import { pages } from '$lib/server/modalidades.js';

export function load ({ params }) {
    return {
        pages: pages.map(page => ({
            slug: page.slug,
            name: page.modalidade
        }))
    }
}