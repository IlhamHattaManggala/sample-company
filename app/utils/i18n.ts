export type Language = "id" | "en";

export interface Translations {
  // Navigation
  nav: {
    home: string;
    about: string;
    services: string;
    projects: string;
    careers: string;
    contact: string;
    companyProfile: string;
    visionMission: string;
    ourTeam: string;
    serviceOverview: string;
    productDevelopment: string;
    itConsulting: string;
    marketingSolution: string;
    cloudSolutions: string;
    dataAnalytics: string;
    cybersecurity: string;
  };
  // Home Page
  home: {
    heroTitle: string;
    heroSubtitle: string;
    getStarted: string;
    learnMore: string;
    aboutCompany: string;
    aboutText1: string;
    aboutText2: string;
    aboutText3: string;
    ourServices: string;
    servicesSubtitle: string;
    featuredProjects: string;
    projectsSubtitle: string;
    viewAllProjects: string;
    serviceProductDev: string;
    serviceITConsulting: string;
    serviceMarketing: string;
    serviceCloud: string;
    serviceDataAnalytics: string;
    serviceCybersecurity: string;
  };
  // Common
  common: {
    sampleNotice: string;
    sampleNoticeTitle: string;
    sampleNoticeText: string;
    iUnderstand: string;
    learnMore: string;
  };
  // About
  about: {
    companyProfile: string;
    ourHistory: string;
    ourMission: string;
    ourValues: string;
    ourAchievements: string;
    historyText1: string;
    historyText2: string;
    historyText3: string;
    missionText1: string;
    missionText2: string;
    valuesList1: string;
    valuesList2: string;
    valuesList3: string;
    valuesList4: string;
    valuesList5: string;
    achievementsText1: string;
    achievementsText2: string;
    vision: string;
    mission: string;
    visionText: string;
    missionText: string;
    coreValues: string;
    innovation: string;
    excellence: string;
    integrity: string;
    innovationDesc: string;
    excellenceDesc: string;
    integrityDesc: string;
    teamTitle: string;
    teamSubtitle: string;
    ceo: string;
    cto: string;
    headProduct: string;
    directorMarketing: string;
    seniorITConsultant: string;
    leadSoftwareEngineer: string;
    businessDevManager: string;
    uxuiDesigner: string;
    teamBio1: string;
    teamBio2: string;
    teamBio3: string;
    teamBio4: string;
    teamBio5: string;
    teamBio6: string;
    teamBio7: string;
    teamBio8: string;
  };
  // Services
  services: {
    title: string;
    subtitle: string;
    getInTouch: string;
    approach: string;
    keyFeatures: string;
    developmentProcess: string;
    whyChooseUs: string;
    consultingServices: string;
    ourExpertise: string;
    consultingMethodology: string;
    benefits: string;
    ourSolutions: string;
    strategyPlanning: string;
    resultsROI: string;
    productDevTitle: string;
    productDevDesc: string;
    productDevIntro: string;
    productDevApproach: string;
    productDevApproachText1: string;
    productDevApproachText2: string;
    productDevFeatures1: string;
    productDevFeatures2: string;
    productDevFeatures3: string;
    productDevFeatures4: string;
    productDevFeatures5: string;
    productDevProcess: string;
    productDevProcessText1: string;
    productDevProcessText2: string;
    productDevWhy: string;
    productDevWhyText1: string;
    productDevWhyText2: string;
    itConsultingTitle: string;
    itConsultingDesc: string;
    itConsultingIntro: string;
    itConsultingServices: string;
    itConsultingServicesText1: string;
    itConsultingServicesText2: string;
    itConsultingExpertise1: string;
    itConsultingExpertise2: string;
    itConsultingExpertise3: string;
    itConsultingExpertise4: string;
    itConsultingExpertise5: string;
    itConsultingMethodology: string;
    itConsultingMethodologyText1: string;
    itConsultingMethodologyText2: string;
    itConsultingBenefits: string;
    itConsultingBenefitsText1: string;
    itConsultingBenefitsText2: string;
    marketingTitle: string;
    marketingDesc: string;
    marketingIntro: string;
    marketingServices: string;
    marketingServicesText1: string;
    marketingServicesText2: string;
    marketingSolutions1: string;
    marketingSolutions2: string;
    marketingSolutions3: string;
    marketingSolutions4: string;
    marketingSolutions5: string;
    marketingStrategy: string;
    marketingStrategyText1: string;
    marketingStrategyText2: string;
    marketingResults: string;
    marketingResultsText1: string;
    marketingResultsText2: string;
    cloudSolutionsTitle: string;
    cloudSolutionsDesc: string;
    dataAnalyticsTitle: string;
    dataAnalyticsDesc: string;
    cybersecurityTitle: string;
    cybersecurityDesc: string;
  };
  // Projects
  projects: {
    title: string;
    subtitle: string;
    enterprisePlatform: string;
    ecommerceSolution: string;
    mobileApplication: string;
    cloudInfrastructure: string;
    digitalMarketingCampaign: string;
    dataAnalyticsPlatform: string;
    webApplication: string;
    brandIdentityDesign: string;
    productDevelopment: string;
    itConsulting: string;
    marketing: string;
    projectDesc1: string;
    projectDesc2: string;
    projectDesc3: string;
    projectDesc4: string;
    projectDesc5: string;
    projectDesc6: string;
    projectDesc7: string;
    projectDesc8: string;
  };
  // Careers
  careers: {
    title: string;
    subtitle: string;
    applyNow: string;
    dontSeePosition: string;
    sendResume: string;
    generalApplication: string;
    generalApplicationText: string;
    applicationTitle: string;
    applicationSubtitle: string;
    personalInfo: string;
    fullName: string;
    email: string;
    phone: string;
    address: string;
    coverLetter: string;
    uploadResume: string;
    resumeFile: string;
    chooseFile: string;
    noFileChosen: string;
    submitApplication: string;
    submitting: string;
    applicationSuccess: string;
    applicationSuccessMessage: string;
    backToCareers: string;
    nameRequired: string;
    emailRequired: string;
    emailInvalid: string;
    phoneRequired: string;
    phoneInvalid: string;
    addressRequired: string;
    coverLetterRequired: string;
    resumeRequired: string;
    namePlaceholder: string;
    emailPlaceholder: string;
    phonePlaceholder: string;
    addressPlaceholder: string;
    coverLetterPlaceholder: string;
    fileFormatHint: string;
    seniorSoftwareEngineer: string;
    productManager: string;
    uxuiDesigner: string;
    marketingSpecialist: string;
    itConsultant: string;
    businessAnalyst: string;
    engineering: string;
    product: string;
    design: string;
    marketing: string;
    consulting: string;
    business: string;
    remoteOnsite: string;
    fulltime: string;
    jobDesc1: string;
    jobDesc2: string;
    jobDesc3: string;
    jobDesc4: string;
    jobDesc5: string;
    jobDesc6: string;
  };
  // Contact
  contact: {
    title: string;
    subtitle: string;
    sendMessage: string;
    getInTouch: string;
    address: string;
    phone: string;
    email: string;
    businessHours: string;
    hours: string;
    name: string;
    emailLabel: string;
    phoneLabel: string;
    message: string;
    send: string;
    sending: string;
    thankYou: string;
    successMessage: string;
    nameRequired: string;
    emailRequired: string;
    emailInvalid: string;
    phoneRequired: string;
    phoneInvalid: string;
    messageRequired: string;
    namePlaceholder: string;
    emailPlaceholder: string;
    phonePlaceholder: string;
    messagePlaceholder: string;
  };
  // Footer
  footer: {
    description: string;
    quickLinks: string;
    contactUs: string;
    allRightsReserved: string;
    home: string;
    aboutUs: string;
    services: string;
    projects: string;
    careers: string;
    contact: string;
    address: string;
    phone: string;
    email: string;
    addressValue: string;
    phoneValue: string;
    emailValue: string;
  };
}

