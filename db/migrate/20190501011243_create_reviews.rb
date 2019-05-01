class CreateReviews < ActiveRecord::Migration[5.2]
  def change
    create_table :reviews do |t|
      t.integer :author, null: false
      t.integer :spot_id, null: false
      t.text :description, null: false

      t.timestamps
    end

    add_index :reviews, :author
    add_index :reviews, :spot_id 
  end
end
