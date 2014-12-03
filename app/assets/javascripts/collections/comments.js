WeDesign.Collections.Comments = Backbone.Collection.extend({

  model: WeDesign.Models.Comment,
	url: "/api/comments",
	
	// comparator: function (comment) {
	// 	return -comment.get('created_at');
	// }

});
