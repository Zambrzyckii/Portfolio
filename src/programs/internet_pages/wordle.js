export const wordlePage = {
    title: "CLI Wordle",
    date: "May 04, 2025",
    theme: "theme-hypnospace",
    content: `
<div style="background-color: #000; color: #0f0; padding: 20px; border: 3px solid #333; font-family: 'Courier New', monospace;">
    <center>
        <a href="https://github.com/Zambrzyckibartosz/Wordle" target="_blank" style="text-decoration: none;" alt="CLI Wordle">
            <img src="../../public/icons/wordle.png" width="200" style="border: 3px ridge #0f0; margin-bottom: 10px; border-radius: 5px;">
        </a>
        <h1 style="color: #0f0; text-shadow: 2px 2px #005500; letter-spacing: 2px;">[ PROJECT: BASH WORDLE ]</h1> 
        <h2 class="blink" style="color: #ff00ff;">> Because web browsers are too mainstream_</h2>
    </center>

    <hr style="border: 1px dashed #0f0;">
    
    <p style="color: #ccc;">> INITIALIZING BASH ENVIRONMENT... SUCCESS.<br>
    > LOADING DICTIONARY MATRICES...</p>

    <div style="background: #111; border-left: 4px solid #0f0; padding: 10px; margin-bottom: 20px;">
        <h3 style="color: #fff; margin-top: 0;">:: Project Overview ::</h3>
        <p style="color: #ccc;">A fully functional clone of the popular Wordle game, written entirely in pure <b>Bash scripting</b>. This weekend project proves that you don't need a heavy DOM or modern JavaScript frameworks to create an engaging logic game. It runs directly in your terminal, leveraging native Linux utilities and ANSI escape sequences.</p>
    </div>

    <h2 style="color: #ff00ff; border-bottom: 1px solid #ff00ff;">[01] Native Linux Integration</h2>
    <ul style="color: #ccc;">
        <li><b style="color: #0f0;">Dynamic Arguments Parsing:</b> Implements <code>getopts</code> for advanced command-line control, allowing users to pass flags for custom dictionaries (<code>-f</code>), attempt limits (<code>-a</code>), and configuration saving (<code>-s</code>).</li>
        <li><b style="color: #0f0;">Dictionary Validation:</b> Uses <code>grep -q -i -w</code> to rapidly validate user input against the loaded text file, ensuring only existing words are accepted.</li>
        <li><b style="color: #0f0;">Custom Man Page:</b> Includes a dedicated <code>wordle.1</code> manual page accessible via the <code>--help</code> flag, adhering to standard UNIX software practices.</li>
    </ul>

    <h2 style="color: #ff00ff; border-bottom: 1px solid #ff00ff;">[02] Hybrid Interface (CLI & GUI)</h2>
    <p style="color: #ccc;">The game features a dual-mode interface engine. By default, it operates as a pure CLI tool utilizing <b>ANSI color codes</b> (\e[1;32m) to highlight correct letters. However, by passing the <code>-g</code> flag, the script seamlessly hooks into <b>Zenity</b> to render GTK+ graphical dialogs and warnings directly on the Linux desktop environment.</p>

    <div style="background: #002200; border: 1px solid #0f0; padding: 15px; margin-top: 30px; margin-bottom: 30px;">
        <h3 style="color: #0f0; margin-top: 0; text-align: center;">/// TECH_STACK ///</h3>
        <table style="width: 100%; color: #ccc; font-size: 14px; text-align: center;">
            <tr>
                <td style="width: 33%;">
                    <b style="color: #fff;">[ CORE ]</b><br>
                    GNU Bash
                </td>
                <td style="width: 33%;">
                    <b style="color: #fff;">[ UI ENGINE ]</b><br>
                    ANSI / Zenity
                </td>
                <td style="width: 33%;">
                    <b style="color: #fff;">[ UTILS ]</b><br>
                    grep, tr, mapfile
                </td>
            </tr>
        </table>
    </div>
    
    <center>
        <a href="https://github.com/Zambrzyckibartosz/Wordle" target="_blank" style="display: inline-block; padding: 10px 20px; background: #0f0; color: #000; font-weight: bold; text-decoration: none; border: 2px solid #fff;">
            ACCESS REPOSITORY
        </a>
        <br><br>
        <i style="color: #555;">Copyright © 2025 Bob. <span style="color: #0f0;">Game Over.</span></i>
    </center>

    <br><br>
    <center>
        <img src="https://cyber.dabamos.de/88x31/linux.gif" style="border: 1px solid #333;">
    </center>
</div>
    `
};