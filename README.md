# Victor Rivas

**Unreal Engine Developer | C++ | Editor Tooling | VR | Mocap Pipelines**

5+ years shipping gameplay systems, editor plugins, and technical pipelines in C++ and Blueprints. Founded my own studio with a title on Steam. Delivered a VR product for a government tourism board and a PlayStation Talents finalist optimized for PS4.

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?style=flat&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/victorrivasperez/)
[![Portfolio](https://img.shields.io/badge/Portfolio-000?style=flat&logo=github&logoColor=white)](https://vicvasper.github.io/README/)
[![Email](https://img.shields.io/badge/Email-EA4335?style=flat&logo=gmail&logoColor=white)](mailto:vic.rivasperez@gmail.com)

---

## What I Do

I build the tools and systems that let teams ship faster. My work covers gameplay programming, Slate editor plugins, real-time motion capture integration (NNE, DirectML, Live Link), VR development with hand-tracking on Meta Quest, multiplayer replication, and performance optimization for PC and console.

I read engine source when docs fall short, and I actively look for the parts of a project that other developers avoid.

**Current R&D:** Building a FinePOSE-based real-time 3D pose estimation pipeline (PyTorch + MediaPipe + RTMPose + CLIP) with UE5 socket integration for next-gen motion capture.

---

## Featured Projects

### [Kinemotion Mocap](https://github.com/vicvasper/Kinemotion_UE5.5-)
`C++` `NNE / DirectML` `Live Link` `Multiplayer`

Real-time monocular mocap plugin for UE5.3+. Runs AI pose inference on GPU via NNE (DirectML), decodes 133 keypoints into a 19-bone skeleton, and streams through a custom Live Link source with auto-calibration, anti-jitter filtering, and multiplayer support. Every line is C++, from Live Link source registration to render-target preprocessing.

### [Optilogger](https://github.com/vicvasper/Optilogger_UE5.x)
`C++` `Slate UI` `Profiling` ★6

Editor profiling plugin (1,100+ lines analysis, 865 lines Slate UI) that scans meshes, textures, materials, animations, audio, lighting, and post-process. Memory estimation, shader instruction counting, frustum culling analysis, and JSON export. The first tool I reach for on every project.

### [SmartFolders](https://github.com/vicvasper/SmartFoldersPlugin_UE5.6)
`Python` `C++` `Editor` ★4

Rule-driven asset organizer for Content Browser. Dual modes (type-based + intelligent name-grouping), Epic-recommended presets, full undo, and batch operations. Teams report ~70% less time spent on manual asset organization.

### [Paint System](https://github.com/vicvasper/Paint-System-5.4)
`C++` `Render Target` `Materials` ★5

Runtime vertex-color painting for Static and Skeletal Meshes. Per-channel RGBA, configurable fade, GPU-batched updates, and full Blueprint API.

### [Procedural Animated System](https://github.com/vicvasper/Procedural-Animated-System_UE5.5)
`C++` `Spline` `PCG`

Environment-aware procedural generator. Line-traces terrain to spawn spline bridges, zigzag wall ladders, or stepped ramps based on surface normals. Animation-ready with runtime spawning.

### [Time Control Mechanic](https://github.com/vicvasper/TIme-Control-Mechanic_UE5.5)
`C++` `Physics` `Gameplay`

Per-object time manipulation: fast-forward, rewind, and freeze. Captures and restores full physics state per actor for granular temporal control.

**[See all repositories →](https://github.com/vicvasper?tab=repositories)**

---

## Professional Experience

**Founder & Lead Programmer** · [The Boltage Studio](https://theboltagestudio.com) · 2022 — Present
- Leading all gameplay programming for [Amper](https://theboltagestudio.com/presskit-amper/) (featured in DeVuego)
- [Noah and the Cosmic Cleanup](https://store.steampowered.com/app/3952590/Noah__The_Cosmic_Cleanup/) listed on Steam, releasing March 2026
- Established CI/CD via GitHub Actions, code review processes, and sprint-based delivery

**Unreal Engine Developer** · Salascala / TheWiseDreams · 2025
- Developed VR products with full hand-tracking for Meta Quest
- Built end-to-end mocap pipeline: Quest 3 + webcam inputs via Live Link, NNE with DirectML GPU backend
- Implemented client-server replication for character interactions, synced physics, and networked animation
- Delivered Slate-based editor utilities that removed manual steps for animation and QA workflows

**Gameplay Programmer** · Selene Games · 2024
- Developed spline-based vehicle system with tunable acceleration, braking curves, and drift physics
- Improved level streaming performance and resolved build-stability issues

**Lead Programmer** · Team Panda · 2021 — 2022
- Architected controller input, combat, and character systems for Azra (PlayStation Talents 2021 Best Narrative finalist)
- Profiling and performance passes targeting PS4, reducing draw calls and memory footprint

---

## Tech Stack

| Category | Technologies |
|---|---|
| **Core Engine** | C++, Blueprints, UE5.x, UE4, Live Link |
| **Systems** | Gameplay Systems, Multiplayer / Replication, VR (Meta Quest 3), Procedural Generation, Physics Simulation, AI / ML Integration |
| **Tooling** | Editor Plugins, Slate UI, Profiling & Optimization, Mocap Pipelines |
| **Pipeline** | Git, GitHub Actions / CI, Visual Studio, RenderDoc |
| **Additional** | Python, C#, NNE / DirectML, MediaPipe, Blender, Maya |

---

## Education

**Game Development Course, Unreal Engine 5 (C++ & Blueprints)** · EOI — Escuela de Organización Industrial · 2023

**Master in Digital Animation & VFX** · Voxel School, Madrid · 2021 — 2022

**Advanced Vocational Degree: 3D Animation, Games & Interactive Environments** · EISV, Vigo · 2019 — 2021

---

## Contact

📍 Las Palmas, Spain · Open to Remote & Relocation

📧 [vic.rivasperez@gmail.com](mailto:vic.rivasperez@gmail.com) · 💼 [LinkedIn](https://www.linkedin.com/in/victorrivasperez/) · 🌐 [Portfolio](https://vicvasper.github.io/README/)
