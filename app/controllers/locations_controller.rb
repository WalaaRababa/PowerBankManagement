class LocationsController < ApplicationController
  before_action :authorize_request
  before_action :authorize_admin, only: [:create, :destroy]
    def create
        location=Location.new(location_params)
        if location.save
            render json:location,status:201
        else
            render json:location.errors,status:500
        end
    end
    def index
        locations = Location.all
        render json: locations,status:200
      end
      def show
        location = Location.find(params[:id])
        render json: location,status:200
      end
      def update
        location=Location.find(params[:id])
        if location
            location.update(location_params)
            render json: location,status:200
            else
           render json:{error:'Unable to update location'},status:400
        end
      end
      def destroy
        location=Locationocation.find(params[:id])
        if location
            location.destroy
            render json: location,status:200
            else
           render json:{error:'Unable to delete location'},status:400
        end
    end
      private 
    def location_params
        params.require(:location).permit(:name)
     end
end








