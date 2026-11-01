export const claushhPage = {
    title: "Claushh",
    date: "November 1, 2026",
    theme: "theme-hypnospace",
    content: `
<div style="background-color: #000; color: #0f0; padding: 20px; border: 3px solid #333; font-family: 'Courier New', monospace;">
    <center>
        <a href="https://github.com/Zambrzyckii/Claushh" target="_blank" style="text-decoration: none;" alt="Claushh">
            <img src="../../public/icons/programs.svg" width="150" style="border: 3px ridge #0f0; margin-bottom: 10px; border-radius: 5px;">
        </a>
        <h1 style="color: #0f0; text-shadow: 2px 2px #005500; letter-spacing: 2px;">[ PROJECT: CLAUSHH ]</h1>
        <h2 class="blink" style="color: #ff00ff;">> Your whole dev box, in a browser tab_</h2>
    </center>

    <hr style="border: 1px dashed #0f0;">

    <p style="color: #ccc;">> OPENING CLOUDFLARE TUNNEL... SUCCESS.<br>
    > REATTACHING TO TMUX SESSION...</p>

    <div style="background: #111; border-left: 4px solid #0f0; padding: 10px; margin-bottom: 20px;">
        <h3 style="color: #fff; margin-top: 0;">:: Project Overview ::</h3>
        <p style="color: #ccc;">A private web portal for a single user, for working on projects from any device. Everything happens in the browser, which hands you a code editor, a console for Claude Code, a terminal and git over the projects that live on your own server, behind Cloudflare Access and a Cloudflare Tunnel. No port is open to the internet.</p>
    </div>

    <div style="background: #002200; border: 1px solid #0f0; padding: 15px; margin-top: 30px; margin-bottom: 30px;">
        <h3 style="color: #0f0; margin-top: 0; text-align: center;">/// TECH_STACK ///</h3>
        <table style="width: 100%; color: #ccc; font-size: 14px;">
            <tr>
                <td style="vertical-align: top; width: 33%;">
                    <b style="color: #fff;">[ BACKEND ]</b><br>
                    - ASP.NET Core, .NET 10<br>
                    - SignalR<br>
                    - EF Core + Npgsql<br>
                    - LibGit2Sharp + git CLI<br>
                    - PostgreSQL 17
                </td>
                <td style="vertical-align: top; width: 33%;">
                    <b style="color: #fff;">[ FRONTEND ]</b><br>
                    - Angular 21<br>
                    - Monaco Editor<br>
                    - xterm.js<br>
                    - @microsoft/signalr
                </td>
                <td style="vertical-align: top; width: 33%;">
                    <b style="color: #fff;">[ RUNTIME ]</b><br>
                    - claude CLI (headless)<br>
                    - tmux control mode<br>
                    - Cloudflare Access + Tunnel<br>
                    - Vitest, Playwright, xUnit
                </td>
            </tr>
        </table>
    </div>

    <h2 style="color: #ff00ff; border-bottom: 1px solid #ff00ff;">[01] What lives inside</h2>
    <ul style="color: #ccc;">
        <li><b style="color: #0f0;">Editor:</b> Monaco with tabs, save on Ctrl+S, a diff of the open file against HEAD, search in files, and file icons from Material Icon Theme.</li>
        <li><b style="color: #0f0;">Console:</b> Claude Code conversations in their own panel, with the model, effort and permission mode chosen per prompt, and every step showing what was read, edited or run.</li>
        <li><b style="color: #0f0;">Terminal:</b> your login shell on tmux, so it survives a page reload and reconnects without gaps.</li>
        <li><b style="color: #0f0;">Git:</b> workspaces that group repositories, with clone over https, status, pull, push and a background fetch.</li>
    </ul>

    <h2 style="color: #ff00ff; border-bottom: 1px solid #ff00ff;">[02] Security & access</h2>
    <p style="color: #ccc;">Login is a password plus a TOTP code, or a passkey. A Security window lists the active sessions and the login history, and the phone gets a notification on every login. The portal runs as a systemd service on a Linux server of your own, with PostgreSQL in a container next to it, reached only through Cloudflare Access and a Cloudflare Tunnel.</p>

    <br>

    <center>
        <a href="https://github.com/Zambrzyckii/Claushh" target="_blank" style="display: inline-block; padding: 10px 20px; background: #0f0; color: #000; font-weight: bold; text-decoration: none; border: 2px solid #fff;">
            ACCESS REPOSITORY
        </a>
        <br><br>
        <i style="color: #555;">Copyright © 2026 Bob. <span style="color: #0f0;">Session reattached.</span></i>
    </center>

    <br><br>
    <center>
        <img src="https://cyber.dabamos.de/88x31/linux.gif" style="border: 1px solid #333;">
    </center>
</div>
    `
};
