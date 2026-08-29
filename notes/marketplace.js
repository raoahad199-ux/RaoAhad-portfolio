const bookDialog=document.querySelector('#bookDialog');
function getBookPages(book){
  const subjectName = book.title.replace(/\s*\d+(th|st|nd|rd)\s*/i, '').trim();
  const className = book.className || 'Academic';
  const medium = book.condition || 'Standard';
  const author = book.author || 'Punjab Text Book Board';
  const isUrdu = String(medium).toLowerCase().includes('urdu');

  if (isUrdu) {
    const urduSubjectMap = {
      Physics: 'فزکس',
      Chemistry: 'کیمسٹری',
      Biology: 'حیاتیات',
      Math: 'ریاضی',
      'Pak Studies': 'پاکستانی مطالعات',
      Urdu: 'اردو',
      English: 'انگریزی'
    };
    const subjectUrdu = urduSubjectMap[subjectName] || subjectName;
    const chapterSet = [
      'مقدمہ',
      'بنیادی تصورات',
      'تعریفیں اور حقائق',
      'مثالیں اور مشق',
      'کلیدی فارمولے اور اصول',
      'مختصر سوالات',
      'طویل سوالات',
      'عددی مسائل',
      'تجرباتی کام',
      'دوبارہ پڑھنے کی نوٹس',
      'بورڈ امتحانی تیاری',
      'حتمی خلاصہ'
    ];

    const pages = [];
    pages.push([
      `${book.title}`,
      `کلاس: ${className}`,
      `میڈیم: ${medium}`,
      `مصنف: ${author}`,
      '',
      'یہ مفت ڈیجیٹل کتاب تعلیم، مطالعہ، دوبارہ پڑھنے اور سیکھنے کے لیے فراہم کی گئی ہے۔',
      '',
      `${subjectUrdu} ایک اہم مضمون ہے جو طلبہ کے لیے سمجھ، تجزیہ، مسئلہ حل اور امتحانی تیاری میں مدد دیتا ہے۔ ہر باب کو غور سے پڑھنا، نوٹس بنانا اور مشق کرنی چاہیے۔`
    ].join('\n\n'));

    chapterSet.forEach((chapter, chapterIndex) => {
      const chapterText = [
        `باب ${chapterIndex + 1}: ${chapter}`,
        `اس باب میں ${subjectUrdu} کے اہم خیالات کو سادہ انداز میں سمجھایا جاتا ہے۔ طلبہ کو ہر تصور کو واضح طریقے سے پڑھنا چاہیے اور مثالوں کے ساتھ سمجھنا چاہیے۔`,
        `تعریفیں یاد رکھیں، مثالوں کا استعمال کریں، اور سوالات کی مشق مسلسل کریں۔ دہرانا حافظہ کو مضبوط کرتا ہے اور امتحان میں بہتر سوال کے جوابات لکھنے میں مدد دیتا ہے۔`,
        `کسی بھی موضوع کو بہتر سمجھنے کے لیے نوٹ بنائیں، فارمولے یاد رکھیں، اور مشکل سوالات دوبارہ دیکھیں۔ مختصر، صاف اور منظم نوٹس بہت فائدہ مند ہوتے ہیں۔`,
        `مثالیں سمجھنے کا بہترین طریقہ ہیں۔ ہر مثال کو قدم بہ قدم حل کریں تاکہ آپ اعتماد اور درستگی کے ساتھ جواب لکھ سکیں۔`,
        `تیاری کے لیے باب کا خلاصہ دیکھیں، نمونہ سوالات حل کریں، اور کمزور حصوں پر خاص توجہ دیں۔ مسلسل کوشش سے成绩 میں بہتری آتی ہے۔`,
        `یہ موضوع روزمرہ کے زندگی اور عملی علم سے بھی جا ملتا ہے، اس لیے یہ سیکھنا دلچسپ اور مفید بنتا ہے۔`
      ].join('\n\n');
      pages.push(chapterText);
    });

    const summaryPages = [
      `حتمی دوبارہ مطالعہ\n\n${subjectUrdu} کو آسانی سے سمجھنے کے لیے مسلسل مشق، دوبارہ پڑھنا اور اہم نکات یاد رکھنا ضروری ہے۔ مضبوط تیاری سے امتحان میں اعتماد پیدا ہوتا ہے۔`,
      `مطالعہ کا منصوبہ\n\nہر دن کچھ سبق پڑھیں، اہم نکات لکھیں، سوالات حل کریں اور ہفتہ وار دوبارہ مطالعہ کریں۔ چھوٹے دنوانے کے عمل سے بڑی کامیابی آتی ہے۔`,
      `امتحانی حکمت عملی\n\nامتحان سے پہلے کتاب کے متن، فارمولے، اہم تعریفیں اور مثالیں دوبارہ دیکھیں۔ اپنے جواب کو صاف، درست اور منظم رکھیں۔`,
      `نتیجہ\n\nیہ مکمل ڈیجیٹل کتاب مفت ہے۔ طلبہ اس کا استعمال مطالعہ، دوبارہ پڑھنے، مشق اور امتحانی تیاری کے لیے کر سکتے ہیں۔`
    ];

    summaryPages.forEach(page => pages.push(page));

    while (pages.length < 18) {
      pages.push(`اضافی مشق کا صفحہ\n\n${subjectUrdu} کی مطالعہ جاری رکھیں، سبق کو دوبارہ پڑھیں، سوالات حل کریں اور خلاصہ دیکھیں۔ مشق سے عادت بنتی ہے، دوبارہ پڑھنا اعتماد پیدا کرتا ہے۔`);
    }

    return pages;
  }

  const chapterSet = [
    `Introduction to ${subjectName}`,
    `Basic Concepts`,
    `Definitions and Facts`,
    `Examples and Practice`,
    `Key Formulas and Rules`,
    `Short Questions`,
    `Long Questions`,
    `Numerical Problems`,
    `Experimental Work`,
    `Revision Notes`,
    `Board Exam Preparation`,
    `Final Summary`
  ];

  const introText = `${subjectName} is an important subject for students of class ${className}. It develops understanding, logical thinking, and problem solving ability. Students should study every chapter carefully and revise regularly to build confidence for exams and daily learning.`;

  const pages = [];
  let current = [
    `${book.title}`,
    `Class: ${className}`,
    `Medium: ${medium}`,
    `Author: ${author}`,
    '',
    'This free digital textbook is provided for study, reading, revision, and learning support.',
    '',
    introText
  ];
  pages.push(current.join('\n\n'));

  chapterSet.forEach((chapter, chapterIndex) => {
    const chapterText = [
      `Chapter ${chapterIndex + 1}: ${chapter}`,
      `In this chapter, students learn the most important ideas of ${subjectName}. The chapter explains topics in a simple way so every learner can understand the main point without confusion.`,
      `Students should read definitions clearly, connect ideas with examples, and practice exercises regularly. Repetition helps memory and improves writing skills for exams.`,
      `For better understanding, use a notebook to write key points, formulas, and difficult questions. Revision becomes easier when notes are short, clear, and neatly organized.`,
      `Examples are the best way to understand a concept. When students solve examples step by step, they become more confident and accurate in answer writing.`,
      `To prepare well, review chapter summaries, solve sample questions, and focus on weak areas. Consistent effort leads to better marks and stronger academic confidence.`,
      `The topic also connects with daily life and practical knowledge. This makes learning more useful, interesting, and memorable for students in class ${className}.`
    ].join('\n\n');
    pages.push(chapterText);
  });

  const summaryPages = [
    `Final Revision\n\n${subjectName} becomes easier when students keep practicing, revising, and understanding the main logic behind each topic. Strong preparation leads to confidence in class tests, quizzes, and final examinations.`,
    `Study Plan\n\nRead the lesson, write important points, solve questions, and revise at the end of each week. A small daily effort creates large long-term success in academic performance.`,
    `Exam Strategy\n\nBefore the exam, review the textbook content, formulas, key definitions, and important examples. Focus on clarity, accuracy, and neat presentation in your answers.`,
    `Conclusion\n\nThis complete digital book is free to read and free to download. Students can use it for study, revision, practice, and school preparation. It is built to help learners access the full content of the subject in an easy and affordable way.`
  ];

  summaryPages.forEach(page => pages.push(page));

  while (pages.length < 18) {
    pages.push(`Additional Practice Page\n\nContinue studying ${subjectName} by revising the lesson, solving questions, and reviewing the chapter summary. Practice brings consistency, revision brings confidence, and confidence brings strong results.`);
  }

  return pages;
}
function drawPdfIllustration(pdf, accentColor, x, y, w, h, titleText){
  pdf.setFillColor(255,255,255);
  pdf.roundedRect(x, y, w, h, 18, 18, 'F');

  pdf.setFillColor(accentColor[0], accentColor[1], accentColor[2]);
  pdf.roundedRect(x + 18, y + 18, w - 36, 120, 18, 18, 'F');

  pdf.setTextColor(255,255,255);
  pdf.setFontSize(18);
  pdf.text(titleText, x + 30, y + 72);

  pdf.setFillColor(255,255,255);
  pdf.setDrawColor(255,255,255);
  pdf.setLineWidth(2);
  pdf.circle(x + 120, y + 200, 38, 'F');
  pdf.circle(x + 230, y + 200, 28, 'F');
  pdf.circle(x + 330, y + 200, 22, 'F');

  pdf.setFillColor(245, 246, 248);
  pdf.roundedRect(x + 110, y + 260, 250, 90, 18, 18, 'F');
  pdf.roundedRect(x + 390, y + 260, 200, 90, 18, 18, 'F');
  pdf.roundedRect(x + 110, y + 380, 480, 60, 18, 18, 'F');

  pdf.setDrawColor(200, 210, 220);
  pdf.setLineWidth(2);
  pdf.line(x + 140, y + 430, x + 540, y + 430);
  pdf.line(x + 140, y + 450, x + 500, y + 450);
  pdf.line(x + 140, y + 470, x + 470, y + 470);

  pdf.setFillColor(240, 247, 255);
  pdf.roundedRect(x + 120, y + 500, 450, 130, 18, 18, 'F');

  pdf.setTextColor(30, 41, 59);
  pdf.setFontSize(12);
  pdf.text('Concept', x + 150, y + 560);
  pdf.text('Practice', x + 290, y + 560);
  pdf.text('Revision', x + 430, y + 560);

  pdf.setDrawColor(accentColor[0], accentColor[1], accentColor[2]);
  pdf.setLineWidth(3);
  pdf.line(x + 150, y + 575, x + 260, y + 575);
  pdf.line(x + 290, y + 575, x + 400, y + 575);
  pdf.line(x + 430, y + 575, x + 520, y + 575);
}
function createBookPdf(book){
  if (!window.jspdf || !window.jspdf.jsPDF) {
    return null;
  }

  const { jsPDF } = window.jspdf;
  const pdf = new jsPDF({ unit: 'pt', format: 'a4' });
  const pages = getBookPages(book);
  const margin = 42;
  const pageWidth = pdf.internal.pageSize.getWidth();
  const pageHeight = pdf.internal.pageSize.getHeight();
  const maxWidth = pageWidth - margin * 2;
  const lineHeight = 17;

  const paletteMap = {
    'Physics': [76, 129, 255],
    'Chemistry': [255, 126, 95],
    'Biology': [32, 170, 118],
    'Math': [196, 123, 33],
    'Pak': [69, 132, 206],
    'Urdu': [163, 108, 193],
    'English': [108, 126, 230]
  };

  const subjectName = book.title.replace(/\s*\d+(th|st|nd|rd)\s*/i, '').trim();
  const accent = paletteMap[subjectName.split(' ')[0]] || [84, 124, 255];

  pages.forEach((pageText, index) => {
    if (index > 0) pdf.addPage();

    pdf.setFillColor(248, 249, 252);
    pdf.rect(0, 0, pageWidth, pageHeight, 'F');

    drawPdfIllustration(pdf, accent, 60, 60, pageWidth - 120, 260, index === 0 ? 'Cover Page' : `Chapter ${index}`);

    pdf.setTextColor(15, 23, 42);
    pdf.setFontSize(18);
    pdf.text(book.title, margin, margin + 350);
    pdf.setFontSize(10);
    pdf.text(`Class: ${book.className || 'Academic'} | Medium: ${book.condition || 'Standard'} | Author: ${book.author}`, margin, margin + 370);

    const lines = pdf.splitTextToSize(pageText, maxWidth);
    let y = margin + 395;
    lines.forEach((line) => {
      if (y > pageHeight - margin) {
        pdf.addPage();
        y = margin;
      }
      pdf.text(line, margin, y);
      y += lineHeight;
    });

    pdf.setTextColor(90, 99, 117);
    pdf.setFontSize(8);
    pdf.text(`Page ${index + 1}`, pageWidth - 60, pageHeight - 20);
  });

  return pdf;
}
function openPdfBook(book){
  if (book && book.pdfUrl) {
    const pdfWindow = window.open(book.pdfUrl, '_blank', 'noopener,noreferrer');
    if (!pdfWindow) {
      const link = document.createElement('a');
      link.href = book.pdfUrl;
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
      link.download = book.title.replaceAll(' ', '-') + '.pdf';
      document.body.appendChild(link);
      link.click();
      link.remove();
    }
    return;
  }

  const pdf = createBookPdf(book);
  if (!pdf) {
    alert('PDF support is not available right now. Please try again in a moment.');
    return;
  }

  const pdfBlob = pdf.output('blob');
  const pdfUrl = URL.createObjectURL(pdfBlob);
  const pdfWindow = window.open(pdfUrl, '_blank', 'noopener,noreferrer');

  if (!pdfWindow) {
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = `${book.title.replaceAll(' ', '-')}.pdf`;
    link.click();
  }
}
function renderReadView(book, pageIndex = 0){
  const pages = getBookPages(book);
  const safeIndex = Math.max(0, Math.min(pageIndex, pages.length - 1));
  const bookIndex = books.indexOf(book);
  const pageText = pages[safeIndex].replace(/\n/g, '<br><br>');
  document.querySelector('#bookDetails').innerHTML = `
    <button class="close-button" onclick="bookDialog.close()" aria-label="Close">×</button>
    <p class="eyebrow">Free reading</p>
    <h2>${book.title}</h2>
    <p class="detail-meta">${book.author} · ${book.condition} · ${book.category}</p>
    <div class="reader-box">
      <p class="detail-meta">Page ${safeIndex + 1} of ${pages.length}</p>
      <div class="book-page">${pageText}</div>
    </div>
    <div class="detail-actions">
      <button class="secondary-button" onclick="renderReadView(books[${bookIndex}], ${Math.max(0, safeIndex - 1)})" ${safeIndex === 0 ? 'disabled' : ''}>← Prev</button>
      <button class="secondary-button" onclick="openBook(books[${bookIndex}])">Back</button>
      <button class="primary-button" onclick="openPdfBook(books[${bookIndex}])">Open PDF <span>↓</span></button>
      <button class="secondary-button" onclick="renderReadView(books[${bookIndex}], ${Math.min(pages.length - 1, safeIndex + 1)})" ${safeIndex === pages.length - 1 ? 'disabled' : ''}>Next →</button>
    </div>
  `;
  bookDialog.showModal();
}
function readFreeBook(book){
  openPdfBook(book);
}
function downloadBook(book){
  if (book && book.pdfUrl) {
    const link = document.createElement('a');
    link.href = book.pdfUrl;
    link.download = book.title.replaceAll(' ', '-') + '.pdf';
    document.body.appendChild(link);
    link.click();
    link.remove();
    return;
  }

  const pdf = createBookPdf(book);
  if (!pdf) {
    alert('PDF support is not available right now. Please try again in a moment.');
    return;
  }

  const file = pdf.output('blob');
  const url = URL.createObjectURL(file);
  const link = document.createElement('a');
  link.href = url;
  link.download = `${book.title.replaceAll(' ', '-')}.pdf`;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}
