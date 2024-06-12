class ApplicationController < ActionController::API
    before_action :authorize_request
  
    private
  
    def authorize_request
      token = request.headers['Authorization']&.split(' ')&.last
      if token
        decoded_token = decode_token(token)
        if decoded_token
          @current_user = User.find_by(id: decoded_token['user_id'])
          render json: { error: 'Unauthorized' }, status: :unauthorized unless @current_user
        else
          render json: { error: 'Invalid token' }, status: :unauthorized
        end
      else
        render json: { error: 'Missing token' }, status: :unauthorized
      end
    end
  
    def decode_token(token)
      JWT.decode(token, ENV['SECRET_KEY_BASE'], true, { algorithm: 'HS256' })[0]
    rescue JWT::DecodeError
      nil
    end
  
    def authorize_admin
        render json: { error: 'Unauthorized' }, status: :unauthorized unless @current_user&.role == 'admin'
      end
      
  end
  