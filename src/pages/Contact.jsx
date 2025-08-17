import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 2000));

      // Generate WhatsApp message
      const message = `*PESAN BARU DARI WEBSITE*\n\nNama: ${formData.name}\nEmail: ${formData.email}\nTelepon: ${formData.phone}\nSubjek: ${formData.subject}\n\nPesan:\n${formData.message}`;
      const whatsappUrl = `https://wa.me/6281234567890?text=${encodeURIComponent(message)}`;
      
      // Open WhatsApp
      window.open(whatsappUrl, '_blank');

      setSubmitStatus('success');
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: 'ri-whatsapp-line',
      title: 'WhatsApp',
      details: '+62 812-3456-7890',
      description: 'Hubungi kami untuk konsultasi langsung',
      color: 'green',
      action: () => window.open('https://wa.me/6281234567890', '_blank')
    },
    {
      icon: 'ri-mail-line',
      title: 'Email',
      details: 'info@bettaking.com',
      description: 'Kirim email untuk pertanyaan detail',
      color: 'blue',
      action: () => window.open('mailto:info@bettaking.com', '_blank')
    },
    {
      icon: 'ri-instagram-line',
      title: 'Instagram',
      details: '@bettaking_id',
      description: 'Follow untuk update produk terbaru',
      color: 'pink',
      action: () => window.open('https://instagram.com/bettaking_id', '_blank')
    },
    {
      icon: 'ri-map-pin-line',
      title: 'Alamat',
      details: 'Jl. Aquarium No. 123, Jakarta',
      description: 'Kunjungi toko fisik kami',
      color: 'red',
      action: () => window.open('https://maps.google.com/', '_blank')
    }
  ];

  const faqs = [
    {
      question: 'Apakah bisa mengunjungi toko fisik?',
      answer: 'Ya, kami memiliki toko fisik di Jakarta. Silakan hubungi kami terlebih dahulu untuk membuat appointment agar kami dapat melayani Anda dengan lebih baik.'
    },
    {
      question: 'Bagaimana garansi untuk ikan yang dibeli?',
      answer: 'Kami memberikan garansi 100% hidup sampai tujuan. Jika ikan tidak selamat saat pengiriman, kami akan mengganti atau refund penuh sesuai kebijakan yang berlaku.'
    },
    {
      question: 'Berapa lama waktu pengiriman?',
      answer: 'Untuk area Jabodetabek 1-2 hari, luar kota 2-3 hari kerja. Kami menggunakan kurir khusus untuk ikan hidup dengan packaging yang aman.'
    },
    {
      question: 'Apakah tersedia konsultasi perawatan gratis?',
      answer: 'Ya, kami menyediakan konsultasi gratis via WhatsApp untuk semua customer. Tim ahli kami siap membantu dengan pertanyaan seputar perawatan cupang.'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar/>
      <ScrollToTop/>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-teal-600 to-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Hubungi Kami
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-teal-100 max-w-3xl mx-auto">
              Kami siap membantu Anda dengan segala pertanyaan tentang cupang dan layanan kami
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Contact Options */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Berbagai Cara Menghubungi Kami
            </h2>
            <p className="text-lg text-gray-600">
              Pilih metode komunikasi yang paling nyaman untuk Anda
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <div 
                key={index} 
                onClick={info.action}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer group"
              >
                <div className={`bg-${info.color}-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform`}>
                  <i className={`${info.icon} text-2xl text-${info.color}-600`}></i>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 text-center">{info.title}</h3>
                <p className="font-medium text-gray-900 text-center mb-2">{info.details}</p>
                <p className="text-sm text-gray-600 text-center">{info.description}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Kirim Pesan
            </h2>

            {submitStatus === 'success' && (
              <div className="mb-6 bg-green-50 border border-green-200 rounded-lg p-4">
                <div className="flex items-center">
                  <i className="ri-check-circle-line text-green-600 mr-2"></i>
                  <p className="text-green-800">Pesan berhasil dikirim! Kami akan merespons segera.</p>
                </div>
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="mb-6 bg-red-50 border border-red-200 rounded-lg p-4">
                <div className="flex items-center">
                  <i className="ri-error-warning-line text-red-600 mr-2"></i>
                  <p className="text-red-800">Terjadi kesalahan. Silakan coba lagi atau hubungi via WhatsApp.</p>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Nama Lengkap *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Masukkan nama lengkap"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="email@example.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    No. Telepon
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="08xxxxxxxxxx"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Subjek *
                  </label>
                  <select
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Pilih subjek</option>
                    <option value="Pertanyaan Produk">Pertanyaan Produk</option>
                    <option value="Konsultasi Perawatan">Konsultasi Perawatan</option>
                    <option value="Keluhan Pesanan">Keluhan Pesanan</option>
                    <option value="Kerjasama">Kerjasama</option>
                    <option value="Lainnya">Lainnya</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Pesan *
                </label>
                <textarea
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Tulis pesan Anda di sini..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-blue-700 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <i className="ri-loader-line animate-spin mr-2"></i>
                    Mengirim Pesan...
                  </>
                ) : (
                  <>
                    <i className="ri-send-plane-line mr-2"></i>
                    Kirim Pesan
                  </>
                )}
              </button>
            </form>
          </div>

          {/* FAQ Section */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Frequently Asked Questions
              </h2>
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div key={index} className="bg-white rounded-lg shadow-md">
                    <details className="group">
                      <summary className="p-6 cursor-pointer flex items-center justify-between">
                        <h3 className="font-semibold text-gray-900 pr-4">{faq.question}</h3>
                        <i className="ri-arrow-down-s-line text-gray-500 group-open:rotate-180 transition-transform flex-shrink-0"></i>
                      </summary>
                      <div className="px-6 pb-6">
                        <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                      </div>
                    </details>
                  </div>
                ))}
              </div>
            </div>

            {/* Business Hours */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                <i className="ri-time-line mr-2 text-blue-600"></i>
                Jam Operasional
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0">
                  <span className="text-gray-600">Senin - Jumat</span>
                  <span className="font-medium text-gray-900">09:00 - 18:00 WIB</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0">
                  <span className="text-gray-600">Sabtu</span>
                  <span className="font-medium text-gray-900">09:00 - 16:00 WIB</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0">
                  <span className="text-gray-600">Minggu</span>
                  <span className="font-medium text-red-600">Tutup</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0">
                  <span className="text-gray-600">WhatsApp Support</span>
                  <span className="font-medium text-green-600">24/7</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Contact;