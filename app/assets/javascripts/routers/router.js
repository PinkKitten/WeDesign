WeDesign.Routers.Router = Backbone.Router.extend({
	initialize: function(options){
		this.$rootEl = options.$rootEl;
		this.challengesCollection = options.challengesCollection;
	},
	
	//need to adjust the actual routes specs later
	routes: {
		"api/challenges": 'indexChallenges',
		"api/challenges/:id": 'showChallenge'
	},
	
	indexChallenges: function() {
		this.challengesCollection.fetch();
		var indexView = new WeDesign.Views.ChallengesIndex({
			collection: this.challengesCollection
		});
		this._swapView(indexView);
	},
	
	showChallenge: function(id) {
		var model = this.challengesCollection.getOrFetch(id);
		var showView = new WeDesign.Views.ChallengesShow({
			model: model
		});
		this._swapView(showView);
	},
	
	_swapView: function(view) {
		this._currentView && this._currentView.remove();
		this._currentView = view;
		this.$rootEl.html(view.render().$el);
	}
	
});
