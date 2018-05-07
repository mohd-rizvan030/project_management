class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
	skip_before_action :verify_authenticity_token
	after_action :set_csrf_token

	protected
		def set_csrf_token
			if request.xhr?
				headers['X-CSRF-Token'] = "#{form_authenticity_token}"
			end
		end
end
