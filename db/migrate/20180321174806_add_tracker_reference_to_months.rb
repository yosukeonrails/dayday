class AddTrackerReferenceToMonths < ActiveRecord::Migration[5.1]
  def change
    add_reference :months, :tracker, foreign_key: true
  end
end
