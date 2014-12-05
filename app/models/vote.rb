class Vote < ActiveRecord::Base
  validates :challenge, :voter, :design_id, presence: true
  
  belongs_to(
    :challenge,
    class_name: "Challenge",
    foreign_key: :challenge_id,
    primary_key: :id
  )
  
  belongs_to(
    :voter,
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
