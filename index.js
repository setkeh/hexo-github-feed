var gith = require('gith').create( 1337 );

gith({}).on( 'all', function( payload ) {


  var gitdata = {
    title: payload.repo,
    head: payload.urls.head,
  };

return gitdata.title
return gitdata.head
});
