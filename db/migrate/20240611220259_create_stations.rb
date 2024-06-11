class CreateStations < ActiveRecord::Migration[7.1]
  def change
    create_table :stations do |t|
      t.string :status
      t.references :location, null: true, foreign_key: true
      t.references :warehouse, null: true, foreign_key: true

      t.timestamps
    end
  end
end
