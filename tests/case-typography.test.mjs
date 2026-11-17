import { test } from 'node:test';
import assert from 'node:assert/strict';
import { caseText } from '../src/utils/case-typography.ts';

test('articles and first-person I stay with the following word, including consecutive articles', () => {
  const text = caseText('A cleaner sends a request. I designed a UI and I mapped a flow.');
  assert.ok(text.includes('A\u00a0cleaner'));
  assert.ok(text.includes('a\u00a0request'));
  assert.ok(text.includes('I\u00a0designed'));
  assert.ok(text.includes('a\u00a0UI'));
  assert.ok(!/(?:^|\s)[AaI] /.test(text));
});
test('counts remain attached to their descriptions', () => {
  assert.ok(caseText('Feedback from 50 employees informed 450+ screens.').includes('50\u00a0employees'));
  assert.ok(caseText('Feedback from 50 employees informed 450+ screens.').includes('450+\u00a0screens'));
});
test('typography preserves wording, punctuation and is stable when applied twice', () => {
  const source = 'I grouped tasks, requests, and reports in one place.';
  const formatted = caseText(source);
  assert.equal(formatted.replaceAll('\u00a0', ' '), source);
  assert.equal(caseText(formatted), formatted);
  assert.equal(caseText(caseText('A flow to do it.')), caseText('A flow to do it.'));
  assert.equal(caseText(undefined), '');
});
test('a short final word stays with its neighbour without joining long phrases', () => {
  assert.equal(caseText('Know what happens next.'), 'Know what happens\u00a0next.');
  assert.equal(caseText('Extraordinarily comprehensive.'), 'Extraordinarily comprehensive.');
});
