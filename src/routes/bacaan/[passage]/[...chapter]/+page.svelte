<script lang="ts">
    import { v4 as uuidv4 } from "uuid"
    let passages = [
        "Kej",
        "Kel",
        "Ima",
        "Bil",
        "Ula",
        "Yos",
        "Hak",
        "Rut",
        "1Sam",
        "2Sam",
        "1Raj",
        "2Raj",
        "1Taw",
        "2Taw",
        "Ezr",
        "Neh",
        "Est",
        "Ayb",
        "Maz",
        "Ams",
        "Pkh",
        "Kid",
        "Yes",
        "Yer",
        "Rat",
        "Yeh",
        "Dan",
        "Hos",
        "Yoe",
        "Amo",
        "Oba",
        "Yun",
        "Mik",
        "Nah",
        "Hab",
        "Zef",
        "Hag",
        "Zak",
        "Mal",
        "Mat",
        "Mar",
        "Luk",
        "Yoh",
        "Kis",
        "Rom",
        "1Kor",
        "2Kor",
        "Gal",
        "Efe",
        "Flp",
        "Kol",
        "1Tes",
        "2Tes",
        "1Tim",
        "2Tim",
        "Tit",
        "Flm",
        "Ibr",
        "Yak",
        "1Pet",
        "2Pet",
        "1Yoh",
        "2Yoh",
        "3Yoh",
        "Yud",
        "Wah",
    ]
    let chapters = [
        50, 40, 27, 36, 34, 24, 21, 4, 31, 24, 22, 25, 29, 36, 10, 13, 10, 42,
        150, 31, 12, 8, 66, 52, 5, 48, 12, 14, 3, 9, 1, 4, 7, 3, 3, 3, 2, 14, 4,
        28, 16, 24, 21, 28, 16, 16, 13, 6, 6, 4, 4, 5, 3, 6, 4, 3, 1, 13, 5, 5,
        3, 5, 1, 1, 1, 22,
    ]
    export let data: any
    let { injil, passage, chapter, ver } = data
    let verses = injil.verses
</script>

<main
    class="md:pt-16 leading-relaxed tracking-wide max-w-[1280px] mx-auto px-8"
>
    {#if data}
        <div class="max-w-[678px] mx-auto">
            {#each verses as verse (uuidv4())}
                <span
                    class={verse.verse
                        ? ""
                        : "block text-amber-800 font-display text-[2.4rem] tracking-widest uppercase leading-tight max-w-[687px] text-center mx-auto mb-8 mt-16 md:mt-16"}
                    ><span class="font-bold text-xl"
                        >{"   " + (verse.verse ? verse.verse : "")}</span
                    >
                    {verse.content}</span
                >
            {/each}
        </div>
    {:else}
        <h1>Loading...</h1>
    {/if}
    <div class="flex flex-end justify-between mt-16 items-end gap-6">
        <div class:hidden={passage === passages[0] && chapter == 1}>
            <a
                href={chapter > 1
                    ? `/bacaan/${passage}/${chapter - 1}/${ver}`
                    : `/bacaan/${passages[passages.indexOf(passage) - 1]}/${
                          chapters[passages.indexOf(passage) - 1]
                      }/${ver}`}
                sveltekit:reload
                class="bg-amber-400 text-white px-4 py-2 rounded-lg flex gap-4 font-display text-sm md:text-md items-center"
                ><img
                    src="/icons/solid/arrow-left.svg"
                    alt="Sebelumnya"
                    class="inline-block invert"
                    width="20"
                />
                Sebelumnya</a
            >
        </div>

        <div class="hidden md:block">
            <a
                href={`/bacaan/${passage.length === 4 ? "1 Raj" : passage}`}
                class="bg-amber-400 text-white px-4 py-2 rounded-lg flex gap-4 font-display text-sm md:text-md items-center"
            >
                Kembali</a
            >
        </div>
        <div
            class:hidden={passage === passages[passages.length - 1] &&
                chapter == chapters[passages.length - 1]}
        >
            <a
                href={chapter < chapters[passages.indexOf(passage)]
                    ? `/bacaan/${passage}/${parseInt(chapter) + 1}/${ver}`
                    : `/bacaan/${
                          passages[passages.indexOf(passage) + 1]
                      }/1/${ver}`}
                sveltekit:reload
                class="bg-amber-400 text-white px-4 py-2 rounded-lg flex gap-4 font-display text-sm md:text-md items-center"
            >
                Selanjutnya
                <img
                    src="/icons/solid/arrow-right.svg"
                    alt="Selanjutnya"
                    class="inline-block invert"
                    width="20"
                />
            </a>
        </div>
    </div>
</main>
