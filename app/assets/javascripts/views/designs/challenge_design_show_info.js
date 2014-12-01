WeDesign.Views.ChallengeDesignShowInfo = Backbone.CompositeView.extend({
	tagName: "div",
	className: "",	
	
  template: JST['designs/challenge-design-show-info'],
	
	initialize: function (options) {
		this.listenTo(this.model, 'sync', this.render);
		this.daysLeft = options.daysLeft;
	},
	
	events: {
		'click button.button-to-preorder': 'renderPreOrderForm'
	},
	
	render: function () {
		// var daysLeft = (this.model.get('end_date') - Date.now()) / (24*3600*1000);
		var content = this.template({
			design: this.model,
			designer: this.model.designer(),
			preOrders: this.model.preOrderUsers().length,
			percentVotes: this.model._percentVotes,
			daysLeft: this.daysLeft
		});
		this.$el.html(content);
		return this;
	},
	
	renderPreOrderForm: function (event) {
		var target = $('button.button-to-preorder');
		if (!target.hasClass('disabled')) {
			target.addClass('disabled')
			$('.design-information').fadeTo('slow', 0.3, function() {
				 $( ".pre-order-form" ).fadeIn( 1000 , function () {
					 // $('#design_title').focus();
				 })
			})
		}
	}

});
