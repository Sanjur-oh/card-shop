Rails.application.routes.draw do
  # Defines the root path route ("/")
  # root "articles#index"
  resources :user_shoes
  resources :shoes
  resources :users
  resources :sessions, only: [:create]


  
  # login/out and auth
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  get "/authorized_user", to: "users#show"
  get "/users", to: "users#index"
  post "/signup", to: "users#create"
  get "/me", to: "users#show"

  #Update user information
  patch 'user/update', to: "users#update"

  #password reset

  # get "password/reset", to: "password_resets#new"
  # post "password/reset", to: "password_resets#create"
  post "/reset", to: "passwords#reset"
  # post 'password/forgot', to: 'password#forgot'
  post 'password/reset', to: 'password#reset'   



  # patch 'shoes/update', to: "shoes#update"
  
  get "/cookie_click", to: 'sessions#click'
 
  # do i need this? is this complicating the home/index route
  get '*path', to: 'fallback#index', constraints: ->(req) { !req.xhr? && req.format.html? }
end


