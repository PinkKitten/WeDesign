# == Schema Information
#
# Table name: users
#
#  id              :integer          not null, primary key
#  email           :string(255)      not null
#  password_digest :string(255)      not null
#  session_token   :string(255)      not null
#  name            :string(255)      not null
#  created_at      :datetime
#  updated_at      :datetime
#

class User < ActiveRecord::Base
  validates :email, :password_digest, :session_token, :name, presence: true
  validates :password, length: { minimum: 6, allow_nil: true }
  validates :email, uniqueness: true
  
  attr_reader :password
  
  after_initialize :ensure_session_token!
  
  has_many(
    :challenges,
    class_name: "Challenge",
    foreign_key: :admin_id,
    primary_key: :id
    )
  
  def self.find_by_credentials(email, password)
    user = User.find_by_email(email)
    return nil if !user
    user.is_password?(password) ? user : nil
  end
  
  def set_session_token
   SecureRandom.urlsafe_base64(16)
  end
  
  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end
  
  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end
  
  def reset_session_token!
    self.session_token = set_session_token
    self.save
    self.session_token
  end
  
  private
  def ensure_session_token!
    self.session_token ||= set_session_token
  end
end