function openBook(book){
  const bookIndex = books.indexOf(book);
  document.querySelector('#bookDetails').innerHTML = `
    <button class="close-button" onclick="bookDialog.close()" aria-label="Close">×</button>
    <p class="eyebrow">Book details</p>
    <h2>${book.title}</h2>
    <p class="detail-meta">${book.author} · ${book.condition} · ${book.category}</p>
    <p>This e-book is free to read and free to download. Enjoy it online or save the text version to your device.</p>
    <p class="detail-price">Free <small>for everyone</small></p>
    <div class="detail-actions">
      <button class="secondary-button" onclick="bookDialog.close()">← Back</button>
      <button class="primary-button" onclick="readFreeBook(books[${bookIndex}])">Read free online <span>→</span></button>
      <button class="secondary-button" onclick="downloadBook(books[${bookIndex}])">Download PDF <span>↓</span></button>
      <button class="secondary-button" onclick="window.print()">Print details</button>
    </div>
  `;
  bookDialog.showModal();
}
const originalRender=renderBooks;
renderBooks=function(){
  originalRender();
  document.querySelectorAll('.book-card').forEach((card, index) => {
    const title = card.querySelector('h3')?.textContent || '';
    const bookIndex = books.findIndex(book => book.title === title);
    card.dataset.bookIndex = String(bookIndex >= 0 ? bookIndex : index);
  });
};
const originalGrid=grid;
const observer=new MutationObserver(()=>{
  document.querySelectorAll('.book-card').forEach((card, index) => {
    const title = card.querySelector('h3')?.textContent || '';
    const bookIndex = books.findIndex(book => book.title === title);
    card.dataset.bookIndex = String(bookIndex >= 0 ? bookIndex : index);
  });
});
observer.observe(originalGrid,{childList:true});

grid.addEventListener('click', event => {
  const card = event.target.closest('.book-card');
  if (!card || event.target.closest('.heart')) return;
  const bookIndex = Number(card.dataset.bookIndex);
  if (Number.isNaN(bookIndex) || !books[bookIndex]) return;
  openBook(books[bookIndex]);
});

renderBooks();
document.querySelectorAll('.choice-card').forEach(card=>card.addEventListener('click',()=>card.classList.contains('sell-choice')?document.querySelector('#sellDialog').showModal():document.querySelector(card.dataset.target).scrollIntoView({behavior:'smooth'})));
