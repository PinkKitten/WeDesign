class AddToDesigns < ActiveRecord::Migration
  def change
    add_column :designs, :description, :text
    add_column :designs, :challenge_rank, :integer
  end
end
