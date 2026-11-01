import { openWindow, closeWindow } from './windowManager.js';

const commands = {
    // Shortcuts
    'help': () => {
        return `
    Available commands:
    ---------------------
    PROGRAMS  - Open programs list
    CLS       - Clear the screen
    DATE      - Show current date
    GITHUB    - Open my GitHub
    SURPRISE  - Type and discover
    EXIT      - Close the terminal
    HELP      - Show this list
    HOWTO     - Show full tutorial
        `;
    },
    'howto': () => {
        return `
    Available commands:
    ---------------------
    [ BASIC COMMANDS ]
    HELP      - Show basic commands list
    HOWTO     - Show this full tutorial
    CLS/CLEAR - Clear the screen
    EXIT      - Close the terminal
    DATE      - Show current date

    [ PROGRAMS ]
    PROGRAMS  - Open programs list
    ABOUT     - Open 'About Me'
    MEDIA     - Open 'Media Player'
    VIDEO     - Open 'Display Properties'
    CAT       - Open 'Cat Viewer'
    CALC      - Open 'Calculator'
    NOTEP     - Open 'Notepad'
    PAINT     - Open 'BobPaint'
    INTER     - Open 'My Projects'

    [ GAMES ]
    GAMES     - Show game shortcuts
    MSDOS     - Open 'MS-DOS GAMES'
    GTA       - Open 'GTA Vice City'
    MINE      - Open 'Minesweeper'

    [ SYSTEM & NETWORK ]
    DIR       - List directory contents
    TREE      - Show folder structure
    CD        - Change directory
    IPCONFIG  - Show IP configuration
    PING      - Ping a network host
    WHOAMI    - Display current user
    VER       - Display OS version
    SUDO      - Execute command as superuser

    [ EASTER EGGS & EXTRA ]
    GITHUB    - Open my GitHub
    SURPRISE  - Type and discover
    NEOFETCH  - Show system stats
    CRASH     - ???
        `;
    },
    'programs': () => {
        return `
    Available commands:
    ---------------------
    ABOUT  - Open 'About Me'
    MEDIA  - Open 'Media Player'
    VIDEO  - Open 'Display Properties'
    CAT    - Open 'Cat Viewer'
    CALC   - Open 'Calculator'
    NOTEP  - Open 'Notepad'
    PAINT  - Open 'BobPaint'
    INTER  - Open 'My Projects'
    ---------------------
    GAMES  - Show game shortcuts
        `;
    },
    'games': () => {
        return `
    Available commands:
    ---------------------
    MSDOS  - Open 'MS-DOS GAMES'
    GTA    - Open 'GTA Vice City'
    MINE   - Open 'Minesweeper'
        `;
    },

    // Programs
    'about': () => {
        openWindow('window-about');
        return "Opening 'About Me' window...";
    },
    'media': () => {
        openWindow('window-mediaplayer');
        return "Opening 'Media Player' window...";
    },
    'video': () => {
        openWindow('window-wallpaper');
        return "Opening 'Display Properties' window...";
    },
    'cat': () => {
        openWindow('window-catviewer');
        return "Opening 'Cat Viewer' window...";
    },
    'calc': () => {
        openWindow('window-calculator');
        return "Opening 'Calculator' window...";
    },
    'paint': () => {
        openWindow('window-bobpaint');
        return "Opening 'BobPaint' window...";
    },
    'notep': () => {
        openWindow('window-notepad');
        return "Opening 'Notepad' window...";
    },
    'inter': () => {
        openWindow('window-internet');
        return "Opening 'My Projects' window...";
    },

    // Games
    'msdos': () => {
        openWindow('window-dosgames');
        return "Opening 'MS-DOS GAMES' window...";
    },
    'gta': () => {
        openWindow('window-vicecity');
        return "Opening 'GTA Vice City' window...";
    },
    'mine': () => {
        openWindow('window-minesweeper');
        return "Opening 'Minesweeper' window...";
    },

    // General commands
    'cls': () => {
        document.getElementById('terminal-output').innerHTML = '';
        return null;
    },
    'clear': () => {
        document.getElementById('terminal-output').innerHTML = '';
        return null;
    },
    'date': () => {
        return new Date().toString();
    },
    'github': () => {
        window.open('https://github.com/Zambrzyckii', '_blank');
        return "Opening GitHub in browser...";
    },
    'sudo': () => {
        const user = "Bob";
        return `
    ${user} is not in the sudoers file. This incident will be reported.
        `;
    },
    'whoami': () => {
        return "bobbyos\\bob";
    },
    'ver': () => {
        return `
    BobbyOS 98 SE Edition [Version 1.0.0]
        `;
    },
    'ipconfig': async () => {
        try {
            const res = await fetch('https://api.ipify.org?format=json');
            const data = await res.json();
            const ip = data.ip;

            return `
    BobbyOS IP Configuration

    Ethernet adapter Local Area Connection:

       Connection-specific DNS Suffix  . : localdomain
       IPv4 Address. . . . . . . . . . . : ${ip}
       Subnet Mask . . . . . . . . . . . : 255.255.255.0
       Default Gateway . . . . . . . . . : 192.168.1.1
            `;
        } catch (error) {
            return "Error: Could not determine IP address (Check your connection).";
        }
    },
    'dir': () => {
        return `
    Volume in drive C is BOBBYOS
    Volume Serial Number is 1337-BEEF

    Directory of C:\\Users\\Bob

    05/27/2026  04:31 PM    <DIR>          .
    05/27/2026  04:31 PM    <DIR>          ..
    05/27/2026  04:31 PM             4,096 DESKTOP
    05/27/2026  04:31 PM             1,024 DOCUMENTS
    05/27/2026  04:31 PM               512 SECRETS.TXT
                3 File(s)          5,632 bytes
                2 Dir(s)  2,147,483,648 bytes free
                `;
    },
    'tree': () => {
        return `
    Folder PATH listing for volume BOBBYOS
    Volume serial number is 1337-BEEF
    C:
    ├───Desktop
    │   ├───About Me
    │   ├───Media Player
    │   ├───My Projects
    │   └───Patch Notes
    ├───Documents
    │   ├───Programs
    │   └───Games
    └───System32
        └───Drivers
                `;
    },
    'cd': (args) => {
        if (!args || args.trim() === '') {
            return "C:\\Users\\Bob";
        }
        return "Access denied.";
    },
    'ping': (args) => {
        if (!args || args.trim() === '') {
            return "Usage: ping <hostname>";
        }
        const target = args.split(' ')[0];
        let output = `\nPinging ${target} with 32 bytes of data:\n`;
        for (let i = 0; i < 4; i++) {
            const ms = Math.floor(Math.random() * 80) + 10;
            output += `Reply from ${target}: bytes=32 time=${ms}ms TTL=119\n`;
        }
        output += `\nPing statistics for ${target}:\n    Packets: Sent = 4, Received = 4, Lost = 0 (0% loss)\n`;
        return output;
    },
    'exit': () => {
        closeWindow('window-terminal');
        return null;
    },
    'surprise': () => {
        window.open('https://youtu.be/dQw4w9WgXcQ', '_blank');
        return "Opening your surprise in the browser...";
    },
    'neofetch': () => {
        const width = window.screen.width;
        const height = window.screen.height;
        const uptime = Math.floor(performance.now() / 60000);
        const browser = navigator.userAgent.includes("Chrome") ? "Chrome" : "Web Browser";
        return `
 ⡆⣿⣿⣦⠹⣳⣳⣕⢅⠈⢗⢕⢕⢕⢕⢕⢈⢆⠟⠋⠉⠁⠉⠉⠁⠈⠼⢐⢕   Bob@BobbyOS
 ⡗⢰⣶⣶⣦⣝⢝⢕⢕⠅⡆⢕⢕⢕⢕⢕⣴⠏⣠⡶⠛⡉⡉⡛⢶⣦⡀⠐⣕   -------------
 ⡝⡄⢻⢟⣿⣿⣷⣕⣕⣅⣿⣔⣕⣵⣵⣿⣿⢠⣿⢠⣮⡈⣌⠨⠅⠹⣷⡀⢱   OS: BobbyOS (Web Edition)
 ⡝⡵⠟⠈⢀⣀⣀⡀⠉⢿⣿⣿⣿⣿⣿⣿⣿⣼⣿⢈⡋⠴⢿⡟⣡⡇⣿⡇⡀   Host: ${browser}
 ⡝⠁⣠⣾⠟⡉⡉⡉⠻⣦⣻⣿⣿⣿⣿⣿⣿⣿⣿⣧⠸⣿⣦⣥⣿⡇⡿⣰⢗   Uptime: ${uptime} mins
 ⠁⢰⣿⡏⣴⣌⠈⣌⠡⠈⢻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣬⣉⣉⣁⣄⢖⢕⢕   Resolution: ${width}x${height}
 ⡀⢻⣿⡇⢙⠁⠴⢿⡟⣡⡆⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣵⣵   Shell: Bobby-DOS
 ⡻⣄⣻⣿⣌⠘⢿⣷⣥⣿⠇⣿⣿⣿⣿⣿⣿⠛⠻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿   Theme: BobbyOS 98 SE
 ⣷⢄⠻⣿⣟⠿⠦⠍⠉⣡⣾⣿⣿⣿⣿⣿⣿⢸⣿⣦⠙⣿⣿⣿⣿⣿⣿⣿⣿   CPU: 486DX2-66
 ⡕⡑⣑⣈⣻⢗⢟⢞⢝⣻⣿⣿⣿⣿⣿⣿⣿⠸⣿⠿⠃⣿⣿⣿⣿⣿⣿⡿⠁   GPU: ASCII Graphics Adapter
        `;
    },
    'crash': () => {
        const bsod = document.createElement('div');
        Object.assign(bsod.style, {
            position: 'fixed', top: '0', left: '0', width: '100vw', height: '100vh',
            backgroundColor: '#0000AA', color: 'white', fontFamily: '"Courier New", monospace',
            zIndex: '99999', display: 'flex', flexDirection: 'column',
            justifyContent: 'center', alignItems: 'center', fontSize: '20px', fontWeight: 'bold'
        });

        bsod.innerHTML = `
            <div style="text-align: center; max-width: 800px;">
                <p style="background: white; color: #0000AA; display: inline-block; padding: 2px; margin-bottom: 20px;">BobbyOS</p>
                <p>A fatal exception 0E has occurred at 0028:C0011E36 in VXD VMM(01) + 00010E36.</p>
                <p>The current application will be terminated.</p>
                <br>
                <p>* Press any key to return to BobbyOS.</p>
                <p>* Press ALT+F4 to restart your computer.</p>
            </div>
        `;
        document.body.appendChild(bsod);

        const removeBsod = () => {
            bsod.remove();
            document.removeEventListener('keydown', removeBsod);
            document.removeEventListener('click', removeBsod);
        };

        setTimeout(() => {
            document.addEventListener('keydown', removeBsod);
            document.addEventListener('click', removeBsod);
        }, 500);

        return "SYSTEM HALTED";
    },
};

export function initTerminal() {
    const input = document.getElementById('cmd-input');
    const output = document.getElementById('terminal-output');

    input.addEventListener('keydown', function (event) {
        if (event.key === 'Enter') {
            const fullCommand = input.value.trim();

            if (fullCommand) {
                addLine(`C:\\Users\\Bob> ${fullCommand}`);
                processCommand(fullCommand);
            } else {
                addLine(`C:\\Users\\Bob>`);
            }
            input.value = '';
            scrollToBottom();
        }
    });

    async function processCommand(cmdString) {
        const args = cmdString.split(' ');
        const cmd = args[0].toLowerCase();

        if (commands[cmd]) {
            const response = await commands[cmd](args.slice(1).join(' '));

            if (response) {
                addLine(response);
                scrollToBottom();
            }
        } else {
            addLine(`'${cmd}' is not recognized as an internal or external command.`);
            scrollToBottom();
        }
    }

    function addLine(text) {
        const div = document.createElement('div');
        div.style.whiteSpace = 'pre-wrap';
        div.textContent = text;
        output.appendChild(div);
    }

    function scrollToBottom() {
        const windowBody = document.querySelector('#window-terminal .window-body');
        windowBody.scrollTop = windowBody.scrollHeight;
    }
}