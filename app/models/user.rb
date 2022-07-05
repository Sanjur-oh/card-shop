class User < ApplicationRecord
    has_secure_password

    has_many :user_shoes
    has_many :shoes, through: :user_shoes

    validates :email, presence: true
    validates :username, presence: true
    validates_with UserValidator

    
end
