class ApplicationController < ActionController::API
    include ActionController::Cookies

    # rescue_from ActiveRecord::RecordNotFound, with: :render_not_found
    # rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity
    
    #still not sure if needed comment out for now also route
    def hello_world
      session[:count] = (session[:count] || 0) + 1
      render json: { count: session[:count] }
    end

    # def current_user
    #   User.find_by(id: session[:user_id])
    # end
  end