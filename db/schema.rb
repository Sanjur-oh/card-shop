# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.0].define(version: 2022_07_07_085041) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "cart_items", force: :cascade do |t|
    t.boolean "carted"
    t.bigint "shoe_id", null: false
    t.bigint "cart_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["cart_id"], name: "index_cart_items_on_cart_id"
    t.index ["shoe_id"], name: "index_cart_items_on_shoe_id"
  end

  create_table "carts", force: :cascade do |t|
    t.integer "price"
    t.bigint "user_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id"], name: "index_carts_on_user_id"
  end

  create_table "reviews", force: :cascade do |t|
    t.string "description"
    t.integer "rating"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "shoe_reviews", force: :cascade do |t|
    t.bigint "shoe_id", null: false
    t.bigint "review_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["review_id"], name: "index_shoe_reviews_on_review_id"
    t.index ["shoe_id"], name: "index_shoe_reviews_on_shoe_id"
  end

  create_table "shoes", force: :cascade do |t|
    t.string "shoeName"
    t.string "brand"
    t.string "colorway"
    t.integer "retailPrice"
    t.string "image_url"
    t.string "stockX"
    t.string "ebay"
    t.string "goat"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "user_shoes", force: :cascade do |t|
    t.bigint "user_id", null: false
    t.bigint "shoe_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["shoe_id"], name: "index_user_shoes_on_shoe_id"
    t.index ["user_id"], name: "index_user_shoes_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "email", null: false
    t.string "password_digest"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "username"
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.boolean "admin", default: false
    t.string "name"
  end

  add_foreign_key "cart_items", "carts"
  add_foreign_key "cart_items", "shoes"
  add_foreign_key "carts", "users"
  add_foreign_key "shoe_reviews", "reviews"
  add_foreign_key "shoe_reviews", "shoes"
  add_foreign_key "user_shoes", "shoes"
  add_foreign_key "user_shoes", "users"
end
