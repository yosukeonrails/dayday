class AddUserReferenceToTrackers < ActiveRecord::Migration[5.1]
  def change
    add_reference :trackers, :user, foreign_key: true
  end
end
