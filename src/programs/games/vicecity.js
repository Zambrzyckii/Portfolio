import { createWindow } from '../../modules/windowFactory.js';

export function renderViceCity() {
    const winId = 'window-vicecity';
    const gameUrl = 'https://gtavc.armdev.cn/';
 
    const content = `
        <div class="vicecity-container">
            <div class="vicecity-viewport">
                <div id="vicecity-cover" class="vicecity-cover">
                    
                    <div class="vicecity-top-title">Grand Theft Auto</div>
                    
                    <div class="vicecity-logo">Vice City</div>
                    
                    <div class="vicecity-loading-box">
                        <button class="vicecity-btn-start" id="btn-start-vicecity">START GAME</button>
                        <div style="color: #888; font-family: 'Impact'; font-size: 18px; opacity: 0.5;">OPTIONS</div>
                        <div style="color: #888; font-family: 'Impact'; font-size: 18px; opacity: 0.5;">QUIT GAME</div>
                    </div>

                    <div class="vicecity-credits">© 1998-2002 Rockstar North & Bob</div>
                </div>
                
                <iframe 
                    id="vicecity-frame" 
                    class="vicecity-iframe" 
                    src="" 
                    allowfullscreen 
                    tabindex="0" 
                    scrolling="no"
                    sandbox="allow-scripts allow-same-origin allow-pointer-lock allow-forms allow-presentation"
                ></iframe>
            </div>
        </div>
    `;

    createWindow({
        id: winId,
        title: 'GTA Vice City',
        content: content,
        isCentered: true
    });

    const win = document.getElementById(winId);
    if (!win) return;

    const btnStart = win.querySelector('#btn-start-vicecity');
    const iframe = win.querySelector('#vicecity-frame');
    const cover = win.querySelector('#vicecity-cover');

    const focusGame = () => {
        if (iframe.style.display === 'block') {
            iframe.focus();
            if (iframe.contentWindow) {
                iframe.contentWindow.focus();
            }
        }
    };

    btnStart.addEventListener('click', () => {
        cover.style.display = 'none';
        iframe.src = gameUrl;
        iframe.style.display = 'block';
        setTimeout(focusGame, 100);
    });

    win.addEventListener('mousedown', (e) => {
        if (e.target.tagName !== 'BUTTON') {
            setTimeout(focusGame, 50);
        }
    });

    const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
            if (mutation.attributeName === 'class') {
                const isOpen = win.classList.contains('open');

                if (isOpen) {
                    console.log("Vice City restored...");
                    setTimeout(focusGame, 300); 
                } else {
                    const taskbarBtn = document.getElementById(`btn-${winId}`);
                    if (!taskbarBtn) {
                        console.log("Vice City closed.");
                        iframe.src = ""; 
                        iframe.style.display = 'none';
                        cover.style.display = 'flex';
                    }
                }
            }
        });
    });
    
    observer.observe(win, { attributes: true });
}