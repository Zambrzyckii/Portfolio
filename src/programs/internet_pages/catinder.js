export const catinderPage = {
    title: "Catinder",
    date: "November 1, 2026",
    theme: "theme-hypnospace",
    content: `
<div style="background-color: #000; color: #0f0; padding: 20px; border: 3px solid #333; font-family: 'Courier New', monospace;">
    <center>
        <a href="https://github.com/Zambrzyckii/Catinder" target="_blank" style="text-decoration: none;" alt="Catinder">
            <img src="../../public/icons/catviewer.svg" width="150" style="border: 3px ridge #0f0; margin-bottom: 10px; border-radius: 5px;">
        </a>
        <h1 style="color: #0f0; text-shadow: 2px 2px #005500; letter-spacing: 2px;">[ PROJECT: CATINDER ]</h1>
        <h2 class="blink" style="color: #ff00ff;">> Swipe right on a cat, get judged back_</h2>
    </center>

    <hr style="border: 1px dashed #0f0;">

    <p style="color: #ccc;">> BOOTING FELINE MATCHMAKING ENGINE... SUCCESS.<br>
    > WAKING UP THE HUNGRY LLM CAT...</p>

    <div style="background: #111; border-left: 4px solid #0f0; padding: 10px; margin-bottom: 20px;">
        <h3 style="color: #fff; margin-top: 0;">:: Project Overview ::</h3>
        <p style="color: #ccc;">A Tinder-style web app for cats, built as my first Angular project to learn the framework the honest way, by shipping something. Swipe through cat profiles, like the ones you fancy and wait to see who likes you back. Every match gets its own chat, where the cat replies through an LLM playing a slightly arrogant, always hungry feline that works "meow" into its answers. Likes, matches and conversations are stored in the browser, so they survive a refresh.</p>
    </div>

    <div style="background: #002200; border: 1px solid #0f0; padding: 15px; margin-top: 30px; margin-bottom: 30px;">
        <h3 style="color: #0f0; margin-top: 0; text-align: center;">/// TECH_STACK ///</h3>
        <table style="width: 100%; color: #ccc; font-size: 14px;">
            <tr>
                <td style="vertical-align: top; width: 33%;">
                    <b style="color: #fff;">[ FRONTEND ]</b><br>
                    - Angular 22<br>
                    - TypeScript<br>
                    - RxJS<br>
                    - Tailwind CSS 4
                </td>
                <td style="vertical-align: top; width: 33%;">
                    <b style="color: #fff;">[ BACKEND ]</b><br>
                    - .NET 10 minimal API<br>
                    - Groq API (chat)<br>
                    - Docker Compose
                </td>
                <td style="vertical-align: top; width: 33%;">
                    <b style="color: #fff;">[ DATA & TESTS ]</b><br>
                    - TheCatAPI, RandomUser<br>
                    - MeowFacts<br>
                    - Web Audio API<br>
                    - Vitest
                </td>
            </tr>
        </table>
    </div>

    <h2 style="color: #ff00ff; border-bottom: 1px solid #ff00ff;">[01] What it does</h2>
    <ul style="color: #ccc;">
        <li><b style="color: #0f0;">Swiping:</b> Browse generated cat profiles and like or pass, the whole ritual of modern romance reduced to its purest form.</li>
        <li><b style="color: #0f0;">Matches:</b> A like that is returned opens a dedicated chat for that match.</li>
        <li><b style="color: #0f0;">LLM chat:</b> Each cat answers through the Groq API, in character as a proud and perpetually hungry cat.</li>
        <li><b style="color: #0f0;">Persistence:</b> Likes, matches and conversations live in browser storage and come back after a reload.</li>
    </ul>

    <h2 style="color: #ff00ff; border-bottom: 1px solid #ff00ff;">[02] Why it exists</h2>
    <p style="color: #ccc;">This was my first real contact with Angular, so the goal was to learn components, services, RxJS streams and Tailwind by building something end to end rather than reading about it. The backend is a thin .NET 10 minimal API that keeps the Groq key off the client and relays the chat. The profile data is stitched together from TheCatAPI, RandomUser and MeowFacts.</p>

    <br>

    <center>
        <a href="https://github.com/Zambrzyckii/Catinder" target="_blank" style="display: inline-block; padding: 10px 20px; background: #0f0; color: #000; font-weight: bold; text-decoration: none; border: 2px solid #fff;">
            ACCESS REPOSITORY
        </a>
        <br><br>
        <i style="color: #555;">Copyright © 2026 Bob. <span style="color: #0f0;">It's a match.</span></i>
    </center>

    <br><br>
    <center>
        <img src="https://cyber.dabamos.de/88x31/angellovebox.gif" style="border: 1px solid #333;">
    </center>
</div>
    `
};
