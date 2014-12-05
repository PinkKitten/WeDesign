WeDesign.Views.ChallengeDesignShowInfo = Backbone.CompositeView.extend({
	tagName: "div",
	className: "",	
	
  template: JST['designs/challenge-design-show-info'],
	
	initialize: function (options) {
		this.allPreOrders = options.allPreOrders;
		this.listenTo(this.model, 'sync add', this.render);
		this.listenTo(this.model.preOrders(), 'add', this.render);
		this.daysLeft = options.daysLeft;
		this.totalPreOrders = this.model.preOrders().length;
	},
	
	events: {
		'click button.button-to-preorder': 'renderPreOrderForm',
		'submit': 'addPreOrder',
		'click .close-form': 'closePreOrderForm',
	},
	
	addPreOrder: function (event) {
		event.preventDefault();
		var target = $(event.currentTarget).find('form');
		var attr = target.serializeJSON();
		var order = new WeDesign.Models.Vote(attr['pre-order']);
		var terms = document.getElementById('terms-and-conditions').checked;
		if (!terms) {
			//render error message
			return
		}
		order.set({
			design_id: this.model.id,
			challenge_id: this.model.get('challenge_id')
		});
		order.save({}, {
			success: function() {
				this.model.preOrders().add(order);
				this.closePreOrderForm();
				$('.order-count').html(this.model.preOrders().length);
				this.totalPreOrders += 1;
				var percentVotes = Math.floor(this.model.preOrders().length / (this.totalPreOrders) * 100);
				$('#percent-votes').html(percentVotes + "%");
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
		var percentVotes = Math.floor(this.model.preOrders().length / this.totalPreOrders * 100);
		if (!percentVotes) {
			percentVotes = 0;
		}
		var content = this.template({
			design: this.model,
			designer: this.model.designer(),
			preOrders: this.model.preOrders().length,
			percentVotes: percentVotes,
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
					 $('.terms-and-conditions').focus();
				 })
			})
		}
	}

});
