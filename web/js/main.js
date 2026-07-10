const REPO = 'Alfonzzoj/bancos-venezuela-codigos';
const BRANCH = 'main';

function getDataBase() {
  if (window.location.hostname.endsWith('github.io')) {
    return `https://raw.githubusercontent.com/${REPO}/${BRANCH}`;
  }
  return '..';
}

const CONFIG = {
  repoUrl: `https://github.com/${REPO}`,
  get jsonUrl() {
    return `${getDataBase()}/bancos.json`;
  },
  get imagesPath() {
    return `${getDataBase()}/images/`;
  },
  get metaUrl() {
    return 'json/meta.json';
  },
};

document.addEventListener('DOMContentLoaded', () => {
  initNav();
  initReveal();
  initSyntaxHighlight();
  initCopyButtons();
  loadMeta();
  loadBanks();
});

function initSyntaxHighlight() {
  if (window.Prism) {
    Prism.highlightAll();
  }
}

function initNav() {
  const toggle = document.getElementById('nav-toggle');
  const menu = document.getElementById('nav-menu-mobile');

  toggle?.addEventListener('click', () => {
    menu.classList.toggle('hidden');
    menu.classList.toggle('flex');
  });

  menu?.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      menu.classList.add('hidden');
      menu.classList.remove('flex');
    });
  });
}

function initReveal() {
  const elements = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
  );
  elements.forEach((el) => observer.observe(el));
}

function initCopyButtons() {
  document.querySelectorAll('[data-copy]').forEach((btn) => {
    btn.addEventListener('click', async () => {
      const targetId = btn.getAttribute('data-copy');
      const code = document.getElementById(targetId)?.textContent;
      if (!code) return;

      try {
        await navigator.clipboard.writeText(code);
        btn.classList.add('copied');
        const original = btn.textContent;
        btn.textContent = '¡Copiado!';
        setTimeout(() => {
          btn.classList.remove('copied');
          btn.textContent = original;
        }, 2000);
      } catch {
        btn.textContent = 'Error';
      }
    });
  });
}

async function loadMeta() {
  const elements = document.querySelectorAll('[data-last-updated]');

  try {
    const res = await fetch(CONFIG.metaUrl);
    if (!res.ok) throw new Error();
    const meta = await res.json();
    elements.forEach((el) => {
      el.textContent = meta.lastUpdatedLabel;
    });
  } catch {
    elements.forEach((el) => {
      el.textContent = '—';
    });
  }
}

async function loadBanks() {
  const tbody = document.getElementById('banks-tbody');
  const searchInput = document.getElementById('bank-search');
  const countEl = document.getElementById('bank-count');

  if (!tbody) return;

  let banks = [];

  try {
    const res = await fetch(CONFIG.jsonUrl);
    if (!res.ok) throw new Error('No se pudo cargar bancos.json');
    banks = await res.json();
  } catch {
    tbody.innerHTML = `
      <tr>
        <td colspan="5" class="px-4 py-8 text-center text-slate-400">
          No se pudo cargar la lista de bancos. Consulta el
          <a href="${CONFIG.repoUrl}" class="text-blue-400 underline">repositorio</a>.
        </td>
      </tr>`;
    return;
  }

  function shortName(full) {
    return full
      .replace(/, S\.A\. Banco Universal/gi, '')
      .replace(/ Banco Universal.*$/i, '')
      .replace(/ C\.A\..*$/i, '')
      .replace(/, Banco Microfinanciero.*$/i, '')
      .trim();
  }

  function renderRows(filter = '') {
    const q = filter.toLowerCase().trim();
    const filtered = banks.filter(
      (b) =>
        !q ||
        b.codigo.includes(q) ||
        b.nombre.toLowerCase().includes(q) ||
        b.rif.toLowerCase().includes(q) ||
        b.filename.toLowerCase().includes(q)
    );

    countEl.textContent = `${filtered.length} de ${banks.length} bancos`;

    tbody.innerHTML = filtered
      .map(
        (b) => `
      <tr class="bank-row border-b border-slate-700/50">
        <td class="px-4 py-3 font-mono text-blue-400 whitespace-nowrap">${b.codigo}</td>
        <td class="px-4 py-3">
          <div class="flex items-center gap-3">
            <img
              src="${CONFIG.imagesPath}${b.filename}"
              alt="${shortName(b.nombre)}"
              class="bank-logo h-8 w-8 rounded-md p-0.5 shrink-0"
              loading="lazy"
              onerror="this.style.display='none'"
            />
            <span class="text-slate-200">${shortName(b.nombre)}</span>
          </div>
        </td>
        <td class="px-4 py-3 font-mono text-slate-400 text-sm whitespace-nowrap hidden md:table-cell">${b.rif}</td>
        <td class="px-4 py-3 font-mono text-slate-500 text-sm hidden lg:table-cell">${b.filename}</td>
        <td class="px-4 py-3 hidden sm:table-cell">
          <a
            href="${CONFIG.imagesPath}${b.filename}"
            target="_blank"
            rel="noopener"
            class="text-xs text-blue-400 hover:text-blue-300 transition"
          >Ver logo</a>
        </td>
      </tr>`
      )
      .join('');
  }

  renderRows();
  searchInput?.addEventListener('input', (e) => renderRows(e.target.value));
}
