class AddToChallengeTable < ActiveRecord::Migration
  def change
    add_column :challenges, :background_img, :string, default: "assets/tshirt.png"
  end
end
