window.WeDesign = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    var $rootEl = $("#content");
		var collection = new WeDesign.Collections.Challenges();
		new WeDesign.Routers.Router({
			$rootEl: $rootEl,
			collection: collection
		})
		Backbone.history.start();
  }
};

$(document).ready(function(){
  WeDesign.initialize();
});
