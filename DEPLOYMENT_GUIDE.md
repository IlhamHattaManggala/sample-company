# Panduan Deploy ke VPS Menggunakan GitHub

## Daftar Isi
1. [Prerequisites](#prerequisites)
2. [Persiapan GitHub Repository](#persiapan-github-repository)
3. [Setup VPS](#setup-vps)
4. [Instalasi Dependencies di VPS](#instalasi-dependencies-di-vps)
5. [Setup Aplikasi di VPS](#setup-aplikasi-di-vps)
6. [Setup Process Manager (PM2)](#setup-process-manager-pm2)
7. [Setup Nginx sebagai Reverse Proxy](#setup-nginx-sebagai-reverse-proxy)
8. [Setup SSL dengan Let's Encrypt](#setup-ssl-dengan-lets-encrypt)
9. [Deployment Otomatis dengan GitHub Actions](#deployment-otomatis-dengan-github-actions)
10. [Deployment Manual](#deployment-manual)

---

## Prerequisites

- VPS dengan OS Ubuntu/Debian (minimal 1GB RAM)
- Akses root atau user dengan sudo privileges
- Domain name yang sudah diarahkan ke IP VPS
- GitHub account dan repository yang sudah dibuat
- SSH access ke VPS

---

## Persiapan GitHub Repository

1. **Buat repository di GitHub** (jika belum ada)
   - Login ke GitHub
   - Klik "New repository"
   - Beri nama repository
   - Set sebagai Private atau Public sesuai kebutuhan

2. **Push code ke GitHub** (jika belum)
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/USERNAME/REPO_NAME.git
   git push -u origin main
   ```

3. **Buat file `.env.example`** untuk dokumentasi environment variables (jika ada)

---

## Setup VPS

### 1. Login ke VPS
```bash
ssh root@YOUR_VPS_IP
# atau
ssh username@YOUR_VPS_IP
```

### 2. Update sistem
```bash
sudo apt update
sudo apt upgrade -y
```

### 3. Install Node.js (versi 18 atau lebih baru)
```bash
# Install Node.js menggunakan NodeSource
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt-get install -y nodejs

# Verifikasi instalasi
node --version
npm --version
```

### 4. Install Git
```bash
sudo apt install git -y
```

### 5. Install Nginx
```bash
sudo apt install nginx -y
sudo systemctl start nginx
sudo systemctl enable nginx
```

### 6. Install PM2 (Process Manager)
```bash
sudo npm install -g pm2
```

---

## Instalasi Dependencies di VPS

### 1. Clone repository ke VPS
```bash
# Buat direktori untuk aplikasi
sudo mkdir -p /var/www
cd /var/www

# Clone repository
sudo git clone https://github.com/USERNAME/REPO_NAME.git sample-company-profile
cd sample-company-profile

# Set ownership (ganti 'username' dengan user VPS Anda)
sudo chown -R $USER:$USER /var/www/sample-company-profile
```

### 2. Install dependencies
```bash
cd /var/www/sample-company-profile
npm install
```

---

## Setup Aplikasi di VPS

### 1. Build aplikasi
```bash
npm run build
```

### 2. Test build lokal (opsional)
```bash
npm run preview
```

---

## Setup Process Manager (PM2)

### 1. Buat file ecosystem untuk PM2
Buat file `ecosystem.config.js` di root project:

```javascript
module.exports = {
  apps: [{
    name: 'sample-company-profile',
    script: './build/server/index.js',
    instances: 1,
    exec_mode: 'fork',
    env: {
      NODE_ENV: 'production',
      PORT: 3000
    },
    error_file: './logs/pm2-error.log',
    out_file: './logs/pm2-out.log',
    log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
    merge_logs: true,
    autorestart: true,
    watch: false,
    max_memory_restart: '1G'
  }]
}
```

### 2. Buat direktori logs
```bash
mkdir -p logs
```

### 3. Start aplikasi dengan PM2
```bash
pm2 start ecosystem.config.js
pm2 save
pm2 startup
```

### 4. Perintah PM2 yang berguna
```bash
# Lihat status aplikasi
pm2 status

# Lihat logs
pm2 logs sample-company-profile

# Restart aplikasi
pm2 restart sample-company-profile

# Stop aplikasi
pm2 stop sample-company-profile

# Hapus dari PM2
pm2 delete sample-company-profile
```

---

## Setup Nginx sebagai Reverse Proxy

### 1. Buat konfigurasi Nginx
```bash
sudo nano /etc/nginx/sites-available/sample-company-profile
```

### 2. Isi dengan konfigurasi berikut:
```nginx
server {
    listen 80;
    server_name yourdomain.com www.yourdomain.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }
}
```

**Catatan:** Ganti `yourdomain.com` dengan domain Anda.

### 3. Aktifkan konfigurasi
```bash
sudo ln -s /etc/nginx/sites-available/sample-company-profile /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx
```

---

## Setup SSL dengan Let's Encrypt

### 1. Install Certbot
```bash
sudo apt install certbot python3-certbot-nginx -y
```

### 2. Generate SSL Certificate
```bash
sudo certbot --nginx -d yourdomain.com -d www.yourdomain.com
```

**Catatan:** Ganti `yourdomain.com` dengan domain Anda.

### 3. Auto-renewal (sudah otomatis, tapi bisa test)
```bash
sudo certbot renew --dry-run
```

---

## Deployment Otomatis dengan GitHub Actions

### 1. Buat file GitHub Actions workflow
Buat direktori dan file berikut di repository:
`.github/workflows/deploy.yml`

```yaml
name: Deploy to VPS

on:
  push:
    branches:
      - main

jobs:
  deploy:
    runs-on: ubuntu-latest
    
    steps:
    - name: Checkout code
      uses: actions/checkout@v3
      
    - name: Deploy to VPS
      uses: appleboy/ssh-action@master
      with:
        host: ${{ secrets.VPS_HOST }}
        username: ${{ secrets.VPS_USERNAME }}
        key: ${{ secrets.VPS_SSH_KEY }}
        script: |
          cd /var/www/sample-company-profile
          git pull origin main
          npm install
          npm run build
          pm2 restart sample-company-profile
```

### 2. Setup GitHub Secrets
Di repository GitHub Anda:
1. Buka **Settings** > **Secrets and variables** > **Actions**
2. Klik **New repository secret**
3. Tambahkan secrets berikut:
   - `VPS_HOST`: IP address VPS Anda
   - `VPS_USERNAME`: Username untuk SSH (biasanya `root` atau username VPS)
   - `VPS_SSH_KEY`: Private SSH key untuk akses VPS

### 3. Generate SSH Key untuk GitHub Actions
Di VPS, jalankan:
```bash
ssh-keygen -t rsa -b 4096 -C "github-actions" -f ~/.ssh/github_actions
```

Kemudian tambahkan public key ke authorized_keys:
```bash
cat ~/.ssh/github_actions.pub >> ~/.ssh/authorized_keys
```

Copy private key untuk di-set sebagai secret di GitHub:
```bash
cat ~/.ssh/github_actions
```

**PENTING:** Jangan share private key ini ke publik!

---

## Deployment Manual

Jika tidak menggunakan GitHub Actions, ikuti langkah berikut setiap kali ada update:

### 1. SSH ke VPS
```bash
ssh username@YOUR_VPS_IP
```

### 2. Masuk ke direktori aplikasi
```bash
cd /var/www/sample-company-profile
```

### 3. Pull perubahan terbaru
```bash
git pull origin main
```

### 4. Install dependencies (jika ada perubahan)
```bash
npm install
```

### 5. Build aplikasi
```bash
npm run build
```

### 6. Restart aplikasi
```bash
pm2 restart sample-company-profile
```

### 7. Cek status
```bash
pm2 status
pm2 logs sample-company-profile --lines 50
```

---

## Troubleshooting

### Aplikasi tidak bisa diakses
1. Cek apakah PM2 berjalan:
   ```bash
   pm2 status
   ```

2. Cek logs PM2:
   ```bash
   pm2 logs sample-company-profile
   ```

3. Cek apakah port 3000 terbuka:
   ```bash
   sudo netstat -tlnp | grep 3000
   ```

4. Cek konfigurasi Nginx:
   ```bash
   sudo nginx -t
   sudo systemctl status nginx
   ```

### Error saat build
1. Pastikan Node.js versi sesuai (minimal 18)
2. Hapus node_modules dan install ulang:
   ```bash
   rm -rf node_modules package-lock.json
   npm install
   ```

### Port sudah digunakan
1. Cek proses yang menggunakan port:
   ```bash
   sudo lsof -i :3000
   ```
2. Kill proses jika perlu atau ubah port di ecosystem.config.js

---

## Tips Keamanan

1. **Firewall Setup:**
   ```bash
   sudo ufw allow 22/tcp
   sudo ufw allow 80/tcp
   sudo ufw allow 443/tcp
   sudo ufw enable
   ```

2. **Update secara berkala:**
   ```bash
   sudo apt update && sudo apt upgrade -y
   ```

3. **Backup reguler:**
   - Backup database (jika ada)
   - Backup file konfigurasi
   - Backup source code

4. **Monitor resources:**
   ```bash
   pm2 monit
   ```

---

## Catatan Penting

- Pastikan domain sudah diarahkan ke IP VPS sebelum setup SSL
- Simpan semua credentials dengan aman
- Lakukan backup sebelum melakukan perubahan besar
- Monitor logs secara berkala untuk mendeteksi error
- Update dependencies secara berkala untuk keamanan

---

## Kontak & Support

Jika mengalami masalah, cek:
- Logs PM2: `pm2 logs`
- Logs Nginx: `sudo tail -f /var/log/nginx/error.log`
- System logs: `sudo journalctl -xe`

