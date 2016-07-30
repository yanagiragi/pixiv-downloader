const pixiv = require('pixiv.js');
const pixivImg = require('pixiv-img');

module.exports.getPixiv = function(){
	return new pixiv('your_account','your_password');
}
module.exports.getRemoteStorage = function(){
	return "your_remote_storage";
}
module.exports.fetchImg = function (illustid) {
	const pix = this.getPixiv();
	pix.works(illustid).then(res => {
		if(res.status == "success"){
			var title = res.response[0].title;
			var author = res.response[0].user.name; 
			var large = res.response[0].image_urls.large;
			var page = res.response[0].page_count;
						
			var prefix = large.substring(0,large.lastIndexOf('_p0')+2);
			var postfix = large.substring(large.lastIndexOf('_p0')+3,large.length);
						
			for( var i = 0; i < page; ++i){
				var largename = prefix + i + postfix;
				pixivImg(largename).then( output => {
					var filename = title + '_' + author + '_' + output;
					filename = storeindex + filename.replace('/','\\').replace(' ','_');
					fs.rename(output,filename,function(err){
						if(err){
							console.log(err);
							fs.rename(output,storeindex+output,function(err){
								if(err)
									console.log('rename failed.');
							});
						}
						else
							console.log( filename +  " has stored.");
					});
				});
			}
		}
	});
	return;
}
