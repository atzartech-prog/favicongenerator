// Preset Emojis by Category
const PRESET_EMOJIS = [
  // Smileys & People
  '🚀', '🔥', '💻', '💡', '🎨', '⚙️', '⭐', '❤️',
  '👾', '🤖', '👑', '✌️', '😎', '🧠', '✍️', '🎮',
  // Animals & Nature
  '🐱', '🐶', '🦊', '🦁', '🦉', '🦄', '🍀', '🌸',
  '🌲', '🌍', '🌊', '⚡', '🌙', '☀️', '🍍', '☕',
  // Tech & Objects
  '📱', '🖥️', '⌨️', '🔒', '🔑', '📊', '📈', '📣',
  '🎁', '✉️', '📦', '🛒', '✈️', '⚓', '🎵', '⚽',
  // Symbols
  '⚠️', '✅', '❌', 'ℹ️', '❔', '♻️', '🔔', '💬'
];

// Preset SVG Paths (Scaled to 512x512 canvas coordinates)
const PRESET_SVGS = {
  code: 'M150 350 L50 256 L150 162 M362 350 L462 256 L362 162 M220 400 L292 112',
  heart: 'M256 440 C256 440 80 320 80 180 C80 100 140 60 200 60 C240 60 256 90 256 90 C256 90 272 60 312 60 C372 60 432 100 432 180 C432 320 256 440 256 440 Z',
  star: 'M256 40 L320 170 L462 190 L360 290 L385 430 L256 365 L127 430 L152 290 L50 190 L192 170 Z',
  bolt: 'M300 40 L100 260 L240 260 L180 472 L412 216 L272 216 Z',
  globe: 'M256 50 C142.23 50 50 142.23 50 256 C50 369.77 142.23 462 256 462 C369.77 462 462 369.77 462 256 C462 142.23 369.77 50 256 50 Z M256 82 C280 120 295 180 295 256 C295 332 280 392 256 430 C232 392 217 332 217 256 C217 180 232 120 256 82 Z M84 236 L182 236 C183 180 196 130 216 92 C146 117 96 170 84 236 Z M296 92 C316 130 329 180 330 236 L428 236 C416 170 366 117 296 92 Z M84 276 C96 342 146 395 216 420 C196 382 183 332 182 276 L84 276 Z M296 420 C366 395 416 342 428 276 L330 276 C329 332 316 382 296 420 Z',
  gear: 'M256 180 C214.02 180 180 214.02 180 256 C180 297.98 214.02 330 256 330 C297.98 330 330 297.98 330 256 C330 214.02 297.98 180 256 180 Z M460 220 L412 220 C406 200 396 182 384 166 L418 132 C424 126 424 116 418 110 L382 74 C376 68 366 68 360 74 L326 108 C310 96 292 86 272 80 L272 32 C272 24 264 16 256 16 L204 16 C196 16 188 24 188 32 L188 80 C168 86 150 96 134 108 L100 74 C94 68 84 68 78 74 L42 110 C36 116 36 126 42 132 L76 166 C64 182 54 200 48 220 L0 220 C0 228 0 236 0 244 L0 268 C0 276 0 284 0 292 L48 292 C54 312 64 330 76 346 L42 380 C36 386 36 396 42 402 L78 438 C84 444 94 444 100 438 L134 404 C150 416 168 426 188 432 L188 480 C188 488 196 496 204 496 L256 496 C264 496 272 488 272 480 L272 432 C292 426 310 416 326 404 L360 438 C366 444 376 444 382 438 L418 402 C424 396 424 386 418 380 L384 346 C396 330 406 312 412 292 L460 292 C468 292 476 284 476 276 L476 220 Z',
  shield: 'M256 40 C144 76 96 120 96 180 C96 310 210 410 256 440 C302 410 416 310 416 180 C416 120 368 76 256 40 Z',
  terminal: 'M80 80 L432 80 C454 80 472 98 472 120 L472 392 C472 414 454 432 432 432 L80 432 C58 432 40 414 40 392 L40 120 C40 98 58 80 80 80 Z M100 200 L180 256 L100 312 M200 312 L300 312',
  bell: 'M256 462 C285.82 462 310 437.82 310 408 L202 408 C202 437.82 226.18 462 256 462 Z M400 326 L400 220 C400 148 356 86 290 68 L290 50 C290 31.22 274.78 16 256 16 C237.22 16 222 31.22 222 50 L222 68 C156 86 112 148 112 220 L112 326 L76 362 C68 370 74 384 86 384 L426 384 C438 384 444 370 436 362 L400 326 Z',
  cup: 'M80 128 L80 272 C80 342.7 137.3 400 208 400 L224 400 C294.7 400 352 342.7 352 272 L352 128 M352 176 L400 176 C426.5 176 448 197.5 448 224 C448 250.5 426.5 272 400 272 L352 272 M64 80 L448 80 L448 100 L64 100 Z M160 440 L272 440 L272 460 L160 460 Z'
};

