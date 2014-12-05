WeDesign.Views.ChallengeDesignShow = Backbone.CompositeView.extend({
	tagName: "div",
	className: "wrapper",	
	
  template: JST['designs/challenge-design-show'],
	
	initialize: function (options) {
		this.listenTo(this.model, 'sync', this.render);
		this.challenge = options.challenge;
		this.listenTo(this.challenge, 'sync', this.renderInfo)
	},
	
	events: {
		'click li.info': 'renderInfo',
		'click li.pre-orders': 'renderPreOrders',
		'click li.comments': 'renderComments'
	},
	
	render: function () {
		var content = this.template({
			design: this.model,
			preOrderCount: this.model.preOrders().length,
			commentsCount: this.model.comments().length
		});
		this.$el.html(content);
		this.renderInfo();
		return this;
	},
	
	renderInfo: function (event) {
		var endDate = new Date(this.challenge.get('end_date'));
	  var daysLeft = Math.ceil((endDate - Date.now()) / (24*3600*1000));
		if (event && event.type === 'click') {
			event.preventDefault();
			this._changeActiveState($(event.currentTarget));
		} else {
			this._changeActiveState(this.$el.find('.info'));
		}
		
		var allPreOrders = 0;
		var designs = this.challenge.designs();
		designs.forEach(function(design) {
			allPreOrders += design.preOrders().length;
		});
		
		var infoView = new WeDesign.Views.ChallengeDesignShowInfo({
			model: this.model,
			daysLeft: daysLeft,
			allPreOrders: allPreOrders
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
