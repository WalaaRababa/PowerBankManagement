require 'rails_helper'

RSpec.describe User, type: :model do
  it "is valid with valid attributes" do
    user = User.new(name: "John", email: "john@example.com", password: "password", role: "admin")
    expect(user).to be_valid
  end

  it 'is not valid without an email' do
    user = User.new(name: 'John Doe', password: 'password', role: 'admin')
    expect(user).to_not be_valid
  end

end
