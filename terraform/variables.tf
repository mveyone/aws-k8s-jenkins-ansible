variable "region" {
  type    = string 
  default = "us-east-1"
}

variable "ami" {
  type    = string 
  default = "ami-06878d265978313ca"
}

variable "public_key" {
  description = "ssh public key"
  default = "~/.ssh/id_rsa.pub" 
}