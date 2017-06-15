// =require vendor/jquery.min.js
// =require vendor/modernizr.min.js
// =require vendor/semantic-js/semantic.min.js
// =require vendor/typeahead-js/typeahead.jquery.min.js
// =require vendor/typeahead-js/bloodhound.min.js

$(document).ready(function() {

  /* !
   *   Semantic UI dropdown code
   */

  $('.dropdown').dropdown({
    // you can use any ui transition
    transition: 'drop',
  });

  /* !
   *   Semantic UI fade in/fade out menu code
   */

  $('.masthead').visibility({
    once: false,
    onBottomPassed: function() {
      $('.fixed.menu').transition('fade in');
    },
    onBottomPassedReverse: function() {
      $('.fixed.menu').transition('fade out');
    },
  });

  /* !
   *   Semantic UI autocomplete code
   */

  // $('.ui.search').search({
  //   minCharacters: 3,
  //   // debug: true,
  //   // verbose: true,
  //   showNoResults: true,
  //   transition: 'fade',
  //   apiSettings: {
  //     // url: "https://shopify-proof-of-concept.myshopify.com/search?view=json&q={query}",
  //     url: 'https://localhost:3000/search?view=json&q={query}',
  //     'set loading': true,
  //   },
  //   fields: {
  //     image: 'thumbnail',
  //     results: 'results',
  //     title: 'title',
  //     // categories      : 'results',
  //     // categoryName    : 'name',
  //     // categoryResults : 'results',
  //     // description     : 'description',
  //     // price           : 'price',
  //     // action          : 'action',
  //     // actionText      : 'text',
  //     // url             : 'url',
  //   },
  // });

  /* !
   *   TypeAhead JS autocomplete code
   */

  var shopifySearch = new Bloodhound({
    datumTokenizer: Bloodhound.tokenizers.obj.whitespace('value'),
    queryTokenizer: Bloodhound.tokenizers.whitespace,
    prefetch: 'https://localhost:3000/search?view=json&q=*',
    remote: {
      url: 'https://localhost:3000/search?view=json&q=%QUERY%',
      wildcard: '%QUERY%',
    },
  });

  $('#autocomplete .prompt').typeahead({
    highlight: true,
    minLenght: 3,
  },
    {
      name: 'search-endpoint',
      display: 'title',
      source: shopifySearh,
      templates: {
        suggestion: Handlebars.compile('<div class="position-wrapper">'+
                                        '<div class="poosition-info-wrapper">'+
                                            '<span>{{Title}}</span>'+
                                        '</div>'+
                                       '</div>'),
        notFound: function(){
          var ps=$('#Position').val();
          $('#PositionId').val("");
          return "<div class='position-wrapper'><p>No Position found.</p><a class='ad-ps'>" +
                  "<i class='fa fa-user-secret'></i> Add New Position</a></div>";
        },
      });
});
