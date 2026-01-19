# Optilogger — Unreal Engine Editor Resource Profiler

TL;DR
Optilogger is an Unreal Engine editor plugin that analyzes level resources (meshes, textures, materials, animations, audio, lighting, post-process) to surface optimization opportunities and hotspots during development.

Key features
- Per-level resource breakdown (mesh/texture/material usage)
- Material and shader complexity indicators
- Animation and sequence memory & cost estimates
- Audio and lightmap impact analysis
- Exportable reports and quick-fix suggestions

Quickstart
1. Clone the repo into your project's Plugins folder or compile the plugin.
2. Open the editor and enable the Optilogger plugin.
3. Run analysis from Window → Optilogger and inspect the generated report.

Role & impact (Victor Rivas)
- Architected and implemented the resource scanning pipeline and UI integration.
- Enabled faster optimization cycles by surfacing heavy assets and problematic materials; reduced iteration time for level optimization.

License
MIT
