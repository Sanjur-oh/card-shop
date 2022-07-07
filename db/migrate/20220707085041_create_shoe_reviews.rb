class CreateShoeReviews < ActiveRecord::Migration[7.0]
  def change
    create_table :shoe_reviews do |t|
      t.references :shoe, null: false, foreign_key: true
      t.references :review, null: false, foreign_key: true

      t.timestamps
    end
  end
end
