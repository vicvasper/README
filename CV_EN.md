<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CV - Victor Rivas</title>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;800&display=swap');
        
        :root {
            --primary: #252525;
            --accent: #0078D4;
            --text-main: #333;
            --text-muted: #666;
            --bg: #fff;
        }

        body { font-family: 'Inter', sans-serif; line-height: 1.5; color: var(--text-main); margin: 0; background: #f4f4f4; }
        .page { background: var(--bg); width: 210mm; min-height: 297mm; margin: 20px auto; display: grid; grid-template-columns: 32% 68%; box-shadow: 0 0 20px rgba(0,0,0,0.1); }
        
        /* Sidebar */
        .sidebar { background: var(--primary); color: #fff; padding: 40px 30px; }
        .profile-img { width: 120px; height: 120px; border-radius: 50%; object-fit: cover; margin-bottom: 20px; border: 4px solid rgba(255,255,255,0.2); display: block; }
        .sidebar h1 { font-size: 28px; margin: 0; line-height: 1.1; font-weight: 800; }
        .sidebar h2 { font-size: 16px; font-weight: 400; color: #aaa; margin-top: 5px; margin-bottom: 30px; text-transform: uppercase; letter-spacing: 1px; }
        
        .contact-info div { margin-bottom: 12px; font-size: 13px; display: flex; align-items: center; gap: 10px; }
        .contact-info a { color: #fff; text-decoration: none; opacity: 0.9; }
        
        .section-title-side { text-transform: uppercase; letter-spacing: 2px; font-size: 12px; border-bottom: 1px solid #555; padding-bottom: 5px; margin: 30px 0 15px; color: #ccc; font-weight: 700; }
        
        .skill-tag { display: inline-block; background: rgba(255,255,255,0.15); padding: 4px 8px; border-radius: 4px; font-size: 12px; margin: 0 4px 6px 0; }
        
        /* Main Content */
        .main { padding: 40px; }
        .section-title { font-size: 14px; text-transform: uppercase; letter-spacing: 1.5px; color: var(--accent); font-weight: 700; border-bottom: 2px solid #eee; padding-bottom: 8px; margin-bottom: 20px; margin-top: 30px; }
        .section-title:first-child { margin-top: 0; }

        .job-block { margin-bottom: 25px; }
        .job-header { display: flex; justify-content: space-between; align-items: baseline; margin-bottom: 6px; }
        .job-role { font-weight: 700; font-size: 16px; color: var(--primary); }
        .job-company { font-weight: 600; color: var(--text-muted); }
        .job-date { font-size: 13px; color: var(--accent); font-weight: 600; }
        .job-desc { font-size: 14px; color: #444; margin: 0; padding-left: 18px; }
        .job-desc li { margin-bottom: 6px; }

        .project-item { margin-bottom: 15px; }
        .project-head { font-weight: 700; font-size: 15px; color: var(--primary); display: flex; justify-content: space-between; }
        .project-tech { font-size: 12px; color: var(--accent); font-weight: 600; }
        .project-detail { font-size: 13px; color: #555; margin-top: 4px; }

        /* Print Settings */
        @media print {
            body { background: none; -webkit-print-color-adjust: exact; }
            .page { margin: 0; box-shadow: none; width: 100%; height: 100%; }
        }
    </style>
</head>
<body>

    <div class="page">
        <aside class="sidebar">
            <img src="photo.jpg" alt="Victor Rivas" class="profile-img"> 
            
            <h1>Victor Rivas</h1>
            <h2>Unreal Engine Developer</h2>
            
            <div class="contact-info">
                <div>📧 <a href="mailto:vic.rivasperez@gmail.com">vic.rivasperez@gmail.com</a></div>
                <div>📱 +34 722 34 92 47</div>
                <div>📍 Las Palmas, Spain</div>
                <div>🔗 <a href="https://github.com/vicvasper">github.com/vicvasper</a></div>
                <div>💼 <a href="https://linkedin.com/in/victorrivasperez">linkedin.com/in/victorrivasperez</a></div>
            </div>

            <div class="section-title-side">Core Skills</div>
            <div class="skill-tag">C++ & Blueprints</div>
            <div class="skill-tag">Unreal Engine 5</div>
            <div class="skill-tag">Editor Tools & Plugins</div>
            <div class="skill-tag">Gameplay Programming</div>
            <div class="skill-tag">Profiling & Optimization</div>
            <div class="skill-tag">Multiplayer Replication</div>

            <div class="section-title-side">Software</div>
            <div class="skill-tag">Visual Studio</div>
            <div class="skill-tag">Git / GitHub Actions</div>
            <div class="skill-tag">RenderDoc / Insights</div>
            <div class="skill-tag">Blender / Maya</div>
            
            <div class="section-title-side">Languages</div>
            <div style="font-size: 13px; margin-bottom: 5px;">Spanish (Native)</div>
            <div style="font-size: 13px;">English (Technical/B1)</div>
        </aside>

        <main class="main">
            
            <div class="section-title">Professional Profile</div>
            <p style="font-size: 14px; color: #444; margin-bottom: 20px;">
                Experienced Unreal Engine Developer specializing in <strong>Gameplay Systems and Editor Tools</strong>. Over 5 years of experience architecting scalable C++ solutions, optimizing runtime performance, and building custom plugins to accelerate production pipelines. Passionate about solving complex technical challenges, from real-time motion capture integration to procedural generation systems.
            </p>

            <div class="section-title">Experience</div>

            <div class="job-block">
                <div class="job-header">
                    <div><span class="job-role">Unreal Engine Developer</span> <span class="job-company">| Salascala / TheWiseDreams</span></div>
                    <span class="job-date">2024 – Present</span>
                </div>
                <ul class="job-desc">
                    <li>Engineered full <strong>Motion Capture pipelines</strong>: designed end-to-end workflows (Capture → Retargeting → Editor) and custom integration tools.</li>
                    <li>Conducted R&D for pioneering physics-based surf capture systems and experimental mechanics (NDA).</li>
                    <li>Implemented network replication logic and gameplay systems for high-fidelity multiplayer prototypes.</li>
                    <li>Led cross-discipline collaboration (design, animation, QA) to reduce iteration times on complex assets.</li>
                </ul>
            </div>

            <div class="job-block">
                <div class="job-header">
                    <div><span class="job-role">Game Programmer</span> <span class="job-company">| Selene Games</span></div>
                    <span class="job-date">2024</span>
                </div>
                <ul class="job-desc">
                    <li>Optimized <strong>Level Streaming</strong> strategies to reduce load spikes and memory usage in open environments.</li>
                    <li>Implemented core gameplay features and developed in-game debugging tools to assist the QA team.</li>
                </ul>
            </div>

            <div class="job-block">
                <div class="job-header">
                    <div><span class="job-role">Lead Gameplay Programmer</span> <span class="job-company">| Team Panda</span></div>
                    <span class="job-date">2021 – 2022</span>
                </div>
                <ul class="job-desc">
                    <li>Lead programmer for <em>Azra</em> (PlayStation Talents Finalist). Responsible for character mechanics, physics interactions, and console optimizations.</li>
                    <li>Managed technical performance requirements for platform certification.</li>
                </ul>
            </div>

            <div class="section-title">Selected Projects & Plugins</div>
            
            <div class="project-item">
                <div class="project-head">Optilogger Plugin (UE5.x) <span class="project-tech">C++ / Editor Utility</span></div>
                <div class="project-detail">
                    Editor profiling tool that analyzes static assets, textures, and shaders to identify performance bottlenecks. Drastically reduces level optimization time.
                </div>
            </div>

            <div class="project-item">
                <div class="project-head">Kinemotion Plugin <span class="project-tech">C++ / MediaPipe / Python</span></div>
                <div class="project-detail">
                    Real-time full-body motion capture system. Integrates MediaPipe with Unreal Engine to map human poses to Skeletal Meshes using a standard webcam.
                </div>
            </div>

            <div class="project-item">
                <div class="project-head">Procedural Animated System <span class="project-tech">C++ / Physics</span></div>
                <div class="project-detail">
                    Procedural system that auto-detects terrain to generate physics-based bridges and platforms adaptable at runtime.
                </div>
            </div>

            <div class="section-title">Education</div>
            <div style="font-size: 13px; margin-bottom: 8px;">
                <strong>Advanced Degree in UE5 (C++ & Blueprints)</strong> | EOI (2024-2025)
            </div>
            <div style="font-size: 13px;">
                <strong>Master in Digital Animation</strong> | Voxel School (2021-2022)
            </div>

        </main>
    </div>

</body>
</html>
