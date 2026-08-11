import { spawnSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const outDir = path.join(root, 'assets/textures/photo_psx');
fs.mkdirSync(outDir, { recursive: true });

const jobs = [
  {
    name: 'room_wall_photo_psx.jpg',
    src: 'assets/references/common.jpeg',
    crop: '180x290+18+112',
    resize: '64x64!',
    level: '8%,88%',
    brightness: '-8',
    saturation: '58',
  },
  {
    name: 'curtain_photo_psx.jpg',
    src: 'assets/references/common.jpeg',
    crop: '190x430+384+45',
    resize: '64x96!',
    level: '6%,92%',
    brightness: '-4',
    saturation: '72',
  },
  {
    name: 'window_room_photo_psx.jpg',
    src: 'assets/references/common.jpeg',
    crop: '130x160+304+62',
    resize: '64x96!',
    level: '4%,88%',
    brightness: '-18',
    saturation: '42',
  },
  {
    name: 'desk_laminate_photo_psx.jpg',
    src: 'assets/references/common.jpeg',
    crop: '170x155+333+265',
    resize: '64x64!',
    level: '8%,90%',
    brightness: '-10',
    saturation: '70',
  },
  {
    name: 'exterior_wall_photo_psx.jpg',
    src: 'assets/references/217C084F5221A49A31.jpeg',
    crop: '360x620+165+180',
    resize: '96x128!',
    level: '5%,88%',
    brightness: '-12',
    saturation: '40',
  },
  {
    name: 'building_windows_photo_psx.jpg',
    src: 'assets/references/217C084F5221A49A31.jpeg',
    crop: '300x300+180+280',
    resize: '96x96!',
    level: '5%,86%',
    brightness: '-14',
    saturation: '48',
  },
  {
    name: 'entrance_glass_photo_psx.jpg',
    src: 'assets/references/2179E3495221A4DE12.jpeg',
    crop: '330x520+160+300',
    resize: '96x128!',
    level: '5%,88%',
    brightness: '-18',
    saturation: '38',
  },
  {
    name: 'asphalt_photo_psx.jpg',
    src: 'assets/references/2452E8505221A4632D.jpeg',
    crop: '420x180+120+785',
    resize: '96x48!',
    level: '4%,78%',
    brightness: '-24',
    saturation: '30',
  },
];

for (const job of jobs) {
  const src = path.join(root, job.src);
  const dest = path.join(outDir, job.name);
  const args = [
    src,
    '-auto-orient',
    '-crop',
    job.crop,
    '+repage',
    '-resize',
    job.resize,
    '-filter',
    'point',
    '-colorspace',
    'sRGB',
    '-modulate',
    `${100 + Number(job.brightness)},${job.saturation},100`,
    '-level',
    job.level,
    '-posterize',
    '18',
    '-strip',
    '-interlace',
    'Plane',
    '-quality',
    '52',
    dest,
  ];
  const result = spawnSync('magick', args, { stdio: 'inherit' });
  if (result.status !== 0) process.exit(result.status ?? 1);
  console.log(`generated ${path.relative(root, dest)}`);
}
