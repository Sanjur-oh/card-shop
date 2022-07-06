class UserShoesController < ApplicationController
    def destroy
        user_shoe = find_user_shoe
        user_shoe.destroy
        render json: {}
    end

    private

    def find_user_shoe
        UserShoe.find(params[:id])
    end
end
