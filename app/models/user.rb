class User < ApplicationRecord
    has_secure_password

    has_many :user_shoes, dependent: :destroy
    has_many :shoes, through: :user_shoes

    #issue with validating name comes up nil in postman when patching
    validates :name, presence: true
    validates :username, presence: true
    validates_with UserValidator


    validates :email, presence: true
    # should only allow specific email addresses is it validates??
    validate :is_email_valid?


    def is_email_valid?
        if ["example@gmail.com", "example@yahoo.com", "example@hotmail.com"].include?(self.email)
            errors.add :base, "Only gmail, yahoo, hotmail allowed!"
        end
    end   

    #password reset
    def generate_password_token!
        self.reset_password_token = generate_token
        self.reset_password_sent_at = Time.now.utc
        save!
    end

    def password_token_valid?
        (self.reset_password_sent_at + 4.hours) > Time.now.utc
    end

    def reset_password! (password)
        self.reset_password_token = nil
        self.password = password
        save!
    end

    private

    def generate_token
        SecureRandom.hex(10)
    end

end
