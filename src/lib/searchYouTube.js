var searchYouTube = (options, callback) => {
  // TODO
  options.part = 'snippet';
//   $.ajax({
//     data: options,
//     type: 'GET',
//     url: 'https://www.googleapis.com/youtube/v3/search',
//     // success: (data) => { console.log(data.items);
//     //   callback(data.items); },
//     error: (data) => { console.log('gerroror!'); }
//   }).done( data => {
//     callback(data.items);
//   });
// };

  var jqXHR = $.get('https://www.googleapis.com/youtube/v3/search', options);
  jqXHR.done(function(data) { callback(data.items); });
};


window.searchYouTube = searchYouTube;

