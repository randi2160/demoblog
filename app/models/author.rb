class Author < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  #mount_uploader :image, ImageUploader
  has_one_attached :authorpost
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable
end
