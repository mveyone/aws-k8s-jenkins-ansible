resource "aws_instance" "jenkins-instance" {
  ami           = var.ami
  instance_type = "t2.micro"
  key_name      = "ubuntu-key"
  security_groups = ["${aws_security_group.UbuntuSG.name}"]
  user_data = file("install_jenkins.sh")

  tags  = {
    Name  = "jenkins-EC2"
  }
}

resource "aws_instance" "ansible-instance" {
  ami           = var.ami
  instance_type = "t2.micro"
  key_name      = "ubuntu-key"
  security_groups = ["${aws_security_group.UbuntuSG.name}"]
  user_data = file("install_ansible-docker.sh")

  tags  = {
    Name  = "ansible-EC2"
  }
}

resource "aws_instance" "k8s-instance" {
  ami           = var.ami
  instance_type = "t2.medium"
  key_name      = "ubuntu-key"
  security_groups = ["${aws_security_group.UbuntuSG.name}"]
  user_data = file("install_k8s.sh")

  tags  = {
    Name  = "k8s-EC2"
  }
}

