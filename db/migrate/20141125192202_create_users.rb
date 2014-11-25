class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :email, presence: true
      t.string :password_digest, presence: true
      t.string :session_token, presence: true
      t.string :name, presence: true

      t.timestamps
    end
    add_index(:users, :email, unique: true )
  end
end
