WeDesign.Views.ChallengesIndexItem = Backbone.CompositeView.extend({ 
	tagName: "div",
	className: "challenges-index-item",	
	template: JST['challenges/index_item'],
	
	initialize: function () {
		this.listenTo(this.model, "sync", this.render);
	},
	
	events: {
		'click div.challenge-container': 'renderShowPage'
	},

	render: function () {
		var content = this.template({
			challenge: this.model
		});
		this.$el.html(content);
		return this;
	},
	
	renderShowPage: function (event) {
		var $target = $(event.currentTarget);
		var id = $target.attr('data-id');
		Backbone.history.navigate("api/challenges/" + id, { trigger: true })
	}
	
})