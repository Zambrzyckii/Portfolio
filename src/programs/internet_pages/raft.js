export const raftPage = {
    title: "Raft",
    date: "December 05, 2025",
    theme: "theme-hypnospace",
    content: `
<div style="background-color: #000; color: #0f0; padding: 20px; border: 3px solid #333; font-family: 'Courier New', monospace;">
    <center>
        <a href="https://github.com/Zambrzyckibartosz/Raft" target="_blank" style="text-decoration: none;" alt="Raft">
            <img src="../../public/icons/raft.png" width="200" style="border: 3px ridge #0f0; margin-bottom: 10px; border-radius: 5px;">
        </a>
        <h1 style="color: #0f0; text-shadow: 2px 2px #005500; letter-spacing: 2px;">[ PROJECT: RAFT CONSENSUS ]</h1> 
        <h2 class="blink" style="color: #ff00ff;">> Concurrency control in a distributed cluster_</h2>
    </center>

    <hr style="border: 1px dashed #0f0;">
    
    <p style="color: #ccc;">> INITIALIZING CLUSTER NODE... SUCCESS.<br>
    > ELECTION TIMEOUT STARTED...</p>

    <div style="background: #111; border-left: 4px solid #0f0; padding: 10px; margin-bottom: 20px;">
        <h3 style="color: #fff; margin-top: 0;">:: Project Overview ::</h3>
        <p style="color: #ccc;">The project is a fully distributed computing system designed for asynchronous prime number searching. It was designed with high availability and fault tolerance in mind. Instead of relying on a central server, the cluster utilizes an implementation of the <b style="color: #0f0;">Raft consensus algorithm</b> to elect a Leader, synchronize data, and maintain a consistent state across all active instances.</p>
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

    <div style="background: #002200; border: 1px solid #0f0; padding: 15px; margin-top: 30px;">
        <h3 style="color: #0f0; margin-top: 0; text-align: center;">/// TECH_STACK ///</h3>
        <ul style="color: #ccc; list-style-type: square; font-size: 14px;">
            <li><b style="color: #fff;">C#</b> (Core Logic & State Management)</li>
            <li><b style="color: #fff;">gRPC</b> (High-performance RPC framework for Node-to-Node communication)</li>
            <li><b style="color: #fff;">BackgroundServices</b> (Asynchronous background tasks and state machine loops)</li>
            <li><b style="color: #fff;">Docker & Docker Compose</b> (Containerization and Cluster Orchestration)</li>
        </ul>
    </div>

    <br>
    
    <center>
        <a href="https://github.com/Zambrzyckibartosz/Raft" target="_blank" style="display: inline-block; padding: 10px 20px; background: #0f0; color: #000; font-weight: bold; text-decoration: none; border: 2px solid #fff;">
            ACCESS REPOSITORY
        </a>
        <br><br>
        <i style="color: #555;">Copyright © 2025 Bob. <span style="color: #0f0;">Consensus reached.</span></i>
    </center>

    <br><br>
    <center>
        <img src="https://cyber.dabamos.de/88x31/cogs.gif" style="border: 1px solid #333;">
    </center>
</div>
    `
};