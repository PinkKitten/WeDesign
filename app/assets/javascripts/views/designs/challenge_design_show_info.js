WeDesign.Views.ChallengeDesignShowInfo = Backbone.CompositeView.extend({
	tagName: "div",
	className: "",	
	
  template: JST['designs/challenge-design-show-info'],
	
	initialize: function () {
		this.listenTo(this.model, 'sync', this.render)
	},
	
	events: {
		'click button.button-to-preorder': 'renderPreOrderForm'
	},
	
	render: function () {
		var content = this.template({
			design: this.model
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
