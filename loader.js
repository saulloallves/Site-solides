// Usamos window.onload para garantir que nosso script rode DEPOIS dos scripts da plataforma.
window.onload = function() {
    try {
        // --- 1. ESTILIZAÇÃO DO BANNER ---
        const banner = document.querySelector('#bem-vindo');
        if (banner) {
            banner.style.cssText += `
                background-image: url(https://raw.githubusercontent.com/saulloallves/Site-solides/main/FUNDO%20TOTAL%20DO%20SITE.png) !important;
                background-size: cover !important;
                background-position: center !important;
            `;
        }

        // --- 2. ESTILIZAÇÃO DA SEÇÃO GIRAFA ---
        const girafaSection = document.querySelector('.custom-item-page-1173');
        if (girafaSection) {
            girafaSection.style.cssText += `
                background-color: #009FE3 !important;
                background-image: url(https://raw.githubusercontent.com/saulloallves/Site-solides/main/PINTAS.png) !important;
                padding: 60px 0 !important;
                position: relative !important;
            `;
            const girafaImgContainer = girafaSection.querySelector('.wrap-item-img > div');
            if(girafaImgContainer) {
                girafaSection.querySelector('.wrap-item-img img').style.display = 'none';
                girafaImgContainer.style.cssText += `
                    background-image: url(https://raw.githubusercontent.com/saulloallves/Site-solides/main/GIRAFA%20SENTADA.png) !important;
                    background-size: contain !important;
                    background-repeat: no-repeat !important;
                    background-position: center !important;
                    min-height: 450px !important;
                `;
            }
        }

        // --- 3. ESTILIZAÇÃO DA SEÇÃO MISSÃO/VISÃO/VALORES ---
        const sobreNos = document.querySelector('#sobrenos');
        if (sobreNos) {
            sobreNos.style.cssText += `
                background-color: white !important;
                background-image: url(https://raw.githubusercontent.com/saulloallves/Site-solides/main/ONDA%20AMARELA.png) !important;
                background-repeat: no-repeat !important;
                background-position: top center !important;
                background-size: 100% 60px !important;
                padding-top: 120px !important;
                padding-bottom: 60px !important;
            `;

            sobreNos.querySelectorAll('.quemsomos-titulo, .quemsomos-icone i').forEach(el => el.style.display = 'none');
            
            const missaoIcone = sobreNos.querySelector('.item-page-home-missao .quemsomos-icone');
            if(missaoIcone) missaoIcone.style.cssText += `background-image: url(https://raw.githubusercontent.com/saulloallves/Site-solides/main/TITULO%20MIS%C3%83O.png) !important;`;

            const visaoIcone = sobreNos.querySelector('.item-page-home-visao .quemsomos-icone');
            if(visaoIcone) visaoIcone.style.cssText += `background-image: url(https://raw.githubusercontent.com/saulloallves/Site-solides/main/TITULO%20VIS%C3%83O.png) !important;`;
            
            const valoresIcone = sobreNos.querySelector('.item-page-home-valores .quemsomos-icone');
            if(valoresIcone) valoresIcone.style.cssText += `background-image: url(https://raw.githubusercontent.com/saulloallves/Site-solides/main/TITULO%20VALORES.png) !important;`;
            
            sobreNos.querySelectorAll('.quemsomos-icone').forEach(icon => {
                icon.style.cssText += `
                    position: absolute !important; top: -25px !important; left: 50% !important;
                    transform: translateX(-50%) !important;
                    width: 160px !important; height: 55px !important;
                    background-color: transparent !important;
                    background-size: contain !important; background-repeat: no-repeat !important; background-position: center !important;
                `;
            });

            sobreNos.querySelectorAll('.item-quemsomos.box').forEach(box => {
                 box.style.cssText += `background-color: #FFCB05 !important; border-radius: 20px !important; padding: 40px 20px 20px !important; min-height: 320px !important;`;
            });
        }
    } catch (e) {
        console.error("Erro ao aplicar estilos customizados:", e);
    }

    // --- LÓGICA DE ANIMAÇÃO ---
    if (!window.animationObserverInitialized) {
        window.animationObserverInitialized = true;
        const sections = document.querySelectorAll('.custom-item-page, #sobrenos, #vagas');
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'none';
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });
        
        sections.forEach(section => {
             if (section) {
                section.style.opacity = '0';
                section.style.transition = 'opacity 1s ease-in-out, transform 1s ease-in-out';
                section.style.transform = 'translateY(30px)';
                observer.observe(section);
             }
        });
    }
};
