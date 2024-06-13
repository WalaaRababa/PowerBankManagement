class UsersController < ApplicationController
  before_action :authorize_request
  before_action :authorize_admin, only: [:create, :index]
    def create
        user=User.new(user_params)
        if user.save
            render json:user,status:201
        else
            render json:user.errors,status:500
        end
    end
    # def index
    #     users = User.all
    #     render json: users
    #   end
      #get all user have role is user
      def index
        users = User.where(role: 'user')
        render json: users
      end
      
      def show
        user = User.find(params[:id])
        render json: user
      end
      def update
        user=User.find(params[:id])
        if user
            user.update(user_params)
            render json: user,status:200
            else
           render json:{error:'Unable to update User'},status:400
        end
      end
      def destroy
        user=User.find(params[:id])
        if user
            user.destroy
            render json: user,status:200
            else
           render json:{error:'Unable to delete User'},status:400
        end
    end
      private 
    def user_params
        params.require(:user).permit(:name, :email, :password , :role)
     end
end
