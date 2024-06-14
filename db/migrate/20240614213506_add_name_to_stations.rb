class AddNameToStations < ActiveRecord::Migration[7.1]
  def change
    add_column :stations, :name, :string
  end
end
