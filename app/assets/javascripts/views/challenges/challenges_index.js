WeDesign.Views.ChallengesIndex = Backbone.CompositeView.extend({
	
  template: JST['challenges/index'],
	
	initialize: function () {
		this.listenTo(this.collection, 'sync', this.render);
	},
	
	addChallengeItem: function (challenge) {
		var challengeItemShow = new WeDesign.Views.ChallengesIndexItem({
			model: challenge
		});
		this.addSubview('.challenges', challengeItemShow);
	},
	
	render: function () {
		var content = this.template({
			challenges: this.collection
		});
		this.$el.html(content);
		this.renderChallenges();
		return this;
	},
	
	renderChallenges: function () {
		var challenges = this.collection.models;
		_(challenges).each( function (challenge) {
			this.addChallengeItem(challenge);
		}.bind(this));
	}

});
