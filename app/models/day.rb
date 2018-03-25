class Day < ApplicationRecord
    belongs_to :tracker
    has_many :stories
end
