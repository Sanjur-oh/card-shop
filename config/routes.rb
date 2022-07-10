Rails.application.routes.draw do
  # Defines the root path route ("/")
  # root "articles#index"
  resources :shoe_reviews
  resources :reviews
  resources :user_shoes
  resources :shoes
  resources :users

  # post 'password/forgot', to: 'password#forgot'
  # post 'password/reset', to: 'password#reset'
  
  get "/authorized_user", to: "users#show"
  get "/me", to: "users#show"
  post "/signup", to: "users#create"
 
 
  post "/reset", to: "passwords#reset"
  
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  get "/cookie_click", to: 'sessions#click'
 
  get "sign_up", to: "registrations#new"



  # do i need this? is this complicating the home/index route
  get '*path', to: 'fallback#index', constraints: ->(req) { !req.xhr? && req.format.html? }
end



  # route to test your configuration. but not sure if needed
  # get '/hello', to: 'application#hello_world'

  # needs work to get devise auth running
  # get 'home/index'
  #, to: 'home#index'
  # root 'home#index'