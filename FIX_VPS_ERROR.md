# Cara Memperbaiki Error di VPS

## Error yang Terjadi
```
TypeError: Cannot read properties of null (reading 'useContext')
```

## Penyebab
1. `LanguageContext` menggunakan `localStorage` yang tidak tersedia di server-side
2. Build script di `package.json` tidak sesuai dengan React Router v7

## Solusi

### Langkah 1: Pull Perubahan Terbaru dari GitHub

```bash
cd /var/www/sample-company-profile
git pull origin main
```

### Langkah 2: Install Dependencies (jika ada perubahan)

```bash
npm install
```

### Langkah 3: Rebuild Aplikasi

```bash
# Hapus build lama
rm -rf build

# Build ulang aplikasi
npm run build
```

**Catatan:** React Router v7 dengan `@react-router/dev` sudah menangani build server secara otomatis, jadi cukup jalankan `npm run build` saja.

### Langkah 4: Restart Aplikasi dengan PM2

```bash
pm2 restart sample-company-profile
```

Atau jika belum ada di PM2:

```bash
pm2 start npm --name "sample-company-profile" -- start
pm2 save
```

### Langkah 5: Cek Logs

```bash
pm2 logs sample-company-profile
```

## Perubahan yang Sudah Dilakukan

### 1. Perbaikan `LanguageContext.tsx`
- Menambahkan check `typeof window === "undefined"` untuk deteksi server-side
- Membuat helper functions yang aman untuk SSR
- Context sekarang selalu memiliki default value yang valid

### 2. Perbaikan `package.json`
- Menghapus build script yang tidak perlu (`build:client` dan `build:server`)
- Menggunakan build command default dari React Router v7: `vite build`

## Verifikasi

Setelah restart, cek apakah aplikasi berjalan:

```bash
# Cek status PM2
pm2 status

# Cek apakah port 3000 terbuka
curl http://localhost:3000

# Atau test dari browser
# Buka: http://YOUR_VPS_IP:3000
```

## Jika Masih Error

### 1. Cek Node.js Version
```bash
node --version
```
Pastikan menggunakan Node.js 18 atau lebih baru.

### 2. Clear Cache dan Rebuild
```bash
rm -rf node_modules package-lock.json build
npm install
npm run build
pm2 restart sample-company-profile
```

### 3. Cek Environment Variables
Pastikan tidak ada environment variables yang diperlukan yang belum di-set.

### 4. Cek Logs Detail
```bash
pm2 logs sample-company-profile --lines 100
```

## Catatan Penting

- **Jangan gunakan `localStorage` langsung di server-side**: Selalu check `typeof window !== "undefined"` sebelum menggunakan browser APIs
- **React Router v7**: Sudah menangani build server secara otomatis, tidak perlu build terpisah
- **SSR Safety**: Semua context dan hooks yang menggunakan browser APIs harus aman untuk SSR

