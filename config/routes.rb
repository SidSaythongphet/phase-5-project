Rails.application.routes.draw do
  scope :api do
    post "/signup", to: "families#create"
    get "/family", to: "families#show"
    delete "/logout", to: "family_sessions#destroy"
    post "/login", to: "family_sessions#create"
    post "/user_login", to: "user_sessions#create"
    resources :families, only: [:index, :show, :create]
    resources :users, only: [:index, :show, :create]
  end
end
