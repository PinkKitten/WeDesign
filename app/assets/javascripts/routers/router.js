WeDesign.Routers.Router = Backbone.Router.extend({
	initialize: function(options){
		this.$rootEl = options.$rootEl
		this.collection = options.collection
	},
	
	//need to adjust the actual routes specs later
	routes: {
		"api/challenges": 'index'
	},
	
	index: function() {
		this.collection.fetch();
		var indexView = new WeDesign.Views.ChallengesIndex({
			collection: this.collection
		});
		this._swapView(indexView);
	},
	
	_swapView: function(view) {
		this._currentView && this._currentView.remove();
		this._currentView = view;
		this.$rootEl.html(view.render().$el);
	}
	
});