export const translations: Record<Language, Translations> = {
  id: {
    nav: {
      home: "Beranda",
      about: "Tentang",
      services: "Layanan",
      projects: "Proyek",
      careers: "Karir",
      contact: "Kontak",
      companyProfile: "Profil Perusahaan",
      visionMission: "Visi & Misi",
      ourTeam: "Tim Kami",
      serviceOverview: "Ringkasan Layanan",
      productDevelopment: "Pengembangan Produk",
      itConsulting: "Konsultasi IT",
      marketingSolution: "Solusi Pemasaran",
      cloudSolutions: "Solusi Cloud",
      dataAnalytics: "Analitik Data",
      cybersecurity: "Keamanan Siber",
    },
    home: {
      heroTitle: "Memberdayakan Bisnis Dengan Solusi Cerdas – Sample Company",
      heroSubtitle:
        "Kami menyediakan solusi teknologi terkini dan layanan konsultasi strategis untuk membantu bisnis berkembang di era digital. Keahlian kami mencakup pengembangan produk, konsultasi IT, dan solusi pemasaran komprehensif.",
      getStarted: "Mulai",
      learnMore: "Pelajari Lebih Lanjut",
      aboutCompany: "Tentang Sample Company",
      aboutText1:
        "Sample Company adalah perusahaan teknologi terdepan yang berkomitmen untuk memberdayakan bisnis dengan solusi cerdas dan inovatif. Didirikan dengan visi untuk menjadi mitra terpercaya dalam transformasi digital, kami telah membantu ratusan perusahaan dari berbagai industri untuk mencapai tujuan bisnis mereka melalui teknologi yang tepat guna.",
      aboutText2:
        "Dengan tim ahli yang berpengalaman dan dedikasi tinggi terhadap kualitas, kami menyediakan layanan komprehensif mulai dari pengembangan produk, konsultasi IT, hingga solusi pemasaran digital. Setiap proyek yang kami tangani dirancang khusus sesuai kebutuhan klien, memastikan hasil yang optimal dan berkelanjutan untuk pertumbuhan bisnis jangka panjang.",
      aboutText3:
        "Komitmen kami terhadap inovasi, keunggulan, dan integritas telah menjadikan Sample Company sebagai pilihan utama bagi perusahaan yang ingin berkembang di era digital. Kami percaya bahwa teknologi yang tepat, dikombinasikan dengan strategi yang matang, dapat mengubah tantangan menjadi peluang dan mengantarkan bisnis menuju kesuksesan yang berkelanjutan.",
      ourServices: "Layanan Kami",
      servicesSubtitle: "Solusi komprehensif yang disesuaikan dengan kebutuhan bisnis Anda",
      featuredProjects: "Proyek Unggulan",
      projectsSubtitle: "Jelajahi beberapa proyek sukses kami",
      viewAllProjects: "Lihat Semua Proyek",
      serviceProductDev: "Transformasikan ide Anda menjadi produk inovatif dengan tim pengembangan ahli kami. Kami menyediakan solusi yang dapat diskalakan untuk mendorong pertumbuhan bisnis.",
      serviceITConsulting: "Layanan konsultasi IT strategis untuk mengoptimalkan infrastruktur teknologi Anda dan mendorong transformasi digital di seluruh organisasi.",
      serviceMarketing: "Strategi dan solusi pemasaran komprehensif untuk meningkatkan brand Anda, menjangkau target audience, dan memaksimalkan ROI.",
      serviceCloud: "Layanan migrasi dan manajemen cloud yang mulus untuk meningkatkan skalabilitas, keamanan, dan performa operasional bisnis Anda.",
      serviceDataAnalytics: "Transformasikan data mentah menjadi wawasan yang dapat ditindaklanjuti dengan solusi analitik canggih kami, membantu Anda membuat keputusan bisnis yang tepat.",
      serviceCybersecurity: "Lindungi aset digital Anda dengan solusi keamanan siber komprehensif, memastikan bisnis Anda tetap aman dalam lanskap ancaman yang terus berkembang.",
    },
    common: {
      sampleNotice: "Pemberitahuan Website Sample",
      sampleNoticeTitle: "Pemberitahuan Website Sample",
      sampleNoticeText:
        "Website ini adalah website sample/demo yang dibuat hanya untuk keperluan demonstrasi. Semua konten, gambar, dan informasi yang ditampilkan hanya untuk tujuan ilustrasi dan tidak mewakili perusahaan atau bisnis yang sebenarnya.",
      iUnderstand: "Saya Mengerti",
      learnMore: "Pelajari Lebih Lanjut",
    },
    about: {
      companyProfile: "Profil Perusahaan",
      ourHistory: "Sejarah Kami",
      ourMission: "Misi Kami",
      ourValues: "Nilai-Nilai Kami",
      ourAchievements: "Pencapaian Kami",
      historyText1:
        "Sample Company didirikan pada tahun 2015 dengan visi untuk menjadi mitra terpercaya dalam transformasi digital. Dimulai sebagai perusahaan konsultasi IT kecil dengan tim beranggotakan 5 orang, kami telah berkembang menjadi perusahaan teknologi terkemuka dengan lebih dari 200 profesional berpengalaman di berbagai bidang teknologi.",
      historyText2:
        "Perjalanan kami dimulai dengan fokus pada pengembangan aplikasi web dan mobile untuk klien-klien lokal. Seiring berjalannya waktu, kami memperluas layanan kami untuk mencakup konsultasi strategis, solusi cloud, keamanan siber, dan layanan pemasaran digital. Setiap langkah dalam perjalanan kami didorong oleh komitmen untuk memberikan nilai terbaik bagi klien.",
      historyText3:
        "Hari ini, Sample Company telah melayani lebih dari 500 klien dari berbagai industri, mulai dari startup hingga perusahaan multinasional. Kami bangga dengan track record kami yang telah membantu banyak perusahaan mencapai tujuan bisnis mereka melalui teknologi yang tepat dan strategi yang matang.",
      missionText1:
        "Misi kami adalah memberikan solusi teknologi yang inovatif dan strategis untuk membantu bisnis berkembang di era digital. Kami percaya bahwa setiap perusahaan, terlepas dari ukurannya, berhak mendapatkan akses ke teknologi terbaik yang dapat mengubah cara mereka beroperasi dan berkompetisi di pasar.",
      missionText2:
        "Dengan menggabungkan keahlian teknis yang mendalam dengan pemahaman bisnis yang kuat, kami membantu klien kami mengidentifikasi peluang, mengatasi tantangan, dan mencapai pertumbuhan yang berkelanjutan. Kami berkomitmen untuk membangun hubungan jangka panjang dengan klien berdasarkan kepercayaan, transparansi, dan hasil yang terukur.",
      valuesList1: "Inovasi - Terus mencari solusi baru dan teknologi terdepan",
      valuesList2: "Kualitas - Berkomitmen untuk memberikan hasil terbaik dalam setiap proyek",
      valuesList3: "Integritas - Menjunjung tinggi kejujuran dan transparansi dalam semua aspek bisnis",
      valuesList4: "Kolaborasi - Bekerja sama dengan klien sebagai mitra strategis",
      valuesList5: "Kepuasan Klien - Memprioritaskan kebutuhan dan kesuksesan klien di atas segalanya",
      achievementsText1:
        "Selama bertahun-tahun, Sample Company telah meraih berbagai pencapaian yang membanggakan. Kami telah menyelesaikan lebih dari 1000 proyek sukses, membantu klien kami meningkatkan efisiensi operasional hingga 40%, dan telah diakui sebagai salah satu perusahaan teknologi terpercaya di industri.",
      achievementsText2:
        "Pencapaian kami tidak hanya terukur dari jumlah proyek, tetapi juga dari dampak positif yang kami berikan kepada klien. Banyak klien kami yang telah mengalami pertumbuhan signifikan setelah bekerja sama dengan kami, baik dalam hal revenue, market share, maupun efisiensi operasional. Kami bangga menjadi bagian dari kesuksesan mereka.",
      vision: "Visi Kami",
      mission: "Misi Kami",
      visionText:
        "Menjadi penyedia solusi bisnis cerdas terdepan, memberdayakan organisasi di seluruh dunia untuk mencapai potensi penuh mereka melalui inovasi, keunggulan, dan teknologi transformatif.",
      missionText:
        "Memberikan nilai luar biasa kepada klien kami dengan menyediakan solusi teknologi terkini, layanan konsultasi strategis, dan produk inovatif yang mendorong pertumbuhan bisnis dan transformasi digital.",
      coreValues: "Nilai-Nilai Inti",
      innovation: "Inovasi",
      excellence: "Kesempurnaan",
      integrity: "Integritas",
      innovationDesc: "Terus mendorong batas dan merangkul teknologi baru",
      excellenceDesc: "Berkomitmen untuk memberikan kualitas tertinggi dalam segala hal yang kami lakukan",
      integrityDesc: "Membangun kepercayaan melalui transparansi dan praktik bisnis yang etis",
      teamTitle: "Tim Kami",
      teamSubtitle:
        "Kenali individu-individu berbakat yang menjadikan Sample Company sebagai pemimpin dalam inovasi dan kesempurnaan",
      ceo: "Direktur Utama",
      cto: "Direktur Teknologi",
      headProduct: "Kepala Pengembangan Produk",
      directorMarketing: "Direktur Pemasaran",
      seniorITConsultant: "Konsultan IT Senior",
      leadSoftwareEngineer: "Kepala Software Engineer",
      businessDevManager: "Manajer Pengembangan Bisnis",
      uxuiDesigner: "Desainer UX/UI",
      teamBio1: "Memimpin Sample Company dengan visi strategis dan dedikasi untuk mencapai keunggulan dalam setiap aspek bisnis. Dengan pengalaman lebih dari 15 tahun di industri teknologi.",
      teamBio2: "Mengawasi semua aspek teknologi perusahaan dan memastikan inovasi terus berjalan. Ahli dalam arsitektur sistem dan transformasi digital dengan track record yang luar biasa.",
      teamBio3: "Memimpin tim pengembangan produk untuk menciptakan solusi yang inovatif dan user-friendly. Berpengalaman dalam mengelola produk dari konsep hingga peluncuran.",
      teamBio4: "Mengembangkan strategi pemasaran yang efektif untuk meningkatkan brand awareness dan market share. Spesialis dalam digital marketing dan brand positioning.",
      teamBio5: "Memberikan konsultasi IT strategis kepada klien untuk mengoptimalkan infrastruktur teknologi mereka. Ahli dalam cloud computing dan sistem enterprise.",
      teamBio6: "Memimpin tim engineering dalam mengembangkan solusi perangkat lunak yang scalable dan reliable. Berpengalaman dengan berbagai teknologi modern dan best practices.",
      teamBio7: "Mengembangkan hubungan bisnis baru dan memperluas jaringan klien. Fokus pada pertumbuhan bisnis jangka panjang dan kepuasan klien.",
      teamBio8: "Menciptakan pengalaman pengguna yang menarik dan intuitif. Spesialis dalam desain interface dan user experience yang memprioritaskan kebutuhan pengguna.",
    },
    services: {
      title: "Layanan Kami",
      subtitle: "Solusi komprehensif yang disesuaikan dengan kebutuhan bisnis Anda dan mendorong pertumbuhan",
      getInTouch: "Hubungi Kami",
      approach: "Pendekatan Kami",
      keyFeatures: "Fitur Utama",
      developmentProcess: "Proses Pengembangan",
      whyChooseUs: "Mengapa Memilih Kami",
      consultingServices: "Layanan Konsultasi",
      ourExpertise: "Keahlian Kami",
      consultingMethodology: "Metodologi Konsultasi",
      benefits: "Manfaat",
      ourSolutions: "Solusi Kami",
      strategyPlanning: "Strategi & Perencanaan",
      resultsROI: "Hasil & ROI",
      productDevTitle: "Pengembangan Produk",
      productDevDesc: "Transformasikan ide Anda menjadi produk inovatif dengan tim pengembangan ahli kami. Kami menyediakan solusi yang dapat diskalakan untuk mendorong pertumbuhan bisnis dan kesuksesan pasar.",
      productDevIntro: "Transformasikan ide Anda menjadi produk inovatif dengan tim pengembangan ahli kami. Kami menyediakan solusi yang dapat diskalakan untuk mendorong pertumbuhan bisnis dan kesuksesan pasar.",
      productDevApproach: "Pendekatan Kami",
      productDevApproachText1: "Kami mengikuti metodologi pengembangan produk yang terbukti, dimulai dari penelitian mendalam tentang kebutuhan pasar dan pengguna. Tim kami bekerja sama dengan klien untuk memahami visi mereka dan mengubahnya menjadi produk yang fungsional dan user-friendly. Setiap tahap pengembangan dilakukan dengan teliti, memastikan kualitas tinggi dan kesesuaian dengan tujuan bisnis.",
      productDevApproachText2: "Kami percaya bahwa produk yang sukses tidak hanya tentang teknologi canggih, tetapi juga tentang memahami kebutuhan pengguna dan memberikan pengalaman yang luar biasa. Dengan pendekatan yang berpusat pada pengguna, kami memastikan bahwa setiap produk yang kami kembangkan memberikan nilai nyata dan memecahkan masalah yang sebenarnya.",
      productDevFeatures1: "Pengembangan full-stack untuk web dan mobile",
      productDevFeatures2: "Arsitektur yang scalable dan maintainable",
      productDevFeatures3: "Integrasi dengan sistem dan API pihak ketiga",
      productDevFeatures4: "Testing dan quality assurance yang komprehensif",
      productDevFeatures5: "Dukungan dan maintenance pasca peluncuran",
      productDevProcess: "Proses Pengembangan",
      productDevProcessText1: "Proses pengembangan kami dimulai dengan fase discovery dan planning, di mana kami menganalisis kebutuhan, mendefinisikan scope, dan membuat roadmap yang jelas. Selanjutnya, kami masuk ke fase design dan prototyping untuk memvisualisasikan konsep sebelum pengembangan dimulai.",
      productDevProcessText2: "Fase pengembangan dilakukan dengan metodologi agile, memungkinkan iterasi cepat dan feedback yang berkelanjutan. Setelah pengembangan selesai, produk melalui fase testing yang ketat sebelum diluncurkan ke pasar. Kami juga menyediakan dukungan pasca peluncuran untuk memastikan produk berjalan dengan optimal.",
      productDevWhy: "Mengapa Memilih Kami",
      productDevWhyText1: "Dengan pengalaman bertahun-tahun dalam pengembangan produk, kami telah membantu banyak perusahaan menciptakan produk yang sukses di pasar. Tim kami terdiri dari developer berpengalaman yang menguasai teknologi terbaru dan best practices industri.",
      productDevWhyText2: "Kami tidak hanya mengembangkan produk, tetapi juga memastikan bahwa produk tersebut dapat berkembang seiring dengan pertumbuhan bisnis. Dengan fokus pada scalability, security, dan user experience, kami memastikan bahwa setiap produk yang kami kembangkan siap untuk menghadapi tantangan masa depan.",
      itConsultingTitle: "Konsultasi IT",
      itConsultingDesc: "Layanan konsultasi IT strategis untuk mengoptimalkan infrastruktur teknologi Anda dan mendorong transformasi digital di seluruh organisasi.",
      itConsultingIntro: "Layanan konsultasi IT strategis untuk mengoptimalkan infrastruktur teknologi Anda dan mendorong transformasi digital di seluruh organisasi.",
      itConsultingServices: "Layanan Konsultasi",
      itConsultingServicesText1: "Kami menyediakan layanan konsultasi IT yang komprehensif untuk membantu organisasi mengoptimalkan penggunaan teknologi mereka. Dari assessment infrastruktur hingga perencanaan transformasi digital, tim konsultan kami bekerja sama dengan klien untuk mengidentifikasi peluang peningkatan dan mengimplementasikan solusi yang tepat.",
      itConsultingServicesText2: "Layanan kami mencakup konsultasi strategis, arsitektur sistem, migrasi cloud, keamanan siber, dan optimasi proses bisnis. Kami memahami bahwa setiap organisasi memiliki kebutuhan yang unik, oleh karena itu kami menyediakan solusi yang disesuaikan dengan kondisi dan tujuan bisnis klien.",
      itConsultingExpertise1: "Arsitektur sistem dan enterprise solutions",
      itConsultingExpertise2: "Cloud migration dan infrastructure optimization",
      itConsultingExpertise3: "Cybersecurity dan risk assessment",
      itConsultingExpertise4: "Digital transformation strategy",
      itConsultingExpertise5: "IT governance dan best practices",
      itConsultingMethodology: "Metodologi Konsultasi",
      itConsultingMethodologyText1: "Metodologi konsultasi kami dimulai dengan fase assessment menyeluruh untuk memahami kondisi teknologi saat ini, tantangan yang dihadapi, dan tujuan bisnis. Berdasarkan temuan assessment, kami mengembangkan roadmap transformasi yang jelas dan dapat diimplementasikan.",
      itConsultingMethodologyText2: "Selama fase implementasi, kami bekerja sama dengan tim internal klien untuk memastikan transisi yang mulus dan minim gangguan. Kami juga menyediakan training dan knowledge transfer untuk memastikan tim klien dapat mengelola solusi yang telah diimplementasikan dengan efektif.",
      itConsultingBenefits: "Manfaat",
      itConsultingBenefitsText1: "Dengan layanan konsultasi IT kami, organisasi dapat mengoptimalkan investasi teknologi mereka, meningkatkan efisiensi operasional, dan memperkuat posisi kompetitif di pasar. Kami membantu klien membuat keputusan teknologi yang tepat berdasarkan data dan best practices industri.",
      itConsultingBenefitsText2: "Selain itu, kami juga membantu organisasi mempersiapkan diri untuk menghadapi perubahan teknologi di masa depan. Dengan perencanaan yang matang dan implementasi yang tepat, klien kami dapat beradaptasi dengan cepat terhadap tren teknologi baru dan memanfaatkannya untuk keuntungan bisnis.",
      marketingTitle: "Solusi Pemasaran",
      marketingDesc: "Strategi dan solusi pemasaran komprehensif untuk meningkatkan brand Anda, menjangkau target audience, dan memaksimalkan ROI.",
      marketingIntro: "Strategi dan solusi pemasaran komprehensif untuk meningkatkan brand Anda, menjangkau target audience, dan memaksimalkan ROI.",
      marketingServices: "Layanan Pemasaran",
      marketingServicesText1: "Kami menyediakan layanan pemasaran yang komprehensif untuk membantu bisnis meningkatkan brand awareness, menjangkau target audience yang tepat, dan mencapai tujuan bisnis mereka. Dari strategi pemasaran digital hingga kampanye tradisional, tim kami memiliki keahlian untuk mengembangkan dan mengimplementasikan strategi yang efektif.",
      marketingServicesText2: "Layanan kami mencakup digital marketing, content marketing, social media management, SEO/SEM, email marketing, dan brand development. Kami memahami bahwa setiap bisnis memiliki target audience dan tujuan yang berbeda, oleh karena itu kami menyusun strategi yang disesuaikan dengan kebutuhan spesifik klien.",
      marketingSolutions1: "Digital marketing dan advertising",
      marketingSolutions2: "Content creation dan content strategy",
      marketingSolutions3: "Social media management dan engagement",
      marketingSolutions4: "SEO/SEM dan search engine optimization",
      marketingSolutions5: "Brand development dan positioning",
      marketingStrategy: "Strategi & Perencanaan",
      marketingStrategyText1: "Proses perencanaan strategi pemasaran kami dimulai dengan analisis mendalam tentang target audience, kompetitor, dan positioning brand. Berdasarkan analisis ini, kami mengembangkan strategi pemasaran yang komprehensif dengan tujuan yang jelas dan metrik yang dapat diukur.",
      marketingStrategyText2: "Kami menggunakan data dan analytics untuk mengoptimalkan kampanye secara berkelanjutan, memastikan bahwa setiap investasi pemasaran memberikan ROI yang optimal. Dengan pendekatan yang data-driven, kami membantu klien membuat keputusan yang tepat dan mengalokasikan budget dengan efisien.",
      marketingResults: "Hasil & ROI",
      marketingResultsText1: "Kami berkomitmen untuk memberikan hasil yang terukur dan ROI yang positif untuk setiap kampanye pemasaran yang kami kelola. Dengan tracking dan analytics yang komprehensif, kami memastikan bahwa setiap strategi dan taktik yang diimplementasikan dapat diukur dan dioptimalkan.",
      marketingResultsText2: "Banyak klien kami telah mengalami peningkatan signifikan dalam brand awareness, lead generation, dan revenue setelah bekerja sama dengan kami. Kami bangga menjadi mitra strategis yang membantu bisnis mencapai tujuan pemasaran mereka dan tumbuh secara berkelanjutan.",
      cloudSolutionsTitle: "Solusi Cloud",
      cloudSolutionsDesc: "Layanan migrasi dan manajemen cloud yang mulus untuk meningkatkan skalabilitas, keamanan, dan performa operasional bisnis Anda.",
      dataAnalyticsTitle: "Analitik Data",
      dataAnalyticsDesc: "Transformasikan data mentah menjadi wawasan yang dapat ditindaklanjuti dengan solusi analitik canggih kami, membantu Anda membuat keputusan bisnis yang tepat.",
      cybersecurityTitle: "Keamanan Siber",
      cybersecurityDesc: "Lindungi aset digital Anda dengan solusi keamanan siber komprehensif, memastikan bisnis Anda tetap aman dalam lanskap ancaman yang terus berkembang.",
    },
    projects: {
      title: "Proyek Kami",
      subtitle: "Jelajahi portofolio proyek sukses dan solusi inovatif kami",
      enterprisePlatform: "Platform Enterprise",
      ecommerceSolution: "Solusi E-Commerce",
      mobileApplication: "Aplikasi Mobile",
      cloudInfrastructure: "Infrastruktur Cloud",
      digitalMarketingCampaign: "Kampanye Pemasaran Digital",
      dataAnalyticsPlatform: "Platform Analitik Data",
      webApplication: "Aplikasi Web",
      brandIdentityDesign: "Desain Identitas Brand",
      productDevelopment: "Pengembangan Produk",
      itConsulting: "Konsultasi IT",
      marketing: "Pemasaran",
      projectDesc1: "Platform enterprise yang komprehensif untuk mengoptimalkan operasional bisnis dan meningkatkan produktivitas tim.",
      projectDesc2: "Solusi e-commerce yang scalable dengan fitur lengkap untuk mendukung pertumbuhan bisnis online.",
      projectDesc3: "Aplikasi mobile yang user-friendly dengan performa tinggi dan pengalaman pengguna yang luar biasa.",
      projectDesc4: "Infrastruktur cloud yang aman dan reliable untuk mendukung operasional bisnis dengan efisiensi maksimal.",
      projectDesc5: "Kampanye pemasaran digital yang strategis untuk meningkatkan brand awareness dan konversi.",
      projectDesc6: "Platform analitik data yang powerful untuk membantu pengambilan keputusan bisnis yang data-driven.",
      projectDesc7: "Aplikasi web modern dengan teknologi terbaru dan desain yang responsif untuk berbagai perangkat.",
      projectDesc8: "Desain identitas brand yang kuat dan konsisten untuk membangun positioning yang jelas di pasar.",
    },
    careers: {
      title: "Karir",
      subtitle:
        "Bergabunglah dengan tim kami dan bantu membentuk masa depan teknologi. Kami mencari individu berbakat yang berbagi semangat kami untuk inovasi dan kesempurnaan.",
      applyNow: "Lamar Sekarang",
      dontSeePosition: "Tidak melihat posisi yang sesuai?",
      sendResume: "Kirim Resume Anda",
      generalApplication: "Lamaran Umum",
      generalApplicationText: "Kami selalu mencari individu berbakat untuk bergabung dengan tim kami. Kirimkan resume Anda dan kami akan mempertimbangkan Anda untuk peluang di masa depan.",
      applicationTitle: "Lamar Posisi",
      applicationSubtitle: "Isi formulir di bawah ini untuk melamar posisi ini. Kami akan meninjau aplikasi Anda dan menghubungi Anda segera.",
      personalInfo: "Informasi Pribadi",
      fullName: "Nama Lengkap",
      email: "Email",
      phone: "Telepon",
      address: "Alamat",
      coverLetter: "Surat Lamaran",
      uploadResume: "Unggah Resume",
      resumeFile: "File Resume",
      chooseFile: "Pilih File",
      noFileChosen: "Tidak ada file yang dipilih",
      submitApplication: "Kirim Lamaran",
      submitting: "Mengirim...",
      applicationSuccess: "Lamaran Berhasil Dikirim!",
      applicationSuccessMessage: "Terima kasih telah melamar posisi ini. Kami telah menerima aplikasi Anda dan akan meninjau dalam waktu 1-2 hari kerja. Kami akan menghubungi Anda melalui email jika Anda terpilih untuk tahap selanjutnya.",
      backToCareers: "Kembali ke Halaman Karir",
      nameRequired: "Nama lengkap wajib diisi",
      emailRequired: "Email wajib diisi",
      emailInvalid: "Masukkan email yang valid",
      phoneRequired: "Telepon wajib diisi",
      phoneInvalid: "Masukkan nomor telepon yang valid",
      addressRequired: "Alamat wajib diisi",
      coverLetterRequired: "Surat lamaran wajib diisi",
      resumeRequired: "Resume wajib diunggah",
      namePlaceholder: "Masukkan nama lengkap Anda",
      emailPlaceholder: "nama.anda@email.com",
      phonePlaceholder: "+62 812 3456 7890",
      addressPlaceholder: "Masukkan alamat lengkap Anda",
      coverLetterPlaceholder: "Ceritakan mengapa Anda tertarik dengan posisi ini dan bagaimana pengalaman Anda sesuai dengan kebutuhan kami...",
      fileFormatHint: "Format yang didukung: PDF, DOC, DOCX (Maks. 5MB)",
      seniorSoftwareEngineer: "Software Engineer Senior",
      productManager: "Product Manager",
      uxuiDesigner: "Desainer UX/UI",
      marketingSpecialist: "Spesialis Pemasaran",
      itConsultant: "Konsultan IT",
      businessAnalyst: "Business Analyst",
      engineering: "Engineering",
      product: "Product",
      design: "Design",
      marketing: "Marketing",
      consulting: "Consulting",
      business: "Business",
      remoteOnsite: "Remote / On-site",
      fulltime: "Full-time",
      jobDesc1: "Bergabunglah dengan tim engineering kami untuk mengembangkan solusi perangkat lunak yang inovatif dan scalable. Kami mencari kandidat yang berpengalaman dengan teknologi modern dan memiliki passion untuk menciptakan produk yang berdampak.",
      jobDesc2: "Memimpin pengembangan produk dari konsep hingga peluncuran. Bekerja sama dengan tim cross-functional untuk memastikan produk memenuhi kebutuhan pengguna dan tujuan bisnis.",
      jobDesc3: "Menciptakan desain yang menarik dan user-friendly untuk produk digital kami. Bekerja sama dengan tim product dan engineering untuk mewujudkan visi desain menjadi kenyataan.",
      jobDesc4: "Mengembangkan dan mengimplementasikan strategi pemasaran yang efektif untuk meningkatkan brand awareness dan mencapai tujuan bisnis. Mengelola kampanye digital dan tradisional.",
      jobDesc5: "Memberikan konsultasi IT strategis kepada klien untuk membantu mereka mengoptimalkan infrastruktur teknologi dan mencapai tujuan transformasi digital mereka.",
      jobDesc6: "Menganalisis kebutuhan bisnis dan mengidentifikasi peluang peningkatan. Bekerja sama dengan stakeholder untuk mengembangkan solusi yang tepat dan dapat diimplementasikan.",
    },
    contact: {
      title: "Hubungi Kami",
      subtitle: "Ada pertanyaan atau ingin bekerja sama dengan kami? Kami ingin mendengar dari Anda.",
      sendMessage: "Kirim pesan kepada kami",
      getInTouch: "Hubungi kami",
      address: "Alamat",
      phone: "Telepon",
      email: "Email",
      businessHours: "Jam Operasional",
      hours: "Senin - Jumat: 09:00 - 18:00\nSabtu: 10:00 - 16:00\nMinggu: Tutup",
      name: "Nama",
      emailLabel: "Email",
      phoneLabel: "Telepon",
      message: "Pesan",
      send: "Kirim Pesan",
      sending: "Mengirim...",
      thankYou: "Terima Kasih!",
      successMessage: "Pesan Anda telah berhasil dikirim. Kami akan segera menghubungi Anda.",
      nameRequired: "Nama wajib diisi",
      emailRequired: "Email wajib diisi",
      emailInvalid: "Masukkan email yang valid",
      phoneRequired: "Telepon wajib diisi",
      phoneInvalid: "Masukkan nomor telepon yang valid",
      messageRequired: "Pesan wajib diisi",
      namePlaceholder: "Nama lengkap Anda",
      emailPlaceholder: "email.anda@contoh.com",
      phonePlaceholder: "+62 812 3456 7890",
      messagePlaceholder: "Ceritakan tentang proyek atau pertanyaan Anda...",
    },
    footer: {
      description:
        "Memberdayakan bisnis dengan solusi cerdas. Kami memberikan keunggulan melalui inovasi, keahlian, dan dedikasi.",
      quickLinks: "Tautan Cepat",
      contactUs: "Hubungi Kami",
      allRightsReserved: "Hak Cipta",
      home: "Beranda",
      aboutUs: "Tentang Kami",
      services: "Layanan",
      projects: "Proyek",
      careers: "Karir",
      contact: "Kontak",
      address: "Alamat",
      phone: "Telepon",
      email: "Email",
      addressValue: "Jl. Bisnis No. 123, Suite 100\nKota, Provinsi 12345\nIndonesia",
      phoneValue: "+62 21 1234 5678",
      emailValue: "info@samplecompany.com",
    },
  },
  en: {
    nav: {
      home: "Home",
      about: "About",
      services: "Services",
      projects: "Projects",
      careers: "Careers",
      contact: "Contact",
      companyProfile: "Company Profile",
      visionMission: "Vision & Mission",
      ourTeam: "Our Team",
      serviceOverview: "Service Overview",
      productDevelopment: "Product Development",
      itConsulting: "IT Consulting",
      marketingSolution: "Marketing Solution",
      cloudSolutions: "Cloud Solutions",
      dataAnalytics: "Data Analytics",
      cybersecurity: "Cybersecurity",
    },
    home: {
      heroTitle: "Empowering Business With Intelligent Solutions – Sample Company",
      heroSubtitle:
        "We deliver cutting-edge technology solutions and strategic consulting services to help businesses thrive in the digital age. Our expertise spans product development, IT consulting, and comprehensive marketing solutions.",
      getStarted: "Get Started",
      learnMore: "Learn More",
      aboutCompany: "About Sample Company",
      aboutText1:
        "Sample Company is a leading technology company committed to empowering businesses with intelligent and innovative solutions. Founded with a vision to be a trusted partner in digital transformation, we have helped hundreds of companies across various industries achieve their business goals through the right technology.",
      aboutText2:
        "With an experienced team of experts and high dedication to quality, we provide comprehensive services ranging from product development, IT consulting, to digital marketing solutions. Every project we handle is specially designed according to client needs, ensuring optimal and sustainable results for long-term business growth.",
      aboutText3:
        "Our commitment to innovation, excellence, and integrity has made Sample Company the preferred choice for companies looking to grow in the digital era. We believe that the right technology, combined with mature strategies, can turn challenges into opportunities and lead businesses toward sustainable success.",
      ourServices: "Our Services",
      servicesSubtitle: "Comprehensive solutions tailored to meet your business needs",
      featuredProjects: "Featured Projects",
      projectsSubtitle: "Explore some of our recent successful projects",
      viewAllProjects: "View All Projects",
      serviceProductDev: "Transform your ideas into innovative products with our expert development team. We deliver scalable solutions that drive business growth.",
      serviceITConsulting: "Strategic IT consulting services to optimize your technology infrastructure and drive digital transformation across your organization.",
      serviceMarketing: "Comprehensive marketing strategies and solutions to elevate your brand, reach your target audience, and maximize your ROI.",
      serviceCloud: "Seamless cloud migration and management services to enhance scalability, security, and performance of your business operations.",
      serviceDataAnalytics: "Transform raw data into actionable insights with our advanced analytics solutions, helping you make informed business decisions.",
      serviceCybersecurity: "Protect your digital assets with comprehensive cybersecurity solutions, ensuring your business stays secure in an evolving threat landscape.",
    },
    common: {
      sampleNotice: "Sample Website Notice",
      sampleNoticeTitle: "Sample Website Notice",
      sampleNoticeText:
        "This website is a sample/demo website created for demonstration purposes only. All content, images, and information displayed are for illustrative purposes and do not represent an actual company or business.",
      iUnderstand: "I Understand",
      learnMore: "Learn More",
    },
    about: {
      companyProfile: "Company Profile",
      ourHistory: "Our History",
      ourMission: "Our Mission",
      ourValues: "Our Values",
      ourAchievements: "Our Achievements",
      historyText1:
        "Sample Company was founded in 2015 with a vision to become a trusted partner in digital transformation. Starting as a small IT consulting firm with a team of 5 people, we have grown into a leading technology company with over 200 experienced professionals across various technology fields.",
      historyText2:
        "Our journey began with a focus on developing web and mobile applications for local clients. Over time, we expanded our services to include strategic consulting, cloud solutions, cybersecurity, and digital marketing services. Every step in our journey has been driven by our commitment to deliver the best value to our clients.",
      historyText3:
        "Today, Sample Company has served over 500 clients from various industries, from startups to multinational corporations. We are proud of our track record of helping many companies achieve their business goals through the right technology and mature strategies.",
      missionText1:
        "Our mission is to provide innovative and strategic technology solutions to help businesses thrive in the digital age. We believe that every company, regardless of size, deserves access to the best technology that can transform how they operate and compete in the market.",
      missionText2:
        "By combining deep technical expertise with strong business understanding, we help our clients identify opportunities, overcome challenges, and achieve sustainable growth. We are committed to building long-term relationships with clients based on trust, transparency, and measurable results.",
      valuesList1: "Innovation - Continuously seeking new solutions and cutting-edge technology",
      valuesList2: "Quality - Committed to delivering the best results in every project",
      valuesList3: "Integrity - Upholding honesty and transparency in all aspects of business",
      valuesList4: "Collaboration - Working with clients as strategic partners",
      valuesList5: "Client Satisfaction - Prioritizing client needs and success above all else",
      achievementsText1:
        "Over the years, Sample Company has achieved various proud accomplishments. We have completed over 1000 successful projects, helped our clients improve operational efficiency by up to 40%, and have been recognized as one of the most trusted technology companies in the industry.",
      achievementsText2:
        "Our achievements are not only measured by the number of projects, but also by the positive impact we provide to clients. Many of our clients have experienced significant growth after working with us, both in terms of revenue, market share, and operational efficiency. We are proud to be part of their success.",
      vision: "Our Vision",
      mission: "Our Mission",
      visionText:
        "To be the leading provider of intelligent business solutions, empowering organizations worldwide to achieve their full potential through innovation, excellence, and transformative technology.",
      missionText:
        "To deliver exceptional value to our clients by providing cutting-edge technology solutions, strategic consulting services, and innovative products that drive business growth and digital transformation.",
      coreValues: "Our Core Values",
      innovation: "Innovation",
      excellence: "Excellence",
      integrity: "Integrity",
      innovationDesc: "Continuously pushing boundaries and embracing new technologies",
      excellenceDesc: "Committed to delivering the highest quality in everything we do",
      integrityDesc: "Building trust through transparency and ethical business practices",
      teamTitle: "Our Team",
      teamSubtitle:
        "Meet the talented individuals who make Sample Company a leader in innovation and excellence",
      ceo: "Chief Executive Officer",
      cto: "Chief Technology Officer",
      headProduct: "Head of Product Development",
      directorMarketing: "Director of Marketing",
      seniorITConsultant: "Senior IT Consultant",
      leadSoftwareEngineer: "Lead Software Engineer",
      businessDevManager: "Business Development Manager",
      uxuiDesigner: "UX/UI Designer",
      teamBio1: "Leading Sample Company with strategic vision and dedication to achieving excellence in every aspect of business. With over 15 years of experience in the technology industry.",
      teamBio2: "Overseeing all aspects of the company's technology and ensuring continuous innovation. Expert in system architecture and digital transformation with an outstanding track record.",
      teamBio3: "Leading the product development team to create innovative and user-friendly solutions. Experienced in managing products from concept to launch.",
      teamBio4: "Developing effective marketing strategies to increase brand awareness and market share. Specialist in digital marketing and brand positioning.",
      teamBio5: "Providing strategic IT consulting to clients to optimize their technology infrastructure. Expert in cloud computing and enterprise systems.",
      teamBio6: "Leading the engineering team in developing scalable and reliable software solutions. Experienced with various modern technologies and best practices.",
      teamBio7: "Developing new business relationships and expanding the client network. Focus on long-term business growth and client satisfaction.",
      teamBio8: "Creating engaging and intuitive user experiences. Specialist in interface design and user experience that prioritizes user needs.",
    },
    services: {
      title: "Our Services",
      subtitle: "Comprehensive solutions tailored to meet your business needs and drive growth",
      getInTouch: "Get in Touch",
      approach: "Our Approach",
      keyFeatures: "Key Features",
      developmentProcess: "Development Process",
      whyChooseUs: "Why Choose Us",
      consultingServices: "Consulting Services",
      ourExpertise: "Our Expertise",
      consultingMethodology: "Consulting Methodology",
      benefits: "Benefits",
      ourSolutions: "Our Solutions",
      strategyPlanning: "Strategy & Planning",
      resultsROI: "Results & ROI",
      productDevTitle: "Product Development",
      productDevDesc: "Transform your ideas into innovative products with our expert development team. We deliver scalable solutions that drive business growth and market success.",
      productDevIntro: "Transform your ideas into innovative products with our expert development team. We deliver scalable solutions that drive business growth and market success.",
      productDevApproach: "Our Approach",
      productDevApproachText1: "We follow a proven product development methodology, starting with in-depth research on market and user needs. Our team collaborates closely with clients to understand their vision and transform it into functional, user-friendly products. Each development stage is executed meticulously, ensuring high quality and alignment with business objectives.",
      productDevApproachText2: "We believe that successful products are not just about advanced technology, but also about understanding user needs and delivering exceptional experiences. With a user-centric approach, we ensure that every product we develop delivers real value and solves actual problems.",
      productDevFeatures1: "Full-stack development for web and mobile",
      productDevFeatures2: "Scalable and maintainable architecture",
      productDevFeatures3: "Integration with third-party systems and APIs",
      productDevFeatures4: "Comprehensive testing and quality assurance",
      productDevFeatures5: "Post-launch support and maintenance",
      productDevProcess: "Development Process",
      productDevProcessText1: "Our development process begins with a discovery and planning phase, where we analyze requirements, define scope, and create a clear roadmap. Next, we move into the design and prototyping phase to visualize concepts before development begins.",
      productDevProcessText2: "The development phase is executed using agile methodology, allowing for rapid iteration and continuous feedback. After development is complete, the product goes through rigorous testing before market launch. We also provide post-launch support to ensure optimal product performance.",
      productDevWhy: "Why Choose Us",
      productDevWhyText1: "With years of experience in product development, we have helped many companies create successful products in the market. Our team consists of experienced developers who master the latest technologies and industry best practices.",
      productDevWhyText2: "We don't just develop products, but also ensure they can grow along with business growth. With a focus on scalability, security, and user experience, we ensure that every product we develop is ready to face future challenges.",
      itConsultingTitle: "IT Consulting",
      itConsultingDesc: "Strategic IT consulting services to optimize your technology infrastructure and drive digital transformation across your organization.",
      itConsultingIntro: "Strategic IT consulting services to optimize your technology infrastructure and drive digital transformation across your organization.",
      itConsultingServices: "Consulting Services",
      itConsultingServicesText1: "We provide comprehensive IT consulting services to help organizations optimize their technology usage. From infrastructure assessment to digital transformation planning, our consulting team works closely with clients to identify improvement opportunities and implement the right solutions.",
      itConsultingServicesText2: "Our services include strategic consulting, system architecture, cloud migration, cybersecurity, and business process optimization. We understand that every organization has unique needs, which is why we provide solutions tailored to client conditions and business objectives.",
      itConsultingExpertise1: "System architecture and enterprise solutions",
      itConsultingExpertise2: "Cloud migration and infrastructure optimization",
      itConsultingExpertise3: "Cybersecurity and risk assessment",
      itConsultingExpertise4: "Digital transformation strategy",
      itConsultingExpertise5: "IT governance and best practices",
      itConsultingMethodology: "Consulting Methodology",
      itConsultingMethodologyText1: "Our consulting methodology begins with a comprehensive assessment phase to understand current technology conditions, challenges faced, and business objectives. Based on assessment findings, we develop a clear and implementable transformation roadmap.",
      itConsultingMethodologyText2: "During the implementation phase, we work closely with the client's internal team to ensure smooth transitions with minimal disruption. We also provide training and knowledge transfer to ensure the client's team can effectively manage the implemented solutions.",
      itConsultingBenefits: "Benefits",
      itConsultingBenefitsText1: "With our IT consulting services, organizations can optimize their technology investments, improve operational efficiency, and strengthen their competitive position in the market. We help clients make the right technology decisions based on data and industry best practices.",
      itConsultingBenefitsText2: "Additionally, we also help organizations prepare for future technology changes. With proper planning and implementation, our clients can quickly adapt to new technology trends and leverage them for business advantage.",
      marketingTitle: "Marketing Solutions",
      marketingDesc: "Comprehensive marketing strategies and solutions to elevate your brand, reach your target audience, and maximize your ROI.",
      marketingIntro: "Comprehensive marketing strategies and solutions to elevate your brand, reach your target audience, and maximize your ROI.",
      marketingServices: "Marketing Services",
      marketingServicesText1: "We provide comprehensive marketing services to help businesses increase brand awareness, reach the right target audience, and achieve their business objectives. From digital marketing strategies to traditional campaigns, our team has the expertise to develop and implement effective strategies.",
      marketingServicesText2: "Our services include digital marketing, content marketing, social media management, SEO/SEM, email marketing, and brand development. We understand that every business has different target audiences and objectives, which is why we develop strategies tailored to specific client needs.",
      marketingSolutions1: "Digital marketing and advertising",
      marketingSolutions2: "Content creation and content strategy",
      marketingSolutions3: "Social media management and engagement",
      marketingSolutions4: "SEO/SEM and search engine optimization",
      marketingSolutions5: "Brand development and positioning",
      marketingStrategy: "Strategy & Planning",
      marketingStrategyText1: "Our marketing strategy planning process begins with in-depth analysis of target audience, competitors, and brand positioning. Based on this analysis, we develop a comprehensive marketing strategy with clear objectives and measurable metrics.",
      marketingStrategyText2: "We use data and analytics to continuously optimize campaigns, ensuring that every marketing investment delivers optimal ROI. With a data-driven approach, we help clients make the right decisions and allocate budgets efficiently.",
      marketingResults: "Results & ROI",
      marketingResultsText1: "We are committed to delivering measurable results and positive ROI for every marketing campaign we manage. With comprehensive tracking and analytics, we ensure that every strategy and tactic implemented can be measured and optimized.",
      marketingResultsText2: "Many of our clients have experienced significant increases in brand awareness, lead generation, and revenue after working with us. We are proud to be a strategic partner that helps businesses achieve their marketing objectives and grow sustainably.",
      cloudSolutionsTitle: "Cloud Solutions",
      cloudSolutionsDesc: "Seamless cloud migration and management services to enhance scalability, security, and performance of your business operations.",
      dataAnalyticsTitle: "Data Analytics",
      dataAnalyticsDesc: "Transform raw data into actionable insights with our advanced analytics solutions, helping you make informed business decisions.",
      cybersecurityTitle: "Cybersecurity",
      cybersecurityDesc: "Protect your digital assets with comprehensive cybersecurity solutions, ensuring your business stays secure in an evolving threat landscape.",
    },
    projects: {
      title: "Our Projects",
      subtitle: "Explore our portfolio of successful projects and innovative solutions",
      enterprisePlatform: "Enterprise Platform",
      ecommerceSolution: "E-Commerce Solution",
      mobileApplication: "Mobile Application",
      cloudInfrastructure: "Cloud Infrastructure",
      digitalMarketingCampaign: "Digital Marketing Campaign",
      dataAnalyticsPlatform: "Data Analytics Platform",
      webApplication: "Web Application",
      brandIdentityDesign: "Brand Identity Design",
      productDevelopment: "Product Development",
      itConsulting: "IT Consulting",
      marketing: "Marketing",
      projectDesc1: "Comprehensive enterprise platform to optimize business operations and enhance team productivity.",
      projectDesc2: "Scalable e-commerce solution with comprehensive features to support online business growth.",
      projectDesc3: "User-friendly mobile application with high performance and exceptional user experience.",
      projectDesc4: "Secure and reliable cloud infrastructure to support business operations with maximum efficiency.",
      projectDesc5: "Strategic digital marketing campaign to increase brand awareness and conversions.",
      projectDesc6: "Powerful data analytics platform to help data-driven business decision making.",
      projectDesc7: "Modern web application with latest technology and responsive design for various devices.",
      projectDesc8: "Strong and consistent brand identity design to build clear positioning in the market.",
    },
    careers: {
      title: "Careers",
      subtitle:
        "Join our team and help shape the future of technology. We're looking for talented individuals who share our passion for innovation and excellence.",
      applyNow: "Apply Now",
      dontSeePosition: "Don't see a position that fits?",
      sendResume: "Send Your Resume",
      generalApplication: "General Application",
      generalApplicationText: "We're always looking for talented individuals to join our team. Send us your resume and we'll keep you in mind for future opportunities.",
      applicationTitle: "Apply for Position",
      applicationSubtitle: "Fill out the form below to apply for this position. We will review your application and get back to you soon.",
      personalInfo: "Personal Information",
      fullName: "Full Name",
      email: "Email",
      phone: "Phone",
      address: "Address",
      coverLetter: "Cover Letter",
      uploadResume: "Upload Resume",
      resumeFile: "Resume File",
      chooseFile: "Choose File",
      noFileChosen: "No file chosen",
      submitApplication: "Submit Application",
      submitting: "Submitting...",
      applicationSuccess: "Application Submitted Successfully!",
      applicationSuccessMessage: "Thank you for applying for this position. We have received your application and will review it within 1-2 business days. We will contact you via email if you are selected for the next stage.",
      backToCareers: "Back to Careers",
      nameRequired: "Full name is required",
      emailRequired: "Email is required",
      emailInvalid: "Please enter a valid email",
      phoneRequired: "Phone is required",
      phoneInvalid: "Please enter a valid phone number",
      addressRequired: "Address is required",
      coverLetterRequired: "Cover letter is required",
      resumeRequired: "Resume is required",
      namePlaceholder: "Enter your full name",
      emailPlaceholder: "your.name@email.com",
      phonePlaceholder: "+1 (555) 123-4567",
      addressPlaceholder: "Enter your full address",
      coverLetterPlaceholder: "Tell us why you're interested in this position and how your experience aligns with our needs...",
      fileFormatHint: "Supported formats: PDF, DOC, DOCX (Max. 5MB)",
      seniorSoftwareEngineer: "Senior Software Engineer",
      productManager: "Product Manager",
      uxuiDesigner: "UX/UI Designer",
      marketingSpecialist: "Marketing Specialist",
      itConsultant: "IT Consultant",
      businessAnalyst: "Business Analyst",
      engineering: "Engineering",
      product: "Product",
      design: "Design",
      marketing: "Marketing",
      consulting: "Consulting",
      business: "Business",
      remoteOnsite: "Remote / On-site",
      fulltime: "Full-time",
      jobDesc1: "Join our engineering team to develop innovative and scalable software solutions. We're looking for candidates experienced with modern technologies and passionate about creating impactful products.",
      jobDesc2: "Lead product development from concept to launch. Work with cross-functional teams to ensure products meet user needs and business objectives.",
      jobDesc3: "Create engaging and user-friendly designs for our digital products. Collaborate with product and engineering teams to bring design visions to life.",
      jobDesc4: "Develop and implement effective marketing strategies to increase brand awareness and achieve business objectives. Manage digital and traditional campaigns.",
      jobDesc5: "Provide strategic IT consulting to clients to help them optimize their technology infrastructure and achieve their digital transformation objectives.",
      jobDesc6: "Analyze business needs and identify improvement opportunities. Work with stakeholders to develop appropriate and implementable solutions.",
    },
    contact: {
      title: "Contact Us",
      subtitle: "Have a question or want to work with us? We'd love to hear from you.",
      sendMessage: "Send us a message",
      getInTouch: "Get in touch",
      address: "Address",
      phone: "Phone",
      email: "Email",
      businessHours: "Business Hours",
      hours: "Monday - Friday: 9:00 AM - 6:00 PM\nSaturday: 10:00 AM - 4:00 PM\nSunday: Closed",
      name: "Name",
      emailLabel: "Email",
      phoneLabel: "Phone",
      message: "Message",
      send: "Send Message",
      sending: "Sending...",
      thankYou: "Thank You!",
      successMessage: "Your message has been sent successfully. We'll get back to you soon.",
      nameRequired: "Name is required",
      emailRequired: "Email is required",
      emailInvalid: "Please enter a valid email",
      phoneRequired: "Phone is required",
      phoneInvalid: "Please enter a valid phone number",
      messageRequired: "Message is required",
      namePlaceholder: "Your full name",
      emailPlaceholder: "your.email@example.com",
      phonePlaceholder: "+1 (555) 123-4567",
      messagePlaceholder: "Tell us about your project or inquiry...",
    },
    footer: {
      description:
        "Empowering businesses with intelligent solutions. We deliver excellence through innovation, expertise, and dedication.",
      quickLinks: "Quick Links",
      contactUs: "Contact Us",
      allRightsReserved: "All rights reserved",
      home: "Home",
      aboutUs: "About Us",
      services: "Services",
      projects: "Projects",
      careers: "Careers",
      contact: "Contact",
      address: "Address",
      phone: "Phone",
      email: "Email",
      addressValue: "123 Business Street, Suite 100\nCity, State 12345\nUnited States",
      phoneValue: "+1 (555) 123-4567",
      emailValue: "info@samplecompany.com",
    },
  },
};

