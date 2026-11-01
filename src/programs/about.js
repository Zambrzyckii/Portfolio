import { createWindow } from '../modules/windowFactory.js';

export function renderAbout() {
    const menuHTML = `
        <div class="menu-item">File</div>
        <div class="menu-item">Edit</div>
        <div class="menu-item">Search</div>
        <div class="menu-item">Help</div>
    `;

    const bodyHTML = `
    <div class="md-content">
            <h1>About Me</h1>
            
            <h3>Who am I?</h3>
            <br>
            <p>Hello, my name is Bartosz Zambrzycki, I am a full-stack developer. My main focus is on creating modern web applications with professional standards and system design principles. I'm mostly focused on backend development but I also have experience with frontend technologies. In free time, I like to study system design and how big system actually works.</p>

            <hr>

            <h3>What are my skills?</h3>
            <br>
            <ul>
                <li><b>Frontend:</b> HTML5, CSS3, JavaScript (ES6+), Angular, React</li>
                <li><b>Backend:</b> .NET, Python, Java</li>
                <li><b>Database:</b> PostgreSQL, MongoDB, Redis, Azure Blob Storage</li>
                <li><b>Others:</b> Linux, Git, Docker</li>
                <li><b>Spoken Languages:</b> English - Advanced, Polish - Native</li>
            </ul>

            <hr>

            <h3>My Contacts</h3>
            <br>
            <ul>
                <li>
                    <a href="mailto:bartoszzambrzycki@proton.me">Email</a>
                </li>
                <li>
                    <a href="https://github.com/Zambrzyckii" target="_blank">GitHub</a>
                </li>
            </ul>
            
            <br>
            <p style="text-align: center; color: #888; font-size: 12px;">
                <i>I hope you like it!</i>
            </p>
        </div>
    `;

    createWindow({
        id: 'window-about',
        title: 'About Me',
        menuBar: menuHTML,
        content: bodyHTML,
        isCentered: false
    });
}