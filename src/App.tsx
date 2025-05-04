import React from 'react';

interface Announcement {
  title: string;
  description: string;
  webLink: string;
  appLink: string;
  platform: 'linkedin' | 'instagram' | 'youtube' | 'medium' | 'other';
  date?: string;
  hashtags?: string[];
}

const announcements: Announcement[] = [
  {
    title: "Dijital Dönüşüm ve Yapay Zeka'nın Geleceği",
    description: "Hangi işi yapıyor olursanız olun, dijital dönüşüm süreci içerisindesiniz. İşinizi dijitalleştirmezseniz, çalışma şeklinizi değiştirmezseniz, ne yazık ki tarihin tozlu sayfalarında kaybolursunuz. Yapay zeka sayesinde dijital erişimin genişlemesi 2030'a kadar iş dünyasının %60'ını dönüştürecek...",
    webLink: "https://www.linkedin.com/posts/ofsng_yapayzeka-teknoloji-ai-activity-7323687237877944320-HxgB",
    appLink: "linkedin://post/7323687237877944320",
    platform: "linkedin",
    date: "14 Mart 2024",
    hashtags: ["yapayzeka", "teknoloji", "ai"]
  }
];

function getPlatformIcon(platform: string) {
  switch (platform) {
    case 'linkedin':
      return '💼';
    case 'instagram':
      return '📱';
    case 'youtube':
      return '🎥';
    case 'medium':
      return '📝';
    default:
      return '🔗';
  }
}

function App() {
  const handleAppLink = (announcement: Announcement) => {
    window.location.href = announcement.appLink;
    setTimeout(() => {
      window.location.href = announcement.webLink;
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-yellow-400 mb-2">Ömer Faruk Şengül</h1>
          <p className="text-xl text-gray-400">Duyuru Panosu</p>
        </div>

        {/* Announcements Grid */}
        <div className="space-y-6">
          {announcements.map((announcement, index) => (
            <div key={index} className="bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-yellow-400/20 transition-shadow border border-gray-700">
              <div className="flex items-start justify-between mb-4">
                <h2 className="text-xl font-semibold text-yellow-400">
                  {getPlatformIcon(announcement.platform)} {announcement.title}
                </h2>
                <span className="text-sm text-gray-500">{announcement.date}</span>
              </div>
              <p className="text-gray-300 mb-4 leading-relaxed">{announcement.description}</p>
              
              {/* Hashtags */}
              {announcement.hashtags && (
                <div className="flex flex-wrap gap-2 mb-4">
                  {announcement.hashtags.map((tag, i) => (
                    <span key={i} className="text-sm text-yellow-400/80 bg-yellow-400/10 px-3 py-1 rounded-full">
                      #{tag}
                    </span>
                  ))}
                </div>
              )}
              
              <div className="flex gap-3">
                <button
                  onClick={() => handleAppLink(announcement)}
                  className="flex-1 bg-yellow-400 text-gray-900 px-6 py-3 rounded-lg font-medium hover:bg-yellow-300 transition-colors"
                >
                  Uygulamada Aç
                </button>
                <a
                  href={announcement.webLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center bg-gray-700 text-gray-300 px-6 py-3 rounded-lg hover:bg-gray-600 transition-colors"
                >
                  Tarayıcıda Aç
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <footer className="mt-12 text-center text-gray-500">
          <p>© 2025 Ömer Faruk Şengül – Tüm hakları saklıdır.</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
