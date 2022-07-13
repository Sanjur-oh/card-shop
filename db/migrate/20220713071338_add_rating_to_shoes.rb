class AddRatingToShoes < ActiveRecord::Migration[7.0]
  def change
    add_column :shoes, :rating, :integer
  end
end
