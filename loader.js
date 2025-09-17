// --- VERSÃO FINAL CORRIGIDA ---

function applyCustomStyles() {
    try {
        // --- SEÇÃO BANNER: NÃO FAZEMOS NADA! ---
        // A plataforma já monta esta seção corretamente. Deixamos ela em paz.

        // --- SEÇÃO GIRAFA ---
        const girafaSection = document.querySelector('.custom-item-page-1173');
        if (girafaSection && !girafaSection.dataset.styled) {
            girafaSection.style.cssText += `background-color: #009FE3 !important; background-image: url(https://raw.githubusercontent.com/saulloallves/Site-solides/main/PINTAS.png) !important; padding: 60px 0 !important; position: relative !important;`;
            const girafaImgContainer = girafaSection.querySelector('.wrap-item-img > div');
            if(girafaImgContainer) {
                // Escondemos a imagem placeholder e aplicamos a nossa como fundo
                girafaSection.querySelector('.wrap-item-img img').style.display = 'none';
                girafaImgContainer.style.cssText += `background-image: url(https://raw.githubusercontent.com/saulloallves/Site-solides/main/GIRAFA%20SENTADA.png) !important; background-size: contain !important; background-repeat: no-repeat !important; background-position: center !important; min-height: 450px !important;`;
            }
            girafaSection.dataset.styled = 'true';
        }

        // --- SEÇÃO MISSÃO/VISÃO/VALORES ---
        const sobreNos = document.querySelector('#sobrenos');
        if (sobreNos && !sobreNos.dataset.styled) {
            sobreNos.style.cssText += `background-color: white !important; background-image: url(https://raw.githubusercontent.com/saulloallves/Site-solides/main/ONDA%20AMARELA.png) !important; background-repeat: no-repeat !important; background-position: top center !important; background-size: 100% 60px !important; padding-top: 120px !important; padding-bottom: 60px !important;`;
            sobreNos.querySelectorAll('.quemsomos-titulo, .quemsomos-icone i').forEach(el => el.style.display = 'none');
            
            const missaoIcone = sobreNos.querySelector('.item-page-home-missao .quemsomos-icone');
            if(missaoIcone) missaoIcone.style.cssText += `background-image: url(https://raw.githubusercontent.com/saulloallves/Site-solides/main/TITULO%20MIS%C3%8AFO.png) !important;`;

            const visaoIcone = sobreNos.querySelector('.item-page-home-visao .quemsomos-icone');
            if(visaoIcone) visaoIcone.style.cssText += `background-image: url(https://raw.githubusercontent.com/saulloallves/Site-solides/main/TITULO%20VIS%C3O.png) !important;`;
            
            const valoresIcone = sobreNos.querySelector('.item-page-home-valores .quemsomos-icone');
            if(valoresIcone) valoresIcone.style.cssText += `background-image: url(https://raw.githubusercontent.com/saulloallves/Site-solides/main/TITULO%20VALORES.png) !important;`;
            
            sobreNos.querySelectorAll('.quemsomos-icone').forEach(icon => {
                icon.style.cssText += `position: absolute !important; top: -25px !important; left: 50% !important; transform: translateX(-50%) !important; width: 160px !important; height: 55px !important; background-color: transparent !important; background-size: contain !important; background-repeat: no-repeat !important; background-position: center !important;`;
            });
            sobreNos.querySelectorAll('.item-quemsomos.box').forEach(box => {
                 box.style.cssText += `background-color: #FFCB05 !important; border-radius: 20px !important; padding: 40px 20px 20px !important; min-height: 320px !important;`;
            });
            sobreNos.dataset.styled = 'true';
        }
    } catch (e) { console.error("Erro ao aplicar estilos:", e); }
}

// O vigia continua o mesmo, mas agora ele só vai se preocupar com 2 seções
const observer = new MutationObserver(function(mutations, me) {
    applyCustomStyles();
    // Verificamos apenas as seções que modificamos
    const girafaSection = document.querySelector('.custom-item-page-1173[data-styled="true"]');
    const sobreNos = document.querySelector('#sobrenos[data-styled="true"]');
    if (girafaSection && sobreNos) {
        me.disconnect(); // Desliga o vigia quando o trabalho estiver feito
    }
});

observer.observe(document.body, { childList: true, subtree: true });

// --- LÓGICA DE ANIMAÇÃO (SEM MUDANÇAS) ---
document.addEventListener("DOMContentLoaded", function() {
    if (!window.animationObserverInitialized) {
        window.animationObserverInitialized = true;
        const animationObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'none';
                    animationObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });

        const animationElementObserver = new MutationObserver(() => {
            document.querySelectorAll('.custom-item-page, #sobrenos, #vagas').forEach(section => {
                if (section && !section.dataset.observed) {
                    section.style.opacity = '0';
                    section.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';
                    section.style.transform = 'translateY(20px)';
                    animationObserver.observe(section);
                    section.dataset.observed = 'true';
                }
            });
        });
        animationElementObserver.observe(document.body, { childList: true, subtree: true });
    }
});
