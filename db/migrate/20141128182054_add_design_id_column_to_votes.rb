class AddDesignIdColumnToVotes < ActiveRecord::Migration
  def change
    add_column :votes, :design_id, :integer, null: false
    remove_column :votes, :challenge_id
    remove_column :votes, :user_id, :integer
    add_column :votes, :challenge_id, :integer, null: false
    add_column :votes, :user_id, :integer, null: false
  end
end
