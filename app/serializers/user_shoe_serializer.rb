class UserShoeSerializer < ActiveModel::Serializer
  attributes :id, :shoeName, :brand, :colorway, :retailPrice, :image_url
  has_one :user
  has_one :shoe

end
