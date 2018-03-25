Rails.application.config.middleware.use OmniAuth::Builder do
    provider :facebook, '1040632256083852' , '6150b944d299e48285aa57994e2117fd'
  end
  