(function (algolia) {
  if (!algolia.config.autocomplete_enabled) return;

  var _ = algolia._,
      $ = algolia.jQuery;

  var autocomplete;

  function index (name) {
    return algolia.client.initIndex('' + algolia.config.index_prefix + name);
  }

  function autocompleteSection (section) {
    var params = autocomplete[section];
    if (params.enabled !== true) return null;

    var templates = {
      empty: function displayEmptyResultSet (props) {
        return algolia.render(params.templates.empty, props);
      },
      suggestion: function displaySuggestion (hit) {
        return algolia.render(params.templates.hit, hit);
      }
    };

    if (params.templates.footer) {
      templates.footer = function displayFooter (props, content) {
        if (content.nbHits <= params.hitsPerPage) return null;

        return algolia.render(params.templates.footer, {
          query: props.query,
          nbHits: content.nbHits
        });
      }
    }

    return {
      name: section,
      source: $.fn.autocomplete.sources.hits(params.index, {
        hitsPerPage: params.hitsPerPage,
        highlightPreTag: '<span class="aa-highlight">',
        highlightPostTag: '</span>'
      }),
      displayKey: 'title',
      templates: templates
    }
  };

  function readjust($this) {
    var data = $this.data('aaAutocomplete');
    if (!data) return;
    var $node = data.$node;
    var $dropdown = data.dropdown.$menu;

    var width = $this.outerWidth();
    var vpWidth = document.body.clientWidth;
    var left = $this.offset().left;
    var right = vpWidth - width - left;

    var align = left < right ? 'left' : 'right';
    var dist = Math.min(left, right);

    // For small centered inputs, take half the screen
    if (4 * dist > vpWidth) {
      align = 'left';
      dist = Math.round(vpWidth / 4);
    }

    var newWidth = vpWidth - 2 * dist;

    $node
      .css('left', '')
      .css('right', '')
      .css(align, dist)
      .css('width', '' + newWidth + 'px');

    var suffix = 'lg';
    if (newWidth < 300) suffix = 'xs';
    else if (newWidth < 600) suffix = 'sm';
    else if (newWidth < 900) suffix = 'md';

    $dropdown
      .removeClass('aa-dropdown-menu-size-xs')
      .removeClass('aa-dropdown-menu-size-sm')
      .removeClass('aa-dropdown-menu-size-md')
      .removeClass('aa-dropdown-menu-size-lg')
      .addClass('aa-dropdown-menu-size-' + suffix);
  }

  autocomplete = algolia.autocomplete = {
    articles: {
      enabled: algolia.config.index_articles,
      hitsPerPage: algolia.config.articles_autocomplete_hits_per_page,
      index: index('articles'),
      templates: {
        empty: algolia.compileTemplate('autocomplete_articles_empty'),
        hit: algolia.compileTemplate('autocomplete_article')
      }
    },
    collections: {
      enabled: algolia.config.index_collections,
      hitsPerPage: algolia.config.collections_autocomplete_hits_per_page,
      index: index('collections'),
      templates: {
        empty: algolia.compileTemplate('autocomplete_collections_empty'),
        hit: algolia.compileTemplate('autocomplete_collection')
      }
    },
    colors: algolia.config.colors,
    debug: algolia.config.autocomplete_debug,
    poweredBy: algolia.config.powered_by,
    products: {
      enabled: algolia.config.index_products,
      hitsPerPage: algolia.config.products_autocomplete_hits_per_page,
      index: index('products'),
      templates: {
        empty: algolia.compileTemplate('autocomplete_products_empty'),
        footer: algolia.compileTemplate('autocomplete_footer'),
        hit: algolia.compileTemplate('autocomplete_product')
      },
    },
    selector: algolia.config.input_selector + ', .algolia-shopify-autocomplete',
    storeName: algolia.storeName,
    templates: {
      dropdown: algolia.compileTemplate('autocomplete'),
      empty: '<div></div>',
      style: algolia.compileTemplate('autocomplete.css')
    }
  };

  if (autocomplete.poweredBy) {
    console.log('Algolia: Autocomplete');
  }

  algolia.appendStyle(algolia.render(autocomplete.templates.style, {
    colors: autocomplete.colors
  }));

  $(document).ready(function mainAutocomplete () {
    autocomplete.$input = $(autocomplete.selector);
    autocomplete.$input.autocomplete({
      debug: autocomplete.debug,
      hint: false,
      appendTo: 'body',
      templates: {
        dropdownMenu: algolia.render(autocomplete.templates.dropdown, {
          storeName: autocomplete.storeName,
          with: {
            articles: autocomplete.articles.enabled,
            collections: autocomplete.collections.enabled,
            poweredBy: autocomplete.poweredBy,
            products: autocomplete.products.enabled
          }
        }),
        empty: autocomplete.templates.empty
      }
    }, _.compact([
      autocompleteSection('collections'),
      autocompleteSection('articles'),
      autocompleteSection('products')
    ]));

    autocomplete.$input.on('autocomplete:selected', function (obj, datum, name) {
      if (name === 'products') {
        window.location.href = '/' + name + '/' + datum.handle + (datum.objectID !== datum.id ? '?variant=' + datum.objectID : '');
      } else if (name === 'articles') {
        window.location.href = '/blogs/' + datum.blog.handle + '/' + datum.handle;
      } else {
        window.location.href = '/' + name + '/' + datum.handle;
      }
    })

    autocomplete.$input.on('autocomplete:redrawn', function () {
      readjust($(this));
    });

    $(window).resize(function () {
      autocomplete.$input.each(function () {
        readjust($(this));
      });
    });
  });
}(algoliaShopify));
