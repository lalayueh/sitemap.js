import {
  SitemapIndexStream,
  createSitemapsAndIndex,
  SitemapAndIndexStream,
  xmlLint,
  parseSitemap,
  InvalidNewsFormat,
  NoURLError,
  NoConfigError,
  ChangeFreqInvalidError,
  PriorityInvalidError,
  UndefinedTargetFolder,
  InvalidVideoFormat,
  InvalidVideoDuration,
  InvalidVideoDescription,
  InvalidAttrValue,
  normalizeURL,
  SitemapStream,
  SitemapItemStream,
} from '../index';

describe('sitemap shape', () => {
  it('exports individually as well', () => {
    expect(NoURLError).toBeDefined();
    expect(InvalidNewsFormat).toBeDefined();
    expect(NoConfigError).toBeDefined();
    expect(ChangeFreqInvalidError).toBeDefined();
    expect(PriorityInvalidError).toBeDefined();
    expect(UndefinedTargetFolder).toBeDefined();
    expect(InvalidVideoFormat).toBeDefined();
    expect(InvalidVideoDuration).toBeDefined();
    expect(InvalidVideoDescription).toBeDefined();
    expect(InvalidAttrValue).toBeDefined();
    expect(SitemapIndexStream).toBeDefined();
    expect(createSitemapsAndIndex).toBeDefined();
    expect(SitemapAndIndexStream).toBeDefined();
    expect(parseSitemap).toBeDefined();
    expect(xmlLint).toBeDefined();
    expect(normalizeURL).toBeDefined();
    expect(SitemapStream).toBeDefined();
    expect(SitemapItemStream).toBeDefined();
  });
});
