const books = [
  {title:'Physics 9th English Medium',author:'Punjab Text Book Board',price:0,category:'academic',className:'9th',cover:'sunset',label:'PHYSICS\n9TH',condition:'English Medium',keywords:['physics 9th english medium','physics','9th class','english medium','science','book','subject']},
  {title:'Physics 10th English Medium',author:'Punjab Text Book Board',price:0,category:'academic',className:'10th',cover:'sunset',label:'PHYSICS\n10TH',condition:'English Medium',pdfUrl:'books/Physics-10th-English-Medium.pdf',keywords:['physics 10th english medium','physics','10th class','english medium','science','book','subject']},

  {title:'Physics 9th Urdu Medium',author:'Punjab Text Book Board',price:0,category:'academic',className:'9th',cover:'teal',label:'PHYSICS\n9TH',condition:'Urdu Medium',keywords:['physics 9th urdu medium','physics','9th class','urdu medium','science','book','subject']},
  {title:'Chemistry 9th English Medium',author:'Punjab Text Book Board',price:0,category:'academic',className:'9th',cover:'coral',label:'CHEMISTRY\n9TH',condition:'English Medium',keywords:['chemistry 9th english medium','chemistry','9th class','english medium','science','book','subject']},
  {title:'Chemistry 9th Urdu Medium',author:'Punjab Text Book Board',price:0,category:'academic',className:'9th',cover:'gold',label:'CHEMISTRY\n9TH',condition:'Urdu Medium',keywords:['chemistry 9th urdu medium','chemistry','9th class','urdu medium','science','book','subject']},
  {title:'Biology 9th English Medium',author:'Punjab Text Book Board',price:0,category:'academic',className:'9th',cover:'sage',label:'BIOLOGY\n9TH',condition:'English Medium',keywords:['biology 9th english medium','biology','9th class','english medium','science','book','subject']},
  {title:'Biology 9th Urdu Medium',author:'Punjab Text Book Board',price:0,category:'academic',className:'9th',cover:'cream',label:'BIOLOGY\n9TH',condition:'Urdu Medium',keywords:['biology 9th urdu medium','biology','9th class','urdu medium','science','book','subject']},
  {title:'Math 9th English Medium',author:'Punjab Text Book Board',price:0,category:'academic',className:'9th',cover:'gold',label:'MATH\n9TH',condition:'English Medium',keywords:['math 9th english medium','math','mathematics','9th class','english medium','science','book','subject']},
  {title:'Math 9th Urdu Medium',author:'Punjab Text Book Board',price:0,category:'academic',className:'9th',cover:'coral',label:'MATH\n9TH',condition:'Urdu Medium',keywords:['math 9th urdu medium','math','mathematics','9th class','urdu medium','science','book','subject']},
  {title:'Pak Studies 9th English Medium',author:'Punjab Text Book Board',price:0,category:'academic',className:'9th',cover:'sunset',label:'PAK\nSTUDIES',condition:'English Medium',keywords:['pak studies 9th english medium','pak studies','9th class','english medium','social studies','book','subject']},
  {title:'Pak Studies 9th Urdu Medium',author:'Punjab Text Book Board',price:0,category:'academic',className:'9th',cover:'teal',label:'PAK\nSTUDIES',condition:'Urdu Medium',keywords:['pak studies 9th urdu medium','pak studies','9th class','urdu medium','social studies','book','subject']},
  {title:'Urdu 9th English Medium',author:'Punjab Text Book Board',price:0,category:'academic',className:'9th',cover:'sage',label:'URDU\n9TH',condition:'English Medium',keywords:['urdu 9th english medium','urdu','9th class','english medium','language','book','subject']},
  {title:'Urdu 9th Urdu Medium',author:'Punjab Text Book Board',price:0,category:'academic',className:'9th',cover:'cream',label:'URDU\n9TH',condition:'Urdu Medium',keywords:['urdu 9th urdu medium','urdu','9th class','urdu medium','language','book','subject']},
  {title:'English 9th English Medium',author:'Punjab Text Book Board',price:0,category:'academic',className:'9th',cover:'gold',label:'ENGLISH\n9TH',condition:'English Medium',keywords:['english 9th english medium','english','9th class','english medium','language','book','subject']},
  {title:'English 9th Urdu Medium',author:'Punjab Text Book Board',price:0,category:'academic',className:'9th',cover:'coral',label:'ENGLISH\n9TH',condition:'Urdu Medium',keywords:['english 9th urdu medium','english','9th class','urdu medium','language','book','subject']},

  {title:'Physics 10th English Medium',author:'Punjab Text Book Board',price:0,category:'academic',className:'10th',cover:'sunset',label:'PHYSICS\n10TH',condition:'English Medium',pdfUrl:'books/Physics-10th-English-Medium.pdf',keywords:['physics 10th english medium','physics','10th class','english medium','science','book','subject']},
  {title:'Physics 10th Urdu Medium',author:'Punjab Text Book Board',price:0,category:'academic',className:'10th',cover:'teal',label:'PHYSICS\n10TH',condition:'Urdu Medium',keywords:['physics 10th urdu medium','physics','10th class','urdu medium','science','book','subject']},
  {title:'Chemistry 10th English Medium',author:'Punjab Text Book Board',price:0,category:'academic',className:'10th',cover:'coral',label:'CHEMISTRY\n10TH',condition:'English Medium',keywords:['chemistry 10th english medium','chemistry','10th class','english medium','science','book','subject']},
  {title:'Chemistry 10th Urdu Medium',author:'Punjab Text Book Board',price:0,category:'academic',className:'10th',cover:'gold',label:'CHEMISTRY\n10TH',condition:'Urdu Medium',keywords:['chemistry 10th urdu medium','chemistry','10th class','urdu medium','science','book','subject']},
  {title:'Biology 10th English Medium',author:'Punjab Text Book Board',price:0,category:'academic',className:'10th',cover:'sage',label:'BIOLOGY\n10TH',condition:'English Medium',keywords:['biology 10th english medium','biology','10th class','english medium','science','book','subject']},
  {title:'Biology 10th Urdu Medium',author:'Punjab Text Book Board',price:0,category:'academic',className:'10th',cover:'cream',label:'BIOLOGY\n10TH',condition:'Urdu Medium',keywords:['biology 10th urdu medium','biology','10th class','urdu medium','science','book','subject']},
  {title:'Math 10th English Medium',author:'Punjab Text Book Board',price:0,category:'academic',className:'10th',cover:'gold',label:'MATH\n10TH',condition:'English Medium',keywords:['math 10th english medium','math','mathematics','10th class','english medium','science','book','subject']},
  {title:'Math 10th Urdu Medium',author:'Punjab Text Book Board',price:0,category:'academic',className:'10th',cover:'coral',label:'MATH\n10TH',condition:'Urdu Medium',keywords:['math 10th urdu medium','math','mathematics','10th class','urdu medium','science','book','subject']},
  {title:'Pak Studies 10th English Medium',author:'Punjab Text Book Board',price:0,category:'academic',className:'10th',cover:'sunset',label:'PAK\nSTUDIES',condition:'English Medium',keywords:['pak studies 10th english medium','pak studies','10th class','english medium','social studies','book','subject']},
  {title:'Pak Studies 10th Urdu Medium',author:'Punjab Text Book Board',price:0,category:'academic',className:'10th',cover:'teal',label:'PAK\nSTUDIES',condition:'Urdu Medium',keywords:['pak studies 10th urdu medium','pak studies','10th class','urdu medium','social studies','book','subject']},
  {title:'Urdu 10th English Medium',author:'Punjab Text Book Board',price:0,category:'academic',className:'10th',cover:'sage',label:'URDU\n10TH',condition:'English Medium',keywords:['urdu 10th english medium','urdu','10th class','english medium','language','book','subject']},
  {title:'Urdu 10th Urdu Medium',author:'Punjab Text Book Board',price:0,category:'academic',className:'10th',cover:'cream',label:'URDU\n10TH',condition:'Urdu Medium',keywords:['urdu 10th urdu medium','urdu','10th class','urdu medium','language','book','subject']},
  {title:'English 10th English Medium',author:'Punjab Text Book Board',price:0,category:'academic',className:'10th',cover:'gold',label:'ENGLISH\n10TH',condition:'English Medium',keywords:['english 10th english medium','english','10th class','english medium','language','book','subject']},
  {title:'English 10th Urdu Medium',author:'Punjab Text Book Board',price:0,category:'academic',className:'10th',cover:'coral',label:'ENGLISH\n10TH',condition:'Urdu Medium',keywords:['english 10th urdu medium','english','10th class','urdu medium','language','book','subject']}
];
const grid=document.querySelector('#bookGrid'),empty=document.querySelector('#emptyState');
const saleListings = JSON.parse(localStorage.getItem('kitabKornerListings') || JSON.stringify([
  {id:1,title:'Physics 10th English Medium',className:'10th',medium:'English',price:1600,sellerName:'Ali Hassan',address:'Lahore, Gulberg',phone:'0300-1234567',payment:'JazzCash'},
  {id:2,title:'Biology 10th English Medium',className:'10th',medium:'English',price:1500,sellerName:'Maryam Saleem',address:'Karachi, Gulshan',phone:'0312-7654321',payment:'JazzCash'},
  {id:3,title:'Math 9th English Medium',className:'9th',medium:'English',price:1200,sellerName:'Usman Ali',address:'Islamabad, F-8',phone:'0345-9876543',payment:'Easypaisa'}
]));
const appState = { currentUser: JSON.parse(localStorage.getItem('kitabKornerUser') || 'null') };

