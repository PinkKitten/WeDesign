class UpdateDesignImgField < ActiveRecord::Migration
  def change
    change_column :designs, :design_img, :text
  end
end
