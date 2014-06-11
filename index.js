var gith = require('gith').create( 1337 );

gith({}).on( 'all', function( payload ) {


  var gitdata = {
    update: 'Github Update: ',
    title: payload.repo,
    head: payload.urls.head,
    added: payload.files.added,
    modded: payload.files.modified,
    deleted: payload.files.deleted,
    comment: payload.original.head_commit.message,
    pusher: payload.original.pusher.name,
    url: payload.original.repository.url
  };

  var addedFiles = "";

  if(!gitdata.added.length < 1) {
    addedFiles += "Files Added: ";

    for(var i = 0; i < gitdata.added.length; i++) {
      if(gitdata.added.length == 1 || i == 0) {
        addedFiles += gitdata.added[0];
      } else {
        addedFiles += (", " + gitdata.added[i]);
      }
    }
  }

  var moddedFiles = "";

  if(!gitdata.modded.length < 1) {
    moddedFiles += "Files Modified: ";

  for(var i = 0; i < gitdata.modded.length; i++) {
      if(gitdata.modded.length == 1 || i == 0) {
        moddedFiles += gitdata.modded[0];
      } else {
        moddedFiles += (", " + gitdata.modded[i]);
      }
    }
  }

  var deletedFiles = "";

  if(!gitdata.deleted.length < 1) {
  deletedFiles += "Files Deleted: ";

  for(var i = 0; i < gitdata.deleted.length; i++) {
      if(gitdata.deleted.length == 1 || i == 0) {
        deletedFiles += gitdata.deleted[0];
      } else {
        deletedFiles += (", " + gitdata.deleted[i]);
      }
    }
  }

console.log("Everything looks good");
console.log(gitdata.update + gitdata.comment);
});
