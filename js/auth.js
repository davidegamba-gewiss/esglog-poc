// =====================================================
// ESGlog - Authentication System (Simulated with localStorage)
// =====================================================

// Simulazione sistema autenticazione per PoC
class AuthSystem {
    constructor() {
        this.currentUser = null;
        this.init();
    }

    init() {
        // Carica utente da localStorage se esiste
        const savedUser = localStorage.getItem('esglog_user');
        if (savedUser) {
            this.currentUser = JSON.parse(savedUser);
            this.updateUIForLoggedInUser();
        }
    }

    // Registrazione utente
    register(userData) {
        // Validazione base
        if (!userData.email || !userData.password || !userData.companyName || !userData.sector) {
            return { success: false, message: 'Tutti i campi obbligatori devono essere compilati' };
        }

        if (userData.password.length < 8) {
            return { success: false, message: 'La password deve essere di almeno 8 caratteri' };
        }

        if (!userData.gdprConsent) {
            return { success: false, message: 'Devi accettare il trattamento dei dati personali' };
        }

        // Crea utente
        const user = {
            id: 'user_' + Date.now(),
            email: userData.email,
            companyName: userData.companyName,
            sector: userData.sector,
            plan: 'free', // Piano default
            newsletter: userData.newsletter || false,
            registeredAt: new Date().toISOString(),
            guidelines: {}, // Salverà le linee guida compilate
            results: [] // Salverà i risultati
        };

        // Salva in localStorage (in un'app reale sarebbe backend)
        localStorage.setItem('esglog_user', JSON.stringify(user));
        localStorage.setItem('esglog_pass_' + userData.email, userData.password); // Solo per PoC!

        this.currentUser = user;
        return { success: true, message: 'Registrazione completata!', user };
    }

    // Login utente
    login(email, password) {
        const savedPassword = localStorage.getItem('esglog_pass_' + email);
        const savedUser = localStorage.getItem('esglog_user');

        if (!savedPassword || !savedUser) {
            return { success: false, message: 'Email o password non corretti' };
        }

        if (savedPassword !== password) {
            return { success: false, message: 'Email o password non corretti' };
        }

        this.currentUser = JSON.parse(savedUser);
        return { success: true, message: 'Login effettuato!', user: this.currentUser };
    }

    // Logout
    logout() {
        this.currentUser = null;
        // Non eliminiamo i dati, solo il logout
        return { success: true, message: 'Logout effettuato' };
    }

    // Check se utente è loggato
    isAuthenticated() {
        return this.currentUser !== null;
    }

    // Ottieni utente corrente
    getCurrentUser() {
        return this.currentUser;
    }

    // Update user data
    updateUser(updates) {
        if (!this.currentUser) return { success: false, message: 'Utente non autenticato' };

        this.currentUser = { ...this.currentUser, ...updates };
        localStorage.setItem('esglog_user', JSON.stringify(this.currentUser));
        return { success: true, user: this.currentUser };
    }

    // Update UI based on auth status
    updateUIForLoggedInUser() {
        const loginBtn = document.getElementById('loginBtn');
        const registerBtn = document.querySelector('.btn-register');

        if (loginBtn && this.currentUser) {
            loginBtn.textContent = 'Dashboard';
            loginBtn.href = 'dashboard.html';
        }

        if (registerBtn && this.currentUser) {
            registerBtn.textContent = this.currentUser.companyName;
            registerBtn.href = 'dashboard.html';
        }
    }

    // Check piano utente
    hasAccess(feature) {
        if (!this.currentUser) return false;

        const plans = {
            free: ['basic_suggestions', 'guidelines', 'reports'],
            pro: ['basic_suggestions', 'guidelines', 'reports', 'benchmarking', 'ai_lab'],
            advance: ['basic_suggestions', 'guidelines', 'reports', 'benchmarking', 'ai_lab', 'consulting', 'events']
        };

        return plans[this.currentUser.plan]?.includes(feature) || false;
    }
}

// Inizializza sistema auth globale
const auth = new AuthSystem();

// Event listeners per form registrazione
document.addEventListener('DOMContentLoaded', function() {
    // Form Registrazione
    const registerForm = document.getElementById('registerForm');
    if (registerForm) {
        registerForm.addEventListener('submit', function(e) {
            e.preventDefault();

            const formData = {
                companyName: document.getElementById('companyName').value,
                email: document.getElementById('email').value,
                password: document.getElementById('password').value,
                sector: document.getElementById('sector').value,
                gdprConsent: document.getElementById('gdprConsent').checked,
                newsletter: document.getElementById('newsletter').checked
            };

            const result = auth.register(formData);

            if (result.success) {
                alert(result.message + '\n\nBenvenuto in ESGlog! Verrai reindirizzato alla dashboard.');
                window.location.href = 'dashboard.html';
            } else {
                alert('Errore: ' + result.message);
            }
        });
    }

    // Form Login
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();

            const email = document.getElementById('loginEmail').value;
            const password = document.getElementById('loginPassword').value;

            const result = auth.login(email, password);

            if (result.success) {
                alert(result.message);
                window.location.href = 'dashboard.html';
            } else {
                alert('Errore: ' + result.message);
            }
        });
    }

    // Logout button
    const logoutBtn = document.getElementById('logoutBtn');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', function(e) {
            e.preventDefault();
            auth.logout();
            alert('Logout effettuato');
            window.location.href = 'index.html';
        });
    }

    // Proteggi pagine che richiedono autenticazione
    const protectedPages = ['dashboard.html', 'risultati.html'];
    const currentPage = window.location.pathname.split('/').pop();

    if (protectedPages.includes(currentPage) && !auth.isAuthenticated()) {
        alert('Devi effettuare il login per accedere a questa pagina');
        window.location.href = 'index.html';
    }
});
