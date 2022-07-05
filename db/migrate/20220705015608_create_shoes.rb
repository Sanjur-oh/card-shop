class CreateShoes < ActiveRecord::Migration[7.0]
  def change
    create_table :shoes do |t|
      t.string :shoeName
      t.string :brand
      t.string :colorway
      t.integer :retailPrice
      t.string :image_url
      t.string :stockX
      t.string :ebay
      t.string :goat

      t.timestamps
    end
  end
end
