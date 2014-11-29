WeDesign.Views.ChallengeDesignShowComments = Backbone.CompositeView.extend({
	tagName: "div",
	className: "",	
	
  template: JST['designs/challenge-design-show-comments'],
	
	initialize: function () {
		this.listenTo(this.model, 'sync', this.render)
	},
	
	events: {
		'submit': 'addNewComment'
	},
	
	addComment: function (comment) {
		var commentShow = new WeDesign.Views.ChallengeDesignShowCommentsItem({
			model: comment
		});
		this.addSubview('.list-comments', commentShow);
	},
	
	addNewComment: function (event) {
		event.preventDefault();
		var body = this.$el.find('textarea').val();
		var comment = new WeDesign.Models.Comment({
			body: body,
			design_id: this.model.id
		});
		comment.save({}, {
			success: function () {
				this.model.comments().set(comment, {remove: false} );
				this.render();
			}.bind(this)
		})
	},
	
	render: function () {
		var content = this.template({
			comment: this.model
		});
		this.$el.html(content);
		this.renderComments();
		this.renderNew();
		return this;
	},
	
	renderComments: function () {
		var comments = this.model.comments().models;
		_(comments).each( function (comment) {
			this.addComment(comment);
		}.bind(this));
	},
	
	renderNew: function () {
		var newView = new WeDesign.Views.CommentNew();
		this.$el.find('.new-comment-form').html(newView.render().$el)
	}

});
