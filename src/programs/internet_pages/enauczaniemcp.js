export const enauczanieMcpPage = {
    title: "eNauczanie MCP",
    date: "November 1, 2026",
    theme: "theme-hypnospace",
    content: `
<div style="background-color: #000; color: #0f0; padding: 20px; border: 3px solid #333; font-family: 'Courier New', monospace;">
    <center>
        <a href="https://github.com/Zambrzyckii/Enauczanie-mcp" target="_blank" style="text-decoration: none;" alt="eNauczanie MCP">
            <img src="../../public/icons/patchnotes.svg" width="150" style="border: 3px ridge #0f0; margin-bottom: 10px; border-radius: 5px;">
        </a>
        <h1 style="color: #0f0; text-shadow: 2px 2px #005500; letter-spacing: 2px;">[ PROJECT: ENAUCZANIE MCP ]</h1>
        <h2 class="blink" style="color: #ff00ff;">> Making a robot read my deadlines so I don't have to_</h2>
    </center>

    <hr style="border: 1px dashed #0f0;">

    <p style="color: #ccc;">> CAPTURING MOODLE TOKEN... SUCCESS.<br>
    > REGISTERING MCP TOOLS...</p>

    <div style="background: #111; border-left: 4px solid #0f0; padding: 10px; margin-bottom: 20px;">
        <h3 style="color: #fff; margin-top: 0;">:: Project Overview ::</h3>
        <p style="color: #ccc;">A local MCP server that lets Claude Code use a student's account on eNauczanie PG, the Moodle platform of Gdańsk University of Technology, with the student's own web service token. By default it only reads. It never submits, posts, starts quiz attempts or marks anything as read. An opt-in write mode adds tools that work like the student's own buttons in Moodle.</p>
    </div>

    <div style="background: #002200; border: 1px solid #0f0; padding: 15px; margin-top: 30px; margin-bottom: 30px;">
        <h3 style="color: #0f0; margin-top: 0; text-align: center;">/// TECH_STACK ///</h3>
        <table style="width: 100%; color: #ccc; font-size: 14px; text-align: center;">
            <tr>
                <td style="width: 33%;">
                    <b style="color: #fff;">[ CORE ]</b><br>
                    Python 3.10+
                </td>
                <td style="width: 33%;">
                    <b style="color: #fff;">[ PROTOCOL ]</b><br>
                    Model Context Protocol
                </td>
                <td style="width: 33%;">
                    <b style="color: #fff;">[ CLIENT ]</b><br>
                    Claude Code
                </td>
            </tr>
        </table>
    </div>

    <h2 style="color: #ff00ff; border-bottom: 1px solid #ff00ff;">[01] What it reads</h2>
    <ul style="color: #ccc;">
        <li><b style="color: #0f0;">Courses:</b> the course tree with dates, completion and access restrictions, module text and file downloads.</li>
        <li><b style="color: #0f0;">Homework:</b> deadlines across every course, assignment status, grades and teacher feedback.</li>
        <li><b style="color: #0f0;">Forums:</b> announcements and discussion threads, plus what has changed recently.</li>
        <li><b style="color: #0f0;">Exercises:</b> finished quiz attempts with chosen and correct answers, and the text of H5P exercises.</li>
    </ul>

    <h2 style="color: #ff00ff; border-bottom: 1px solid #ff00ff;">[02] Safety by default</h2>
    <p style="color: #ccc;">Login on eNauczanie is CAS only through Moja PG, so there is no password to store. The token comes from Moodle's mobile-app launch flow and lands in a local <code>.env</code> with file mode 600. Write mode stays off unless it is switched on explicitly, and the tools that change anything describe what they would do and wait for a yes before a single byte reaches Moodle.</p>

    <br>

    <center>
        <a href="https://github.com/Zambrzyckii/Enauczanie-mcp" target="_blank" style="display: inline-block; padding: 10px 20px; background: #0f0; color: #000; font-weight: bold; text-decoration: none; border: 2px solid #fff;">
            ACCESS REPOSITORY
        </a>
        <br><br>
        <i style="color: #555;">Copyright © 2026 Bob. <span style="color: #0f0;">Read-only, mostly.</span></i>
    </center>

    <br><br>
    <center>
        <img src="https://cyber.dabamos.de/88x31/netscape4.gif" style="border: 1px solid #333;">
    </center>
</div>
    `
};
