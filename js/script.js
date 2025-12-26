// script.js

async function loadSummary() {
    try {
        const response = await fetch('./data.json');

        if(!response.ok) {
            throw new Error('Não foi possível carregar os dados');
        }

        const data = await response.json();
        const container = document.getElementById('summary-items');

        container.innerHTML = data.map(item => `
            <div class="summary-item" data-category="${item.category.toLowerCase()}">
                <div class="summary-item-left">
                    <img src="${item.icon}" alt="Icone de raio simbolizando reação" aria-hidden="true">
                    <span class="summary-category">${item.category}</span>
                </div>
                <p class="summary-score">
                    <strong>${item.score}</strong> / 100
                </p>
            </div>    
            `).join('');
    }
    catch (error) {
        console.error("Erro ao carregar o JSON:", error);

        document.getElementById('summary-items').innerHTML = "<p>Erro ao carregar dados.</p>";
    }
}

loadSummary();