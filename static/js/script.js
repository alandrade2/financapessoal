const themeToggleBtn = document.getElementById('themeToggle');
const body = document.body;

// Define the initial theme
if (!body.classList.contains('dark-mode')) {
    body.classList.add('light-mode');
}

// Change theme based on toggle
themeToggleBtn.addEventListener('change', () => {
    body.classList.toggle('dark-mode');
    body.classList.toggle('light-mode');
});


function toggleSubmenu(event, submenuId) {
    event.preventDefault(); // Impede a navegação do link
    const submenu = document.getElementById(submenuId);
    const icon = document.getElementById(`icon${submenuId.charAt(submenuId.length - 1)}`);
    
    submenu.style.display = (submenu.style.display === "block") ? "none" : "block"; // Alterna a visibilidade
    icon.textContent = (submenu.style.display === "block") ? "▲" : "▼"; // Altera o ícone
}

function toggleDetails(event, detailId) {
    const description = document.getElementById(detailId);
    const category = document.getElementById(`category${detailId.charAt(detailId.length - 1)}`);
    
    const isVisible = description.style.display === "block";
    description.style.display = isVisible ? "none" : "block";
    category.style.display = isVisible ? "none" : "block";
}

    // Função para mudar o tema
    function toggleTheme() {
        const body = document.body;
        const themeToggle = document.getElementById('themeToggle');

        if (themeToggle.checked) {
            body.classList.remove('light-mode');
            body.classList.add('dark-mode');
            localStorage.setItem('theme', 'dark');
        } else {
            body.classList.remove('dark-mode');
            body.classList.add('light-mode');
            localStorage.setItem('theme', 'light');
        }
    }

    // Verifica o tema ao carregar a página
    window.onload = function() {
        const savedTheme = localStorage.getItem('theme');
        const themeToggle = document.getElementById('themeToggle');

        if (savedTheme === 'dark') {
            themeToggle.checked = true;
            document.body.classList.add('dark-mode');
        } else {
            themeToggle.checked = false;
            document.body.classList.add('light-mode');
        }
    };

    // Adiciona evento de mudança ao slider
    document.getElementById('themeToggle').addEventListener('change', toggleTheme);

