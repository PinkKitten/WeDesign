WeDesign.Views.HomeShow = Backbone.View.extend({
	tagName: 'div',
	className: 'wrapper',
  template: JST['home/show'],
	
	events: {
		"scroll": "scrolling",
	},
	
	render: function () {
		var content = this.template();
		this.$el.html(content);
		return this;
	},
	
	scrolling: function (event) {
		console.log("scrolling");
	},
	
});

//
// $(window).scroll(function() {
//     console.log("scrolling")
// 	//will need to check multiple browsers, IE
// 	s = $("#box").scrollTop();
// 	console.log(s);
// 	$("#box img").css("-webkit-transform", "translateY(" + (s/2) + "px)");
// });

