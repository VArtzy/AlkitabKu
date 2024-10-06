<script lang="ts">
    import { fly } from "svelte/transition"
    import { elasticIn } from "svelte/easing"
    export let data
    let { passages } = data
    let passage = passages.passage_list
    let searchText = ""
    $: filteredPassage = passage.filter((pass: any) =>
        pass.book_name.toLowerCase().includes(searchText.toLowerCase())
    )
</script>

<main class="max-w-[1280px] mx-auto py-8 pt-16 font-roboto px-8">
    <h1
        class="text-amber-800 font-display text-[2.4rem] tracking-widest uppercase leading-tight max-w-[687px] text-center mx-auto mb-16"
    >
        Bacaan
    </h1>
    <input
        type="text"
        class=""
        placeholder="Cari injil... (cth: Kejadian)"
        bind:value={searchText}
    />

    <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
        {#each filteredPassage as pass (pass.book_number)}
            <div class="" in:fly={{ duration: 1000, easing: elasticIn }}>
                <a
                    class="font-display text-lg"
                    href={`/bacaan/${pass.abbreviation}`}
                    >{pass.book_number}
                    {pass.abbreviation} - {pass.book_name}</a
                >
                <p>Total ayat: {pass.total_chapter}</p>
            </div>
        {/each}
    </div>
</main>
