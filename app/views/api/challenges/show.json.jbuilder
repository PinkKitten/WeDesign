json.(@challenge, :id, :name, :category, :end_date, :description, :background_img, :admin_id, :created_at)

json.designs @challenge.submitted_designs do |design|
	json.(design, :id, :title)
end