function normalizeText(value){ return String(value || '').trim().toLowerCase(); }
function websiteFeeFor(price){ const amount = Number(price) || 0; return Math.round(amount * 0.03 + 200); }
function ensureSignedIn(){ if (!appState.currentUser) { document.querySelector('#authDialog').showModal(); alert('Please sign in first to buy or sell a book.'); return false; } return true; }
function findMatchingListings(bookTitle, className, medium){
  return saleListings.filter(listing =>
    normalizeText(listing.title) === normalizeText(bookTitle) &&
    normalizeText(listing.className) === normalizeText(className) &&
    normalizeText(listing.medium) === normalizeText(medium)
  );
}
function saveListings(){ localStorage.setItem('kitabKornerListings', JSON.stringify(saleListings)); }
function getVisibleBooks(){
  const query=document.querySelector('#searchInput').value.toLowerCase().trim();
  const category=document.querySelector('.filter.active')?.dataset.category || 'all';
  const classFilter=document.querySelector('.class-filter.active')?.dataset.class || 'all';
  const sort=document.querySelector('#sortSelect').value;
  let visible=books.filter(book => {
    const inCategory = category === 'all' || book.category === category;
    const inClass = classFilter === 'all' || book.className === classFilter;
    return inCategory && inClass && matchesSearch(book, query);
  });
  if(sort==='price-low'||sort==='price-high')visible.sort((a,b)=>a.title.localeCompare(b.title));
  return visible;
}
function matchesSearch(book, query){
  const value=query.toLowerCase().trim();
  if(!value)return true;
  const haystack=`${book.title} ${book.author} ${book.category} ${book.keywords.join(' ')}`.toLowerCase();
  const words=haystack.split(/[^a-z0-9]+/).filter(Boolean);
  const queryParts=value.split(/\s+/).filter(Boolean);
  return queryParts.every(part=>haystack.includes(part) || words.some(word=>word.startsWith(part)));
}
function renderBooks(){
  const visible=getVisibleBooks();
  grid.innerHTML=visible.map(book=>`<article class="book-card" data-book-index="${books.indexOf(book)}"><div class="cover ${book.cover}"><button class="heart" aria-label="Save ${book.title}">♡</button><span>${book.label.replaceAll('\n','<br>')}</span><small>${book.author}</small></div><div class="card-info"><h3>${book.title}</h3><p class="meta">${book.author}</p><div class="price-row"><span class="price free-tag">Free</span><span class="condition">${book.condition}</span></div></div></article>`).join('');
  empty.style.display=visible.length?'none':'block';
}
function runSearch(openFirstMatch = false){
  const visible=getVisibleBooks();
  renderBooks();
  if(openFirstMatch && visible.length > 0){
    const match = visible[0];
    setTimeout(() => openBook(match), 80);
  }
}
document.querySelectorAll('.filter').forEach(filter=>filter.addEventListener('click',()=>{document.querySelector('.filter.active').classList.remove('active');filter.classList.add('active');renderBooks()}));
document.querySelectorAll('.class-filter').forEach(filter=>filter.addEventListener('click',()=>{document.querySelector('.class-filter.active').classList.remove('active');filter.classList.add('active');renderBooks()}));
document.querySelector('.view-all-button').addEventListener('click',()=>{document.querySelector('.filter.active').classList.remove('active');document.querySelector('.class-filter.active').classList.remove('active');document.querySelector('.filter[data-category="all"]').classList.add('active');document.querySelector('.class-filter[data-class="all"]').classList.add('active');renderBooks();document.querySelector('#browse').scrollIntoView({behavior:'smooth'});});
document.querySelector('#searchInput').addEventListener('input',() => runSearch(false));
document.querySelector('#searchInput').addEventListener('keydown',event => {
  if(event.key === 'Enter'){
    event.preventDefault();
    runSearch(true);
  }
});
document.querySelector('#searchButton').addEventListener('click',() => runSearch(true));
document.querySelector('#sortSelect').addEventListener('change',renderBooks);
document.querySelector('.profile-button').addEventListener('click',()=>document.querySelector('#authDialog').showModal());
document.querySelector('#sellButton').addEventListener('click',()=>document.querySelector('#sellDialog').showModal());
document.querySelector('#sellForm').addEventListener('submit',event=>{event.preventDefault();const title=document.querySelector('[name="title"]').value.trim()||'Your book';document.querySelector('#sellDialog').close();document.querySelector('#sellForm').reset();alert(`${title} has been added to the free library list!`)});
document.querySelector('#authForm').addEventListener('submit',event=>{
  event.preventDefault();
  const name = event.target.name.value.trim();
  const email = event.target.email.value.trim();
  appState.currentUser = { name: name || email.split('@')[0], email, password: event.target.password.value.trim() };
  localStorage.setItem('kitabKornerUser', JSON.stringify(appState.currentUser));
  document.querySelector('#authDialog').close();
  event.target.reset();
  alert(`Welcome! ${appState.currentUser.name} is now signed in.`);
});

