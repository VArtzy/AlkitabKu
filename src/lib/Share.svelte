<script>
    import CopyClipBoard from "../lib/CopyToClipboard.svelte"

    let name = "alkitabku.vercel.app"

    const copy = () => {
        const app = new CopyClipBoard({
            target: document.getElementById("clipboard"),
            props: { name },
        })
        app.$destroy()
    }
</script>

<section id="download" class="max-w-maxs mx-auto my-32 p-4">
    <h1
        class="text-amber-800 font-display text-[2.3rem] tracking-widest uppercase leading-tight max-w-[687px] text-center mx-auto"
    >
        Bagikan Aplikasi Keren Ini Sekarang!
    </h1>
    <p
        class="section-description text-darklight max-w-[761px] mx-auto text-center mt-8 mb-8"
    >
        Yuk mulai mewarkatan kasihNya, hanya dengan berbagi dan sharing aplikasi
        ini!
    </p>
    <button
        on:click={copy}
        class="pl-4 pr-5 py-2.5 flex items-center mx-auto gap-4 overflow-hidden text-white bg-amber-900 rounded group"
    >
        <svg
            class="fill-white block w-5 h-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 384 512"
            ><path
                d="M384 112v352c0 26.51-21.49 48-48 48H48c-26.51 0-48-21.49-48-48V112c0-26.51 21.49-48 48-48h80c0-35.29 28.71-64 64-64s64 28.71 64 64h80c26.51 0 48 21.49 48 48zM192 40c-13.255 0-24 10.745-24 24s10.745 24 24 24 24-10.745 24-24-10.745-24-24-24m96 114v-20a6 6 0 0 0-6-6H102a6 6 0 0 0-6 6v20a6 6 0 0 0 6 6h180a6 6 0 0 0 6-6z"
            /></svg
        >
        <input
            class="text-white bg-amber-900 w-[140px]"
            readonly
            bind:value={name}
        />
    </button>
    <div id="clipboard" />
</section>
