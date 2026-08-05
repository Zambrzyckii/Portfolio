export const parserPage = {
    title: "Corporate Data Parser",
    date: "August 5, 2026",
    theme: "theme-hypnospace",
    content: `
<div style="background-color: #000; color: #0f0; padding: 20px; border: 3px solid #333; font-family: 'Courier New', monospace;">
    <center>
        <a href="https://github.com/Zambrzyckibartosz/Dataparser" target="_blank" style="text-decoration: none;" alt="HR Script">
            <img src="../../public/screenshots/parser.png" width="300" style="border: 3px ridge #0f0; margin-bottom: 10px; border-radius: 5px;">
        </a>
        <h1 style="color: #0f0; text-shadow: 2px 2px #005500; letter-spacing: 2px;">[ PROJECT: CORPORATE DATA PARSER ]</h1> 
        <h2 class="blink" style="color: #ff00ff;">> Automating the boring HR stuff_</h2>
    </center>

    <hr style="border: 1px dashed #0f0;">
    
    <p style="color: #ccc;">> INITIALIZING PYTHON INTERPRETER... SUCCESS.<br>
    > PARSING MESSY CSV MATRICES...</p>

    <div style="background: #111; border-left: 4px solid #0f0; padding: 10px; margin-bottom: 20px;">
        <h3 style="color: #fff; margin-top: 0;">:: Project Overview ::</h3>
        <p style="color: #ccc;">A classic weekend utility script built to extract, clean, and visualize employee work hours from poorly formatted corporate CSV files. It demonstrates practical data manipulation skills and the ability to quickly automate tedious administrative tasks using Python.</p>
    </div>

    <h2 style="color: #ff00ff; border-bottom: 1px solid #ff00ff;">[01] Data Extraction & Transformation</h2>
    <ul style="color: #ccc;">
        <li><b style="color: #0f0;">Regex Parsing:</b> Utilizes the <code>re</code> module to extract exact numerical hour values hidden within messy strings (e.g., pulling data from parentheses).</li>
        <li><b style="color: #0f0;">Data Cleaning:</b> Leverages the <code>pandas</code> library to dynamically filter out irrelevant rows (such as those containing the string "zostaje") and securely handles missing <code>NaN</code> values.</li>
        <li><b style="color: #0f0;">Encoding Handling:</b> Configured to correctly ingest <code>cp1250</code> encoded files, seamlessly integrating with legacy Windows Excel exports.</li>
    </ul>

    <h2 style="color: #ff00ff; border-bottom: 1px solid #ff00ff;">[02] Automated Visualization</h2>
    <p style="color: #ccc;">Instead of manually generating charts in Excel, the script relies on <code>matplotlib.pyplot</code> to automatically render and save a comprehensive line graph tracking individual employee hours over the months.</p>

    <div style="background: #002200; border: 1px solid #0f0; padding: 15px; margin-top: 30px; margin-bottom: 30px;">
        <h3 style="color: #0f0; margin-top: 0; text-align: center;">/// TECH_STACK ///</h3>
        <table style="width: 100%; color: #ccc; font-size: 14px; text-align: center;">
            <tr>
                <td style="width: 33%;">
                    <b style="color: #fff;">[ CORE ]</b><br>
                    Python 3
                </td>
                <td style="width: 33%;">
                    <b style="color: #fff;">[ DATA ]</b><br>
                    Pandas / Regex
                </td>
                <td style="width: 33%;">
                    <b style="color: #fff;">[ VISUALS ]</b><br>
                    Matplotlib
                </td>
            </tr>
        </table>
    </div>
    
    <center>
        <a href="https://github.com/Zambrzyckibartosz/Dataparser" target="_blank" style="display: inline-block; padding: 10px 20px; background: #0f0; color: #000; font-weight: bold; text-decoration: none; border: 2px solid #fff;">
            ACCESS REPOSITORY
        </a>
        <br><br>
        <i style="color: #555;">Copyright © 2026 Bob. <span style="color: #0f0;">Chart generated.</span></i>
    </center>
    <br><br>
    <center>
        <img src="https://cyber.dabamos.de/88x31/corp.gif" style="border: 1px solid #333; margin-right: 5px;">
    </center>
</div>
    `
};