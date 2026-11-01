export const raftPage = {
    title: "Raft",
    date: "November 1, 2026",
    theme: "theme-hypnospace",
    content: `
<div style="background-color: #000; color: #0f0; padding: 20px; border: 3px solid #333; font-family: 'Courier New', monospace;">
    <center>
        <a href="https://github.com/Zambrzyckii/Raft" target="_blank" style="text-decoration: none;" alt="Raft">
            <img src="../../public/icons/raft.png" width="200" style="border: 3px ridge #0f0; margin-bottom: 10px; border-radius: 5px;">
        </a>
        <h1 style="color: #0f0; text-shadow: 2px 2px #005500; letter-spacing: 2px;">[ PROJECT: RAFT CONSENSUS ]</h1> 
        <h2 class="blink" style="color: #ff00ff;">> Eight nodes hunting primes and arguing who is in charge_</h2>
    </center>

    <hr style="border: 1px dashed #0f0;">
    
    <p style="color: #ccc;">> INITIALIZING CLUSTER NODE... SUCCESS.<br>
    > ELECTION TIMEOUT STARTED...</p>

    <div style="background: #111; border-left: 4px solid #0f0; padding: 10px; margin-bottom: 20px;">
        <h3 style="color: #fff; margin-top: 0;">:: Project Overview ::</h3>
        <p style="color: #ccc;">A cluster of eight nodes written in C# on .NET 10. They elect a leader and replicate a log over gRPC. The followers split an open-ended hunt for prime numbers, propose every prime they find, and the leader commits each one and stores the log in <b style="color: #0f0;">PostgreSQL</b>. The whole thing runs as in-process Kestrel servers, so eight nodes live in one process inside one container. An Angular dashboard shows it live, animating elections, proposals and commits as they happen.</p>
    </div>

    <h2 style="color: #ff00ff; border-bottom: 1px solid #ff00ff;">[ CORE ARCHITECTURE & CHALLENGES ]</h2>

    <h4 style="color: #fff;">> [01] Raft Algorithm State Machine</h4>
    <p style="color: #ccc;">Nodes in the cluster dynamically change their roles (<span style="color: #0f0;">Follower -> Candidate -> Leader</span>) depending on the network state. State transitions are implemented using the State design pattern, which eliminates complex conditional statements and encapsulates node behavior logic based on its current role.</p>

    <h4 style="color: #fff;">> [02] Dynamic Sharding</h4>
    <p style="color: #ccc;">The cluster does not use static configuration files to assign task pools. The ranges of numbers to check are dynamically divided among nodes using a modulo operation, taking into account the number of currently active followers. In the event of a node failure or Leader change, the system automatically rebalances the work allocation.</p>

    <h4 style="color: #fff;">> [03] Network Optimization & Socket Exhaustion</h4>
    <p style="color: #ccc;">Initially, intensive creation of gRPC channels inside computational loops led to the exhaustion of TCP ports at the OS level. The issue was resolved by implementing a <b style="color: #fff;">connection pooling pattern</b>. Network channels are created once, cached in RAM, and reused to send asynchronous requests.</p>

    <h4 style="color: #fff;">> [04] Race Conditions & Thread Safety</h4>
    <p style="color: #ccc;">The multi-threaded nature of the nodes created risks of race conditions and memory corruption. The code was secured with locks on shared collections and deduplication mechanisms. Among other things, the double-voting problem (voting twice in the same term by a follower/candidate) was solved by implementing a thread-safe state machine that "seals" the cast vote.</p>

    <h4 style="color: #fff;">> [05] Live Dashboard</h4>
    <p style="color: #ccc;">The cluster is not just a wall of logs. A gateway streams the full cluster state to the browser over <b style="color: #0f0;">SignalR</b>, and an Angular dashboard built with signals animates every election, proposal and commit as it happens. Clicking a node pauses it, which lets you force a failover by hand and watch a new leader take over.</p>

    <div style="background: #002200; border: 1px solid #0f0; padding: 15px; margin-top: 30px;">
        <h3 style="color: #0f0; margin-top: 0; text-align: center;">/// TECH_STACK ///</h3>
        <ul style="color: #ccc; list-style-type: square; font-size: 14px;">
            <li><b style="color: #fff;">C# / .NET 10</b> (nodes and the dashboard gateway, with BackgroundService engines for consensus, the prime search and storage)</li>
            <li><b style="color: #fff;">gRPC</b> (consensus between nodes, and monitoring from the gateway)</li>
            <li><b style="color: #fff;">SignalR</b> (pushing the cluster state to the browser)</li>
            <li><b style="color: #fff;">Angular 22 with signals</b> (the live dashboard)</li>
            <li><b style="color: #fff;">PostgreSQL via Npgsql</b> (the registry of found primes)</li>
            <li><b style="color: #fff;">Docker Compose, GitHub Actions, xUnit</b> (orchestration, CI and the failover tests)</li>
        </ul>
    </div>

    <br>
    
    <center>
        <a href="https://github.com/Zambrzyckii/Raft" target="_blank" style="display: inline-block; padding: 10px 20px; background: #0f0; color: #000; font-weight: bold; text-decoration: none; border: 2px solid #fff;">
            ACCESS REPOSITORY
        </a>
        <br><br>
        <i style="color: #555;">Copyright © 2026 Bob. <span style="color: #0f0;">Consensus reached.</span></i>
    </center>

    <br><br>
    <center>
        <img src="https://cyber.dabamos.de/88x31/cogs.gif" style="border: 1px solid #333;">
    </center>
</div>
    `
};