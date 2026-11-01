export const typeracerPage = {
    title: "Typeracer",
    date: "November 9, 2025",
    theme: "theme-hypnospace",
    content: `
<div style="background-color: #000; color: #0f0; padding: 20px; border: 3px solid #333; font-family: 'Courier New', monospace;">
    <center>
        <a href="../../public/screenshots/pacman-ghosts.png" target="_blank" style="text-decoration: none;" alt="Pacman">
            <img src="../../public/screenshots/pacman-ghosts.png" width="200" style="border: 4px solid #FF0000; border-radius: 5px; margin-bottom: 10px; image-rendering: pixelated;">
        </a>
        <h1 style="color: #FFDE00; text-shadow: 2px 2px #3B4CCA; letter-spacing: 2px;">[ PROJECT: TYPERACER ]</h1> 
        <h2 class="blink" style="color: #ff00ff;">> Real-Time Multiplayer Typing Game_</h2>
    </center>

    <hr style="border: 1px dashed #0f0;">

    <div style="background: #111; border-left: 4px solid #ff0000; padding: 10px; margin-bottom: 20px;">
        <h3 style="color: #ff0000; margin-top: 0;" class="blink">/// LIVE DEMO ///</h3>
        <p style="color: #ccc;">Planned downtime: 2/06/2026 - 4/06/2026<br>
        > <b>The application is fully deployed and available to play live:</b><br>
        > <a href="https://vps-948ca57b.vps.ovh.net/" target="_blank" style="color: #0f0; text-decoration: underline;">EXECUTE LAUNCH SEQUENCE [CLICK HERE]</a></p>
        <p style="color: #888; font-size: 14px;"><i>Testing Tip: To fully experience the real-time event synchronization and power-up mechanics, I highly recommend testing a match with a friend. If testing alone, you can easily simulate a multiplayer lobby by joining the same room from two distinct sessions (e.g., one normal browser window and one Incognito window).</i></p>
    </div>

    <h2 style="color: #ff00ff; border-bottom: 1px solid #ff00ff;">[01] Project Overview</h2>
    <p style="color: #ccc;">Type Racer is a highly concurrent, real-time multiplayer web application where players compete in typing speed contests. Built with a focus on low-latency state synchronization, scalable architecture, and clean code principles, this project demonstrates full-stack capabilities from real-time backend processing to automated deployment.</p>

    <h2 style="color: #ff00ff; border-bottom: 1px solid #ff00ff;">[02] Key Features</h2>
    <ul style="color: #ccc;">
        <li><b style="color: #0f0;">Real-Time Multiplayer Lobbies:</b> Low-latency bidirectional communication using <b>SignalR</b>.</li>
        <li><b style="color: #0f0;">Event-Driven Gameplay:</b> Implemented power-ups and debuffs targeting specific players using isolated Connection IDs, preventing state leakage across shared browser sessions.</li>
        <li><b style="color: #0f0;">Secure Authentication & Profiles:</b> Custom account management with persistent statistics and leaderboards.</li>
        <li><b style="color: #0f0;">Production-Ready Deployment:</b> Hosted on a VPS, served via Nginx reverse proxy, and fully containerized with Docker.</li>
    </ul>

    <h2 style="color: #ff00ff; border-bottom: 1px solid #ff00ff;">[03] Architecture & Design Patterns</h2>
    <p style="color: #ccc;">The backend is strictly structured around <b style="color: #fff;">Clean Architecture</b> and <b style="color: #fff;">Domain-Driven Design (DDD)</b> concepts to ensure separation of concerns, testability, and maintainability.</p>

    <h4 style="color: #fff;">> Project Structure (Onion Architecture)</h4>
    <ul style="color: #ccc;">
        <li><span style="color: #0f0;">Domain:</span> Contains enterprise-wide logic, entities, value objects, and states (e.g., PlayerData, RoomResults). Zero external dependencies.</li>
        <li><span style="color: #0f0;">Application:</span> Contains business logic, interfaces, and services (GameManager, LeaderboardManager). It defines the rules of the game without knowing how data is stored.</li>
        <li><span style="color: #0f0;">Infrastructure:</span> Implements data access using <b>Entity Framework Core</b>. Utilizes the <b>Repository Pattern</b> (LoginRepository, SaveScoreRepository) to abstract database operations.</li>
        <li><span style="color: #0f0;">Web/API:</span> The entry point (Program.cs, GameHub.cs). Handles HTTP requests, SignalR WebSocket connections, and Dependency Injection setup.</li>
    </ul>

    <div style="background: #002200; border: 1px solid #0f0; padding: 15px; margin-top: 30px;">
        <h3 style="color: #0f0; margin-top: 0; text-align: center;">/// TECH_STACK ///</h3>
        <table style="width: 100%; color: #ccc; font-size: 14px;">
            <tr>
                <td style="vertical-align: top; width: 33%;">
                    <b style="color: #fff;">[ BACKEND ]</b><br>
                    - C# / .NET 10<br>
                    - SignalR<br>
                    - EF Core<br>
                    - PostgreSQL
                </td>
                <td style="vertical-align: top; width: 33%;">
                    <b style="color: #fff;">[ FRONTEND ]</b><br>
                    - React.js<br>
                    - State Management
                </td>
                <td style="vertical-align: top; width: 33%;">
                    <b style="color: #fff;">[ INFRA & DEVOPS ]</b><br>
                    - Docker & Compose<br>
                    - Nginx (Reverse Proxy)<br>
                    - VPS Hosting
                </td>
            </tr>
        </table>
    </div>

    <br>
    
    <center>
        <a href="https://github.com/Zambrzyckii/Type-racer" target="_blank" style="display: inline-block; padding: 10px 20px; background: #0f0; color: #000; font-weight: bold; text-decoration: none; border: 2px solid #fff;">
            ACCESS SOURCE CODE
        </a>
        <br><br>
        <i style="color: #555;">Made by Bob. <span style="color: #0f0;">Connection established.</span></i>
    </center>

    <br><br>
    <center>
        <img src="https://cyber.dabamos.de/88x31/corp.gif" style="border: 1px solid #333; margin-right: 5px;">
        <img src="https://cyber.dabamos.de/88x31/coolness09.gif" style="border: 1px solid #333;">
    </center>
</div>
    `
};