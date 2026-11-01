export const roadPage = {
    title: "Crossy road",
    date: "August 5, 2026",
    theme: "theme-hypnospace",
    content: `
<div style="background-color: #000; color: #0f0; padding: 20px; border: 3px solid #333; font-family: 'Courier New', monospace;">
    <center>
        <img src="../../public/icons/road.png" width="200" style="border: 3px ridge #0f0; margin-bottom: 10px; border-radius: 5px;">
        <h1 style="color: #0f0; text-shadow: 2px 2px #005500; letter-spacing: 2px;">[ PROJECT: CROSSY RPAD ]</h1> 
        <h2 class="blink" style="color: #ff00ff;">> Arcade classic meets terminal UI_</h2>
    </center>

    <hr style="border: 1px dashed #0f0;">
    
    <p style="color: #ccc;">> INITIALIZING CURSES ENGINE... SUCCESS.<br>
    > LOADING LEADERBOARDS...</p>

    <div style="background: #111; border-left: 4px solid #0f0; padding: 10px; margin-bottom: 20px;">
        <h3 style="color: #fff; margin-top: 0;">:: Project Overview ::</h3>
        <p style="color: #ccc;">A retro arcade game built natively for the command line. This project bypasses modern graphical APIs, rendering its entire interface through the <b>PDCurses</b> library. It serves as a study in raw memory management, rendering loops, and building game mechanics entirely within a console environment.</p>
    </div>

    <h2 style="color: #ff00ff; border-bottom: 1px solid #ff00ff;">[01] Native Engine Mechanics</h2>
    <ul style="color: #ccc;">
        <li><b style="color: #0f0;">Terminal Rendering:</b> Uses the PDCurses 3.9 library to manipulate the command-line buffer natively, allowing for asynchronous keyboard event hooking and coordinate-based character drawing.</li>
        <li><b style="color: #0f0;">Persistence Layer:</b> Implements local file-based storage for tracking player statistics (<code>stats.txt</code>) and maintaining high scores (<code>Leaderboard.txt</code>).</li>
        <li><b style="color: #0f0;">Replay System:</b> Features a custom engine capable of recording and playing back session inputs via the <code>replay.txt</code> file, demonstrating advanced state and memory management in a C++ application.</li>
    </ul>

    <div style="background: #002200; border: 1px solid #0f0; padding: 15px; margin-top: 30px; margin-bottom: 30px;">
        <h3 style="color: #0f0; margin-top: 0; text-align: center;">/// TECH_STACK ///</h3>
        <table style="width: 100%; color: #ccc; font-size: 14px; text-align: center;">
            <tr>
                <td style="width: 50%;">
                    <b style="color: #fff;">[ CORE LOGIC ]</b><br>
                    C++ (Native)
                </td>
                <td style="width: 50%;">
                    <b style="color: #fff;">[ GRAPHICS & I/O ]</b><br>
                    PDCurses 3.9
                </td>
            </tr>
        </table>
    </div>
    
    <center>
        <br><br>
        <i style="color: #555;">Copyright © 2026 Bob. <span style="color: #0f0;">High score saved.</span></i>
    </center>

    <br><br>
    <center>
         <img src="https://cyber.dabamos.de/88x31/linux.gif" style="border: 1px solid #333;">
    </center>
</div>
    `
};