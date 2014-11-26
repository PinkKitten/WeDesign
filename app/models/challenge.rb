# == Schema Information
#
# Table name: challenges
#
#  id             :integer          not null, primary key
#  name           :string(255)      not null
#  category       :string(255)      not null
#  end_date       :date             not null
#  description    :text             not null
#  admin_id       :integer          not null
#  created_at     :datetime
#  updated_at     :datetime
#  background_img :string(255)      default("assets/tshirt.png")
#

class Challenge < ActiveRecord::Base
  validates :name, :category, :end_date, :description, :admin, presence: true
  
  belongs_to(
    :admin,
    class_name: "User",
    foreign_key: :admin_id,
    primary_key: :id
  )
end
