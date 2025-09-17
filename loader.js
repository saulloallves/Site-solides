function runCustomizations() {
    // --- 1. SEÇÃO GIRAFA ---
    const girafaSection = document.querySelector('.custom-item-page-1173');
    if (girafaSection && !girafaSection.dataset.styled) {
        girafaSection.style.cssText += `
            background-color: #009FE3 !important; 
            background-image: url(https://raw.githubusercontent.com/saulloallves/Site-solides/main/PINTAS.png) !important; 
            padding: 60px 0 !important; 
            position: relative !important;
        `;
        const girafaImgContainer = girafaSection.querySelector('.wrap-item-img > div');
        if (girafaImgContainer) {
            // Esconde a imagem placeholder e aplica a nossa como fundo
            const placeholderImg = girafaSection.querySelector('.wrap-item-img img');
            //if (placeholderImg) placeholderImg.style.display = 'none';
            
            girafaImgContainer.style.cssText += `
                background-image: url(https://raw.githubusercontent.com/saulloallves/Site-solides/main/GIRAFA%20SENTADA.png) !important; 
                background-size: contain !important; 
                background-repeat: no-repeat !important; 
                background-position: center !important; 
                min-height: 450px !important;
            `;
        }
        girafaSection.dataset.styled = 'true';
    }

    // --- 2. SEÇÃO MISSÃO/VISÃO/VALORES ---
    const sobreNos = document.querySelector('#sobrenos');
    if (sobreNos && !sobreNos.dataset.styled) {
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

        const iconContainers = {
            '.item-page-home-missao .quemsomos-icone': 'https://raw.githubusercontent.com/saulloallves/Site-solides/main/TITULO%20MIS%C3%83O.png',
            '.item-page-home-visao .quemsomos-icone': 'https://raw.githubusercontent.com/saulloallves/Site-solides/main/TITULO%20VIS%C3%83O.png',
            '.item-page-home-valores .quemsomos-icone': 'https://raw.githubusercontent.com/saulloallves/Site-solides/main/TITULO%20VALORES.png'
        };

        for (const selector in iconContainers) {
            const el = sobreNos.querySelector(selector);
            if (el) el.style.cssText += `background-image: url(${iconContainers[selector]}) !important;`;
        }

        sobreNos.querySelectorAll('.quemsomos-icone').forEach(icon => {
            icon.style.cssText += `
                position: absolute !important; top: -25px !important; left: 50% !important; 
                transform: translateX(-50%) !important; 
                width: 160px !important; height: 55px !important; 
                background-color: transparent !important; 
                background-size: contain !important; 
                background-repeat: no-repeat !important; 
                background-position: center !important;
            `;
        });

        sobreNos.querySelectorAll('.item-quemsomos.box').forEach(box => {
            box.style.cssText += `
                background-color: #FFCB05 !important; 
                border-radius: 20px !important; 
                padding: 40px 20px 20px !important; 
                min-height: 320px !important;
            `;
        });
        sobreNos.dataset.styled = 'true';
    }
}

// O "vigia" que chama a nossa função quando a página muda
const observer = new MutationObserver(function(mutations, me) {
    runCustomizations();
    const girafaSection = document.querySelector('.custom-item-page-1173[data-styled="true"]');
    const sobreNos = document.querySelector('#sobrenos[data-styled="true"]');
    if (girafaSection && sobreNos) {
        me.disconnect(); // Para de vigiar quando o trabalho estiver feito
    }
});

observer.observe(document.body, { childList: true, subtree: true });
