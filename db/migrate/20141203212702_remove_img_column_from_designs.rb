class RemoveImgColumnFromDesigns < ActiveRecord::Migration
  def change
    remove_column :designs, :design_img
  end
end
