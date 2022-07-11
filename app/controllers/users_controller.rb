class UsersController < ApplicationController
    # skip_before_action :authorize, only: :create

    # def create
    #     user = User.create!(user_params)
    #     session[:user_id] = user.id
    #     render json: user, status: :created
    # end

    def index
        render json: User.all, status: :ok
    end

    # def show
    #     user = find_user
    #     render json: user, status: :ok
    # end

    def show
        user = User.find_by(id: session[:user_id])
        if user
            render json: user
        else
            render json: { error: "Not authorized" }, status: :unauthorized
        end
    end

    def create
        user = User.create!(user_params)
        if user
          render json: user
        else
          render json: { error: user.errors.messages }, status: 422
        end
    end

    def update
        user = User.find(params[:id])
        if user.update!(user_params)
          render json: user
        else
          render json: { error: user.errors.messages }, status: 422
        end
    end
   
    def destroy
        user = User.find(params[:id])
        if user.destroy
          head :no_content
        else
          render json: { error: "User not found" }, status: 422
        end
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
        #     user = find_user
        #     render json: user, status: :ok
        # end


        # def update 
        #     # user.update!(password: params[:password])
        #     current_user.update!(user_params)
        #     render json: user
        # end

        # def destroy
        #     current_user.destroy
        #     head :no_content, status: :ok
        # end

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