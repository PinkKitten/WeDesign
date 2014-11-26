class CreateDesigns < ActiveRecord::Migration
  def change
    create_table :designs do |t|
      t.string :design_img, null: false
      t.string :title
      t.integer :designer_id, null: false
      t.integer :challenge_id
      
      t.timestamps
    end
  end
end
