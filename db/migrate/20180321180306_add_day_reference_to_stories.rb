class AddDayReferenceToStories < ActiveRecord::Migration[5.1]
  def change
    add_reference :stories, :day, foreign_key: true
  end
end
