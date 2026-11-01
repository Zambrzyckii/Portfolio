export const medataPage = {
    title: "Medata",
    date: "November 1, 2026",
    theme: "theme-hypnospace",
    content: `
<div style="background-color: #000; color: #0f0; padding: 20px; border: 3px solid #333; font-family: 'Courier New', monospace;">
    <center>
        <a href="https://github.com/Zambrzyckii/Medata" target="_blank" style="text-decoration: none;" alt="Medata">
            <img src="https://win98icons.alexmeub.com/icons/png/entire_network_globe-0.png" width="120" style="border: 3px ridge #0f0; margin-bottom: 10px; border-radius: 5px; image-rendering: pixelated;">
        </a>
        <h1 style="color: #0f0; text-shadow: 2px 2px #005500; letter-spacing: 2px;">[ PROJECT: MEDATA ]</h1>
        <h2 class="blink" style="color: #ff00ff;">> Nine containers to tell you your blood is fine_</h2>
    </center>

    <hr style="border: 1px dashed #0f0;">

    <p style="color: #ccc;">> STARTING EUREKA DISCOVERY... SUCCESS.<br>
    > SPINNING UP NINE CONTAINERS...</p>

    <div style="background: #111; border-left: 4px solid #0f0; padding: 10px; margin-bottom: 20px;">
        <h3 style="color: #fff; margin-top: 0;">:: Project Overview ::</h3>
        <p style="color: #ccc;">Medata (Med plus data) is a Medical Laboratory Information System, a portfolio project grown on top of the 7-lab course Internet Services Architectures at Gdańsk University of Technology. It walks the whole path, from Java SE to Spring Boot and JPA, then REST, microservices, an Angular client, Docker, and finally service discovery with centralized config.</p>
    </div>

    <div style="background: #002200; border: 1px solid #0f0; padding: 15px; margin-top: 30px; margin-bottom: 30px;">
        <h3 style="color: #0f0; margin-top: 0; text-align: center;">/// TECH_STACK ///</h3>
        <table style="width: 100%; color: #ccc; font-size: 14px;">
            <tr>
                <td style="vertical-align: top; width: 33%;">
                    <b style="color: #fff;">[ SERVICES ]</b><br>
                    - Java, Spring Boot<br>
                    - Spring Data JPA<br>
                    - REST APIs
                </td>
                <td style="vertical-align: top; width: 33%;">
                    <b style="color: #fff;">[ PLATFORM ]</b><br>
                    - Spring Cloud Gateway<br>
                    - Eureka discovery<br>
                    - Central config server
                </td>
                <td style="vertical-align: top; width: 33%;">
                    <b style="color: #fff;">[ EDGE & DATA ]</b><br>
                    - Angular on NGINX<br>
                    - PostgreSQL + Flyway<br>
                    - Docker Compose
                </td>
            </tr>
        </table>
    </div>

    <h2 style="color: #ff00ff; border-bottom: 1px solid #ff00ff;">[01] One command, nine containers</h2>
    <p style="color: #ccc;">A single <code>docker compose up</code> brings up the whole system. The Angular frontend is served by NGINX on port 4200, Spring Cloud Gateway sits on 8080 and routes to the services with <code>lb://</code> load balancing, the category service and two load-balanced lab-test instances register themselves, Eureka discovery runs on 8761 and the central config server on 8888. Two PostgreSQL databases sit on named volumes with Flyway migrations.</p>

    <h2 style="color: #ff00ff; border-bottom: 1px solid #ff00ff;">[02] From one JAR to a cluster</h2>
    <p style="color: #ccc;">The course builds the system lab by lab, so the repository doubles as a record of that progression. The one-command run needs nothing but Docker, because the images build the services themselves. The documentation is bilingual, English and Polish, with a 1:1 structure covering the vision, the conventions, the decisions and the architecture diagrams.</p>

    <br>

    <center>
        <a href="https://github.com/Zambrzyckii/Medata" target="_blank" style="display: inline-block; padding: 10px 20px; background: #0f0; color: #000; font-weight: bold; text-decoration: none; border: 2px solid #fff;">
            ACCESS REPOSITORY
        </a>
        <br><br>
        <i style="color: #555;">Copyright © 2026 Bob. <span style="color: #0f0;">Results are in.</span></i>
    </center>

    <br><br>
    <center>
        <img src="https://cyber.dabamos.de/88x31/cogs.gif" style="border: 1px solid #333;">
    </center>
</div>
    `
};
