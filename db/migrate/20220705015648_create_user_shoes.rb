class CreateUserShoes < ActiveRecord::Migration[7.0]
  def change
    create_table :user_shoes do |t|
      t.references :user, null: false, foreign_key: true
      t.references :shoe, null: false, foreign_key: true

      t.timestamps
    end
  end
end
