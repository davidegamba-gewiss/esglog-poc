# ESGlog - PoC Piattaforma ESG per Settore Costruzioni

![ESGlog Logo](https://img.shields.io/badge/ESGlog-PoC-2d9f7c?style=for-the-badge)
![License](https://img.shields.io/badge/License-MIT-blue?style=for-the-badge)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

## 📋 Descrizione Progetto

ESGlog è un **Proof of Concept (PoC)** di una piattaforma web dedicata alla digitalizzazione e gestione ESG (Environmental, Social, Governance) nel settore delle costruzioni, con focus particolare sulla **logistica edile sostenibile**.

Questo progetto è stato sviluppato per una **Business Plan Competition** e dimostra le funzionalità core della piattaforma attraverso un sito web statico senza backend.

## 🎯 Obiettivi del PoC

- ✅ **Dimostrare il concept** di piattaforma ESG per costruzioni
- ✅ **UI/UX professionale** con design verde-blu responsive
- ✅ **Simulazione funzionalità** (auth, dashboard, report, AI) senza backend
- ✅ **Pronto per presentazione** a investitori e stakeholder
- ✅ **Deploy su GitHub Pages** per demo live

## 🚀 Tecnologie Utilizzate

### Frontend
- **HTML5** - Markup semantico e accessibile (WCAG compliant)
- **CSS3** - Design responsive mobile-first con variabili CSS
- **JavaScript (Vanilla)** - Logica applicativa e interattività
- **Chart.js** - Visualizzazione grafici e KPI ESG

### Simulazioni (localStorage)
- Autenticazione utenti (login/registrazione)
- Gestione piani (Free/Pro/Advance)
- Salvataggio linee guida logistica
- Persistenza dati utente

### Librerie Esterne
- [Chart.js 4.4.0](https://www.chartjs.org/) - Grafici interattivi
- Google Fonts (System fonts fallback)
- Google Maps (iframe embedded)

## 📂 Struttura Progetto

```
esglog-poc/
├── index.html              # Home page con mission e registrazione
├── dashboard.html          # Dashboard utente con piani e linee guida
├── risultati.html          # Risultati ESG, report e suggerimenti AI
├── logistica.html          # Approfondimenti logistica on/off-site
├── laboratorio.html        # Scouting tecnologie AI
├── eventi.html             # Calendario eventi e materiali
├── contatti.html           # Form contatti, mappa, newsletter
├── css/
│   └── style.css          # Stylesheet principale con variabili
├── js/
│   ├── auth.js            # Sistema autenticazione simulato
│   └── main.js            # Logica principale e interattività
├── assets/
│   └── images/            # Placeholder per immagini (Unsplash links)
└── README.md              # Questo file
```

## 🎨 Design System

### Palette Colori
- **Primary Green**: `#2d9f7c` - Sostenibilità, ambiente
- **Primary Blue**: `#2c5aa0` - Tecnologia, affidabilità
- **Gradient**: Verde → Blu (hero sections)
- **Light Gray**: `#f8f9fa` - Backgrounds
- **Text Dark**: `#2d3748`

### Typography
- Font Stack: `-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto`
- Base Size: `16px` (responsive)
- Line Height: `1.6`

### Responsive Breakpoints
- Mobile: `< 768px`
- Tablet: `768px - 992px`
- Desktop: `> 992px`

## 📱 Funzionalità Implementate

### 1. **Home Page** (`index.html`)
- ✅ Menu navigazione sticky responsive
- ✅ Hero section con CTA
- ✅ Sezione Mission con immagini
- ✅ Spiegazione ESG con grafici
- ✅ Form registrazione con validazione
- ✅ Modal login

### 2. **Dashboard** (`dashboard.html`)
- ✅ Sidebar navigazione
- ✅ Panoramica KPI
- ✅ Gestione piani (Free/Pro/Advance)
- ✅ Form linee guida logistica interattivo
- ✅ Salvataggio dati in localStorage

### 3. **Risultati e Report** (`risultati.html`)
- ✅ KPI ESG visualizzati con card
- ✅ Grafici interattivi (Chart.js)
- ✅ Suggerimenti AI base (tutti i piani)
- ✅ Benchmarking settoriale (Pro/Advance)
- ✅ Consulenza dedicata (Advance)
- ✅ Download report simulato

### 4. **Logistica Edile** (`logistica.html`)
- ✅ Spiegazione logistica on-site/off-site
- ✅ Infografica flussi SVG
- ✅ Benefici digitalizzazione
- ✅ CTA registrazione

### 5. **Laboratorio AI** (`laboratorio.html`)
- ✅ Scouting tecnologie innovative
- ✅ Filtri per categoria/stadio/regione
- ✅ Card tecnologie con dettagli
- ✅ Banner partner scorrevoli
- ✅ Richiesta report personalizzato

### 6. **Eventi** (`eventi.html`)
- ✅ Calendario eventi futuri
- ✅ Archivio eventi passati
- ✅ Download materiali/registrazioni
- ✅ Filtri per tipo/periodo/tema
- ✅ Registrazione eventi (Pro/Advance)

### 7. **Contatti** (`contatti.html`)
- ✅ Form contatti con validazione
- ✅ Mappa Google Maps embedded
- ✅ Newsletter subscription
- ✅ FAQ rapide
- ✅ Popup questionario feedback

## 🔐 Sistema Autenticazione (Simulato)

Il PoC utilizza **localStorage** per simulare un sistema di autenticazione completo:

```javascript
// Registrazione
auth.register({
  email, password, companyName, sector, gdprConsent
});

// Login
auth.login(email, password);

// Check autorizzazioni per piano
auth.hasAccess('benchmarking'); // true per Pro/Advance
auth.hasAccess('consulting');   // true solo per Advance
```

### Piani Disponibili
- **Free**: Linee guida, Report base, AI base
- **Pro**: + Benchmarking, Laboratorio AI, Eventi
- **Advance**: + Consulenza 1-to-1, Formazione, Account Manager

## 📊 Grafici e Visualizzazioni

Utilizzo di **Chart.js** per visualizzare:
- Indice digitalizzazione per settore (bar chart)
- Distribuzione impatto ESG (doughnut chart)
- Trend emissioni CO2 (line chart)
- Benchmarking settoriale (radar chart)

## 🌐 Deploy GitHub Pages

### Setup
1. Vai su Settings → Pages
2. Source: Branch `claude/esg-startup-website-MxCOP`
3. Folder: `/ (root)`
4. Save

### URL Live
```
https://<username>.github.io/esglog-poc/
```

## 🚧 Limitazioni del PoC

Questo è un **Proof of Concept** statico. In produzione servirebbero:

### Backend
- ❌ Database (PostgreSQL/MongoDB)
- ❌ API REST/GraphQL
- ❌ Autenticazione JWT reale
- ❌ Sistema pagamenti Stripe
- ❌ Email automation (Mailchimp/SendGrid)

### Integrazioni AI
- ❌ ChatGPT/Gemini API per suggerimenti
- ❌ Sistema benchmarking con dati reali
- ❌ Findest/FirstIgnite API per scouting

### Features Avanzate
- ❌ Chat real-time (Socket.io)
- ❌ Calendly integration
- ❌ Upload file PDF/Excel
- ❌ Notifiche push
- ❌ Multi-tenancy

## 📖 Come Usare il PoC

### 1. Registrazione
- Vai su `index.html`
- Compila form registrazione
- Scegli settore (es. "Infrastrutture")
- Verrai reindirizzato alla dashboard

### 2. Compilazione Linee Guida
- In dashboard, sezione "Linee Guida"
- Compila parametri logistica
- Clicca "Salva Linee Guida"

### 3. Visualizza Risultati
- Vai su "Risultati e Report"
- Vedi KPI ESG simulati
- Grafici interattivi
- Suggerimenti AI

### 4. Upgrade Piano
- In dashboard, sezione "Piani e Costi"
- Scegli Pro o Advance
- Conferma upgrade (simulato)
- Accedi a funzionalità premium

### 5. Esplora Altre Sezioni
- **Logistica**: Approfondimenti tecnici
- **Laboratorio AI**: Tecnologie innovative
- **Eventi**: Webinar e workshop
- **Contatti**: Supporto

## 🎓 Requisiti Soddisfatti

Mappatura requisiti JSON → Implementazione:

| ID | Funzionalità | Pagina | Status |
|----|--------------|--------|--------|
| 1.a | Navigazione responsive | Tutte | ✅ |
| 2.a | Mission piattaforma | index.html | ✅ |
| 3.a | Spiegazione ESG | index.html | ✅ |
| 4.a | Approfondimenti logistica | logistica.html | ✅ |
| 5.a | Registrazione + settore | index.html | ✅ |
| 1.b | Dashboard area riservata | dashboard.html | ✅ |
| 2.b | Piani Free/Pro/Advance | dashboard.html | ✅ |
| 3.b | Linee guida logistica | dashboard.html | ✅ |
| 4.b | Risultati e report | risultati.html | ✅ |
| 5.b | Suggerimenti AI base | risultati.html | ✅ |
| 6.b | Benchmarking settoriale | risultati.html | ✅ |
| 7.b | Consulenza/formazione | risultati.html | ✅ |
| 1.c | Scouting tecnologie | laboratorio.html | ✅ |
| 2.c | Banner partner | laboratorio.html | ✅ |
| 1.d | Contatti e supporto | contatti.html | ✅ |
| 1.e | Calendario eventi | eventi.html | ✅ |

## 🔧 Sviluppo Locale

### Prerequisiti
- Browser moderno (Chrome/Firefox/Safari/Edge)
- (Opzionale) Server locale per evitare CORS

### Setup
```bash
# Clone repository
git clone https://github.com/<username>/esglog-poc.git
cd esglog-poc

# Opzione 1: Apri direttamente index.html nel browser
open index.html

# Opzione 2: Usa server locale
python -m http.server 8000
# Vai su http://localhost:8000
```

## 📝 Credenziali Test

Per testare il PoC:
1. **Registrati** con email qualsiasi (es. `test@example.com`)
2. Password minimo 8 caratteri
3. I dati vengono salvati in localStorage

Oppure usa credenziali pre-caricate (se implementate).

## 🎯 Prossimi Step (Post-PoC)

### MVP (Minimum Viable Product)
1. Backend Node.js + Express
2. Database PostgreSQL
3. Autenticazione JWT
4. API REST per CRUD linee guida
5. Integrazione Stripe per pagamenti

### V1.0 Production
1. AI Integration (ChatGPT/Gemini)
2. Benchmarking con dati reali aggregati
3. Chat real-time con consulenti
4. Mobile app (React Native)
5. Sistema notifiche
6. Analytics avanzati

## 👥 Team

- **Developer**: Claude AI (Anthropic)
- **Business Plan**: [Il tuo nome/team]
- **Design**: Mobile-first responsive design

## 📄 Licenza

Questo PoC è rilasciato sotto licenza MIT per scopi educativi e di presentazione.

## 📞 Contatti

Per domande su questo PoC o per collaborazioni:
- **Email**: info@esglog.com (simulato)
- **GitHub**: [Repository Issues](https://github.com/<username>/esglog-poc/issues)

## 🙏 Ringraziamenti

- **Unsplash** per immagini placeholder
- **Chart.js** per grafici interattivi
- **Google Maps** per integrazione mappe
- **Business Plan Competition** per l'opportunità

---

**Sviluppato per Business Plan Competition - Gennaio 2026**

*ESGlog: Trasformiamo la logistica edile in sostenibile con il digitale*