// Global App State
let state = {
  currentConfig: {
    type: 'emoji', // 'emoji', 'text', 'preset', 'upload'
    emoji: '🚀',
    text: 'GO',
    fontFamily: 'Outfit',
    presetId: 'code',
    bgType: 'circle', // 'circle', 'square', 'rounded', 'transparent'
    bgColor: '#3b82f6',
    textColor: '#ffffff',
    iconSize: 65, // percentage
    offsetX: 0,
    offsetY: 0,
    borderWidth: 0,
    borderColor: '#ffffff',
    uploadedImageSrc: null
  },
  savedTemplates: []
};

// Local Image Object for Upload Rendering
let uploadedImage = new Image();

// Toast notification helper
function showToast(message, type = 'success') {
  const container = document.getElementById('toastContainer');
  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  
  let icon = type === 'success' ? 'check-circle' : 'exclamation-triangle';
  toast.innerHTML = `
    <i class="fas fa-${icon}"></i>
    <span>${message}</span>
  `;
  
  container.appendChild(toast);
  setTimeout(() => {
    toast.style.animation = 'fadeOut 0.3s forwards';
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}

// Generate Sluggified Title (for manifest name)
function slugify(text) {
  return text.toLowerCase().trim().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

// Render Emojis List in UI
function renderPresetEmojis() {
  const container = document.getElementById('emojiPresetsGrid');
  container.innerHTML = '';
  PRESET_EMOJIS.forEach(emoji => {
    const item = document.createElement('div');
    item.className = 'preset-icon-item';
    if (state.currentConfig.type === 'emoji' && state.currentConfig.emoji === emoji) {
      item.classList.add('selected');
    }
    item.innerText = emoji;
    item.addEventListener('click', () => {
      state.currentConfig.type = 'emoji';
      state.currentConfig.emoji = emoji;
      highlightTab('emoji');
      updateAllSelectedStates();
      updateAllPreviews();
      saveDraftToLocalStorage();
    });
    container.appendChild(item);
  });
}

// Render Presets SVG list
function renderPresetSvgs() {
  const container = document.getElementById('presetIconsGrid');
  container.innerHTML = '';
  Object.keys(PRESET_SVGS).forEach(key => {
    const item = document.createElement('div');
    item.className = 'preset-icon-item';
    if (state.currentConfig.type === 'preset' && state.currentConfig.presetId === key) {
      item.classList.add('selected');
    }
    
    // Draw tiny svg markup inside
    item.innerHTML = `
      <svg viewBox="0 0 512 512" style="width:24px; height:24px; fill:${state.currentConfig.type === 'preset' && state.currentConfig.presetId === key ? '#ffffff' : 'var(--text-secondary)'};">
        <path d="${PRESET_SVGS[key]}" stroke="currentColor" stroke-width="32" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
      </svg>
    `;
    
    item.addEventListener('click', () => {
      state.currentConfig.type = 'preset';
      state.currentConfig.presetId = key;
      highlightTab('preset');
      updateAllSelectedStates();
      updateAllPreviews();
      saveDraftToLocalStorage();
    });
    container.appendChild(item);
  });
}

function updateAllSelectedStates() {
  // Update emoji highlights
  document.querySelectorAll('#emojiPresetsGrid .preset-icon-item').forEach(el => {
    if (state.currentConfig.type === 'emoji' && el.innerText === state.currentConfig.emoji) {
      el.classList.add('selected');
    } else {
      el.classList.remove('selected');
    }
  });

  // Update SVG highlights
  renderPresetSvgs();
}

// Highlight Active Editor Tab
function highlightTab(tabId) {
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.classList.remove('active');
  });
  const activeBtn = document.querySelector(`.tab-btn[onclick="switchEditorTab('${tabId}')"]`);
  if (activeBtn) activeBtn.classList.add('active');

  document.querySelectorAll('.tab-pane').forEach(pane => {
    pane.classList.remove('active');
  });
  document.getElementById(tabId + 'Pane').classList.add('active');
}

function switchEditorTab(tabId) {
  state.currentConfig.type = tabId;
  highlightTab(tabId);
  updateAllPreviews();
  saveDraftToLocalStorage();
}

// Draw favicon configuration onto a generic canvas element
function drawFaviconToCanvas(canvas, size, config) {
  const ctx = canvas.getContext('2d');
  canvas.width = size;
  canvas.height = size;
  ctx.clearRect(0, 0, size, size);

  // 1. Draw Background
  if (config.bgType !== 'transparent') {
    ctx.beginPath();
    ctx.fillStyle = config.bgColor;

    if (config.bgType === 'circle') {
      ctx.arc(size / 2, size / 2, size / 2, 0, Math.PI * 2);
    } else if (config.bgType === 'rounded') {
      // Modern roundRect support, fallback with manual draw if browser is old
      if (typeof ctx.roundRect === 'function') {
        ctx.roundRect(0, 0, size, size, size * 0.22);
      } else {
        const radius = size * 0.22;
        ctx.moveTo(radius, 0);
        ctx.lineTo(size - radius, 0);
        ctx.quadraticCurveTo(size, 0, size, radius);
        ctx.lineTo(size, size - radius);
        ctx.quadraticCurveTo(size, size, size - radius, size);
        ctx.lineTo(radius, size);
        ctx.quadraticCurveTo(0, size, 0, size - radius);
        ctx.lineTo(0, radius);
        ctx.quadraticCurveTo(0, 0, radius, 0);
      }
    } else if (config.bgType === 'square') {
      ctx.rect(0, 0, size, size);
    }
    ctx.fill();
    ctx.closePath();

    // Draw border if set
    if (config.borderWidth > 0) {
      ctx.beginPath();
      ctx.lineWidth = (config.borderWidth / 100) * size;
      ctx.strokeStyle = config.borderColor;
      
      const offset = ctx.lineWidth / 2;
      if (config.bgType === 'circle') {
        ctx.arc(size / 2, size / 2, (size / 2) - offset, 0, Math.PI * 2);
      } else if (config.bgType === 'rounded') {
        if (typeof ctx.roundRect === 'function') {
          ctx.roundRect(offset, offset, size - ctx.lineWidth, size - ctx.lineWidth, (size * 0.22) - offset);
        }
      } else if (config.bgType === 'square') {
        ctx.rect(offset, offset, size - ctx.lineWidth, size - ctx.lineWidth);
      }
      ctx.stroke();
      ctx.closePath();
    }
  }

  // Calculate coordinates with offsets
  const cx = (size / 2) + ((config.offsetX / 100) * size);
  const cy = (size / 2) + ((config.offsetY / 100) * size);

  // 2. Draw Content
  if (config.type === 'emoji') {
    const fontSize = size * (config.iconSize / 100);
    ctx.font = `${fontSize}px Outfit, -apple-system, sans-serif`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    
    // Add vertical offset correction for emojis
    const emojiY = cy + (fontSize * 0.06);
    ctx.fillText(config.emoji, cx, emojiY);
    
  } else if (config.type === 'text') {
    const fontSize = size * (config.iconSize / 100) * 0.9;
    ctx.font = `800 ${fontSize}px ${config.fontFamily}, sans-serif`;
    ctx.fillStyle = config.textColor;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(config.text.substring(0, 3).toUpperCase(), cx, cy);
    
  } else if (config.type === 'preset') {
    ctx.save();
    // Translate to center, apply scale, then shift to coordinate
    ctx.translate(cx, cy);
    const scale = (config.iconSize / 100) * (size / 512); // SVGs are defined at 512x512
    ctx.scale(scale, scale);
    ctx.translate(-256, -256); // center SVG coordinates
    
    const path = new Path2D(PRESET_SVGS[config.presetId]);
    
    // Setup outline vs fill styles
    ctx.strokeStyle = config.textColor;
    ctx.lineWidth = 32;
    ctx.stroke(path);
    
    // Fill path if code, bell or heart is selected
    if (['heart', 'star', 'bolt', 'shield', 'bell'].includes(config.presetId)) {
      ctx.fillStyle = config.textColor;
      ctx.fill(path);
    }
    ctx.restore();
    
  } else if (config.type === 'upload') {
    if (uploadedImage.complete && uploadedImage.src) {
      ctx.save();
      
      // Draw clipping region depending on background shape so upload fits
      if (config.bgType !== 'transparent') {
        ctx.beginPath();
        if (config.bgType === 'circle') {
          ctx.arc(size / 2, size / 2, size / 2, 0, Math.PI * 2);
        } else if (config.bgType === 'rounded') {
          if (typeof ctx.roundRect === 'function') {
            ctx.roundRect(0, 0, size, size, size * 0.22);
          }
        } else if (config.bgType === 'square') {
          ctx.rect(0, 0, size, size);
        }
        ctx.clip();
      }

      const imgSize = size * (config.iconSize / 100);
      const imgX = cx - (imgSize / 2);
      const imgY = cy - (imgSize / 2);
      ctx.drawImage(uploadedImage, imgX, imgY, imgSize, imgSize);
      ctx.restore();
    } else {
      // Placeholder drawing if image is not uploaded yet
      ctx.fillStyle = 'rgba(255,255,255,0.1)';
      ctx.fillRect(size * 0.25, size * 0.25, size * 0.5, size * 0.5);
      ctx.fillStyle = var(--text-muted);
      ctx.font = `${size * 0.08}px Outfit`;
      ctx.textAlign = 'center';
      ctx.fillText('NO IMAGE', size/2, size/2);
    }
  }
}

// Redraw Main Canvas & Update HTML Image Previews
function updateAllPreviews() {
  const mainCanvas = document.getElementById('mainCanvas');
  drawFaviconToCanvas(mainCanvas, 512, state.currentConfig);

  // Generate Data URL for image elements
  const dataUrl = mainCanvas.toDataURL('image/png');

  // Update mockup widgets
  document.getElementById('mockTabFavicon').src = dataUrl;
  document.getElementById('mockGoogleFavicon').src = dataUrl;
  document.getElementById('mockPhoneIcon').src = dataUrl;
}

// Handle Custom Image Upload
function handleImageUpload(file) {
  if (!file || !file.type.match('image.*')) {
    showToast('File yang diunggah harus berformat gambar!', 'error');
    return;
  }

  const reader = new FileReader();
  reader.onload = (e) => {
    uploadedImage.onload = () => {
      state.currentConfig.type = 'upload';
      state.currentConfig.uploadedImageSrc = e.target.result;
      highlightTab('upload');
      updateAllPreviews();
      saveDraftToLocalStorage();
      showToast('Gambar berhasil dimuat!', 'success');
    };
    uploadedImage.src = e.target.result;
  };
  reader.readAsDataURL(file);
}

// Load Inputs values from state configuration
function loadConfigIntoControls() {
  const conf = state.currentConfig;
  
  // Background configuration inputs
  document.getElementById('bgColorInput').value = conf.bgColor;
  document.getElementById('bgColorText').value = conf.bgColor.toUpperCase();
  document.querySelector(`input[name="bgShape"][value="${conf.bgType}"]`).checked = true;
  
  // Content styling inputs
  document.getElementById('textColorInput').value = conf.textColor;
  document.getElementById('textColorText').value = conf.textColor.toUpperCase();
  document.getElementById('iconScaleSlider').value = conf.iconSize;
  document.getElementById('iconScaleVal').innerText = conf.iconSize + '%';
  document.getElementById('offsetXSlider').value = conf.offsetX;
  document.getElementById('offsetXVal').innerText = conf.offsetX + 'px';
  document.getElementById('offsetYSlider').value = conf.offsetY;
  document.getElementById('offsetYVal').innerText = conf.offsetY + 'px';
  document.getElementById('borderWidthSlider').value = conf.borderWidth;
  document.getElementById('borderWidthVal').innerText = conf.borderWidth + '%';
  document.getElementById('borderColorInput').value = conf.borderColor;

  // Text inputs
  document.getElementById('textLetters').value = conf.text;
  document.getElementById('fontFamilySelect').value = conf.fontFamily;

  // Load uploaded image if saved
  if (conf.type === 'upload' && conf.uploadedImageSrc) {
    uploadedImage.src = conf.uploadedImageSrc;
  }

  highlightTab(conf.type);
  updateAllSelectedStates();
  updateAllPreviews();
}

// Read values from form inputs to state config
function saveControlsToState() {
  const conf = state.currentConfig;
  
  conf.bgColor = document.getElementById('bgColorInput').value;
  conf.bgType = document.querySelector('input[name="bgShape"]:checked').value;
  
  conf.textColor = document.getElementById('textColorInput').value;
  conf.iconSize = parseInt(document.getElementById('iconScaleSlider').value);
  conf.offsetX = parseInt(document.getElementById('offsetXSlider').value);
  conf.offsetY = parseInt(document.getElementById('offsetYSlider').value);
  conf.borderWidth = parseInt(document.getElementById('borderWidthSlider').value);
  conf.borderColor = document.getElementById('borderColorInput').value;

  conf.text = document.getElementById('textLetters').value;
  conf.fontFamily = document.getElementById('fontFamilySelect').value;

  // Update slider labels
  document.getElementById('iconScaleVal').innerText = conf.iconSize + '%';
  document.getElementById('offsetXVal').innerText = conf.offsetX + 'px';
  document.getElementById('offsetYVal').innerText = conf.offsetY + 'px';
  document.getElementById('borderWidthVal').innerText = conf.borderWidth + '%';
  
  updateAllPreviews();
}

// LocalStorage Auto-Draft Saving
function saveDraftToLocalStorage() {
  localStorage.setItem('favicongen_draft', JSON.stringify(state.currentConfig));
}

function loadDraftFromLocalStorage() {
  const saved = localStorage.getItem('favicongen_draft');
  if (saved) {
    try {
      state.currentConfig = JSON.parse(saved);
    } catch(e) {
      // use defaults
    }
  }
}

// LocalStorage CRUD Templates Saving
function loadTemplates() {
  const stored = localStorage.getItem('favicongen_templates');
  if (stored) {
    try {
      state.savedTemplates = JSON.parse(stored);
    } catch(e) {
      state.savedTemplates = [];
    }
  }
  renderTemplatesTable();
}

function saveCurrentTemplate() {
  const name = prompt('Masukkan nama template untuk disimpan:', 'Favicon Baru');
  if (name === null) return;
  if (!name.trim()) {
    showToast('Nama template tidak boleh kosong!', 'error');
    return;
  }

  const tempCanvas = document.createElement('canvas');
  drawFaviconToCanvas(tempCanvas, 48, state.currentConfig);
  const thumbUrl = tempCanvas.toDataURL('image/png');

  const newTemplate = {
    id: 'tpl_' + Date.now(),
    name: name,
    config: JSON.parse(JSON.stringify(state.currentConfig)),
    thumbnail: thumbUrl,
    date: new Date().toLocaleDateString('id-ID')
  };

  state.savedTemplates.unshift(newTemplate);
  localStorage.setItem('favicongen_templates', JSON.stringify(state.savedTemplates));
  loadTemplates();
  showToast('Template berhasil disimpan ke database!', 'success');
}

function deleteTemplate(id, event) {
  if (event) event.stopPropagation();
  if (confirm('Apakah Anda yakin ingin menghapus template ini?')) {
    state.savedTemplates = state.savedTemplates.filter(t => t.id !== id);
    localStorage.setItem('favicongen_templates', JSON.stringify(state.savedTemplates));
    loadTemplates();
    showToast('Template dihapus', 'info');
  }
}

function loadTemplate(id) {
  const tpl = state.savedTemplates.find(t => t.id === id);
  if (tpl) {
    state.currentConfig = JSON.parse(JSON.stringify(tpl.config));
    loadConfigIntoControls();
    saveDraftToLocalStorage();
    showToast('Template dimuat ke kanvas!', 'success');
  }
}

function renderTemplatesTable() {
  const container = document.getElementById('savedTemplatesGrid');
  container.innerHTML = '';
  
  if (state.savedTemplates.length === 0) {
    container.innerHTML = '<div style="grid-column:1/-1; text-align:center; padding:1.5rem; color:var(--text-muted); font-size:0.85rem;">Belum ada template yang disimpan.</div>';
    return;
  }

  state.savedTemplates.forEach(tpl => {
    const item = document.createElement('div');
    item.className = 'template-item';
    item.style.cursor = 'pointer';
    item.addEventListener('click', () => loadTemplate(tpl.id));
    
    item.innerHTML = `
      <div class="template-info">
        <img class="template-thumb" src="${tpl.thumbnail}" alt="${tpl.name}">
        <div>
          <div style="font-weight:600; color:#fff;">${tpl.name}</div>
          <div style="font-size:0.7rem; color:var(--text-muted);">${tpl.date}</div>
        </div>
      </div>
      <div class="template-actions">
        <button class="btn btn-secondary btn-icon" onclick="deleteTemplate('${tpl.id}', event)" style="color:var(--accent-secondary);" title="Hapus"><i class="fas fa-trash"></i></button>
      </div>
    `;
    container.appendChild(item);
  });
}

// Convert DataURL to Blob helper
function dataURItoBlob(dataURI) {
  const byteString = atob(dataURI.split(',')[1]);
  const mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];
  const ab = new ArrayBuffer(byteString.length);
  const ia = new Uint8Array(ab);
  for (let i = 0; i < byteString.length; i++) {
    ia[i] = byteString.charCodeAt(i);
  }
  return new Blob([ab], {type: mimeString});
}

