# This file should ensure the existence of records required to run the application in every environment (production,
# development, test). The code here should be idempotent so that it can be executed at any point in every environment.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Example:
#
#   ["Action", "Comedy", "Drama", "Horror"].each do |genre_name|
#     MovieGenre.find_or_create_by!(name: genre_name)
#   end
user = User.create([{
  name: 'Admin',
  email: 'admin@gmail.com',
  password: '12345678',
  role:'admin'
},{
name: 'Mark Doe',
email: 'mark@gmail.com',
password: '12345678',
role:'user'
},{
  name: 'Ali Ahmad',
  email: 'ali@gmail.com',
  password: '12345678',
  role:'user'
  }]
)
location=Location.create([
  { name: 'Location A1' },
{ name: 'Location B2' },
{ name: 'Location C3' }])
warehouses = Warehouse.create([
  { name: 'Downtown Warehouse' },
  { name: 'Airport Warehouse' },
  { name: 'Main Warehouse' },
  { name: 'Central Warehouse' },
  { name: 'Distribution Warehouse' }
])
stations = Station.create([
  { status: 'Online', location_id: 1, warehouse_id: nil },
  { status: 'Offline', location_id: nil, warehouse_id: 1 },
  { status: 'Offline', location_id: 3, warehouse_id: nil },
  { status: 'Online', location_id: nil, warehouse_id: 2 },
  { status: 'Online', location_id: nil, warehouse_id: 3 }
])
power_banks = PowerBank.create([
  { id: 1, status: 'Available', station_id: 1, warehouse_id: nil, user_id: nil },
  { id: 2, status: 'In Use', station_id: 2, warehouse_id: nil, user_id: 2 },
  { id: 3, status: 'Available', station_id: nil, warehouse_id: 1, user_id: nil },
  { id: 4, status: 'Available', station_id: 3, warehouse_id: nil, user_id: nil },
  { id: 5, status: 'In Use', station_id: nil, warehouse_id: 2, user_id: 3 }
])

