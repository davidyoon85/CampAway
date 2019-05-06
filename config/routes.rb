Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create]
    resource :session, only: [:create, :destroy]
    resources :spots, only: [:create, :index, :show, :destroy] do
      resources :reviews, only: [:create, :index, :update]
      resources :bookings, only: [:create]
    end
    resources :reviews, only: [:show, :destroy]
    resources :bookings, only: [:index, :show, :destroy]
  end
  root "static_pages#root"
end
