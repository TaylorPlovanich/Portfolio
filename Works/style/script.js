const categories = [
    { id: 'all', label: 'All' },
    { id: 'graphic-design', label: 'Graphic Design', color: 'var(--c-graphic)' },
    { id: 'illustration', label: 'Illustration', color: 'var(--c-illustration)' },
    { id: 'motion-design', label: 'Motion Design', color: 'var(--c-motion)' },
    { id: 'video-production', label: 'Video Production', color: 'var(--c-video)' },
    { id: 'web-design', label: 'Web Design', color: 'var(--c-web)' },
    { id: 'game-design', label: 'Game Design', color: 'var(--c-game)' },
    { id: '3d-art', label: '3D Art', color: 'var(--c-3d)' },
  ];
  
  const projects = [
    {
      id: 'buffalo-bridge',
      category: 'graphic-design',
      title: 'Buffalo Bridge — Logo Mockups',
      caption: 'A logo I designed from scratch for a made-up company, applied across mockups to show it in real-world context.',
      type: 'images',
      images: ['Images/mock5.jpg', 'Images/mock3.jpg'],
    },
    {
      id: 'clockwork-orange',
      category: 'graphic-design',
      title: 'A Clockwork Orange',
      caption: 'A reimagined film poster, redesigned in Photoshop.',
      type: 'image',
      images: ['Images/AClockworkOrangeposterFinal.jpg'],
    },
    {
      id: 'unforgiven',
      category: 'graphic-design',
      title: 'Unforgiven',
      caption: 'Another film poster reimagined in Photoshop.',
      type: 'image',
      images: ['Images/UnforgivenPosterFinal4.jpg'],
    },
    {
      id: 'blue-shell',
      category: 'illustration',
      title: 'Mario Kart Blue Shell',
      caption: 'A vector reinterpretation of the blue shell, illustrated from scratch in Illustrator.',
      type: 'image',
      images: ['Images/BlueShellFinal.jpg'],
    },
    {
      id: 'fitness-app',
      category: 'motion-design',
      title: 'Fitness App',
      caption: 'Motion design piece built in After Effects.',
      type: 'video',
      videoId: 'AWSv6XKWUGg',
    },
    {
      id: 'text-movement',
      category: 'motion-design',
      title: 'Text Movement Demo',
      caption: 'Exploring animated typography and timing in After Effects.',
      type: 'video',
      videoId: '0few5I1cjik',
    },
    {
      id: 'yt-promo',
      category: 'motion-design',
      title: 'YouTube Channel Promo',
      caption: 'A short promo animation for a YouTube channel.',
      type: 'video',
      videoId: 'sZzlJNQVxpI',
    },
    {
      id: 'one-piece',
      category: 'video-production',
      title: 'One Piece Montage',
      caption: 'Still images from One Piece arranged into a moving montage, edited in Premiere Pro.',
      type: 'video',
      videoId: 'gLqdIfEQ9Ic',
    },
    {
      id: 'rm-liquor',
      category: 'web-design',
      title: 'RM Liquor',
      caption: 'A retail website built during a former role at the store. Still live today.',
      type: 'link',
      links: [
        { label: 'Visit rmliquor.com', url: 'https://www.rmliquor.com/' },
      ],
    },
    {
      id: 'creative-aging',
      category: 'web-design',
      title: 'Creative Aging — Montana State Library',
      caption: 'Built as a Web Design & Database Intern: page layout and content, working from photos and program info provided by the library.',
      type: 'link',
      links: [
        { label: 'Program overview', url: 'https://msl.mt.gov/libraries/lifelonglearning/Creative_aging1/Creative_Aging' },
        { label: 'Teaching Artists', url: 'https://msl.mt.gov/libraries/lifelonglearning/Creative_aging1/page' },
      ],
    },
    {
      id: 'caelum',
      category: 'game-design',
      title: 'Caelum',
      caption: 'A tight four-level platformer about a journey through the stars — arcade mechanics mixed with environmental puzzles, hand-placed assets, a dynamic health system, and a multi-stage boss fight to close it out.',
      type: 'link',
      links: [
        { label: 'Play on itch.io', url: 'https://rosetta-stoned.itch.io/game-7-gamemaker-platformer' },
      ],
    },
    {
      id: 'shards-of-ruin',
      category: 'game-design',
      title: 'Shards of Ruin',
      caption: "A fast-paced action platformer where your only weapon is also your most fragile tool. You're a lone traveler crossing a shattered world, using ancient crystals to hold back the shadows.",
      type: 'link',
      links: [
        { label: 'Play on itch.io', url: 'https://rosetta-stoned.itch.io/shards-of-ruin' },
      ],
    },
    {
      id: 'the-developer',
      category: 'game-design',
      title: 'The Developer',
      caption: 'A narrative exploration game about clearing a path through the wilderness for an approaching engine — which means striking a deal with a witch to the East and finding what she needs first.',
      type: 'link',
      links: [
        { label: 'Play on itch.io', url: 'https://rosetta-stoned.itch.io/the-developer' },
      ],
    },
    {
      id: 'elk-bear',
      category: '3d-art',
      title: 'Elk-Bear Hybrid',
      caption: 'A made-up creature combining an elk and a bear, modeled in Blender for a class assignment focused on body modeling.',
      type: 'images',
      images: ['Images/ElkBear2.jpg', 'Images/ElkBear3.jpg', 'Images/ElkBear4.jpg'],
      externalLink: { label: 'View on ArtStation', url: 'https://www.artstation.com/artwork/OvLPLw' },
    },
    {
      id: 'superhero-sculpt',
      category: '3d-art',
      title: 'Superhero Sculpt — Conflicting Emotions',
      caption: 'A character sculpt built in Blender for an assignment around conveying two conflicting emotions at once — a strong, imposing character shown breaking down, with a single tear as the key detail.',
      type: 'images',
      images: ['Images/Superhero1.jpg', 'Images/Superhero2.jpg', 'Images/Superhero3.jpg'],
      externalLink: { label: 'View on ArtStation', url: 'https://www.artstation.com/artwork/GvxN24' },
    },
  ];
  
  function catMeta(id){
    return categories.find(c => c.id === id);
  }
  
  const filtersEl = document.getElementById('filters');
  let activeFilter = 'all';
  
  categories.forEach(cat => {
    const btn = document.createElement('button');
    btn.className = 'filter-btn' + (cat.id === 'all' ? ' active' : '');
    btn.dataset.cat = cat.id;
    if(cat.color){
      btn.innerHTML = `<span class="dot" style="color:${cat.color}"></span>${cat.label}`;
    } else {
      btn.textContent = cat.label;
    }
    btn.addEventListener('click', () => {
      activeFilter = cat.id;
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      applyFilter();
    });
    filtersEl.appendChild(btn);
  });
  
  const gridEl = document.getElementById('grid');
  
  projects.forEach(p => {
    const meta = catMeta(p.category);
    const card = document.createElement('div');
    card.className = 'card';
    card.dataset.cat = p.category;
  
    let thumbInner;
    if(p.type === 'video'){
      thumbInner = `<div class="thumb" style="background: linear-gradient(135deg, ${meta.color}33, #1c1c20);">
           <span>${p.title}</span>
           <div class="play-badge">
             <svg viewBox="0 0 24 24" fill="white"><circle cx="12" cy="12" r="11" fill="rgba(0,0,0,0.35)"/><path d="M10 8l6 4-6 4V8z" fill="white"/></svg>
           </div>
         </div>`;
    } else if(p.type === 'link'){
      thumbInner = `<div class="thumb" style="background: linear-gradient(135deg, ${meta.color}33, #1c1c20);">
           <span>${p.title}</span>
           <div class="play-badge">
             <svg viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><circle cx="12" cy="12" r="11" fill="rgba(0,0,0,0.35)" stroke="none"/><path d="M9 15l6-6M9 9h6v6"/></svg>
           </div>
         </div>`;
    } else {
      thumbInner = `<div class="thumb" style="background: linear-gradient(135deg, ${meta.color}33, #1c1c20);">
           <img src="${p.images[0]}" alt="${p.title}" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';" />
           <span style="display:none; position:absolute; inset:0; align-items:center; justify-content:center; padding:12px;">${p.images[0].split('/').pop()}</span>
         </div>`;
    }
  
    card.innerHTML = `
      <div style="position:relative;">
        <span class="cat-tag" style="background:${meta.color};">${meta.label}</span>
        ${thumbInner}
      </div>
      <div class="card-body" style="border-top-color:${meta.color};">
        <h3>${p.title}</h3>
        <p>${p.caption}</p>
        ${p.type === 'images' && p.images.length > 1 ? `<div class="multi-note">${p.images.length} images — click to view all</div>` : ''}
        ${p.type === 'link' && p.links.length > 1 ? `<div class="multi-note">${p.links.length} pages — click to view</div>` : ''}
      </div>
    `;
  
    card.addEventListener('click', () => openModal(p));
    gridEl.appendChild(card);
  });
  
  function applyFilter(){
    const cards = document.querySelectorAll('.card');
    let visibleCount = 0;
    cards.forEach(card => {
      const match = activeFilter === 'all' || card.dataset.cat === activeFilter;
      card.classList.toggle('hidden', !match);
      if(match) visibleCount++;
    });
    document.getElementById('count').textContent = `Showing ${visibleCount} of ${projects.length}`;
    revealVisible();
  }
  
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        entry.target.classList.add('in-view');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });
  
  function revealVisible(){
    document.querySelectorAll('.card:not(.hidden):not(.in-view)').forEach(card => observer.observe(card));
  }
  
  applyFilter();
  
  const overlay = document.getElementById('modalOverlay');
  const modal = document.getElementById('modal');
  let currentProject = null;
  let currentImageIndex = 0;
  
  function openModal(project){
    currentProject = project;
    currentImageIndex = 0;
    renderModal();
    overlay.classList.add('open');
  }
  
  function closeModal(){
    overlay.classList.remove('open');
    currentProject = null;
  }
  
  function renderModal(){
    const p = currentProject;
    let mediaHTML = '';
  
    if(p.type === 'video'){
      mediaHTML = `<iframe src="https://www.youtube.com/embed/${p.videoId}" title="${p.title}" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
    } else if(p.type === 'link'){
      mediaHTML = `<div style="color:var(--muted); font-size:0.9rem; text-align:center; padding:20px;">Live site — opens in a new tab</div>`;
    } else {
      const imgSrc = p.images[currentImageIndex];
      mediaHTML = `<img src="${imgSrc}" alt="${p.title}" onerror="this.replaceWith(Object.assign(document.createElement('div'), {textContent: '${imgSrc.split('/').pop()}', style: 'color:#9a98a2; font-size:0.85rem;'}))" />`;
  
      if(p.images.length > 1){
        mediaHTML += `
          <button class="modal-nav prev" onclick="changeImage(-1)">&#8592;</button>
          <button class="modal-nav next" onclick="changeImage(1)">&#8594;</button>
        `;
      }
    }
  
    modal.innerHTML = `
      <div class="modal-media">
        <button class="modal-close" onclick="closeModal()">&times;</button>
        ${mediaHTML}
      </div>
      <div class="modal-body">
        <h2>${p.title}</h2>
        <p>${p.caption}</p>
        ${p.type === 'images' && p.images.length > 1 ? `
          <div class="dots">
            ${p.images.map((_, i) => `<span class="${i === currentImageIndex ? 'active' : ''}"></span>`).join('')}
          </div>
        ` : ''}
        ${p.type === 'link' ? `
          <div class="link-buttons">
            ${p.links.map(l => `<a href="${l.url}" target="_blank" rel="noopener">${l.label} &#8599;</a>`).join('')}
          </div>
        ` : ''}
        ${p.externalLink ? `
          <div class="link-buttons">
            <a href="${p.externalLink.url}" target="_blank" rel="noopener">${p.externalLink.label} &#8599;</a>
          </div>
        ` : ''}
      </div>
    `;
  }
  
  function changeImage(dir){
    const total = currentProject.images.length;
    currentImageIndex = (currentImageIndex + dir + total) % total;
    renderModal();
  }
  
  overlay.addEventListener('click', e => {
    if(e.target === overlay) closeModal();
  });
  
  document.addEventListener('keydown', e => {
    if(!overlay.classList.contains('open')) return;
    if(e.key === 'Escape') closeModal();
    if(e.key === 'ArrowRight' && currentProject && currentProject.images && currentProject.images.length > 1) changeImage(1);
    if(e.key === 'ArrowLeft' && currentProject && currentProject.images && currentProject.images.length > 1) changeImage(-1);
  });