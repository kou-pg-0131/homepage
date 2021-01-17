resource "aws_acm_certificate" "main" {
  domain_name       = local.domain
  validation_method = "DNS"
  tags              = { Name = local.prefix }
}
