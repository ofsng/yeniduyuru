# Ömer Faruk Şengül - Duyuru Panosu

Bu proje, sosyal medya ve diğer platformlardaki içeriklere kolay erişim sağlamak için tasarlanmış bir duyuru panosu uygulamasıdır.

## Özellikler

- Modern ve koyu tema tasarımı
- Responsive arayüz
- Deep linking desteği (Uygulamalarda doğrudan açılma)
- Hashtag sistemi
- Tarih gösterimi

## Teknolojiler

- React
- TypeScript
- Tailwind CSS

## Kurulum

```bash
# Depoyu klonlayın
git clone https://github.com/ofsng/duyuru.git

# Proje dizinine gidin
cd duyuru

# Bağımlılıkları yükleyin
npm install

# Geliştirme sunucusunu başlatın
npm start
```

## Kullanım

Yeni duyuru eklemek için `src/App.tsx` dosyasındaki `announcements` dizisine yeni bir obje ekleyin:

```typescript
{
  title: "Başlık",
  description: "Açıklama",
  webLink: "Web bağlantısı",
  appLink: "Uygulama derin bağlantısı",
  platform: "linkedin", // veya "instagram", "youtube", "medium", "other"
  date: "Tarih",
  hashtags: ["etiket1", "etiket2"]
}
```

## Lisans

© 2025 Ömer Faruk Şengül – Tüm hakları saklıdır.
