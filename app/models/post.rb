class Post < ApplicationRecord

 # mount_uploader :image, ImageUploader
has_one_attached :post_image
  belongs_to :author
  belongs_to :user
end
