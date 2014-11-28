class CreateVotes < ActiveRecord::Migration
  def change
    create_table :votes do |t|
      t.string  :challenge_id, null: false
      t.string :user_id, null: false
      
      t.timestamps
    end
  end
end
