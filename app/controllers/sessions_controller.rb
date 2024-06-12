class SessionsController < ApplicationController
  def create
    user = User.find_by(email: params[:email])
    if user && user.authenticate(params[:password])
      expiration_time = 24.hours.from_now.to_i
      payload = { 
        user_id: user.id,
        exp: expiration_time 
      }
      token = JWT.encode(payload, ENV['APP_SECRET_KEY'])
      render json: { message: 'Logged in successfully', token: token }, status: :ok
    else
      render json: { error: 'Invalid email or password' }, status: :unauthorized
    end
  end

  def destroy
    render json: { message: 'Logged out successfully' }, status: :ok
  end
end
