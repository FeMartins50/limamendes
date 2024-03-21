/*
better-sqlite3 e JS Array
Array 'pages':
{ modalidade, slug, introHTML } []
table 'results':
(nomeDaProva, modalidade, resultsJSON, type)
*/

// Criar um Array de nome 'pages'
export const pages = [
    {
        modalidade: 'Natação',
        slug: 'natacao',
        introHTML: '<h1>Natação</h1>'
    },
    {
        modalidade: 'Triatlo',
        slug: 'triatlo',
        introHTML: '<h1>Triatlo Militar</h1>'
    },
    {
        modalidade: 'Atletismo',
        slug: 'atletismo',
        introHTML: '<h1>Atletismo</h1>'
    },
    {
        modalidade: 'Esgrima',
        slug: 'esgrima',
        introHTML: '<h1>Esgrima</h1>'
    },
    {
        modalidade: 'Futebol',
        slug: 'futebol',
        introHTML: '<h1>Futebol</h1>'
    },
    {
        modalidade: 'Basquete',
        slug: 'basquete',
        introHTML: '<h1>Basquete</h1>'
    },
    {
        modalidade: 'Vôlei',
        slug: 'volei',
        introHTML: '<h1>Vôlei</h1>'
    },
    {
        modalidade: 'Judô',
        slug: 'judo',
        introHTML: '<h1>Judô</h1>'
    },
    {
        modalidade: 'Orientação',
        slug: 'orientacao',
        introHTML: '<h1>Orientação</h1>'
    },
    {
        modalidade: 'Xadrez',
        slug: 'xadrez',
        introHTML: '<h1>Xadrez</h1>'
    },
    {
        modalidade: 'Tiro',
        slug: 'tiro',
        introHTML: '<h1>Tiro</h1>'
    },
    {
        modalidade: 'Biatlo',
        slug: 'biatlo',
        introHTML: '<h1>Biatlo</h1>'
    },
    {
        modalidade: 'Cabo de Guerra',
        slug: 'cabo_de_guerra',
        introHTML: '<h1>Cabo de Guerra</h1>'
    },
    {
        modalidade: 'Corrida Rústica',
        slug: 'corrida_rustica',
        introHTML: '<h1>Corrida Rústica</h1>'
    }
];

// Criar uma table de nome 'results'
import SQLite from 'better-sqlite3';
const sql = new SQLite("./db.sqlite");

export function fetchAllByModalidade (modalidade) {
    const provas = sql.prepare("SELECT * FROM results WHERE modalidade = ?;").all(modalidade);
    return provas;
}
export function fetchProvasNameByModalidade (modalidade) {
    const provas = sql.prepare("SELECT (modalidade, nomeDaProva) FROM results WHERE modalidade = ?;").all(modalidade);
    return provas;
}
export function addProva (modalidade, nomeDaProva, resultsJSON, type) {
    try {
        sql.prepare("INSERT INTO results (modalidade, nomeDaProva, resultsJSON, type) VALUES (?, ?, ?, ?);").run(modalidade, nomeDaProva, resultsJSON, type);
    } catch (e) {
        console.log("== ERROR ADDING INSERTING INTO results TABLE ==");
        console.error(e);
        return -1;
    }
    return 1;
}
export function removeProva (nomeDaProva) {
    try {
        sql.prepare("DELETE FROM results WHERE nomeDaProva = ?;").run(nomeDaProva);
    } catch (e) {
        console.error(e);
        console.log("== ERROR DELETING FROM results ==");
        return -1;
    }
    return 1;
}
export function updateProva (nomeDaProva, resultsJSON, type) {
    try {
        sql.prepare("UPDATE results SET resultsJSON = ?, type = ? WHERE nomeDaProva = ?;").run(resultsJSON, type, nomeDaProva);
    } catch (e) {
        console.log("== ERROR UPDATING results TABLE ==");
        console.error(e);
        return -1;
    }
    return 1;
}
