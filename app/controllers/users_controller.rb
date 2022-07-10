class UsersController < ApplicationController
    # skip_before_action :authorize, only: :create

    def create
        user = User.create!(user_params)
        session[:user_id] = user.id
        render json: user, status: :created
    end

    def index
        render json: User.all, status: :ok
    end


    def show
        render json: current_user, status: :ok
    end

    def show
        user = find_user
        render json: user, status: :ok
    end


    def update 
        # user.update!(password: params[:password])
        current_user.update!(user_params)
        render json: user
    end

    def destroy
        current_user.destroy
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



    # def show
    #     if current_user
    #         render json: current_user, status: :ok
    #     else
    #         render json: 'Not Authenticated', status: :unauthorized
    #     end
    # end

    # def create
        #     user = User.create(user_params)
        #     if user.valid?
        #         render json: user, status: :created
        #     else
        #         render json: { errors: user.errors.full_messages}, status: :unprocessable_entity
        #     end
        # end