import { error, redirect } from "@sveltejs/kit"

/** @type {import('./$types').PageLoad} */
export async function load({ fetch }) {
    const res = await fetch("https://api-alkitab.herokuapp.com/v2/passage/list")
    const passages = await res.json()

    if (res.ok) {
        return {
            passages,
        }
    }

    throw error(404, "Tidak dapat mengambil injil, silahkan cek koneksi anda.")
}
