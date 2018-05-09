class ApplicationController < ActionController::Base
  # protect_from_forgery with: :exception
  # before_action :authenticate_user!
	after_action :set_csrf_token

	protected
		def set_csrf_token
			if request.xhr?
				headers['X-CSRF-Token'] = "#{form_authenticity_token}"
			end
		end
end
