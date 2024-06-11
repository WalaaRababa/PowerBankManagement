class Warehouse < ApplicationRecord
    has_many:power_banks
    has_many:stations
    validate :name,presence:true
end
