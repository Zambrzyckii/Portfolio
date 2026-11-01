export const contactlistPage = {
    title: "Contact List",
    date: "December 05, 2025",
    theme: "theme-hypnospace",
    content: `
<div style="background-color: #000; color: #0f0; padding: 20px; border: 3px solid #333; font-family: 'Courier New', monospace;">
    <center>
        <a href="https://github.com/Zambrzyckii/CRUD" target="_blank" style="text-decoration: none;" alt="Contact List Manager">
            <img src="../../public/icons/crud.png" width="200" style="border: 3px ridge #0f0; margin-bottom: 10px; border-radius: 5px;">
        </a>
        <h1 style="color: #0f0; text-shadow: 2px 2px #005500; letter-spacing: 2px;">[ PROJECT: CONTACT LIST MANAGER ]</h1> 
        <h2 class="blink" style="color: #ff00ff;">> Classic Full-Stack CRUD Application_</h2>
    </center>

    <hr style="border: 1px dashed #0f0;">
    
    <p style="color: #ccc;">> INITIALIZING CRUD PROTOCOLS... SUCCESS.<br>
    > MOUNTING BLAZOR WEBASSEMBLY...</p>

    <div style="background: #111; border-left: 4px solid #0f0; padding: 10px; margin-bottom: 20px;">
        <h3 style="color: #fff; margin-top: 0;">:: Project Overview ::</h3>
        <p style="color: #ccc;">A solution featuring a <b>.NET REST API backend</b> and a <b>Blazor WebAssembly Single Page Application (SPA)</b> frontend. The project implements Clean Architecture principles and uses a containerized PostgreSQL database to ensure data integrity and scalable operations.</p>
    </div>

    <div style="background: #002200; border: 1px solid #0f0; padding: 15px; margin-top: 30px; margin-bottom: 30px;">
        <h3 style="color: #0f0; margin-top: 0; text-align: center;">/// TECH_STACK ///</h3>
        <table style="width: 100%; color: #ccc; font-size: 14px;">
            <tr>
                <td style="vertical-align: top; width: 33%;">
                    <b style="color: #fff;">[ BACKEND ]</b><br>
                    - .NET 10<br>
                    - EF Core (Npgsql)<br>
                    - JWT Bearer Auth<br>
                    - PostgreSQL
                </td>
                <td style="vertical-align: top; width: 33%;">
                    <b style="color: #fff;">[ FRONTEND ]</b><br>
                    - Blazor WebAssembly<br>
                    - SPA Architecture
                </td>
                <td style="vertical-align: top; width: 33%;">
                    <b style="color: #fff;">[ TESTING ]</b><br>
                    - xUnit & Moq (Unit)<br>
                    - Testcontainers (Integration)
                </td>
            </tr>
        </table>
    </div>

    <h2 style="color: #ff00ff; border-bottom: 1px solid #ff00ff;">[01] Architecture and Key Components</h2>
    <p style="color: #ccc;">The solution is divided into distinct layers to enforce separation of concerns and maintainability across the network boundary.</p>

    <h4 style="color: #fff;">> Shared Layer (Shared)</h4>
    <p style="color: #ccc;">Contains Data Transfer Objects (DTOs) utilized by both the frontend and backend, ensuring strict type safety and contract consistency.</p>

    <h4 style="color: #fff;">> Backend Layer (Backend)</h4>
    <p style="color: #ccc;">Follows a Clean Architecture pattern.</p>
    <ul style="color: #ccc;">
        <li><span style="color: #0f0;">API:</span> Contains <i>AuthController.cs</i>, which exposes endpoints for user registration, login, and authentication. <i>ContactController.cs</i> exposes secured CRUD operations for contact management.</li>
        <li><span style="color: #0f0;">Core:</span> The Domain/Entity folder contains core database models (<i>User.cs</i> and <i>Category.cs</i>). This layer also encapsulates business logic via services (<i>ContactManagementService.cs</i>, <i>LoginService.cs</i>, and <i>RegisterService.cs</i>).</li>
        <li><span style="color: #0f0;">Infrastructure:</span> Contains <i>AppDbContext.cs</i> (the EF Core context), which handles model configuration. It includes data access implementations via repositories (<i>ContactRepository.cs</i> and <i>AuthRepository.cs</i>), abstracting the database layer from the business logic.</li>
    </ul>

    <h4 style="color: #fff;">> Frontend Layer (Frontend)</h4>
    <p style="color: #ccc;">A Blazor WebAssembly SPA handling user interactions and API communication directly in the browser.</p>
    <ul style="color: #ccc;">
        <li><span style="color: #0f0;">Auth:</span> Contains <i>CustomAuthStateProvider.cs</i>, which intercepts and manages the JWT lifecycle, integrating with Blazor's authentication state to protect routes and UI components.</li>
        <li><span style="color: #0f0;">Pages:</span> Contains the Contacts folder for main application views (<i>ContactPage.razor</i>) and routing components. It also includes Components for reusable UI elements (<i>ContactForm.razor</i>) and an Auth folder containing views for user onboarding (<i>Login.razor</i> and <i>Register.razor</i>).</li>
    </ul>

    <br>
    
    <center>
        <a href="https://github.com/Zambrzyckii/CRUD" target="_blank" style="display: inline-block; padding: 10px 20px; background: #0f0; color: #000; font-weight: bold; text-decoration: none; border: 2px solid #fff;">
            ACCESS REPOSITORY
        </a>
        <br><br>
        <i style="color: #555;">Copyright © 2025 Bob. <span style="color: #0f0;">Data successfully persisted.</span></i>
    </center>

    <br><br>
    <center>
        <img src="https://cyber.dabamos.de/88x31/cogs.gif" style="border: 1px solid #333;">
    </center>
</div>
    `
};