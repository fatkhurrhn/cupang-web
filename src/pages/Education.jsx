import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';

const Education = () => {
  const careGuides = [
    {
      id: 1,
      title: 'Setup Aquarium Ideal',
      description: 'Panduan lengkap menyiapkan aquarium yang sempurna untuk cupang',
      icon: 'ri-home-4-line',
      color: 'blue',
      topics: [
        'Ukuran aquarium minimal',
        'Sistem filtrasi yang tepat',
        'Pengaturan suhu ideal',
        'Dekorasi yang aman'
      ]
    },
    {
      id: 2,
      title: 'Nutrisi & Feeding',
      description: 'Tips pemberian pakan yang tepat untuk kesehatan optimal cupang',
      icon: 'ri-restaurant-line',
      color: 'green',
      topics: [
        'Jenis pakan terbaik',
        'Frekuensi pemberian makan',
        'Porsi yang tepat',
        'Variasi menu makanan'
      ]
    },
    {
      id: 3,
      title: 'Kualitas Air',
      description: 'Memahami dan menjaga parameter air untuk kehidupan cupang',
      icon: 'ri-drop-line',
      color: 'cyan',
      topics: [
        'Parameter air ideal',
        'Testing kualitas air',
        'Water change routine',
        'Mengatasi masalah air'
      ]
    },
    {
      id: 4,
      title: 'Kesehatan & Penyakit',
      description: 'Pencegahan dan penanganan masalah kesehatan pada cupang',
      icon: 'ri-heart-pulse-line',
      color: 'red',
      topics: [
        'Tanda-tanda cupang sehat',
        'Penyakit umum cupang',
        'Pencegahan penyakit',
        'Pengobatan dasar'
      ]
    },
    {
      id: 5,
      title: 'Breeding Basics',
      description: 'Panduan dasar breeding cupang untuk pemula',
      icon: 'ri-parent-line',
      color: 'purple',
      topics: [
        'Memilih indukan berkualitas',
        'Proses spawning',
        'Perawatan telur dan burayak',
        'Pemisahan dan seleksi'
      ]
    },
    {
      id: 6,
      title: 'Behavior & Environment',
      description: 'Memahami perilaku dan kebutuhan lingkungan cupang',
      icon: 'ri-emotion-line',
      color: 'yellow',
      topics: [
        'Perilaku natural cupang',
        'Stres dan cara mengatasinya',
        'Enrichment lingkungan',
        'Interaksi dengan cupang lain'
      ]
    }
  ];

  const bettaTypes = [
    {
      name: 'Halfmoon',
      description: 'Cupang dengan ekor yang dapat membentuk setengah lingkaran sempurna (180°)',
      characteristics: ['Ekor lebar dan simetris', 'Sirip anal dan dorsal proporsional', 'Gerakan elegan'],
      careLevel: 'Intermediate',
      image: 'https://images.pexels.com/photos/1011302/pexels-photo-1011302.jpeg'
    },
    {
      name: 'Crown Tail',
      description: 'Memiliki jari-jari sirip yang menonjol, menciptakan efek seperti mahkota',
      characteristics: ['Sirip berbentuk mahkota', 'Jari-jari sirip terpisah', 'Mudah dirawat'],
      careLevel: 'Beginner',
      image: 'https://images.pexels.com/photos/3997988/pexels-photo-3997988.jpeg'
    },
    {
      name: 'Plakat',
      description: 'Cupang dengan sirip pendek dan tubuh atletis, lebih aktif berenang',
      characteristics: ['Sirip pendek dan kokoh', 'Tubuh atletis', 'Sangat aktif'],
      careLevel: 'Beginner',
      image: 'https://images.pexels.com/photos/1083903/pexels-photo-1083903.jpeg'
    },
    {
      name: 'Dumbo Ear',
      description: 'Memiliki sirip dada (pectoral) yang besar seperti telinga gajah',
      characteristics: ['Sirip dada besar', 'Gerakan unik', 'Penampilan eksotis'],
      careLevel: 'Intermediate',
      image: 'https://images.pexels.com/photos/3997991/pexels-photo-3997991.jpeg'
    }
  ];

  const quickTips = [
    {
      tip: 'Ganti 25-30% air aquarium setiap minggu',
      icon: 'ri-refresh-line'
    },
    {
      tip: 'Suhu ideal untuk cupang adalah 26-28°C',
      icon: 'ri-temp-hot-line'
    },
    {
      tip: 'Beri makan 2-3 kali sehari dengan porsi kecil',
      icon: 'ri-time-line'
    },
    {
      tip: 'pH air ideal berkisar antara 6.5-7.5',
      icon: 'ri-flask-line'
    },
    {
      tip: 'Cupang membutuhkan akses ke permukaan air',
      icon: 'ri-arrow-up-line'
    },
    {
      tip: 'Hindari arus air yang terlalu kencang',
      icon: 'ri-water-flash-line'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar/>
      <ScrollToTop/>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Panduan Lengkap Cupang
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
              Pelajari semua yang perlu Anda ketahui tentang perawatan, breeding, dan pemeliharaan ikan cupang
            </p>
          </div>
        </div>
      </section>

      {/* Quick Tips */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Tips Cepat Perawatan
            </h2>
            <p className="text-xl text-gray-600">
              Tips penting yang harus diingat setiap pemilik cupang
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {quickTips.map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 rounded-full p-3 flex-shrink-0">
                    <i className={`${item.icon} text-2xl text-blue-600`}></i>
                  </div>
                  <p className="text-gray-700 font-medium">{item.tip}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Care Guides */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Panduan Perawatan Lengkap
            </h2>
            <p className="text-xl text-gray-600">
              Pelajari setiap aspek penting dalam pemeliharaan cupang
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {careGuides.map((guide) => (
              <div key={guide.id} className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className={`bg-${guide.color}-500 p-6 text-white`}>
                  <i className={`${guide.icon} text-4xl mb-4`}></i>
                  <h3 className="text-xl font-bold mb-2">{guide.title}</h3>
                  <p className={`text-${guide.color}-100`}>{guide.description}</p>
                </div>
                <div className="p-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Yang akan Anda pelajari:</h4>
                  <ul className="space-y-2">
                    {guide.topics.map((topic, index) => (
                      <li key={index} className="flex items-center text-gray-600">
                        <i className="ri-check-line text-green-500 mr-2"></i>
                        {topic}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Betta Types */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Mengenal Jenis-jenis Cupang
            </h2>
            <p className="text-xl text-gray-600">
              Karakteristik dan keunikan setiap jenis cupang hias
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {bettaTypes.map((type, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow">
                <div className="md:flex">
                  <div className="md:w-1/3">
                    <img 
                      src={type.image} 
                      alt={type.name}
                      className="w-full h-48 md:h-full object-cover"
                    />
                  </div>
                  <div className="md:w-2/3 p-6">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-2xl font-bold text-gray-900">{type.name}</h3>
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                        type.careLevel === 'Beginner' 
                          ? 'bg-green-100 text-green-600' 
                          : 'bg-yellow-100 text-yellow-600'
                      }`}>
                        {type.careLevel}
                      </span>
                    </div>
                    <p className="text-gray-600 mb-4">{type.description}</p>
                    <h4 className="font-semibold text-gray-900 mb-2">Karakteristik:</h4>
                    <ul className="space-y-1">
                      {type.characteristics.map((char, charIndex) => (
                        <li key={charIndex} className="flex items-center text-gray-600">
                          <i className="ri-star-line text-blue-500 mr-2"></i>
                          {char}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Jawaban untuk pertanyaan yang sering ditanyakan
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                question: 'Berapa ukuran minimal aquarium untuk cupang?',
                answer: 'Minimal 10 liter untuk 1 ekor cupang jantan. Semakin besar aquarium, semakin stabil kondisi airnya dan semakin baik untuk kesehatan cupang.'
              },
              {
                question: 'Bisakah cupang dicampur dengan ikan lain?',
                answer: 'Cupang jantan sangat teritorial dan agresif. Sebaiknya dipelihara sendiri atau dengan ikan yang damai dan tidak memiliki sirip panjang seperti neon tetra atau corydoras.'
              },
              {
                question: 'Seberapa sering mengganti air aquarium?',
                answer: 'Ganti 25-30% air setiap minggu. Jika aquarium kecil (kurang dari 20L), bisa 2 kali seminggu. Gunakan water conditioner untuk menghilangkan klorin.'
              },
              {
                question: 'Apa tanda-tanda cupang yang stres?',
                answer: 'Warna pudar, nafsu makan menurun, bersembunyi terus, sirip mengatup, atau bergerak tidak normal. Periksa kualitas air dan lingkungan aquarium.'
              },
              {
                question: 'Bagaimana cara memilih cupang yang sehat?',
                answer: 'Pilih cupang yang aktif, warna cerah, sirip tidak rusak, mata jernih, tidak ada bercak putih di tubuh, dan responsif terhadap gerakan.'
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <details className="group">
                  <summary className="p-6 cursor-pointer flex items-center justify-between">
                    <h3 className="font-semibold text-gray-900 pr-4">{faq.question}</h3>
                    <i className="ri-arrow-down-s-line text-gray-500 group-open:rotate-180 transition-transform"></i>
                  </summary>
                  <div className="px-6 pb-6">
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                </details>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Siap Memulai Journey Cupang Anda?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Jelajahi koleksi cupang berkualitas tinggi kami dan mulai petualangan aquascaping Anda
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/catalog"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
            >
              <i className="ri-shopping-bag-line mr-2"></i>
              Lihat Koleksi Cupang
            </a>
            <a 
              href="/blog"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              <i className="ri-article-line mr-2"></i>
              Baca Artikel Blog
            </a>
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  );
};

export default Education;