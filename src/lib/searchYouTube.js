var searchYouTube = (options, callback, foo) => {
  // TODO
  // options.part = 'snippet';
  foo = foo || 'search';
  var jqXHR = $.get('https://www.googleapis.com/youtube/v3/' + foo, options);
  jqXHR.done(function(data) { callback(data.items); });
};

window.searchYouTube = searchYouTube;