document.querySelector('#buyBookForm').addEventListener('submit',event=>{
  event.preventDefault();
  if (!ensureSignedIn()) return;
  const formData = new FormData(event.target);
  const bookName = formData.get('bookName');
  const className = formData.get('className');
  const medium = formData.get('medium');
  const price = Number(formData.get('price'));
  const paymentMethod = formData.get('paymentMethod');
  const matches = findMatchingListings(bookName, className, medium);

  if (!matches.length) {
    alert(`No seller is currently listed for ${bookName} (${className}, ${medium}). Please check later or sell your own copy.`);
    event.target.reset();
    return;
  }

  const seller = matches[0];
  const websiteFee = websiteFeeFor(price || seller.price);
  const total = (Number(price) || Number(seller.price)) + websiteFee;
  const message = `Available seller found:\n${seller.sellerName} | ${seller.address}\nBook price: PKR ${seller.price}\nWebsite fee: PKR ${websiteFee}\nTotal payable: PKR ${total}\nPayment: ${paymentMethod || seller.payment}\n\nPlease confirm to continue purchase.`;
  const confirmBuy = window.confirm(message);
  if (confirmBuy) {
    alert(`Purchase request sent to ${seller.sellerName}. Payment method: ${paymentMethod || seller.payment}. Please pay through ${paymentMethod || seller.payment} and contact the seller for delivery.`);
  }
  event.target.reset();
});

