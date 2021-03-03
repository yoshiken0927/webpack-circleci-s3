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

resource "aws_s3_bucket_public_access_block" "example" {
  bucket = aws_s3_bucket.b.id

  block_public_acls       = true
  block_public_policy     = true
  ignore_public_acls      = true
  restrict_public_buckets = true
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