// Trigger browser download for a specific size PNG
function downloadSinglePng(size, label) {
  const tempCanvas = document.createElement('canvas');
  drawFaviconToCanvas(tempCanvas, size, state.currentConfig);
  const dataUrl = tempCanvas.toDataURL('image/png');
  
  const element = document.createElement('a');
  element.setAttribute('href', dataUrl);
  element.setAttribute('download', `${label}.png`);
  element.style.display = 'none';
  document.body.appendChild(element);
  element.click();
  document.body.removeChild(element);
  showToast(`Favicon ${size}x${size} berhasil diunduh!`, 'success');
}

// Download Full Zip Package using JSZip
function downloadFaviconZip() {
  if (typeof JSZip === 'undefined') {
    showToast('Library JSZip gagal dimuat. Harap periksa koneksi internet Anda!', 'error');
    return;
  }

  showToast('Menyiapkan paket zip...', 'info');

  const zip = new JSZip();
  const name = slugify(state.currentConfig.text || 'my-site');

  // Sizes array configuration
  const sizes = [
    { size: 16, name: 'favicon-16x16.png' },
    { size: 32, name: 'favicon-32x32.png' },
    { size: 48, name: 'favicon-48x48.png' },
    { size: 180, name: 'apple-touch-icon.png' },
    { size: 192, name: 'android-chrome-192x192.png' },
    { size: 512, name: 'android-chrome-512x512.png' }
  ];

  // Draw and add to zip
  sizes.forEach(item => {
    const tempCanvas = document.createElement('canvas');
    drawFaviconToCanvas(tempCanvas, item.size, state.currentConfig);
    const dataUrl = tempCanvas.toDataURL('image/png');
    zip.file(item.name, dataURItoBlob(dataUrl));
  });

  // Also include raw .ico (simply copy the 32x32 blob for standard browsers)
  const icoCanvas = document.createElement('canvas');
  drawFaviconToCanvas(icoCanvas, 32, state.currentConfig);
  zip.file('favicon.ico', dataURItoBlob(icoCanvas.toDataURL('image/png')));

  // Add site.webmanifest
  const manifest = {
    name: state.currentConfig.text ? `${state.currentConfig.text} App` : "My Web App",
    short_name: state.currentConfig.text ? state.currentConfig.text : "App",
    icons: [
      { src: "/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
      { src: "/android-chrome-512x512.png", sizes: "512x512", type: "image/png" }
    ],
    theme_color: state.currentConfig.bgColor,
    background_color: "#ffffff",
    display: "standalone"
  };
  zip.file('site.webmanifest', JSON.stringify(manifest, null, 2));

  // Generate and download zip
  zip.generateAsync({ type: 'blob' }).then(function(content) {
    const element = document.createElement('a');
    element.setAttribute('href', URL.createObjectURL(content));
    element.setAttribute('download', 'favicon-package.zip');
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
    showToast('Paket Favicon ZIP berhasil diunduh!', 'success');
  }).catch(e => {
    showToast('Gagal merakit berkas zip', 'error');
  });
}

// Copy integration code helper
function copyIntegrationCode(elementId, btn) {
  const text = document.getElementById(elementId).innerText;
  navigator.clipboard.writeText(text).then(() => {
    const originalHTML = btn.innerHTML;
    btn.innerHTML = '<i class="fas fa-check"></i> Disalin!';
    showToast('Kode berhasil disalin!', 'success');
    setTimeout(() => {
      btn.innerHTML = originalHTML;
    }, 2000);
  }).catch(e => {
    showToast('Gagal menyalin kode', 'error');
  });
}

// Integration code tab switcher
function switchIntegrationTab(tabId) {
  document.querySelectorAll('.int-tab-btn').forEach(btn => {
    btn.classList.remove('active');
  });
  const activeBtn = document.querySelector(`.int-tab-btn[onclick="switchIntegrationTab('${tabId}')"]`);
  if (activeBtn) activeBtn.classList.add('active');

  document.querySelectorAll('.int-pane').forEach(pane => {
    pane.classList.remove('active');
  });
  document.getElementById(tabId + 'Pane').classList.add('active');
}

// Initialize Application Events
window.addEventListener('DOMContentLoaded', () => {
  // Load local draft state
  loadDraftFromLocalStorage();

  // Draw Emoji Presets and SVGs list
  renderPresetEmojis();
  renderPresetSvgs();

  // Load state parameters to DOM controls
  loadConfigIntoControls();
  
  // Load templates from LocalStorage
  loadTemplates();

  // Event Listeners for Customizer controls
  const watchSelectors = [
    'bgColorInput', 'textColorInput', 'borderColorInput',
    'iconScaleSlider', 'offsetXSlider', 'offsetYSlider', 'borderWidthSlider',
    'textLetters', 'fontFamilySelect'
  ];

  watchSelectors.forEach(id => {
    document.getElementById(id).addEventListener('input', () => {
      saveControlsToState();
      saveDraftToLocalStorage();
    });
  });

  // Watch Shape Selector Radio group
  document.querySelectorAll('input[name="bgShape"]').forEach(radio => {
    radio.addEventListener('change', () => {
      saveControlsToState();
      saveDraftToLocalStorage();
    });
  });

  // Sync color inputs with text feedback
  document.getElementById('bgColorInput').addEventListener('input', (e) => {
    document.getElementById('bgColorText').value = e.target.value.toUpperCase();
  });
  document.getElementById('bgColorText').addEventListener('input', (e) => {
    if (e.target.value.match(/^#[0-9A-F]{6}$/i)) {
      document.getElementById('bgColorInput').value = e.target.value;
      saveControlsToState();
      saveDraftToLocalStorage();
    }
  });

  document.getElementById('textColorInput').addEventListener('input', (e) => {
    document.getElementById('textColorText').value = e.target.value.toUpperCase();
  });
  document.getElementById('textColorText').addEventListener('input', (e) => {
    if (e.target.value.match(/^#[0-9A-F]{6}$/i)) {
      document.getElementById('textColorInput').value = e.target.value;
      saveControlsToState();
      saveDraftToLocalStorage();
    }
  });

  // File Dropzone Event Listeners
  const dropzone = document.getElementById('dropzone');
  const fileInput = document.getElementById('imageFileInput');

  dropzone.addEventListener('click', () => fileInput.click());
  fileInput.addEventListener('change', (e) => handleImageUpload(e.target.files[0]));

  dropzone.addEventListener('dragover', (e) => {
    e.preventDefault();
    dropzone.style.borderColor = 'var(--accent-primary)';
    dropzone.style.backgroundColor = 'rgba(59, 130, 246, 0.05)';
  });

  dropzone.addEventListener('dragleave', () => {
    dropzone.style.borderColor = 'var(--border-color)';
    dropzone.style.backgroundColor = 'transparent';
  });

  dropzone.addEventListener('drop', (e) => {
    e.preventDefault();
    dropzone.style.borderColor = 'var(--border-color)';
    dropzone.style.backgroundColor = 'transparent';
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleImageUpload(e.dataTransfer.files[0]);
    }
  });
});
