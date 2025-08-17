import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';

const About = () => {
  const team = [
    {
      name: 'Dr. Budi Santoso',
      role: 'Founder & Fish Expert',
      image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg',
      description: 'Dengan pengalaman 15 tahun di bidang aquaculture, Dr. Budi adalah ahli breeding cupang terkemuka.',
      social: {
        facebook: '#',
        instagram: '#',
        linkedin: '#'
      }
    },
    {
      name: 'Sari Dewi',
      role: 'Head of Operations',
      image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg',
      description: 'Mengelola operasional harian dan memastikan kualitas produk serta layanan pelanggan terbaik.',
      social: {
        facebook: '#',
        instagram: '#',
        linkedin: '#'
      }
    },
    {
      name: 'Ahmad Rizki',
      role: 'Customer Relations Manager',
      image: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg',
      description: 'Membantu pelanggan dengan konsultasi perawatan cupang dan menangani customer service.',
      social: {
        facebook: '#',
        instagram: '#',
        linkedin: '#'
      }
    }
  ];

  const values = [
    {
      icon: 'ri-heart-line',
      title: 'Passion for Betta',
      description: 'Kecintaan mendalam terhadap ikan cupang mendorong kami memberikan yang terbaik',
      color: 'red'
    },
    {
      icon: 'ri-shield-check-line',
      title: 'Quality Assurance',
      description: 'Setiap cupang melalui seleksi ketat untuk memastikan kualitas dan kesehatan terbaik',
      color: 'blue'
    },
    {
      icon: 'ri-customer-service-2-line',
      title: 'Customer First',
      description: 'Kepuasan pelanggan adalah prioritas utama dalam setiap transaksi dan layanan',
      color: 'green'
    },
    {
      icon: 'ri-leaf-line',
      title: 'Sustainable Practice',
      description: 'Menjalankan praktik breeding yang bertanggung jawab dan ramah lingkungan',
      color: 'emerald'
    }
  ];

  const milestones = [
    {
      year: '2019',
      title: 'Berdiri',
      description: 'BettaKing didirikan dengan visi menjadi toko cupang terpercaya di Indonesia'
    },
    {
      year: '2020',
      title: 'Ekspansi Online',
      description: 'Meluncurkan platform online dan sistem pengiriman ikan hidup yang aman'
    },
    {
      year: '2021',
      title: '1000+ Pelanggan',
      description: 'Mencapai milestone 1000 pelanggan puas dengan tingkat kepuasan 98%'
    },
    {
      year: '2022',
      title: 'Breeding Program',
      description: 'Memulai program breeding sendiri untuk menghasilkan cupang berkualitas premium'
    },
    {
      year: '2023',
      title: 'National Recognition',
      description: 'Meraih penghargaan sebagai Best Betta Fish Store di Indonesia'
    },
    {
      year: '2024',
      title: 'Innovation Leader',
      description: 'Meluncurkan layanan konsultasi online dan program edukasi untuk aquarist'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar/>
      <ScrollToTop/>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-teal-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Tentang BettaKing
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
              Membangun komunitas aquarist Indonesia dengan menyediakan ikan cupang berkualitas tinggi dan edukasi terbaik
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Cerita Kami
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  BettaKing lahir dari kecintaan mendalam terhadap ikan cupang dan keinginan untuk berbagi keindahan serta keunikan ikan ini dengan seluruh Indonesia. Dimulai pada tahun 2019, kami memulai perjalanan ini dari garasi kecil dengan kolam-kolam sederhana dan mimpi besar.
                </p>
                <p>
                  Dengan latar belakang pendidikan aquaculture dan pengalaman bertahun-tahun dalam breeding, kami berkomitmen untuk menghadirkan cupang-cupang berkualitas tinggi yang tidak hanya indah dipandang mata, tetapi juga sehat dan berkarakter kuat.
                </p>
                <p>
                  Hari ini, BettaKing telah melayani ribuan aquarist di seluruh Indonesia, dari pemula hingga professional breeder. Kami bangga menjadi bagian dari perjalanan mereka dalam dunia yang menakjubkan ini.
                </p>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/1011302/pexels-photo-1011302.jpeg" 
                alt="Betta fish breeding facility"
                className="w-full h-80 object-cover rounded-xl shadow-lg"
              />
              <div className="absolute -bottom-6 -left-6 bg-blue-600 text-white p-6 rounded-lg shadow-xl">
                <div className="text-center">
                  <div className="text-3xl font-bold">5+</div>
                  <div className="text-blue-100">Tahun Pengalaman</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nilai-nilai Kami
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Prinsip-prinsip yang memandu setiap langkah perjalanan BettaKing
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow text-center">
                <div className={`bg-${value.color}-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center`}>
                  <i className={`${value.icon} text-2xl text-${value.color}-600`}></i>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Tim Kami
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Para ahli yang berdedikasi untuk memberikan layanan dan produk terbaik
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-blue-600 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">{member.description}</p>
                  
                  <div className="flex space-x-3">
                    <a 
                      href={member.social.facebook}
                      className="text-gray-400 hover:text-blue-600 transition-colors"
                    >
                      <i className="ri-facebook-fill text-lg"></i>
                    </a>
                    <a 
                      href={member.social.instagram}
                      className="text-gray-400 hover:text-pink-600 transition-colors"
                    >
                      <i className="ri-instagram-line text-lg"></i>
                    </a>
                    <a 
                      href={member.social.linkedin}
                      className="text-gray-400 hover:text-blue-700 transition-colors"
                    >
                      <i className="ri-linkedin-fill text-lg"></i>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Perjalanan Kami
            </h2>
            <p className="text-xl text-gray-600">
              Milestone penting dalam perkembangan BettaKing
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-blue-200"></div>

            {/* Timeline Items */}
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  {/* Timeline Dot */}
                  <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-md z-10"></div>
                  
                  {/* Content */}
                  <div className={`ml-16 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                    <div className="bg-white p-6 rounded-lg shadow-md">
                      <div className="flex items-center mb-2">
                        <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-bold">
                          {milestone.year}
                        </span>
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{milestone.title}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">{milestone.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '5000+', label: 'Cupang Terjual', icon: 'ri-fish-line' },
              { number: '1500+', label: 'Pelanggan Puas', icon: 'ri-user-heart-line' },
              { number: '50+', label: 'Varietas Cupang', icon: 'ri-palette-line' },
              { number: '99%', label: 'Tingkat Kepuasan', icon: 'ri-star-line' }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <i className={`${stat.icon} text-2xl text-blue-600`}></i>
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Siap Bergabung dengan Keluarga BettaKing?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Mulai perjalanan Anda dalam dunia cupang bersama kami dan rasakan perbedaannya
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/catalog"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors inline-flex items-center justify-center"
            >
              <i className="ri-shopping-bag-line mr-2"></i>
              Jelajahi Produk
            </a>
            <a 
              href="/contact"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors inline-flex items-center justify-center"
            >
              <i className="ri-customer-service-line mr-2"></i>
              Hubungi Kami
            </a>
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  );
};

export default About;