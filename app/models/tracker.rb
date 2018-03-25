class Tracker < ApplicationRecord
    
    serialize :levels

    has_many :days
    belongs_to :user
end
