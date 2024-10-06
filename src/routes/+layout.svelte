<script lang="ts">
    import "../app.css"
    import { page } from "$app/stores"
    export let href: String
    $: active = $page.url.pathname === href
</script>

<svelte:head>
    <title
        >{$page.url.pathname === "/"
            ? "AlkitabKu"
            : $page.url.pathname.split("/")[1][0].toUpperCase() +
              $page.url.pathname.split("/")[1].slice(1)}</title
    >
    <link
        href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Roboto:ital,wght@0,300;0,400;0,500;1,400&display=swap"
        rel="stylesheet"
    />
</svelte:head>

<nav
    class="fixed bottom-0 md:top-0 flex max-h-12 justify-evenly w-full py-2 min-h-[56px] bg-slate-900 items-center text-white z-50"
>
    <li class="hidden md:inline font-display text-2xl">AlkitabKu</li>
    <li>
        <a href="/"
            ><img
                class="invert h-10 transition-all"
                class:fillAmber={$page.url.pathname === "/"}
                src="/icons/solid/house.svg"
                alt="Home"
                width="30"
            /></a
        >
    </li>
    <li>
        <a href="/bacaan" sveltekit:prefetch
            ><img
                class="invert h-9 transition-all"
                class:fillAmber={$page.url.pathname.includes("/bacaan")}
                src="/icons/solid/book.svg"
                alt="Bacaan"
                width="30"
            /></a
        >
    </li>
    <li>
        <a href="/cari"
            ><img
                class="invert h-8 transition-all"
                class:fillAmber={$page.url.pathname === "/cari"}
                src="/icons/solid/magnifying-glass.svg"
                alt="Cari"
                width="30"
            /></a
        >
    </li>
    <li>
        <a href="/preferensi"
            ><img
                class="invert h-10 transition-all"
                class:fillAmber={$page.url.pathname === "/preferensi"}
                src="/icons/solid/gear.svg"
                alt="Preferensi"
                width="30"
            /></a
        >
    </li>
</nav>
<slot />
<footer class="max-w-[1280px] p-8 mx-auto my-16 font-roboto">
    <div class="lg:flex gap-[30px]">
        <div class="flex flex-col gap-5 max-w-[432px] items-start mb-8">
            <h2 class="font-display text-2xl">AlkitabKu</h2>
            <p class="leading-relaxed tracking-wide text-slate-600">
                Sebuah aplikasi yang membantu kamu untuk membaca dan meresapi
                firman-firman Tuhan untuk memeuhi kebutuhan rohani kamu.
                Aplikasi ini gratis dan tidak dipungut biaya apapun. Dibuat
                sepenuh hati untuk memulikan Tuhan.
            </p>
        </div>
        <div class="flex w-full">
            <div class="flex flex-col gap-5 w-full">
                <h2 tabIndex={0} class="font-patuaone text-[1.125rem]">
                    Sitemap
                </h2>
                <li class="list-none text-darklight">
                    <a href="/">Beranda</a>
                </li>
                <li class="list-none text-darklight">
                    <a href="/bacaan" sveltekit:prefetch>Bacaan</a>
                </li>
                <li class="list-none text-darklight">
                    <a href="/about">About</a>
                </li>
                <li class="list-none text-darklight">
                    <a href="/links">Links</a>
                </li>
                <li class="list-none text-darklight">
                    <a href="/#testimoni">Testimoni</a>
                </li>
                <li class="list-none text-darklight">
                    <a href="/#for">Fitur</a>
                </li>
            </div>
            <div class="flex flex-col gap-5 w-full">
                <h2
                    tabIndex={0}
                    aria-label="our partners"
                    class="font-patuaone text-[1.125rem]"
                >
                    Partner
                </h2>
                <li class="list-none text-darklight">
                    <a href="https://sabda.org">sabda.org</a>
                </li>
                <li class="list-none text-darklight">
                    <a href="api-alkitab.herokuapp.com">API-Alkitab</a>
                </li>
                <li class="list-none text-darklight">
                    <a href="https://github.com/erwindosianipar/api-alkitab"
                        >Erwindosianipar</a
                    >
                </li>
            </div>
            <div class="flex flex-col gap-5 w-full">
                <h2 class="font-patuaone text-[1.125rem]">Tetap Terhubung</h2>
                <p class="text-darklight leading-6 max-w-[240px]">
                    Lihat kami di sosial media berikut:
                </p>
                <div class="flex gap-[10px]">
                    <a href="/">
                        <div class="bg-primaryextralight p-[10px] rounded-full">
                            <img
                                src="/assets/svgs/mine/instagram.png"
                                alt="check our instagram"
                                width="24px"
                                height="24px"
                            />
                        </div>
                    </a>
                    <a href="/">
                        <div class="bg-primaryextralight p-[10px] rounded-full">
                            <img
                                src="/assets/svgs/mine/facebook.png"
                                alt="check our facebook"
                                width="24px"
                                height="24px"
                            />
                        </div>
                    </a>
                    <a href="/">
                        <div class="bg-primaryextralight p-[10px] rounded-full">
                            <img
                                src="/assets/svgs/mine/twitter.png"
                                alt="check our twitter"
                                width="24px"
                                height="24px"
                            />
                        </div>
                    </a>
                </div>
            </div>
        </div>
    </div>
</footer>

<style>
    li {
        list-style-type: none;
    }

    .fillAmber {
        filter: brightness(0) saturate(100%) invert(82%) sepia(98%)
            saturate(5311%) hue-rotate(327deg) brightness(94%) contrast(110%);
    }
</style>
