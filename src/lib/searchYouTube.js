var searchYouTube = (options, callback) => {
  // TODO
  options.part = 'snippet';
  var jqXHR = $.get('https://www.googleapis.com/youtube/v3/search', options);
  jqXHR.done(function(data) { callback(data.items); });
};


window.searchYouTube = searchYouTube;

