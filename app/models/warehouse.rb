class Warehouse < ApplicationRecord
    has_many:power_banks
    has_many:stations
    validates :name,presence:true
end
