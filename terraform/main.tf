provider "aws" {
  region = "ap-northeast-1"
}

resource "aws_s3_bucket" "b" {
  bucket = "yoshino-tf-test-bucket"
  acl    = "private"

  tags = {
    Name        = "My bucket"
    Environment = "Dev"
  }
}

terraform {
  backend "s3" {
    region  = "ap-northeast-1"
    bucket  = "yoshino-tfstate"
    acl     = "private"
    key     = "yoshino-tf-test"
    encrypt = true
  }
}