WeDesign.Views.ChallengeDesignShowInfo = Backbone.CompositeView.extend({
	tagName: "div",
	className: "",	
	
  template: JST['designs/challenge-design-show-info'],
	
	initialize: function (options) {
		this.listenTo(this.model, 'sync add', this.render);
		this.listenTo(this.model.preOrders(), 'add', this.render);
		this.daysLeft = options.daysLeft;
	},
	
	events: {
		'click button.button-to-preorder': 'renderPreOrderForm',
		'submit': 'addPreOrder',
		'blur .pre-order-form': 'closePreOrderForm',
	},
	
	addPreOrder: function (event) {
		event.preventDefault();
		var order = new WeDesign.Models.Vote();
		order.set({
			design_id: this.model.id,
			challenge_id: this.model.get('challenge_id')
		});
		order.save({}, {
			success: function() {
				this.model.preOrders().add(order);
				this.closePreOrderForm();
			}.bind(this)
		})
	},
	
	closePreOrderForm: function (event) {
		event && event.preventDefault();
		$('.pre-order-form').fadeOut(500, function() {
			$( '.design-stats' ).fadeTo( 200 , 1 , function () {
 			 $( 'ul.nav.nav-pills' ).fadeTo( 200 , 1 , function () {
 			 		$('.button-to-preorder').removeClass('disabled');
 			 })
			})
		})
	},
	
	
	render: function () {
		var content = this.template({
			design: this.model,
			designer: this.model.designer(),
			preOrders: this.model.preOrders().length,
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
			$('ul.nav.nav-pills').fadeTo('slow', 0.3);	
			$('.design-stats').fadeTo('slow', 0.3, function() {
				 $( ".pre-order-form" ).fadeIn( 500 , function () {
					 // $('#design_title').focus();
				 })
			})
		}
	}

});
