Rails.application.routes.draw do

  scope '/api' do
    mount_devise_token_auth_for 'User', at: '/auth'
    resources :pals, except: [:new, :edit]
  end

end
