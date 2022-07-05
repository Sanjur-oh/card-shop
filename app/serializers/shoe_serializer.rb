class ShoeSerializer < ActiveModel::Serializer
  attributes :id, :shoeName, :brand, :colorway, :retailPrice, :image_url, :stockX, :ebay, :goat
end
