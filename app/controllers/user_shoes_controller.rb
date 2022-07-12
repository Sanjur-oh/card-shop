class UserShoesController < ApplicationController
    def index
        render json: UserShoe.all
    end

    def create
        user_shoes = UserShoe.create!(user_shoe_params)
        render json: user_shoe.user, serializer: UserShoeSerializer, status: :created
    end

    def destroy
        user_shoe = find_user_shoe
        user_shoe.destroy
        render json: {}
    end

    private

    def find_user_shoe
        UserShoe.find(params[:id])
    end

    def user_shoe_params
        params.permit(:shoe_id, :user_id)
    end
end
