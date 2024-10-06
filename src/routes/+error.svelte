<script>
    import { page } from "$app/stores"
</script>

<svelte:head>
    <title>
        {$page.status === 404
            ? "Halaman Tidak Ditemukan"
            : $page.status === 500
            ? "Koneksi Error"
            : "Terjadi Kesalahan..."}</title
    >
</svelte:head>

<div class="error pt-16">
    <h1 class="warning text-red-600 text-6xl mb-4 font-display">Ooops...</h1>
    <span class="status mb-2">{$page.status}</span>
    <h2 class="mb-8">
        {$page.status === 500
            ? "Tidak dapat mengambil data, silahkan cek koneksi anda."
            : $page.status === 404
            ? "Halaman tidak ditemukan"
            : "Ada sesuatu yang salah..."}
    </h2>
    <a href="/">Kembali ke beranda</a>
    <a href="/bacaan" sveltekit:prefetch>Kembali ke bacaan</a>
    {#if $page.status === 500}
        <a class="text-blue-600" href=" " sveltekit:reload>Refresh</a>
    {/if}
</div>

<style>
    .error {
        display: grid;
        place-items: center;
        margin-bottom: auto;
    }

    .status {
        font-size: 3rem;
    }
</style>
