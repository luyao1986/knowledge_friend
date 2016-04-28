
export function callFeedAPI(url, lastPublished, callback) {
  //TODO maybe can try https://developers.google.com/feed/
  console.log("try to get articles of feed:" + url);
  $.ajax({
    type: "GET",
    url: "http://ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=10&q="+url,
    dataType: "jsonp",
    success: function( data ) {
      if ( data['responseStatus'] !== 200 ) {
        console.log( "Could not fetch "+url );
      } else {
        callback(data);
      }
    }
  });
};