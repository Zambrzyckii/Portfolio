export const typeracerPage = {
    title: "Typeracer",
    date: "November 1, 2026",
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

    <div style="background: #111; border-left: 4px solid #0f0; padding: 10px; margin-bottom: 20px;">
        <h3 style="color: #0f0; margin-top: 0;" class="blink">/// RUN IT YOURSELF ///</h3>
        <p style="color: #ccc;">> One command brings up the whole stack on <code>http://localhost:3000</code>:<br>
        <code style="color: #0f0;">docker compose up --build</code><br>
        > Every release also ships prebuilt server and client images to GitHub Container Registry, so you can pull them instead of building.</p>
        <p style="color: #888; font-size: 14px;"><i>Testing Tip: to feel the real-time sync and the power-ups, race a friend. On your own, open the same room in two sessions, for example a normal window and an Incognito one.</i></p>
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
    <p style="color: #ccc;">The backend is a layered .NET solution inspired by <b style="color: #fff;">Clean Architecture</b>. The Api project depends on Infrastructure and Core, Infrastructure depends on Core, and Core has no project references, so the game rules never reach for the database on their own.</p>

    <h4 style="color: #fff;">> Project Structure (TypeRacerServer)</h4>
    <ul style="color: #ccc;">
        <li><span style="color: #0f0;">Core:</span> Domain holds the <code>User</code> entity, the <code>Username</code> and <code>Password</code> value objects, game constants and the in-memory <code>GameState</code>. Application holds one service per use case (<code>JoinRoomService</code>, <code>SendProgressService</code>, <code>EndGameProcessService</code>), their result records and the repository interfaces.</li>
        <li><span style="color: #0f0;">Infrastructure:</span> data access with <b>Entity Framework Core</b> and Npgsql, using the <b>Repository Pattern</b> (<code>LoginRepository</code>, <code>SaveScoreRepository</code>) over a single <code>AppDbContext</code>.</li>
        <li><span style="color: #0f0;">Api:</span> the entry point (<code>Program.cs</code>, <code>GameHub.cs</code>, controllers). It handles HTTP requests, JWT authentication, SignalR WebSocket connections and the dependency injection setup.</li>
    </ul>

    <div style="background: #002200; border: 1px solid #0f0; padding: 15px; margin-top: 30px;">
        <h3 style="color: #0f0; margin-top: 0; text-align: center;">/// TECH_STACK ///</h3>
        <table style="width: 100%; color: #ccc; font-size: 14px;">
            <tr>
                <td style="vertical-align: top; width: 33%;">
                    <b style="color: #fff;">[ BACKEND ]</b><br>
                    - C# / .NET 10<br>
                    - SignalR<br>
                    - EF Core + Npgsql<br>
                    - PostgreSQL<br>
                    - JWT auth
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
                    - VPS (systemd) + GHCR
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