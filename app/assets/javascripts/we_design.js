window.WeDesign = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    var $rootEl = $("#content");
		var challengesCollection = new WeDesign.Collections.Challenges();
		new WeDesign.Routers.Router({
			$rootEl: $rootEl,
			challengesCollection: challengesCollection
		})
		Backbone.history.start();
  }
};

$(document).ready(function(){
  WeDesign.initialize();
});
