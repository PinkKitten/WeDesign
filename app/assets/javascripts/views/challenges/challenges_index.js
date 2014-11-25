WeDesign.Views.ChallengesIndex = Backbone.View.extend({
	initialize: function() {
		this.listenTo(this.collection, 'sync', this.render);
	},
	
  template: JST['challenges/index'],
	
	render: function () {
		var content = this.template({
			challenges: this.collection
		});
		this.$el.html(content);
		return this;
	}

});
