class AddTrackerReferenceToDays < ActiveRecord::Migration[5.1]
  def change
    add_reference :days, :tracker, foreign_key: true
  end
end
