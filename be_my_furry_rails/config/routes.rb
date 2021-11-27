Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    namespace :v1 do
      resources :shelters do
        resources :pets, shallow: true do
          resources :likes, shallow: true, only: [:create, :destroy]
        end
      end
      resources :users, only: [:create]
      resource :session, only: [:create, :destroy]
    end
  end
end
