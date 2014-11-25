class CreateChallenges < ActiveRecord::Migration
  def change
    create_table :challenges do |t|
      t.string :name, null: false
      t.string :category, null: false
      t.date :end_date, null: false
      t.text :description, null: false
      t.integer :admin_id, null: false
      
      t.timestamps
    end
  end
end
