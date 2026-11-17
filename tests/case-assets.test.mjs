import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readdirSync } from 'node:fs';
import { published } from '../src/content/projects.ts';

test('every published case image exists with the exact filename used by its story', () => {
  const images = new Set(readdirSync(new URL('../src/assets/case-studies/', import.meta.url)));
  for (const project of published) {
    for (const block of project.story ?? []) {
      const references = block.type === 'gallery' ? block.images : 'image' in block ? [block.image] : [];
      for (const image of references) {
        assert.ok(images.has(image.src), `${project.slug}: missing case image ${image.src}`);
      }
    }
  }
});
