# Night Dormitory Submission Notes

## Game Introduction

`Night Dormitory` is a short browser-playable psychological horror demo set inside a small goshiwon-style room. The player checks familiar rooms, interacts with doors and lights, collects memory fragments, and gradually realizes that the space is replaying a past decision. The demo now includes the room-adjacent elevator and a first-floor shared rice-cooker area as the final loop route.

## How To Play

- Open the submitted play link in a desktop browser: https://adgk2349.github.io/Night-Dormitory/
- Click `시작`.
- Use `WASD` to move, mouse to look, and `E` to interact.
- Collect three memory fragments and try the entrance door again.
- After the room opens, follow the corridor to the elevator, then check the first-floor rice cooker.

## Demo Video

Recommended video flow is documented in `DEMO_VIDEO_PLAN.md`.
The submitted video should be under three minutes and include the story preview, room exploration, memory fragments, corridor elevator, shared rice-cooker area, and loop ending.

Generated demo video link:

https://adgk2349.github.io/Night-Dormitory/demo/night-dormitory-demo.webm

## Hackathon Build Scope

This version focuses on a 10-15 minute vertical slice rather than the full two-hour game structure.

- Implemented for direct browser play with WebGL.
- Built with Three.js and Vite.
- Uses a compact apartment layout to reduce asset load.
- Uses a goshiwon-inspired corridor, nearby elevator, and shared rice-cooker area based on the creator's real spatial memory.
- Uses provided reference photos to shape the room details and building atmosphere.
- Uses simple geometry, limited lights, fog, pixelated rendering, and restrained colors to target a low-resource retro horror style.
- Adds an enterable bathroom and photo-derived low-resolution textures so walls, curtains, the desk, window glass, asphalt, and exterior surfaces read closer to smeared photo references instead of flat color blocks.

## Codex Usage

Codex was used for:

- Converting the original two-hour horror concept into a hackathon-sized WebGL demo scope.
- Designing the RoomState progression and memory-fragment flow.
- Implementing the browser game prototype.
- Building the first-person movement, interaction raycast, door/light logic, spatial-change events, and loop ending.
- Creating a repeatable texture extraction script that compresses the provided reference photos into posterized PSX-style JPG textures.
- Fixing GitHub Pages asset paths and running build, browser-render, and deployed-link movement verification.

Human decisions:

- Core horror direction.
- Apartment setting.
- Desired retro night-horror visual style.
- Final creative tone and submission target.
