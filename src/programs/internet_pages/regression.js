export const regressionPage = {
    title: "Regression Engine",
    date: "December 05, 2025",
    theme: "theme-hypnospace",
    content: `
<div style="background-color: #000; color: #0f0; padding: 20px; border: 3px solid #333; font-family: 'Courier New', monospace;">
    <center>
        <a href="https://github.com/Zambrzyckii/Regresion" target="_blank" style="text-decoration: none;" alt="Regression Engine">
            <img src="../../public/screenshots/samples.png" width="500" style="border: 3px ridge #0f0; margin-bottom: 10px; border-radius: 5px;">
        </a>
        <h1 style="color: #0f0; text-shadow: 2px 2px #005500; letter-spacing: 2px;">[ PROJECT: REGRESSION ENGINE ]</h1> 
        <h2 class="blink" style="color: #ff00ff;">> Predict the future with just one tool_</h2>
    </center>

    <hr style="border: 1px dashed #0f0;">
    
    <p style="color: #ccc;">> INITIALIZING ML PROTOCOLS... SUCCESS.<br>
    > LOADING DATA MATRICES...</p>

    <div style="background: #111; border-left: 4px solid #0f0; padding: 10px; margin-bottom: 20px;">
        <h3 style="color: #fff; margin-top: 0;">:: Advanced Multivariable & Polynomial Engine ::</h3>
        <p style="color: #ccc;">This project is a custom-built, high-performance compute engine implementing linear and polynomial regression algorithms using the Normal Equation. The system architecture is designed around the <b>Extract, Transform, Load (ETL)</b> paradigm and the Separation of Concerns principle, combining the strengths of the .NET ecosystem as the compute layer and Python (Pandas) as a flexible microservice for data preprocessing.</p>
        <p style="color: #ccc;">The entire solution is fully containerized using Docker, eliminating deployment hell and ensuring immediate execution of the analytical pipeline in any environment.</p>
    </div>

    <div style="background: #330000; border: 1px solid #ff0000; padding: 10px; margin: 20px 0;">
        <p style="color: #ccc; margin-bottom: 0;">> <b>NOTE:</b> The project deliberately forgoes out-of-the-box ML frameworks (like ML.NET or Scikit-Learn) to demonstrate a deep understanding of the mathematical foundations of machine learning and software architecture.</p>
    </div>

    <h2 style="color: #ff00ff; border-bottom: 1px solid #ff00ff;">[01] Architecture & Layer Separation</h2>
    <ul style="color: #ccc;">
        <li><b style="color: #0f0;">Preprocessing Layer:</b> Python and Pandas, responsible for data cleaning, automatic detection of categorical types, and transforming text into binary vectors - <b>One-Hot Encoding</b>. This makes the engine resilient to parsing errors and dynamically adjusts the width of the input matrix.</li>
        <li><b style="color: #0f0;">Compute Layer:</b> C#, focused exclusively on pure, optimized linear algebra. It accepts a perfectly prepared matrix of double structures, builds a Design Matrix, and solves the system of equations.</li>
    </ul>

    <h2 style="color: #ff00ff; border-bottom: 1px solid #ff00ff;">[02] Native Algorithm Implementations</h2>
    <p style="color: #ccc;">Within the C# analytical module, the following have been implemented from scratch without external math libraries:</p>
    <ul style="color: #ccc;">
        <li>Matrix multiplication for arbitrary dimensions (optimized $O(n^3)$ loops)</li>
        <li>Matrix transposition</li>
        <li>Matrix inversion using the <b>Gauss-Jordan elimination</b> method</li>
        <li>Polynomial evaluation and Mean Squared Error (<b>MSE</b>) calculation</li>
    </ul>

    <h2 style="color: #ff00ff; border-bottom: 1px solid #ff00ff;">[03] Hybrid Containerization</h2>
    <p style="color: #ccc;">The Docker image utilizes an advanced multi-stage build process. The container's OS installs both the .NET Core runtime and native Python packages including Pandas. This ensures complete isolation and removes the need to install any dependencies on the host machine.</p>

    <br>
    
    <center>
        <a href="https://github.com/Zambrzyckii/Regresion" target="_blank" style="display: inline-block; padding: 10px 20px; background: #0f0; color: #000; font-weight: bold; text-decoration: none; border: 2px solid #fff;">
            ACCESS REPOSITORY
        </a>
        <br><br>
        <i style="color: #555;">Copyright © 2025 Bob. <span style="color: #0f0;">Predictions generated.</span></i>
    </center>

    <br><br>
    <center>
        <img src="https://cyber.dabamos.de/88x31/cogs.gif" style="border: 1px solid #333;">
    </center>
</div>
    `
};