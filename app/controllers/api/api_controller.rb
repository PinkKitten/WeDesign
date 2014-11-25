module Api
  class ApiController < ApplicationController
    before_action :require_signed_in!

    def require_signed_in!
      redirect_to new_session_url unless logged_in?
    end
    
  end
end
