class User < ApplicationRecord
    has_many :power_banks
    validate :email, presence: true,uniqueness: true
    validate :role,presence: true
    # check role for defualt valu>> may be make it later 
end
