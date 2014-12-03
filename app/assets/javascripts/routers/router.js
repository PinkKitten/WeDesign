WeDesign.Routers.Router = Backbone.Router.extend({
	initialize: function(options){
		this.$rootEl = options.$rootEl;
		this.challengesCollection = options.challengesCollection;
	},

	routes: {
		"home": 'showHome',
		"challenges": 'indexChallenges',
		"challenges/:id": 'showChallenge',
		"challenges/:id/designs/:id": 'showChallengeDesign'
	},
	
	showHome: function () {
		var homeView = new WeDesign.Views.HomeShow();
		this._swapView(homeView);
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
		// showView.delegateEvents();
	},
	
	showChallengeDesign: function(challengeId, designId) {
		var challenge = this.challengesCollection.getOrFetch(challengeId);
		// var design = challenge.designs().get(designId);
		var design = new WeDesign.Models.Design({ id: designId});
		design.fetch();
		var challengeDesignShowView = new WeDesign.Views.ChallengeDesignShow({
			challenge: challenge,
			model: design
		});
		this._swapView(challengeDesignShowView);
	},
	
	_swapView: function(view) {
		this._currentView && this._currentView.remove();
		this._currentView = view;
		this.$rootEl.html(view.render().$el);
	}
	
});
