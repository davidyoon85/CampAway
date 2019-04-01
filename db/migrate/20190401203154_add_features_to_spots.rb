class AddFeaturesToSpots < ActiveRecord::Migration[5.2]
  def change
    add_column :spots, :tent, :boolean, default: false
    add_column :spots, :sites, :integer
    add_column :spots, :parking, :boolean, default: false
    add_column :spots, :toilet, :boolean, default: false
    add_column :spots, :shower, :boolean, default: false
    add_column :spots, :hiking, :boolean, default: false
    add_column :spots, :biking, :boolean, default: false
    add_column :spots, :wildlife, :boolean, default: false
    add_column :spots, :paddling, :boolean, default: false
  end
end
