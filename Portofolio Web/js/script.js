// ==========================================================================
// PORTOFOLIO INTERACTIVITY & ANIMATION SYSTEM
// ==========================================================================

const translations = {
  id: {
    nav_home: '<i class="bi bi-house me-1"></i> Home',
    nav_about: '<i class="bi bi-person me-1"></i> About',
    nav_education: '<i class="bi bi-mortarboard me-1"></i> Pendidikan',
    nav_experience: '<i class="bi bi-briefcase me-1"></i> Pengalaman',
    nav_skills: '<i class="bi bi-gear me-1"></i> Keahlian',
    nav_projects: '<i class="bi bi-code-slash me-1"></i> Proyek',
    nav_design: '<i class="bi bi-palette me-1"></i> Desain',
    nav_certificates: '<i class="bi bi-patch-check me-1"></i> Sertifikat',
    nav_contact: 'Kontak',
    hero_status: "Tersedia untuk Peluang Kerja",
    hero_greeting: "Halo, Saya",
    hero_desc: "Lulusan S1 Teknik Informatika (IPK 3,62) berfokus pada Digital Transformation, Data Management, dan Business Process Improvement untuk mendukung efisiensi operasional industri.",
    hero_download_cv: "Unduh CV",
    hero_contact_me: "Hubungi Saya",
    hero_connect: "Connect with me:",
    typing_words: [
      "S1 Teknik Informatika"
    ],
    about_tag: "Profil Singkat",
    about_title: "Tentang Saya",
    about_subtitle: "Digital Transformation & Data Management Specialist",
    about_p1: "Saya merupakan lulusan S1 Teknik Informatika dari Universitas Kuningan dengan IPK 3,62. Saya memiliki pengalaman dalam administrasi data, proyek digitalisasi, serta dukungan operasional melalui peran sebagai Operator Sekolah dan Tim Persiapan Makanan.",
    about_p2: "Saya juga telah menyelesaikan program Bangkit Academy jalur Mobile Development serta memiliki sertifikasi resmi BNSP sebagai Junior Web Developer dan Junior Network Administrator. Saya memiliki semangat belajar yang tinggi, teliti, mudah beradaptasi, serta tertarik untuk berkontribusi dalam transformasi digital dan perbaikan berkelanjutan (continuous improvement) di lingkungan industri manufaktur.",
    about_stat_gpa: "IPK S1 Uniku",
    about_stat_bnsp: "Sertifikasi BNSP",
    about_stat_djki: "Hak Cipta DJKI",
    about_info_title: "Informasi Kontak",
    contact_fullname: "Nama Lengkap",
    contact_location: "Domisili",
    contact_phone: "No. Telepon / WA",
    edu_tag: "Latar Belakang Akademis",
    edu_title: "Pendidikan",
    edu_uniku_degree: "S1 Teknik Informatika",
    edu_uniku_desc: "Berfokus pada pengembangan perangkat lunak, sistem basis data, analisis proses bisnis, dan teknologi informasi. Berhasil menyelesaikan studi tepat waktu dengan predikat Sangat Memuaskan (IPK 3,62).",
    edu_smk_rank: "Nilai Akhir: 86.00",
    edu_smk_degree: "Teknik Kendaraan Ringan Otomotif (TKRO)",
    edu_smk_desc: "Mempelajari dasar perawatan, perbaikan, dan diagnosa sistem mekanis/elektronik. Berhasil meraih peringkat tiga besar paralel, aktif sebagai Ketua Organisasi ROHIS (2020 - 2021), serta menyelesaikan sertifikasi perawatan berkala.",
    exp_tag: "Rekam Jejak Karir",
    exp_delapan_role: "PIC / Logistik & Operasional",
    exp_delapan_company: "Person In Charge (PIC)",
    exp_delapan_l1: "Mengkoordinasikan kegiatan operasional distribusi bantuan pangan bersama tim dan pihak terkait.",
    exp_delapan_l2: "Memantau kesiapan dan pergerakan armada untuk memastikan proses pengiriman berjalan sesuai jadwal.",
    exp_delapan_l3: "Mengelola dan memverifikasi data pengiriman, armada, serta dokumen pendukung distribusi.",
    exp_delapan_l4: "Melakukan koordinasi dengan pengemudi dan pihak terkait selama proses penyaluran bantuan.",
    exp_delapan_l5: "Memastikan proses distribusi berjalan sesuai prosedur dan kebutuhan operasional di lapangan.",
    exp_delapan_l6: "Menangani serta melaporkan kendala operasional yang terjadi selama proses distribusi.",
    exp_delapan_l7: "Menyusun rekapitulasi dan laporan terkait pelaksanaan kegiatan distribusi.",
    exp_title: "Pengalaman Kerja & Praktik",
    exp_op_role: "Operator Sekolah / Data Admin",
    exp_op_position: "Operator Sekolah",
    exp_op_l1: "Mengelola dan memvalidasi data siswa, guru, dan tenaga kependidikan menggunakan <strong>Dapodik</strong>.",
    exp_op_l2: "Mengelola administrasi Dana BOSP melalui aplikasi <strong>ARKAS</strong>.",
    exp_op_l3: "Mengolah data dan menyusun laporan menggunakan Microsoft Excel dan Word.",
    exp_op_l4: "Mendukung digitalisasi administrasi sekolah dengan memastikan akurasi dan kelengkapan data.",
    exp_kp_role: "Kerja Praktik",
    exp_kp_position: "Kerja Praktik (Android & System Analyst)",
    exp_kp_l1: "Menganalisis kebutuhan sistem pengelolaan stok bahan dan makanan UMKM.",
    exp_kp_l2: "Mengembangkan aplikasi Android untuk digitalisasi pengelolaan stok operasional.",
    exp_kp_l3: "Mengembangkan fitur pencatatan, monitoring stok, dan pelaporan persediaan secara terintegrasi.",
    exp_kp_l4: "Melakukan pengujian sistem untuk memastikan aplikasi berjalan sesuai kebutuhan bisnis.",
    exp_sp_role: "Tim Operasional",
    exp_sp_position: "Tim Persiapan Makanan",
    exp_sp_l1: "Menyiapkan bahan baku dan peralatan sebelum proses produksi.",
    exp_sp_l2: "Memastikan kebersihan area kerja sesuai dengan SOP yang berlaku.",
    exp_sp_l3: "Melakukan pengecekan kualitas dan ketersediaan bahan baku secara berkala.",
    exp_sp_l4: "Mendukung kelancaran proses produksi melalui koordinasi tim yang efektif.",
    skills_tag: "Kualifikasi Utama",
    skills_title: "Keahlian & Competencies",
    skills_data_sub: "Analisis, Validasi & Digitalisasi Proses",
    proj_tag: "Showcase Karya",
    proj_title: "Proyek Sistem & Aplikasi",
    proj_awis_title: "Aplikasi Gudang Awis (Pengelolaan Stok)",
    proj_awis_desc: "Aplikasi Android untuk digitalisasi pencatatan stok bahan, menu makanan, dan monitoring persediaan UMKM. Resmi terdaftar Hak Cipta di DJKI Kemenkumham RI.",
    proj_ppdb_title: "Sistem PPDB Web (Kompresi LZW)",
    proj_ppdb_desc: "Sistem Penerimaan Peserta Didik Baru berbasis web dengan fitur optimasi penyimpanan melalui kompresi dokumen berkas pendaftaran menggunakan algoritma LZW.",
    proj_donasi_title: "Sahabat Donasi (Aplikasi Penggalangan Dana)",
    proj_donasi_desc: "Aplikasi Android penggalangan dana online untuk bantuan bencana alam, kemanusiaan Palestina, dan santunan anak yatim secara cepat, transparan, dan mudah diakses.",
    design_tag: "Visual Design",
    design_title: "Galeri Desain Grafis & UI/UX",
    cert_tag: "Kredensial Resmi",
    cert_title: "Sertifikat & Pelatihan",
    cert_main_heading: "Sertifikat Utama",
    cert_train_heading: "Pelatihan Spesialisasi",
    cert_bangkit_desc: "Lulus program MSIB studi independen nasional berfokus pada pengembangan aplikasi Android dan integrasi Machine Learning.",
    cert_jwd_desc: "Sertifikasi kompetensi nasional dalam merancang, membangun, dan menguji aplikasi berbasis web.",
    cert_jna_desc: "Sertifikasi kompetensi nasional dalam mengonfigurasi perangkat jaringan dan troubleshooting konektivitas.",
    cert_gd_desc: "Sertifikasi keahlian dalam prinsip desain komunikasi visual, tipografi, dan komposisi desain media.",
    cert_certiport_desc: "Sertifikasi internasional dalam penguasaan sintaksis HTML5, styling CSS3, serta struktur dokumen web standar global.",
    contact_tag: "Mari Bekerja Sama",
    contact_title: "Hubungi Saya",
    contact_ready: "Siap Berkontribusi",
    contact_desc: "Terbuka untuk peluang kerja di bidang Digital Transformation, Data Management, Business Process Improvement, maupun posisi IT pendukung operasional industri.",
    contact_official_links: "Tautan Resmi:",
    form_name_label: "Nama Lengkap",
    form_email_label: "Alamat Email",
    form_subject_label: "Subjek Pesan",
    form_message_label: "Pesan Anda",
    form_submit_btn: "Kirim Pesan",
    btn_show_more: "Tampilkan Semua (12)",
    btn_show_less: "Sembunyikan"
  },
  en: {
    nav_home: '<i class="bi bi-house me-1"></i> Home',
    nav_about: '<i class="bi bi-person me-1"></i> About',
    nav_education: '<i class="bi bi-mortarboard me-1"></i> Education',
    nav_experience: '<i class="bi bi-briefcase me-1"></i> Experience',
    nav_skills: '<i class="bi bi-gear me-1"></i> Skills',
    nav_projects: '<i class="bi bi-code-slash me-1"></i> Projects',
    nav_design: '<i class="bi bi-palette me-1"></i> Design',
    nav_certificates: '<i class="bi bi-patch-check me-1"></i> Certificates',
    nav_contact: 'Contact',
    hero_status: "Available for Opportunities",
    hero_greeting: "Hello, I'm",
    hero_desc: "Information Technology Graduate (GPA 3.62) focusing on Digital Transformation, Data Management, and Business Process Improvement to support industrial operational efficiency.",
    hero_download_cv: "Download CV",
    hero_contact_me: "Contact Me",
    hero_connect: "Connect with me:",
    typing_words: [
      "Information Technology Graduate"
    ],
    about_tag: "Short Profile",
    about_title: "About Me",
    about_subtitle: "Digital Transformation & Data Management Specialist",
    about_p1: "I am a Bachelor's graduate in Informatics Engineering from Kuningan University with a GPA of 3.62. I have experience in data administration, digitalization projects, and operational support through roles as a School Operator and Food Preparation Team member.",
    about_p2: "I also completed the Bangkit Academy Mobile Development program and hold BNSP certifications as a Junior Web Developer and Junior Network Administrator. I am eager to learn, detail-oriented, adaptable, and interested in contributing to digital transformation and continuous improvement within manufacturing industries.",
    about_stat_gpa: "Bachelor GPA",
    about_stat_bnsp: "BNSP Certifications",
    about_stat_djki: "DJKI Copyright",
    about_info_title: "Contact Information",
    contact_fullname: "Full Name",
    contact_location: "Location",
    contact_phone: "Phone / WhatsApp",
    edu_tag: "Academic Background",
    edu_title: "Education",
    edu_uniku_degree: "B.S. in Information Technology",
    edu_uniku_desc: "Focused on software development, database systems, business process analysis, and IT solutions. Graduated on time with Very Satisfactory distinction (GPA 3.62).",
    edu_smk_rank: "Final Score: 86.00",
    edu_smk_degree: "Light Vehicle Automotive Engineering",
    edu_smk_desc: "Learned basic maintenance, repairs, and diagnostics of mechanical/electronic systems. Achieved parallel top 3 rank, active as Chairman of ROHIS Organization (2020 - 2021), and completed periodic maintenance certification.",
    exp_tag: "Career Track Record",
    exp_delapan_role: "PIC / Logistics Operations",
    exp_delapan_company: "Person In Charge (PIC)",
    exp_delapan_l1: "Mengkoordinasikan kegiatan operasional distribusi bantuan pangan bersama tim dan pihak terkait.",
    exp_delapan_l2: "Memantau kesiapan dan pergerakan armada untuk memastikan proses pengiriman berjalan sesuai jadwal.",
    exp_delapan_l3: "Mengelola dan memverifikasi data pengiriman, armada, serta dokumen pendukung distribusi.",
    exp_delapan_l4: "Melakukan koordinasi dengan pengemudi dan pihak terkait selama proses penyaluran bantuan.",
    exp_delapan_l5: "Memastikan proses distribusi berjalan sesuai prosedur dan kebutuhan operasional di lapangan.",
    exp_delapan_l6: "Menangani serta melaporkan kendala operasional yang terjadi selama proses distribusi.",
    exp_delapan_l7: "Menyusun rekapitulasi dan laporan terkait pelaksanaan kegiatan distribusi.",
    exp_title: "Work Experience & Internships",
    exp_op_role: "School Operator / Data Admin",
    exp_op_position: "School Operator",
    exp_op_l1: "Managed and validated student, teacher, and staff data using the <strong>Dapodik</strong> national database.",
    exp_op_l2: "Administered BOSP school grant funding administrative data via the <strong>ARKAS</strong> system.",
    exp_op_l3: "Processed data and generated administrative reports using Microsoft Excel and Word.",
    exp_op_l4: "Supported administrative digitalization by ensuring high data accuracy and completeness.",
    exp_kp_role: "Field Internship",
    exp_kp_position: "System Analyst & Android Intern",
    exp_kp_l1: "Analyzed MSME system requirements for ingredient and food inventory management.",
    exp_kp_l2: "Developed an Android application to digitalize operational stock recording.",
    exp_kp_l3: "Built integrated features for stock tracking, inventory monitoring, and reporting.",
    exp_kp_l4: "Executed system testing to ensure software performance met business requirements.",
    exp_sp_role: "Operations Team",
    exp_sp_position: "Food Preparation Staff",
    exp_sp_l1: "Prepared raw materials and equipment prior to production cycles.",
    exp_sp_l2: "Maintained workstation cleanliness in strict compliance with operational SOPs.",
    exp_sp_l3: "Conducted routine inventory quality and availability inspections.",
    exp_sp_l4: "Facilitated smooth manufacturing workflows through effective team coordination.",
    skills_tag: "Core Qualifications",
    skills_title: "Skills & Competencies",
    skills_data_sub: "Analysis, Validation & Process Digitalization",
    proj_tag: "Showcase Works",
    proj_title: "Systems & Application Projects",
    proj_awis_title: "Awis Warehouse App (Stock Management)",
    proj_awis_desc: "Android application for digitalizing ingredient stock, food menus, and inventory monitoring for MSMEs. Officially copyright-certified by DJKI Kemenkumham RI.",
    proj_ppdb_title: "Web PPDB System (LZW Compression)",
    proj_ppdb_desc: "Web-based Student Admission System featuring storage optimization through registration file compression using the LZW algorithm.",
    proj_donasi_title: "Sahabat Donasi (Fundraising App)",
    proj_donasi_desc: "Android online donation app for natural disaster relief, humanitarian aid for Palestine, and orphan support, designed for speed, transparency, and accessibility.",
    design_tag: "Visual Design",
    design_title: "Graphic Design & UI/UX Gallery",
    cert_tag: "Official Credentials",
    cert_title: "Certificates & Training",
    cert_main_heading: "Main Certificates",
    cert_train_heading: "Specialized Training",
    cert_bangkit_desc: "Graduated from MSIB national independent study program focused on Android Development and Machine Learning integration.",
    cert_jwd_desc: "National competency certification in designing, building, and testing web-based applications.",
    cert_jna_desc: "National competency certification in configuring network devices and connectivity troubleshooting.",
    cert_gd_desc: "Professional certification in visual communication design principles, typography, and media composition.",
    cert_certiport_desc: "International certification in HTML5 syntax mastery, CSS3 styling, and global standard web document structure.",
    contact_tag: "Let's Collaborate",
    contact_title: "Contact Me",
    contact_ready: "Ready to Contribute",
    contact_desc: "Open for career opportunities in Digital Transformation, Data Management, Business Process Improvement, or IT operational support roles.",
    contact_official_links: "Official Links:",
    form_name_label: "Full Name",
    form_email_label: "Email Address",
    form_subject_label: "Subject",
    form_message_label: "Your Message",
    form_submit_btn: "Send Message",
    btn_show_more: "Show All (12)",
    btn_show_less: "Show Less"
  }
};

