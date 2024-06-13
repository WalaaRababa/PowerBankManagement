class User < ApplicationRecord
    has_secure_password
    has_many :power_banks
    validates :email, presence: true,uniqueness: true
    validates :password, presence: true
    validates :role,presence: true
    # check role for defualt valu>> may be make it later 
end
