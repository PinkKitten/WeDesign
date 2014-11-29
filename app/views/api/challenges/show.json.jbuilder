json.(@challenge, :id, :name, :category, :end_date, :description, :background_img, :admin_id, :created_at)

json.designs @challenge.submitted_designs do |design|
	json.(design, :id, :design_img, :title, :designer_id, :challenge_id, :created_at)
	json.preOrderUsers design.pre_order_users do |user|
		json.(user, :id, :name, :email, :created_at)
	end
	json.comments design.comments do |comment|
		json.(comment, :id, :user_id, :design_id, :body, :created_at)
	end
end

