class SessionsController < ApplicationController
  def new
    render :new
  end
  
  def create
    @user = User.find_by_credentials(params[:user][:email],
                                params[:user][:password])
    if @user 
      login!(@user)
      redirect_to root_url
    else
      flash.now[:errors] = ['Invalid email and/or password']
      render :show
    end
      
  end
  
  def show
    render :show
  end
  
  def destroy
   logout!
   redirect_to session_url
  end

end
