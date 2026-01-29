import { describe, bench } from 'vitest';
import { URL as LegacyURL } from 'whatwg-url-without-unicode';

import { URL } from './fixtures/lib';

describe('new URL', () => {
  bench('whatwg-url-minimum', () => {
    new URL('http://example.com');
  });

  bench('whatwg-url-without-unicode', () => {
    new LegacyURL('http://example.com');
  });
});
