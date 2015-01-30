Rails.application.routes.draw do
  
  scope '/api' do
    resources :pals, except: [:new, :edit]
  end

end
