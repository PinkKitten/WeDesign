WeDesign.Views.ChallengeDesignShow = Backbone.CompositeView.extend({
	tagName: "div",
	className: "",	
	
  template: JST['designs/challenge-design-show'],
	
	initialize: function () {
		this.listenTo(this.model, 'sync', this.render)
	},
	
	events: {
		'click li.info': 'renderInfo',
		'click li.pre-orders': 'renderPreOrders',
		'click li.comments': 'renderComments'
	},
	
	render: function () {
		var content = this.template({
			design: this.model,
			preOrderCount: this.model.preOrderUsers().length,
			commentsCount: this.model.comments().length
		});
		this.$el.html(content);
		this.renderInfo();
		return this;
	},
	
	renderInfo: function (event) {
		if (event) {
			event.preventDefault();
			this._changeActiveState($(event.currentTarget));
		} else {
			this._changeActiveState(this.$el.find('.info'));
		}
		var infoView = new WeDesign.Views.ChallengeDesignShowInfo({
			model: this.model
		});
		this.$el.find('.design-content').html(infoView.render().$el);
	},
	
	renderPreOrders: function(event) {
		event.preventDefault();
		var preOrderView = new WeDesign.Views.ChallengeDesignShowPreOrders({
			model: this.model
		});
		this.$el.find('.design-content').html(preOrderView.render().$el);
		this._changeActiveState($(event.currentTarget));
	},
	
	renderComments: function(event) {
		event.preventDefault();
		var commentsView = new WeDesign.Views.ChallengeDesignShowComments({
			model: this.model
		});
		this.$el.find('.design-content').html(commentsView.render().$el);
		this._changeActiveState($(event.currentTarget));
	},
	
	_changeActiveState: function (target) {
		this.lastActive && this.lastActive.removeClass('active');
		target.addClass('active');
		this.lastActive = target;
	}

});
