class Challenge < ActiveRecord::Base
  validates :name, :category, :end_date, :description, :admin, presence: true
  
  belongs_to(
    :admin,
    class_name: "User",
    foreign_key: :admin_id,
    primary_key: :id
  )
end
