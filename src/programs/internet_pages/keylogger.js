export const keyloggerPage = {
    title: "Smart Keylogger",
    date: "December 05, 2025",
    theme: "theme-hypnospace",
    content: `
<div style="background-color: #000; color: #0f0; padding: 20px; border: 3px solid #333; font-family: 'Courier New', monospace;">
    <center>
        <a href="https://github.com/Zambrzyckibartosz/Smart-Keylogger" target="_blank" style="text-decoration: none;" alt="Smart Keylogger">
            <img src="../../public/screenshots/Sonic-Hacking.jpg" width="350" style="border: 3px ridge #0f0; margin-bottom: 10px; border-radius: 5px;">
        </a>
        <h1 style="color: #0f0; text-shadow: 2px 2px #005500; letter-spacing: 2px;">[ PROJECT: SMART KEYLOGGER ]</h1> 
        <h2 class="blink" style="color: #ff00ff;">> How to build a ghost in the machine_</h2>
    </center>

    <hr style="border: 1px dashed #0f0;">
    
    <p style="color: #ccc;">> INITIALIZING DECRYPT SEQUENCE... SUCCESS.<br>
    > ACCESSING CLASSIFIED ARCHITECTURE DOCS...</p>

    <div style="background: #111; border-left: 4px solid #0f0; padding: 10px; margin-bottom: 20px;">
        <h3 style="color: #fff; margin-top: 0;">:: Core Design Paradigms ::</h3>
        <ol style="color: #ccc;">
            <li><b style="color: #0f0;">Asynchronous Pull-Based Beaconing:</b> The implant strictly initiates outward connections (beacons) at dedicated runtime intervals, eliminating the need to expose listeners on the target machine, thus rendering the edge node immune to ingress port scanning.</li>
            <li><b style="color: #0f0;">Context-Aware Resource Dispatching:</b> Accommodates the performance bottleneck of low-power hardware implants. The backend manages connection cycles aggressively, yielding high socket availability.</li>
            <li><b style="color: #0f0;">Cryptographic Self-Containment:</b> The system operates a completely independent Public Key Infrastructure (PKI) using an in-house self-signed certificate architecture, achieving complete anonymity from public observation networks.</li>
        </ol>
    </div>

    <h2 style="color: #ff00ff; border-bottom: 1px solid #ff00ff;">[01] Asynchronous Receiver & Thread Pool Architecture</h2>
    <p style="color: #ccc;">To mitigate thread starvation and defend against layer 7 Denial of Service variants (such as <b>Slowloris</b> attacks where an adversary opens connections and transmits data infinitesimally slowly), the server leverages the modern .NET ThreadPool via Task-based asynchronous programming (TAP).</p>

    <h4 style="color: #fff;">> Dual Listener Layout</h4>
    <p style="color: #ccc;">The backend concurrently manages two separate infrastructure entry points:</p>
    <ul style="color: #ccc;">
        <li><span style="color: #0f0;">Production Telemetry Ingress:</span> Binds to public interfaces on port 443 to process TLS-wrapped client data packets.</li>
        <li><span style="color: #0f0;">Operator Interface Service:</span> Restricted exclusively to the Loopback interface (localhost), allowing the controller to send commands, query statistics, and inject payloads without exposing management endpoints to the wild.</li>
    </ul>

    <h4 style="color: #fff;">> Non-Blocking Structural Flow</h4>
    <p style="color: #ccc;">The core server routine yields execution immediately upon connection acceptance. The socket handover is executed with minimal allocation overhead.</p>

    <h4 style="color: #fff;">> Scoped Dependency Management</h4>
    <p style="color: #ccc;">To completely eliminate memory leaks across long-running server lifecycles, connection handlers are isolated within ephemeral lifecycle scopes. Database contexts, cryptographic buffers, and stream parsers are cleanly disposed of immediately upon TCP socket teardown.</p>

    <h2 style="color: #ff00ff; border-bottom: 1px solid #ff00ff;">[02] Traffic Evasion & DPI Bypassing</h2>
    <p style="color: #ccc;">Exfiltration stealth relies on mimicking standard, harmless corporate web traffic. The system incorporates <b style="color: #fff;">Header Spoofing</b> and <b style="color: #fff;">Cookie Smuggling</b> to mask exfiltration sequences within the boundaries of standard telemetry networks.</p>

    <ul style="color: #ccc;">
        <li><b style="color: #0f0;">Layer 3:</b> The implant maps its TCP destination directly to the static IP address of the command and control VPS.</li>
        <li><b style="color: #0f0;">Layer 7:</b> The HTTP request format is programmatically manipulated to resemble standard Google Analytics telemetry.</li>
    </ul>

    <div style="background: #330000; border: 1px solid #ff0000; padding: 10px; margin: 20px 0;">
        <h3 style="color: #ff0000; margin-top: 0;" class="blink">[!] The Cookie Smuggling Mechanism</h3>
        <p style="color: #ccc; margin-bottom: 0;">Instead of transferring exfiltrated keystrokes or binary structures inside easily parsed query parameters (<i>?data=...</i>) or explicit POST bodies which are heavily monitored by Web Application Firewalls, the data payload is segmented, encrypted via an RSA-2048/AES-256 hybrid engine, Base64 encoded, and injected directly into the standard Google Analytics tracking cookie.</p>
    </div>

    <h4 style="color: #fff;">> Deep Packet Inspection Blindspot</h4>
    <p style="color: #ccc;">Because the connection forces an encrypted HTTPS tunnel, firewalls and Intrusion Detection Systems can only observe the initial TLS Handshake. The underlying HTTP headers (including the spoofed Host and smuggled Cookie) remain entirely unreadable within the encrypted boundary.</p>

    <h2 style="color: #ff00ff; border-bottom: 1px solid #ff00ff;">[03] Cryptographic Integrity & Anti-Replay Engine</h2>
    <p style="color: #ccc;">A major vulnerability in C2 design is the risk of an analyst capturing a packet and retransmitting it to the server to analyze backend responses (Replay Attacks). The server implements an aggressive Time-to-Live and non-repeating verification engine.</p>
    
    <ul style="color: #ccc;">
        <li><span style="color: #0f0;">Aggressive TTL Validation:</span> Every telemetry chunk generated by the implant contains an encrypted Unix timestamp tag. Upon decryption, the server matches the packet time against its own UTC master clock. If the differential exceeds a predefined threshold, the packet is instantly discarded.</li>
        <li><span style="color: #0f0;">MemoryCache Deduplication:</span> To secure the remaining 10-second window, the server utilizes an in-memory high-speed cache (IMemoryCache). The unique SHA-256 cryptographic hash of every received payload is cached with an absolute expiration corresponding to the maximum TTL window. If an identical hash is submitted within that window, it is dropped without further processing.</li>
    </ul>

    <h2 style="color: #ff00ff; border-bottom: 1px solid #ff00ff;">[04] Dynamic Stream Routing & Database Isolation</h2>
    <p style="color: #ccc;">The backend reads incoming payloads through a regex-driven routing parser. Payloads are instantly split based on metadata tags into two distinct operational data tracks:</p>

    <h4 style="color: #fff;">> 1. Keystroke Telemetry Stream</h4>
    <ul style="color: #ccc;">
        <li><b style="color: #0f0;">At-Rest Security:</b> To prevent forensic disclosure of the database contents in the event of a VPS capture, columns containing telemetry data are encrypted symmetrically using AES-256-GCM with a master key derived entirely outside the database ecosystem.</li>
        <li><b style="color: #0f0;">Database Optimization:</b> Indices are maintained via highly efficient B-Tree structures, ensuring fast retrieval queries even when handling logs containing millions of rows of keystroke metadata.</li>
    </ul>

    <h4 style="color: #fff;">> 2. Binary Exfiltration Stream</h4>
    <p style="color: #ccc;">When the implant transitions into aggressive file extraction mode, data chunks contain tracking offsets: <i>[CHUNK:OFFSET=X]</i>. The server processes chunks asynchronously and writes data directly to file system descriptors using precise seek offsets. This architecture allows chunks to arrive completely out of order due to network jitter, or resume interrupted transfers seamlessly.</p>

    <h2 style="color: #ff00ff; border-bottom: 1px solid #ff00ff;">[05] Post-Processing Engine & Advanced Anti-Forensics</h2>
    <p style="color: #ccc;">When the dynamic stream router encounters the terminal metadata tag <i>[END_LOOT]</i>, it locks the assembled file handle and fires off the post-processing execution sequence, handing off execution to an isolated Python engine.</p>

    <ul style="color: #ccc;">
        <li><span style="color: #0f0;">Process Isolation:</span> To maximize performance and maintain memory safety, the .NET backend forks a native Process executing a specialized Python decryption script. Keys are injected directly into the process's local environment block variables to prevent leakage via CLI monitoring tools.</li>
        <li><span style="color: #0f0;">Chunked Streaming Symmetrical Decryption:</span> Streaming ensures zero memory bloating, preventing the OS from swapping cleartext data into swap partitions or unmanaged RAM spaces.</li>
        <li><span style="color: #0f0;">Cryptographic Erasure:</span> Before unlinking the file handle via the file system API, the underlying disk blocks are completely overwritten with random high-entropy bytes to render forensic recovery via raw block scrapers impossible.</li>
    </ul>

    <div style="background: #002200; border: 1px solid #0f0; padding: 15px; margin-top: 30px;">
        <h3 style="color: #0f0; margin-top: 0; text-align: center;">/// TECH_STACK ///</h3>
        <table style="width: 100%; color: #ccc; font-size: 14px;">
            <tr>
                <td style="vertical-align: top; width: 50%;">
                    <b style="color: #fff;">[ SERVER_SIDE ]</b><br>
                    - <b>C# / .NET 10</b> (Core)<br>
                    - <b>EF Core</b> (ORM)<br>
                    - <b>PostgreSQL</b> (Relational DB)<br>
                    - <b>Python 3.11</b> (Decryption Engine)<br>
                    - <b>Self-Signed PKI</b> (TLS Comm.)
                </td>
                <td style="vertical-align: top; width: 50%;">
                    <b style="color: #fff;">[ IMPLANT & ARCHITECTURE ]</b><br>
                    - <b>Bash</b> (KeyCroc scripts)<br>
                    - <b>API Gateway</b> (Single Entry)<br>
                    - <b>Message Queue</b> (Distributor)<br>
                    - <b>Layered Architecture</b>
                </td>
            </tr>
        </table>
    </div>

    <br>
    
    <div style="border-top: 2px solid #555; padding-top: 15px; margin-top: 20px;">
        <h3 style="color: #ff00ff;">> Summary for Defense Previews:</h3>
        <p style="color: #888;">The project architecture prioritizes host infrastructure anonymity and cryptographic verification symmetry over out-of-the-box corporate firewall bypass capabilities. The backend's security model assumes complete control over the immediate network transmission line. This trade-off delivers an impenetrable, forensic-resistant channel dedicated strictly to authenticated operational implants.</p>
    </div>

    <br>
    <center>
        <a href="https://github.com/Zambrzyckibartosz/Smart-Keylogger" target="_blank" style="display: inline-block; padding: 10px 20px; background: #0f0; color: #000; font-weight: bold; text-decoration: none; border: 2px solid #fff;">
            ACCESS REPOSITORY
        </a>
        <br><br>
        <i style="color: #555;">Copyright © 2025 Bob. <span style="color: #0f0;">Logs successfully captured.</span></i>
    </center>

    <br><br>
    <center>
        <img src="https://cyber.dabamos.de/88x31/cogs.gif" style="border: 1px solid #333;">
    </center>
</div>
    `
};