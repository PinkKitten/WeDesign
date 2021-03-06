json.(@design, :id, :filepicker_url, :title, :designer_id, :challenge_id, :description, :challenge_rank, :created_at)

json.currentUser do
	json.name @current_user.name
end
	
json.preOrders @design.votes do |preOrder|
	json.(preOrder, :id, :challenge_id, :user_id, :design_id, :message, :created_at)
	json.user do 
		json.id preOrder.voter.id
		json.name preOrder.voter.name
	end
end

json.preOrderUsers @design.pre_order_users do |user|
	json.(user, :id, :name, :email, :created_at)
end

json.comments @design.comments do |comment|
	json.(comment, :id, :user_id, :design_id, :body, :created_at)
	json.author do 
		json.id comment.author.id
		json.name comment.author.name
	end
end

json.designer do
	json.id @design.designer.id
	json.name @design.designer.name
end
