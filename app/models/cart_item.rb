class CartItem < ApplicationRecord
  belongs_to :shoe
  belongs_to :cart
end
