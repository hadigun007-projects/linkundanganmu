# LinkUndanganmu - Platform Undangan Pernikahan Digital

Repositori monorepo platform pembuatan undangan pernikahan digital berbasis web responsif, ceria, dan berorientasi konversi tinggi.

---

## Struktur Proyek

```
linkundanganmu/
├── home/                    # Frontend SaaS platform & landing page (Next.js 16 + Tailwind CSS)
├── templates/               # Koleksi template tema undangan digital (Mobile-first HTML/CSS/JS)
│   └── wedding-rustic/      # Tema Rustic Warm Gold (Arya & Sarah)
├── api/                     # Backend REST API service
└── README.md                # Dokumentasi utama proyek
```

---

## 1. Modul Home (`home/`)
Aplikasi landing page utama dengan fitur:
- Hero Section persuasif dengan mockup HP interaktif.
- Showcase tema undangan dengan filter kategori & preview live.
- Fitur unggulan, tabel paket harga, ribbon momen bahagia, testimoni, & FAQ.
- Nuansa hangat ceria dengan dekorasi botani cat air transparan.

**Menjalankan Frontend:**
```bash
npm run dev:home
# atau masuk ke folder home
cd home && npm run dev
```
Akses di browser: `http://localhost:3000`

---

## 2. Modul Templates (`templates/`)
Koleksi template undangan pernikahan mandiri (*standalone mobile-first*):
- `templates/wedding-rustic/`: Tema krem hangat, taupe, dan aksen emas dengan cover gatekeeper, background music, countdown timer, Google Maps, RSVP real-time, dan amplop digital.

**Membuka Template:**
Cukup buka file `templates/wedding-rustic/index.html` langsung di peramban web atau gunakan local server:
```bash
npx serve templates/wedding-rustic
```

---

## 3. Modul API (`api/`)
Layanan backend REST API yang menangani:
- `/health`: Health check server.
- `/api/v1/templates`: Metadata tema undangan.
- `/api/v1/invitations`: Data detail undangan, mempelai, dan acara.
- `/api/v1/rsvp`: Konfirmasi kehadiran tamu dan rekapitulasi statistik.
- `/api/v1/wishes`: Buku tamu dan kirim doa restu.

**Menjalankan Backend:**
```bash
# Install dependensi (pertama kali)
cd api && npm install

# Jalankan API server
npm run dev
# atau dari root
npm run dev:api
```
Server berjalan di: `http://localhost:5000`

---

## 4. Deployment Produksi (Docker & Docker Compose)

Proyek ini siap di-deploy ke server produksi menggunakan Docker Compose dengan Nginx reverse proxy terintegrasi.

**Jalankan Cepat:**
```bash
# 1. Buat file konfigurasi lingkungan
cp .env.example .env

# 2. Build dan jalankan semua kontainer di background
docker compose up -d --build

# 3. Cek status kontainer
docker compose ps
```

Panduan lengkap instalasi di VPS, konfigurasi domain, SSL Let's Encrypt, dan troubleshooting dapat dibaca di **[DEPLOYMENT.md](file:///Users/hadiyahku/code/invite/DEPLOYMENT.md)**.
