# Osiyo Travertin — Qarz Daftari (Windows 10/11 uchun o'rnatuvchi)

## Bu versiya nima bilan farq qiladi

Avvalgi urinishlarda maqsad — juda eski Windows 7 kompyuterda ham ishlashi
edi, shu sababli Chromium (Electron) dan voz kechib, boshqa yechimlar
qidirilgan edi. Endi ilova **Windows 10/11**ga o'rnatilishi aniqlashgani
uchun, bunday cheklovlar endi kerak emas — Electron Windows 10/11'da
muammosiz ishlaydi.

Shuning uchun bu versiya eng "to'g'ri" va professional yo'ldan qurilgan:
**Electron** — mashhur, ishonchli desktop-ilova texnologiyasi (VS Code,
Slack, Discord kabi ko'plab dasturlar aynan shu texnologiyada qurilgan).
Natijada:

- Haqiqiy o'rnatuvchi (`Setup.exe`) — bosilganda ish stoliga va Start
  menyusiga yorliq qo'yadi, "Dasturlar va imkoniyatlar" orqali o'chirish
  (uninstall) imkoniyati bilan.
- Hech qanday tashqi dastur (Chrome va h.k.) talab qilinmaydi — hammasi
  ilova ichida.
- Ilovaning o'zi — bizning avval to'liq sinalgan va boyitilgan
  `index.html` (mijozlar, qarz/to'lov, mahsulotlar katalogi, Excel
  export/import, eslatma matni, chop etish/PDF, dark/light rejim va h.k.)
  — hech narsa qayta yozilmagan, faqat professional "o'ram" (Electron)
  ichiga joylashtirilgan.

## .exe qanday olinadi (GitHub Actions orqali)

1. Ushbu papkadagi barcha fayllarni GitHub repo'ga yuklang (`node_modules`
   va `dist` papkalari kerak emas — ular `.gitignore`da chiqarib
   tashlangan, ularsiz ham build ishlayveradi).
2. Repo sahifasida **Actions** bo'limiga kiring.
3. **"Build Windows installer (Electron)"** workflow'ini tanlang →
   **"Run workflow"** tugmasini bosing.
4. 3-5 daqiqa kuting.
5. **Releases** bo'limida "Qarz Daftari (Electron) v1.0" paydo bo'ladi —
   o'rnatuvchi `.exe` shu yerda (fayl hajmi ~90-100 MB atrofida
   bo'lishi mumkin, bu normal — Chromium ilova ichiga qadalgani uchun).

## O'rnatish

Yuklab olingan `.exe`ni ishga tushiring — oddiy o'rnatuvchi oynasi
chiqadi (o'rnatish papkasini tanlash imkoniyati bilan). O'rnatilgach, ish
stolida va Start menyusida "Osiyo Travertin - Qarz Daftari" yorlig'i
paydo bo'ladi.

## Ma'lumotlar qayerda saqlanadi

Ilova ichidagi barcha ma'lumotlar (mijozlar, tranzaksiyalar, mahsulotlar)
Electron'ning o'z profil papkasida (`localStorage`) saqlanadi — bu
kompyuterga, shu ilova o'rnatilgan joyga bog'liq, boshqa hech qanday
sozlash shart emas.

## Kodni yangilash

Kelajakda `index.html`ga o'zgartirish kiritilsa, shu faylni ushbu
papkadagi `index.html` bilan almashtirib qayta push qilish kifoya —
`main.js` yoki boshqa hech narsani o'zgartirish shart emas, chunki butun
ilova mantiqi shu bitta faylda.

## Fayllar tuzilishi

```
main.js        — Electron asosiy jarayoni (oyna ochish, ~30 qator)
index.html     — to'liq ilova (interfeys, barcha funksiyalar)
package.json   — build sozlamalari (electron-builder)
build/icon.ico — ilova ikonkasi
.github/workflows/build-windows.yml — avtomatik Windows build (GitHub Actions)
```