document.querySelector('#sellBookForm').addEventListener('submit',event=>{
  event.preventDefault();
  if (!ensureSignedIn()) return;
  const formData = new FormData(event.target);
  const bookTitle = formData.get('bookTitle');
  const className = formData.get('className');
  const medium = formData.get('medium');
  const price = Number(formData.get('price'));
  const sellerName = formData.get('sellerName');
  const sellerAddress = formData.get('sellerAddress');
  const sellerPhone = formData.get('sellerPhone');

  const newListing = {
    id: Date.now(),
    title: bookTitle,
    className,
    medium,
    price,
    sellerName,
    address: sellerAddress,
    phone: sellerPhone,
    payment: 'JazzCash'
  };

  saleListings.push(newListing);
  saveListings();

  alert(`Your book has been listed for sale.\nSeller: ${sellerName}\nLocation: ${sellerAddress}\nPrice: PKR ${price}\nPlease wait for a buyer to contact you.`);
  event.target.reset();
});

function showToast(message, type = 'info') {
  const existingToast = document.querySelector('.site-toast');
  if (existingToast) existingToast.remove();

  const toast = document.createElement('div');
  toast.className = `site-toast ${type}`;
  toast.textContent = message;
  document.body.appendChild(toast);

  requestAnimationFrame(() => toast.classList.add('visible'));

  window.setTimeout(() => {
    toast.classList.remove('visible');
    window.setTimeout(() => toast.remove(), 300);
  }, 2600);
}

