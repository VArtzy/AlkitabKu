import { error, redirect } from "@sveltejs/kit"

/** @type {import('./$types').PageLoad} */
export async function load({ fetch, params }) {
    const passage = params.passage
    const [chapter, ver] = params.chapter.split("/")
    const res = await fetch(
        `https://api-alkitab.herokuapp.com/v3/passage/${passage}/${chapter}?ver=${ver}`
    )
    const injil = await res.json()

    if (res.ok) {
        return {
            injil,
            passage,
            chapter,
            ver,
        }
    }

    throw error(
        404,
        "Injil tidak ada atau koneksi error, silahkan cek koneksi anda."
    )
}
