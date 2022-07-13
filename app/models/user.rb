class User < ApplicationRecord
    has_secure_password

    has_many :user_shoes, dependent: :destroy
    has_many :shoes, through: :user_shoes
    has_many :reviews

    #issue with validating name comes up nil in postman when patching
    validates :name, presence: true
    validates :username, presence: true
    validates_with UserValidator


    validates :email, presence: true
    validate :is_email_valid?


    # def is_email_valid
    #     if ["example@gmail.com", "example@yahoo.com", "example@hotmail.com"].include?(self.email)
    #         errors.add :base, "Only gmail, yahoo, hotmail allowed!"
    #     end
    # end   

   
    #uncomment and work on syntax for all three
    def is_email_valid?
        # unless email.match? ([/gmail.com/, /yahoo.com/, /hotmail.com/])
        unless email.match? (/gmail.com/)
            errors.add(:is_email_valid?, "only gmail, please")
        # errors.add(:is_email_valid?, "only gmail, yahoo, hotmail allowed!")
        end
    end   

    #password reset
    # def generate_password_token!
    #     self.reset_password_token = generate_token
    #     self.reset_password_sent_at = Time.now.utc
    #     save!
    # end

    # def password_token_valid?
    #     (self.reset_password_sent_at + 4.hours) > Time.now.utc
    # end

    def reset_password! (password)
        self.reset_password_token = nil
        # self.password = password
        save!
    end




    # private

    # def generate_token
    #     SecureRandom.hex(10)
    # end

end
