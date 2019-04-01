class CreateSpots < ActiveRecord::Migration[5.2]
  def change
    create_table :spots do |t|
      t.string :title, null: false
      t.float :lat, null: false
      t.float :long, null: false
      t.text :body, null: false
      t.integer :host_id, null: false
      
      t.integer :price, null: false
      t.integer :group_size, null: false
      t.boolean :campfire, null: false
      t.boolean :pets_allow, null: false
      t.string :check_in, null: false
      t.string :check_out, null: false

      t.timestamps
    end
    add_index :spots, :host_id
  end
end
