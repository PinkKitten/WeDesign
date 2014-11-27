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
end
