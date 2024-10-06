<main class="pt-16">
    <h1
        class="text-amber-800 font-display text-[2.4rem] tracking-widest uppercase leading-tight max-w-[687px] text-center mx-auto mb-16"
    >
        Pengaturan
    </h1>

    <main
        class="font-roboto text-slate-600 max-w-[1280px] mx-auto px-4 tracking-wide leading-relaxed"
    >
        <h2 class="text-xl font-bold">Pengaturan Dasar</h2>

        <label for="dark">Dark Mode</label>
        <input type="checkbox" name="dark" id="dark" />

        <h2 class="text-xl font-bold">Preferensi Baca (Readability)</h2>
        <div class="flex flex-col">
            <label for="fontsize">Ukuran Font (Font Size)</label>
            <input
                type="number"
                name="fontsize"
                id="fontsize"
                value="16"
                min="8"
                max="32"
            />

            <label for="lineheight">Jarak Per Baris (Line Height)</label>
            <input type="text" name="lineheight" id="lineheight" value="1.6" />

            <label for="spacing">Jarak Per Huruf (Spacing)</label>
            <input type="text" name="spacing" id="spacing" value="1" />

            <label for="fonttebal">Tebal Font</label>
            <input type="text" name="fonttebal" id="fonttebal" value="Normal" />
        </div>
    </main>
</main>
