class Api::SpotsController < ApplicationController
    def index
        @spots = Spot.all
    end

    def create
        @spot = Spot.new(spot_params)
        if @spot.save!
            render "api/spots"
        else
            render json: ["Invalid inputs"], status: 401
        end
    end

    def show
        @spot = Spot.find(params[:id])
        render :show
    end

        private
    def spot_params
        params.require(:spot).permit(:host_id, :title, :body)
    end
end
