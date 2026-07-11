window.renderTerminal = function renderTerminal(language = 'en') {
  const terminal = document.getElementById('termBody');
  if (!terminal) return;

  const logs = {
    en: [
      ['[BOOT] loading profile: sayed_tanveer_ahmad', ''],
      ['[OK] IT support and infrastructure experience loaded', 'ok'],
      ['[OK] Microsoft 365, Windows Server and networking available', 'ok'],
      ['[OK] Multi-site CCTV and attendance systems operational', 'ok'],
      ['[WARN] expanding skills toward SOC and network security', 'warn'],
      ['[STATUS] available for new opportunities_', '']
    ],
    ur: [
      ['[BOOT] پروفائل لوڈ ہو رہا ہے: sayed_tanveer_ahmad', ''],
      ['[OK] آئی ٹی سپورٹ اور انفراسٹرکچر کا تجربہ موجود ہے', 'ok'],
      ['[OK] Microsoft 365، Windows Server اور نیٹ ورکنگ', 'ok'],
      ['[OK] CCTV اور حاضری کے نظام فعال ہیں', 'ok'],
      ['[WARN] SOC اور نیٹ ورک سکیورٹی کی طرف مہارت بڑھ رہی ہے', 'warn'],
      ['[STATUS] نئی ملازمت کے مواقع کے لیے دستیاب_', '']
    ],
    ar: [
      ['[BOOT] يتم تحميل الملف: sayed_tanveer_ahmad', ''],
      ['[OK] خبرة في دعم تقنية المعلومات والبنية التحتية', 'ok'],
      ['[OK] Microsoft 365 وWindows Server والشبكات', 'ok'],
      ['[OK] أنظمة المراقبة والحضور تعمل عبر عدة مواقع', 'ok'],
      ['[WARN] تطوير المهارات نحو SOC وأمن الشبكات', 'warn'],
      ['[STATUS] متاح لفرص عمل جديدة_', '']
    ]
  };

  terminal.innerHTML = '';
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  (logs[language] || logs.en).forEach(([text, className], index) => {
    const line = document.createElement('div');
    line.className = `line ${className}`.trim();
    line.textContent = text;
    if (!reduceMotion) line.style.animationDelay = `${index * 0.35}s`;
    else line.style.opacity = '1';
    terminal.appendChild(line);
  });

  const caret = document.createElement('span');
  caret.className = 'caret';
  terminal.appendChild(caret);
};
