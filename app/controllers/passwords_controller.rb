# this needs testing and work done
class PasswordsController < ApplicationController

    skip_before_action :authorize, only: :reset
    
    def reset
        user = User.find_by(email: params[:email])
        if user
            user.reset_password!(params[:password])
            render json: user, status: :ok
        else
            render json: {error: "Email not Found"}, status: :not_found
        end
    end

    # def forgot 
    #     if params[:email].blank?    #checks if email is present
    #         return render json: {error: 'Email not present'}
    #     end

    #     @user = User.find_by_email(params[:email]) #if present find by email could be: user not @user 

    #     if @user.present?
    #         @user.generate_password_token!
    #         #UserMailer.forgot(@user).deliver_now    #sends welcome email 
    #         render json: {status: 'ok'}, status: :ok
    #     else
    #         render json: {error: ['Email address not found. Please try again']}, status: :not_found
    #     end
    # end

    # def reset
    #     token = params[:token].to_s

    #     if params[:email].blank?
    #      return render json: {error: 'Token not present.'}
    #     end

    #     user = User.find_by(reset_password_token: token)

    #     if user.present? && user.password_token_valid?
    #         if user.reset_password!(params[:password])
    #             render json: { status: 'ok' }, status: :ok
    #         else
    #             render json: {error: user.errors.full_messages }, status: :unprocessable_entity
    #         end
    #     else
    #         render json: {error: ['Link not valid or expired. Try generating a new one.']}, status: :not_found
    #     end
    # end
    
end
