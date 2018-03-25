class CreateDays < ActiveRecord::Migration[5.1]
  def change
    create_table :days do |t|
      t.integer :count
      t.integer :day
      t.integer :level

      t.timestamps
    end
  end
end
