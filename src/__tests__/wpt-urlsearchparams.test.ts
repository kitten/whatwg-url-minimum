import { excluded } from './fixtures/wpt-harness';

excluded([
  // DOMException doesn't match fixture
  'URLSearchParams constructor, DOMException as argument',
  // USVString normalization is excluded
  'Construct with 2 unpaired surrogates (no trailing)',
  'Construct with 3 unpaired surrogates (no leading)',
  'Construct with object with NULL, non-ASCII, and surrogate keys',
]);

require('./wpt/urlsearchparams-append.any.js');
require('./wpt/urlsearchparams-constructor.any.js');
require('./wpt/urlsearchparams-delete.any.js');
require('./wpt/urlsearchparams-foreach.any.js');
require('./wpt/urlsearchparams-get.any.js');
require('./wpt/urlsearchparams-getall.any.js');
require('./wpt/urlsearchparams-has.any.js');
require('./wpt/urlsearchparams-set.any.js');
require('./wpt/urlsearchparams-size.any.js');
require('./wpt/urlsearchparams-sort.any.js');
require('./wpt/urlsearchparams-stringifier.any.js');
