const PROJECTS = {
  'ecommerce-rfm': {
    number: '01', category: 'Data Analytics · Power BI', accent: '#73c8ff',
    title: 'E-Commerce Sales & RFM Segmentation',
    lead: 'Mengubah 51,290 transaksi menjadi dashboard penjualan dan lima segmen pelanggan yang dapat ditindaklanjuti.',
    image: '../assets/images/ecommerce-dashboard.jpg', imageAlt: 'Sales Performance Dashboard Power BI',
    metrics: [
      ['51,290', 'transaction records'], ['$8M', 'total sales'], ['128K', 'quantity sold'], ['5', 'RFM segments']
    ],
    challenge: 'Data transaksi yang besar tidak langsung menjawab pertanyaan bisnis: kategori apa yang paling berkontribusi, kanal mana yang dominan, dan pelanggan mana yang perlu dipertahankan atau diaktifkan kembali.',
    solution: 'Saya membersihkan dan menyiapkan data transaksi, membangun metrik penjualan, lalu menerapkan Recency, Frequency, dan Monetary analysis. Hasilnya disajikan dalam dua halaman Power BI: Sales Performance dan Customer Segmentation.',
    outcomes: [
      'Fashion menjadi kategori terbesar dengan kontribusi sekitar $4.3M.',
      'Web mendominasi kanal transaksi dengan 92.79% dari total sales.',
      'Segmentasi menunjukkan At Risk sebagai kelompok terbesar (35.89%) dan Champions sebesar 20.09%.',
      'Dashboard menyatukan KPI, tren bulanan, produk teratas, profil kanal, dan distribusi segmen.'
    ],
    process: [
      ['Audit data', 'Memeriksa struktur, nilai kosong, duplikasi, tipe data, dan konsistensi transaksi.'],
      ['Prepare metrics', 'Membentuk sales, quantity, category, device, serta fitur recency, frequency, dan monetary.'],
      ['Segment customers', 'Mengubah skor RFM menjadi lima kelompok pelanggan yang mudah dipakai tim bisnis.'],
      ['Design dashboard', 'Menyusun hierarchy visual dari KPI ringkas menuju detail tren dan segmentasi.']
    ],
    technologies: ['Power BI', 'Python', 'Pandas', 'RFM Analysis', 'Data Cleaning', 'Data Visualization'],
    facts: [['Role', 'Data Analyst'], ['Deliverables', '2-page dashboard + analysis deck'], ['Focus', 'Sales performance & customer segmentation'], ['Status', 'Completed']],
    actions: [
      ['Buka dashboard PDF', '../assets/documents/Ecommerce-RFM-Dashboard.pdf'],
      ['Lihat presentasi', 'https://canva.link/pqzmha673f6pobu']
    ],
    next: ['lq45-forecasting.html', 'LQ45 Energy Stock Forecasting']
  },
  'lq45-forecasting': {
    number: '02', category: 'Deep Learning · Time Series', accent: '#a98bff',
    title: 'LQ45 Energy Stock Forecasting',
    lead: 'Membandingkan LSTM dan GRU untuk prediksi multi-step tujuh saham energi pada empat horizon waktu.',
    coverSymbol: 'LSTM',
    image: '../assets/images/projects/02-lq45-forecasting/lq45.png',
    imageAlt: 'Grafik prediksi harga penutupan saham AKRA selama 10 hari menggunakan model LSTM',
    metrics: [
      ['7', 'energy stocks'], ['4', 'forecast horizons'], ['2.30%', 'best final MAPE'], ['20', 'Optuna trials / candidate']
    ],
    challenge: 'Harga saham bersifat temporal, volatil, dan dipengaruhi perubahan struktur seperti stock split. Evaluasi juga harus menjaga urutan waktu agar informasi masa depan tidak bocor ke proses pelatihan.',
    solution: 'Saya membangun pipeline time-series multivariat dengan filtering stock split, interpolasi hari kerja, sliding IQR, winsorization, MinMax scaling, dan direct multi-step forecasting. LSTM dan GRU diuji untuk input 60/90/120 hari serta output 5/10/20/30 hari.',
    outcomes: [
      'Model terbaik keseluruhan adalah LSTM pada ITMG horizon 5 hari dengan MAPE 2.30%.',
      'Dari 28 model pemenang akhir, 16 menggunakan GRU dan 12 menggunakan LSTM.',
      'Optuna menurunkan MAPE pada seluruh kandidat model yang dituning.',
      'Aplikasi Streamlit menyajikan prediksi, visualisasi, dan tabel hasil secara interaktif.'
    ],
    process: [
      ['Prepare series', 'Menangani missing value, stock split, missing time point, dan outlier tanpa merusak urutan temporal.'],
      ['Build windows', 'Membentuk input 60/90/120 hari dan target 5/10/20/30 hari dengan split kronologis 80:20.'],
      ['Train & tune', 'Membandingkan baseline LSTM/GRU lalu menjalankan Bayesian optimization dengan Optuna.'],
      ['Evaluate & deploy', 'Mengukur RMSE, MAE, MAPE, waktu training/inference, lalu mengekspor model ke aplikasi.']
    ],
    technologies: ['Python', 'TensorFlow', 'Keras', 'LSTM', 'GRU', 'Optuna', 'scikit-learn', 'Streamlit'],
    facts: [['Role', 'Machine Learning Researcher'], ['Dataset', 'IDX daily trading data'], ['Primary metric', 'MAPE'], ['Research year', '2025']],
    actions: [
      ['Buka live app', 'https://lq45-energy-stock-forecasting.streamlit.app/'],
      ['Lihat repository', 'https://github.com/SultanShalahuddin/lq45-energy-stock-forecasting']
    ],
    next: ['shopee-absa.html', 'ReviewScope — Shopee ABSA']
  },
  'shopee-absa': {
    number: '03', category: 'Natural Language Processing', accent: '#ff8f78',
    title: 'ReviewScope — Shopee ABSA',
    lead: 'Menganalisis sentimen per aspek pada ulasan Shopee Indonesia dengan IndoBERT yang dioptimalkan untuk CPU.',
    coverSymbol: 'ABSA',
    image: '../assets/images/projects/03-shopee-absa/absa%20analysis.png',
    imageAlt: 'Tampilan hasil analisis sentimen ReviewScope untuk delapan aspek layanan Shopee',
    metrics: [
      ['6,176', 'curated reviews'], ['8', 'service aspects'], ['84.07%', 'INT8 test macro F1'], ['250 ms', 'production latency / review']
    ],
    challenge: 'Rating bintang tidak menunjukkan aspek mana yang dipuji atau dikeluhkan. Data juga sangat tidak seimbang: sebagian besar pasangan review–aspek tidak menyebut aspek tertentu.',
    solution: 'Saya membangun dataset 49,408 pasangan review–aspek, melakukan tuning IndoBERT dengan weighted cross entropy, lalu mengekspor model menjadi ONNX INT8. Frontend Next.js memanggil FastAPI dan menyimpan histori analisis ke Supabase.',
    outcomes: [
      'Model ONNX INT8 mencapai test macro F1 84.07% dan accuracy 96.93%.',
      'Aspect-detection F1 mencapai 94.99% pada test set.',
      'Ukuran model turun dari 474.740 MiB menjadi 230.897 MiB setelah quantization.',
      'Aplikasi production aktif di Vercel dengan frontend dan backend terpisah.'
    ],
    process: [
      ['Curate reviews', 'Menghapus duplikasi, memfilter teks pendek, menormalisasi slang, dan menyeleksi bahasa Indonesia.'],
      ['Label aspects', 'Menggabungkan eksplorasi BERTopic, kalibrasi manual, pelabelan berbantuan GPT, dan validasi format.'],
      ['Tune model', 'Membandingkan empat eksperimen IndoBERT dengan validation macro F1 sebagai metrik utama.'],
      ['Optimize production', 'Melakukan export ONNX, dynamic INT8 quantization, golden test, dan deployment Vercel.']
    ],
    technologies: ['IndoBERT', 'PyTorch', 'ONNX Runtime', 'FastAPI', 'Next.js', 'TypeScript', 'Supabase', 'Vercel'],
    facts: [['Role', 'NLP / Full-stack ML Engineer'], ['Labels', '4 sentiment classes'], ['Test set', '618 reviews · 4,944 pairs'], ['Deployment', 'Vercel production']],
    actions: [
      ['Buka live app', 'https://reviewscope-absa-app.vercel.app'],
      ['Lihat repository', 'https://github.com/SultanShalahuddin/shopee-absa-app'],
      ['Lihat presentasi', 'https://docs.google.com/presentation/d/1Yt9WnoOAGz-aDBIiX_y2gcuPKWteK093/edit?usp=sharing']
    ],
    next: ['house-price-mlops.html', 'House Price Prediction MLOps']
  },
  'house-price-mlops': {
    number: '04', category: 'Machine Learning Operations', accent: '#b8ff3d',
    title: 'House Price Prediction MLOps',
    lead: 'Pipeline regresi production-style dengan experiment tracking, model registry, API serving, dan drift monitoring.',
    coverSymbol: 'OPS',
    image: '../assets/images/projects/04-house-price-mlops/mlops.png',
    imageAlt: 'Dashboard monitoring Grafana untuk request rate, latency, versi model aktif, dan skor drift House Price Prediction',
    metrics: [
      ['8', 'available algorithms'], ['200+200', 'normal & drift requests'], ['5', 'operational services'], ['1', 'reproducible pipeline']
    ],
    challenge: 'Model yang akurat di notebook belum cukup. Pipeline perlu mencegah training-serving skew, melacak eksperimen, mengelola model aktif, melayani prediksi, dan mendeteksi data drift setelah deployment.',
    solution: 'Saya membungkus preprocessing, feature selection, dan estimator dalam satu scikit-learn Pipeline. MLflow menangani tracking dan registry, FastAPI melayani inference, sementara Prometheus dan Grafana memantau request, error, latency, serta pergeseran distribusi.',
    outcomes: [
      'Delapan algoritma regresi tersedia melalui satu model factory dan konfigurasi yang konsisten.',
      'Model Registry memakai alias champion/challenger dan dapat di-reload melalui endpoint admin.',
      'Simulasi mengirim 200 request normal dan 200 request drift untuk menguji observability.',
      'Docker Compose menyatukan API, Prometheus, dan Grafana dalam lingkungan yang dapat direproduksi.'
    ],
    process: [
      ['Build pipeline', 'Menggabungkan preprocessing, feature selection, dan model menjadi satu artefak untuk training serta serving.'],
      ['Track experiments', 'Mencatat parameter, metrik, tag, dan artefak model di MLflow.'],
      ['Serve safely', 'Menyediakan /predict, /health, /metrics, dan /admin/reload melalui FastAPI serta validasi Pydantic.'],
      ['Monitor drift', 'Menggunakan KS-test, MAE, Prometheus, dan Grafana untuk mendeteksi perubahan data dan performa.']
    ],
    technologies: ['scikit-learn', 'MLflow', 'FastAPI', 'Docker', 'Prometheus', 'Grafana', 'Pytest', 'Pydantic'],
    facts: [['Role', 'MLOps Engineer'], ['Dataset', 'Ames Housing (Kaggle)'], ['Registry', 'MLflow champion/challenger'], ['Monitoring', 'Metrics + KS drift test']],
    actions: [['Lihat repository', 'https://github.com/SultanShalahuddin/Assignment-Day-49---House-Price-Prediction-MLOps']],
    next: ['smartshopper-rag.html', 'SmartShopper RAG Agent']
  },
  'smartshopper-rag': {
    number: '05', category: 'AI Agent · Retrieval Augmented Generation', accent: '#6de6dc',
    title: 'SmartShopper RAG Agent',
    lead: 'Agent belanja yang menggabungkan rekomendasi personal dan jawaban kebijakan berbasis sumber.',
    coverSymbol: 'RAG',
    image: '../assets/images/projects/05-smartshopper-rag/rag.png',
    imageAlt: 'Tampilan SmartShopper RAG Agent yang memberikan rekomendasi produk personal dan jawaban kebijakan garansi',
    metrics: [
      ['2', 'specialized tools'], ['16', 'policy documents'], ['8', 'information categories'], ['384', 'embedding dimensions']
    ],
    challenge: 'Pertanyaan belanja dapat meminta rekomendasi personal, informasi kebijakan, keduanya sekaligus, atau hal di luar scope. Sistem perlu memilih kapabilitas yang benar tanpa routing berbasis keyword yang rapuh.',
    solution: 'Google ADK dan Gemini mengorkestrasi dua FunctionTool. Product Recommendation membentuk weighted user embedding dari histori interaksi; Common Information mengambil konteks melalui MongoDB Atlas Vector Search dan menghasilkan jawaban yang dibatasi pada sumber tersebut.',
    outcomes: [
      'Lima skenario routing tervalidasi: produk, informasi exact, pencarian semantic, pertanyaan campuran, dan out-of-scope.',
      'Semantic retrieval menemukan dokumen garansi walau kata “garansi” tidak muncul di pertanyaan.',
      'Seluruh 16 dokumen kebijakan tersimpan dengan embedding 384 dimensi dan upsert idempotent.',
      'Jawaban Common Information menampilkan sumber dan diinstruksikan untuk tidak mengarang kebijakan di luar konteks.'
    ],
    process: [
      ['Define boundaries', 'Memetakan kapan masing-masing tool dipakai, termasuk pertanyaan campuran dan di luar scope.'],
      ['Build recommender', 'Menggabungkan click, wishlist, dan purchase menjadi weighted user embedding lalu menghitung cosine similarity.'],
      ['Build RAG tool', 'Menyimpan dokumen kebijakan, mencari Top-3 context di Atlas, lalu membatasi generasi pada context tersebut.'],
      ['Validate routing', 'Menguji koneksi, retrieval semantic, tool end-to-end, dan keputusan routing agent di ADK Web.']
    ],
    technologies: ['Google ADK', 'Gemini', 'MongoDB Atlas', 'Vector Search', 'Sentence Transformers', 'scikit-learn', 'Python'],
    facts: [['Role', 'AI Engineer'], ['Recommender data', '5 users · 12 products'], ['Knowledge base', '16 synthetic policy docs'], ['Status', 'Validated prototype']],
    actions: [['Lihat repository', 'https://github.com/SultanShalahuddin/smartshopper-agent-rag']],
    next: ['smartsplit-ai.html', 'SmartSplit Bill AI']
  },
  'smartsplit-ai': {
    number: '06', category: 'Computer Vision · Multimodal AI', accent: '#ffc75b',
    title: 'SmartSplit Bill AI',
    lead: 'Aplikasi multimodal untuk membaca struk, meninjau item, dan menghitung pembagian tagihan per peserta.',
    coverSymbol: 'VLM',
    image: '../assets/images/projects/06-smartsplit-ai/splitbill.png',
    imageAlt: 'Tampilan SmartSplit Bill AI saat mengunggah struk, menambahkan peserta, dan menetapkan item tagihan',
    metrics: [
      ['2', 'vision-language models'], ['2', 'sample receipts'], ['47%', 'Groq faster in sample'], ['3', 'core workflow steps']
    ],
    challenge: 'Struk memiliki layout, kualitas foto, label pajak, dan penulisan item yang beragam. Sistem harus mengubah gambar menjadi struktur data sekaligus menjaga perhitungan split bill tetap transparan.',
    solution: 'Aplikasi Streamlit memanggil Gemini atau Groq/Qwen untuk ekstraksi receipt terstruktur. Pengguna menambahkan peserta, menetapkan satu atau beberapa pembayar per item, lalu aplikasi membagi biaya tambahan secara proporsional terhadap subtotal masing-masing.',
    outcomes: [
      'Kedua model mengekstrak seluruh angka secara konsisten pada dua foto uji.',
      'Groq rata-rata 1.714 detik dan sekitar 47% lebih cepat dari Gemini pada sampel kecil ini.',
      'Gemini dipilih sebagai default prototype karena lebih tepat membaca beberapa label teks pada sampel.',
      'Evaluasi juga mendokumentasikan risiko rekonsiliasi total, kebutuhan edit hasil, dan rencana pengujian lebih luas.'
    ],
    process: [
      ['Upload receipt', 'Menerima gambar JPG, JPEG, atau PNG dan mengirimkannya langsung ke model multimodal.'],
      ['Extract structure', 'Mengubah gambar menjadi restoran, tanggal, item, quantity, harga, subtotal, biaya tambahan, dan total.'],
      ['Assign participants', 'Memungkinkan setiap item ditugaskan ke satu atau beberapa orang.'],
      ['Calculate report', 'Membagi item dan biaya tambahan, lalu menampilkan subtotal dan total setiap peserta.']
    ],
    technologies: ['Python', 'Streamlit', 'Gemini API', 'Groq', 'Qwen VLM', 'Pydantic', 'Computer Vision'],
    facts: [['Role', 'AI Application Developer'], ['Input', 'Receipt image'], ['Output', 'Itemized split report'], ['Status', 'Proof of concept']],
    actions: [['Lihat repository', 'https://github.com/SultanShalahuddin/smartsplit-bill-ai']],
    next: ['../#credentials', 'Kredensial'],
    nextLabel: 'Lanjut ke bagian berikutnya'
  }
};

