<script lang="ts">
    import { error } from "@sveltejs/kit"
    import { fly } from "svelte/transition"
    import { elasticIn } from "svelte/easing"

    export let data
    let { passages, passageName } = data
    let passage = passages.passage_list
    let filteredPassage = passage.filter(
        (pass: any) => pass.abbreviation === passageName
    )[0]
    let next = passage.filter(
        (pass: any) => pass.book_number === filteredPassage.book_number + 1
    )[0]
    let prev = passage.filter(
        (pass: any) => pass.book_number === filteredPassage.book_number - 1
    )[0]
    let ver: any = "tb"

    let jumlahInjil: any = []

    for (let i = 1; i <= filteredPassage.total_chapter; i++) {
        jumlahInjil.push(i)
    }

    if (!filteredPassage) throw error(404, "Injil tidak ditemukan!")
</script>

<main class="font-roboto pt-16 max-w-[1280px] mx-auto px-8">
    <h1
        class="text-amber-800 font-display text-[2.4rem] tracking-widest uppercase leading-tight max-w-[687px] text-center mx-auto mb-16"
    >
        {filteredPassage.book_name}
    </h1>
    <div class="">
        <label for="country">Versi: </label>
        <select name="country" id="country" bind:value={ver}>
            <option disabled value="">Pilih versi</option>
            <option value="tb">TB (Terjemahan Baru)</option>
            <option value="bis">BIS (Bahasa Indonesia Sehari-hari)</option>
            <option value="net">NET (Bahasa Inggris)</option>
        </select>
    </div>
    <div class="grid grid-cols-3 md:grid-cols-4 gap-8">
        {#each jumlahInjil as jum}
            <a
                href={`/bacaan/${filteredPassage.abbreviation.replaceAll(
                    " ",
                    ""
                )}/${jum}/${ver}`}
                sveltekit:prefetch
                transition:fly={{ duration: 1000, easing: elasticIn }}
            >
                {filteredPassage.book_number}.
                <span class="font-display">
                    {filteredPassage.abbreviation}
                    {filteredPassage.book_name}
                </span>
                <span class="font-bold">{jum}</span>
            </a>
        {/each}
    </div>
    <div class="flex justify-between mt-16 items-end">
        {#if prev}
            <div class="">
                <p>Sebelumnya:</p>
                <a
                    href={`/bacaan/${prev.abbreviation}`}
                    sveltekit:reload
                    class="bg-amber-400 text-white px-4 py-2 rounded-lg flex gap-4 font-display"
                    ><img
                        src="/icons/solid/arrow-left.svg"
                        alt="Sebelumnya"
                        class="inline-block invert"
                        width="20"
                    />
                    {prev.book_name}</a
                >
            </div>
        {/if}
        <div class="">
            <a
                href="/bacaan"
                class="hidden md:inline bg-amber-400 text-white px-4 py-2 rounded-lg gap-4 font-display"
            >
                Kembali
            </a>
        </div>
        {#if next}
            <div class="">
                <p>Selanjutnya:</p>
                <a
                    href={`/bacaan/${next.abbreviation}`}
                    sveltekit:reload
                    class="bg-amber-400 text-white px-4 py-2 rounded-lg flex gap-4 font-display"
                >
                    {next.book_name}
                    <img
                        src="/icons/solid/arrow-right.svg"
                        alt="Sebelumnya"
                        class="inline-block invert"
                        width="20"
                    />
                </a>
            </div>
        {/if}
    </div>
</main>