let currentLang = localStorage.getItem('portfolioLang') || 'id';
let isTrainingExpanded = false;

function updateTrainingBtnText() {
  const toggleTrainingText = document.getElementById('toggleTrainingText');
  if (toggleTrainingText) {
    if (isTrainingExpanded) {
      toggleTrainingText.textContent = translations[currentLang]?.btn_show_less || "Sembunyikan";
    } else {
      toggleTrainingText.textContent = translations[currentLang]?.btn_show_more || "Tampilkan Semua (12)";
    }
  }
}

function setLanguage(lang) {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang] && translations[lang][key]) {
      el.innerHTML = translations[lang][key];
    }
  });

  const langText = document.getElementById('langText');
  if (langText) {
    langText.textContent = lang === 'id' ? 'EN' : 'ID';
  }

  localStorage.setItem('portfolioLang', lang);
  currentLang = lang;
  updateTrainingBtnText();
}

document.addEventListener('DOMContentLoaded', () => {

  // 1. Dark/Light Theme Handler
  const themeToggleBtn = document.getElementById('themeToggleBtn');
  if (localStorage.getItem('portfolioTheme') === 'light') {
    document.body.classList.add('light-mode');
  }

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      document.body.classList.toggle('light-mode');
      const isLight = document.body.classList.contains('light-mode');
      localStorage.setItem('portfolioTheme', isLight ? 'light' : 'dark');
    });
  }

  // 2. Language Switcher Handler
  setLanguage(currentLang);

  const langToggleBtn = document.getElementById('langToggleBtn');
  if (langToggleBtn) {
    langToggleBtn.addEventListener('click', () => {
      setLanguage(currentLang === 'id' ? 'en' : 'id');
    });
  }

  // 3. Typing Effect
  const typingElement = document.getElementById('typingEffect');
  if (typingElement) {
    let wordIdx = 0;
    let charIdx = 0;
    let isDeleting = false;

    setInterval(() => {
      const words = translations[currentLang]?.typing_words || ["Digital Transformation Specialist"];
      const currentWord = words[wordIdx % words.length];

      if (isDeleting) {
        typingElement.textContent = currentWord.substring(0, charIdx - 1);
        charIdx--;
        if (charIdx <= 0) {
          isDeleting = false;
          wordIdx = (wordIdx + 1) % words.length;
        }
      } else {
        typingElement.textContent = currentWord.substring(0, charIdx + 1);
        charIdx++;
        if (charIdx > currentWord.length) {
          isDeleting = true;
        }
      }
    }, 120);
  }

  // 4. Scroll Progress Bar
  const progressBar = document.getElementById('scrollProgressBar');
  window.addEventListener('scroll', () => {
    if (progressBar) {
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      if (height > 0) {
        progressBar.style.width = (winScroll / height) * 100 + "%";
      }
    }
  });

  // 5. TOGGLE SHOW MORE / SHOW LESS PELATIHAN SPESIALISASI
  const toggleTrainingBtn = document.getElementById('toggleTrainingBtn');
  const toggleTrainingIcon = document.getElementById('toggleTrainingIcon');
  const hiddenTrainingCards = document.querySelectorAll('.training-card.is-hidden');

  if (toggleTrainingBtn) {
    toggleTrainingBtn.addEventListener('click', () => {
      isTrainingExpanded = !isTrainingExpanded;

      hiddenTrainingCards.forEach(card => {
        if (isTrainingExpanded) {
          card.classList.remove('is-hidden');
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }, 50);
        } else {
          card.classList.add('is-hidden');
          card.style.opacity = '0';
          card.style.transform = 'translateY(20px)';
        }
      });

      updateTrainingBtnText();

      if (toggleTrainingIcon) {
        toggleTrainingIcon.className = isTrainingExpanded ? "bi bi-chevron-up ms-1" : "bi bi-chevron-down ms-1";
      }
    });
  }

  // 6. AUTOMATIC SCROLL REVEAL ASSIGNMENT
  
  // Section Headers -> Slide Up
  document.querySelectorAll('section .text-center').forEach(el => {
    el.classList.add('reveal-element', 'reveal-up');
  });

  // Cards (Skill, Project, Cert, Gallery, About, Training) -> Zoom In + Delay Berurutan
  document.querySelectorAll('.skill-card, .project-card, .cert-card, .gallery-card, .about-card, .contact-info-card, .contact-form-card, .training-card').forEach((el, index) => {
    el.classList.add('reveal-element', 'reveal-zoom');
    const delayClass = `delay-${(index % 4) + 1}`;
    el.classList.add(delayClass);
  });

  // Timeline Items -> Slide Up
  document.querySelectorAll('.timeline-item').forEach(el => {
    el.classList.add('reveal-element', 'reveal-up');
  });

  // 7. INTERSECTION OBSERVER FOR SCROLL REVEAL
  const isMobile = window.innerWidth < 768;
  const observerOptions = {
    root: null,
    rootMargin: isMobile ? '0px 0px -30px 0px' : '0px 0px -70px 0px',
    threshold: isMobile ? 0.05 : 0.12
  };

  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  document.querySelectorAll('.reveal-element').forEach(el => {
    revealObserver.observe(el);
  });

  // 8. Active Nav Link on Scroll
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.custom-navbar .nav-link');

  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 120;
      if (window.scrollY >= sectionTop) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });

});

// Global Lightbox Modal Function
function openLightbox(imageSrc, titleText) {
  const modalImg = document.getElementById('lightboxImage');
  const modalTitle = document.getElementById('lightboxTitle');
  if (modalImg && modalTitle) {
    modalImg.src = imageSrc;
    modalTitle.textContent = titleText;
  }
}

// Floating Back to Top Button
const backToTopBtn = document.getElementById('backToTopBtn');
if (backToTopBtn) {
  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      backToTopBtn.classList.add('show');
    } else {
      backToTopBtn.classList.remove('show');
    }
  });
}