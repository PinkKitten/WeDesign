Rails.application.routes.draw do
  root to: 'static_pages#root'

  resources :users
  resource :session, only: [:new, :create, :destroy]
  
  namespace :api, defaults: { format: :json } do
    resources :challenges, except: [:new, :edit] do 
      resources :designs, only: [:show]
    end
    resources :designs # , except: [:new, :edit, :update]
    resources :comments, only: [:create]
    resources :home
  end
  
end
