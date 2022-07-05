class Shoe < ApplicationRecord
    has_many :cart_items
    has_many :carts, through: :cart_items

    has_many :user_shoes
    has_many :users, through: :user_shoes
end
