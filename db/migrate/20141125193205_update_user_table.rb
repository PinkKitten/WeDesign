class UpdateUserTable < ActiveRecord::Migration
  def change
    drop_table :users
    
    create_table :users do |t|
      t.string :email, null: false
      t.string :password_digest, null: false
      t.string :session_token, null: false
      t.string :name, null: false

      t.timestamps
    end
    add_index(:users, :email, unique: true)
    
  end
end
