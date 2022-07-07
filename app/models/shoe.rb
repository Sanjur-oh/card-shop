class Shoe < ApplicationRecord
    has_many :shoe_reviews
    has_many :reviews, through: :shoe_reviews

    has_many :user_shoes, dependent: :destroy
    has_many :users, through: :user_shoes
end