function updateSignedInState() {
  const profileButton = document.querySelector('.profile-button');
  if (!profileButton) return;

  const currentUser = JSON.parse(localStorage.getItem('kitabKornerUser') || 'null');
  if (currentUser && currentUser.name) {
    profileButton.innerHTML = `Hi, ${currentUser.name.split(' ')[0]} <span>→</span>`;
  } else {
    profileButton.innerHTML = 'Sign in <span>→</span>';
  }
}

function initSiteEnhancements() {
  const heroCopy = document.querySelector('.hero-copy');
  const searchInput = document.querySelector('#searchInput');
  const profileButton = document.querySelector('.profile-button');
  const navLinks = document.querySelectorAll('nav a');

  if (heroCopy && !document.querySelector('.status-pill')) {
    const statusPill = document.createElement('div');
    statusPill.className = 'status-pill';
    statusPill.innerHTML = '<span>Live</span> 9th & 10th class books ready';
    heroCopy.insertBefore(statusPill, heroCopy.querySelector('h1'));
  }

  if (heroCopy && !document.querySelector('.stat-row')) {
    const statRow = document.createElement('div');
    statRow.className = 'stat-row';
    statRow.innerHTML = `
      <div><strong>12k+</strong><span>Books</span></div>
      <div><strong>Free</strong><span>Access</span></div>
      <div><strong>24/7</strong><span>Browse</span></div>
    `;
    heroCopy.appendChild(statRow);
  }

  if (searchInput && !document.querySelector('.search-helper')) {
    const helper = document.createElement('div');
    helper.className = 'search-helper';
    helper.textContent = 'Try: Physics 10th • English Medium • Urdu Medium';
    searchInput.parentElement.appendChild(helper);
  }

  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      navLinks.forEach((item) => item.classList.toggle('active', item === link));
    });
  });

  if (profileButton) {
    profileButton.addEventListener('click', () => {
      document.querySelector('#authDialog').showModal();
    });
  }

  if (searchInput) {
    searchInput.addEventListener('focus', () => {
      searchInput.parentElement.classList.add('search-focused');
    });

    searchInput.addEventListener('blur', () => {
      searchInput.parentElement.classList.remove('search-focused');
    });
  }

  updateSignedInState();
  showToast('Welcome to KitabKorner — search your next subject book instantly.', 'info');
}

renderBooks();
initSiteEnhancements();
