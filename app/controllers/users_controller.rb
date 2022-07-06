class UsersController < ApplicationController

    def index
        render json: User.all, status: :ok
    end

    # def show
    #     if current_user
    #         render json: current_user, status: :ok
    #     else
    #         render json: 'Not Authenticated', status: :unauthorized
    #     end
    # end

    def show
        user = find_user
        render json: user, status: :ok
    end

    def create
        user = User.create(user_params)
        if user.valid?
            render json: user, status: :created
        else
            render json: { errors: user.errors.full_messages}, status: :unprocessable_entity
        end
    end

    def update 
        user = find_user
        # user.update!(password: params[:password])
        user.update!(user_params)
        render json: user
    end

    def destroy
        user = find_user
        user.destroy
        head :no_content, status: :ok
    end

    private

   def find_user
        User.find(params[:id])
   end

    def user_params
        params.permit(:name, :username, :email, :password, :password_digest)
    end
end
