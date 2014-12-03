class AddFilePickerFieldtoDesigns < ActiveRecord::Migration
  def change
    add_column :designs, :filepicker_url, :string
  end
end
