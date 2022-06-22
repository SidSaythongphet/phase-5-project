class UserSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :role
  has_one :family
end
