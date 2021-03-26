require("url");
const ImgixClient = require("imgix-core-js");

const transform = require("./seo.transformer");
const defaults = require("../../_data/seo_defaults.json");

const imgixClient = new ImgixClient({
  domain: process.env.IMGIX_DOMAIN,
  secureURLToken: process.env.IMGIX_TOKEN,
});

const buildUrl = (hostname, pathname) => {
  const url = new URL(pathname, hostname);
  return url.href;
};

const buildImageUrl = (pathname) => {
  return imgixClient.buildURL(pathname, { w: 1440, auto: "format,compress" });
};

describe("SEO", () => {
  it("throws an error if nothing passed", () => {
    expect(() => transform()).toThrow();
  });

  it("has global defaults", () => {
    const seo = transform({});
    const expResult = {
      description: defaults.description,
      image: buildImageUrl(defaults.image),
      og: {
        description: defaults.description,
        image: buildImageUrl(defaults.image),
        title: defaults.title_template.replace("%s", defaults.title),
        type: defaults.og.type,
      },
      title: defaults.title_template.replace("%s", defaults.title),
      twitter: {
        description: defaults.description,
        image: buildImageUrl(defaults.image),
        title: defaults.title_template.replace("%s", defaults.title),
        card: defaults.twitter.card,
      },
      url: buildUrl(defaults.base_url, ""),
    };
    expect(seo).toEqual(expResult);
  });

  it("uses page attributes as fallbacks", () => {
    const args = {
      title: "Foo",
      description: "Bar",
      image: "/baz.png",
      path: "/about",
    };
    const { title, description, image, path } = args;
    const seo = transform(args);
    const expResult = {
      description: description,
      image: buildImageUrl(image),
      og: {
        description: description,
        image: buildImageUrl(image),
        title: defaults.title_template.replace("%s", title),
        type: defaults.og.type,
      },
      title: defaults.title_template.replace("%s", title),
      twitter: {
        description: description,
        image: buildImageUrl(image),
        title: defaults.title_template.replace("%s", title),
        card: defaults.twitter.card,
      },
      url: buildUrl(defaults.base_url, path),
    };
    expect(seo).toEqual(expResult);
  });

  it("allows overriding page-level attributes", () => {
    const page = {
      title: "Foo",
      description: "Bar",
      image: "/baz.png",
      path: "/about",
    };
    const overrides = {
      title: "Hello",
      description: "World",
      image: "/hello-world.jpg",
      path: "/hello-world", // path can't be overridden
    };
    const { title, description, image } = overrides;
    const seo = transform({ ...page, overrides: overrides });
    const expResult = {
      description: description,
      image: buildImageUrl(image),
      og: {
        description: description,
        image: buildImageUrl(image),
        title: defaults.title_template.replace("%s", title),
        type: defaults.og.type,
      },
      title: defaults.title_template.replace("%s", title),
      twitter: {
        description: description,
        image: buildImageUrl(image),
        title: defaults.title_template.replace("%s", title),
        card: defaults.twitter.card,
      },
      url: buildUrl(defaults.base_url, page.path),
    };
    expect(seo).toEqual(expResult);
  });

  it("uses og overrides to set twitter values", () => {
    const og = {
      title: "Foo",
      description: "Bar",
      image: "/baz.png",
      type: "video",
    };
    const seo = transform({ overrides: { og: og } });
    const expResult = {
      description: defaults.description,
      image: buildImageUrl(defaults.image),
      og: {
        description: og.description,
        image: buildImageUrl(og.image),
        title: defaults.title_template.replace("%s", og.title),
        type: og.type,
      },
      title: defaults.title_template.replace("%s", defaults.title),
      twitter: {
        description: og.description,
        image: buildImageUrl(og.image),
        title: defaults.title_template.replace("%s", og.title),
        card: defaults.twitter.card,
      },
      url: buildUrl(defaults.base_url, ""),
    };
    expect(seo).toEqual(expResult);
  });

  it("will set twitter values", () => {
    const twitter = {
      title: "Foo",
      description: "Bar",
      image: "/baz.png",
      card: "summary",
    };
    const seo = transform({ overrides: { twitter: twitter } });
    const expResult = {
      description: defaults.description,
      image: buildImageUrl(defaults.image),
      og: {
        description: defaults.description,
        image: buildImageUrl(defaults.image),
        title: defaults.title_template.replace("%s", defaults.title),
        type: defaults.og.type,
      },
      title: defaults.title_template.replace("%s", defaults.title),
      twitter: {
        description: twitter.description,
        image: buildImageUrl(twitter.image),
        title: defaults.title_template.replace("%s", twitter.title),
        card: twitter.card,
      },
      url: buildUrl(defaults.base_url, ""),
    };
    expect(seo).toEqual(expResult);
  });

  it("builds imgix urls when given relative paths", () => {
    const args = { image: "baz.png" };
    const seo = transform(args);

    expect(process.env.IMGIX_DOMAIN.length).toBeGreaterThan(1);
    expect(seo.image).toContain(process.env.IMGIX_DOMAIN);
    expect(seo.image).toContain("/baz.png?w=1440&auto=format%2Ccompress");
  });
});
