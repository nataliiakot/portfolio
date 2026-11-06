import { test } from 'node:test';
import assert from 'node:assert/strict';
import { publishedProjects } from '../src/content/projects.ts';
const complete = { slug: 'test-only', title: 'Test fixture', category: 'Testing', summary: 'Not actual client work.', cover: { src: '/test.webp', alt: 'Test fixture', width: 100, height: 100 }, context: ['A test story.'] };
test('an empty portfolio creates no public project routes', () => { assert.deepEqual(publishedProjects([]), []); });
test('drafts and incomplete case studies stay unpublished', () => {
  assert.deepEqual(publishedProjects([{ ...complete, draft: true }]), []);
  for (const missing of [{ cover: undefined }, { context: [] }, { title: '' }, { summary: ' ' }, { category: '' }, { cover: { ...complete.cover, alt: '' } }, { cover: { ...complete.cover, width: 0 } }]) assert.deepEqual(publishedProjects([{ ...complete, ...missing }]), []);
});
test('a complete supplied case study becomes routable', () => { assert.deepEqual(publishedProjects([complete]), [complete]); });
test('invalid and duplicate route slugs fail loudly', () => {
  for (const slug of ['../private', 'a/b', 'Bad Slug', '']) assert.throws(() => publishedProjects([{ ...complete, slug }]), /Invalid project slug/);
  assert.throws(() => publishedProjects([complete, complete]), /Duplicate project slug/);
});

test('explicit text-only case studies publish without artwork while still requiring a story', () => {
  const textOnly = { ...complete, textOnly: true, cover: undefined };
  assert.deepEqual(publishedProjects([textOnly]), [textOnly]);
  assert.deepEqual(publishedProjects([{ ...textOnly, context: [] }]), []);
  assert.deepEqual(publishedProjects([{ ...textOnly, draft: true }]), []);
});


test('a narrative case study can publish without legacy sections but needs substantive text', () => {
  const narrative = { ...complete, textOnly: true, cover: undefined, context: undefined, story: [{ type: 'paragraph', text: 'A supplied project narrative.' }] };
  assert.deepEqual(publishedProjects([narrative]), [narrative]);
  assert.deepEqual(publishedProjects([{ ...narrative, story: [{ type: 'heading', level: 2, text: 'Overview' }] }]), []);
  assert.deepEqual(publishedProjects([{ ...narrative, story: [{ type: 'paragraph', text: ' ' }] }]), []);
  assert.deepEqual(publishedProjects([{ ...narrative, story: [{ type: 'list', items: ['A supplied research finding.'] }] }]).length, 1);
});
