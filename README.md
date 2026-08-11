# Night Dormitory

Browser-playable first-person psychological horror prototype for a game hackathon.

## Play

Hosted build:

https://adgk2349.github.io/Night-Dormitory/

Local development:

```bash
npm install
npm run dev
```

Open `http://localhost:5173`.

## Controls

- `WASD`: Move
- Mouse: Look
- `E`: Interact
- `Shift`: Walk slowly

## Demo Scope

- Single-room apartment horror loop
- Goshiwon corridor with the room placed next to an elevator
- First-floor shared rice-cooker area
- Room details based on the provided reference photos: curtain, wall AC, narrow bed, desk/drawer, black chair, fan, vertical window, and wood floor tone
- Rebuilt first room layout around the reference photo: narrow rectangular goshiwon room, left-side bed, desk opposite the bed, vertical window/curtains, entry-side clutter, and visible second-floor road/exterior facade through the window
- Enterable compact bathroom with smeared tile texture, sink, mirror, toilet, drain, towel, and shower hose
- Low-poly, low-resource WebGL visuals
- Door and light interactions
- RoomState-driven spatial changes
- Three memory fragments
- One loop ending
- Event audio for lights, doors, footsteps, elevator, fluorescent hum, and corridor ambience
- OBJ props loaded for bed, desk, chair, room door, elevator door, fluorescent fixture, and rice cooker
- Corridor clutter layout with trash bags, cardboard boxes, slippers, flyers, a power strip, and door-gap cable staging
- Narrowed corridor staging so room 204 and the adjacent elevator read clearly after exiting the room
- Denser first-floor shared rice-cooker space with shelves, notices, plastic table, sink block, trash bin, and fluorescent lighting
- Irregular fluorescent micro-flicker logic and distant elevator sound cues
- Retro camera tuning: narrower FOV, slower mouse smoothing, heavier head bob, scanlines, noise, and vignette
- PSX-style derived textures in `assets/textures/psx/`, generated from the source photo/PBR textures at very low resolution and high compression
- Photo-derived low-resolution PSX textures in `assets/textures/photo_psx/` for the room wall, curtains, desk laminate, window, exterior wall, entrance glass, and asphalt
- Runtime generated low-resolution mush textures for fabric and bathroom tile surfaces
- Horror beats: chair reposition after the first memory fragment, slippers shifting toward the elevator in the corridor, and a darker rice-cooker ending pulse

## Build

```bash
npm run build
```

The production build is generated in `dist/`.

Runtime audio used by the browser build is stored in `public/audio/`.

## Texture Generation

```bash
npm run generate:textures
```

This extracts compressed, posterized PSX-style textures from the provided reference photos.

## Debug Views

These hash routes are for development checks and demo capture only:

- `http://localhost:5173/#corridor`
- `http://localhost:5173/#common`
- `http://localhost:5173/#bathroom`

## Asset Policy

Use only self-made, CC0, public-domain, or clearly free commercial-use assets.
Keep license notes for every downloaded asset in the project before submission.
