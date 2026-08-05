export const terrainPage = {
    title: "Terrain Generator",
    date: "December 05, 2025",
    theme: "theme-hypnospace",
    content: `
<div style="background-color: #000; color: #0f0; padding: 20px; border: 3px solid #333; font-family: 'Courier New', monospace;">
    <center>
        <a href="https://github.com/Zambrzyckibartosz/TerrainGenerator" target="_blank" style="text-decoration: none;" alt="Terrain Generator">
            <img src="../../public/screenshots/preview.png" width="500" style="border: 3px ridge #0f0; margin-bottom: 10px; border-radius: 5px;">
        </a>
        <h1 style="color: #0f0; text-shadow: 2px 2px #005500; letter-spacing: 2px;">[ PROJECT: 3D TERRAIN GENERATOR ]</h1> 
        <h2 class="blink" style="color: #ff00ff;">> So you can touch grass without leaving home_</h2>
    </center>

    <hr style="border: 1px dashed #0f0;">
    
    <p style="color: #ccc;">> INITIALIZING PROCEDURAL ENGINE... SUCCESS.<br>
    > GENERATING GEOMETRY...</p>

    <div style="background: #111; border-left: 4px solid #0f0; padding: 10px; margin-bottom: 20px;">
        <h3 style="color: #fff; margin-top: 0;">:: Project Overview ::</h3>
        <p style="color: #ccc;">A real-time, 3D terrain generator built from scratch in C# using the Raylib-cs library. This project demonstrates applied mathematics, rendering optimization techniques, and custom algorithmic implementations for procedural generation.</p>
    </div>

    <div style="background: #002200; border: 1px solid #0f0; padding: 15px; margin-top: 30px; margin-bottom: 30px;">
        <h3 style="color: #0f0; margin-top: 0; text-align: center;">/// TECH_STACK ///</h3>
        <table style="width: 100%; color: #ccc; font-size: 14px; text-align: center;">
            <tr>
                <td style="width: 33%;">
                    <b style="color: #fff;">[ CORE ]</b><br>
                    C#
                </td>
                <td style="width: 33%;">
                    <b style="color: #fff;">[ RENDERING ]</b><br>
                    Raylib-cs
                </td>
                <td style="width: 33%;">
                    <b style="color: #fff;">[ MATH ]</b><br>
                    System.Numerics
                </td>
            </tr>
        </table>
    </div>

    <h2 style="color: #ff00ff; border-bottom: 1px solid #ff00ff;">[01] Custom Perlin Noise Implementation</h2>
    <p style="color: #ccc;">Implemented a custom Perlin noise algorithm utilizing permutation tables.</p>
    <ul style="color: #ccc;">
        <li><b style="color: #0f0;">Performance:</b> Replaced standard modulo operators with bitwise AND operators to handle coordinates efficiently and prevent endless terrain generation, drastically reducing CPU cycles per frame.</li>
    </ul>

    <h2 style="color: #ff00ff; border-bottom: 1px solid #ff00ff;">[02] Fractional Brownian Motion (fBm)</h2>
    <p style="color: #ccc;">To achieve realistic, jagged mountain peaks rather than smooth unnatural waves, the terrain elevation is calculated using Fractional Brownian Motion. The algorithm layers multiple octaves of Perlin noise, dynamically scaling amplitude and frequency to simulate continental shifts and local rock details simultaneously.</p>

    <h2 style="color: #ff00ff; border-bottom: 1px solid #ff00ff;">[03] Spatial Matrix Rendering & Voxel Logic</h2>
    <ul style="color: #ccc;">
        <li>Handles real-time matrix transformations to center the 3D world around the camera.</li>
        <li>Implements spatial Voxel-based rendering for 3D topography.</li>
    </ul>

    <h2 style="color: #ff00ff; border-bottom: 1px solid #ff00ff;">[04] Performance & Optimization</h2>
    <p style="color: #ccc;">The current grid size of 240x200 forces the CPU to process and push approximately thousands of vertices and draw calls per frame to the GPU in immediate mode. Maintaining a stable 60 FPS demonstrates the efficiency of the underlying C# math loops and the lightweight nature of the Raylib wrapper.</p>

    <br>
    
    <center>
        <a href="https://github.com/Zambrzyckibartosz/TerrainGenerator" target="_blank" style="display: inline-block; padding: 10px 20px; background: #0f0; color: #000; font-weight: bold; text-decoration: none; border: 2px solid #fff;">
            ACCESS REPOSITORY
        </a>
        <br><br>
        <i style="color: #555;">Copyright © 2025 Bob. <span style="color: #0f0;">World rendered successfully.</span></i>
    </center>

    <br><br>
    <center>
        <img src="https://cyber.dabamos.de/88x31/cogs.gif" style="border: 1px solid #333;">
    </center>
</div>
    `
};