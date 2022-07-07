class ShoeReviewSerializer < ActiveModel::Serializer
  attributes :id
  has_one :shoe
  has_one :review
end
