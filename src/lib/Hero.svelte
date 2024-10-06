<script>
    let quotes = [
        "Kerohanian yang hidup adalah upaya mencari, menemukan, dan hidup akrab dengan Allah.",
        "Ada kalanya Tuhan menenangkan badai, ada kalanya Dia membiarkan badai mengamuk dan Dia pun menenangkan Anda.",
        "Allah dapat memberikan limpahan berkat di tengah ancaman badai  kemalangan.",

        "Allah tidak menjanjikan perjalanan yang tenang, tetapi pendaratan yang aman.",

        "Anda akan kesepian jika membangun tembok, bukan jembatan.",

        "Anda dapat meraih jauh lebih banyak saat satu jam bersama Tuhan daripada seumur hidup tanpa Dia.",

        "Anda tidak akan mencapai garis finis bila tidak meninggalkan garis start.",
        "Belajar untuk mengalah adalah langkah pertama untuk menjadi pemenang.",

        "Doa adalah alat tak terlihat yang berguna bagi dunia yang terlihat.",

        "Harapkanlah hal-hal yang besar dari Tuhan. Usahakanlah hal-hal yang besar bagi Tuhan.",

        "Jangan minta kepada Tuhan apa yang menurut Anda baik, tetapi mintalah kepada-Nya apa yang menurut Dia baik bagi Anda.",

        "Jika Anda ingin orang lain tahu apa yang diperbuat Yesus baginya, beritahulah mereka apa yang telah diperbuat-Nya bagi Anda.",

        "Kedamaian bukanlah ketidakhadiran masalah. Kedamaian adalah kehadiran Allah.",

        "Kesempatan terbaik adalah melakukan hal yang baik untuk orang lain.",
        "Kewajiban kita adalah melakukan hal yang benar. Selebihnya ada di tangan Tuhan.",

        "Pencobaan membuat sebagian orang jatuh, tetapi sebagian orang lagi menggunakannya sebagai tangga menuju keberhasilan.",

        "Perilaku baik menghasilkan senyuman, senyuman menghasilkan sahabat, dan sahabat lebih baik dari kekayaan.",

        "Resep untuk hidup bahagia: tambahkan Yesus di dalamnya.",

        "Satu-satunya persiapan terbaik untuk hari esok adalah menggunakan hari ini sebaik-baiknya.",

        "Segala kebaikan akan datang kepada orang yang tidak duduk diam saat menunggu.",

        "Sebab jika kita hidup, kita hidup untuk Tuhan, dan jika kita mati, kita mati untuk Tuhan. Jadi baik hidup atau mati kita adalah milik Tuhan. (Roma 14:18)",
    ]
</script>

<header class="hero__img">
    <div
        class="font-roboto text-white max-w-[1280px] mx-auto grid place-content-center h-[100vh] place-items-center px-4 tracking-wide leading-relaxed"
    >
        <h1 class="text-6xl font-display mb-4 tracking-wider">AlkitabKu</h1>
        <h2 class="mb-8 text-xl">Baca alkitab dimanapun, kapanpun</h2>
        <p class="text-slate-200 mb-12 max-w-[576px] text-center">
            Membaca komik itu tidak perlu, ibadah nomor satu. Gunakan aplikasi
            Alkitabku! Lebih murah, mudah dan hemat waktu.
        </p>
        <div class="flex gap-5 mb-16">
            <a
                href="./bacaan"
                sveltekit:prefetch
                class="py-2 px-4 bg-amber-400 text-slate-900 rounded-lg translate-y-0 hover:-translate-y-1 transition-all"
            >
                Mulai membaca
            </a>
            <a
                href="#for"
                class="py-2 px-4 border-2 border-amber-400 text-amber-400 rounded-lg translate-y-0 hover:-translate-y-1 transition-all"
            >
                Pelajari lebih
            </a>
        </div>
        <p
            class="font-display text-sm text-center text-slate-300 leading-relaxed max-w-[576px]"
        >
            {`"${quotes[Math.round(Math.random() * quotes.length)]}"`}
        </p>
    </div>
</header>

<style>
    .hero__img {
        background: -webkit-linear-gradient(
                rgba(0, 0, 0, 0.4),
                rgba(0, 0, 0, 0.4)
            ),
            url("https://source.unsplash.com/2000x800?bible");
        background-repeat: no-repeat;
        object-fit: cover;
    }
</style>
