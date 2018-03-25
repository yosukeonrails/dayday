class AddMonthYearToDays < ActiveRecord::Migration[5.1]
  def change
    add_column :days, :month, :integer
    add_column :days, :year, :integer
  end
end
