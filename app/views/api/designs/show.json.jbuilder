json.(@designs, :id, :design_img, :title, :designer_id, :challenge_id, :created_at)

json.votes @designs.votes do |vote|
	json.(vote, :id, :challenge_id, :voter_id, :design_id, :created_at)
end