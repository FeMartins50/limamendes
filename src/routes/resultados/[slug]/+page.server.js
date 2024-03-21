import { redirect, error } from '@sveltejs/kit';
import { pages, fetchAllByModalidade } from '$lib/server/modalidades.js';

export function load ({ params }) {
    const page = pages.find((page) => (page.slug === params.slug));
    if (!page) {
        redirect(302, "/");
    }
    const provas = fetchAllByModalidade(page.slug);

    if (!page) throw error(404);

    return {
        page: page,
        provas: provas
    };
}