class CreateTrackers < ActiveRecord::Migration[5.1]
  def change
    create_table :trackers do |t|
      t.text :levels
      t.string :name

      t.timestamps
    end
  end
end
