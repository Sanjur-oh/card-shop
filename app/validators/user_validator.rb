class UserValidator < ActiveModel::Validator
    def validate(record)
        if contains_invalid_characters(record.username) == true
            record.errors.add(:user, "Username may not include special characters. (!@%&,/.\#$*) are not allowed")
        end
    end

    def contains_invalid_characters(text)
        not_allowed_regex = /!|@|%|&|,|\/|\.|\#|\$|\*/
        match_count = text.match(not_allowed_regex)
        match_count.present?
    end
end