json.array! @challenges do |challenge|
	json.(challenge, :id, :name, :category, :end_date, :description, :background_img, :admin_id, :created_at)
	json.designs challenge.submitted_designs do |design|
		json.(design, :id, :design_img, :title, :designer_id, :challenge_id, :description, :challenge_rank, :created_at)
	end
end

