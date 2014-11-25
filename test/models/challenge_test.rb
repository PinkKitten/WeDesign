# == Schema Information
#
# Table name: challenges
#
#  id          :integer          not null, primary key
#  name        :string(255)      not null
#  category    :string(255)      not null
#  end_date    :date             not null
#  description :text             not null
#  admin_id    :integer          not null
#  created_at  :datetime
#  updated_at  :datetime
#

require 'test_helper'

class ChallengeTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
