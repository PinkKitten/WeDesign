WeDesign.Collections.Challenges = Backbone.Collection.extend({
	
  model: WeDesign.Models.Challenge,
	url: "/api/challenges",
	
  comparator: function(challenge) {
    return challenge.get('created_at');
  },

	getOrFetch: function(id) {
		var challenges = this;
		var challenge = this.get(id);
		if(!challenge) {
			challenge = new WeDesign.Models.Challenge({ id: id });
			challenge.fetch({
				success: function () {
					challenges.add(challenge);
				}
			})
		} else {
			challenge.fetch();
		}
		return challenge;
	}
});
