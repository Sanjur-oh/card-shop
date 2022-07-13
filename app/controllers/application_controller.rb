class ApplicationController < ActionController::API
    include ActionController::Cookies
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity
    # before_action :authorize
    # before_action :is_admin

    #Shows current user (user logged in)
    def current_user
      User.find_by(id: session[:user_id])
    end

    # def authorize
    #   render json: {errors: ["Not authorized"]}, status: :unauthorized unless current_user
    # end

    # def authorized
    #   return render json: { error: "Not Authorized" }, status: :unauthorized unless logged_in?
    # end
  

    # def is_admin
    #   return render json: {errors: ["Not authorized"]}, status: :unauthorized unless current_user.admin
    # end


    private

    def render_not_found invalid
      render json: {"error": "#{invalid.model} not found"}, status: :not_found
    end
  
    def render_unprocessable_entity invalid
      render json: {"errors": invalid.record.errors.full_messages}, status: :unprocessable_entity
    end
  
  end

      # #still not sure if needed comment out for now also route
    # def hello_world
    #   session[:count] = (session[:count] || 0) + 1
    #   render json: { count: session[:count] }
    # end
