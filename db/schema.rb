# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20141203235046) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "challenges", force: true do |t|
    t.string   "name",                                         null: false
    t.string   "category",                                     null: false
    t.date     "end_date",                                     null: false
    t.text     "description",                                  null: false
    t.integer  "admin_id",                                     null: false
    t.datetime "created_at"
    t.datetime "updated_at"
    t.string   "background_img", default: "assets/tshirt.png"
  end

  create_table "comments", force: true do |t|
    t.integer  "user_id",    null: false
    t.integer  "design_id",  null: false
    t.text     "body",       null: false
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "designs", force: true do |t|
    t.string   "title"
    t.integer  "designer_id",    null: false
    t.integer  "challenge_id"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.text     "description"
    t.integer  "challenge_rank"
    t.string   "filepicker_url"
  end

  create_table "users", force: true do |t|
    t.string   "email",           null: false
    t.string   "password_digest", null: false
    t.string   "session_token",   null: false
    t.string   "name",            null: false
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "users", ["email"], name: "index_users_on_email", unique: true, using: :btree

  create_table "votes", force: true do |t|
    t.datetime "created_at"
    t.datetime "updated_at"
    t.integer  "design_id",    null: false
    t.integer  "challenge_id", null: false
    t.integer  "user_id",      null: false
    t.text     "message"
  end

end
