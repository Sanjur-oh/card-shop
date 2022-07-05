class CartItemSerializer < ActiveModel::Serializer
  attributes :id, :carted
  has_one :shoe
  has_one :cart
end
