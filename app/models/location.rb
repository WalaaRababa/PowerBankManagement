class Location < ApplicationRecord
    has_many:stations
    validate :name,presence:true
end
