export const auctionPage = {
    title: "Auction System",
    date: "August 5, 2026",
    theme: "theme-hypnospace",
    content: `
<div style="background-color: #000; color: #0f0; padding: 20px; border: 3px solid #333; font-family: 'Courier New', monospace;">
    <center>
        <a href="https://github.com/Zambrzyckibartosz/Auction" target="_blank" style="text-decoration: none;" alt="Gamified Auction System">
            <img src="../../public/icons/auction.png" width="200" style="border: 3px ridge #0f0; margin-bottom: 10px; border-radius: 5px;">
        </a>
        <h1 style="color: #0f0; text-shadow: 2px 2px #005500; letter-spacing: 2px;">[ PROJECT: GAMIFIED AUCTION SYSTEM ]</h1> 
        <h2 class="blink" style="color: #ff00ff;">> Virtual economy & item flipping engine_</h2>
    </center>

    <hr style="border: 1px dashed #0f0;">
    
    <p style="color: #ccc;">> DEPLOYING MODULAR MONOLITH... SUCCESS.<br>
    > ESTABLISHING RABBITMQ CONNECTIONS...</p>

    <div style="background: #111; border-left: 4px solid #0f0; padding: 10px; margin-bottom: 20px;">
        <h3 style="color: #fff; margin-top: 0;">:: Project Overview ::</h3>
        <p style="color: #ccc;">This repository contains the backend infrastructure for a gamified auction system focused on <b>item flipping</b> mechanics, insta-sell capabilities, and a robust virtual economy. The architecture is built upon the <b>Modular Monolith</b> pattern, designed for a seamless transition toward event-driven microservices.</p>
    </div>

    <div style="background: #002200; border: 1px solid #0f0; padding: 15px; margin-top: 30px; margin-bottom: 30px;">
        <h3 style="color: #0f0; margin-top: 0; text-align: center;">/// ECOSYSTEM_TOPOLOGY ///</h3>
        <table style="width: 100%; color: #ccc; font-size: 14px;">
            <tr>
                <td style="vertical-align: top; width: 33%;">
                    <b style="color: #fff;">[ CORE SYSTEM ]</b><br>
                    - API Gateway<br>
                    - .NET (C#) Backend<br>
                    - PostgreSQL
                </td>
                <td style="vertical-align: top; width: 33%;">
                    <b style="color: #fff;">[ COMMUNICATION ]</b><br>
                    - RabbitMQ Broker<br>
                    - Event-Driven integration
                </td>
                <td style="vertical-align: top; width: 33%;">
                    <b style="color: #fff;">[ CLIENTS ]</b><br>
                    - Angular UI<br>
                    - Autonomous AI Bots
                </td>
            </tr>
        </table>
    </div>

    <h2 style="color: #ff00ff; border-bottom: 1px solid #ff00ff;">[01] System Modules</h2>
    <ul style="color: #ccc;">
        <li><b style="color: #0f0;">Auctions:</b> The market hub. Driven by a full <b>CQRS</b> architectural pattern (Entity Framework Core for writes, Dapper for complex, high-performance reads).</li>
        <li><b style="color: #0f0;">Wallets:</b> The financial fortress. Manages virtual currency, funds freezing during bidding, and strictly protects the system against <i>Double-Spend</i> attacks using the CQS pattern.</li>
        <li><b style="color: #0f0;">Users (Identity):</b> The gatekeeper. Handles user authentication, JWT generation, and onboarding.</li>
        <li><b style="color: #0f0;">Shared.Integration:</b> The single cross-module contact point containing global exceptions and integration event contracts (e.g., <code>BidPlacedEvent</code>).</li>
    </ul>

    <h2 style="color: #ff00ff; border-bottom: 1px solid #ff00ff;">[02] Architectural Patterns & Decisions</h2>
    <ul style="color: #ccc;">
        <li><span style="color: #0f0;">Pragmatic DDD:</span> Strong domain encapsulation. Entity fields are mutated exclusively via dedicated methods enforcing business rules (Behavior over Data), leveraging C# 12 Primary Constructors and locked setters.</li>
        <li><span style="color: #0f0;">Optimistic Concurrency:</span> Financial integrity is guaranteed by EF Core's built-in concurrency token mechanism, rejecting parallel transactions via <code>DbUpdateConcurrencyException</code>.</li>
        <li><span style="color: #0f0;">Outbox Pattern:</span> Ensures atomic persistence of domain states and events in a single transaction, mitigating the risk of message loss.</li>
        <li><span style="color: #0f0;">Testcontainers:</span> Complete abandonment of database mocking in favor of real integration tests executed within isolated PostgreSQL Docker containers.</li>
    </ul>

    <h2 style="color: #ff00ff; border-bottom: 1px solid #ff00ff;">[03] Development Status & Roadmap</h2>
    <h4 style="color: #fff;">> [ COMPLETED ]</h4>
    <p style="color: #ccc; margin-top: 5px;">
        - <b>Wallets Module (Bulletproofed):</b> Implemented safe <code>AddFunds/LockFunds</code> methods, precise <code>numeric(18,2)</code> testing, and comprehensive test coverage (Unit, Integration, Smoke).<br>
        - <b>Identity Module (Domain):</b> Strong user encapsulation (Soft-Delete capabilities), integrated bcrypt hashing, and JWT token issuance via MediatR pipelines.
    </p>

    <h4 style="color: #fff;">> [ IN PROGRESS & TO-DO ]</h4>
    <p style="color: #ccc; margin-top: 5px;">
        - Automating transparent currency account (wallet) creation upon <code>UserRegisteredEvent</code>.<br>
        - Standardizing domain events with a dedicated Background Worker for the Outbox Pattern.<br>
        - Hooking the API directly into RabbitMQ to finalize infrastructure for autonomous trading bots.
    </p>
    
    <br>
    
    <center>
        <a href="https://github.com/Zambrzyckibartosz/Auction" target="_blank" style="display: inline-block; padding: 10px 20px; background: #0f0; color: #000; font-weight: bold; text-decoration: none; border: 2px solid #fff;">
            ACCESS REPOSITORY
        </a>
        <br><br>
        <i style="color: #555;">Copyright © 2026 Bob. <span style="color: #0f0;">Market is open.</span></i>
    </center>

    <br><br>
    <center>
        <img src="https://cyber.dabamos.de/88x31/cogs.gif" style="border: 1px solid #333;">
    </center>
</div>
    `
};