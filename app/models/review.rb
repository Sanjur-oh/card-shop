class Review < ApplicationRecord
    has_many :shoe_reviews
    has_many :shoes, through: :shoe_reviews

    validates :description, length: {minimum: 10, maximum: 55}
    validates :rating, length: {greater_than_or_equal_to: 1, less_than_or_equal_to: 5}
end
