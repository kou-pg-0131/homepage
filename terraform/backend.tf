terraform {
  backend "s3" {
    bucket  = "kou-portfolio-tfstates"
    region  = "us-east-1"
    key     = "terraform.tfstate"
    profile = "default"
  }
}
