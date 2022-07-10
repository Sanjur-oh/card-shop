class ShoeReview < ApplicationRecord
  belongs_to :shoe
  belongs_to :review
  belongs_to :user
end
