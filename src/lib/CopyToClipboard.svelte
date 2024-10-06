<script>
    import { onMount } from "svelte"

    export let name

    let textarea

    onMount(() => {
        textarea.select()
        document.execCommand("copy")
        name = "Berhasil"
        setInterval(() => {
            name = "alkitabku.vercel.app"
        }, 2000)
    })
</script>

<textarea bind:value={name} bind:this={textarea} />