(function renderProject() {
  const root = document.getElementById('project-root');
  const key = document.body.dataset.project;
  const project = PROJECTS[key];
  if (!root || !project) return;

  document.documentElement.style.setProperty('--project-accent', project.accent);
  document.documentElement.style.setProperty('--accent', project.accent);

  const actionButtons = project.actions.map(function (action, index) {
    return `<a class="button ${index === 0 ? 'accent' : 'secondary'}" href="${action[1]}" target="_blank" rel="noopener">${action[0]} <span aria-hidden="true">&#8599;</span></a>`;
  }).join('');

  const metrics = project.metrics.map(function (metric) {
    return `<div class="project-metric reveal"><strong>${metric[0]}</strong><span>${metric[1]}</span></div>`;
  }).join('');

  const process = project.process.map(function (step, index) {
    return `<div class="process-item"><b>${String(index + 1).padStart(2, '0')}</b><div><h3>${step[0]}</h3><p>${step[1]}</p></div></div>`;
  }).join('');

  const outcomes = project.outcomes.map(function (item) { return `<li>${item}</li>`; }).join('');
  const technologies = project.technologies.map(function (item) { return `<span class="tag">${item}</span>`; }).join('');
  const facts = project.facts.map(function (fact) { return `<div class="fact-row"><span>${fact[0]}</span><strong>${fact[1]}</strong></div>`; }).join('');
  const cover = project.image
    ? `<img src="${project.image}" alt="${project.imageAlt}">`
    : `<div class="cover-pattern" aria-hidden="true"><div class="cover-symbol">${project.coverSymbol}</div></div>`;

  root.innerHTML = `
    <section class="project-hero">
      <div class="container">
        <p class="eyebrow">${project.number} · ${project.category}</p>
        <h1>${project.title}</h1>
        <div class="project-lead">
          <p>${project.lead}</p>
          <div class="project-actions">${actionButtons}</div>
        </div>
        <div class="project-cover reveal" style="--project-accent:${project.accent}">${cover}</div>
        <div class="project-metrics">${metrics}</div>
      </div>
    </section>

    <section class="section">
      <div class="container project-layout">
        <div class="project-main">
          <article class="project-panel reveal"><p class="eyebrow">The challenge</p><h2>Turning complexity into a clear problem.</h2><p>${project.challenge}</p></article>
          <article class="project-panel reveal"><p class="eyebrow">The approach</p><h2>From raw input to usable output.</h2><p>${project.solution}</p><div class="process-list">${process}</div></article>
          <article class="project-panel reveal"><p class="eyebrow">Evidence & outcomes</p><h2>What the work demonstrated.</h2><ul>${outcomes}</ul></article>
        </div>
        <aside class="project-aside">
          <article class="project-panel reveal"><h3>Technology</h3><div class="tag-list">${technologies}</div></article>
          <article class="project-panel reveal"><h3>Project facts</h3><div class="fact-list">${facts}</div></article>
          <article class="project-panel reveal"><h3>Want the full context?</h3><p>Buka artefak atau repository untuk melihat dokumentasi, kode, hasil evaluasi, dan batasan proyek.</p><div class="hero-actions">${actionButtons}</div></article>
        </aside>
      </div>
      <div class="container"><a class="next-project reveal" href="${project.next[0]}"><div><span>${project.nextLabel || 'Next case study'}</span><strong>${project.next[1]}</strong></div><span class="project-arrow" aria-hidden="true">&#8594;</span></a></div>
    </section>`;

  if (window.initProjectReveal) window.initProjectReveal();
})();
