class Design < ActiveRecord::Base
  validates :design_img, :title, :designer, presence: true
  
  belongs_to(
    :designer,
    class_name: "User",
    foreign_key: :designer_id,
    primary_key: :id
  ) 
  
  belongs_to(
    :challenge,
    class_name: "Challenge",
    foreign_key: :challenge_id,
    primary_key: :id
  )
  
  has_many(
    :votes,
    class_name: "Vote",
    foreign_key: :design_id,
    primary_key: :id
  )
  
  has_many(
    :pre_order_users,
    through: :votes,
    source: :voter
  )
end
