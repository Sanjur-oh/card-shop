class Shoe < ApplicationRecord

    # has_many :reviews

    has_many :user_shoes, dependent: :destroy
    has_many :users, through: :user_shoes
end
