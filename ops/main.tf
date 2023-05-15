provider "aws" {
  region              = "us-east-1"
  allowed_account_ids = ["919759177803"] # CodaBool
}

terraform {
  required_version = ">= 1.3.6, < 2.0.0"
  backend "s3" {
    bucket = "codabool-tf"
    key    = "bayhacks.tfstate"
    region = "us-east-1"
  }
}

locals {
  name = "bayhacks.codabool.com"
}

resource "aws_s3_bucket" "main" {
  bucket = local.name
  force_destroy = true
}

resource "aws_s3_bucket_policy" "public_read" {
  bucket = aws_s3_bucket.main.id
  policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Sid = "PublicReadGetObject",
        Effect = "Allow",
        Principal = "*",
        Action = "s3:GetObject",
        Resource = "${aws_s3_bucket.main.arn}/*",
        # Condition = {
        #   IpAddress = {
        #     "aws:SourceIp" = [
        #       "173.245.48.0/20",
        #       "103.21.244.0/22",
        #       "103.22.200.0/22",
        #       "103.31.4.0/22",
        #       "141.101.64.0/18",
        #       "108.162.192.0/18",
        #       "190.93.240.0/20",
        #       "188.114.96.0/20",
        #       "197.234.240.0/22",
        #       "198.41.128.0/17",
        #       "162.158.0.0/15",
        #       "104.16.0.0/13",
        #       "104.24.0.0/14",
        #       "172.64.0.0/13",
        #       "131.0.72.0/22"
        #     ]
        #   }
        # }
      }
    ]
  })
}

resource "aws_s3_bucket_website_configuration" "main" {
  bucket = aws_s3_bucket.main.id
  index_document {
    suffix = "index.html"
  }
  error_document {
    key = "index.html"
  }
}

locals {
  content_type_map = {
   "js" = "text/javascript"
   "html" = "text/html"
   "css"  = "text/css"
  }
}
# TODO: js file got binary/octet-stream instead of text/javascript

resource "aws_s3_object" "object" {
  depends_on = [aws_s3_bucket.main]
  bucket = local.name
  for_each = fileset(path.module, "../dist/**/*")
  key    = replace(each.value, "../dist", "")
  source = "${path.module}/${each.value}"
  # TODO: remove if vite bundler issue is resolved
  content_type = lookup(local.content_type_map, element(split(".", each.value), length(split(".", each.value)) - 1), "text/html")

  # TODO: make modular
  etag         = filemd5("../dist/${each.value}")
}