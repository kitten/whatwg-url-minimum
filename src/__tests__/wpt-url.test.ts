import { excluded } from './fixtures/wpt-harness';

excluded([
  // Unicode tests won't pass
  'Origin parsing: <http://GOO\u200b\u2060\ufeffgoo.com> against <http://other.com/>',
  'Origin parsing: <http://www.foo。bar.com> against <http://other.com/>',
  'Origin parsing: <http://Ｇｏ.com> against <http://other.com/>',
  'Origin parsing: <http://０Ｘｃ０．０２５０．０１> against <http://other.com/>',
  'Origin parsing: <https://a%C2%ADb/> without base',
  // Punycode tests won't pass
  'Origin parsing: <http://你好你好> against <http://other.com/>',
  'Origin parsing: <https://faß.ExAmPlE/> without base',
  'Origin parsing: <ftp://%e2%98%83> without base',
  'Origin parsing: <https://%e2%98%83> without base',
  // Won't match normalization because of tr64 normalization being missing
  'Setting host with middle U+0000 (https:)',
  'Setting hostname with middle U+0000 (https:)',
  'Setting host with middle U+001F (https:)',
  'Setting hostname with middle U+001F (https:)',

  // Unicode tests won't pass (resources)
  "URL: Setting <https://x/>.host = 'ß' IDNA Nontransitional_Processing",
  "URL: Setting <https://example.com/>.hostname = '%C2%AD'",
  "URL: Setting <https://example.com/>.hostname = 'a%C2%ADb'",
  "URL: Setting <https://example.com/>.host = 'a%C2%ADb'",
  // Punycode tests won't pass (resources)
  "URL: Setting <https://example.com/>.hostname = 'xn--'",
  "URL: Setting <https://example.com/>.host = 'xn--'",

  // These tests pass whatwg-url-without-unicode as well, so can be ignored
  'Parsing: <http://0999999999999999999/> without base',
  'Parsing: <http://foo.09> without base',
  'Parsing: <http://foo.09.> without base',
  'Parsing: <http://1.2.3.09> without base',
  'Parsing: <http://1.2.3.08.> without base',
  'Parsing: <http://1.2.3.08> without base',
]);

require('./wpt/url-constructor.any.js');
require('./wpt/url-origin.any.js');
require('./wpt/url-searchparams.any.js');
require('./wpt/url-setters-stripping.any.js');
require('./wpt/url-setters.any.js');
require('./wpt/url-statics-canparse.any.js');
require('./wpt/url-statics-parse.any.js');
require('./wpt/url-tojson.any.js');
