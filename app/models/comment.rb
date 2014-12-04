class Comment < ActiveRecord::Base
  validates :body, :author, :design_id, presence: true
  
  belongs_to(
    :author,
    class_name: "User",
    foreign_key: :user_id,
    primary_key: :id
  )
  
  belongs_to(
    :design,
    class_name: "Design",
    foreign_key: :design_id,
    primary_key: :id
  )
end
