# Undangan Pernikahan Digital (Mobile-First)

Website landing page undangan pernikahan digital responsif berbasis **mobile-first** dengan desain mewah (*luxury aesthetic*), palet warna **krem hangat, warm taupe, dan aksen emas**, animasi halus AOS, serta fitur interaktif lengkap.

---

## Fitur Utama

1. **Cover / Hero Gatekeeper**:
   - Membuka dengan nama tamu yang dipersonalisasi via URL parameter.
   - Efek overlay foto estetik dengan partikel kelopak bunga emas gugur.
   - Tombol **"Buka Undangan"** yang memicu musik latar otomatis dan scroll halus ke konten utama.
2. **Kutipan Suci**:
   - Kaligrafi dan terjemahan QS. Ar-Rum: 21 dengan pembatas ornamen floral beraksen emas.
3. **Profil Mempelai**:
   - Foto berbingkai lengkung (*arch frame*) kedua mempelai.
   - Nama lengkap & gelar, orang tua dari kedua pihak, serta tautan Instagram aktif.
   - Ornamen monogram "&" bernuansa emas.
4. **Countdown Timer & Simpan ke Kalender**:
   - Hitung mundur live (Hari, Jam, Menit, Detik) menuju waktu akad nikah.
   - Tombol satu klik **"Simpan ke Google Calendar"**.
5. **Detail Acara (2 Kartu Terpisah)**:
   - Kartu 1: Akad Nikah (tanggal, jam, gedung, alamat, tombol Google Maps).
   - Kartu 2: Resepsi Pernikahan (tanggal, jam, gedung, alamat, tombol Google Maps).
6. **RSVP & Buku Tamu (Interaktif)**:
   - Form kehadiran (Nama, Kehadiran, Jumlah Tamu, Pesan Doa Restu).
   - Tersimpan langsung di browser via `localStorage` dan langsung tampil di daftar ucapan secara real-time.
   - Counter jumlah tamu yang menyatakan hadir.
7. **Amplop Digital (Wedding Gift)**:
   - Kartu Debit Bank BCA & Platinum Card Bank Mandiri dengan nomor rekening.
   - Tombol **"Salin Nomor"** dengan konfirmasi toast feedback langsung.
   - Alamat pengiriman kado fisik lengkap dengan tombol salin alamat.
8. **Floating Audio & Navigation Dock**:
   - Piringan hitam berputar (*vinyl disc*) dengan equalizer bar dan tombol toggle putar/jeda.
   - Navigasi cepat antar bagian (*Cover, Mempelai, Acara, RSVP, Hadiah*).

---

## Cara Menjalankan & Pratinjau

### 1. Langsung Lewat Browser
Cukup klik ganda file [`index.html`](file:///Users/hadiyahku/code/invite/index.html) untuk membukanya langsung di Google Chrome, Safari, Firefox, atau Microsoft Edge.

### 2. Melalui Local Server (Opsional)
Jika ingin menjalankan dengan web server lokal:
```bash
# Menggunakan Python 3
python3 -m http.server 8000

# Atau menggunakan Node npx serve
npx serve .
```
Lalu buka `http://localhost:8000` di peramban Anda.

---

## Personalisasi Nama Tamu (URL Parameter)

Untuk membuat link undangan khusus bagi tamu undangan tertentu, tambahkan parameter `?to=` di akhir URL:
```
http://localhost:8000/?to=Bapak+Ahmad+Fauzi
http://localhost:8000/?to=Keluarga+Besar+Hendra
```
Halaman cover akan otomatis menampilkan *"Kepada Yth. Bapak/Ibu/Saudara/i: [Nama Tamu]"* dan mengisi formulir RSVP secara otomatis.

---

## Panduan Kustomisasi

- **Tanggal Pernikahan**: Ubah variabel `WEDDING_DATE` pada baris 7 di [`js/app.js`](file:///Users/hadiyahku/code/invite/js/app.js).
- **Nomor Rekening Bank**: Ubah nomor rekening dan nama pada bagian `#hadiah` di [`index.html`](file:///Users/hadiyahku/code/invite/index.html).
- **Foto Mempelai & Galeri**: Ganti link gambar `src="..."` di [`index.html`](file:///Users/hadiyahku/code/invite/index.html) dengan foto mempelai asli.
- **Musik Latar**: Ganti `src="..."` pada elemen `<audio id="bg-music">` di [`index.html`](file:///Users/hadiyahku/code/invite/index.html) dengan file audio MP3 pilihan Anda.
