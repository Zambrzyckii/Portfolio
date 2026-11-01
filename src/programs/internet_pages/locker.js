export const lockerPage = {
    title: "Locker Vault",
    date: "August 5, 2026",
    theme: "theme-hypnospace",
    content: `
<div style="background-color: #000; color: #0f0; padding: 20px; border: 3px solid #333; font-family: 'Courier New', monospace;">
    <center>
        <img src="../../public/icons/locker.png" width="200" style="border: 3px ridge #0f0; margin-bottom: 10px; border-radius: 5px;">
        <h1 style="color: #0f0; text-shadow: 2px 2px #005500; letter-spacing: 2px;">[ PROJECT: LOCKER ]</h1> 
        <h2 class="blink" style="color: #ff00ff;">> Lock your secrets_</h2>
    </center>

    <hr style="border: 1px dashed #0f0;">
    
    <p style="color: #ccc;">> INITIALIZING CRYPTOGRAPHY ENGINE... SUCCESS.<br>
    > GENERATING RANDOM NONCE...</p>

    <div style="background: #111; border-left: 4px solid #0f0; padding: 10px; margin-bottom: 20px;">
        <h3 style="color: #fff; margin-top: 0;">:: Project Overview ::</h3>
        <p style="color: #ccc;">A high performance, secure, and visually interactive CLI vault for files and directories. This project leverages the Python <code>cryptography</code> library to provide a robust, terminal-based encryption tool complete with Docker containerization support.</p>
    </div>

    <h2 style="color: #ff00ff; border-bottom: 1px solid #ff00ff;">[01] Cryptographic Core</h2>
    <ul style="color: #ccc;">
        <li><b style="color: #0f0;">Encryption Engine:</b> Utilizes AES 256 CTR encryption with PBKDF2HMAC key derivation.</li>
        <li><b style="color: #0f0;">Key Derivation:</b> Operates using the SHA-256 algorithm with 480,000 iterations.</li>
        <li><b style="color: #0f0;">Randomization:</b> Generates cryptographically secure random bytes via <code>os.urandom</code> for 16-byte salts and nonces.</li>
    </ul>

    <h2 style="color: #ff00ff; border-bottom: 1px solid #ff00ff;">[02] Memory & Data Management</h2>
    <ul style="color: #ccc;">
        <li><b style="color: #0f0;">Stream Processing:</b> Built with a data streaming engine that processes data in 64KB chunks. This ensures the application encrypts massive files without consuming excessive RAM.</li>
        <li><b style="color: #0f0;">Dynamic Archiving:</b> Encrypts entire directories by automatically archiving them into ZIP formats on the fly.</li>
        <li><b style="color: #0f0;">Anti-Forensic Shredding:</b> Original files are securely overwritten with random bytes in 3 passes prior to deletion to prevent forensic data recovery.</li>
    </ul>

    <h2 style="color: #ff00ff; border-bottom: 1px solid #ff00ff;">[03] Interactive UI & Deployment</h2>
    <p style="color: #ccc;">The CLI provides real time progress bars, transfer speeds, and dynamic panels using the <code>rich</code> Python library. To maintain host machine hygiene, the application can run entirely within an isolated Docker container without installing Python dependencies locally.</p>

    <div style="background: #002200; border: 1px solid #0f0; padding: 15px; margin-top: 30px; margin-bottom: 30px;">
        <h3 style="color: #0f0; margin-top: 0; text-align: center;">/// TECH_STACK ///</h3>
        <table style="width: 100%; color: #ccc; font-size: 14px; text-align: center;">
            <tr>
                <td style="width: 33%;">
                    <b style="color: #fff;">[ CORE ]</b><br>
                    Python 3.11+
                </td>
                <td style="width: 33%;">
                    <b style="color: #fff;">[ SECURITY ]</b><br>
                    AES-256-CTR / SHA-256
                </td>
                <td style="width: 33%;">
                    <b style="color: #fff;">[ ENV ]</b><br>
                    Docker
                </td>
            </tr>
        </table>
    </div>
    
    <center>
        <br><br>
        <i style="color: #555;">Copyright © 2026 Bob. <span style="color: #0f0;">Data secured.</span></i>
    </center>

    <br><br>
    <center>
        <img src="https://cyber.dabamos.de/88x31/padlock.gif" style="border: 1px solid #333;">
    </center>
</div>
    `
};