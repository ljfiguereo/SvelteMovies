import { writable } from 'svelte/store';

const state = {
    id: null,
    url: null,
    title: null, // Texto a mostrar
    message: null,
    type: null, // success or error
    show: null, // true or false
    year: null,
    trailer: null,
    trailerActive: null,
    youtube: null
}

export const store = writable(state);
